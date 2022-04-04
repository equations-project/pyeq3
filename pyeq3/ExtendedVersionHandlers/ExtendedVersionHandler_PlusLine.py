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


class ExtendedVersionHandler_PlusLine(IExtendedVersionHandler.IExtendedVersionHandler):
    
    def AssembleDisplayHTML(self, inModel):
        cd = inModel.GetCoefficientDesignators()
        return inModel._HTML + '<br>' + inModel._leftSideHTML + ' = ' + inModel._leftSideHTML + ' + (' + cd[-2]+ ' * x) + ' + cd[-1]


    def AssembleDisplayName(self, inModel):
        return inModel._baseName + ' Plus Line'


    def AssembleSourceCodeName(self, inModel):
        return inModel.__module__.split('.')[-1] + '_' + inModel.__class__.__name__ + "_PlusLine"


    def AssembleCoefficientDesignators(self, inModel):
        # two additional coefficient designators
        l = len(inModel._coefficientDesignators)
        return inModel._coefficientDesignators + [inModel.listOfAdditionalCoefficientDesignators[l]] + [inModel.listOfAdditionalCoefficientDesignators[l+1]]


    # overridden from abstract parent class
    def AppendAdditionalCoefficientBounds(self, inModel):
            if inModel.upperCoefficientBounds != []:
                inModel.upperCoefficientBounds.append(None)
                inModel.upperCoefficientBounds.append(None)
            if inModel.lowerCoefficientBounds != []:
                inModel.lowerCoefficientBounds.append(None)
                inModel.lowerCoefficientBounds.append(None)


    def AssembleOutputSourceCodeCPP(self, inModel):
        cd = inModel.GetCoefficientDesignators()
        return inModel.SpecificCodeCPP() + "\ttemp = temp + ("  + cd[-2] + ' * ' + 'x' + ") + " + cd[-1] + ";\n"


    def GetAdditionalModelPredictions(self, inBaseModelCalculation, inCoeffs, inDataCacheDictionary, inModel):
        return self.ConvertInfAndNanToLargeNumber(inBaseModelCalculation + inCoeffs[len(inCoeffs)-2] * inDataCacheDictionary['X'] + inCoeffs[len(inCoeffs)-1])
