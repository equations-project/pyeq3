import os, sys, dispy

import pyeq3



# this is the function to be run on the cluster
def fitEquationUsingDispyCluster(inEquationString, inFittingTargetString, inExtendedVersionString, inTextData):
	
    # individual cluster nodes must be able to import pyeq3
    import pyeq3

    equation = eval(inEquationString +'("' + inFittingTargetString + '", "' + inExtendedVersionString + '")')
    pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(inTextData, equation, False)
    equation.Solve()
    fittedTarget = equation.CalculateAllDataFittingTarget(equation.solvedCoefficients)
   
    # this result list allows easy sorting of multiple results later
    return [fittedTarget, inEquationString, equation.solvedCoefficients]


equationString = 'pyeq3.Models_2D.Polynomial.Linear'

# see the pyeq3.IModel.fittingTargetDictionary
fittingTargetString = 'SSQABS'

textData = '''
1.0   1.1
2.0   2.2
3.0   3.4159
'''

print()
print('Creating dispy JobCluster')
cluster = dispy.JobCluster(fitEquationUsingDispyCluster)

print('Submitting job to the cluster')
job = cluster.submit(equationString, fittingTargetString, 'Default', textData)

print('Waiting on job completion  and collecting results')
results = job()

print()
if job.exception: # can also use job.status
    print('Remote Exception in job!')
    print()
    print(str(job.exception))
else:
    equation = eval(results[1] + '("' + fittingTargetString + '")')
    equation.solvedCoefficients = results[2]
    print('Success! Results from job:')
    print('The equation ' + results[1])
    print('yielded ' + fittingTargetString + ' of ' + str(results[0]))
    print('with coefficients  ' + str(results[2]))
