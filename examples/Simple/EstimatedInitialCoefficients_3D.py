import pyeq3


# see IModel.fittingTargetDictionary
equation = pyeq3.Models_3D.BioScience.HighLowAffinityIsotopeDisplacement("SSQABS")

pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(
    equation.exampleData, equation, False
)


# Note that all coefficients are set with estimated values
equation.estimatedCoefficients = [2.0, 3.0e13]


equation.Solve()

print(equation.GetDisplayName(), str(equation.GetDimensionality()) + "D")
print(
    equation.fittingTargetDictionary[equation.fittingTarget],
    "=",
    equation.CalculateAllDataFittingTarget(equation.solvedCoefficients),
)
print("Fitted Parameters:")
for i in range(len(equation.solvedCoefficients)):
    print(
        "    %s = %-.16E"
        % (equation.GetCoefficientDesignators()[i], equation.solvedCoefficients[i])
    )
