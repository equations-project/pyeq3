import pyeq3


functionString = 'm*X+B * (3/2)'

# note that the constructor is passed the function string here
equation = pyeq3.Models_2D.UserDefinedFunction.UserDefinedFunction(
    inUserFunctionString=functionString)

pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(
    equation.exampleData, equation, False)

equation.Solve()
print(equation)
