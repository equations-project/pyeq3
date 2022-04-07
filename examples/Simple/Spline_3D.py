import pyeq3


# parameters are smoothing, xOrder, yOrder
equation = pyeq3.Models_3D.Spline.Spline(1.0, 3, 3)  # cubic 3D spline

data = equation.exampleData

pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(data, equation, False)
equation.Solve()


##########################################################


print("Equation:", equation.GetDisplayName(),
      str(equation.GetDimensionality()) + "D")
print("Fitting target of", equation.fittingTargetDictionary[equation.fittingTarget],
      '=', equation.CalculateAllDataFittingTarget(equation.solvedCoefficients))

print()

# at present, only these four languages are supported for spline-specific code
# print(pyeq3.outputSourceCodeService().GetOutputSourceCodeCPP(equation))
print(pyeq3.outputSourceCodeService().GetOutputSourceCodePYTHON(equation))
# print(pyeq3.outputSourceCodeService().GetOutputSourceCodeJAVA(equation))
# print(pyeq3.outputSourceCodeService().GetOutputSourceCodeJAVASCRIPT(equation))
