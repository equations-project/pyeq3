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

if os.path.join(sys.path[0][: sys.path[0].rfind(os.sep)], "..") not in sys.path:
    sys.path.append(os.path.join(sys.path[0][: sys.path[0].rfind(os.sep)], ".."))

import pyeq3
import pyeq3.Model_2D_BaseClass

import numpy

numpy.seterr(all="ignore")


class AsymptoticExponentialA(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    autoGeneratePlusLineForm = True  # auto-added by script

    _baseName = "Asymptotic Exponential A"
    _HTML = "y = 1.0 - a<sup>x</sup>"
    _leftSideHTML = "y"
    _coefficientDesignators = ["a"]
    _canLinearSolverBeUsedForSSQABS = False

    webReferenceURL = ""

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = False

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

    def __init__(self, inFittingTarget="SSQABS", inExtendedVersionName="Default"):
        pyeq3.Model_2D_BaseClass.Model_2D_BaseClass.__init__(
            self, inFittingTarget, inExtendedVersionName
        )
        self.lowerCoefficientBounds = [0.0]
        self.extendedVersionHandler.AppendAdditionalCoefficientBounds(self)

    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.X(NameOrValueFlag=1), []]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_in = inDataCacheDictionary["X"]

        a = inCoeffs[0]

        try:
            temp = 1.0 - numpy.power(a, x_in)
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = 1.0 - pow(a, x_in);\n"
        return s


class AsymptoticExponentialA_Transform(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "Asymptotic Exponential A Transform"
    _HTML = "y = 1.0 - a<sup>bx + c</sup>"
    _leftSideHTML = "y"
    _coefficientDesignators = ["a", "b", "c"]
    _canLinearSolverBeUsedForSSQABS = False

    webReferenceURL = ""

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = False

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

    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.X(NameOrValueFlag=1), []]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_in = inDataCacheDictionary["X"]

        a = inCoeffs[0]
        b = inCoeffs[1]
        c = inCoeffs[2]

        try:
            temp = 1.0 - numpy.power(a, b * x_in + c)
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = 1.0 - pow(a, b * x_in + c);\n"
        return s


class AsymptoticExponentialB(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    autoGeneratePlusLineForm = True  # auto-added by script

    _baseName = "Asymptotic Exponential B"
    _HTML = "y = a * (1.0 - exp(bx))"
    _leftSideHTML = "y"
    _coefficientDesignators = ["a", "b"]
    _canLinearSolverBeUsedForSSQABS = False

    webReferenceURL = ""

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

    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.X(NameOrValueFlag=1), []]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_in = inDataCacheDictionary["X"]

        a = inCoeffs[0]
        b = inCoeffs[1]

        try:
            temp = a * (1.0 - numpy.exp(b * x_in))
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = a * (1.0 - exp(b * x_in));\n"
        return s


class DoubleAsymptoticExponentialB(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "Double Asymptotic Exponential B"
    _HTML = "y = a * (1.0 - exp(bx)) + c * (1.0 - exp(dx))"
    _leftSideHTML = "y"
    _coefficientDesignators = ["a", "b", "c", "d"]
    _canLinearSolverBeUsedForSSQABS = False

    webReferenceURL = ""

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = False

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

    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.X(NameOrValueFlag=1), []]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_in = inDataCacheDictionary["X"]

        a = inCoeffs[0]
        b = inCoeffs[1]
        c = inCoeffs[2]
        d = inCoeffs[3]

        try:
            temp = a * (1.0 - numpy.exp(b * x_in)) + c * (1.0 - numpy.exp(d * x_in))
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = a * (1.0 - exp(b * x_in)) + c * (1.0 - exp(d * x_in));\n"
        return s


class BrunoTorremansQuadrupleExponential(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "Bruno Torremans Quadruple Exponential"
    _HTML = "y = Offset - R1 * exp(-x/T1) + R2 * exp(-x/T2) + R3 * exp(-x/T3) + R4 * exp(-x/T4)"
    _leftSideHTML = "y"
    _coefficientDesignators = ["R1", "R2", "R3", "R4", "T1", "T2", "T3", "T4", "Offset"]
    _canLinearSolverBeUsedForSSQABS = False

    webReferenceURL = ""

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = False

    # all extended version autoGenerate flags are False by default in IModel.py

    independentData1CannotContainZeroFlag = False
    independentData1CannotContainPositiveFlag = False
    independentData1CannotContainNegativeFlag = False
    independentData2CannotContainZeroFlag = False
    independentData2CannotContainPositiveFlag = False
    independentData2CannotContainNegativeFlag = False

    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.NegX(NameOrValueFlag=1), []]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_NegX = inDataCacheDictionary["NegX"]

        R1 = inCoeffs[0]
        R2 = inCoeffs[1]
        R3 = inCoeffs[2]
        R4 = inCoeffs[3]
        T1 = inCoeffs[4]
        T2 = inCoeffs[5]
        T3 = inCoeffs[6]
        T4 = inCoeffs[7]
        Offset = inCoeffs[8]

        try:
            temp = (
                Offset
                - R1 * numpy.exp(x_NegX / T1)
                - R2 * numpy.exp(x_NegX / T2)
                - R3 * numpy.exp(x_NegX / T3)
                - R4 * numpy.exp(x_NegX / T4)
            )
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = Offset - R1*exp(-x_in/T1) - R2*exp(-x_in/T2) - R3*exp(-x_in/T3) - R4*exp(-x_in/T4);\n"
        return s


class DoubleExponential(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "Double Exponential"
    _HTML = "y = a * exp(bx) + c * exp(dx)"
    _leftSideHTML = "y"
    _coefficientDesignators = ["a", "b", "c", "d"]
    _canLinearSolverBeUsedForSSQABS = False

    webReferenceURL = ""

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = False

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

    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.X(NameOrValueFlag=1), []]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_in = inDataCacheDictionary["X"]

        a = inCoeffs[0]
        b = inCoeffs[1]
        c = inCoeffs[2]
        d = inCoeffs[3]

        try:
            temp = a * numpy.exp(b * x_in) + c * numpy.exp(d * x_in)
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = a * exp(b*x_in) + c * exp(d*x_in);\n"
        return s


class Exponential(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    autoGeneratePlusLineForm = True  # auto-added by script

    _baseName = "Exponential"
    _HTML = "y = a * exp(bx)"
    _leftSideHTML = "y"
    _coefficientDesignators = ["a", "b"]
    _canLinearSolverBeUsedForSSQABS = False

    webReferenceURL = ""

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

    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.X(NameOrValueFlag=1), []]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_in = inDataCacheDictionary["X"]

        a = inCoeffs[0]
        b = inCoeffs[1]

        try:
            temp = a * numpy.exp(b * x_in)
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = a * exp(b*x_in);\n"
        return s


class Hocket_Sherby(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "Hocket-Sherby"
    _HTML = "y = b - (b-a) * exp(-c * (x<sup>d</sup>))"
    _leftSideHTML = "y"
    _coefficientDesignators = ["a", "b", "c", "d"]
    _canLinearSolverBeUsedForSSQABS = False

    webReferenceURL = ""

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = False

    # all extended version autoGenerate flags are False by default in IModel.py
    autoGenerateReciprocalForm = True
    autoGenerateInverseForms = True
    autoGenerateGrowthAndDecayForms = True

    independentData1CannotContainZeroFlag = False
    independentData1CannotContainPositiveFlag = False
    independentData1CannotContainNegativeFlag = True
    independentData2CannotContainZeroFlag = False
    independentData2CannotContainPositiveFlag = False
    independentData2CannotContainNegativeFlag = False

    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.X(NameOrValueFlag=1), []]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_in = inDataCacheDictionary["X"]

        a = inCoeffs[0]
        b = inCoeffs[1]
        c = inCoeffs[2]
        d = inCoeffs[3]

        try:
            temp = b - (b - a) * numpy.exp(-1.0 * c * numpy.power(x_in, d))
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = b - (b-a) * exp(-1.0 * c * pow(x_in, d));\n"
        return s


class Hoerl(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "Hoerl"
    autoGeneratePlusLineForm = True
    _HTML = "y = x<sup>a</sup> * exp(x)"
    _leftSideHTML = "y"
    _coefficientDesignators = ["a"]
    _canLinearSolverBeUsedForSSQABS = False

    webReferenceURL = ""

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = False

    # all extended version autoGenerate flags are False by default in IModel.py
    autoGenerateOffsetForm = True
    autoGenerateReciprocalForm = True
    autoGenerateInverseForms = True
    autoGenerateGrowthAndDecayForms = True

    independentData1CannotContainZeroFlag = False
    independentData1CannotContainPositiveFlag = False
    independentData1CannotContainNegativeFlag = True
    independentData2CannotContainZeroFlag = False
    independentData2CannotContainPositiveFlag = False
    independentData2CannotContainNegativeFlag = False

    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.X(NameOrValueFlag=1), []]
        )
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.ExpX(NameOrValueFlag=1), []]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_in = inDataCacheDictionary["X"]
        # only need to perform this dictionary look-up once
        x_ExpX = inDataCacheDictionary["ExpX"]

        a = inCoeffs[0]

        try:
            temp = numpy.power(x_in, a) * x_ExpX
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = pow(x_in, a) * exp(x_in);\n"
        return s


class Hoerl_Transform(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "Hoerl Transform"
    _HTML = "y = (bx + c)<sup>a</sup> * exp(bx + c)"
    _leftSideHTML = "y"
    _coefficientDesignators = ["a", "b", "c"]
    _canLinearSolverBeUsedForSSQABS = False

    webReferenceURL = ""

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = False

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

    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.X(NameOrValueFlag=1), []]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_in = inDataCacheDictionary["X"]

        a = inCoeffs[0]
        b = inCoeffs[1]
        c = inCoeffs[2]

        try:
            temp = numpy.power(b * x_in + c, a) * numpy.exp(b * x_in + c)
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = pow(b * x_in + c, a) * exp(b * x_in + c);\n"
        return s


class InvExponential(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    autoGeneratePlusLineForm = True  # auto-added by script

    _baseName = "Inverted Exponential"
    _HTML = "y = a * exp(b/x)"
    _leftSideHTML = "y"
    _coefficientDesignators = ["a", "b"]
    _canLinearSolverBeUsedForSSQABS = False

    webReferenceURL = ""

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = True

    # all extended version autoGenerate flags are False by default in IModel.py
    autoGenerateOffsetForm = True
    autoGenerateReciprocalForm = True
    autoGenerateInverseForms = True
    autoGenerateGrowthAndDecayForms = True

    independentData1CannotContainZeroFlag = True
    independentData1CannotContainPositiveFlag = False
    independentData1CannotContainNegativeFlag = False
    independentData2CannotContainZeroFlag = False
    independentData2CannotContainPositiveFlag = False
    independentData2CannotContainNegativeFlag = False

    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.X(NameOrValueFlag=1), []]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_in = inDataCacheDictionary["X"]

        a = inCoeffs[0]
        b = inCoeffs[1]

        try:
            temp = a * numpy.exp(b / x_in)
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = a * exp(b/x_in);\n"
        return s


class InvertedOffsetExponential(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "Inverted Offset Exponential"
    _HTML = "y = a * exp(b/(x+c))"
    _leftSideHTML = "y"
    _coefficientDesignators = ["a", "b", "c"]
    _canLinearSolverBeUsedForSSQABS = False

    webReferenceURL = ""

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

    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.X(NameOrValueFlag=1), []]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_in = inDataCacheDictionary["X"]

        a = inCoeffs[0]
        b = inCoeffs[1]
        c = inCoeffs[2]

        try:
            temp = a * numpy.exp(b / (x_in + c))
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = a * exp(b/(x_in+c));\n"
        return s


class OffsetExponential(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "Offset Exponential"
    _HTML = "y = a * exp(bx + c)"
    _leftSideHTML = "y"
    _coefficientDesignators = ["a", "b", "c"]
    _canLinearSolverBeUsedForSSQABS = False

    webReferenceURL = ""

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

    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.X(NameOrValueFlag=1), []]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_in = inDataCacheDictionary["X"]

        a = inCoeffs[0]
        b = inCoeffs[1]
        c = inCoeffs[2]

        try:
            temp = a * numpy.exp(b * x_in + c)
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = a * exp(b*x_in + c);\n"
        return s


class ScaledExponential(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    autoGeneratePlusLineForm = True  # auto-added by script

    _baseName = "Scaled Exponential"
    _HTML = "y = a * exp(x)"
    _leftSideHTML = "y"
    _coefficientDesignators = ["a"]
    _canLinearSolverBeUsedForSSQABS = False

    webReferenceURL = ""

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = True

    # all extended version autoGenerate flags are False by default in IModel.py
    autoGenerateOffsetForm = True
    autoGenerateReciprocalForm = True
    autoGenerateGrowthAndDecayForms = True

    independentData1CannotContainZeroFlag = False
    independentData1CannotContainPositiveFlag = False
    independentData1CannotContainNegativeFlag = False
    independentData2CannotContainZeroFlag = False
    independentData2CannotContainPositiveFlag = False
    independentData2CannotContainNegativeFlag = False

    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.ExpX(NameOrValueFlag=1), []]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_ExpX = inDataCacheDictionary["ExpX"]

        a = inCoeffs[0]

        try:
            temp = a * x_ExpX
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = a * exp(x_in);\n"
        return s


class ShiftedExponential(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    autoGeneratePlusLineForm = True  # auto-added by script

    _baseName = "Shifted Exponential"
    _HTML = "y = a * exp(x + b)"
    _leftSideHTML = "y"
    _coefficientDesignators = ["a", "b"]
    _canLinearSolverBeUsedForSSQABS = False

    webReferenceURL = ""

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

    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.X(NameOrValueFlag=1), []]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_in = inDataCacheDictionary["X"]

        a = inCoeffs[0]
        b = inCoeffs[1]

        try:
            temp = a * numpy.exp(x_in + b)
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = a * exp(x_in + b);\n"
        return s


class SimpleExponential(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    autoGeneratePlusLineForm = True  # auto-added by script

    _baseName = "Simple Exponential"
    _HTML = "y = a<sup>x</sup>"
    _leftSideHTML = "y"
    _coefficientDesignators = ["a"]
    _canLinearSolverBeUsedForSSQABS = False

    webReferenceURL = ""

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = False

    # all extended version autoGenerate flags are False by default in IModel.py
    autoGenerateOffsetForm = True
    autoGenerateReciprocalForm = True
    autoGenerateGrowthAndDecayForms = True

    independentData1CannotContainZeroFlag = False
    independentData1CannotContainPositiveFlag = False
    independentData1CannotContainNegativeFlag = False
    independentData2CannotContainZeroFlag = False
    independentData2CannotContainPositiveFlag = False
    independentData2CannotContainNegativeFlag = False

    def __init__(self, inFittingTarget="SSQABS", inExtendedVersionName="Default"):
        pyeq3.Model_2D_BaseClass.Model_2D_BaseClass.__init__(
            self, inFittingTarget, inExtendedVersionName
        )
        self.lowerCoefficientBounds = [0.0]
        self.extendedVersionHandler.AppendAdditionalCoefficientBounds(self)

    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.X(NameOrValueFlag=1), []]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_in = inDataCacheDictionary["X"]

        a = inCoeffs[0]

        try:
            temp = numpy.power(a, x_in)
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = pow(a, x_in);\n"
        return s


class SteveBattisonExponentialA(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "Steve Battison Exponential A"
    _HTML = "y = exp((a + bx) / (c + dx))"
    _leftSideHTML = "y"
    _coefficientDesignators = ["a", "b", "c", "d"]
    _canLinearSolverBeUsedForSSQABS = False

    webReferenceURL = ""

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = False

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

    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.X(NameOrValueFlag=1), []]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_in = inDataCacheDictionary["X"]

        a = inCoeffs[0]
        b = inCoeffs[1]
        c = inCoeffs[2]
        d = inCoeffs[3]

        try:
            temp = numpy.exp((a + b * x_in) / (c + d * x_in))
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = exp((a + b * x_in) / (c + d * x_in));\n"
        return s


class SteveBattisonExponentialB(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "Steve Battison Exponential B"
    _HTML = "y = a * exp((b + cx) / (d + fx))"
    _leftSideHTML = "y"
    _coefficientDesignators = ["a", "b", "c", "d", "f"]
    _canLinearSolverBeUsedForSSQABS = False

    webReferenceURL = ""

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

    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.X(NameOrValueFlag=1), []]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_in = inDataCacheDictionary["X"]

        a = inCoeffs[0]
        b = inCoeffs[1]
        c = inCoeffs[2]
        d = inCoeffs[3]
        f = inCoeffs[4]

        try:
            temp = a * numpy.exp((b + c * x_in) / (d + f * x_in))
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = a * exp((b + c * x_in) / (d + f * x_in));\n"
        return s


class Stirling(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "Stirling"
    autoGeneratePlusLineForm = True
    _HTML = "y = a * (exp(bx) - 1.0) / b"
    _leftSideHTML = "y"
    _coefficientDesignators = ["a", "b"]
    _canLinearSolverBeUsedForSSQABS = False

    webReferenceURL = ""

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

    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.X(NameOrValueFlag=1), []]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_in = inDataCacheDictionary["X"]

        a = inCoeffs[0]
        b = inCoeffs[1]

        try:
            temp = a * (numpy.exp(b * x_in) - 1.0) / b
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = a * (exp(b*x_in) - 1.0) / b;\n"
        return s


class TripleExponential(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "Triple Exponential"
    _HTML = "y = a * exp(bx) + c * exp(dx) + f * exp(gx)"
    _leftSideHTML = "y"
    _coefficientDesignators = ["a", "b", "c", "d", "f", "g"]
    _canLinearSolverBeUsedForSSQABS = False

    webReferenceURL = ""

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

    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.X(NameOrValueFlag=1), []]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_in = inDataCacheDictionary["X"]

        a = inCoeffs[0]
        b = inCoeffs[1]
        c = inCoeffs[2]
        d = inCoeffs[3]
        f = inCoeffs[4]
        g = inCoeffs[5]

        try:
            temp = (
                a * numpy.exp(b * x_in)
                + c * numpy.exp(d * x_in)
                + f * numpy.exp(g * x_in)
            )
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = a * exp(b*x_in) + c * exp(d*x_in) + f * exp(g*x_in);\n"
        return s


class VaporPressure(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "Standard Vapor Pressure"
    _HTML = "y = exp(a + (b/x) + c*ln(x))"
    _leftSideHTML = "y"
    _coefficientDesignators = ["a", "b", "c"]
    _canLinearSolverBeUsedForSSQABS = False

    webReferenceURL = ""

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = False

    # all extended version autoGenerate flags are False by default in IModel.py
    autoGenerateOffsetForm = True
    autoGenerateReciprocalForm = True
    autoGenerateInverseForms = True
    autoGenerateGrowthAndDecayForms = True

    independentData1CannotContainZeroFlag = True
    independentData1CannotContainPositiveFlag = False
    independentData1CannotContainNegativeFlag = True
    independentData2CannotContainZeroFlag = False
    independentData2CannotContainPositiveFlag = False
    independentData2CannotContainNegativeFlag = False

    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.X(NameOrValueFlag=1), []]
        )
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.LogX(NameOrValueFlag=1), []]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_in = inDataCacheDictionary["X"]
        # only need to perform this dictionary look-up once
        x_LogX = inDataCacheDictionary["LogX"]

        a = inCoeffs[0]
        b = inCoeffs[1]
        c = inCoeffs[2]

        try:
            temp = numpy.exp(a + (b / x_in) + c * x_LogX)
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = exp(a + (b/x_in) + c*log(x_in));\n"
        return s


class JonathanLitzCustomExponential(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "Jonathan Litz Custom Exponential"
    _HTML = "y = a + b * x + c * exp(-d * x) - c * x * exp(-d * x)"
    _leftSideHTML = "y"
    _coefficientDesignators = ["a", "b", "c", "d"]
    _canLinearSolverBeUsedForSSQABS = False

    webReferenceURL = (
        "https://groups.google.com/forum/#!topic/zunzun_dot_com/rAHdO72vx28"
    )

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

    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.X(NameOrValueFlag=1), []]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_in = inDataCacheDictionary["X"]

        a = inCoeffs[0]
        b = inCoeffs[1]
        c = inCoeffs[2]
        d = inCoeffs[3]

        try:
            temp = (
                a
                + b * x_in
                + c * numpy.exp(-d * x_in)
                - c * x_in * numpy.exp(-d * x_in)
            )
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = a + b * x_in + c * exp(-d * x_in) - c * x_in * exp(-d * x_in);\n"
        return s


class LakeNganokeSamplesExponential(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "Lake Nganoke Samples Exponential"
    _HTML = "y = C/(1.0 + exp((x-A)/B)) + D * exp((x-B)/E)"
    _leftSideHTML = "y"
    _coefficientDesignators = ["A", "B", "C", "D", "E"]
    _canLinearSolverBeUsedForSSQABS = False

    webReferenceURL = (
        "https://stackoverflow.com/questions/57797820/polynomial-regression-equation"
    )

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = False

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

    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.X(NameOrValueFlag=1), []]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_in = inDataCacheDictionary["X"]

        A = inCoeffs[0]
        B = inCoeffs[1]
        C = inCoeffs[2]
        D = inCoeffs[3]
        E = inCoeffs[4]

        try:
            temp = C / (1.0 + numpy.exp((x_in - A) / B)) + D * numpy.exp((x_in - B) / E)
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = C/(1.0 + exp((x_in-A)/B)) + D * exp((x_in-B)/E);\n"
        return s
