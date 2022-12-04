import os
import multiprocessing
import numpy as np
import matplotlib.pyplot as plt
import pyeq3
from pyeq3.Utilities.Multifit import FitModelsInParallel
from pyeq3.Utilities.Multifit import InstantiateModel
from pyeq3.Output import Print
from pyeq3.Graphics.Graphics2D import ModelScatterConfidenceGraph

if __name__ == "__main__":

    data = np.array(
        [
            [5.357, 0.376],
            [5.457, 0.489],
            [5.797, 0.874],
            [5.936, 1.049],
            [6.161, 1.327],
            [6.697, 2.054],
            [6.731, 2.077],
            [6.775, 2.138],
            [8.442, 4.744],
            [9.769, 7.068],
            [9.861, 7.104],
        ]
    )

    # Standard lowest sum-of-squared errors in this example,
    # see IModel.fittingTargetDictionary
    misfit_criterion = "SSQABS"

    # this value is used to make the example run faster
    max_params = 3

    # The dimensions of the data, not including optional weighting
    # ([x1, y] or [x1, x2, y])
    dim = 2

    os.nice(10)  # I use this during development

    number_of_cpus = multiprocessing.cpu_count()

    allResults = FitModelsInParallel(
        data, dim, misfit_criterion, max_params, number_of_cpus
    )

    # sort the parallel runs and select the best result
    allResults = sorted(allResults, key=lambda x: x["fittingTargetValue"])
    bestResult = allResults[0]

    print(
        '\nAlthough the "Best Fit" function should have the '
        "lowest fitting target value, it requires further evaluation "
        "to determine if it is the best for your needs. "
        "For example, it may interpolate badly.\n"
    )
    print(f"This inversion allowed a maximum of {max_params} parameters.")

    print("\nBest fit equation:")
    equation = InstantiateModel(bestResult, data)
    print(equation)

    print("\nFit information on each datum:")
    Print.DatumInformation(equation)

    print("\nSome predicted values:")
    x = np.linspace(6.0, 10.0, 5)
    y = equation.CalculateModelPredictionsFromNewData(x)
    print(f"x values: {x}")
    print(f"y values: {y}")

    print("\nPython code:")
    print(pyeq3.outputSourceCodeService().GetOutputSourceCodePYTHON(equation))

    print("\nFinally, we plot up the best-fitting function.")
    fig = plt.figure(figsize=(8, 6), dpi=100)
    axes = fig.add_subplot(111)
    ModelScatterConfidenceGraph(equation, axes)

    plt.show()
