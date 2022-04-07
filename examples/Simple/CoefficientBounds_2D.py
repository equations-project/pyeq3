import os
import sys
import inspect

import pyeq3


equation = pyeq3.Models_2D.Polynomial.Linear()

pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(
    equation.exampleData, equation, False)

##########################################################

# first solve with no bounds
equation.Solve()

print("Fitted Parameters With No Bounds:")
for i in range(len(equation.solvedCoefficients)):
    print("    %s = %-.16E" % (equation.GetCoefficientDesignators()
          [i], equation.solvedCoefficients[i]))
print(equation.fittingTargetDictionary[equation.fittingTarget], '=',
      equation.CalculateAllDataFittingTarget(equation.solvedCoefficients))
print()

##########################################################

# now with an upper bound
# None means the parameter is unbounded
equation.upperCoefficientBounds = [-9.0, None]

equation.Solve()

print("Fitted Parameters With One Upper Bound:")
for i in range(len(equation.solvedCoefficients)):
    print("    %s = %-.16E" % (equation.GetCoefficientDesignators()
          [i], equation.solvedCoefficients[i]))
print(equation.fittingTargetDictionary[equation.fittingTarget], '=',
      equation.CalculateAllDataFittingTarget(equation.solvedCoefficients))
()

##########################################################

# now with a lower bound
equation.upperCoefficientBounds = []  # reset to have no upper bounds
# None means the parameter is unbounded
equation.lowerCoefficientBounds = [-8.0, None]

equation.Solve()

print("Fitted Parameters With One Lower Bound:")
for i in range(len(equation.solvedCoefficients)):
    print("    %s = %-.16E" % (equation.GetCoefficientDesignators()
          [i], equation.solvedCoefficients[i]))
print(equation.fittingTargetDictionary[equation.fittingTarget], '=',
      equation.CalculateAllDataFittingTarget(equation.solvedCoefficients))
print()

##########################################################

# now with an upper bound and a fixed coefficient
# note that fixed coefficients override bounds
# None means the parameter is not fixed
equation.fixedCoefficients = [-8.5, None]
# None means the parameter is unbounded
equation.upperCoefficientBounds = [-9.0, None]
equation.lowerCoefficientBounds = []  # reset to have no lower bounds

equation.Solve()

print("Fitted Parameters With One Upper Bound And One Fixed Coefficient (fixed coeffs override bounds):")
for i in range(len(equation.solvedCoefficients)):
    print("    %s = %-.16E" % (equation.GetCoefficientDesignators()
          [i], equation.solvedCoefficients[i]))
print(equation.fittingTargetDictionary[equation.fittingTarget], '=',
      equation.CalculateAllDataFittingTarget(equation.solvedCoefficients))
