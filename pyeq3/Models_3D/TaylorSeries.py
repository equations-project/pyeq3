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
import pyeq3.Model_3D_BaseClass

import numpy

numpy.seterr(all="ignore")


class TaylorA(pyeq3.Model_3D_BaseClass.Model_3D_BaseClass):
    _baseName = "Taylor Series A"
    _HTML = "z = a + bx + cy + dx<sup>2</sup> + fy<sup>2</sup> + gxy"
    _leftSideHTML = "z"
    _coefficientDesignators = ["a", "b", "c", "d", "f", "g"]
    _canLinearSolverBeUsedForSSQABS = True

    webReferenceURL = ""

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
            [pyeq3.DataCache.DataCacheFunctions.Ones(NameOrValueFlag=1), []]
        )
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.X(NameOrValueFlag=1), []]
        )
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.Y(NameOrValueFlag=1), []]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowX(NameOrValueFlag=1, args=[2.0]),
                [2.0],
            ]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowY(NameOrValueFlag=1, args=[2.0]),
                [2.0],
            ]
        )
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.XY(NameOrValueFlag=1), []]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_in = inDataCacheDictionary["X"]
        # only need to perform this dictionary look-up once
        y_in = inDataCacheDictionary["Y"]
        # only need to perform this dictionary look-up once
        PowX_2 = inDataCacheDictionary["PowX_2.0"]
        # only need to perform this dictionary look-up once
        PowY_2 = inDataCacheDictionary["PowY_2.0"]
        # only need to perform this dictionary look-up once
        XY = inDataCacheDictionary["XY"]

        a = inCoeffs[0]
        b = inCoeffs[1]
        c = inCoeffs[2]
        d = inCoeffs[3]
        f = inCoeffs[4]
        g = inCoeffs[5]

        try:
            temp = a + b * x_in + c * y_in + d * PowX_2 + f * PowY_2 + g * XY
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = a + b*x_in + c*y_in + d*pow(x_in, 2.0) + f*pow(y_in, 2.0) + g*x_in*y_in;\n"
        return s


class TaylorB(pyeq3.Model_3D_BaseClass.Model_3D_BaseClass):
    _baseName = "Taylor Series B"
    _HTML = "z = a + b*ln(x) + cy + d*ln(x)<sup>2</sup> + fy<sup>2</sup> + g*ln(x)*y"
    _leftSideHTML = "z"
    _coefficientDesignators = ["a", "b", "c", "d", "f", "g"]
    _canLinearSolverBeUsedForSSQABS = True

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
            [pyeq3.DataCache.DataCacheFunctions.Ones(NameOrValueFlag=1), []]
        )
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.LogX(NameOrValueFlag=1), []]
        )
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.Y(NameOrValueFlag=1), []]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowLogX(
                    NameOrValueFlag=1, args=[2.0]
                ),
                [2.0],
            ]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowY(NameOrValueFlag=1, args=[2.0]),
                [2.0],
            ]
        )
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.LogX_Y(NameOrValueFlag=1), []]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        LogX = inDataCacheDictionary["LogX"]
        # only need to perform this dictionary look-up once
        y_in = inDataCacheDictionary["Y"]
        # only need to perform this dictionary look-up once
        PowLogX_2 = inDataCacheDictionary["PowLogX_2.0"]
        # only need to perform this dictionary look-up once
        PowY_2 = inDataCacheDictionary["PowY_2.0"]
        # only need to perform this dictionary look-up once
        LogX_Y = inDataCacheDictionary["LogX_Y"]

        a = inCoeffs[0]
        b = inCoeffs[1]
        c = inCoeffs[2]
        d = inCoeffs[3]
        f = inCoeffs[4]
        g = inCoeffs[5]

        try:
            temp = a + b * LogX + c * y_in + d * PowLogX_2 + f * PowY_2 + g * LogX_Y
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = a + b*log(x_in) + c*y_in + d*pow(log(x_in), 2.0) + f*pow(y_in, 2.0) + g*log(x_in)*y_in;\n"
        return s


class TaylorC(pyeq3.Model_3D_BaseClass.Model_3D_BaseClass):
    _baseName = "Taylor Series C"
    _HTML = "z = a + bx + c*ln(y) + dx<sup>2</sup> + f*ln(y)<sup>2</sup> + g*x*ln(y)"
    _leftSideHTML = "z"
    _coefficientDesignators = ["a", "b", "c", "d", "f", "g"]
    _canLinearSolverBeUsedForSSQABS = True

    webReferenceURL = ""

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = False

    # all extended version autoGenerate flags are False by default in IModel.py
    autoGenerateReciprocalForm = True
    autoGenerateInverseForms = True
    autoGenerateGrowthAndDecayForms = True

    independentData1CannotContainZeroFlag = False
    independentData1CannotContainPositiveFlag = False
    independentData1CannotContainNegativeFlag = False
    independentData2CannotContainZeroFlag = True
    independentData2CannotContainPositiveFlag = False
    independentData2CannotContainNegativeFlag = True

    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.Ones(NameOrValueFlag=1), []]
        )
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.X(NameOrValueFlag=1), []]
        )
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.LogY(NameOrValueFlag=1), []]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowX(NameOrValueFlag=1, args=[2.0]),
                [2.0],
            ]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowLogY(
                    NameOrValueFlag=1, args=[2.0]
                ),
                [2.0],
            ]
        )
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.X_LogY(NameOrValueFlag=1), []]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_in = inDataCacheDictionary["X"]
        # only need to perform this dictionary look-up once
        LogY = inDataCacheDictionary["LogY"]
        # only need to perform this dictionary look-up once
        PowX_2 = inDataCacheDictionary["PowX_2.0"]
        # only need to perform this dictionary look-up once
        PowLogY_2 = inDataCacheDictionary["PowLogY_2.0"]
        # only need to perform this dictionary look-up once
        X_LogY = inDataCacheDictionary["X_LogY"]

        a = inCoeffs[0]
        b = inCoeffs[1]
        c = inCoeffs[2]
        d = inCoeffs[3]
        f = inCoeffs[4]
        g = inCoeffs[5]

        try:
            temp = a + b * x_in + c * LogY + d * PowX_2 + f * PowLogY_2 + g * X_LogY
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = a + b*x_in + c*log(y_in) + d*pow(x_in, 2.0) + f*pow(log(y_in), 2.0) + g*x_in*log(y_in);\n"
        return s


class TaylorD(pyeq3.Model_3D_BaseClass.Model_3D_BaseClass):
    _baseName = "Taylor Series D"
    _HTML = "z = a + b*ln(x) + c*ln(y) + d*ln(x)<sup>2</sup> + f*ln(y)<sup>2</sup> + g*ln(x)*ln(y)"
    _leftSideHTML = "z"
    _coefficientDesignators = ["a", "b", "c", "d", "f", "g"]
    _canLinearSolverBeUsedForSSQABS = True

    webReferenceURL = ""

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = False

    # all extended version autoGenerate flags are False by default in IModel.py
    autoGenerateReciprocalForm = True
    autoGenerateInverseForms = True
    autoGenerateGrowthAndDecayForms = True

    independentData1CannotContainZeroFlag = True
    independentData1CannotContainPositiveFlag = False
    independentData1CannotContainNegativeFlag = True
    independentData2CannotContainZeroFlag = True
    independentData2CannotContainPositiveFlag = False
    independentData2CannotContainNegativeFlag = True

    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.Ones(NameOrValueFlag=1), []]
        )
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.LogX(NameOrValueFlag=1), []]
        )
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.LogY(NameOrValueFlag=1), []]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowLogX(
                    NameOrValueFlag=1, args=[2.0]
                ),
                [2.0],
            ]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowLogY(
                    NameOrValueFlag=1, args=[2.0]
                ),
                [2.0],
            ]
        )
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.LogX_LogY(NameOrValueFlag=1), []]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        LogX = inDataCacheDictionary["LogX"]
        # only need to perform this dictionary look-up once
        LogY = inDataCacheDictionary["LogY"]
        # only need to perform this dictionary look-up once
        PowLogX_2 = inDataCacheDictionary["PowLogX_2.0"]
        # only need to perform this dictionary look-up once
        PowLogY_2 = inDataCacheDictionary["PowLogY_2.0"]
        # only need to perform this dictionary look-up once
        LogX_LogY = inDataCacheDictionary["LogX_LogY"]

        a = inCoeffs[0]
        b = inCoeffs[1]
        c = inCoeffs[2]
        d = inCoeffs[3]
        f = inCoeffs[4]
        g = inCoeffs[5]

        try:
            temp = (
                a + b * LogX + c * LogY + d * PowLogX_2 + f * PowLogY_2 + g * LogX_LogY
            )
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = a + b*log(x_in) + c*log(y_in) + d*pow(log(x_in), 2.0) + f*pow(log(y_in), 2.0) + g*log(x_in)*log(y_in);\n"
        return s


class TaylorE(pyeq3.Model_3D_BaseClass.Model_3D_BaseClass):
    _baseName = "Taylor Series E"
    _HTML = "z = a + b/x + cy + d/x<sup>2</sup> + fy<sup>2</sup> + gy/x"
    _leftSideHTML = "z"
    _coefficientDesignators = ["a", "b", "c", "d", "f", "g"]
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
            [pyeq3.DataCache.DataCacheFunctions.Y(NameOrValueFlag=1), []]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowX(NameOrValueFlag=1, args=[-2.0]),
                [-2.0],
            ]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowY(NameOrValueFlag=1, args=[2.0]),
                [2.0],
            ]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowX_PowY(
                    NameOrValueFlag=1, args=[-1.0, 1.0]
                ),
                [-1.0, 1.0],
            ]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        PowX_Neg1 = inDataCacheDictionary["PowX_-1.0"]
        # only need to perform this dictionary look-up once
        y_in = inDataCacheDictionary["Y"]
        # only need to perform this dictionary look-up once
        PowX_Neg2 = inDataCacheDictionary["PowX_-2.0"]
        # only need to perform this dictionary look-up once
        PowY_2 = inDataCacheDictionary["PowY_2.0"]
        # only need to perform this dictionary look-up once
        YoverX = inDataCacheDictionary["PowX_PowY_-1.01.0"]

        a = inCoeffs[0]
        b = inCoeffs[1]
        c = inCoeffs[2]
        d = inCoeffs[3]
        f = inCoeffs[4]
        g = inCoeffs[5]

        try:
            temp = (
                a + b * PowX_Neg1 + c * y_in + d * PowX_Neg2 + f * PowY_2 + g * YoverX
            )
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = a + b/x_in + c*y_in + d/pow(x_in, 2.0) + f*pow(y_in, 2.0) + g*y_in/x_in;\n"
        return s


class TaylorF(pyeq3.Model_3D_BaseClass.Model_3D_BaseClass):
    _baseName = "Taylor Series F"
    _HTML = "z = a + b/ln(x) + cy + d/ln(x)<sup>2</sup> + fy<sup>2</sup> + gy/ln(x)"
    _leftSideHTML = "z"
    _coefficientDesignators = ["a", "b", "c", "d", "f", "g"]
    _canLinearSolverBeUsedForSSQABS = True

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
            [pyeq3.DataCache.DataCacheFunctions.Ones(NameOrValueFlag=1), []]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowLogX(
                    NameOrValueFlag=1, args=[-1.0]
                ),
                [-1.0],
            ]
        )
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.Y(NameOrValueFlag=1), []]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowLogX(
                    NameOrValueFlag=1, args=[-2.0]
                ),
                [-2.0],
            ]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowY(NameOrValueFlag=1, args=[2.0]),
                [2.0],
            ]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowLogX_PowY(
                    NameOrValueFlag=1, args=[-1.0, 1.0]
                ),
                [-1.0, 1.0],
            ]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        PowLogX_Neg1 = inDataCacheDictionary["PowLogX_-1.0"]
        # only need to perform this dictionary look-up once
        y_in = inDataCacheDictionary["Y"]
        # only need to perform this dictionary look-up once
        PowLogX_Neg2 = inDataCacheDictionary["PowLogX_-2.0"]
        # only need to perform this dictionary look-up once
        PowY_2 = inDataCacheDictionary["PowY_2.0"]
        # only need to perform this dictionary look-up once
        PowLogX_PowYNeg1_1 = inDataCacheDictionary["PowLogX_PowY_-1.01.0"]

        a = inCoeffs[0]
        b = inCoeffs[1]
        c = inCoeffs[2]
        d = inCoeffs[3]
        f = inCoeffs[4]
        g = inCoeffs[5]

        try:
            temp = (
                a
                + b * PowLogX_Neg1
                + c * y_in
                + d * PowLogX_Neg2
                + f * PowY_2
                + g * PowLogX_PowYNeg1_1
            )
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = a + b/log(x_in) + c*y_in + d/pow(log(x_in), 2.0) + f*pow(y_in, 2.0) + g*y_in/log(x_in);\n"
        return s


class TaylorG(pyeq3.Model_3D_BaseClass.Model_3D_BaseClass):
    _baseName = "Taylor Series G"
    _HTML = "z = a + b/x + c*ln(y) + d/x<sup>2</sup> + f*ln(y)<sup>2</sup> + g*ln(y)/x"
    _leftSideHTML = "z"
    _coefficientDesignators = ["a", "b", "c", "d", "f", "g"]
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
    independentData2CannotContainZeroFlag = True
    independentData2CannotContainPositiveFlag = False
    independentData2CannotContainNegativeFlag = True

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
            [pyeq3.DataCache.DataCacheFunctions.LogY(NameOrValueFlag=1), []]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowX(NameOrValueFlag=1, args=[-2.0]),
                [-2.0],
            ]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowLogY(
                    NameOrValueFlag=1, args=[2.0]
                ),
                [2.0],
            ]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowX_PowLogY(
                    NameOrValueFlag=1, args=[-1.0, 1.0]
                ),
                [-1.0, 1.0],
            ]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        PowX_Neg1 = inDataCacheDictionary["PowX_-1.0"]
        # only need to perform this dictionary look-up once
        LogY = inDataCacheDictionary["LogY"]
        # only need to perform this dictionary look-up once
        PowX_Neg2 = inDataCacheDictionary["PowX_-2.0"]
        # only need to perform this dictionary look-up once
        PowLogY_2 = inDataCacheDictionary["PowLogY_2.0"]
        # only need to perform this dictionary look-up once
        PowX_PowLogY_Neg1_1 = inDataCacheDictionary["PowX_PowLogY_-1.01.0"]

        a = inCoeffs[0]
        b = inCoeffs[1]
        c = inCoeffs[2]
        d = inCoeffs[3]
        f = inCoeffs[4]
        g = inCoeffs[5]

        try:
            temp = (
                a
                + b * PowX_Neg1
                + c * LogY
                + d * PowX_Neg2
                + f * PowLogY_2
                + g * PowX_PowLogY_Neg1_1
            )
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = a + b/x_in + c*log(y_in) + d/pow(x_in, 2.0) + f*pow(log(y_in), 2.0) + g*log(y_in)/x_in;\n"
        return s


class TaylorH(pyeq3.Model_3D_BaseClass.Model_3D_BaseClass):
    _baseName = "Taylor Series H"
    _HTML = "z = a + b/ln(x) + c*ln(y) + d/ln(x)<sup>2</sup> + f*ln(y)<sup>2</sup> + g*ln(y)/ln(x)"
    _leftSideHTML = "z"
    _coefficientDesignators = ["a", "b", "c", "d", "f", "g"]
    _canLinearSolverBeUsedForSSQABS = True

    webReferenceURL = ""

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = False

    # all extended version autoGenerate flags are False by default in IModel.py
    autoGenerateReciprocalForm = True
    autoGenerateInverseForms = True
    autoGenerateGrowthAndDecayForms = True

    independentData1CannotContainZeroFlag = True
    independentData1CannotContainPositiveFlag = False
    independentData1CannotContainNegativeFlag = True
    independentData2CannotContainZeroFlag = True
    independentData2CannotContainPositiveFlag = False
    independentData2CannotContainNegativeFlag = True

    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.Ones(NameOrValueFlag=1), []]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowLogX(
                    NameOrValueFlag=1, args=[-1.0]
                ),
                [-1.0],
            ]
        )
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.LogY(NameOrValueFlag=1), []]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowLogX(
                    NameOrValueFlag=1, args=[-2.0]
                ),
                [-2.0],
            ]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowLogY(
                    NameOrValueFlag=1, args=[2.0]
                ),
                [2.0],
            ]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowLogX_PowLogY(
                    NameOrValueFlag=1, args=[-1.0, 1.0]
                ),
                [-1.0, 1.0],
            ]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        PowLogX_Neg1 = inDataCacheDictionary["PowLogX_-1.0"]
        # only need to perform this dictionary look-up once
        LogY = inDataCacheDictionary["LogY"]
        # only need to perform this dictionary look-up once
        PowLogX_Neg2 = inDataCacheDictionary["PowLogX_-2.0"]
        # only need to perform this dictionary look-up once
        PowLogY_2 = inDataCacheDictionary["PowLogY_2.0"]
        # only need to perform this dictionary look-up once
        PowLogX_PowLogY_Neg1_1 = inDataCacheDictionary["PowLogX_PowLogY_-1.01.0"]

        a = inCoeffs[0]
        b = inCoeffs[1]
        c = inCoeffs[2]
        d = inCoeffs[3]
        f = inCoeffs[4]
        g = inCoeffs[5]

        try:
            temp = (
                a
                + b * PowLogX_Neg1
                + c * LogY
                + d * PowLogX_Neg2
                + f * PowLogY_2
                + g * PowLogX_PowLogY_Neg1_1
            )
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = a + b/log(x_in) + c*log(y_in) + d/pow(log(x_in), 2.0) + f*pow(log(y_in), 2.0) + g*log(y_in)/log(x_in);\n"
        return s


class TaylorI(pyeq3.Model_3D_BaseClass.Model_3D_BaseClass):
    _baseName = "Taylor Series I"
    _HTML = "z = a + bx + c/y + dx<sup>2</sup> + f/y<sup>2</sup> + gx/y"
    _leftSideHTML = "z"
    _coefficientDesignators = ["a", "b", "c", "d", "f", "g"]
    _canLinearSolverBeUsedForSSQABS = True

    webReferenceURL = ""

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = False

    # all extended version autoGenerate flags are False by default in IModel.py
    autoGenerateReciprocalForm = True
    autoGenerateInverseForms = True
    autoGenerateGrowthAndDecayForms = True

    independentData1CannotContainZeroFlag = False
    independentData1CannotContainPositiveFlag = False
    independentData1CannotContainNegativeFlag = False
    independentData2CannotContainZeroFlag = True
    independentData2CannotContainPositiveFlag = False
    independentData2CannotContainNegativeFlag = False

    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.Ones(NameOrValueFlag=1), []]
        )
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.X(NameOrValueFlag=1), []]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowY(NameOrValueFlag=1, args=[-1.0]),
                [-1.0],
            ]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowX(NameOrValueFlag=1, args=[2.0]),
                [2.0],
            ]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowY(NameOrValueFlag=1, args=[-2.0]),
                [-2.0],
            ]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowX_PowY(
                    NameOrValueFlag=1, args=[1.0, -1.0]
                ),
                [1.0, -1.0],
            ]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_in = inDataCacheDictionary["X"]
        # only need to perform this dictionary look-up once
        PowY_Neg1 = inDataCacheDictionary["PowY_-1.0"]
        # only need to perform this dictionary look-up once
        PowX_2 = inDataCacheDictionary["PowX_2.0"]
        # only need to perform this dictionary look-up once
        PowY_Neg2 = inDataCacheDictionary["PowY_-2.0"]
        # only need to perform this dictionary look-up once
        PowX_PowY_1_Neg1 = inDataCacheDictionary["PowX_PowY_1.0-1.0"]

        a = inCoeffs[0]
        b = inCoeffs[1]
        c = inCoeffs[2]
        d = inCoeffs[3]
        f = inCoeffs[4]
        g = inCoeffs[5]

        try:
            temp = (
                a
                + b * x_in
                + c * PowY_Neg1
                + d * PowX_2
                + f * PowY_Neg2
                + g * PowX_PowY_1_Neg1
            )
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = a + b*x_in + c/y_in + d*pow(x_in, 2.0) + f/pow(y_in, 2.0) + g*x_in/y_in;\n"
        return s


class TaylorJ(pyeq3.Model_3D_BaseClass.Model_3D_BaseClass):
    _baseName = "Taylor Series J"
    _HTML = "z = a + b*ln(x) + c/y + d*ln(x)<sup>2</sup> + f/y<sup>2</sup> + g*ln(x)/y"
    _leftSideHTML = "z"
    _coefficientDesignators = ["a", "b", "c", "d", "f", "g"]
    _canLinearSolverBeUsedForSSQABS = True

    webReferenceURL = ""

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = False

    # all extended version autoGenerate flags are False by default in IModel.py
    autoGenerateReciprocalForm = True
    autoGenerateInverseForms = True
    autoGenerateGrowthAndDecayForms = True

    independentData1CannotContainZeroFlag = True
    independentData1CannotContainPositiveFlag = False
    independentData1CannotContainNegativeFlag = True
    independentData2CannotContainZeroFlag = True
    independentData2CannotContainPositiveFlag = False
    independentData2CannotContainNegativeFlag = False

    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.Ones(NameOrValueFlag=1), []]
        )
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.LogX(NameOrValueFlag=1), []]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowY(NameOrValueFlag=1, args=[-1.0]),
                [-1.0],
            ]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowLogX(
                    NameOrValueFlag=1, args=[2.0]
                ),
                [2.0],
            ]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowY(NameOrValueFlag=1, args=[-2.0]),
                [-2.0],
            ]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowLogX_PowY(
                    NameOrValueFlag=1, args=[1.0, -1.0]
                ),
                [1.0, -1.0],
            ]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        LogX = inDataCacheDictionary["LogX"]
        # only need to perform this dictionary look-up once
        PowY_Neg1 = inDataCacheDictionary["PowY_-1.0"]
        # only need to perform this dictionary look-up once
        PowLogX_2 = inDataCacheDictionary["PowLogX_2.0"]
        # only need to perform this dictionary look-up once
        PowY_Neg2 = inDataCacheDictionary["PowY_-2.0"]
        # only need to perform this dictionary look-up once
        PowLogX_PowY_1_Neg1 = inDataCacheDictionary["PowLogX_PowY_1.0-1.0"]

        a = inCoeffs[0]
        b = inCoeffs[1]
        c = inCoeffs[2]
        d = inCoeffs[3]
        f = inCoeffs[4]
        g = inCoeffs[5]

        try:
            temp = (
                a
                + b * LogX
                + c * PowY_Neg1
                + d * PowLogX_2
                + f * PowY_Neg2
                + g * PowLogX_PowY_1_Neg1
            )
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = a + b*log(x_in) + c/y_in + d*pow(log(x_in), 2.0) + f/pow(y_in, 2.0) + g*log(x_in)/y_in;\n"
        return s


class TaylorK(pyeq3.Model_3D_BaseClass.Model_3D_BaseClass):
    _baseName = "Taylor Series K"
    _HTML = "z = a + bx + c/ln(y) + dx<sup>2</sup> + f/ln(y)<sup>2</sup> + gx/ln(y)"
    _leftSideHTML = "z"
    _coefficientDesignators = ["a", "b", "c", "d", "f", "g"]
    _canLinearSolverBeUsedForSSQABS = True

    webReferenceURL = ""

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = False

    # all extended version autoGenerate flags are False by default in IModel.py
    autoGenerateReciprocalForm = True
    autoGenerateInverseForms = True
    autoGenerateGrowthAndDecayForms = True

    independentData1CannotContainZeroFlag = False
    independentData1CannotContainPositiveFlag = False
    independentData1CannotContainNegativeFlag = False
    independentData2CannotContainZeroFlag = True
    independentData2CannotContainPositiveFlag = False
    independentData2CannotContainNegativeFlag = True

    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.Ones(NameOrValueFlag=1), []]
        )
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.X(NameOrValueFlag=1), []]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowLogY(
                    NameOrValueFlag=1, args=[-1.0]
                ),
                [-1.0],
            ]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowX(NameOrValueFlag=1, args=[2.0]),
                [2.0],
            ]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowLogY(
                    NameOrValueFlag=1, args=[-2.0]
                ),
                [-2.0],
            ]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowX_PowLogY(
                    NameOrValueFlag=1, args=[1.0, -1.0]
                ),
                [1.0, -1.0],
            ]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_in = inDataCacheDictionary["X"]
        # only need to perform this dictionary look-up once
        PowLogY_Neg1 = inDataCacheDictionary["PowLogY_-1.0"]
        # only need to perform this dictionary look-up once
        PowX_2 = inDataCacheDictionary["PowX_2.0"]
        # only need to perform this dictionary look-up once
        PowLogY_Neg2 = inDataCacheDictionary["PowLogY_-2.0"]
        # only need to perform this dictionary look-up once
        PowX_LogY_1_Neg1 = inDataCacheDictionary["PowX_PowLogY_1.0-1.0"]

        a = inCoeffs[0]
        b = inCoeffs[1]
        c = inCoeffs[2]
        d = inCoeffs[3]
        f = inCoeffs[4]
        g = inCoeffs[5]

        try:
            temp = (
                a
                + b * x_in
                + c * PowLogY_Neg1
                + d * PowX_2
                + f * PowLogY_Neg2
                + g * PowX_LogY_1_Neg1
            )
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = a + b*x_in + c/log(y_in) + d*pow(x_in, 2.0) + f/pow(log(y_in), 2.0) + g*x_in/log(y_in);\n"
        return s


class TaylorL(pyeq3.Model_3D_BaseClass.Model_3D_BaseClass):
    _baseName = "Taylor Series L"
    _HTML = "z = a + b*ln(x) + c/ln(y) + d*ln(x)<sup>2</sup> + f/ln(y)<sup>2</sup> + g*ln(x)/ln(y)"
    _leftSideHTML = "z"
    _coefficientDesignators = ["a", "b", "c", "d", "f", "g"]
    _canLinearSolverBeUsedForSSQABS = True

    webReferenceURL = ""

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = False

    # all extended version autoGenerate flags are False by default in IModel.py
    autoGenerateReciprocalForm = True
    autoGenerateInverseForms = True
    autoGenerateGrowthAndDecayForms = True

    independentData1CannotContainZeroFlag = True
    independentData1CannotContainPositiveFlag = False
    independentData1CannotContainNegativeFlag = True
    independentData2CannotContainZeroFlag = True
    independentData2CannotContainPositiveFlag = False
    independentData2CannotContainNegativeFlag = True

    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.Ones(NameOrValueFlag=1), []]
        )
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.LogX(NameOrValueFlag=1), []]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowLogY(
                    NameOrValueFlag=1, args=[-1.0]
                ),
                [-1.0],
            ]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowLogX(
                    NameOrValueFlag=1, args=[2.0]
                ),
                [2.0],
            ]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowLogY(
                    NameOrValueFlag=1, args=[-2.0]
                ),
                [-2.0],
            ]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowLogX_PowLogY(
                    NameOrValueFlag=1, args=[1.0, -1.0]
                ),
                [1.0, -1.0],
            ]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        LogX = inDataCacheDictionary["LogX"]
        # only need to perform this dictionary look-up once
        PowLogY_Neg1 = inDataCacheDictionary["PowLogY_-1.0"]
        # only need to perform this dictionary look-up once
        PowLogX_2 = inDataCacheDictionary["PowLogX_2.0"]
        # only need to perform this dictionary look-up once
        PowLogY_Neg2 = inDataCacheDictionary["PowLogY_-2.0"]
        # only need to perform this dictionary look-up once
        PowLogX_PowLogY_1_Neg1 = inDataCacheDictionary["PowLogX_PowLogY_1.0-1.0"]

        a = inCoeffs[0]
        b = inCoeffs[1]
        c = inCoeffs[2]
        d = inCoeffs[3]
        f = inCoeffs[4]
        g = inCoeffs[5]

        try:
            temp = (
                a
                + b * LogX
                + c * PowLogY_Neg1
                + d * PowLogX_2
                + f * PowLogY_Neg2
                + g * PowLogX_PowLogY_1_Neg1
            )
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = a + b*log(x_in) + c/log(y_in) + d*pow(log(x_in), 2.0) + f/pow(log(y_in), 2.0) + g*log(x_in)/log(y_in);\n"
        return s


class TaylorM(pyeq3.Model_3D_BaseClass.Model_3D_BaseClass):
    _baseName = "Taylor Series M"
    _HTML = "z = a + b/x + c/y + d/x<sup>2</sup> + f/y<sup>2</sup> + g/(xy)"
    _leftSideHTML = "z"
    _coefficientDesignators = ["a", "b", "c", "d", "f", "g"]
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
    independentData2CannotContainZeroFlag = True
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
            [
                pyeq3.DataCache.DataCacheFunctions.PowY(NameOrValueFlag=1, args=[-1.0]),
                [-1.0],
            ]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowX(NameOrValueFlag=1, args=[-2.0]),
                [-2.0],
            ]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowY(NameOrValueFlag=1, args=[-2.0]),
                [-2.0],
            ]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowX_PowY(
                    NameOrValueFlag=1, args=[-1.0, -1.0]
                ),
                [-1.0, -1.0],
            ]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        PowX_Neg1 = inDataCacheDictionary["PowX_-1.0"]
        # only need to perform this dictionary look-up once
        PowY_Neg1 = inDataCacheDictionary["PowY_-1.0"]
        # only need to perform this dictionary look-up once
        PowX_Neg2 = inDataCacheDictionary["PowX_-2.0"]
        # only need to perform this dictionary look-up once
        PowY_Neg2 = inDataCacheDictionary["PowY_-2.0"]
        # only need to perform this dictionary look-up once
        PowX_PowY_Neg1_Neg1 = inDataCacheDictionary["PowX_PowY_-1.0-1.0"]

        a = inCoeffs[0]
        b = inCoeffs[1]
        c = inCoeffs[2]
        d = inCoeffs[3]
        f = inCoeffs[4]
        g = inCoeffs[5]

        try:
            temp = (
                a
                + b * PowX_Neg1
                + c * PowY_Neg1
                + d * PowX_Neg2
                + f * PowY_Neg2
                + g * PowX_PowY_Neg1_Neg1
            )
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = a + b/x_in + c/y_in + d/pow(x_in, 2.0) + f/pow(y_in, 2.0) + g/(x_in*y_in);\n"
        return s


class TaylorN(pyeq3.Model_3D_BaseClass.Model_3D_BaseClass):
    _baseName = "Taylor Series N"
    _HTML = (
        "z = a + b/ln(x) + c/y + d/ln(x)<sup>2</sup> + f/y<sup>2</sup> + g/(ln(x)*y)"
    )
    _leftSideHTML = "z"
    _coefficientDesignators = ["a", "b", "c", "d", "f", "g"]
    _canLinearSolverBeUsedForSSQABS = True

    webReferenceURL = ""

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = False

    # all extended version autoGenerate flags are False by default in IModel.py
    autoGenerateReciprocalForm = True
    autoGenerateInverseForms = True
    autoGenerateGrowthAndDecayForms = True

    independentData1CannotContainZeroFlag = True
    independentData1CannotContainPositiveFlag = False
    independentData1CannotContainNegativeFlag = True
    independentData2CannotContainZeroFlag = True
    independentData2CannotContainPositiveFlag = False
    independentData2CannotContainNegativeFlag = False

    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.Ones(NameOrValueFlag=1), []]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowLogX(
                    NameOrValueFlag=1, args=[-1.0]
                ),
                [-1.0],
            ]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowY(NameOrValueFlag=1, args=[-1.0]),
                [-1.0],
            ]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowLogX(
                    NameOrValueFlag=1, args=[-2.0]
                ),
                [-2.0],
            ]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowY(NameOrValueFlag=1, args=[-2.0]),
                [-2.0],
            ]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowLogX_PowY(
                    NameOrValueFlag=1, args=[-1.0, -1.0]
                ),
                [-1.0, -1.0],
            ]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        PowLogX_Neg1 = inDataCacheDictionary["PowLogX_-1.0"]
        # only need to perform this dictionary look-up once
        PowY_Neg1 = inDataCacheDictionary["PowY_-1.0"]
        # only need to perform this dictionary look-up once
        PowLogX_Neg2 = inDataCacheDictionary["PowLogX_-2.0"]
        # only need to perform this dictionary look-up once
        PowY_Neg2 = inDataCacheDictionary["PowY_-2.0"]
        # only need to perform this dictionary look-up once
        PowLogX_PowY_Neg1_Neg1 = inDataCacheDictionary["PowLogX_PowY_-1.0-1.0"]

        a = inCoeffs[0]
        b = inCoeffs[1]
        c = inCoeffs[2]
        d = inCoeffs[3]
        f = inCoeffs[4]
        g = inCoeffs[5]

        try:
            temp = (
                a
                + b * PowLogX_Neg1
                + c * PowY_Neg1
                + d * PowLogX_Neg2
                + f * PowY_Neg2
                + g * PowLogX_PowY_Neg1_Neg1
            )
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = a + b/log(x_in) + c/y_in + d/pow(log(x_in), 2.0) + f/pow(y_in, 2.0) + g/(log(x_in)*y_in);\n"
        return s


class TaylorO(pyeq3.Model_3D_BaseClass.Model_3D_BaseClass):
    _baseName = "Taylor Series O"
    _HTML = (
        "z = a + b/x + c/ln(y) + d/x<sup>2</sup> + f/ln(y)<sup>2</sup> + g/(x*ln(y))"
    )
    _leftSideHTML = "z"
    _coefficientDesignators = ["a", "b", "c", "d", "f", "g"]
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
    independentData2CannotContainZeroFlag = True
    independentData2CannotContainPositiveFlag = False
    independentData2CannotContainNegativeFlag = True

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
            [
                pyeq3.DataCache.DataCacheFunctions.PowLogY(
                    NameOrValueFlag=1, args=[-1.0]
                ),
                [-1.0],
            ]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowX(NameOrValueFlag=1, args=[-2.0]),
                [-2.0],
            ]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowLogY(
                    NameOrValueFlag=1, args=[-2.0]
                ),
                [-2.0],
            ]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowX_PowLogY(
                    NameOrValueFlag=1, args=[-1.0, -1.0]
                ),
                [-1.0, -1.0],
            ]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        PowX_Neg1 = inDataCacheDictionary["PowX_-1.0"]
        # only need to perform this dictionary look-up once
        PowLogY_Neg1 = inDataCacheDictionary["PowLogY_-1.0"]
        # only need to perform this dictionary look-up once
        PowX_Neg2 = inDataCacheDictionary["PowX_-2.0"]
        # only need to perform this dictionary look-up once
        PowLogY_Neg2 = inDataCacheDictionary["PowLogY_-2.0"]
        # only need to perform this dictionary look-up once
        PowX_PowLogY_Neg1_Neg1 = inDataCacheDictionary["PowX_PowLogY_-1.0-1.0"]

        a = inCoeffs[0]
        b = inCoeffs[1]
        c = inCoeffs[2]
        d = inCoeffs[3]
        f = inCoeffs[4]
        g = inCoeffs[5]

        try:
            temp = (
                a
                + b * PowX_Neg1
                + c * PowLogY_Neg1
                + d * PowX_Neg2
                + f * PowLogY_Neg2
                + g * PowX_PowLogY_Neg1_Neg1
            )
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = a + b/x_in + c/log(y_in) + d/pow(x_in, 2.0) + f/pow(log(y_in), 2.0) + g/(x_in*log(y_in));\n"
        return s


class TaylorP(pyeq3.Model_3D_BaseClass.Model_3D_BaseClass):
    _baseName = "Taylor Series P"
    _HTML = "z = a + b/ln(x) + c/ln(y) + d/ln(x)<sup>2</sup> + f/ln(y)<sup>2</sup> + g/(ln(x)*ln(y))"
    _leftSideHTML = "z"
    _coefficientDesignators = ["a", "b", "c", "d", "f", "g"]
    _canLinearSolverBeUsedForSSQABS = True

    webReferenceURL = ""

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = False

    # all extended version autoGenerate flags are False by default in IModel.py
    autoGenerateReciprocalForm = True
    autoGenerateInverseForms = True
    autoGenerateGrowthAndDecayForms = True

    independentData1CannotContainZeroFlag = True
    independentData1CannotContainPositiveFlag = False
    independentData1CannotContainNegativeFlag = True
    independentData2CannotContainZeroFlag = True
    independentData2CannotContainPositiveFlag = False
    independentData2CannotContainNegativeFlag = True

    def GetDataCacheFunctions(self):
        functionList = []
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.Ones(NameOrValueFlag=1), []]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowLogX(
                    NameOrValueFlag=1, args=[-1.0]
                ),
                [-1.0],
            ]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowLogY(
                    NameOrValueFlag=1, args=[-1.0]
                ),
                [-1.0],
            ]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowLogX(
                    NameOrValueFlag=1, args=[-2.0]
                ),
                [-2.0],
            ]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowLogY(
                    NameOrValueFlag=1, args=[-2.0]
                ),
                [-2.0],
            ]
        )
        functionList.append(
            [
                pyeq3.DataCache.DataCacheFunctions.PowLogX_PowLogY(
                    NameOrValueFlag=1, args=[-1.0, -1.0]
                ),
                [-1.0, -1.0],
            ]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        PowLogX_Neg1 = inDataCacheDictionary["PowLogX_-1.0"]
        # only need to perform this dictionary look-up once
        PowLogY_Neg1 = inDataCacheDictionary["PowLogY_-1.0"]
        # only need to perform this dictionary look-up once
        PowLogX_Neg2 = inDataCacheDictionary["PowLogX_-2.0"]
        # only need to perform this dictionary look-up once
        PowLogY_Neg2 = inDataCacheDictionary["PowLogY_-2.0"]
        # only need to perform this dictionary look-up once
        PowLogX_PowLogY_Neg1_Neg1 = inDataCacheDictionary["PowLogX_PowLogY_-1.0-1.0"]

        a = inCoeffs[0]
        b = inCoeffs[1]
        c = inCoeffs[2]
        d = inCoeffs[3]
        f = inCoeffs[4]
        g = inCoeffs[5]

        try:
            temp = (
                a
                + b * PowLogX_Neg1
                + c * PowLogY_Neg1
                + d * PowLogX_Neg2
                + f * PowLogY_Neg2
                + g * PowLogX_PowLogY_Neg1_Neg1
            )
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = a + b/log(x_in) + c/log(y_in) + d/pow(log(x_in), 2.0) + f/pow(log(y_in), 2.0) + g/(log(x_in)*log(y_in));\n"
        return s
