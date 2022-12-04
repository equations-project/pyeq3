#    pyeq3 is a collection of equations expressed as Python classes
#
#    Copyright (C) 2013 James R. Phillips
#    2548 Vera Cruz Drive
#    Birmingham, AL 35235 USA
#
#    https://github.com/equations-project/pyeq3
#
#    License: BSD-style (see LICENSE.txt in main source directory)

import sys
import os
if os.path.join(sys.path[0][:sys.path[0].rfind(os.sep)], '..') not in sys.path:
    sys.path.append(os.path.join(
        sys.path[0][:sys.path[0].rfind(os.sep)], '..'))

import pyeq3
import pyeq3.Model_3D_BaseClass

import numpy  # implicitly required by compiling the userFunctionCodeObject in the method EvaluateCachedData() below
numpy.seterr(all='ignore')


class UserDefinedFunction(pyeq3.Model_3D_BaseClass.Model_3D_BaseClass):
    userDefinedFunctionFlag = True

    # based on http://lybniz2.sourceforge.net/safeeval.html
    functionDictionary = {'Exponents And Logarithms': ['exp', 'log', 'log10', 'log2'],
                          'Trigonometric Functions':  ['sin', 'cos', 'tan', 'arcsin', 'arccos', 'arctan', 'hypot', 'arctan2', 'deg2rad', 'rad2deg'],
                          'Hyperbolic Trig Functions': ['arcsinh', 'arccosh', 'arctanh', 'sinh', 'cosh', 'tanh'],
                          'Other Special Functions':  ['sinc'],
                          'Miscellaneous':            ['sqrt', 'square', 'fabs', 'sign']
                          }

    constantsDictionary = {'Constants': ['pi', 'e']}
    _baseName = "User Defined Function"

    webReferenceURL = ''

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = False

    # all extended version autoGenerate flags are False by default in IModel.py

    def __init__(self, inFittingTarget='SSQABS', inExtendedVersionName='Default', inUserFunctionString=''):
        if inUserFunctionString:
            self.ParseAndCompileUserFunctionString(inUserFunctionString, dim=3)
        pyeq3.Model_3D_BaseClass.Model_3D_BaseClass.__init__(
            self, inFittingTarget, inExtendedVersionName)  # call superclass

    def GetDisplayHTML(self):
        return 'z = User Defined Function'

    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.X(NameOrValueFlag=1), []])
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.Y(NameOrValueFlag=1), []])
        return functionList

    def ShouldDataBeRejected(self, inModel):
        return False

    def AreCoefficientsWithinBounds(self, inCoeffs):
        return True  # User Defined Functions do not have coefficient bounds

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        self.safe_dict['X'] = inDataCacheDictionary['X']
        self.safe_dict['Y'] = inDataCacheDictionary['Y']

        # define coefficient values before calling eval
        for i in range(len(self._coefficientDesignators)):
            self.safe_dict[self._coefficientDesignators[i]] = inCoeffs[i]

        # eval uses previously compiled code for improved performance
        # based on http://lybniz2.sourceforge.net/safeeval._HTML
        try:
            temp = eval(self.userFunctionCodeObject, {
                        "__builtins__": None, 'numpy': numpy}, self.safe_dict)
            return self.extendedVersionHandler.GetAdditionalModelPredictions(temp, inCoeffs, inDataCacheDictionary, self)
        except:
            return numpy.ones(len(inDataCacheDictionary['X'])) * 1.0E300

    def Solve(self, inUserFunctionString=None, inAlgorithmName="Levenberg-Marquardt"):
        if inUserFunctionString:
            self.ParseAndCompileUserFunctionString(inUserFunctionString, dim=3)

        # starting point
        if len(self.estimatedCoefficients) == 0:
            self.estimatedCoefficients = pyeq3.solverService().SolveUsingDE(self)

        if self.fittingTarget == 'ODR':
            return pyeq3.solverService().SolveUsingODR(self)

        self.estimatedCoefficients = pyeq3.solverService().SolveUsingSelectedAlgorithm(
            self, inAlgorithmName=inAlgorithmName)
        return pyeq3.solverService().SolveUsingSimplex(self)
