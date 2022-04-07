import os
import multiprocessing
import numpy as np
import pyeq3
from pyeq3.Utilities.Multifit import fit_all_equations_in_parallel

if __name__ == '__main__':

    inRawData = np.array([[5.357, 0.376],
                          [5.457, 0.489],
                          [5.797, 0.874],
                          [5.936, 1.049],
                          [6.161, 1.327],
                          [6.697, 2.054],
                          [6.731, 2.077],
                          [6.775, 2.138],
                          [8.442, 4.744],
                          [9.769, 7.068],
                          [9.861, 7.104]])

    # Standard lowest sum-of-squared errors in this example, see IModel.fittingTargetDictionary
    fittingTargetText = 'SSQABS'

    # this value is used to make the example run faster
    smoothnessControl = 3

    # The dimensions of the data, not including optional weighting ([x1, y] or [x1, x2, y])
    inDimension = 2

    os.nice(10)  # I use this during development

    number_of_cpus = multiprocessing.cpu_count()
    allResults = fit_all_equations_in_parallel(
        inRawData, inDimension, fittingTargetText, smoothnessControl, number_of_cpus)

    # find the best result of all the parallel runs
    bestResult = []
    for result in allResults:
        if result != None:
            if (not bestResult) or (result[3] < bestResult[3]):
                bestResult = result

    print()
    print()
    print('While \"Best Fit\" may be the lowest fitting target value,')
    print('it requires further evaluation to determine if it is the best')
    print('for your needs.  For example, it may interpolate badly.')
    print()
    print(
        f'"Smoothness Control" allowed a maximum of {smoothnessControl} parameters')

    moduleName = bestResult[0]
    className = bestResult[1]
    extendedVersionHandlerName = bestResult[2]
    fittingTarget = bestResult[3]
    solvedCoefficients = bestResult[4]
    polyfunctional2DFlags = bestResult[5]
    polynomialOrderX = bestResult[6]
    rationalNumeratorFlags = bestResult[7]
    rationalDenominatorFlags = bestResult[8]

    # now instantiate the "best fit" equation based on the name stored in the result list
    if polyfunctional2DFlags:
        equation = eval(moduleName + "." + className + "('" + fittingTargetText +
                        "', '" + extendedVersionHandlerName + "', " + str(polyfunctional2DFlags) + ")")
    elif polynomialOrderX != None:
        equation = eval(moduleName + "." + className + "('" + fittingTargetText +
                        "', '" + extendedVersionHandlerName + "', " + str(polynomialOrderX) + ")")
    elif rationalNumeratorFlags and rationalDenominatorFlags:
        equation = eval(moduleName + "." + className + "('" + fittingTargetText + "', '" + extendedVersionHandlerName +
                        "', " + str(rationalNumeratorFlags) + ", " + str(rationalDenominatorFlags) + ")")
    else:
        equation = eval(moduleName + "." + className + "('" +
                        fittingTargetText + "', '" + extendedVersionHandlerName + "')")

    pyeq3.dataConvertorService().ProcessNumpyArray(inRawData, equation, False)
    equation.fittingTarget = fittingTargetText
    equation.solvedCoefficients = solvedCoefficients
    equation.dataCache.FindOrCreateAllDataCache(equation)
    equation.CalculateModelErrors(
        equation.solvedCoefficients, equation.dataCache.allDataCacheDictionary)

    print()
    print(f'\"Best fit\" was {moduleName}.{className}')
    print(
        f'Fitting target value {equation.fittingTarget}: {equation.CalculateAllDataFittingTarget(equation.solvedCoefficients)}')

    if polyfunctional2DFlags:
        print()
        print('Polyfunctional flags:', polyfunctional2DFlags)
        print()
    if polynomialOrderX != None:
        print()
        print('Polynomial order:', polynomialOrderX)
        print()
    if rationalNumeratorFlags and rationalDenominatorFlags:
        ()
        print('Rational numerator flags:', rationalNumeratorFlags)
        print('Rational denominator flags:', rationalDenominatorFlags)
        if extendedVersionHandlerName == 'Offset':
            print('with offset')
        print()

    for i in range(len(equation.solvedCoefficients)):
        print("Coefficient " + equation.GetCoefficientDesignators()
              [i] + ": " + str(equation.solvedCoefficients[i]))
    print()
    for i in range(len(equation.dataCache.allDataCacheDictionary['DependentData'])):
        print(
            'X:', equation.dataCache.allDataCacheDictionary['IndependentData'][0][i],)
        print(
            'Y', equation.dataCache.allDataCacheDictionary['DependentData'][i],)
        print('Model:', equation.modelPredictions[i],)
        print('Abs. Error:', equation.modelAbsoluteError[i],)
        if not equation.dataCache.DependentDataContainsZeroFlag:
            print('Rel. Error:', equation.modelRelativeError[i],)
            print('Percent Error:', equation.modelPercentError[i],)
        print()
