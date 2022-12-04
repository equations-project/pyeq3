import pyeq3

# logging.basicConfig(filename=f'{__file__}.log', encoding='utf-8', filemode='w',
#                    level=logging.DEBUG)

equation = pyeq3.Models_2D.Polynomial.Linear()
pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(
    equation.exampleData, equation, False
)

# first solve with no bounds
equation.Solve()

print(f"{equation.GetDimensionality()}D example: {equation.GetDisplayName()}")
print("Fitted parameters with no bounds:")
for i in range(len(equation.solvedCoefficients)):
    print(
        f"    {equation.GetCoefficientDesignators()[i]} = "
        f"{equation.solvedCoefficients[i]:.16E}"
    )
print(
    f"{equation.fittingTargetDictionary[equation.fittingTarget]} = "
    f"{equation.CalculateAllDataFittingTarget(equation.solvedCoefficients)}"
    "\n"
)

# Add an upper bound
# None means the parameter is unbounded
equation.upperCoefficientBounds = [-9.0, None]
equation.Solve()

print("Fitted parameters with one upper bound:")
for i in range(len(equation.solvedCoefficients)):
    print(
        f"    {equation.GetCoefficientDesignators()[i]} = "
        f"{equation.solvedCoefficients[i]:.16E}"
    )
print(
    f"{equation.fittingTargetDictionary[equation.fittingTarget]} = "
    f"{equation.CalculateAllDataFittingTarget(equation.solvedCoefficients)}"
    "\n"
)

# Add a lower bound
# Reset to have no upper bounds
equation.upperCoefficientBounds = []
equation.lowerCoefficientBounds = [-8.0, None]
equation.Solve()

print("Fitted parameters with one lower bound:")
for i in range(len(equation.solvedCoefficients)):
    print(
        f"    {equation.GetCoefficientDesignators()[i]} = "
        f"{equation.solvedCoefficients[i]:.16E}"
    )
print(
    f"{equation.fittingTargetDictionary[equation.fittingTarget]} = "
    f"{equation.CalculateAllDataFittingTarget(equation.solvedCoefficients)}"
    "\n"
)

# Add an upper bound and a fixed coefficient
# Fixed coefficients override bounds
equation.fixedCoefficients = [-8.5, None]
equation.upperCoefficientBounds = []
equation.lowerCoefficientBounds = []
equation.Solve()

print(
    "Fitted parameters with one upper bound and one fixed coefficient "
    "(fixed coefficients override bounds):"
)
for i in range(len(equation.solvedCoefficients)):
    print(
        f"    {equation.GetCoefficientDesignators()[i]} = "
        f"{equation.solvedCoefficients[i]:.16E}"
    )
print(
    f"{equation.fittingTargetDictionary[equation.fittingTarget]} = "
    f"{equation.CalculateAllDataFittingTarget(equation.solvedCoefficients)}"
    "\n"
)

# And a 3D example
equation = pyeq3.Models_3D.BioScience.HighLowAffinityIsotopeDisplacement("SSQABS")
pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(
    equation.exampleData, equation, False
)
equation.fixedCoefficients = [2.0, None]
equation.Solve()

print(f"{equation.GetDimensionality()}D example: {equation.GetDisplayName()}")

print("Fitted parameters with one fixed coefficient:")
for i in range(len(equation.solvedCoefficients)):
    print(
        f"    {equation.GetCoefficientDesignators()[i]} = "
        f"{equation.solvedCoefficients[i]:.16E}"
    )
print(
    f"{equation.fittingTargetDictionary[equation.fittingTarget]} = "
    f"{equation.CalculateAllDataFittingTarget(equation.solvedCoefficients)}"
    "\n"
)
