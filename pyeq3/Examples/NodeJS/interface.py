import os, sys, json

# we want *exceptions* but not *warnings* from the optimizers
# to be propagated back to javascript.  Ignore only optimizer warnings
import warnings
from scipy.optimize import OptimizeWarning
warnings.simplefilter("ignore", OptimizeWarning)


import pyeq3


pythonFileName = sys.argv[0] # unused
equationInfoFromNodeJS = json.loads(sys.argv[1])
textDataFromNodeJS = json.loads(sys.argv[2])
fittingTargetFromNodeJS = json.loads(sys.argv[3])

moduleName = equationInfoFromNodeJS['pythonModuleName']
className = equationInfoFromNodeJS['pythonClassName']
extendedVersionString = equationInfoFromNodeJS['extendedVersionString']
dimensionality = equationInfoFromNodeJS['dimensionality']

eqStringToEvaluate = 'pyeq3.Models_'
eqStringToEvaluate += str(dimensionality) + 'D.'
eqStringToEvaluate += moduleName + '.'
eqStringToEvaluate += className + '('
eqStringToEvaluate += '"' + fittingTargetFromNodeJS + '",'
eqStringToEvaluate += '"' + extendedVersionString + '")'

equation = eval(eqStringToEvaluate)

pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(textDataFromNodeJS, equation, False)

equation.Solve()

# output could include data statistics, error statistics, fit
# and coefficients statistics, etc. from the other Python examples
print(json.dumps(equation.solvedCoefficients.tolist()))
print((json.dumps(pyeq3.outputSourceCodeService().GetOutputSourceCodeJAVASCRIPT(equation))))
