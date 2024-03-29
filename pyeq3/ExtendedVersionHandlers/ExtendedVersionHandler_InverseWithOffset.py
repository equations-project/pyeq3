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


class ExtendedVersionHandler_InverseWithOffset(
    IExtendedVersionHandler.IExtendedVersionHandler
):
    def AssembleDisplayHTML(self, inModel):
        if inModel.GetDimensionality() == 2:
            return (
                inModel._HTML
                + "<br>"
                + inModel._leftSideHTML
                + " = x / "
                + inModel._leftSideHTML
                + " + Offset"
            )
        else:
            return (
                inModel._HTML
                + "<br>"
                + inModel._leftSideHTML
                + " = xy / ("
                + inModel._leftSideHTML
                + " + Offset"
            )

    def AssembleDisplayName(self, inModel):
        return "Inverse " + inModel._baseName + " With Offset"

    def AssembleSourceCodeName(self, inModel):
        return (
            inModel.__module__.split(".")[-1]
            + "_"
            + inModel.__class__.__name__
            + "_InverseWithOffset"
        )

    def AssembleCoefficientDesignators(self, inModel):
        return inModel._coefficientDesignators + ["Offset"]

    # overridden from abstract parent class

    def AppendAdditionalCoefficientBounds(self, inModel):
        if inModel.upperCoefficientBounds != []:
            inModel.upperCoefficientBounds.append(None)
        if inModel.lowerCoefficientBounds != []:
            inModel.lowerCoefficientBounds.append(None)

    def AssembleOutputSourceCodeCPP(self, inModel):
        if inModel.GetDimensionality() == 2:
            return inModel.SpecificCodeCPP() + "\ttemp = x_in / temp + Offset;\n"
        else:
            return (
                inModel.SpecificCodeCPP() + "\ttemp = (x_in * y_in) / temp + Offset;\n"
            )

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
            return self.ConvertInfAndNanToLargeNumber(
                (inDataCacheDictionary["X"] / inBaseModelCalculation)
                + inCoeffs[len(inCoeffs) - 1]
            )
        else:
            return self.ConvertInfAndNanToLargeNumber(
                (inDataCacheDictionary["XY"] / inBaseModelCalculation)
                + inCoeffs[len(inCoeffs) - 1]
            )
