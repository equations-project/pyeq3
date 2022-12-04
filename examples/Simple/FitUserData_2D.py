import pyeq3


# see IModel.fittingTargetDictionary
equation = pyeq3.Models_2D.BioScience.HyperbolicLogistic("SSQABS")

data = """
  X        Y
5.357    10.376
5.457    10.489
5.797    10.874
5.936    11.049
6.161    11.327
6.697    12.054
6.731    12.077
6.775    12.138
8.442    14.744
9.769    17.068
9.861    17.104
"""
pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(data, equation, False)
equation.Solve()

print(equation)

pyeq3.Output.Print.DatumInformation(equation)
pyeq3.Output.Print.FitStatistics(equation)

print()
print("Java Source Code:")
print(pyeq3.outputSourceCodeService().GetOutputSourceCodeJAVA(equation))
