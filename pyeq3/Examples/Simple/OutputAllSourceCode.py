import os, sys, inspect

import pyeq3



# see IModel.fittingTargetDictionary
equation = pyeq3.Models_2D.Polynomial.Quadratic() # SSQABS by default

data = equation.exampleData
pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(data, equation, False)
equation.Solve()


##########################################################


print(pyeq3.outputSourceCodeService().GetOutputSourceCodeCPP(equation))
print(pyeq3.outputSourceCodeService().GetOutputSourceCodeCSHARP(equation))
print(pyeq3.outputSourceCodeService().GetOutputSourceCodeVBA(equation))
print(pyeq3.outputSourceCodeService().GetOutputSourceCodePYTHON(equation))
print(pyeq3.outputSourceCodeService().GetOutputSourceCodeJAVA(equation))
print(pyeq3.outputSourceCodeService().GetOutputSourceCodeJAVASCRIPT(equation))
print(pyeq3.outputSourceCodeService().GetOutputSourceCodeSCILAB(equation))
print(pyeq3.outputSourceCodeService().GetOutputSourceCodeMATLAB(equation))
print(pyeq3.outputSourceCodeService().GetOutputSourceCodeJULIA(equation))
print(pyeq3.outputSourceCodeService().GetOutputSourceCodeFORTRAN90(equation))
