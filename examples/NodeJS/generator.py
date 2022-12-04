import inspect


# named equations only
for modelsTypeName in ["Models_2D", "Models_3D"]:
    modelsFile = open(modelsTypeName + ".js", "wt")
    models = eval("pyeq3." + modelsTypeName)
    for submodule in inspect.getmembers(models):
        if inspect.ismodule(submodule[1]):

            moduleName = submodule[0].split(".")[-1]
            modelsFile.write(
                "\nexports."
                + moduleName
                + " = module.exports."
                + moduleName
                + " = {};\n\n"
            )

            for equationClass in inspect.getmembers(submodule[1]):
                if inspect.isclass(equationClass[1]):

                    # ignore these special classes
                    if (
                        equationClass[1].splineFlag
                        or equationClass[1].userSelectablePolynomialFlag
                        or equationClass[1].userCustomizablePolynomialFlag
                        or equationClass[1].userSelectablePolyfunctionalFlag
                        or equationClass[1].userSelectableRationalFlag
                        or equationClass[1].userDefinedFunctionFlag
                    ):
                        continue

                    for extendedVersionString in ["Default", "Offset"]:

                        if (extendedVersionString == "Offset") and (
                            equationClass[1].autoGenerateOffsetForm is False
                        ):
                            continue

                        equationInstance = equationClass[1](
                            "SSQABS", extendedVersionString
                        )
                        className = equationInstance.__class__.__name__
                        if extendedVersionString == "Offset":
                            className += "_WithOffset"
                        modelsFile.write(
                            "exports."
                            + moduleName
                            + "."
                            + className
                            + " = module.exports."
                            + moduleName
                            + "."
                            + className
                            + ''' = {
    pythonModuleName : "'''
                            + moduleName
                            + '''",
    pythonClassName : "'''
                            + equationClass[0]
                            + '''",
    extendedVersionString : "'''
                            + extendedVersionString
                            + '''",
    displayName : "'''
                            + equationInstance.GetDisplayName()
                            + '''",
    displayHTML : "'''
                            + equationInstance.GetDisplayHTML()
                            + """",
    dimensionality : """
                            + str(equationInstance.GetDimensionality())
                            + """,
    numberOfParameters : """
                            + str(len(equationInstance.GetCoefficientDesignators()))
                            + """
};

"""
                        )
