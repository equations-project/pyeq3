#    pyeq3 is a collection of equations expressed as Python classes
#
#    Copyright (C) 2013 James R. Phillips
#    2548 Vera Cruz Drive
#    Birmingham, AL 35235 USA
#
#    https://github.com/equations-project/pyeq3
#
#    License: BSD-style (see LICENSE.txt in main source directory)

import numpy
import copy
import logging
from . import diffev

try:
    import scipy.interpolate
    import scipy.optimize
    import scipy.odr
except ImportError:
    pass
numpy.seterr(all="ignore")


class custom_prng_for_diffev(numpy.random.mtrand.RandomState):
    def __init__(self):
        numpy.random.mtrand.RandomState.__init__(self)
        numpy.random.seed(3)  # yield repeatable results
        self.max_index = 5000
        self.array = numpy.random.rand(self.max_index)
        self.index = 0

    def rand(self, inSize):
        if self.index + inSize > self.max_index:
            self.index = 0
        sidx = self.index
        eidx = self.index + inSize
        return_val = self.array[sidx:eidx]
        self.index += inSize
        return return_val


class SolverService(object):
    # these are taken from docs for scipy.optimize.minimize,
    # except for 'Levenberg=Marquardt'.
    # The algorithms 'L-BFGS-B' and 'TNC' are not on the list
    # as they are bounded versions of other algorithms listed here.
    ListOfNonLinearSolverAlgorithmNames = [
        "Levenberg-Marquardt",
        "NelderMead",
        "Powell",
        "CG",
        "BFGS",
        "Newton-CG",
        "Anneal",
        "COBYLA",
        "SLSQP",
    ]

    def __init__(self):
        self.fminIterationLimit = 2500
        self.fmin_xtol = 1.0e-16
        self.fmin_ftol = 1.0e-16
        self.fmin_FunctionLimit = 2500

    def SolveUsingLinear(self, inModel):
        logging.info("running SolveUsingLinear")
        if (inModel.CanLinearSolverBeUsedForSSQABS()) is False and (
            inModel.fittingTarget == "SSQABS"
        ):
            raise Exception("This equation cannot use a linear SSQ solver")
        inModel.solvedCoefficients = numpy.linalg.lstsq(
            inModel.dataCache.FindOrCreateAllDataCache(inModel).T,
            inModel.dataCache.allDataCacheDictionary["DependentData"],
            rcond=None,
        )[0]
        return inModel.solvedCoefficients

    def SolveUsingSimplex(self, inModel):
        logging.info("running SolveUsingSimplex")
        inModel.dataCache.FindOrCreateAllDataCache(inModel)
        try:
            x_guess = inModel.estimatedCoefficients.x
        except AttributeError:
            x_guess = inModel.estimatedCoefficients
        inModel.solvedCoefficients = scipy.optimize.fmin(
            inModel.CalculateAllDataFittingTarget,
            x_guess,
            maxiter=len(x_guess) * self.fminIterationLimit,
            maxfun=len(x_guess) * self.fmin_FunctionLimit,
            disp=0,
            xtol=self.fmin_xtol,
            ftol=self.fmin_ftol,
        )

        # Run one more time to update coefficients with bounds
        # (these are already accounted for in the fitting)
        inModel.CalculateAllDataFittingTarget(inModel.solvedCoefficients)
        return inModel.solvedCoefficients

    def SolveUsingDE(self, inModel):  # adapts to number of coefficients
        logging.info("running SolveUsingDE")
        crossoverProbabilityForGA = 0.75
        diffScaleForGA = 0.25

        numberOfCoefficients = len(inModel.GetCoefficientDesignators())

        oneThirdOfPopulationSizeForGA = 500 * numberOfCoefficients
        if oneThirdOfPopulationSizeForGA > 1500:
            oneThirdOfPopulationSizeForGA = 1500

        maxGenerationsForGA = 5 * numberOfCoefficients
        if maxGenerationsForGA > 25:
            maxGenerationsForGA = 25

        guessDivisorForGA = 10.0 * numberOfCoefficients
        if guessDivisorForGA > 50.0:
            guessDivisorForGA = 50.0

        inModel.dataCache.FindOrCreateReducedDataCache(inModel)

        numpy.random.seed(3)  # yield repeatable results
        largeValuesArray = (
            numpy.random.random(oneThirdOfPopulationSizeForGA * numberOfCoefficients)
            * 2000.0
            - 1000.0
        )
        smallValuesArray = (
            numpy.random.random(oneThirdOfPopulationSizeForGA * numberOfCoefficients)
            * 2.0
            - 1.0
        )
        tinyValuesArray = (
            numpy.random.random(oneThirdOfPopulationSizeForGA * numberOfCoefficients)
            * 0.002
            - 0.001
        )
        pop0 = numpy.append(
            largeValuesArray, numpy.append(smallValuesArray, tinyValuesArray)
        )
        numpy.random.shuffle(pop0)
        pop0 = pop0.reshape(oneThirdOfPopulationSizeForGA * 3, numberOfCoefficients)

        if inModel.estimatedCoefficients != []:
            # DE will overwrite these values, so use deepcopy
            pop0[0] = copy.deepcopy(inModel.estimatedCoefficients)

        depData = inModel.dataCache.reducedDataCacheDictionary["DependentData"]
        sufficientSolution = (max(depData) - min(depData)) / guessDivisorForGA
        de = diffev.DiffEvolver(
            inModel.CalculateReducedDataFittingTarget,
            pop0,
            crossover_rate=crossoverProbabilityForGA,
            scale=diffScaleForGA,
            prng=custom_prng_for_diffev(),
        )
        de.solve(sufficientSolution, maxGenerationsForGA)

        inModel.solvedCoefficients = de.best_vector
        return inModel.solvedCoefficients

    def SolveUsingSelectedAlgorithm(self, inModel, inAlgorithmName):
        logging.info(f"running SolveUsingSelectedAlgorithm: {inAlgorithmName}")
        if inAlgorithmName not in self.ListOfNonLinearSolverAlgorithmNames:
            raise Exception(
                f"{inAlgorithmName} was not in the list of known non-linear "
                "solver algorithm names. Please see the SolverService class definition."
            )

        inModel.dataCache.FindOrCreateAllDataCache(inModel)
        inModel.dataCache.FindOrCreateReducedDataCache(inModel)

        results = []
        # try with initial coefficients equal to 1
        try:
            if inAlgorithmName == "Levenberg-Marquardt":
                coeffs, unused = scipy.optimize.curve_fit(
                    inModel.WrapperForScipyCurveFit,
                    None,
                    inModel.dataCache.allDataCacheDictionary["DependentData"],
                    numpy.ones(len(inModel.GetCoefficientDesignators())),
                    maxfev=1000000,
                )
            else:
                coeffs = scipy.optimize.minimize(
                    inModel.CalculateAllDataFittingTarget,
                    numpy.ones(len(inModel.GetCoefficientDesignators())),
                    method=inAlgorithmName,
                )
            SSQ = inModel.CalculateAllDataFittingTarget(coeffs)
            results.append([SSQ, coeffs])
            logging.info("solved with initial coefficients equal to 1")
        except Exception:
            pass

        # try with initial coefficients from DE
        try:
            if inAlgorithmName == "Levenberg-Marquardt":
                coeffs, unused = scipy.optimize.curve_fit(
                    inModel.WrapperForScipyCurveFit,
                    None,
                    inModel.dataCache.allDataCacheDictionary["DependentData"],
                    inModel.deEstimatedCoefficients,
                    maxfev=1000000,
                )  # initial coefficients are all equal to 1
            else:
                coeffs = scipy.optimize.minimize(
                    inModel.CalculateAllDataFittingTarget,
                    inModel.deEstimatedCoefficients,
                    method=inAlgorithmName,
                )
            SSQ = inModel.CalculateAllDataFittingTarget(coeffs)
            results.append([SSQ, coeffs])
            logging.info("solved with initial coefficients from DE")
        except Exception:
            pass

        # try using estimated coefficients, if any
        if len(inModel.estimatedCoefficients) > 0:
            try:
                coeffs = inModel.estimatedCoefficients
                SSQ = inModel.CalculateAllDataFittingTarget(coeffs)
                results.append([SSQ, coeffs])
                logging.info("assigning estimated coefficients")
            except Exception:
                pass

            try:
                if inAlgorithmName == "Levenberg-Marquardt":
                    coeffs, unused = scipy.optimize.curve_fit(
                        inModel.WrapperForScipyCurveFit,
                        None,
                        inModel.dataCache.allDataCacheDictionary["DependentData"],
                        inModel.estimatedCoefficients,
                        maxfev=1000000,
                    )
                else:
                    coeffs = scipy.optimize.minimize(
                        inModel.CalculateAllDataFittingTarget,
                        inModel.estimatedCoefficients,
                        method=inAlgorithmName,
                    )
                SSQ = inModel.CalculateAllDataFittingTarget(coeffs)
                results.append([SSQ, coeffs])
                logging.info("solved using estimated coefficients, if any")
            except Exception:
                pass

        if results == []:
            return numpy.ones(len(inModel.GetCoefficientDesignators()))

        if len(results) > 1:
            results.sort(key=lambda item: item[0])

        inModel.solvedCoefficients = results[0][1]
        return inModel.solvedCoefficients

    def SolveUsingODR(self, inModel):
        logging.info("running SolveUsingODR")
        inModel.dataCache.FindOrCreateAllDataCache(inModel)
        modelObject = scipy.odr.Model(inModel.WrapperForODR)
        if len(inModel.dataCache.allDataCacheDictionary["Weights"]):
            dataObject = scipy.odr.Data(
                inModel.dataCache.allDataCacheDictionary["IndependentData"],
                inModel.dataCache.allDataCacheDictionary["DependentData"],
                inModel.dataCache.allDataCacheDictionary["Weights"],
            )
        else:
            dataObject = scipy.odr.Data(
                inModel.dataCache.allDataCacheDictionary["IndependentData"],
                inModel.dataCache.allDataCacheDictionary["DependentData"],
            )

        results = []

        # try with initial coefficients equal to 1
        try:
            myodr = scipy.odr.ODR(
                dataObject,
                modelObject,
                beta0=numpy.ones(len(inModel.GetCoefficientDesignators())),
                maxit=len(inModel.GetCoefficientDesignators())
                * self.fminIterationLimit,
            )
            # explicit ODR, faster forward-only finite differences for derivatives
            myodr.set_job(fit_type=0, deriv=0)
            out = myodr.run()
            coeffs = out.beta
            SSQ = out.sum_square
            if not numpy.any(numpy.isnan(coeffs)):
                results.append([SSQ, coeffs])
        except Exception:
            pass

        # try with initial coefficients from DE
        try:
            myodr = scipy.odr.ODR(
                dataObject,
                modelObject,
                beta0=inModel.deEstimatedCoefficients,
                maxit=len(inModel.GetCoefficientDesignators())
                * self.fminIterationLimit,
            )
            # explicit ODR, faster forward-only finite differences for derivatives
            myodr.set_job(fit_type=0, deriv=0)
            out = myodr.run()
            coeffs = out.beta
            SSQ = out.sum_square
            if not numpy.any(numpy.isnan(coeffs)):
                results.append([SSQ, coeffs])
        except Exception:
            pass

        # try using estimated coefficients, if any
        if len(inModel.estimatedCoefficients) > 0:
            try:
                coeffs = inModel.estimatedCoefficients
                SSQ = inModel.CalculateAllDataFittingTarget(coeffs)
                results.append([SSQ, coeffs])
            except Exception:
                pass

            try:
                myodr = scipy.odr.ODR(
                    dataObject,
                    modelObject,
                    beta0=inModel.estimatedCoefficients,
                    maxit=len(inModel.GetCoefficientDesignators())
                    * self.fminIterationLimit,
                )
                # explicit ODR, faster forward-only finite differences
                # for derivatives
                myodr.set_job(fit_type=0, deriv=0)
                out = myodr.run()
                coeffs = out.beta
                SSQ = out.sum_square
                if not numpy.any(numpy.isnan(coeffs)):
                    results.append([SSQ, coeffs])
            except Exception:
                pass

        if results == []:
            return numpy.ones(len(inModel.GetCoefficientDesignators()))

        if len(results) > 1:
            results.sort(key=lambda item: item[0])

        inModel.solvedCoefficients = results[0][1]
        return inModel.solvedCoefficients

    def SolveUsingSpline(self, inModel):
        logging.info("running SolveUsingSpline")
        data = inModel.dataCache.FindOrCreateAllDataCache(inModel)
        if inModel.GetDimensionality() == 2:
            # aargh! scipy univariate splines must be sorted by dependent data
            # sort based on https://stackoverflow.com/questions/13668393/
            list1 = data[0]
            list2 = inModel.dataCache.allDataCacheDictionary["DependentData"]

            (list1, list2) = [
                list(x)
                for x in zip(*sorted(zip(list1, list2), key=lambda pair: pair[0]))
            ]

            inModel.scipySpline = scipy.interpolate.UnivariateSpline(
                list1, list2, s=inModel.smoothingFactor, k=inModel.xOrder
            )
            inModel.solvedCoefficients = inModel.scipySpline._eval_args
            return inModel.solvedCoefficients
        else:
            inModel.scipySpline = scipy.interpolate.SmoothBivariateSpline(
                data[0],
                data[1],
                inModel.dataCache.allDataCacheDictionary["DependentData"],
                s=inModel.smoothingFactor,
                kx=inModel.xOrder,
                ky=inModel.yOrder,
            )
            inModel.solvedCoefficients = inModel.scipySpline.tck
            return inModel.solvedCoefficients

    # directly passing the distribution instance can yield
    # "can't pickle instancemethod"
    # exceptions, so the distribution name is passed instead
    def SolveStatisticalDistribution(
        self, distributionName, data, inCriteriaForUseInListSorting
    ):
        criteriaList = ["AIC", "AICc_BA", "nnlf"]
        if inCriteriaForUseInListSorting not in criteriaList:
            raise Exception(
                "Criteria to calculate for use in sorting was not in", str(criteriaList)
            )
        try:
            distribution = eval("scipy.stats." + distributionName)
        except Exception:
            return 0
        # only need to calculate these once
        eps = numpy.finfo(float).eps * 2.0
        data_min = data.min()
        data_max = data.max()
        data_mean = data.mean()
        data_range = data_max - data_min
        # note on precision "
        # "http://docs.scipy.org/doc/numpy/reference/generated/numpy.std.html
        data_std_dev = numpy.std(data, dtype=numpy.float32)

        # Try different starting parameters
        best_nnlf = 1.0e300
        best_parameters = None

        if distribution.name in ["beta"]:
            try:
                rangeData = (data - data_min) / data_range
                data_mean = rangeData.mean()
                data_var = rangeData.var()

                par_a = data_mean * ((data_mean * (1.0 - data_mean) / data_var) - 1.0)
                par_b = (1.0 - data_mean) * (
                    (data_mean * (1.0 - data_mean) / data_var) - 1.0
                )
                par0 = (par_a, par_b, data_min - 0.001 * data_min, data_range * 1.001)
                par_est = tuple(
                    distribution.fit(
                        data,
                        *(par0[:-2]),
                        loc=data_min - 0.01 * data_min,
                        scale=data_range * 1.01,
                    )
                )
                nnlf = distribution.nnlf(par_est, data)
                if numpy.isfinite(nnlf) and nnlf < best_nnlf:
                    best_parameters = par_est
                    best_nnlf = nnlf
            except Exception:
                pass

        if distribution.name in ["truncnorm", "betaprime", "reciprocal"]:
            try:
                par0 = (data_mean - 2.0 * data_std_dev, data_mean + 2.0 * data_std_dev)
                par_est = tuple(
                    distribution.fit(data, loc=data_mean, scale=data_std_dev, *par0)
                )
                nnlf = distribution.nnlf(par_est, data)
                if numpy.isfinite(nnlf) and nnlf < best_nnlf:
                    best_parameters = par_est
                    best_nnlf = nnlf
            except Exception:
                pass

        try:
            par_est = tuple(distribution.fit(data))
            nnlf = distribution.nnlf(par_est, data)
            if numpy.isfinite(nnlf) and nnlf < best_nnlf:
                best_parameters = par_est
                best_nnlf = nnlf
        except Exception:
            pass

        try:
            par_est = tuple(distribution.fit(data, loc=0.0, scale=1.0))
            nnlf = distribution.nnlf(par_est, data)
            if numpy.isfinite(nnlf) and nnlf < best_nnlf:
                best_parameters = par_est
                best_nnlf = nnlf
        except Exception:
            pass

        try:
            par_est = tuple(distribution.fit(data, loc=data_mean, scale=data_std_dev))
            nnlf = distribution.nnlf(par_est, data)
            if numpy.isfinite(nnlf) and nnlf < best_nnlf:
                best_parameters = par_est
                best_nnlf = nnlf
        except Exception:
            pass

        try:
            par_est = tuple(
                distribution.fit(data, loc=data_max + eps, scale=data_std_dev)
            )
            nnlf = distribution.nnlf(par_est, data)
            if numpy.isfinite(nnlf) and nnlf < best_nnlf:
                best_parameters = par_est
                best_nnlf = nnlf
        except Exception:
            pass

        try:
            par_est = tuple(
                distribution.fit(data, loc=data_min - eps, scale=data_std_dev)
            )
            nnlf = distribution.nnlf(par_est, data)
            if numpy.isfinite(nnlf) and nnlf < best_nnlf:
                best_parameters = par_est
                best_nnlf = nnlf
        except Exception:
            pass

        try:
            par_est = tuple(
                distribution.fit(data, loc=data_max + eps, scale=data_range)
            )
            nnlf = distribution.nnlf(par_est, data)
            if numpy.isfinite(nnlf) and nnlf < best_nnlf:
                best_parameters = par_est
                best_nnlf = nnlf
        except Exception:
            pass

        try:
            par_est = tuple(
                distribution.fit(data, loc=data_min - eps, scale=data_range)
            )
            nnlf = distribution.nnlf(par_est, data)
            if numpy.isfinite(nnlf) and nnlf < best_nnlf:
                best_parameters = par_est
                best_nnlf = nnlf
        except Exception:
            pass

        if (best_nnlf < 1.0e300) and (best_parameters is not None):
            try:
                k = len(best_parameters)
                AIC = 2.0 * k + 2.0 * best_nnlf
                n = len(data)
                AICc_BA = AIC + ((2.0 * k * (k + 1.0)) / (n - k - 1.0))

                temp = {}
                temp["distributionName"] = distributionName
                temp["fittedParameters"] = best_parameters
                temp["nnlf"] = best_nnlf
                temp["AIC"] = AIC
                temp["AICc_BA"] = AICc_BA

                if inCriteriaForUseInListSorting == "nnlf":
                    return [best_nnlf, temp]
                elif inCriteriaForUseInListSorting == "AIC":
                    return [AIC, temp]
                else:
                    return [AICc_BA, temp]
            except Exception:
                return 0
        else:
            return 0
