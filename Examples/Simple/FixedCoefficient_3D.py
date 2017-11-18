import os, sys, inspect

import pyeq3


# see IModel.fittingTargetDictionary
equation = pyeq3.Models_3D.BioScience.HighLowAffinityIsotopeDisplacement('SSQABS')

pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(equation.exampleData, equation, False)


# Note that only one coefficient is set to a fixed value in this
# example, using None for coefficients that are not fixed
equation.fixedCoefficients = [2.0, None]


equation.Solve()


##########################################################


print(equation.GetDisplayName(), str(equation.GetDimensionality()) + "D")
print(equation.fittingTargetDictionary[equation.fittingTarget], '=', equation.CalculateAllDataFittingTarget(equation.solvedCoefficients))
print("Fitted Parameters:")
for i in range(len(equation.solvedCoefficients)):
    print("    %s = %-.16E" % (equation.GetCoefficientDesignators()[i], equation.solvedCoefficients[i]))
