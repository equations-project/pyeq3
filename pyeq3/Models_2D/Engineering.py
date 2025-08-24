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


class MaxwellWiechert_1(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    autoGeneratePlusLineForm = True  # auto-added by script

    _baseName = "Maxwell - Wiechert 1"
    _HTML = "y = a1*exp(-X/Tau1)"
    _leftSideHTML = "y"
    _coefficientDesignators = ["a1", "Tau1"]
    _canLinearSolverBeUsedForSSQABS = False

    webReferenceURL = "http://en.wikipedia.org/wiki/Generalized_Maxwell_model"

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
            [pyeq3.DataCache.DataCacheFunctions.NegX(NameOrValueFlag=1), []]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_negx = inDataCacheDictionary["NegX"]

        a1 = inCoeffs[0]
        Tau1 = inCoeffs[1]

        try:
            temp = a1 * numpy.exp(x_negx / Tau1)
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except Exception:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = a1 * exp(-x_in/Tau1);\n"
        return s


class MaxwellWiechert_2(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "Maxwell - Wiechert 2"
    _HTML = "y = a1*exp(-X/Tau1) + a2*exp(-X/Tau2)"
    _leftSideHTML = "y"
    _coefficientDesignators = ["a1", "Tau1", "a2", "Tau2"]
    _canLinearSolverBeUsedForSSQABS = False

    webReferenceURL = "http://en.wikipedia.org/wiki/Generalized_Maxwell_model"

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
            [pyeq3.DataCache.DataCacheFunctions.NegX(NameOrValueFlag=1), []]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_negx = inDataCacheDictionary["NegX"]

        a1 = inCoeffs[0]
        Tau1 = inCoeffs[1]
        a2 = inCoeffs[2]
        Tau2 = inCoeffs[3]

        try:
            temp = a1 * numpy.exp(x_negx / Tau1) + a2 * numpy.exp(x_negx / Tau2)
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except Exception:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = a1*exp(-x_in/Tau1) + a2*exp(-x_in/Tau2);\n"
        return s


class MaxwellWiechert_3(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "Maxwell - Wiechert 3"
    _HTML = "y = a1*exp(-X/Tau1) + a2*exp(-X/Tau2) + a3*exp(-X/Tau3)"
    _leftSideHTML = "y"
    _coefficientDesignators = ["a1", "Tau1", "a2", "Tau2", "a3", "Tau3"]
    _canLinearSolverBeUsedForSSQABS = False

    webReferenceURL = "http://en.wikipedia.org/wiki/Generalized_Maxwell_model"

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
            [pyeq3.DataCache.DataCacheFunctions.NegX(NameOrValueFlag=1), []]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_negx = inDataCacheDictionary["NegX"]

        a1 = inCoeffs[0]
        Tau1 = inCoeffs[1]
        a2 = inCoeffs[2]
        Tau2 = inCoeffs[3]
        a3 = inCoeffs[4]
        Tau3 = inCoeffs[5]

        try:
            temp = (
                a1 * numpy.exp(x_negx / Tau1)
                + a2 * numpy.exp(x_negx / Tau2)
                + a3 * numpy.exp(x_negx / Tau3)
            )
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except Exception:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = a1*exp(-x_in/Tau1) + a2*exp(-x_in/Tau2) + a3*exp(-x_in/Tau3);\n"
        return s


class MaxwellWiechert_4(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "Maxwell - Wiechert 4"
    _HTML = "y = a1*exp(-X/Tau1) + a2*exp(-X/Tau2) + a3*exp(-X/Tau3) + a4*exp(-X/Tau4)"
    _leftSideHTML = "y"
    _coefficientDesignators = ["a1", "Tau1", "a2", "Tau2", "a3", "Tau3", "a4", "Tau4"]
    _canLinearSolverBeUsedForSSQABS = False

    webReferenceURL = "http://en.wikipedia.org/wiki/Generalized_Maxwell_model"

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
            [pyeq3.DataCache.DataCacheFunctions.NegX(NameOrValueFlag=1), []]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_negx = inDataCacheDictionary["NegX"]

        a1 = inCoeffs[0]
        Tau1 = inCoeffs[1]
        a2 = inCoeffs[2]
        Tau2 = inCoeffs[3]
        a3 = inCoeffs[4]
        Tau3 = inCoeffs[5]
        a4 = inCoeffs[6]
        Tau4 = inCoeffs[7]

        try:
            temp = (
                a1 * numpy.exp(x_negx / Tau1)
                + a2 * numpy.exp(x_negx / Tau2)
                + a3 * numpy.exp(x_negx / Tau3)
                + a4 * numpy.exp(x_negx / Tau4)
            )
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except Exception:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = a1*exp(-x_in/Tau1) + a2*exp(-x_in/Tau2) "
        s += "+ a3*exp(-x_in/Tau3) + a4*exp(-x_in/Tau4);\n"
        return s


class DispersionOptical(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "Dispersion Optical"
    _HTML = (
        "n<sup>2</sup>(x) = A1 + A2*x<sup>2</sup> + A3/x<sup>2</sup> + A4/x<sup>4</sup>"
    )
    _leftSideHTML = "n<sup>2</sup>(x)"
    _coefficientDesignators = ["A1", "A2", "A3", "A4"]
    _canLinearSolverBeUsedForSSQABS = False

    webReferenceURL = ""

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = False

    # all extended version autoGenerate flags are False by default in IModel.py
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
            [
                pyeq3.DataCache.DataCacheFunctions.PowX(NameOrValueFlag=1, args=[2.0]),
                [2.0],
            ]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowX(NameOrValueFlag=1, args=[4.0]),
                [4.0],
            ]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_PowX2 = inDataCacheDictionary["PowX_2.0"]
        # only need to perform this dictionary look-up once
        x_PowX4 = inDataCacheDictionary["PowX_4.0"]

        A1 = inCoeffs[0]
        A2 = inCoeffs[1]
        A3 = inCoeffs[2]
        A4 = inCoeffs[3]

        try:
            temp = A1 + (A2 * x_PowX2) + (A3 / x_PowX2) + (A4 / x_PowX4)
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except Exception:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = A1 + (A2 * x_in * x_in) + (A3 / (x_in * x_in)) "
        s += "+ (A4 / (x_in * x_in * x_in * x_in));\n"
        return s


class DispersionOpticalSqrt(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "Dispersion Optical Square Root"
    _HTML = "n = (A1 + A2*x<sup>2</sup> + A3/x<sup>2</sup> "
    _HTML = "+ A4/x<sup>4</sup>)<sup>0.5</sup>"
    _leftSideHTML = "n"
    _coefficientDesignators = ["A1", "A2", "A3", "A4"]
    _canLinearSolverBeUsedForSSQABS = False

    webReferenceURL = ""

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = False

    # all extended version autoGenerate flags are False by default in IModel.py
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
            [
                pyeq3.DataCache.DataCacheFunctions.PowX(NameOrValueFlag=1, args=[2.0]),
                [2.0],
            ]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowX(NameOrValueFlag=1, args=[4.0]),
                [4.0],
            ]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_PowX2 = inDataCacheDictionary["PowX_2.0"]
        # only need to perform this dictionary look-up once
        x_PowX4 = inDataCacheDictionary["PowX_4.0"]

        A1 = inCoeffs[0]
        A2 = inCoeffs[1]
        A3 = inCoeffs[2]
        A4 = inCoeffs[3]

        try:
            temp = numpy.sqrt(A1 + (A2 * x_PowX2) + (A3 / x_PowX2) + (A4 / x_PowX4))
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except Exception:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = pow(A1 + (A2 * x_in * x_in) + (A3 / (x_in * x_in)) "
        s += "+ (A4 / (x_in * x_in * x_in * x_in)), 0.5);\n"
        return s


class Extended_Steinhart_Hart(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "Extended Steinhart-Hart"
    _HTML = "1/T = A + Bln(R) + C(ln(R))<sup>2</sup> + D(ln(R))<sup>3</sup>"
    _leftSideHTML = "1/T"
    _coefficientDesignators = ["A", "B", "C", "D"]
    _canLinearSolverBeUsedForSSQABS = False

    webReferenceURL = ""

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = False

    # all extended version autoGenerate flags are False by default in IModel.py
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
            [pyeq3.DataCache.DataCacheFunctions.LogX(NameOrValueFlag=1), []]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_LogX = inDataCacheDictionary["LogX"]

        A = inCoeffs[0]
        B = inCoeffs[1]
        C = inCoeffs[2]
        D = inCoeffs[3]

        try:
            temp = (
                A + B * x_LogX + C * numpy.square(x_LogX) + D * numpy.power(x_LogX, 3.0)
            )
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except Exception:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = A + B*log(x_in) + C*pow(log(x_in), 2.0) "
        s += "+ D*pow(log(x_in), 3.0);\n"
        return s


class Ramberg_Osgood(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "Ramberg-Osgood"
    _HTML = "y = (Stress / Youngs_Modulus) + (Stress/K)<sup>(1.0/n)</sup>"
    _leftSideHTML = "y"
    _coefficientDesignators = ["Youngs_Modulus", "K", "n"]
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

    independentData1CannotContainBothPositiveAndNegativeFlag = True

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

        Youngs_Modulus = inCoeffs[0]
        K = inCoeffs[1]
        n = inCoeffs[2]

        try:
            temp = (x_in / Youngs_Modulus) + numpy.power(x_in / K, 1.0 / n)
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except Exception:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = (x_in / Youngs_Modulus) +  pow(x_in / K, 1.0 / n);\n"
        return s


class Reciprocal_Extended_Steinhart_Hart(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "Reciprocal Extended Steinhart-Hart"
    _HTML = "T = 1.0 / (A + Bln(R) + C(ln(R))<sup>2</sup> + D(ln(R))<sup>3</sup>)"
    _leftSideHTML = "T"
    _coefficientDesignators = ["A", "B", "C", "D"]
    _canLinearSolverBeUsedForSSQABS = False

    webReferenceURL = ""

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = False

    # all extended version autoGenerate flags are False by default in IModel.py
    autoGenerateOffsetForm = True

    independentData1CannotContainZeroFlag = True
    independentData1CannotContainPositiveFlag = False
    independentData1CannotContainNegativeFlag = True
    independentData2CannotContainZeroFlag = False
    independentData2CannotContainPositiveFlag = False
    independentData2CannotContainNegativeFlag = False

    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.LogX(NameOrValueFlag=1), []]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_LogX = inDataCacheDictionary["LogX"]

        A = inCoeffs[0]
        B = inCoeffs[1]
        C = inCoeffs[2]
        D = inCoeffs[3]

        try:
            temp = 1.0 / (
                A + B * x_LogX + C * numpy.square(x_LogX) + D * numpy.power(x_LogX, 3.0)
            )
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except Exception:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = 1.0 / (A + B*log(x_in) + C*pow(log(x_in), 2.0) "
        s += "+ D*pow(log(x_in), 3.0));\n"
        return s


class Reciprocal_Steinhart_Hart(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "Reciprocal Steinhart-Hart"
    _HTML = "T = 1.0 / (A + Bln(R) + C(ln(R))<sup>3</sup>)"
    _leftSideHTML = "T"
    _coefficientDesignators = ["A", "B", "C"]
    _canLinearSolverBeUsedForSSQABS = False

    webReferenceURL = ""

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = False

    # all extended version autoGenerate flags are False by default in IModel.py
    autoGenerateOffsetForm = True

    independentData1CannotContainZeroFlag = True
    independentData1CannotContainPositiveFlag = False
    independentData1CannotContainNegativeFlag = True
    independentData2CannotContainZeroFlag = False
    independentData2CannotContainPositiveFlag = False
    independentData2CannotContainNegativeFlag = False

    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.LogX(NameOrValueFlag=1), []]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowLogX(
                    NameOrValueFlag=1, args=[3.0]
                ),
                [3.0],
            ]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        LogX = inDataCacheDictionary["LogX"]
        # only need to perform this dictionary look-up once
        PowLogX_3 = inDataCacheDictionary["PowLogX_3.0"]

        A = inCoeffs[0]
        B = inCoeffs[1]
        C = inCoeffs[2]

        try:
            temp = 1.0 / (A + B * LogX + C * PowLogX_3)
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except Exception:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = 1.0 / (A + B*log(x_in) + C*pow(log(x_in), 3.0));\n"
        return s


class SellmeierOptical(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "Sellmeier Optical"
    _HTML = "n<sup>2</sup>(x) = 1 + (B1 x<sup>2</sup>)/(x<sup>2</sup>-C1) "
    _HTML += "+ (B2 x<sup>2</sup>)/(x<sup>2</sup>-C2) "
    _HTML += "+ (B3 x<sup>2</sup>)/(x<sup>2</sup>-C3)"
    _leftSideHTML = "n<sup>2</sup>(x)"
    _coefficientDesignators = ["B1", "C1", "B2", "C2", "B3", "C3"]
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
            [
                pyeq3.DataCache.DataCacheFunctions.PowX(NameOrValueFlag=1, args=[2.0]),
                [2.0],
            ]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_PowX2 = inDataCacheDictionary["PowX_2.0"]

        B1 = inCoeffs[0]
        C1 = inCoeffs[1]
        B2 = inCoeffs[2]
        C2 = inCoeffs[3]
        B3 = inCoeffs[4]
        C3 = inCoeffs[5]

        try:
            temp = (
                1.0
                + ((B1 * x_PowX2) / (x_PowX2 - C1))
                + ((B2 * x_PowX2) / (x_PowX2 - C2))
                + ((B3 * x_PowX2) / (x_PowX2 - C3))
            )
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except Exception:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = 1.0 + ((B1 * x_in * x_in)/(x_in * x_in - C1)) "
        s += "+ ((B2 * x_in * x_in)/(x_in * x_in - C2)) "
        s += "+ ((B3 * x_in * x_in)/(x_in * x_in - C3));\n"
        return s


class SellmeierOpticalSqrt(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "Sellmeier Optical Square Root"
    _HTML = "n = (1 + (B1 x<sup>2</sup>)/(x<sup>2</sup>-C1) "
    _HTML += "+ (B2 x<sup>2</sup>)/(x<sup>2</sup>-C2) "
    _HTML += "+ (B3 x<sup>2</sup>)/(x<sup>2</sup>-C3))<sup>0.5</sup>"
    _leftSideHTML = "n"
    _coefficientDesignators = ["B1", "C1", "B2", "C2", "B3", "C3"]
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
            [
                pyeq3.DataCache.DataCacheFunctions.PowX(NameOrValueFlag=1, args=[2.0]),
                [2.0],
            ]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_PowX2 = inDataCacheDictionary["PowX_2.0"]

        B1 = inCoeffs[0]
        C1 = inCoeffs[1]
        B2 = inCoeffs[2]
        C2 = inCoeffs[3]
        B3 = inCoeffs[4]
        C3 = inCoeffs[5]

        try:
            temp = numpy.sqrt(
                1.0
                + ((B1 * x_PowX2) / (x_PowX2 - C1))
                + ((B2 * x_PowX2) / (x_PowX2 - C2))
                + ((B3 * x_PowX2) / (x_PowX2 - C3))
            )
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except Exception:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = pow(1.0 + ((B1 * x_in * x_in)/(x_in * x_in - C1)) "
        s += "+ ((B2 * x_in * x_in)/(x_in * x_in - C2)) "
        s += "+ ((B3 * x_in * x_in)/(x_in * x_in - C3)), 0.5);\n"
        return s


class Steinhart_Hart(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "Steinhart-Hart"
    _HTML = "1/T = A + Bln(R) + C(ln(R))<sup>3</sup>"
    _leftSideHTML = "1/T"
    _coefficientDesignators = ["A", "B", "C"]
    _canLinearSolverBeUsedForSSQABS = False

    webReferenceURL = ""

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = False

    # all extended version autoGenerate flags are False by default in IModel.py

    independentData1CannotContainZeroFlag = True
    independentData1CannotContainPositiveFlag = False
    independentData1CannotContainNegativeFlag = True
    independentData2CannotContainZeroFlag = False
    independentData2CannotContainPositiveFlag = False
    independentData2CannotContainNegativeFlag = False

    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.LogX(NameOrValueFlag=1), []]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_LogX = inDataCacheDictionary["LogX"]

        A = inCoeffs[0]
        B = inCoeffs[1]
        C = inCoeffs[2]

        try:
            temp = A + B * x_LogX + C * numpy.power(x_LogX, 3.0)
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except Exception:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = A + B*log(x_in) + C*pow(log(x_in), 3.0);\n"
        return s


class VanDeemterChromatography(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "VanDeemter Chromatography"
    _HTML = "y = a + b/x + cx"
    _leftSideHTML = "y"
    _coefficientDesignators = ["a", "b", "c"]
    _canLinearSolverBeUsedForSSQABS = True

    webReferenceURL = ""

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = False

    # all extended version autoGenerate flags are False by default in IModel.py
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
            [pyeq3.DataCache.DataCacheFunctions.Ones(NameOrValueFlag=1), []]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowX(NameOrValueFlag=1, args=[-1.0]),
                [-1.0],
            ]
        )
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.X(NameOrValueFlag=1), []]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_in = inDataCacheDictionary["X"]
        # only need to perform this dictionary look-up once
        x_PowX_Neg1 = inDataCacheDictionary["PowX_-1.0"]

        a = inCoeffs[0]
        b = inCoeffs[1]
        c = inCoeffs[2]

        try:
            temp = a + b * x_PowX_Neg1 + c * x_in
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except Exception:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = a + b / x_in + c * x_in;\n"
        return s


class ElectronBeamLithographyPointSpread(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "Electron Beam Lithography Point Spread"
    _HTML = "y = a*exp(-b*x) + c*exp(-(x-d)<sup>2</sup> / f<sup>2</sup>) "
    _HTML += "+ g*exp(-(x-h)<sup>2</sup> / i<sup>2</sup>) + j*exp(-(x-k)<sup>2</sup> "
    _HTML += "/ l<sup>2</sup>)"
    _leftSideHTML = "y"
    _coefficientDesignators = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l"]
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
        f = inCoeffs[4]
        g = inCoeffs[5]
        h = inCoeffs[6]
        i = inCoeffs[7]
        j = inCoeffs[8]
        k = inCoeffs[9]
        m = inCoeffs[10]

        try:
            xminusd = x_in - d
            xminush = x_in - h
            xminusk = x_in - k
            temp = a * numpy.exp(-b * x_in)
            temp += c * numpy.exp(-1.0 * xminusd * xminusd / (f * f))
            temp += g * numpy.exp(-1.0 * xminush * xminush / (i * i))
            temp += j * numpy.exp(-1.0 * xminusk * xminusk / (m * m))
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except Exception:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = a * exp(-b * x_in) + c * exp(-1.0 * (x_in-d) * (x_in-d) "
        s += "/ (f * f)) + g * exp(-1.0 * (x_in-h) * (x_in-h) / (i * i)) + j "
        s += "* exp(-1.0 * (x_in-k) * (x_in-k) / (l * l));\n"
        return s


class KlimpelFlotationA(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    autoGeneratePlusLineForm = True  # auto-added by script

    _baseName = "Klimpel Kinetics Flotation A"
    _HTML = "y = a * (1 - (1 - exp(-b*x)) / (b*x))"
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
            temp = a * (1.0 - (1.0 - numpy.exp(-b * x_in)) / (b * x_in))
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except Exception:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = a *(1.0 - (1.0 - exp(-b*x_in)) / (b*x_in) );\n"
        return s


class GraemePatersonElectricMotor(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "Graeme Paterson Electric Motor"
    _HTML = "y =  A*exp(-b*t)*cos(omega*t + phi) + A2*exp(-b2*t)"
    _leftSideHTML = "y"
    _coefficientDesignators = ["A", "b", "omega", "phi", "A2", "b2"]
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

        A = inCoeffs[0]
        b = inCoeffs[1]
        omega = inCoeffs[2]
        phi = inCoeffs[3]
        A2 = inCoeffs[4]
        b2 = inCoeffs[5]

        try:
            temp = A * numpy.exp(-b * x_in) * numpy.cos(
                omega * x_in + phi
            ) + A2 * numpy.exp(-b2 * x_in)
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except Exception:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = A*exp(-b*x_in)*cos(omega*x_in + phi) + A2*exp(-b2*x_in);\n"
        return s


class ModifiedArpsWellProduction(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "Modified Arps Well Production"
    _HTML = "y = (qi_x/((1.0-b_x)*Di_x)) * (1.0-((1.0+b_x*Di_x*x)**(1.0-1.0/b_x)))"
    _leftSideHTML = "y"
    _coefficientDesignators = ["qi_x", "b_x", "Di_x"]
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

        qi_x = inCoeffs[0]
        b_x = inCoeffs[1]
        Di_x = inCoeffs[2]

        try:
            temp = (qi_x / ((1.0 - b_x) * Di_x)) * (
                1.0 - numpy.power((1.0 + b_x * Di_x * x_in), (1.0 - 1.0 / b_x))
            )
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except Exception:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = (qi_x/((1.0-b_x)*Di_x)) "
        s += "* (1.0 - pow((1.0+b_x*Di_x*x_in), (1.0-1.0/b_x)));\n"
        return s
