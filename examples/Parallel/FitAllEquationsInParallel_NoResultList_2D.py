import os
import inspect
import multiprocessing

import pyeq3
from pyeq3.Utilities.Multifit import SetParametersAndFit
from pyeq3.Utilities.Multifit import UniqueCombinations, UniqueCombinations2
from pyeq3.Utilities.Multifit import instantiate_equation
from pyeq3.Output import Print


def ParallelFittingFunction(rawData, fittingTargetText,
                            smoothnessControl, modulus,
                            modulusRemainder):
    processID = str(os.getpid())

    # this function yields a single item to inspect after completion
    bestResult = {'fittingTargetValue': 1e300}

    # we are using the same data set repeatedly, so create a cache
    # external to the equations
    externalCache = pyeq3.dataCache()
    reducedDataCache = {}

    equationCountForModulus = 0

    ##########################
    # add named equations here
    print()
    print("Process ID", processID, "fitting named equations:")
    for submodule in inspect.getmembers(pyeq3.Models_2D):
        if inspect.ismodule(submodule[1]):
            for equationClass in inspect.getmembers(submodule[1]):
                if inspect.isclass(equationClass[1]):

                    # special classes
                    if (
                        equationClass[1].splineFlag
                        or equationClass[1].userSelectablePolynomialFlag
                        or equationClass[1].userCustomizablePolynomialFlag
                        or equationClass[1].userSelectablePolyfunctionalFlag
                        or equationClass[1].userSelectableRationalFlag
                        or equationClass[1].userDefinedFunctionFlag
                    ):
                        continue

                    for extendedVersion in ["Default", "Offset"]:

                        if (extendedVersion == "Offset") and (
                            equationClass[1].autoGenerateOffsetForm is False
                        ):
                            continue

                        if equationCountForModulus % modulus != modulusRemainder:
                            equationCountForModulus += 1
                            continue
                        equationCountForModulus += 1

                        equationInstance = equationClass[1](
                            fittingTargetText, extendedVersion
                        )

                        if (
                            len(equationInstance.GetCoefficientDesignators())
                            > smoothnessControl
                        ):
                            continue

                        equationInstance.dataCache = (
                            externalCache  # re-use the external cache
                        )

                        if equationInstance.dataCache.allDataCacheDictionary == {}:
                            pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(
                                rawData, equationInstance, False
                            )

                        equationInstance.dataCache.CalculateNumberOfReducedDataPoints(
                            equationInstance
                        )
                        if (equationInstance.numberOfReducedDataPoints
                                in reducedDataCache):
                            equationInstance.dataCache.reducedDataCacheDictionary = (
                                reducedDataCache[equationInstance.numberOfReducedDataPoints])
                        else:
                            equationInstance.dataCache.reducedDataCacheDictionary = {}

                        result = SetParametersAndFit(equationInstance, True)
                        if (((result is not None) and
                             (result['fittingTargetValue']
                              < bestResult['fittingTargetValue']))):
                            bestResult = result

                        if (
                            equationInstance.numberOfReducedDataPoints
                            not in reducedDataCache
                        ):
                            reducedDataCache[
                                equationInstance.numberOfReducedDataPoints
                            ] = equationInstance.dataCache.reducedDataCacheDictionary

    ##########################
    # fit polyfunctionals here
    ()
    print("Process ID", processID, "fitting polyfunctionals:")
    equationCount = 0
    # this value was chosen to make this example more convenient
    maxPolyfunctionalCoefficients = 4
    polyfunctionalEquationList = pyeq3.PolyFunctions.GenerateListForPolyfunctionals_2D()
    # make a list of function indices to permute
    functionIndexList = list(range(len(polyfunctionalEquationList)))

    for coeffCount in range(1, maxPolyfunctionalCoefficients + 1):
        functionCombinations = UniqueCombinations(
            functionIndexList, coeffCount)
        for functionCombination in functionCombinations:

            if len(functionCombination) > smoothnessControl:
                continue

            if equationCountForModulus % modulus != modulusRemainder:
                equationCountForModulus += 1
                continue
            equationCountForModulus += 1

            equationInstance = (
                pyeq3.Models_2D.Polyfunctional.UserSelectablePolyfunctional(
                    fittingTargetText,
                    "Default",
                    functionCombination,
                    polyfunctionalEquationList,
                )
            )

            # re-use the external cache
            equationInstance.dataCache = externalCache

            if equationInstance.dataCache.allDataCacheDictionary == {}:
                pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(
                    rawData, equationInstance, False
                )

            equationInstance.dataCache.CalculateNumberOfReducedDataPoints(
                equationInstance
            )
            if equationInstance.numberOfReducedDataPoints in reducedDataCache:
                equationInstance.dataCache.reducedDataCacheDictionary = (
                    reducedDataCache[equationInstance.numberOfReducedDataPoints]
                )
            else:
                equationInstance.dataCache.reducedDataCacheDictionary = {}

            result = SetParametersAndFit(equationInstance, True)
            if (((result is not None) and
                    (result['fittingTargetValue']
                     < bestResult['fittingTargetValue']))):
                bestResult = result

            if equationInstance.numberOfReducedDataPoints not in reducedDataCache:
                reducedDataCache[
                    equationInstance.numberOfReducedDataPoints
                ] = equationInstance.dataCache.reducedDataCacheDictionary

            equationCount += 1
            if (equationCount % 50) == 0:
                print(
                    "    Process ID", processID, "fitted", equationCount, "equations..."
                )

    ######################
    # fit user-selectable polynomials here
    print()
    print("Process ID", processID, "fitting user-selectable polynomials:")
    maxPolynomialOrderX = (
        5  # this value was chosen to make this example more convenient
    )

    for polynomialOrderX in range(maxPolynomialOrderX + 1):

        if (polynomialOrderX + 1) > smoothnessControl:
            continue

        if equationCountForModulus % modulus != modulusRemainder:
            equationCountForModulus += 1
            continue
        equationCountForModulus += 1

        equationInstance = pyeq3.Models_2D.Polynomial.UserSelectablePolynomial(
            fittingTargetText, "Default", polynomialOrderX
        )

        equationInstance.dataCache = externalCache  # re-use the external cache

        if equationInstance.dataCache.allDataCacheDictionary == {}:
            pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(
                rawData, equationInstance, False
            )

        equationInstance.dataCache.CalculateNumberOfReducedDataPoints(
            equationInstance)
        if equationInstance.numberOfReducedDataPoints in reducedDataCache:
            equationInstance.dataCache.reducedDataCacheDictionary = reducedDataCache[
                equationInstance.numberOfReducedDataPoints]
        else:
            equationInstance.dataCache.reducedDataCacheDictionary = {}

        result = SetParametersAndFit(equationInstance, True)
        if (((result is not None) and
                (result['fittingTargetValue']
                 < bestResult['fittingTargetValue']))):
            bestResult = result

        if equationInstance.numberOfReducedDataPoints not in reducedDataCache:
            reducedDataCache[
                equationInstance.numberOfReducedDataPoints
            ] = equationInstance.dataCache.reducedDataCacheDictionary

    ######################
    # fit user-selectable rationals here
    print()
    print("Process ID", processID, "fitting user-selectable rationals:")
    equationCount = 0
    # arbitrary choice of maximum total coefficients for this example
    maxCoeffs = smoothnessControl
    functionList = pyeq3.PolyFunctions.GenerateListForRationals_2D()
    # make a list of function indices
    functionIndexList = list(range(len(functionList)))

    for numeratorCoeffCount in range(1, maxCoeffs):
        numeratorComboList = UniqueCombinations(
            functionIndexList, numeratorCoeffCount)
        for numeratorCombo in numeratorComboList:
            for denominatorCoeffCount in range(1, maxCoeffs):
                denominatorComboList = UniqueCombinations2(
                    functionIndexList, denominatorCoeffCount
                )
                for denominatorCombo in denominatorComboList:

                    for extendedVersion in ["Default", "Offset"]:

                        extraCoeffs = 0
                        if extendedVersion == "Offset":
                            extraCoeffs = 1

                        if (
                            len(numeratorCombo) +
                                len(denominatorCombo) + extraCoeffs
                        ) > smoothnessControl:
                            continue

                        if equationCountForModulus % modulus != modulusRemainder:
                            equationCountForModulus += 1
                            continue
                        equationCountForModulus += 1

                        equationInstance = (
                            pyeq3.Models_2D.Rational.UserSelectableRational(
                                fittingTargetText,
                                extendedVersion,
                                numeratorCombo,
                                denominatorCombo,
                                functionList,
                            )
                        )

                        equationInstance.dataCache = (
                            externalCache  # re-use the external cache
                        )

                        if equationInstance.dataCache.allDataCacheDictionary == {}:
                            pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(
                                rawData, equationInstance, False
                            )

                        equationInstance.dataCache.CalculateNumberOfReducedDataPoints(
                            equationInstance
                        )
                        if (
                            equationInstance.numberOfReducedDataPoints
                            in reducedDataCache
                        ):
                            equationInstance.dataCache.reducedDataCacheDictionary = (
                                reducedDataCache[
                                    equationInstance.numberOfReducedDataPoints
                                ]
                            )
                        else:
                            equationInstance.dataCache.reducedDataCacheDictionary = {}

                        result = SetParametersAndFit(equationInstance, True)
                        if (((result is not None) and
                             (result['fittingTargetValue']
                              < bestResult['fittingTargetValue']))):
                            bestResult = result

                        if (equationInstance.numberOfReducedDataPoints
                                not in reducedDataCache):
                            reducedDataCache[
                                equationInstance.numberOfReducedDataPoints
                            ] = equationInstance.dataCache.reducedDataCacheDictionary

                        equationCount += 1
                        if (equationCount % 5) == 0:
                            print(
                                "    ",
                                "Process ID",
                                processID + ",",
                                equationCount,
                                "rationals, current flags:",
                                equationInstance.rationalNumeratorFlags,
                                equationInstance.rationalDenominatorFlags,
                            )
                            if extendedVersion == "Offset":
                                print("with offset")
                            else:
                                print()

    print("Process ID", processID, "has completed")
    return bestResult


rawData = """
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

# Standard lowest sum-of-squared errors in this example,
# see IModel.fittingTargetDictionary
fittingTargetText = "SSQABS"


#####################################################
# this value is used to make the example run faster #
#####################################################
smoothnessControl = 3


# http://stackoverflow.com/questions/18204782/runtimeerror-on-windows-trying-python-multiprocessing
if __name__ == "__main__":

    ##############################################
    # Parallel region begins
    ##############################################

    poolItems = []

    # how many CPU cores are on this computer?
    number_of_cpu_cores = multiprocessing.cpu_count()

    # create a process pool using all CPU cores (in this example)
    pool = multiprocessing.Pool(processes=number_of_cpu_cores)

    # run items in parallel, see ParallelFittingFunction() above
    for i in range(number_of_cpu_cores):
        poolItems.append(
            pool.apply_async(
                ParallelFittingFunction,
                (rawData, fittingTargetText,
                 smoothnessControl, number_of_cpu_cores, i),
            )
        )  # modulus math divides the equations among the processes

    # gather all results from the process pool
    allResults = []
    for i in range(number_of_cpu_cores):
        allResults.append(poolItems[i].get())

    # no more items will be added to the process pool
    pool.close()
    pool.join()

    ##############################################
    # Parallel region ends
    ##############################################

    # sort the parallel runs and select the best result
    allResults = sorted(allResults, key=lambda x: x['fittingTargetValue'])
    bestResult = allResults[0]

    print('\nAlthough the \"Best Fit\" function should have the '
          'lowest fitting target value, it requires further evaluation '
          'to determine if it is the best for your needs. '
          'For example, it may interpolate badly.\n')
    print(
        f'This inversion allowed a maximum of {smoothnessControl} parameters.')

    print('\nBest fit equation:')
    equation = instantiate_equation(bestResult, rawData)
    print(equation)

    Print.DatumInformation(equation)
