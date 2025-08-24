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


class King_14(pyeq3.Model_2D_BaseClass.Model_2D_BaseClass):
    _baseName = "King 14"
    _HTML = "f(x) = k * [1/sqrt(1 + (x/r_c) ** 2) - 1/sqrt(1 + (r_t/r_c) ** 2)] ** 2"
    _leftSideHTML = "f(x)"
    _coefficientDesignators = ["k", "r_c", "r_t"]
    _canLinearSolverBeUsedForSSQABS = False

    webReferenceURL = "http://adsabs.harvard.edu/abs/1962AJ.....67..471K"

    baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions = True

    # all extended version autoGenerate flags are False by default in IModel.py
    autoGenerateOffsetForm = True
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

        k = inCoeffs[0]
        r_c = inCoeffs[1]
        r_t = inCoeffs[2]

        try:
            temp = k * numpy.square(
                1.0 / numpy.sqrt(1.0 + numpy.square(x_in / r_c))
                - 1.0 / (numpy.sqrt(1.0 + numpy.square(r_t / r_c)))
            )
            return self.extendedVersionHandler.GetAdditionalModelPredictions(
                temp, inCoeffs, inDataCacheDictionary, self
            )
        except ZeroDivisionError:
            return numpy.ones(len(inDataCacheDictionary["DependentData"])) * 1.0e300

    def SpecificCodeCPP(self):
        s = "\ttemp = k * pow(1.0/pow(1.0 + pow(x_in/r_c, 2.0), 0.5) "
        s += "- 1.0/pow(1.0 + pow(r_t/r_c, 2.0), 0.5), 2.0);\n"
        return s
