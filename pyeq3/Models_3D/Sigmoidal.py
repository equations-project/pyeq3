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


class AndreaPrunottoSigmoidA(pyeq3.Model_3D_BaseClass.Model_3D_BaseClass):
    _baseName = "Andrea Prunotto Sigmoid A"
    _HTML = "z = a0 + (a1 / (1.0 + exp(a2 * (x + a3 + a4 * y + a5 * x * y))))"
    _leftSideHTML = "z"
    _coefficientDesignators = ["a0", "a1", "a2", "a3", "a4", "a5"]
    _canLinearSolverBeUsedForSSQABS = False

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
            [pyeq3.DataCache.DataCacheFunctions.X(NameOrValueFlag=1), []]
        )
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.Y(NameOrValueFlag=1), []]
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

        a0 = inCoeffs[0]
        a1 = inCoeffs[1]
        a2 = inCoeffs[2]
        a3 = inCoeffs[3]
        a4 = inCoeffs[4]
        a5 = inCoeffs[5]

        try:
            temp = a0 + (
                a1 / (1.0 + numpy.exp(a2 * (x_in + a3 + a4 * y_in + a5 * x_in * y_in)))
            )
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = a0 + (a1 / (1.0 + exp(a2 * (x_in + a3 + a4 * y_in + a5 * x_in * y_in))));\n"
        return s


class AndreaPrunottoSigmoidB(pyeq3.Model_3D_BaseClass.Model_3D_BaseClass):
    _baseName = "Andrea Prunotto Sigmoid B"
    _HTML = "z = a0 + (a1 / (1.0 + exp(a2 * (x * a3 + a4 * y + a5 * x * y))))"
    _leftSideHTML = "z"
    _coefficientDesignators = ["a0", "a1", "a2", "a3", "a4", "a5"]
    _canLinearSolverBeUsedForSSQABS = False

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
            [pyeq3.DataCache.DataCacheFunctions.X(NameOrValueFlag=1), []]
        )
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.Y(NameOrValueFlag=1), []]
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

        a0 = inCoeffs[0]
        a1 = inCoeffs[1]
        a2 = inCoeffs[2]
        a3 = inCoeffs[3]
        a4 = inCoeffs[4]
        a5 = inCoeffs[5]

        try:
            temp = a0 + (
                a1 / (1.0 + numpy.exp(a2 * (x_in * a3 + a4 * y_in + a5 * x_in * y_in)))
            )
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = a0 + (a1 / (1.0 + exp(a2 * (x_in * a3 + a4 * y_in + a5 * x_in * y_in))));\n"
        return s


class FraserSmithSigmoid(pyeq3.Model_3D_BaseClass.Model_3D_BaseClass):
    _baseName = "Fraser Smith Sigmoid"
    _HTML = "z = 1.0 / ((1.0 + exp(a - bx)) * (1.0 + exp(c - dy)))"
    _leftSideHTML = "z"
    _coefficientDesignators = ["a", "b", "c", "d"]
    _canLinearSolverBeUsedForSSQABS = False

    webReferenceURL = ""

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = False

    # all extended version autoGenerate flags are False by default in IModel.py
    autoGenerateOffsetForm = True
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
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.Y(NameOrValueFlag=1), []]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_in = inDataCacheDictionary["X"]
        # only need to perform this dictionary look-up once
        y_in = inDataCacheDictionary["Y"]

        a = inCoeffs[0]
        b = inCoeffs[1]
        c = inCoeffs[2]
        d = inCoeffs[3]

        try:
            temp = 1.0 / (
                (1.0 + numpy.exp(a - b * x_in)) * (1.0 + numpy.exp(c - d * y_in))
            )
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = 1.0 / ((1.0 + exp(a - b * x_in)) * (1.0 + exp(c - d * y_in)));\n"
        return s


class FraserSmithSigmoid_scaled(pyeq3.Model_3D_BaseClass.Model_3D_BaseClass):
    _baseName = "Fraser Smith Sigmoid Scaled"
    _HTML = "z = Scale / ((1.0 + exp(a - bx)) * (1.0 + exp(c - dy)))"
    _leftSideHTML = "z"
    _coefficientDesignators = ["a", "b", "c", "d", "Scale"]
    _canLinearSolverBeUsedForSSQABS = False

    webReferenceURL = ""

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = True

    # all extended version autoGenerate flags are False by default in IModel.py
    autoGenerateOffsetForm = True
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
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.Y(NameOrValueFlag=1), []]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_in = inDataCacheDictionary["X"]
        # only need to perform this dictionary look-up once
        y_in = inDataCacheDictionary["Y"]

        a = inCoeffs[0]
        b = inCoeffs[1]
        c = inCoeffs[2]
        d = inCoeffs[3]
        scale = inCoeffs[4]

        try:
            temp = scale / (
                (1.0 + numpy.exp(a - b * x_in)) * (1.0 + numpy.exp(c - d * y_in))
            )
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = Scale / ((1.0 + exp(a - b * x_in)) * (1.0 + exp(c - d * y_in)));\n"
        return s


class Sigmoid(pyeq3.Model_3D_BaseClass.Model_3D_BaseClass):
    _baseName = "Sigmoid"
    _HTML = "z = a / ((1.0 + exp(b - cx)) * (1.0 + exp(d - fy)))"
    _leftSideHTML = "z"
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
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.Y(NameOrValueFlag=1), []]
        )
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_in = inDataCacheDictionary["X"]
        # only need to perform this dictionary look-up once
        y_in = inDataCacheDictionary["Y"]

        a = inCoeffs[0]
        b = inCoeffs[1]
        c = inCoeffs[2]
        d = inCoeffs[3]
        f = inCoeffs[4]

        try:
            temp = a / (
                (1.0 + numpy.exp(b - c * x_in)) * (1.0 + numpy.exp(d - f * y_in))
            )
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = a / ((1.0 + exp(b - c * x_in)) * (1.0 + exp(d - f * y_in)));\n"
        return s
