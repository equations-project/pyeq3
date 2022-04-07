import matplotlib.pyplot as plt
import pyeq3
from pyeq3.Output import Print
from pyeq3.Graphics.Graphics2D import ModelScatterConfidenceGraph

# text data section
dataString = '''
    X        Y  # lines of text that do not begin with a number are ignored
  5.357    0.376
  5.457    0.489
  5.797    0.874
  5.936    1.049
  6.161    1.327
  6.697    2.054
  6.731    2.077
  6.775    2.138
  8.442    4.744
  9.769    7.068
  9.861    7.104
'''

# pyeq3 fitting section
# this example is a straight line, default lowest sum-of-squared errors
equation = pyeq3.Models_2D.Polynomial.Linear('SSQABS')

# note that True is passed here to indicate weighted data,
# for unweighted pass False
pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(dataString,
                                                         equation,
                                                         False)

print("Fitting data...")
equation.Solve()

# Printing and plotting
print(equation)
Print.DatumInformation(equation)
Print.FitStatistics(equation)

fig = plt.figure(figsize=(8, 6), dpi=100)
axes = fig.add_subplot(111)
ModelScatterConfidenceGraph(equation, axes)

plt.show()
