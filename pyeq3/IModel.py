#    pyeq3 is a collection of equations expressed as Python classes
#
#    Copyright (C) 2013 James R. Phillips
#    2548 Vera Cruz Drive
#    Birmingham, AL 35235 USA
#
#    email: zunzun@zunzun.com
#
#    License: BSD-style (see LICENSE.txt in main source directory)

import io
import pyeq3
import numpy
import scipy.interpolate
import scipy.stats
from itertools import groupby

numpy.seterr(all="ignore")


class IModel(object):
    splineFlag = False
    userSelectablePolynomialFlag = False
    userCustomizablePolynomialFlag = False
    userSelectablePolyfunctionalFlag = False
    userSelectableRationalFlag = False
    userDefinedFunctionFlag = False

    autoGenerateOffsetForm = False
    autoGeneratePlusLineForm = False
    autoGeneratePlusPlaneForm = False
    autoGenerateReciprocalForm = False
    autoGenerateInverseForms = False
    autoGenerateGrowthAndDecayForms = False

    independentData1CannotContainZeroFlag = False
    independentData1CannotContainPositiveFlag = False
    independentData1CannotContainNegativeFlag = False
    independentData2CannotContainZeroFlag = False
    independentData2CannotContainPositiveFlag = False
    independentData2CannotContainNegativeFlag = False

    independentData1CannotContainBothPositiveAndNegativeFlag = False
    independentData2CannotContainBothPositiveAndNegativeFlag = False

    # "e" is removed so it is not mistaken for Euler's constant "e"
    # "l" is removed so it is not mistaken for the number "1"
    # - some fonts make these appear the same or very similar
    # "o" is removed so it is not mistaken for the number "0"
    # - some fonts make these appear the same or very similar
    # VBA is case insensitive, so coefficient 'a' looks the same to VBA
    # as coefficient 'A' - use double characters instead of capital letters
    # "x", "y", "xx", and "yy" are removed so they are not mistaken for
    # variables named x or y
    listOfAdditionalCoefficientDesignators = [
        "a",
        "b",
        "c",
        "d",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "m",
        "n",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "z",
        "aa",
        "bb",
        "cc",
        "dd",
        "ff",
        "gg",
        "hh",
        "ii",
        "jj",
        "kk",
        "mm",
        "nn",
        "pp",
        "qq",
        "rr",
        "ss",
        "tt",
        "uu",
        "vv",
        "ww",
        "zz",
    ]

    fittingTargetDictionary = {
        "SSQABS": "sum of squared absolute error",
        "SSQREL": "sum of squared relative error",
        "ODR": "sum of squared orthogonal distance",
        "ABSABS": "sum of absolute value of absolute error",
        "LNQREL": "sum of squared log[predicted/actual]",
        "ABSREL": "sum of absolute value of relative error",
        "PEAKABS": "peak absolute value of absolute error",
        "PEAKREL": "peak absolute value of relative error",
        "AIC": "Akaike Information Criterion",
        "BIC": "Bayesian Information Criterion",
    }

    def __init__(self, inFittingTarget="SSQABS",
                 inExtendedVersionName="Default"):
        if inExtendedVersionName == "":
            inExtendedVersionName = "Default"

        if inFittingTarget not in list(self.fittingTargetDictionary.keys()):
            raise Exception(
                str(inFittingTarget)
                + " is not in the IModel class fitting target dictionary."
            )
        self.fittingTarget = inFittingTarget

        inExtendedVersionName = inExtendedVersionName.replace(" ", "")
        if (
            inExtendedVersionName
            not in pyeq3.ExtendedVersionHandlers.extendedVersionHandlerNameList
        ):
            raise Exception(
                inExtendedVersionName
                + " is not in the list of extended version handler names."
            )

        allowedExtendedVersion = True
        if (-1 != inExtendedVersionName.find("Offset")) and (
            self.autoGenerateOffsetForm is False
        ):
            allowedExtendedVersion = False
        if (-1 != inExtendedVersionName.find("Reciprocal")) and (
            self.autoGenerateReciprocalForm is False
        ):
            allowedExtendedVersion = False
        if (-1 != inExtendedVersionName.find("Inverse")) and (
            self.autoGenerateInverseForms is False
        ):
            allowedExtendedVersion = False
        if (-1 != inExtendedVersionName.find("Growth")) and (
            self.autoGenerateGrowthAndDecayForms is False
        ):
            allowedExtendedVersion = False
        if (-1 != inExtendedVersionName.find("Decay")) and (
            self.autoGenerateGrowthAndDecayForms is False
        ):
            allowedExtendedVersion = False
        if allowedExtendedVersion is False:
            raise Exception(
                'This equation does not allow an extended version named  "'
                + inExtendedVersionName
                + '".'
            )
        self.extendedVersionHandler = eval(
            "pyeq3.ExtendedVersionHandlers.ExtendedVersionHandler_"
            + inExtendedVersionName
            + ".ExtendedVersionHandler_"
            + inExtendedVersionName
            + "()"
        )

        self.dataCache = pyeq3.dataCache()
        self.upperCoefficientBounds = []
        self.lowerCoefficientBounds = []
        self.estimatedCoefficients = []
        self.fixedCoefficients = []
        self.solvedCoefficients = []
        self.polyfunctional2DFlags = []
        self.polyfunctional3DFlags = []
        self.xPolynomialOrder = None
        self.yPolynomialOrder = None
        self.rationalNumeratorFlags = []
        self.rationalDenominatorFlags = []
        self.deEstimatedCoefficients = []

        try:
            if self._dimensionality == 2:
                self.exampleData = """
    X        Y
  5.357    0.376
  5.457    0.489
  5.797    0.874
  5.936    1.049
  6.161    1.327
  6.697    2.054
  6.731    2.077
  6.775    2.138
  8.442    4.744
  9.769    7.068
  9.861    7.104
"""
            else:
                self.exampleData = """
    X      Y       Z
  3.017  2.175   0.320
  2.822  2.624   0.629
  2.632  2.839   0.950
  2.287  3.030   1.574
  2.207  3.057   1.725
  2.048  3.098   2.035
  1.963  3.115   2.204
  1.784  3.144   2.570
  1.712  3.153   2.721
  2.972  2.106   0.313
  2.719  2.542   0.643
  2.495  2.721   0.956
  2.070  2.878   1.597
  1.969  2.899   1.758
  1.768  2.929   2.088
  1.677  2.939   2.240
  1.479  2.957   2.583
  1.387  2.963   2.744
  2.843  1.984   0.315
  2.485  2.320   0.639
  2.163  2.444   0.954
  1.687  2.525   1.459
  1.408  2.547   1.775
  1.279  2.554   1.927
  1.016  2.564   2.243
  0.742  2.568   2.581
  0.607  2.571   2.753
"""
        except:
            pass

    def __str__(self):

        dim = self.GetDimensionality()
        if dim == 2:
            polyfunctionalnDFlags = self.polyfunctional2DFlags
        elif dim == 3:
            polyfunctionalnDFlags = self.polyfunctional3DFlags

        moduleName = self.__module__
        className = self.__class__.__name__
        extendedVersionHandlerName = (
            self.extendedVersionHandler.__class__.__name__.split("_")[1]
        )
        fittingTarget = self.fittingTarget

        if len(self.solvedCoefficients) > 0:
            solvedCoefficients = self.solvedCoefficients
            fittingTargetValue = self.CalculateAllDataFittingTarget(
                solvedCoefficients)
        else:
            solvedCoefficients = "(not assigned until solved)"
            fittingTargetValue = "(not assigned until solved)"

        polyfunctionalnDFlags = polyfunctionalnDFlags
        polynomialOrderX = self.xPolynomialOrder
        rationalNumeratorFlags = self.rationalNumeratorFlags
        rationalDenominatorFlags = self.rationalDenominatorFlags

        if extendedVersionHandlerName == "Offset":
            str = f"{moduleName}.{className} (with offset, {dim}D)\n"
        else:
            str = f"{moduleName}.{className} ({dim}D)\n"
        str += f"Polyfunctional flags: {polyfunctionalnDFlags}\n"
        str += f"Polyfunctional order: {polynomialOrderX}\n"
        str += f"Rational numerator flags: {rationalNumeratorFlags}\n"
        str += f"Rational denominator flags: {rationalDenominatorFlags}\n"
        str += f"Coefficients: {self.GetCoefficientDesignators()}\n"
        str += f"Coefficient values: {solvedCoefficients}\n"
        str += f"Fitting target value {fittingTarget}: {fittingTargetValue}\n"
        return str

    def CalculateCoefficientAndFitStatistics(self):
        # number of observations
        self.nobs = len(self.dataCache.allDataCacheDictionary["DependentData"])
        self.ncoef = len(self.solvedCoefficients)  # number of coef.
        self.df_e = self.nobs - self.ncoef  # degrees of freedom, error
        # degrees of freedom, regression
        self.df_r = self.ncoef - 1
        self.sumOfSquaredErrors = numpy.sum(
            self.modelAbsoluteError * self.modelAbsoluteError
        )

        # if coefficients have bounds or fixed values, these calculations
        # can fail.  The constraints are for the solver.  Calculate these
        # statistics without constraints, and warn users that do use any
        # constraints that these statistics are not valid if near bounds.
        # Values for fixed coefficients should be correct if they are
        # only fixed as a constraint for the solver.

        # temporarily remove constraints, restore later
        upperCoefficientBounds = self.upperCoefficientBounds
        lowerCoefficientBounds = self.lowerCoefficientBounds
        fixedCoefficients = self.fixedCoefficients
        self.upperCoefficientBounds = []
        self.lowerCoefficientBounds = []
        self.fixedCoefficients = []

        try:
            self.r2 = (
                1.0
                - self.modelAbsoluteError.var()
                / self.dataCache.allDataCacheDictionary["DependentData"].var()
            )

            # extremely poor fits can have absolute error variance
            # greater than sample variance at machine precision levels,
            # giving tiny negative R-squared values
            if self.r2 < 0.0:
                self.r2 = None
        except:
            self.r2 = None

        try:
            self.rmse = numpy.sqrt(self.sumOfSquaredErrors / self.nobs)
        except:
            self.rmse = None

        try:
            # adjusted R-square
            self.r2adj = (1.0 - (1.0 - self.r2) *
                          ((self.nobs - 1.0) /
                           (self.nobs - self.ncoef)))
        except:
            self.r2adj = None

        try:
            self.Fstat = ((self.r2 / self.df_r) /
                          ((1.0 - self.r2) / self.df_e))  # model F-statistic
        except:
            self.Fstat = None

        try:
            # F-statistic p-value
            self.Fpv = 1.0 - scipy.stats.f.cdf(self.Fstat,
                                               self.df_r,
                                               self.df_e)
        except:
            self.Fpv = None

        # Model log-likelihood, AIC, and BIC criterion values
        # from http://stackoverflow.com/questions/7458391/python-multiple-linear-regression-using-ols-code-with-specific-data
        try:
            self.ll = (-(self.nobs * 0.5) *
                       (1.0 + numpy.log(2.0 * numpy.pi)) -
                       (self.nobs * 0.5) *
                       numpy.log(numpy.dot(self.modelAbsoluteError,
                                           self.modelAbsoluteError) /
                                 self.nobs))
        except:
            self.ll = None

        try:
            self.aic = -2.0 * self.ll / self.nobs + \
                (2.0 * self.ncoef / self.nobs)
        except:
            self.aic = None

        try:
            self.bic = (
                -2.0 * self.ll / self.nobs
                + (self.ncoef * numpy.log(self.nobs)) / self.nobs
            )
        except:
            self.bic = None

        if self.splineFlag is True:  # not appicable to splines
            self.cov_beta = None
            self.sd_beta = None
            self.tstat_beta = None
            self.pstat_beta = None
            self.ci = None
            return
        else:
            # see both scipy.odr.odrpack and http://www.scipy.org/Cookbook/OLS
            # this is inefficient but works for every possible case
            model = scipy.odr.odrpack.Model(self.WrapperForODR)
            self.dataCache.FindOrCreateAllDataCache(self)
            data = scipy.odr.odrpack.Data(
                self.dataCache.allDataCacheDictionary["IndependentData"],
                self.dataCache.allDataCacheDictionary["DependentData"],
            )
            myodr = scipy.odr.odrpack.ODR(
                data, model, beta0=self.solvedCoefficients, maxit=0
            )
            myodr.set_job(fit_type=2)
            parameterStatistics = myodr.run()

            # parameter covariance matrix
            self.cov_beta = parameterStatistics.cov_beta
            try:
                self.sd_beta = (parameterStatistics.sd_beta *
                                parameterStatistics.sd_beta)
            except:
                self.sd_beta = None
            self.ci = []

            t_df = scipy.stats.t.ppf(0.975, self.df_e)

            for i in range(len(self.solvedCoefficients)):
                self.ci.append(
                    [
                        self.solvedCoefficients[i]
                        - t_df * parameterStatistics.sd_beta[i],
                        self.solvedCoefficients[i]
                        + t_df * parameterStatistics.sd_beta[i],
                    ]
                )

            try:
                self.tstat_beta = (
                    self.solvedCoefficients / parameterStatistics.sd_beta
                )  # coeff t-statistics
            except:
                self.tstat_beta = None

            try:
                # coef. p-values
                self.pstat_beta = (
                    1.0 -
                    scipy.stats.t.cdf(numpy.abs(self.tstat_beta), self.df_e)
                ) * 2.0
            except:
                self.pstat_beta = None

        # restore constraints, as users will not expect them to have changed
        self.upperCoefficientBounds = upperCoefficientBounds
        self.lowerCoefficientBounds = lowerCoefficientBounds
        self.fixedCoefficients = fixedCoefficients

    def CalculateModelErrors(self, inCoeffs, inDictionary):
        if self.upperCoefficientBounds != []:
            for i in range(len(inCoeffs)):
                # use None as a flag for coefficients that are not fixed
                if self.upperCoefficientBounds[i] is not None:
                    if inCoeffs[i] > self.upperCoefficientBounds[i]:
                        inCoeffs[i] = self.upperCoefficientBounds[i]
        if self.lowerCoefficientBounds != []:
            for i in range(len(inCoeffs)):
                # use None as a flag for coefficients
                # that are not fixed
                if self.lowerCoefficientBounds[i] is not None:
                    if inCoeffs[i] < self.lowerCoefficientBounds[i]:
                        inCoeffs[i] = self.lowerCoefficientBounds[i]
        if self.fixedCoefficients != []:
            for i in range(len(inCoeffs)):
                # use None as a flag for coefficients
                # that are not fixed
                if self.fixedCoefficients[i] is not None:
                    inCoeffs[i] = self.fixedCoefficients[i]
        self.modelPredictions = self.CalculateModelPredictions(
            inCoeffs, inDictionary)
        self.modelAbsoluteError = self.modelPredictions - \
            inDictionary["DependentData"]
        try:
            if self.dataCache.DependentDataContainsZeroFlag is False:
                self.modelRelativeError = (
                    self.modelAbsoluteError / inDictionary["DependentData"]
                )
                self.modelPercentError = self.modelRelativeError * 100.0
        except:
            # this is effectively true if this code is reached
            self.dataCache.DependentDataContainsZeroFlag = True
            self.modelRelativeError = []
            self.modelPercentError = []

    def CalculateReducedDataFittingTarget(self, inCoeffs):
        # save time by checking constraints and bounds first
        if not self.AreCoefficientsWithinBounds(inCoeffs):
            try:  # set any bounds
                if self.upperCoefficientBounds != []:
                    for i in range(len(inCoeffs)):
                        # use None as a flag for coefficients
                        # that are not fixed
                        if self.upperCoefficientBounds[i] is not None:
                            if inCoeffs[i] > self.upperCoefficientBounds[i]:
                                inCoeffs[i] = self.upperCoefficientBounds[i]
                if self.lowerCoefficientBounds != []:
                    for i in range(len(inCoeffs)):
                        # use None as a flag for coefficients
                        # that are not fixed
                        if self.lowerCoefficientBounds[i] is not None:
                            if inCoeffs[i] < self.lowerCoefficientBounds[i]:
                                inCoeffs[i] = self.lowerCoefficientBounds[i]
            except:
                pass

        # return SSQ as we are only using this method for guessing
        # initial coefficients
        try:
            # set any fixed coefficients
            if self.fixedCoefficients != []:
                for i in range(len(inCoeffs)):
                    # use None as a flag for coefficients that are not fixed
                    if self.fixedCoefficients[i] is not None:
                        inCoeffs[i] = self.fixedCoefficients[i]

            error = (
                self.CalculateModelPredictions(
                    inCoeffs, self.dataCache.reducedDataCacheDictionary
                )
                - self.dataCache.reducedDataCacheDictionary["DependentData"]
            )
            ssq = numpy.sum(numpy.square(error))
        except:
            return 1.0e300
        if numpy.isfinite(ssq):
            return ssq
        else:
            return 1.0e300

    def CalculateAllDataFittingTarget(self, inCoeffs):
        # save time by checking bounds first
        if not self.AreCoefficientsWithinBounds(inCoeffs):
            try:  # set to bounds
                if self.upperCoefficientBounds != []:
                    for i in range(len(inCoeffs)):
                        # use None as a flag for coefficients
                        # that are not fixed
                        if self.upperCoefficientBounds[i] is not None:
                            if inCoeffs[i] > self.upperCoefficientBounds[i]:
                                inCoeffs[i] = self.upperCoefficientBounds[i]
                if self.lowerCoefficientBounds != []:
                    for i in range(len(inCoeffs)):
                        # use None as a flag for coefficients
                        # that are not fixed
                        if self.lowerCoefficientBounds[i] is not None:
                            if inCoeffs[i] < self.lowerCoefficientBounds[i]:
                                inCoeffs[i] = self.lowerCoefficientBounds[i]
            except:
                pass

        try:
            # set any fixed coefficients
            if self.fixedCoefficients != []:
                for i in range(len(inCoeffs)):
                    # use None as a flag for coefficients that are not fixed
                    if self.fixedCoefficients[i] is not None:
                        inCoeffs[i] = self.fixedCoefficients[i]

            self.CalculateModelErrors(
                inCoeffs, self.dataCache.allDataCacheDictionary)
            error = self.modelAbsoluteError

            if len(self.dataCache.allDataCacheDictionary["Weights"]):
                error = error * \
                    self.dataCache.allDataCacheDictionary["Weights"]

            if self.fittingTarget == "SSQABS":
                val = numpy.sum(numpy.square(error))
                if numpy.isfinite(val):
                    return val
                else:
                    return 1.0e300

            if self.fittingTarget == "SSQREL":
                error = error / \
                    self.dataCache.allDataCacheDictionary["DependentData"]
                val = numpy.sum(numpy.square(error))
                if numpy.isfinite(val):
                    return val
                else:
                    return 1.0e300

            if self.fittingTarget == "ABSABS":
                val = numpy.sum(numpy.abs(error))
                if numpy.isfinite(val):
                    return val
                else:
                    return 1.0e300

            # see http://papers.ssrn.com/sol3/papers.cfm?abstract_id=2635088
            if self.fittingTarget == "LNQREL":

                Q = numpy.abs(
                    self.modelPredictions
                    / self.dataCache.allDataCacheDictionary["DependentData"]
                )
                sumsqlogQ = numpy.sum(numpy.square(numpy.log(Q)))
                val = sumsqlogQ
                if numpy.isfinite(val):
                    return val
                else:
                    return 1.0e300

            if self.fittingTarget == "ABSREL":

                val = numpy.sum(
                    numpy.abs(
                        error /
                        self.dataCache.allDataCacheDictionary["DependentData"]
                    )
                )
                if numpy.isfinite(val):
                    return val
                else:
                    return 1.0e300

            if self.fittingTarget == "PEAKABS":
                val = numpy.max(numpy.abs(error))
                if numpy.isfinite(val):
                    return val
                else:
                    return 1.0e300

            if self.fittingTarget == "PEAKREL":
                val = numpy.max(
                    numpy.abs(
                        error /
                        self.dataCache.allDataCacheDictionary["DependentData"]
                    )
                )
                if numpy.isfinite(val):
                    return val
                else:
                    return 1.0e300

            # ODR does not use "error" above, which can be weighted,
            # so weights are passed to ODR if used
            if (
                self.fittingTarget == "ODR"
            ):  # this is inefficient but works for every possible case
                model = scipy.odr.odrpack.Model(self.WrapperForODR)
                if len(self.dataCache.allDataCacheDictionary["Weights"]):
                    data = scipy.odr.odrpack.Data(
                        self.dataCache.allDataCacheDictionary["IndependentData"],
                        self.dataCache.allDataCacheDictionary["DependentData"],
                        we=self.dataCache.allDataCacheDictionary["Weights"],
                    )
                else:
                    data = scipy.odr.odrpack.Data(
                        self.dataCache.allDataCacheDictionary["IndependentData"],
                        self.dataCache.allDataCacheDictionary["DependentData"],
                    )
                myodr = scipy.odr.odrpack.ODR(
                    data, model, beta0=inCoeffs, maxit=0)
                myodr.set_job(fit_type=2)
                out = myodr.run()
                val = out.sum_square
                if numpy.isfinite(val):
                    return val
                else:
                    return 1.0e300

            # remaining targets require these
            ncoef = 1.0 * len(inCoeffs)
            nobs = 1.0 * \
                len(self.dataCache.allDataCacheDictionary["DependentData"])
            ll = -(nobs * 0.5) * (1.0 + numpy.log(2.0 * numpy.pi)) - (
                nobs * 0.5
            ) * numpy.log(numpy.dot(error, error) / nobs)

            if self.fittingTarget == "AIC":
                val = -2.0 * ll / nobs + (2.0 * ncoef / nobs)
                if numpy.isfinite(val):
                    return val
                else:
                    return 1.0e300

            if self.fittingTarget == "BIC":
                val = -2.0 * ll / nobs + (ncoef * numpy.log(nobs)) / nobs
                if numpy.isfinite(val):
                    return val
                else:
                    return 1.0e300
        except:
            return 1.0e300

    def Solve(self, inNonLinearSolverAlgorithmName="Levenberg-Marquardt"):

        solver = pyeq3.solverService()

        # if any of these conditions exist, a linear solver cannot be used
        if (
            self.fixedCoefficients != []
            or self.upperCoefficientBounds != []
            or self.lowerCoefficientBounds != []
            or len(self.dataCache.allDataCacheDictionary["Weights"])
        ):
            self._canLinearSolverBeUsedForSSQABS = False

        # selection of different solvers and algorithms.
        if self.splineFlag:
            return solver.SolveUsingSpline(self)
        elif (
            self.fittingTarget == "SSQABS"
            and self.CanLinearSolverBeUsedForSSQABS() is True
        ):
            return solver.SolveUsingLinear(self)
        elif self.fittingTarget == "ODR":
            if len(self.deEstimatedCoefficients) == 0:
                self.deEstimatedCoefficients = solver.SolveUsingDE(self)
            return solver.SolveUsingODR(self)
        else:
            if len(self.deEstimatedCoefficients) == 0:
                self.deEstimatedCoefficients = solver.SolveUsingDE(self)
            self.estimatedCoefficients = solver.SolveUsingSelectedAlgorithm(
                self, inAlgorithmName=inNonLinearSolverAlgorithmName
            )
            return solver.SolveUsingSimplex(self)

    def AreCoefficientsWithinBounds(self, inCoeffs):
        if self.upperCoefficientBounds != []:
            for index in range(len(inCoeffs)):
                if (self.upperCoefficientBounds[index] is not None) and (
                    inCoeffs[index] > self.upperCoefficientBounds[index]
                ):
                    return False
        if self.lowerCoefficientBounds != []:
            for index in range(len(inCoeffs)):
                if (self.lowerCoefficientBounds[index] is not None) and (
                    inCoeffs[index] < self.lowerCoefficientBounds[index]
                ):
                    return False
        return True

    def GetDisplayName(self):
        return self.extendedVersionHandler.AssembleDisplayName(self)

    def GetDisplayHTML(self):
        return self.extendedVersionHandler.AssembleDisplayHTML(self)

    def GetDimensionality(self):
        return self._dimensionality

    def CanLinearSolverBeUsedForSSQABS(self):
        return self.extendedVersionHandler.CanLinearSolverBeUsedForSSQABS(
            self._canLinearSolverBeUsedForSSQABS
        )

    def WrapperForScipyCurveFit(self, data, *inCoeffs):
        # so coefficient assigment can be made
        inCoeffs = numpy.array(inCoeffs)
        if self.upperCoefficientBounds != []:
            for i in range(len(inCoeffs)):
                # use None as a flag for coefficients that are not fixed
                if self.upperCoefficientBounds[i] is not None:
                    if inCoeffs[i] > self.upperCoefficientBounds[i]:
                        inCoeffs[i] = self.upperCoefficientBounds[i]
        if self.lowerCoefficientBounds != []:
            for i in range(len(inCoeffs)):
                # use None as a flag for coefficients that are not fixed
                if self.lowerCoefficientBounds[i] is not None:
                    if inCoeffs[i] < self.lowerCoefficientBounds[i]:
                        inCoeffs[i] = self.lowerCoefficientBounds[i]
        if self.fixedCoefficients != []:
            for i in range(len(inCoeffs)):
                # use None as a flag for coefficients that are not fixed
                if self.fixedCoefficients[i] is not None:
                    inCoeffs[i] = self.fixedCoefficients[i]
        return self.CalculateModelPredictions(
            inCoeffs, self.dataCache.allDataCacheDictionary
        )

    def WrapperForODR(self, inCoeffs, data):
        if not numpy.all(numpy.isfinite(data)):
            return (
                numpy.ones(
                    len(self.dataCache.allDataCacheDictionary["DependentData"]))
                * 1.0e300
            )

        if numpy.array_equal(
            data, self.dataCache.allDataCacheDictionary["IndependentData"]
        ):
            if self.upperCoefficientBounds != []:
                for i in range(len(inCoeffs)):
                    # use None as a flag for coefficients that are not fixed
                    if self.upperCoefficientBounds[i] is not None:
                        if inCoeffs[i] > self.upperCoefficientBounds[i]:
                            inCoeffs[i] = self.upperCoefficientBounds[i]
            if self.lowerCoefficientBounds != []:
                for i in range(len(inCoeffs)):
                    # use None as a flag for coefficients that are not fixed
                    if self.lowerCoefficientBounds[i] is not None:
                        if inCoeffs[i] < self.lowerCoefficientBounds[i]:
                            inCoeffs[i] = self.lowerCoefficientBounds[i]
            if self.fixedCoefficients != []:
                for i in range(len(inCoeffs)):
                    # use None as a flag for coefficients that are not fixed
                    if self.fixedCoefficients[i] is not None:
                        inCoeffs[i] = self.fixedCoefficients[i]
            result = self.CalculateModelPredictions(
                inCoeffs, self.dataCache.allDataCacheDictionary
            )
        else:
            tempCache = self.dataCache.allDataCacheDictionary
            self.dataCache.allDataCacheDictionary = {}
            self.dataCache.allDataCacheDictionary["IndependentData"] = data
            self.dataCache.FindOrCreateAllDataCache(self)
            if self.upperCoefficientBounds != []:
                for i in range(len(inCoeffs)):
                    # use None as a flag for coefficients that are not fixed
                    if self.upperCoefficientBounds[i] is not None:
                        if inCoeffs[i] > self.upperCoefficientBounds[i]:
                            inCoeffs[i] = self.upperCoefficientBounds[i]
            if self.lowerCoefficientBounds != []:
                for i in range(len(inCoeffs)):
                    # use None as a flag for coefficients that are not fixed
                    if self.lowerCoefficientBounds[i] is not None:
                        if inCoeffs[i] < self.lowerCoefficientBounds[i]:
                            inCoeffs[i] = self.lowerCoefficientBounds[i]
            if self.fixedCoefficients != []:
                for i in range(len(inCoeffs)):
                    # use None as a flag for coefficients that are not fixed
                    if self.fixedCoefficients[i] is not None:
                        inCoeffs[i] = self.fixedCoefficients[i]
            result = self.CalculateModelPredictions(
                inCoeffs, self.dataCache.allDataCacheDictionary
            )
            self.dataCache.allDataCacheDictionary = tempCache
        return result

    def GetCoefficientDesignators(self):
        return self.extendedVersionHandler.AssembleCoefficientDesignators(self)

    def ShouldDataBeRejected(self, unused):

        # should data be rejected?
        true_or_false = self.extendedVersionHandler.ShouldDataBeRejected(self)

        if (
            self.dataCache.DependentDataContainsZeroFlag
            and self.fittingTarget[-3:] == "REL"
        ):
            true_or_false = True

        # if yes, why?
        # hopefully this will not be used
        self.reasonWhyDataRejected = "unknown condition"
        if true_or_false:
            if (
                self.dataCache.DependentDataContainsZeroFlag
                and self.fittingTarget[-3:] == "REL"
            ):
                self.reasonWhyDataRejected = "The data contains at least one dependent data value of exactly 0.0, a relative fit cannot be performed as divide-by-zero errors would occur."

            if (
                self.independentData1CannotContainZeroFlag
                and self.dataCache.independentData1ContainsZeroFlag
            ):
                self.reasonWhyDataRejected = "This equation requires non-zero values for the first independent variable (X). At least one of the values was exactly equal to zero. Examples that would fail would be ln(x) and 1/x."

            if (
                self.independentData1CannotContainNegativeFlag
                and self.dataCache.independentData1ContainsNegativeFlag
            ):
                self.reasonWhyDataRejected = "This equation requires non-negative values for the first independent variable (X). At least one of the values was negative. One example that would fail is ln(x)."

            if (
                self.independentData1CannotContainPositiveFlag
                and self.dataCache.independentData1ContainsPositiveFlag
            ):
                self.reasonWhyDataRejected = "This equation requires non-positive values for the first independent variable (X). At least one of the values was positive. One xample that would fail would be ln(-x), please check the data."

            if (
                self.independentData1CannotContainBothPositiveAndNegativeFlag
                and self.dataCache.independentData1ContainsPositiveFlag
                and self.dataCache.independentData1ContainsNegativeFlag
            ):
                self.reasonWhyDataRejected = ("This equation cannot have both "
                                              "positive and negative values "
                                              "for the first independent "
                                              "variable (X)/")

        return true_or_false

    def IsDigitOrPoint(self, character):
        return (str.isdigit(character) or character == '.')

    def ConvertStringIntsToStringFloats(self, string):
        res = [''.join(g) for _, g in groupby(string, self.IsDigitOrPoint)]
        return ''.join([r+'.0' if r.isnumeric() else r for r in res])

    def GetSortedCoefficientsFromString(self, string, dim):

        numpySafeTokenList = []
        for key in list(self.functionDictionary.keys()):
            numpySafeTokenList += self.functionDictionary[key]
        for key in list(self.constantsDictionary.keys()):
            numpySafeTokenList += self.constantsDictionary[key]

        # some safe tokens have numbers. split these.
        new_list = []
        for t in numpySafeTokenList:
            tsplit = [''.join(g)
                      for _, g in groupby(t, str.isalpha)]
            tsplit = [g for g in tsplit if str.isalpha(g[0])]
            new_list.extend(tsplit)
        numpySafeTokenList = new_list

        tokenNames = [''.join(g)
                      for _, g in groupby(string, str.isalpha)]
        tokenNames = [g for g in tokenNames
                      if (g not in numpySafeTokenList and
                          str.isalpha(g[0]))]
        if dim == 2:
            return sorted(list(set(tokenNames) - set(['X'])))
        else:
            return sorted(list(set(tokenNames) - set(['X', 'Y'])))

    def RecursivelyConvertIntStringsToFloatStrings(self, inList):
        returnList = []
        for item in inList:
            if isinstance(item, list):  # is this item another list?
                returnList.append(
                    self.RecursivelyConvertIntStringsToFloatStrings(item))
            elif isinstance(item, str):  # is this item a string?
                if item.isdigit():
                    # convert the integer to its floating point representation
                    returnList.append(str(float(item)))
                else:
                    returnList.append(item)
            else:
                returnList.append(item)
        return returnList

    def ProcessAndValidateFunctionString(self, inString, dim):

        # no blank lines of text, StringIO() allows using file methods on text
        stringToConvert = ''
        rawData = io.StringIO(inString).readlines()

        for line in rawData:
            stripped = line.strip()
            if len(stripped) > 0:  # no empty strings
                if stripped[0] != '#':  # no comment-only lines
                    stringToConvert += stripped + '\n'

        # convert brackets to parentheses
        stringToConvert = stringToConvert.replace('[', '(').replace(']', ')')

        if stringToConvert == '':
            raise Exception('You must enter some function '
                            'text for the software to use.')

        if -1 != stringToConvert.find('='):
            raise Exception('Please do not use an equals '
                            'sign "=" in your text.')

        if '^' in stringToConvert:
            raise Exception('The caret symbol "^" is not recognized '
                            'by the parser, please substitute double '
                            'asterisks "**" for "^".')

        if 'ln' in stringToConvert:
            raise Exception("The parser uses log() for the natural "
                            "log function, not ln(). "
                            "Please use log() in your text.")

        if 'abs' in stringToConvert:
            raise Exception("The parser uses fabs() for the absolute "
                            "value, not abs(). Please use fabs() in "
                            "your text.")

        if 'EXP' in stringToConvert:
            raise Exception("The parser uses lower case exp(), "
                            "not upper case EXP(). Please use "
                            "lower case exp() in your text.")

        if 'LOG' in stringToConvert:
            raise Exception("The parser uses lower case log(), "
                            "not upper case LOG(). Please use "
                            "lower case log() in your text.")

        if 'X' not in stringToConvert:
            raise Exception('You must use a separate upper case "X" '
                            'in your function to enter a valid function of X.')

        if dim == 3 and 'Y' not in stringToConvert:
            raise Exception('You must use a separate upper case "Y" '
                            'in your function to enter a valid function of Y.')

        return stringToConvert

    def ParseAndCompileUserFunctionString(self, inString, dim):

        stringToConvert = self.ProcessAndValidateFunctionString(inString, dim)

        self._coefficientDesignators = self.GetSortedCoefficientsFromString(
            inString, dim)

        if len(self._coefficientDesignators) == 0:
            raise Exception('I could not find any equation parameter '
                            'or coefficient names, please check the '
                            'function text')

        # now compile code object using safe tokens with integer conversion
        self.safe_dict = locals()

        numpySafeTokenList = []
        for key in list(self.functionDictionary.keys()):
            numpySafeTokenList += self.functionDictionary[key]
        for key in list(self.constantsDictionary.keys()):
            numpySafeTokenList += self.constantsDictionary[key]

        for f in numpySafeTokenList:
            self.safe_dict[f] = eval('numpy.' + f)

        # convert integer use such as (3/2) into floats such as (3.0/2.0)
        stringToConvert = self.ConvertStringIntsToStringFloats(stringToConvert)

        # later evals re-use this compiled code for improved performance
        # in EvaluateCachedData() methods
        self.userFunctionCodeObject = compile(stringToConvert,
                                              '<string>',
                                              mode='eval')

    def CalculateModelPredictionsFromNewData(self, independent_data):
        ModelCache = pyeq3.dataCache()

        dim = self.GetDimensionality()
        if len(independent_data.shape) == 1:
            if dim == 3:
                raise Exception('The independent data for a 3D model '
                                'must be provided as a 2D numpy array.')
            d = numpy.array(
                [independent_data, numpy.ones_like(independent_data)])
        else:
            if dim == 2:
                raise Exception('The independent data for a 2D model '
                                'must be provided as a 1D numpy array.')
            d = independent_data

        ModelCache.allDataCacheDictionary["IndependentData"] = d
        ModelCache.FindOrCreateAllDataCache(self)

        return self.CalculateModelPredictions(
            self.solvedCoefficients, ModelCache.allDataCacheDictionary
        )
