def DatumInformation(model):
    """
    Calculates and prints absolute, relative, and percent errors
    for each data point in a parameterised model.

    Parameters
    ----------
    model : pyeq3.IModel object
        A model object that has already been parameterised
        using pyeq3.IModelSolve().
    """

    # calculate absolute, relative, and percent errors from the fit
    model.CalculateModelErrors(
        model.solvedCoefficients, model.dataCache.allDataCacheDictionary
    )

    cache_dict = model.dataCache.allDataCacheDictionary
    # this section prints information on each individual data point
    for i in range(len(cache_dict["DependentData"])):
        print(
            "X:",
            cache_dict["IndependentData"][0][i],
        )
        if model.GetDimensionality() == 2:
            print(
                "Y:",
                cache_dict["DependentData"][i],
            )
        else:
            print(
                "Y:",
                cache_dict["IndependentData"][1][i],
            )
            print(
                "Z:",
                cache_dict["DependentData"][i],
            )
        print(
            "Model:",
            model.modelPredictions[i],
        )
        print(
            "Abs. Error:",
            model.modelAbsoluteError[i],
        )
        if not model.dataCache.DependentDataContainsZeroFlag:
            print(
                "Rel. Error:",
                model.modelRelativeError[i],
            )
            print("Percent Error:", model.modelPercentError[i])
        else:
            print()
    print()

    return None


def FitStatistics(model):
    """
    Calculates and prints fit statistics
    for a parameterised model.

    Parameters
    ----------
    model : pyeq3.IModel object
        A model object that has already been parameterised
        using pyeq3.IModelSolve().
    """
    ##########################################################
    # overall fit and parameter statistics output section

    model.CalculateCoefficientAndFitStatistics()

    if model.upperCoefficientBounds or model.lowerCoefficientBounds:
        print("You entered coefficient bounds. Parameter statistics may")
        print("not be valid for parameter values at or near the bounds.")
        print()

    print("Degrees of freedom error", model.df_e)
    print("Degrees of freedom regression", model.df_r)

    if model.rmse is None:
        print("Root Mean Squared Error (RMSE): n/a")
    else:
        print("Root Mean Squared Error (RMSE):", model.rmse)

    if model.r2 is None:
        print("R-squared: n/a")
    else:
        print("R-squared:", model.r2)

    if model.r2adj is None:
        print("R-squared adjusted: n/a")
    else:
        print("R-squared adjusted:", model.r2adj)

    if model.Fstat is None:
        print("Model F-statistic: n/a")
    else:
        print("Model F-statistic:", model.Fstat)

    if model.Fpv is None:
        print("Model F-statistic p-value: n/a")
    else:
        print("Model F-statistic p-value:", model.Fpv)

    if model.ll is None:
        print("Model log-likelihood: n/a")
    else:
        print("Model log-likelihood:", model.ll)

    if model.aic is None:
        print("Model AIC: n/a")
    else:
        print("Model AIC:", model.aic)

    if model.bic is None:
        print("Model BIC: n/a")
    else:
        print("Model BIC:", model.bic)

    print()
    print("Individual Parameter Statistics:")
    for i in range(len(model.solvedCoefficients)):
        if model.tstat_beta is None:
            tstat = "n/a"
        else:
            tstat = "%-.5E" % (model.tstat_beta[i])

        if model.pstat_beta is None:
            pstat = "n/a"
        else:
            pstat = "%-.5E" % (model.pstat_beta[i])

        if model.sd_beta is not None:
            print(
                f"Coefficient {model.GetCoefficientDesignators()} = "
                f"{model.solvedCoefficients[i]:.16E}, "
                f"std error: {model.sd_beta[i]:.5E}"
            )

        else:
            print(
                f"Coefficient {model.GetCoefficientDesignators()} = "
                f"{model.solvedCoefficients[i]:.16E}, "
                f"std error: n/a"
            )
        print(
            f"          t-stat: {tstat}, p-stat: {pstat}, "
            "95 percent confidence intervals: "
            f"[{model.ci[i][0]:.5E}, {model.ci[i][1]:.5E}]"
        )

    print()
    print("Coefficient Covariance Matrix:")
    for i in model.cov_beta:
        print(i)

    return None
