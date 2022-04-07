import numpy
import scipy
import matplotlib
import matplotlib.pyplot as plt
import pyeq3


##########################################################
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


##########################################################
# pyeq3 fitting section

# this example is a straight line, default lowest sum-of-squared errors
equation = pyeq3.Models_2D.Polynomial.Linear('SSQABS')

# note that True is passed here to indicate weighted data, for unweighted pass False
pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(dataString, equation, False)

print("Fitting data...")
equation.Solve()


##########################################################
# text output section for fitted parameter values

print("Equation:", equation.GetDisplayName(),
      str(equation.GetDimensionality()) + "D")
print("Fitting target of", equation.fittingTargetDictionary[equation.fittingTarget],
      '=', equation.CalculateAllDataFittingTarget(equation.solvedCoefficients))
print("Fitted Parameters:")
for i in range(len(equation.solvedCoefficients)):
    print("    %s = %-.16E" % (equation.GetCoefficientDesignators()
          [i], equation.solvedCoefficients[i]))
print()


##########################################################
# calculate absolute, relative, and percent errors from the fit
equation.CalculateModelErrors(
    equation.solvedCoefficients, equation.dataCache.allDataCacheDictionary)


##########################################################
# this section prints information on each individual data point
for i in range(len(equation.dataCache.allDataCacheDictionary['DependentData'])):
    print(
        'X:', equation.dataCache.allDataCacheDictionary['IndependentData'][0][i],)
    print('Y:', equation.dataCache.allDataCacheDictionary['DependentData'][i],)
    print('Model:', equation.modelPredictions[i],)
    print('Abs. Error:', equation.modelAbsoluteError[i],)
    if not equation.dataCache.DependentDataContainsZeroFlag:
        print('Rel. Error:', equation.modelRelativeError[i],)
        print('Percent Error:', equation.modelPercentError[i])
    else:
        print()
print()


##########################################################
# overall fit and parameter statistics output section

equation.CalculateCoefficientAndFitStatistics()

if equation.upperCoefficientBounds or equation.lowerCoefficientBounds:
    print('You entered coefficient bounds. Parameter statistics may')
    print('not be valid for parameter values at or near the bounds.')
    print()

print('Degress of freedom error',  equation.df_e)
print('Degress of freedom regression',  equation.df_r)

if equation.rmse is None:
    print('Root Mean Squared Error (RMSE): n/a')
else:
    print('Root Mean Squared Error (RMSE):',  equation.rmse)

if equation.r2 is None:
    print('R-squared: n/a')
else:
    print('R-squared:',  equation.r2)

if equation.r2adj is None:
    print('R-squared adjusted: n/a')
else:
    print('R-squared adjusted:',  equation.r2adj)

if equation.Fstat is None:
    print('Model F-statistic: n/a')
else:
    print('Model F-statistic:',  equation.Fstat)

if equation.Fpv is None:
    print('Model F-statistic p-value: n/a')
else:
    print('Model F-statistic p-value:',  equation.Fpv)

if equation.ll is None:
    print('Model log-likelihood: n/a')
else:
    print('Model log-likelihood:',  equation.ll)

if equation.aic is None:
    print('Model AIC: n/a')
else:
    print('Model AIC:',  equation.aic)

if equation.bic is None:
    print('Model BIC: n/a')
else:
    print('Model BIC:',  equation.bic)


print()
print("Individual Parameter Statistics:")
for i in range(len(equation.solvedCoefficients)):
    if type(equation.tstat_beta) == type(None):
        tstat = 'n/a'
    else:
        tstat = '%-.5E' % (equation.tstat_beta[i])

    if type(equation.pstat_beta) == type(None):
        pstat = 'n/a'
    else:
        pstat = '%-.5E' % (equation.pstat_beta[i])

    if type(equation.sd_beta) != type(None):
        print("Coefficient %s = %-.16E, std error: %-.5E" % (equation.GetCoefficientDesignators()
              [i], equation.solvedCoefficients[i], equation.sd_beta[i]))
    else:
        print("Coefficient %s = %-.16E, std error: n/a" %
              (equation.GetCoefficientDesignators()[i], equation.solvedCoefficients[i]))
    print("          t-stat: %s, p-stat: %s, 95 percent confidence intervals: [%-.5E, %-.5E]" % (
        tstat,  pstat, equation.ci[i][0], equation.ci[i][1]))


print()
print("Coefficient Covariance Matrix:")
for i in equation.cov_beta:
    print(i)


##########################################################
# graphics output section
def ModelScatterConfidenceGraph(equation, graphWidth, graphHeight):
    f = plt.figure(figsize=(graphWidth/100.0, graphHeight/100.0), dpi=100)
    axes = f.add_subplot(111)
    y_data = equation.dataCache.allDataCacheDictionary['DependentData']
    x_data = equation.dataCache.allDataCacheDictionary['IndependentData'][0]

    # first the raw data as a scatter plot
    axes.plot(x_data, y_data,  'D')

    # create data for the fitted equation plot
    xModel = numpy.linspace(min(x_data), max(x_data))

    tempcache = equation.dataCache  # store the data cache
    equation.dataCache = pyeq3.dataCache()
    equation.dataCache.allDataCacheDictionary['IndependentData'] = numpy.array([
                                                                               xModel, xModel])
    equation.dataCache.FindOrCreateAllDataCache(equation)
    yModel = equation.CalculateModelPredictions(
        equation.solvedCoefficients, equation.dataCache.allDataCacheDictionary)
    equation.dataCache = tempcache  # restore the original data cache

    # now the model as a line plot
    axes.plot(xModel, yModel)

    # now calculate confidence intervals
    # http://support.sas.com/documentation/cdl/en/statug/63347/HTML/default/viewer.htm#statug_nlin_sect026.htm
    # http://www.staff.ncl.ac.uk/tom.holderness/software/pythonlinearfit
    mean_x = numpy.mean(x_data)
    n = equation.nobs

    # (1.0 - (a/2)) is used for two-sided t-test critical value, here a = 0.05
    t_value = scipy.stats.t.ppf(0.975, equation.df_e)

    confs = t_value * numpy.sqrt((equation.sumOfSquaredErrors/equation.df_e)*(1.0/n + (numpy.power((xModel-mean_x), 2.0) /
                                                                                       ((numpy.sum(numpy.power(x_data, 2.0)))-n*(numpy.power(mean_x, 2.0))))))

    # get lower and upper confidence limits based on predicted y and confidence intervals
    upper = yModel + abs(confs)
    lower = yModel - abs(confs)

    # mask off any numbers outside the existing plot limits
    booleanMask = yModel > axes.get_ylim()[0]
    booleanMask &= (yModel < axes.get_ylim()[1])

    # color scheme improves visibility on black background lines or points
    axes.plot(xModel[booleanMask], lower[booleanMask],
              linestyle='solid', color='white')
    axes.plot(xModel[booleanMask], upper[booleanMask],
              linestyle='solid', color='white')
    axes.plot(xModel[booleanMask], lower[booleanMask],
              linestyle='dashed', color='blue')
    axes.plot(xModel[booleanMask], upper[booleanMask],
              linestyle='dashed', color='blue')

    axes.set_title('Model With 95% Confidence Intervals')  # add a title
    axes.set_xlabel('X Data')  # X axis data label
    axes.set_ylabel('Y Data')  # Y axis data label

    plt.show()
    plt.close('all')  # clean up after using pyplot


graphWidth = 800
graphHeight = 600
ModelScatterConfidenceGraph(equation, graphWidth, graphHeight)
