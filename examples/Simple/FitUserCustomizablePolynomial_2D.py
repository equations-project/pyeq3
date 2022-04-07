import pyeq3

# see IModel.fittingTargetDictionary
flags = [8, 9, 10]  # quadratic equation, y = ax^0 + bx^1 + cx^2
equation = pyeq3.Models_2D.Polynomial.UserCustomizablePolynomial(
    'SSQABS', inPolynomial2DFlags=flags)  # SSQABS by default

data = equation.exampleData
pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(data, equation, False)
equation.Solve()

print(equation)
pyeq3.Output.Print.DatumInformation(equation)
pyeq3.Output.Print.FitStatistics(equation)

print()
print('Java Source Code:')
print(pyeq3.outputSourceCodeService().GetOutputSourceCodeJAVA(equation))
