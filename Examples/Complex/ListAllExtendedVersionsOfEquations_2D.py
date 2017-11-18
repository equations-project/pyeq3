import os, sys, inspect

import pyeq3


for submodule in inspect.getmembers(pyeq3.Models_2D):
    if inspect.ismodule(submodule[1]):
        for equationClass in inspect.getmembers(submodule[1]):
            if inspect.isclass(equationClass[1]):
                # the 3D version demonstrates exclusion by equation attribute
                for extendedVersionName in pyeq3.ExtendedVersionHandlers.extendedVersionHandlerNameList:
                    try:
                        equation = equationClass[1]('SSQABS', extendedVersionName)
                    except:
                        continue
                    print('2D ' + submodule[0] + ' --- ' + equation.GetDisplayName())
                    
print('Done.')
