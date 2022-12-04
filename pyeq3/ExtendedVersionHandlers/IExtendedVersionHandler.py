#    pyeq3 is a collection of equations expressed as Python classes
#
#    Copyright (C) 2013 James R. Phillips
#    2548 Vera Cruz Drive
#    Birmingham, AL 35235 USA
#
#    https://github.com/equations-project/pyeq3
#
#    License: BSD-style (see LICENSE.txt in main source directory)

import abc
import inspect
import numpy


class IExtendedVersionHandler(object):
    @abc.abstractmethod
    def AssembleDisplayHTML(self):
        raise NotImplementedError(
            "The IExtendedVersionHandler abstract base class does not implement "
            + inspect.stack()[0][3]
        )

    @abc.abstractmethod
    def AssembleDisplayName(self, inModel):
        raise NotImplementedError(
            "The IExtendedVersionHandler abstract base class does not implement "
            + inspect.stack()[0][3]
        )

    @abc.abstractmethod
    def AssembleCoefficientDesignators(self):
        raise NotImplementedError(
            "The IExtendedVersionHandler abstract base class does not implement "
            + inspect.stack()[0][3]
        )

    @abc.abstractmethod
    def AssembleOutputSourceCodeCPP(self, IModel):
        raise NotImplementedError(
            "The IExtendedVersionHandler abstract base class does not implement "
            + inspect.stack()[0][3]
        )

    def ShouldDataBeRejected(self, inModel):
        if (inModel.independentData1CannotContainZeroFlag is True) and (
            inModel.dataCache.independentData1ContainsZeroFlag is True
        ):
            return True
        if (inModel.independentData2CannotContainZeroFlag is True) and (
            inModel.dataCache.independentData2ContainsZeroFlag is True
        ):
            return True
        if (inModel.independentData1CannotContainPositiveFlag is True) and (
            inModel.dataCache.independentData1ContainsPositiveFlag is True
        ):
            return True
        if (inModel.independentData2CannotContainPositiveFlag is True) and (
            inModel.dataCache.independentData2ContainsPositiveFlag is True
        ):
            return True
        if (inModel.independentData1CannotContainNegativeFlag is True) and (
            inModel.dataCache.independentData1ContainsNegativeFlag is True
        ):
            return True
        if (inModel.independentData2CannotContainNegativeFlag is True) and (
            inModel.dataCache.independentData2ContainsNegativeFlag is True
        ):
            return True
        if (
            (inModel.independentData1CannotContainBothPositiveAndNegativeFlag is True)
            and (inModel.dataCache.independentData1ContainsPositiveFlag is True)
            and (inModel.dataCache.independentData1ContainsNegativeFlag is True)
        ):
            return True
        if (
            (inModel.independentData2CannotContainBothPositiveAndNegativeFlag is True)
            and (inModel.dataCache.independentData2ContainsPositiveFlag is True)
            and (inModel.dataCache.independentData2ContainsNegativeFlag is True)
        ):
            return True
        return False

    @abc.abstractmethod
    def GetAdditionalDataCacheFunctions(self, inModel, inDataCacheFunctions):
        raise NotImplementedError(
            "The IExtendedVersionHandler abstract base class does not implement "
            + inspect.stack()[0][3]
        )

    @abc.abstractmethod
    def GetAdditionalModelPredictions(
        self, inBaseModelCalculation, inCoeffs, inDataCacheDictionary, inModel
    ):
        raise NotImplementedError(
            "The IExtendedVersionHandler abstract base class does not implement "
            + inspect.stack()[0][3]
        )

    @abc.abstractmethod
    def AppendAdditionalCoefficientBounds(self, inModel):
        raise NotImplementedError(
            "The IExtendedVersionHandler abstract base class does not implement "
            + inspect.stack()[0][3]
        )

    # duplicated in Polyfunctions.py

    def ConvertInfAndNanToLargeNumber(self, inArray):
        inArray[numpy.isnan(inArray)] = 1.0e300
        inArray[numpy.isinf(inArray)] = 1.0e300
        return inArray

    def CanLinearSolverBeUsedForSSQABS(self, inModelFlag):
        return False
