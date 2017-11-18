import os, sys, inspect

import pyeq3


for submodule in inspect.getmembers(pyeq3.Models_3D):
    if inspect.ismodule(submodule[1]):
        for equationClass in inspect.getmembers(submodule[1]):
            if inspect.isclass(equationClass[1]):
                # the 2D version demonstrates exclusion by exception
                for extendedVersionName in pyeq3.ExtendedVersionHandlers.extendedVersionHandlerNameList:
                    
                    if (-1 != extendedVersionName.find('Offset')) and (equationClass[1].autoGenerateOffsetForm == False):
                        continue
                    if (-1 != extendedVersionName.find('Reciprocal')) and (equationClass[1].autoGenerateReciprocalForm == False):
                        continue
                    if (-1 != extendedVersionName.find('Inverse')) and (equationClass[1].autoGenerateInverseForms == False):
                        continue
                    if (-1 != extendedVersionName.find('Growth')) and (equationClass[1].autoGenerateGrowthAndDecayForms == False):
                        continue
                    if (-1 != extendedVersionName.find('Decay')) and (equationClass[1].autoGenerateGrowthAndDecayForms == False):
                        continue
                    
                    equation = equationClass[1]('SSQABS', extendedVersionName)
                    print('3D ' + submodule[0] + ' --- ' + equation.GetDisplayName())
                    
print('Done.')
