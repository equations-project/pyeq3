#    pyeq3 is a collection of equations expressed as Python classes
#
#    Copyright (C) 2013 James R. Phillips
#    2548 Vera Cruz Drive
#    Birmingham, AL 35235 USA
#
#    https://github.com/equations-project/pyeq3
#
#    License: BSD-style (see LICENSE.txt in main source directory)

import pyeq3
from . import IExtendedVersionHandler


class ExtendedVersionHandler_LinearDecay(
    IExtendedVersionHandler.IExtendedVersionHandler
):
    def AssembleDisplayHTML(self, inModel):
        x_or_xy = "xy"
        if inModel.GetDimensionality() == 2:
            x_or_xy = "x"

        if inModel.baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions:
            return (
                inModel._HTML
                + "<br>"
                + inModel._leftSideHTML
                + " = "
                + inModel._leftSideHTML
                + " / "
                + x_or_xy
            )
        else:
            try:
                cd = inModel.GetCoefficientDesignators()
                return (
                    inModel._HTML
                    + "<br>"
                    + inModel._leftSideHTML
                    + " = "
                    + inModel._leftSideHTML
                    + " / ("
                    + cd[-1]
                    + " * "
                    + x_or_xy
                    + ")"
                )
            except AttributeError:
                return (
                    inModel._HTML
                    + "<br>"
                    + inModel._leftSideHTML
                    + " = "
                    + inModel._leftSideHTML
                    + " / ("
                    + x_or_xy
                    + ")"
                )

    def AssembleDisplayName(self, inModel):
        return inModel._baseName + " With Linear Decay"

    def AssembleSourceCodeName(self, inModel):
        return (
            inModel.__module__.split(".")[-1]
            + "_"
            + inModel.__class__.__name__
            + "_LinearDecay"
        )

    def AssembleCoefficientDesignators(self, inModel):
        if inModel.baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions:
            return inModel._coefficientDesignators
        else:
            return inModel._coefficientDesignators + [
                inModel.listOfAdditionalCoefficientDesignators[
                    len(inModel._coefficientDesignators)
                ]
            ]

    # overridden from abstract parent class

    def AppendAdditionalCoefficientBounds(self, inModel):
        if inModel.baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions:
            return
        else:
            if inModel.upperCoefficientBounds != []:
                inModel.upperCoefficientBounds.append(None)
            if inModel.lowerCoefficientBounds != []:
                inModel.lowerCoefficientBounds.append(None)

    def AssembleOutputSourceCodeCPP(self, inModel):
        x_or_xy = "x_in * y_in"
        if inModel.GetDimensionality() == 2:
            x_or_xy = "x_in"

        if inModel.baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions:
            return inModel.SpecificCodeCPP() + "\ttemp = temp / (" + x_or_xy + ");\n"
        else:
            cd = inModel.GetCoefficientDesignators()
            return (
                inModel.SpecificCodeCPP()
                + "\ttemp = temp / ("
                + cd[-1]
                + " * "
                + x_or_xy
                + ");\n"
            )

    # overridden from abstract parent class

    def ShouldDataBeRejected(self, inModel):
        if (
            inModel.dataCache.independentData1ContainsZeroFlag is True
        ):  # cannot divide by zero
            return True
        if (
            inModel.dataCache.independentData2ContainsZeroFlag is True
        ):  # cannot divide by zero
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
        return False

    def GetAdditionalDataCacheFunctions(self, inModel, inDataCacheFunctions):
        foundX = False
        foundXY = False
        for (
            i
        ) in (
            inDataCacheFunctions
        ):  # if these are already in the cache, we don't need to add them again
            if i[0] == "X" and inModel.GetDimensionality() == 2:
                foundX = True
            if i[0] == "XY" and inModel.GetDimensionality() == 3:
                foundXY = True

        if inModel.GetDimensionality() == 2:
            if not foundX:
                return inDataCacheFunctions + [
                    [pyeq3.DataCache.DataCacheFunctions.X(NameOrValueFlag=1), []]
                ]
        else:
            if not foundXY:
                return inDataCacheFunctions + [
                    [pyeq3.DataCache.DataCacheFunctions.XY(NameOrValueFlag=1), []]
                ]
        return inDataCacheFunctions

    def GetAdditionalModelPredictions(
        self, inBaseModelCalculation, inCoeffs, inDataCacheDictionary, inModel
    ):
        if inModel.GetDimensionality() == 2:
            if inModel.baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions:
                return self.ConvertInfAndNanToLargeNumber(
                    inBaseModelCalculation / inDataCacheDictionary["X"]
                )
            else:
                return self.ConvertInfAndNanToLargeNumber(
                    inBaseModelCalculation
                    / (inCoeffs[len(inCoeffs) - 1] * inDataCacheDictionary["X"])
                )
        else:
            if inModel.baseEquationHasGlobalMultiplierOrDivisor_UsedInExtendedVersions:
                return self.ConvertInfAndNanToLargeNumber(
                    inBaseModelCalculation / inDataCacheDictionary["XY"]
                )
            else:
                return self.ConvertInfAndNanToLargeNumber(
                    inBaseModelCalculation
                    / (inCoeffs[len(inCoeffs) - 1] * inDataCacheDictionary["XY"])
                )
