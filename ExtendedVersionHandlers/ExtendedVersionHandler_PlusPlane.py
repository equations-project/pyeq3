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


class ExtendedVersionHandler_PlusPlane(IExtendedVersionHandler.IExtendedVersionHandler):
    
    def AssembleDisplayHTML(self, inModel):
        cd = inModel.GetCoefficientDesignators()
        return inModel._HTML + '<br>' + inModel._leftSideHTML + ' = ' + inModel._leftSideHTML + ' + (' + cd[-3]+ ' * x)  + (' + cd[-2]+ ' * y) + ' + cd[-1]


    def AssembleDisplayName(self, inModel):
        return inModel._baseName + ' Plus Plane'


    def AssembleSourceCodeName(self, inModel):
        return inModel.__module__.split('.')[-1] + '_' + inModel.__class__.__name__ + "_PlusPlane"


    def AssembleCoefficientDesignators(self, inModel):
        # three additional coefficient designators
        l = len(inModel._coefficientDesignators)
        return inModel._coefficientDesignators + [inModel.listOfAdditionalCoefficientDesignators[l]] + [inModel.listOfAdditionalCoefficientDesignators[l+1]] + [inModel.listOfAdditionalCoefficientDesignators[l+2]]


    # overridden from abstract parent class
    def AppendAdditionalCoefficientBounds(self, inModel):
            if inModel.upperCoefficientBounds != []:
                inModel.upperCoefficientBounds.append(None)
                inModel.upperCoefficientBounds.append(None)
                inModel.upperCoefficientBounds.append(None)
            if inModel.lowerCoefficientBounds != []:
                inModel.lowerCoefficientBounds.append(None)
                inModel.lowerCoefficientBounds.append(None)
                inModel.lowerCoefficientBounds.append(None)


    def AssembleOutputSourceCodeCPP(self, inModel):
        cd = inModel.GetCoefficientDesignators()
        return inModel.SpecificCodeCPP() + "\ttemp = temp + ("  + cd[-3] + ' * x) + ('  + cd[-2] + ' * y) + ' + cd[-1] + ';\n'


    def GetAdditionalDataCacheFunctions(self, inModel, inDataCacheFunctions):
        foundX = False
        foundY = False
        for i in inDataCacheFunctions: # if these are already in the cache, we don't need to add them again
            if i[0] == 'X' and inModel.GetDimensionality() == 2:
                foundX = True
            if i[0] == 'Y' and inModel.GetDimensionality() == 3:
                foundY = True
                
            if not foundX:
                inDataCacheFunctions =  inDataCacheFunctions + \
                       [[pyeq3.DataCache.DataCacheFunctions.X(NameOrValueFlag=1), []]]
            if not foundY:
                inDataCacheFunctions =  inDataCacheFunctions + \
                       [[pyeq3.DataCache.DataCacheFunctions.Y(NameOrValueFlag=1), []]]
        return inDataCacheFunctions


    def GetAdditionalModelPredictions(self, inBaseModelCalculation, inCoeffs, inDataCacheDictionary, inModel):
        return self.ConvertInfAndNanToLargeNumber(inBaseModelCalculation + inCoeffs[len(inCoeffs)-3] * inDataCacheDictionary['X'] + inCoeffs[len(inCoeffs)-2] * inDataCacheDictionary['Y'] + inCoeffs[len(inCoeffs)-1])
