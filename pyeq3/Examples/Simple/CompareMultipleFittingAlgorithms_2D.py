import os
import sys
import inspect

import pyeq3

fittingTargetText = 'SSQABS'

deEstimatedCoefficients = []

print('It is very rare for an algorithm to fit better than Levenberg-Marquardt,')
print('This example shows how to construct a test to determine if this is true.')
print()

for fittingAlgorithmName in pyeq3.solverService.ListOfNonLinearSolverAlgorithmNames:
    equation = pyeq3.Models_2D.BioScience.AphidPopulationGrowth(
        fittingTargetText, 'Offset')

    if equation.CanLinearSolverBeUsedForSSQABS() == True and fittingTargetText == 'SSQABS':
        raise Exception(
            'The selected combination of equation and SSQABS fitting target does not use a non-linear solver')

    if fittingTargetText == 'ODR':
        raise Exception('ODR cannot use multiple fitting algorithms')

    pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(
        equation.exampleData, equation, False)

    equation.deEstimatedCoefficients = deEstimatedCoefficients
    equation.Solve(inNonLinearSolverAlgorithmName=fittingAlgorithmName)
    # no need to re-run genetic algorithm
    deEstimatedCoefficients = equation.deEstimatedCoefficients

    print(fittingTargetText, 'of', equation.CalculateAllDataFittingTarget(
        equation.solvedCoefficients), 'for the fitting algorithm', fittingAlgorithmName)
    print('Coefficients:', equation.solvedCoefficients)
    ()
    sys.stdout.flush()
