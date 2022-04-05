import os, multiprocessing
import numpy as np
import pyeq3
from pyeq3.Utilities.Multifit import fit_all_equations_in_parallel, instantiate_equation
from pyeq3.Graphics.Graphics2D import ModelScatterConfidenceGraph
import matplotlib.pyplot as plt

if __name__ ==  '__main__':

    # The data to fit
    data = np.array([[5.357, 0.376],
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


    dim = 2 # The dimensionality of the data. Should be either 2 or 3
    misfit_criterion = 'SSQABS' # sum-of-squared errors, see IModel.fittingTargetDictionary for alternatives
    max_params = 2 # a low value makes the example run faster
    number_of_cpus = multiprocessing.cpu_count() # use all CPUs

    allResults = fit_all_equations_in_parallel(data, dim, misfit_criterion, max_params, number_of_cpus)


    # find the best result of all the parallel runs
    bestResult = {'fittingTargetValue': 1.e300}
    for result in allResults:
        if result != None:
            if (not bestResult) or (result['fittingTargetValue'] < bestResult['fittingTargetValue']):
                bestResult = result


    print('\nAlthough the \"Best Fit\" function should have the lowest fitting target value,')
    print('it requires further evaluation to determine if it is the best')
    print('for your needs.  For example, it may interpolate badly.\n')
    print(f'This inversion allowed a maximum of {max_params} parameters.')

    equation = instantiate_equation(bestResult, data)

    print(f'\n\"Best fit\" was {equation.__module__}.{equation.__class__.__name__}')
    print(f'Fitting target value {equation.fittingTarget}: {equation.CalculateAllDataFittingTarget(equation.solvedCoefficients)}')

    print('\nSome predicted values:')
    x = np.linspace(6., 10., 5)
    y = equation.CalculateModelPredictionsFromNewData(x)
    print(f'x values: {x}')
    print(f'y values: {y}')


    print('\nFinally, we plot up the best-fitting function.')
    fig = plt.figure(figsize=(8, 6), dpi=100)
    axes = fig.add_subplot(111)
    ModelScatterConfidenceGraph(equation, axes)

    plt.show()

