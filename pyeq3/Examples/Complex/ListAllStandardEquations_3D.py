import os
import sys
import inspect

import pyeq3


for submodule in inspect.getmembers(pyeq3.Models_3D):
    if inspect.ismodule(submodule[1]):
        for equationClass in inspect.getmembers(submodule[1]):
            if inspect.isclass(equationClass[1]):
                for extendedVersionName in ['Default', 'Offset']:

                    if (-1 != extendedVersionName.find('Offset')) and (equationClass[1].autoGenerateOffsetForm is False):
                        continue

                    equation = equationClass[1]('SSQABS', extendedVersionName)
                    print('3D ' + submodule[0] +
                          ' --- ' + equation.GetDisplayName())

print('Done.')
