import os, sys, inspect
import numpy as np
import pyeq3

equation = pyeq3.Models_2D.UserDefinedFunction.UserDefinedFunction(inUserFunctionString='m*X+B * (3/2)')

data = np.array([[5.357, 10.376, 1.],
                 [5.457, 10.489, 1.],
                 [5.797, 10.874, 1.],
                 [5.936, 11.049, 2.],
                 [6.161, 11.327, 1.],
                 [6.697, 12.054, 1.],
                 [6.731, 12.077, 1.],
                 [6.775, 12.138, 1.],
                 [8.442, 14.744, 1.],
                 [9.769, 17.068, 1.],
                 [9.861, 17.104, 1.]])
pyeq3.dataConvertorService().ProcessNumpyArray(data, equation, True)
equation.Solve()
print(f"Equation: {equation.GetDisplayName()} {equation.GetDimensionality()}D")
print(f"Minimizing {equation.fittingTargetDictionary[equation.fittingTarget]}: {equation.CalculateAllDataFittingTarget(equation.solvedCoefficients)}")
print("Fitted Parameters:")
for i, coeff in enumerate(equation.solvedCoefficients):
    print(f"    {equation.GetCoefficientDesignators()[i]} = {coeff:.16E}")



equation = pyeq3.Models_3D.BioScience.HighLowAffinityIsotopeDisplacement('SSQABS')
data = np.array([[3.017, 2.175, 0.320],
                 [2.822, 2.624, 0.629],
                 [2.632, 2.839, 0.950],
                 [2.287, 3.030, 1.574],
                 [2.207, 3.057, 1.725],
                 [2.048, 3.098, 2.035],
                 [1.963, 3.115, 2.204],
                 [1.784, 3.144, 2.570],
                 [1.712, 3.153, 2.721],
                 [2.972, 2.106, 0.313],
                 [2.719, 2.542, 0.643],
                 [2.495, 2.721, 0.956],
                 [2.070, 2.878, 1.597],
                 [1.969, 2.899, 1.758],
                 [1.768, 2.929, 2.088],
                 [1.677, 2.939, 2.240],
                 [1.479, 2.957, 2.583],
                 [1.387, 2.963, 2.744],
                 [2.843, 1.984, 0.315],
                 [2.485, 2.320, 0.639],
                 [2.163, 2.444, 0.954],
                 [1.687, 2.525, 1.459],
                 [1.408, 2.547, 1.775],
                 [1.279, 2.554, 1.927],
                 [1.016, 2.564, 2.243],
                 [0.742, 2.568, 2.581],
                 [0.607, 2.571, 2.753]])
pyeq3.dataConvertorService().ProcessNumpyArray(data, equation, False)
#pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(equation.exampleData, equation, False)

equation.Solve()
print(f"Equation: {equation.GetDisplayName()} {equation.GetDimensionality()}D")
print(f"Minimizing {equation.fittingTargetDictionary[equation.fittingTarget]}: {equation.CalculateAllDataFittingTarget(equation.solvedCoefficients)}")
print("Fitted Parameters:")
for i, coeff in enumerate(equation.solvedCoefficients):
    print(f"    {equation.GetCoefficientDesignators()[i]} = {coeff:.16E}")

