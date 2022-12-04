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


class NIST_NelsonAutolog(pyeq3.Model_3D_BaseClass.Model_3D_BaseClass):
    autoGeneratePlusPlaneForm = True  # auto-added by script

    _baseName = "NIST Nelson Autolog"
    _HTML = "z = exp(b1 - b2 * x * exp(-b3*y))"
    _leftSideHTML = "z"
    _coefficientDesignators = ["b1", "b2", "b3"]
    _canLinearSolverBeUsedForSSQABS = False

    webReferenceURL = "http://www.itl.nist.gov/div898/strd/nls/data/nelson.shtml"

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
        functionList.append(
            [pyeq3.DataCache.DataCacheFunctions.Y(NameOrValueFlag=1), []]
        )
        handler = self.extendedVersionHandler
        return handler.GetAdditionalDataCacheFunctions(self, functionList)

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_in = inDataCacheDictionary["X"]
        # only need to perform this dictionary look-up once
        y_in = inDataCacheDictionary["Y"]

        b1 = inCoeffs[0]
        b2 = inCoeffs[1]
        b3 = inCoeffs[2]

        try:
            temp = numpy.exp(b1 - b2 * x_in * numpy.exp(-b3 * y_in))
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except Exception:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = exp(b1 - b2*x_in * exp(-b3*y_in));\n"
        return s


class NIST_Nelson(pyeq3.Model_3D_BaseClass.Model_3D_BaseClass):

    _baseName = "NIST Nelson"
    _HTML = "log(y) = b1 - b2 * X1 * exp(-b3*X2)"
    _leftSideHTML = "log(y)"
    _coefficientDesignators = ["b1", "b2", "b3"]
    _canLinearSolverBeUsedForSSQABS = False

    webReferenceURL = "http://www.itl.nist.gov/div898/strd/nls/data/nelson.shtml"

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
        return self.extendedVersionHandler.GetAdditionalDataCacheFunctions(
            self, functionList
        )

    def CalculateModelPredictions(self, inCoeffs, inDataCacheDictionary):
        # only need to perform this dictionary look-up once
        x_in = inDataCacheDictionary["X"]
        # only need to perform this dictionary look-up once
        y_in = inDataCacheDictionary["Y"]

        b1 = inCoeffs[0]
        b2 = inCoeffs[1]
        b3 = inCoeffs[2]

        try:
            temp = b1 - b2 * x_in * numpy.exp(-b3 * y_in)
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except Exception:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = b1 - b2*x_in * exp(-b3*y_in);\n"
        return s
