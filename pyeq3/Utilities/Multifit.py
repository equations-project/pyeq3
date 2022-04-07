import os
import sys
import inspect
import copy
import multiprocessing
import queue
import pyeq3


def ResultListSortFunction(a, b):  # utility function
    if a[3] < b[3]:
        return -1
    if a[3] > b[3]:
        return 1
    return 0


def UniqueCombinations(items, n):  # utility function
    if n == 0:
        yield []
    else:
        for i in range(len(items)):
            for cc in UniqueCombinations(items[i + 1:], n - 1):
                yield [items[i]] + cc


def UniqueCombinations2(items2, n2):  # utility function
    if n2 == 0:
        yield []
    else:
        for i2 in range(len(items2)):
            for cc2 in UniqueCombinations2(items2[i2 + 1:], n2 - 1):
                yield [items2[i2]] + cc2


def SetDataParametersAndFit(inRawData, inEquation, inPrintStatus):
    """
    Parameterises an equation based on data.

    Arguments
    ---------
    inRawData : numpy array
        The input data used to parameterise the equation.

    inEquation : pyeq3.IModel object
        The equation to parameterise

    inPrintStatus : boolean
        Whether to be verbose during fitting.

    Return
    ------
    t : dictionary
        A dictionary containing the equation and fitting information
        required to instantiate a new pyeq3.IModel object.
    """
    pyeq3.dataConvertorService().ProcessNumpyArray(inRawData, inEquation,
                                                   False)
    return SetParametersAndFit(inEquation, inPrintStatus)


def SetParametersAndFit(inEquation, inPrintStatus):
    """
    Parameterises an equation based on data already contained in the model.

    Arguments
    ---------
    inEquation : pyeq3.IModel object
        The equation to parameterise

    inPrintStatus : boolean
        Whether to be verbose during fitting.

    Return
    ------
    t : dictionary
        A dictionary containing the equation and fitting information
        required to instantiate a new pyeq3.IModel object.
    """
    try:
        # check for number of coefficients > number of data points to be fitted
        if len(inEquation.GetCoefficientDesignators()) > len(
            inEquation.dataCache.allDataCacheDictionary["DependentData"]
        ):
            return None

        # check for functions requiring non-zero nor non-negative data such as 1/x, etc.
        if inEquation.ShouldDataBeRejected(inEquation):
            return None

        if inPrintStatus:
            print(
                "Process ID",
                str(os.getpid()),
                "Fitting",
                inEquation.__module__,
                "'" + inEquation.GetDisplayName() + "'",
            )

        inEquation.Solve()

        target = inEquation.CalculateAllDataFittingTarget(
            inEquation.solvedCoefficients)
        if target > 1.0e290:  # error too large
            return None
    except:
        print(
            "Exception in "
            + inEquation.__class__.__name__
            + "\n"
            + str(sys.exc_info()[0])
            + "\n"
            + str(sys.exc_info()[1])
            + "\n"
        )
        return None

    if inEquation.GetDimensionality() == 2:
        polyfunctionalnDFlags = copy.deepcopy(inEquation.polyfunctional2DFlags)
    elif inEquation.GetDimensionality() == 3:
        polyfunctionalnDFlags = copy.deepcopy(inEquation.polyfunctional3DFlags)

    t = {
        "moduleName": copy.deepcopy(inEquation.__module__),
        "className": copy.deepcopy(inEquation.__class__.__name__),
        "extendedVersionHandlerName": copy.deepcopy(
            inEquation.extendedVersionHandler.__class__.__name__.split("_")[1]
        ),
        "fittingTarget": copy.deepcopy(inEquation.fittingTarget),
        "fittingTargetValue": copy.deepcopy(target),
        "solvedCoefficients": copy.deepcopy(inEquation.solvedCoefficients),
        "polyfunctionalnDFlags": copy.deepcopy(polyfunctionalnDFlags),
        "polynomialOrderX": copy.deepcopy(inEquation.xPolynomialOrder),
        "rationalNumeratorFlags": copy.deepcopy(inEquation.rationalNumeratorFlags),
        "rationalDenominatorFlags": copy.deepcopy(inEquation.rationalDenominatorFlags),
    }

    return t


def SubmitTasksToQueue(
    inTaskQueue,
    inRawData,
    inDimension,
    fittingTargetText,
    smoothnessControl,
    inLinearTrueOrNonLinearFalseFlag,
):
    totalNumberOfTasksSubmitted = 0

    ##########################
    # add named equations here
    if inDimension == 2:
        models = pyeq3.Models_2D
    elif inDimension == 3:
        models = pyeq3.Models_3D
    for submodule in inspect.getmembers(models):
        if inspect.ismodule(submodule[1]):
            for equationClass in inspect.getmembers(submodule[1]):
                if inspect.isclass(equationClass[1]):

                    # special classes
                    if (
                        equationClass[1].splineFlag
                        or equationClass[1].userSelectablePolynomialFlag
                        or equationClass[1].userCustomizablePolynomialFlag
                        or equationClass[1].userSelectablePolyfunctionalFlag
                        or equationClass[1].userSelectableRationalFlag
                        or equationClass[1].userDefinedFunctionFlag
                    ):
                        continue

                    for extendedVersion in ["Default", "Offset"]:

                        if (extendedVersion == "Offset") and (
                            equationClass[1].autoGenerateOffsetForm is False
                        ):
                            continue

                        equationInstance = equationClass[1](
                            fittingTargetText, extendedVersion
                        )

                        if (
                            len(equationInstance.GetCoefficientDesignators())
                            > smoothnessControl
                        ):
                            continue

                        if inLinearTrueOrNonLinearFalseFlag is True and (
                            equationInstance.CanLinearSolverBeUsedForSSQABS() is False
                            or fittingTargetText != "SSQABS"
                        ):
                            continue

                        if (
                            inLinearTrueOrNonLinearFalseFlag is False
                            and equationInstance.CanLinearSolverBeUsedForSSQABS()
                            is True
                            and fittingTargetText == "SSQABS"
                        ):
                            continue

                        inTaskQueue.put(
                            (SetDataParametersAndFit,
                             (inRawData, equationInstance, False))
                        )
                        totalNumberOfTasksSubmitted += 1

    ##########################
    # fit polyfunctionals here
    maxPolyfunctionalCoefficients = smoothnessControl

    if inDimension == 2:
        polyfunctionalEquationList = (
            pyeq3.PolyFunctions.GenerateListForPolyfunctionals_2D()
        )
    else:
        polyfunctionalEquationList = (
            pyeq3.PolyFunctions.GenerateListForPolyfunctionals_3D()
        )

    # make a list of function indices to permute
    functionIndexList = list(range(len(polyfunctionalEquationList)))

    for coeffCount in range(1, maxPolyfunctionalCoefficients + 1):
        functionCombinations = UniqueCombinations(
            functionIndexList, coeffCount)
        for functionCombination in functionCombinations:

            if len(functionCombination) > smoothnessControl:
                continue

            equationInstance = models.Polyfunctional.UserSelectablePolyfunctional(
                fittingTargetText,
                "Default",
                functionCombination,
                polyfunctionalEquationList,
            )

            if inLinearTrueOrNonLinearFalseFlag is True and (
                equationInstance.CanLinearSolverBeUsedForSSQABS() is False
                or fittingTargetText != "SSQABS"
            ):
                continue

            if (
                inLinearTrueOrNonLinearFalseFlag is False
                and equationInstance.CanLinearSolverBeUsedForSSQABS() is True
                and fittingTargetText == "SSQABS"
            ):
                continue

            inTaskQueue.put(
                (SetDataParametersAndFit, (inRawData, equationInstance, False)))
            totalNumberOfTasksSubmitted += 1

    # fit user-selectable polynomials here
    maxPolynomialOrderX = smoothnessControl

    for polynomialOrderX in range(maxPolynomialOrderX + 1):

        if (polynomialOrderX + 1) > smoothnessControl:
            continue

        equationInstance = models.Polynomial.UserSelectablePolynomial(
            fittingTargetText, "Default", polynomialOrderX
        )

        if inLinearTrueOrNonLinearFalseFlag is True and (
            equationInstance.CanLinearSolverBeUsedForSSQABS() is False
            or fittingTargetText != "SSQABS"
        ):
            continue

        if (
            inLinearTrueOrNonLinearFalseFlag is False
            and equationInstance.CanLinearSolverBeUsedForSSQABS() is True
            and fittingTargetText == "SSQABS"
        ):
            continue

        inTaskQueue.put(
            (SetDataParametersAndFit, (inRawData, equationInstance, False)))
        totalNumberOfTasksSubmitted += 1

    # fit user-selectable rationals here
    maxCoeffs = smoothnessControl

    if inDimension == 2:
        functionList = pyeq3.PolyFunctions.GenerateListForRationals_2D()
    else:
        functionList = pyeq3.PolyFunctions.GenerateListForRationals_3D()

    # make a list of function indices
    functionIndexList = list(range(len(functionList)))

    for numeratorCoeffCount in range(1, maxCoeffs):
        numeratorComboList = UniqueCombinations(
            functionIndexList, numeratorCoeffCount)
        for numeratorCombo in numeratorComboList:
            for denominatorCoeffCount in range(1, maxCoeffs):
                denominatorComboList = UniqueCombinations2(
                    functionIndexList, denominatorCoeffCount
                )
                for denominatorCombo in denominatorComboList:

                    for extendedVersion in ["Default", "Offset"]:

                        extraCoeffs = 0
                        if extendedVersion == "Offset":
                            extraCoeffs = 1

                        if (
                            len(numeratorCombo) +
                                len(denominatorCombo) + extraCoeffs
                        ) > smoothnessControl:
                            continue

                        equationInstance = models.Rational.UserSelectableRational(
                            fittingTargetText,
                            extendedVersion,
                            numeratorCombo,
                            denominatorCombo,
                            functionList,
                        )

                        if inLinearTrueOrNonLinearFalseFlag is True and (
                            equationInstance.CanLinearSolverBeUsedForSSQABS() is False
                            or fittingTargetText != "SSQABS"
                        ):
                            continue

                        if (
                            inLinearTrueOrNonLinearFalseFlag is False
                            and equationInstance.CanLinearSolverBeUsedForSSQABS()
                            is True
                            and fittingTargetText == "SSQABS"
                        ):
                            continue

                        inTaskQueue.put(
                            (SetDataParametersAndFit,
                             (inRawData, equationInstance, False))
                        )
                        totalNumberOfTasksSubmitted += 1

    return totalNumberOfTasksSubmitted


def parallelWorker(inputQueue, outputQueue):
    # iter() has different behaviors depending on number of parameters
    for func, args in iter(inputQueue.get, "STOP"):
        outputQueue.put(func(*args))


def serialWorker(inputQueue, outputQueue):
    # iter() has different behaviors depending on number of parameters
    for func, args in iter(inputQueue.get, "STOP"):
        outputQueue.put(func(*args))
        inputQueue.task_done()
        if inputQueue.unfinished_tasks == 0:
            break


def fit_all_equations_in_parallel(
    inRawData, inDimension, fittingTargetText, smoothnessControl, number_of_cpus
):
    """
    Takes some user-defined data and uses it to parameterise
    a set of equations (IModel objects) that
    fit desired characteristics.

    Arguments
    ---------
    inRawData : numpy array
        The input data used to parameterise the equations.

    inDimension : integer
        The dimensionality of the independent data (2 or 3).

    fittingTargetText : string
        A string describing which misfit criterion to use.
        See IModel.fittingTargetDictionary for possibilities.

    smoothnessControl : integer
        The maximum number of parameters for the parameterised equations

    number_of_cpus : integer
        The number of CPUs to use in the processing

    Returns
    -------
    allResults : a list of dictionaries
        Dictionaries containing the results of fitting and data needed to
        instantiate new IModel objects.
    """
    allResults = []
    # Serial region begins
    # linear fits are very fast - run these in the existing process which
    # saves on interprocess communication overhead
    fittingTasksQueue = queue.Queue(0)
    fittingResultsQueue = queue.Queue(0)
    numberOfSerialTasksSubmitted = SubmitTasksToQueue(
        fittingTasksQueue,
        inRawData,
        inDimension,
        fittingTargetText,
        smoothnessControl,
        True,
    )
    if numberOfSerialTasksSubmitted > 0:
        serialWorker(fittingTasksQueue, fittingResultsQueue)
        for i in range(numberOfSerialTasksSubmitted):
            allResults.append(fittingResultsQueue.get())

    print(f"{numberOfSerialTasksSubmitted} total linear fits " "performed in series")
    # Serial region ends

    # http://stackoverflow.com/questions/18204782/runtimeerror-on-windows-trying-python-multiprocessing

    # Parallel region begins
    fittingTasksQueue = multiprocessing.Queue()
    fittingResultsQueue = multiprocessing.Queue()

    print(f"Processing with {number_of_cpus} CPUs")

    # submit nonlinear fitting tasks to the queue for parallel processing
    numberOfParallelTasksSubmitted = SubmitTasksToQueue(
        fittingTasksQueue,
        inRawData,
        inDimension,
        fittingTargetText,
        smoothnessControl,
        False,
    )

    if numberOfParallelTasksSubmitted > 0:
        processList = []

        # run worker processes
        try:
            for i in range(number_of_cpus):
                p = multiprocessing.Process(
                    target=parallelWorker, args=(
                        fittingTasksQueue, fittingResultsQueue)
                )
                p.start()
                processList.append(p)

            # gather all results from the process pool
            for i in range(numberOfParallelTasksSubmitted):
                allResults.append(fittingResultsQueue.get())
                if i % 10 == 0 and i > 0:
                    print(
                        f"{i}/{numberOfParallelTasksSubmitted} "
                        "non-linear fits performed in parallel"
                    )

        # terminate all worker processes
        finally:
            for p in processList:
                try:  # use try/except block for termination
                    p.terminate()
                except:
                    pass

    print(
        f"{numberOfParallelTasksSubmitted} total "
        "non-linear fits performed in parallel"
    )

    # Parallel region ends
    n_tasks = numberOfSerialTasksSubmitted + numberOfParallelTasksSubmitted
    print(f"Completed fitting {n_tasks} equations.")

    # Remove all null results
    return [i for i in allResults if i]


def instantiate_equation(result, data):
    """
    Creates a new equation based on the dictionary returned
    from the function SetParametersAndFit.

    Arguments
    ---------
    result : dictionary
        The result from SetParametersAndFit
    data : numpy array
        Data used for fitting

    Returns
    -------
    equation : pyeq3.IModel object
        The fully instantiated equation object
    """
    # now instantiate the "best fit" equation based on the name stored in the
    # result list
    if result["polyfunctionalnDFlags"]:
        equation = eval(
            f"{result['moduleName']}.{result['className']}('{result['fittingTarget']}', '{result['extendedVersionHandlerName']}', {result['polyfunctionalnDFlags']})"
        )
    elif result["polynomialOrderX"] is not None:
        equation = eval(
            f"{result['moduleName']}.{result['className']}('{result['fittingTarget']}', '{result['extendedVersionHandlerName']}', {result['polynomialOrderX']})"
        )
    elif result["rationalNumeratorFlags"] and result["rationalDenominatorFlags"]:
        equation = eval(
            f"{result['moduleName']}.{result['className']}('{result['fittingTarget']}', '{result['extendedVersionHandlerName']}', {result['rationalNumeratorFlags']}, {result['rationalDenominatorFlags']})"
        )
    else:
        equation = eval(
            f"{result['moduleName']}.{result['className']}('{result['fittingTarget']}', '{result['extendedVersionHandlerName']}')"
        )

    pyeq3.dataConvertorService().ProcessNumpyArray(data, equation, False)
    equation.fittingTarget = result["fittingTarget"]
    equation.solvedCoefficients = result["solvedCoefficients"]
    equation.dataCache.FindOrCreateAllDataCache(equation)
    equation.CalculateAllDataFittingTarget(equation.solvedCoefficients)
    equation.CalculateModelErrors(
        equation.solvedCoefficients, equation.dataCache.allDataCacheDictionary
    )
    equation.GetCoefficientDesignators()
    equation.CalculateCoefficientAndFitStatistics()

    return equation
