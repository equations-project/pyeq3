import os
import sys
import inspect

import pyeq3


# see IModel.fittingTargetDictionary
equation = pyeq3.Models_2D.Polynomial.Linear('SSQABS')

data = '''
  X        Y      Weight
5.357    10.376     0.1
5.457    10.489     0.5
5.797    10.874     5.0
5.936    11.049     9.9
6.161    11.327     0.1
6.697    12.054     0.1
6.731    12.077     0.1
6.775    12.138     0.1
8.442    14.744     0.1
9.769    17.068     0.1
9.861    17.104     0.1
'''

# Note the True flag here, reads in weights
pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(data, equation, True)
equation.Solve()


print(equation)
pyeq3.Output.Print.DatumInformation(equation)
pyeq3.Output.Print.FitStatistics(equation)
