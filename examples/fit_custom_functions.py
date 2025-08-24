import pyeq3
import numpy as np
import matplotlib.pyplot as plt

data = np.loadtxt("data.dat")

for functionString, estimatedCoefficients in [
    ["a + b * X + c * X * X", np.array([0.0, -1.0, 0.0])],
    ["a + b * X", np.array([-0.164, -0.1])],
    ["1.0 - exp(-b * (a ** X - 1.0) / log(a))", np.array([0.69, -2])],
]:
    # Create the equation object
    # note that the constructor is passed the function string here
    equation = pyeq3.Models_2D.UserDefinedFunction.UserDefinedFunction(
        inUserFunctionString=functionString
    )
    equation.estimatedCoefficients = estimatedCoefficients

    # Process the data
    pyeq3.dataConvertorService().ProcessNumpyArray(data, equation, False)

    # Solve the equation based on the processed data and initial coefficients
    equation.Solve()

    # create a smooth curve for plotting
    range = data[:, 0].max() - data[:, 0].min()
    f = 0.1
    x_new = np.linspace(
        data[:, 0].min() - range * f, data[:, 0].max() + range * f, 1001
    )
    y_new = equation.CalculateModelPredictionsFromNewData(x_new)

    # Print some data to standard output
    # pyeq3.Output.Print.DatumInformation(equation)
    pyeq3.Output.Print.FitStatistics(equation)

    # Plot the fitted curve
    plt.plot(x_new, y_new, label=functionString)

# Plot the original data points
plt.scatter(data[:, 0], data[:, 1])

plt.legend()
plt.xlabel("X")
plt.ylabel("Y")
plt.grid()
plt.title("Fitted Curves")
plt.show()
