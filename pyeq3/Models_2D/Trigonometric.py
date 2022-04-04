#    pyeq3 is a collection of equations expressed as Python classes
#
#    Copyright (C) 2013 James R. Phillips
#    2548 Vera Cruz Drive
#    Birmingham, AL 35235 USA
#
#    email: zunzun@zunzun.com
#
#    License: BSD-style (see LICENSE.txt in main source directory)

import sys, os
if os.path.join(sys.path[0][:sys.path[0].rfind(os.sep)], '..') not in sys.path:
    sys.path.append(os.path.join(sys.path[0][:sys.path[0].rfind(os.sep)], '..'))

import pyeq3

import numpy
numpy.seterr(all= 'ignore')


import pyeq3.Model_2D_BaseClass



class GreatCircleDegrees(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "Great Circle [Degrees]"
    _HTML = 'latitude = arctan(A*cos((B + longitude) / 57.2957795131)) * 57.2957795131'
    _leftSideHTML = 'latitude'
    _coefficientDesignators = ['A', 'B']
    _canLinearSolverBeUsedForSSQABS = False
    
    webReferenceURL = ''

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = False

    # all extended version autoGenerate flags are False by default in IModel.py
    autoGenerateReciprocalForm = True
    autoGenerateInverseForms = True
    autoGenerateGrowthAndDecayForms = True

    independentData1CannotContainZeroFlag = False
    independentData1CannotContainPositiveFlag = False
    independentData1CannotContainNegativeFlag = False
    independentData2CannotContainZeroFlag = False
    independentData2CannotContainPositiveFlag = False
    independentData2CannotContainNegativeFlag = False
    

    def __init__(self, inFittingTarget = 'SSQABS', inExtendedVersionName = 'Default'):
        pyeq3.Model_2D_BaseClass.Model_2D_BaseClass.__init__(self, inFittingTarget, inExtendedVersionName)
        self.lowerCoefficientBounds = [None, -360.0]
        self.upperCoefficientBounds = [None, 360.0]
        self.extendedVersionHandler.AppendAdditionalCoefficientBounds(self)


    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append([pyeq3.DataCache.DataCacheFunctions.X(NameOrValueFlag=1), []])
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(self, functionList)


    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        x_in = inDataCacheDictionary['X'] # only need to perform this dictionary look-up once
        
        A = inCoeffs[0]
        B = inCoeffs[1]

        try:
            temp = numpy.arctan(A*numpy.cos((B + x_in) / 57.2957795131)) * 57.2957795131
            return self.extendedVersionHandler.GetAdditionalModelPredictions(temp, inCoeffs, inDataCacheDictionary, self)
        except:
            return numpy.ones(len(inDataCacheDictionary['DependentData'])) * 1.0E300


    def SpecificCodeCPP(self):
        s = "\ttemp = atan(A*cos((B + x_in) / 57.2957795131)) * 57.2957795131;\n"
        return s



class GreatCircleRadians(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "Great Circle [radians]"
    _HTML = 'latitude = arctan(A*cos(B + longitude))'
    _leftSideHTML = 'latitude'
    _coefficientDesignators = ['A', 'B']
    _canLinearSolverBeUsedForSSQABS = False
    
    webReferenceURL = ''

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = False

    # all extended version autoGenerate flags are False by default in IModel.py
    autoGenerateReciprocalForm = True
    autoGenerateInverseForms = True
    autoGenerateGrowthAndDecayForms = True

    independentData1CannotContainZeroFlag = False
    independentData1CannotContainPositiveFlag = False
    independentData1CannotContainNegativeFlag = False
    independentData2CannotContainZeroFlag = False
    independentData2CannotContainPositiveFlag = False
    independentData2CannotContainNegativeFlag = False
    

    def __init__(self, inFittingTarget = 'SSQABS', inExtendedVersionName = 'Default'):
        pyeq3.Model_2D_BaseClass.Model_2D_BaseClass.__init__(self, inFittingTarget, inExtendedVersionName)
        self.lowerCoefficientBounds = [None, -6.2831853072]
        self.upperCoefficientBounds = [None, 6.2831853072]
        self.extendedVersionHandler.AppendAdditionalCoefficientBounds(self)


    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append([pyeq3.DataCache.DataCacheFunctions.X(NameOrValueFlag=1), []])
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(self, functionList)


    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        x_in = inDataCacheDictionary['X'] # only need to perform this dictionary look-up once
        
        A = inCoeffs[0]
        B = inCoeffs[1]

        try:
            temp = numpy.arctan(A*numpy.cos(B + x_in))
            return self.extendedVersionHandler.GetAdditionalModelPredictions(temp, inCoeffs, inDataCacheDictionary, self)
        except:
            return numpy.ones(len(inDataCacheDictionary['DependentData'])) * 1.0E300


    def SpecificCodeCPP(self):
        s = "\ttemp = atan(A*cos(B + x_in));\n"
        return s



class Sine(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "Sine [radians]"
    _HTML = 'y = amplitude * sin(pi * (x - center) / width)'
    _leftSideHTML = 'y'
    _coefficientDesignators = ['amplitude', 'center', 'width']
    _canLinearSolverBeUsedForSSQABS = False
    
    webReferenceURL = ''

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = True

    # all extended version autoGenerate flags are False by default in IModel.py
    autoGenerateOffsetForm = True
    autoGenerateReciprocalForm = True
    autoGenerateInverseForms = True
    autoGenerateGrowthAndDecayForms = True

    independentData1CannotContainZeroFlag = False
    independentData1CannotContainPositiveFlag = False
    independentData1CannotContainNegativeFlag = False
    independentData2CannotContainZeroFlag = False
    independentData2CannotContainPositiveFlag = False
    independentData2CannotContainNegativeFlag = False
    

    def __init__(self, inFittingTarget = 'SSQABS', inExtendedVersionName = 'Default'):
        pyeq3.Model_2D_BaseClass.Model_2D_BaseClass.__init__(self, inFittingTarget, inExtendedVersionName)
        self.lowerCoefficientBounds = [None, None, 0.0]
        self.extendedVersionHandler.AppendAdditionalCoefficientBounds(self)


    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append([pyeq3.DataCache.DataCacheFunctions.X(NameOrValueFlag=1), []])
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(self, functionList)


    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        x_in = inDataCacheDictionary['X'] # only need to perform this dictionary look-up once
        
        amplitude = inCoeffs[0]
        center = inCoeffs[1]
        width = inCoeffs[2]

        try:
            temp = amplitude * numpy.sin(numpy.pi * (x_in - center) / width)
            return self.extendedVersionHandler.GetAdditionalModelPredictions(temp, inCoeffs, inDataCacheDictionary, self)
        except:
            return numpy.ones(len(inDataCacheDictionary['DependentData'])) * 1.0E300


    def SpecificCodeCPP(self):
        s = "\ttemp = amplitude * sin(3.14159265358979323846 * (x_in - center) / width);\n"
        return s



class Sine_NyquistLimited(Sine):
    _baseName = "Sine [radians] (Nyquist Limited)"
    autoGeneratePlusLineForm = True

    def Solve(self, inNonLinearSolverAlgorithmName='Levenberg-Marquardt'):
        if self.lowerCoefficientBounds[2] == 0.0: # user did not override bound
            self.dataCache.FindOrCreateAllDataCache(self)
            x = self.dataCache.allDataCacheDictionary['IndependentData'][0]
            xMax = max(x)
            xMin = min(x)
            n = len(x)
            self.lowerCoefficientBounds[2] = (xMax - xMin) / (n/2.0)
        Sine.Solve(self, inNonLinearSolverAlgorithmName)



class SineSquared(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "Sine Squared [radians]"
    _HTML = 'y = amplitude * sin(pi * (x - center) / width)<sup>2</sup>'
    _leftSideHTML = 'y'
    _coefficientDesignators = ['amplitude', 'center', 'width']
    _canLinearSolverBeUsedForSSQABS = False
    
    webReferenceURL = ''

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = True

    # all extended version autoGenerate flags are False by default in IModel.py
    autoGenerateOffsetForm = True
    autoGenerateReciprocalForm = True
    autoGenerateInverseForms = True
    autoGenerateGrowthAndDecayForms = True

    independentData1CannotContainZeroFlag = False
    independentData1CannotContainPositiveFlag = False
    independentData1CannotContainNegativeFlag = False
    independentData2CannotContainZeroFlag = False
    independentData2CannotContainPositiveFlag = False
    independentData2CannotContainNegativeFlag = False
    

    def __init__(self, inFittingTarget = 'SSQABS', inExtendedVersionName = 'Default'):
        pyeq3.Model_2D_BaseClass.Model_2D_BaseClass.__init__(self, inFittingTarget, inExtendedVersionName)
        self.lowerCoefficientBounds = [None, None, 0.0]
        self.extendedVersionHandler.AppendAdditionalCoefficientBounds(self)


    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append([pyeq3.DataCache.DataCacheFunctions.X(NameOrValueFlag=1), []])
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(self, functionList)


    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        x_in = inDataCacheDictionary['X'] # only need to perform this dictionary look-up once
        
        amplitude = inCoeffs[0]
        center = inCoeffs[1]
        width = inCoeffs[2]

        try:
            temp = amplitude * numpy.sin(numpy.pi * (x_in - center) / width) * numpy.sin(numpy.pi * (x_in - center) / width)
            return self.extendedVersionHandler.GetAdditionalModelPredictions(temp, inCoeffs, inDataCacheDictionary, self)
        except:
            return numpy.ones(len(inDataCacheDictionary['DependentData'])) * 1.0E300


    def SpecificCodeCPP(self):
        s = "\ttemp = amplitude * sin(3.14159265358979323846 * (x_in - center) / width) * sin(3.14159265358979323846 * (x_in - center) / width);\n"
        return s



class SineSquared_NyquistLimited(SineSquared):
    _baseName = "Sine Squared [radians] (Nyquist Limited)"
    autoGeneratePlusLineForm = True

    def Solve(self, inNonLinearSolverAlgorithmName='Levenberg-Marquardt'):
        if self.lowerCoefficientBounds[2] == 0.0: # user did not override bound
            self.dataCache.FindOrCreateAllDataCache(self)
            x = self.dataCache.allDataCacheDictionary['IndependentData'][0]
            xMax = max(x)
            xMin = min(x)
            n = len(x)
            self.lowerCoefficientBounds[2] = (xMax - xMin) / (n/2.0)
        SineSquared.Solve(self, inNonLinearSolverAlgorithmName)



class Tangent(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "Tangent [radians]"
    _HTML = 'y = amplitude * tan(pi * (x - center) / width)'
    _leftSideHTML = 'y'
    _coefficientDesignators = ['amplitude', 'center', 'width']
    _canLinearSolverBeUsedForSSQABS = False
    
    webReferenceURL = ''

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = True

    # all extended version autoGenerate flags are False by default in IModel.py
    autoGenerateOffsetForm = True
    autoGenerateReciprocalForm = True
    autoGenerateInverseForms = True
    autoGenerateGrowthAndDecayForms = True

    independentData1CannotContainZeroFlag = False
    independentData1CannotContainPositiveFlag = False
    independentData1CannotContainNegativeFlag = False
    independentData2CannotContainZeroFlag = False
    independentData2CannotContainPositiveFlag = False
    independentData2CannotContainNegativeFlag = False
    

    def __init__(self, inFittingTarget = 'SSQABS', inExtendedVersionName = 'Default'):
        pyeq3.Model_2D_BaseClass.Model_2D_BaseClass.__init__(self, inFittingTarget, inExtendedVersionName)
        self.lowerCoefficientBounds = [None, None, 0.0]
        self.extendedVersionHandler.AppendAdditionalCoefficientBounds(self)


    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append([pyeq3.DataCache.DataCacheFunctions.X(NameOrValueFlag=1), []])
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(self, functionList)


    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        x_in = inDataCacheDictionary['X'] # only need to perform this dictionary look-up once
        
        amplitude = inCoeffs[0]
        center = inCoeffs[1]
        width = inCoeffs[2]

        try:
            temp = amplitude * numpy.tan(numpy.pi * (x_in - center) / width)
            return self.extendedVersionHandler.GetAdditionalModelPredictions(temp, inCoeffs, inDataCacheDictionary, self)
        except:
            return numpy.ones(len(inDataCacheDictionary['DependentData'])) * 1.0E300


    def SpecificCodeCPP(self):
        s = "\ttemp = amplitude * tan(3.14159265358979323846 * (x_in - center) / width);\n"
        return s



class Tangent_NyquistLimited(Tangent):
    _baseName = "Tangent [radians] (Nyquist Limited)"
    autoGeneratePlusLineForm = True

    def Solve(self, inNonLinearSolverAlgorithmName='Levenberg-Marquardt'):
        if self.lowerCoefficientBounds[2] == 0.0: # user did not override bound
            self.dataCache.FindOrCreateAllDataCache(self)
            x = self.dataCache.allDataCacheDictionary['IndependentData'][0]
            xMax = max(x)
            xMin = min(x)
            n = len(x)
            self.lowerCoefficientBounds[2] = (xMax - xMin) / (n/2.0)
        Tangent.Solve(self, inNonLinearSolverAlgorithmName)



class HyperbolicCosine(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "Hyperbolic Cosine [radians]"
    _HTML = 'y = amplitude * cosh(pi * (x - center) / width)'
    _leftSideHTML = 'y'
    _coefficientDesignators = ['amplitude', 'center', 'width']
    _canLinearSolverBeUsedForSSQABS = False
    
    webReferenceURL = ''

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = True

    # all extended version autoGenerate flags are False by default in IModel.py
    autoGenerateOffsetForm = True
    autoGenerateReciprocalForm = True
    autoGenerateInverseForms = True
    autoGenerateGrowthAndDecayForms = True

    independentData1CannotContainZeroFlag = False
    independentData1CannotContainPositiveFlag = False
    independentData1CannotContainNegativeFlag = False
    independentData2CannotContainZeroFlag = False
    independentData2CannotContainPositiveFlag = False
    independentData2CannotContainNegativeFlag = False
    

    def __init__(self, inFittingTarget = 'SSQABS', inExtendedVersionName = 'Default'):
        pyeq3.Model_2D_BaseClass.Model_2D_BaseClass.__init__(self, inFittingTarget, inExtendedVersionName)
        self.lowerCoefficientBounds = [None, None, 0.0]
        self.extendedVersionHandler.AppendAdditionalCoefficientBounds(self)


    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append([pyeq3.DataCache.DataCacheFunctions.X(NameOrValueFlag=1), []])
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(self, functionList)


    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        x_in = inDataCacheDictionary['X'] # only need to perform this dictionary look-up once
        
        amplitude = inCoeffs[0]
        center = inCoeffs[1]
        width = inCoeffs[2]

        try:
            temp = amplitude * numpy.cosh(numpy.pi * (x_in - center) / width)
            return self.extendedVersionHandler.GetAdditionalModelPredictions(temp, inCoeffs, inDataCacheDictionary, self)
        except:
            return numpy.ones(len(inDataCacheDictionary['DependentData'])) * 1.0E300


    def SpecificCodeCPP(self):
        s = "\ttemp = amplitude * cosh(3.14159265358979323846 * (x_in - center) / width);\n"
        return s



class HyperbolicCosine_NyquistLimited(HyperbolicCosine):
    _baseName = "Hyperbolic Cosine [radians] (Nyquist Limited)"
    autoGeneratePlusLineForm = True

    def Solve(self, inNonLinearSolverAlgorithmName='Levenberg-Marquardt'):
        if self.lowerCoefficientBounds[2] == 0.0: # user did not override bound
            self.dataCache.FindOrCreateAllDataCache(self)
            x = self.dataCache.allDataCacheDictionary['IndependentData'][0]
            xMax = max(x)
            xMin = min(x)
            n = len(x)
            self.lowerCoefficientBounds[2] = (xMax - xMin) / (n/2.0)
        HyperbolicCosine.Solve(self, inNonLinearSolverAlgorithmName)



class Sinc(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "Cardinal Sine (sinc) [radians]"
    _HTML = 'y = amplitude * sin(pi * (x - center) / width) / (pi * (x - center) / width)'
    _leftSideHTML = 'y'
    _coefficientDesignators = ['amplitude', 'center', 'width']
    _canLinearSolverBeUsedForSSQABS = False
    
    webReferenceURL = ''

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = True

    # all extended version autoGenerate flags are False by default in IModel.py
    autoGenerateOffsetForm = True
    autoGenerateReciprocalForm = True
    autoGenerateInverseForms = True
    autoGenerateGrowthAndDecayForms = True

    independentData1CannotContainZeroFlag = False
    independentData1CannotContainPositiveFlag = False
    independentData1CannotContainNegativeFlag = False
    independentData2CannotContainZeroFlag = False
    independentData2CannotContainPositiveFlag = False
    independentData2CannotContainNegativeFlag = False
    

    def __init__(self, inFittingTarget = 'SSQABS', inExtendedVersionName = 'Default'):
        pyeq3.Model_2D_BaseClass.Model_2D_BaseClass.__init__(self, inFittingTarget, inExtendedVersionName)
        self.lowerCoefficientBounds = [None, None, 0.0]
        self.extendedVersionHandler.AppendAdditionalCoefficientBounds(self)


    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append([pyeq3.DataCache.DataCacheFunctions.X(NameOrValueFlag=1), []])
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(self, functionList)


    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        x_in = inDataCacheDictionary['X'] # only need to perform this dictionary look-up once
        
        amplitude = inCoeffs[0]
        center = inCoeffs[1]
        width = inCoeffs[2]

        try:
            temp = amplitude * numpy.sin(numpy.pi * (x_in - center) / width) / (numpy.pi * (x_in - center) / width)
            return self.extendedVersionHandler.GetAdditionalModelPredictions(temp, inCoeffs, inDataCacheDictionary, self)
        except:
            return numpy.ones(len(inDataCacheDictionary['DependentData'])) * 1.0E300


    def SpecificCodeCPP(self):
        s = "\ttemp = amplitude * sin(3.14159265358979323846 * (x_in - center) / width) / (3.14159265358979323846 * (x_in - center) / width);\n"
        return s



class Sinc_NyquistLimited(Sinc):
    _baseName = "Cardinal Sine (sinc) [radians] (Nyquist Limited)"
    autoGeneratePlusLineForm = True

    def Solve(self, inNonLinearSolverAlgorithmName='Levenberg-Marquardt'):
        if self.lowerCoefficientBounds[2] == 0.0: # user did not override bound
            self.dataCache.FindOrCreateAllDataCache(self)
            x = self.dataCache.allDataCacheDictionary['IndependentData'][0]
            xMax = max(x)
            xMin = min(x)
            n = len(x)
            self.lowerCoefficientBounds[2] = (xMax - xMin) / (n/2.0)
        Sinc.Solve(self, inNonLinearSolverAlgorithmName)



class SincSquared(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "Cardinal Sine (sinc) Squared [radians]"
    _HTML = 'y = amplitude * sin(pi * (x - center) / width)<sup>2</sup> / (pi * (x - center) / width)'
    _leftSideHTML = 'y'
    _coefficientDesignators = ['amplitude', 'center', 'width']
    _canLinearSolverBeUsedForSSQABS = False
    
    webReferenceURL = ''

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = True

    # all extended version autoGenerate flags are False by default in IModel.py
    autoGenerateOffsetForm = True
    autoGenerateReciprocalForm = True
    autoGenerateInverseForms = True
    autoGenerateGrowthAndDecayForms = True

    independentData1CannotContainZeroFlag = False
    independentData1CannotContainPositiveFlag = False
    independentData1CannotContainNegativeFlag = False
    independentData2CannotContainZeroFlag = False
    independentData2CannotContainPositiveFlag = False
    independentData2CannotContainNegativeFlag = False
    

    def __init__(self, inFittingTarget = 'SSQABS', inExtendedVersionName = 'Default'):
        pyeq3.Model_2D_BaseClass.Model_2D_BaseClass.__init__(self, inFittingTarget, inExtendedVersionName)
        self.lowerCoefficientBounds = [None, None, 0.0]
        self.extendedVersionHandler.AppendAdditionalCoefficientBounds(self)


    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append([pyeq3.DataCache.DataCacheFunctions.X(NameOrValueFlag=1), []])
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(self, functionList)


    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        x_in = inDataCacheDictionary['X'] # only need to perform this dictionary look-up once
        
        amplitude = inCoeffs[0]
        center = inCoeffs[1]
        width = inCoeffs[2]

        try:
            temp = amplitude * numpy.sin(numpy.pi * (x_in - center) / width) * numpy.sin(numpy.pi * (x_in - center) / width) / (numpy.pi * (x_in - center) / width)
            return self.extendedVersionHandler.GetAdditionalModelPredictions(temp, inCoeffs, inDataCacheDictionary, self)
        except:
            return numpy.ones(len(inDataCacheDictionary['DependentData'])) * 1.0E300


    def SpecificCodeCPP(self):
        s = "\ttemp = amplitude * sin(3.14159265358979323846 * (x_in - center) / width) * sin(3.14159265358979323846 * (x_in - center) / width) / (3.14159265358979323846 * (x_in - center) / width);\n"
        return s



class SincSquared_NyquistLimited(SincSquared):
    _baseName = "Cardinal Sine (sinc) Squared [radians] (Nyquist Limited)"
    autoGeneratePlusLineForm = True

    def Solve(self, inNonLinearSolverAlgorithmName='Levenberg-Marquardt'):
        if self.lowerCoefficientBounds[2] == 0.0: # user did not override bound
            self.dataCache.FindOrCreateAllDataCache(self)
            x = self.dataCache.allDataCacheDictionary['IndependentData'][0]
            xMax = max(x)
            xMin = min(x)
            n = len(x)
            self.lowerCoefficientBounds[2] = (xMax - xMin) / (n/2.0)
        SincSquared.Solve(self, inNonLinearSolverAlgorithmName)
