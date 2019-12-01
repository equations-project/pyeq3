#    pyeq3 is a collection of equations expressed as Python classes
#
#    Copyright (C) 2013 James R. Phillips
#    2548 Vera Cruz Drive
#    Birmingham, AL 35235 USA
#
#    email: zunzun@zunzun.com
#
#    License: BSD-style (see LICENSE.txt in main source directory)

import pyeq3
from . import IExtendedVersionHandler


class ExtendedVersionHandler_Inverse(IExtendedVersionHandler.IExtendedVersionHandler):
    
    def AssembleDisplayHTML(self, inModel):
        if inModel.GetDimensionality() == 2:
            return inModel._HTML + '<br>' + inModel._leftSideHTML + ' = x / ' + inModel._leftSideHTML
        else:
            return inModel._HTML + '<br>' + inModel._leftSideHTML + ' = xy / ' + inModel._leftSideHTML


    def AssembleDisplayName(self, inModel):
        return'Inverse ' + inModel._baseName


    def AssembleSourceCodeName(self, inModel):
        return inModel.__module__.split('.')[-1] + '_' + inModel.__class__.__name__ + "_Inverse"


    def AssembleCoefficientDesignators(self, inModel):
        return inModel._coefficientDesignators


    # overridden from abstract parent class
    def AppendAdditionalCoefficientBounds(self, inModel):
        return


    def AssembleOutputSourceCodeCPP(self, inModel):
        if inModel.GetDimensionality() == 2:
            return inModel.SpecificCodeCPP() + "\ttemp = x_in / temp;\n"
        else:
            return inModel.SpecificCodeCPP() + "\ttemp = (x_in * y_in) / temp;\n"


    def GetAdditionalDataCacheFunctions(self, inModel, inDataCacheFunctions):
        foundX = False
        foundXY = False
        for i in inDataCacheFunctions: # if these are already in the cache, we don't need to add them again
            if i[0] == 'X' and inModel.GetDimensionality() == 2:
                foundX = True
            if i[0] == 'XY' and inModel.GetDimensionality() == 3:
                foundXY = True
                
        if inModel.GetDimensionality() == 2:
            if not foundX:
                return inDataCacheFunctions + \
                       [[pyeq3.DataCache.DataCacheFunctions.X(NameOrValueFlag=1), []]]
        else:
            if not foundXY:
                return inDataCacheFunctions + \
                       [[pyeq3.DataCache.DataCacheFunctions.XY(NameOrValueFlag=1), []]]
        return inDataCacheFunctions


    def GetAdditionalModelPredictions(self, inBaseModelCalculation, inCoeffs, inDataCacheDictionary, inModel):
        if inModel.GetDimensionality() == 2:
            return self.ConvertInfAndNanToLargeNumber(inDataCacheDictionary['X'] / inBaseModelCalculation)
        else:
            return self.ConvertInfAndNanToLargeNumber(inDataCacheDictionary['XY'] / inBaseModelCalculation)
