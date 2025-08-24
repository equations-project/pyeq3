import os
import sys
import inspect
import copy
import multiprocessing
import queue
import pyeq3
import matplotlib.pyplot as plt
from matplotlib.backends.backend_pdf import PdfPages
import numpy as np
from datetime import datetime
import pypandoc


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
            sidx = i + 1
            for cc in UniqueCombinations(items[sidx:], n - 1):
                yield [items[i]] + cc


def UniqueCombinations2(items2, n2):  # utility function
    if n2 == 0:
        yield []
    else:
        for i2 in range(len(items2)):
            sidx = i2 + 1
            for cc2 in UniqueCombinations2(items2[sidx:], n2 - 1):
                yield [items2[i2]] + cc2


def SetDataParametersAndFit(inRawData, inEquation, inPrintStatus):
    """
    Parameterises an equation based on data.

    Arguments
    ---------
    inRawData : numpy array or string
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
    pyeq3.dataConvertorService().ProcessData(inRawData, inEquation, False)
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

        # check for functions requiring non-zero nor non-negative data
        # such as 1/x, etc.
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

        target = inEquation.CalculateAllDataFittingTarget(inEquation.solvedCoefficients)
        if target > 1.0e290:  # error too large
            return None
    except Exception:
        print(
            f"Exception in {inEquation.__class__.__name__}\n"
            f"{str(sys.exc_info()[0])}\n"
            f"{str(sys.exc_info()[1])}\n"
        )
        return None

    eq = inEquation
    if eq.GetDimensionality() == 2:
        polyfunctionalnDFlags = copy.deepcopy(eq.polyfunctional2DFlags)
    elif eq.GetDimensionality() == 3:
        polyfunctionalnDFlags = copy.deepcopy(eq.polyfunctional3DFlags)

    t = {
        "moduleName": copy.deepcopy(eq.__module__),
        "className": copy.deepcopy(eq.__class__.__name__),
        "extendedVersionHandlerName": copy.deepcopy(
            eq.extendedVersionHandler.__class__.__name__.split("_")[1]
        ),
        "fittingTarget": copy.deepcopy(eq.fittingTarget),
        "fittingTargetValue": copy.deepcopy(target),
        "solvedCoefficients": copy.deepcopy(eq.solvedCoefficients),
        "polyfunctionalnDFlags": copy.deepcopy(polyfunctionalnDFlags),
        "polynomialOrderX": copy.deepcopy(eq.xPolynomialOrder),
        "rationalNumeratorFlags": copy.deepcopy(eq.rationalNumeratorFlags),
        "rationalDenominatorFlags": copy.deepcopy(eq.rationalDenominatorFlags),
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

                        if (
                            (inLinearTrueOrNonLinearFalseFlag is True)
                            and (
                                equationInstance.CanLinearSolverBeUsedForSSQABS()
                                is False
                            )
                            or fittingTargetText != "SSQABS"
                        ):
                            continue

                        if (
                            (inLinearTrueOrNonLinearFalseFlag is False)
                            and (
                                equationInstance.CanLinearSolverBeUsedForSSQABS()
                                is True
                            )
                            and fittingTargetText == "SSQABS"
                        ):
                            continue

                        inTaskQueue.put(
                            (
                                SetDataParametersAndFit,
                                (inRawData, equationInstance, False),
                            )
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
        functionCombinations = UniqueCombinations(functionIndexList, coeffCount)
        for functionCombination in functionCombinations:
            if len(functionCombination) > smoothnessControl:
                continue

            pfn = models.Polyfunctional.UserSelectablePolyfunctional
            equationInstance = pfn(
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
                (SetDataParametersAndFit, (inRawData, equationInstance, False))
            )
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

        inTaskQueue.put((SetDataParametersAndFit, (inRawData, equationInstance, False)))
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
        numeratorComboList = UniqueCombinations(functionIndexList, numeratorCoeffCount)
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
                            len(numeratorCombo) + len(denominatorCombo) + extraCoeffs
                        ) > smoothnessControl:
                            continue

                        ratfn = models.Rational.UserSelectableRational
                        equationInstance = ratfn(
                            fittingTargetText,
                            extendedVersion,
                            numeratorCombo,
                            denominatorCombo,
                            functionList,
                        )

                        if (
                            (inLinearTrueOrNonLinearFalseFlag is True)
                            and (
                                equationInstance.CanLinearSolverBeUsedForSSQABS()
                                is False
                            )
                            or fittingTargetText != "SSQABS"
                        ):
                            continue

                        if (
                            (inLinearTrueOrNonLinearFalseFlag is False)
                            and (
                                equationInstance.CanLinearSolverBeUsedForSSQABS()
                                is True
                            )
                            and fittingTargetText == "SSQABS"
                        ):
                            continue

                        inTaskQueue.put(
                            (
                                SetDataParametersAndFit,
                                (inRawData, equationInstance, False),
                            )
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


def FitModelsInParallel(
    inRawData, inDimension, fittingTargetText, smoothnessControl, number_of_cpus
):
    """
    Takes some user-defined data and uses it to parameterise
    a set of models (IModel objects) that
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
                    target=parallelWorker, args=(fittingTasksQueue, fittingResultsQueue)
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
                except Exception:
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


def InstantiateModel(result, data):
    """
    Creates a new model object based on the dictionary returned
    from the function SetParametersAndFit.

    Arguments
    ---------
    result : dictionary
        The result from SetParametersAndFit
    data : numpy array or string
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
            f"{result['moduleName']}."
            f"{result['className']}"
            f"('{result['fittingTarget']}', "
            f"'{result['extendedVersionHandlerName']}', "
            f"{result['polyfunctionalnDFlags']})"
        )
    elif result["polynomialOrderX"] is not None:
        equation = eval(
            f"{result['moduleName']}."
            f"{result['className']}"
            f"('{result['fittingTarget']}', "
            f"'{result['extendedVersionHandlerName']}', "
            f"{result['polynomialOrderX']})"
        )
    elif (result["rationalNumeratorFlags"]) and (result["rationalDenominatorFlags"]):
        equation = eval(
            f"{result['moduleName']}."
            f"{result['className']}"
            f"('{result['fittingTarget']}', "
            f"'{result['extendedVersionHandlerName']}', "
            f"{result['rationalNumeratorFlags']}, "
            f"{result['rationalDenominatorFlags']})"
        )
    else:
        equation = eval(
            f"{result['moduleName']}."
            f"{result['className']}"
            f"('{result['fittingTarget']}', "
            f"'{result['extendedVersionHandlerName']}')"
        )

    pyeq3.dataConvertorService().ProcessData(data, equation, False)
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


def FitDataToAllModelsAndOutput(
    datafile,
    misfit_criterion,
    max_params,
    pdf_outfile,
    txt_outfile,
    max_n_functions,
    number_of_cpus,
):
    # The data to fit
    data = np.loadtxt(datafile)

    # Determine the dimensionality of the data
    if data.shape[1] == 2:
        dim = 2
    elif data.shape[1] == 3:
        dim = 3
    else:
        raise ValueError("Unsupported data dimensionality")

    max_number_of_cpus = multiprocessing.cpu_count()  # use all CPUs
    number_of_cpus = min(number_of_cpus, max_number_of_cpus)
    if number_of_cpus > 1:
        number_of_cpus -= 1

    allResults = FitModelsInParallel(
        data, dim, misfit_criterion, max_params, number_of_cpus
    )

    # sort the parallel runs and select the best result
    allResults = sorted(allResults, key=lambda x: x["fittingTargetValue"])
    bestResult = allResults[0]

    equations = [InstantiateModel(result, data) for result in allResults]

    print(
        '\nAlthough the "Best Fit" function should have the lowest fitting target value,'
    )
    print("it requires further evaluation to determine if it is the best")
    print("for your needs.  For example, it may interpolate badly.\n")
    print(f"This inversion allowed a maximum of {max_params} parameters.")

    print("\nBest fit function:")
    equation = InstantiateModel(bestResult, data)
    print(equation)

    max_n_functions = min(len(equations), max_n_functions)
    print(
        f"\nFinally, we plot up the best {max_n_functions} functions and output the corresponding code"
    )
    print(f"(see {pdf_outfile} and {txt_outfile}).")

    with PdfPages(pdf_outfile) as pdf, open(txt_outfile, "w") as outfile:
        for i in range(max_n_functions):
            equation = equations[i]
            outfile.write(
                pyeq3.outputSourceCodeService().GetOutputSourceCodePYTHON(
                    equation, note=f"Equation {i}"
                )
            )

            fig = plt.figure(figsize=(8, 6), dpi=100)
            axes = fig.add_subplot(111)
            pyeq3.Graphics.Graphics2D.ModelScatterConfidenceGraph(equation, axes)
            axes.set_title(
                f"{i}) {equation.__module__}.{equation.__class__.__name__} "
                f"({equation.CalculateAllDataFittingTarget(equation.solvedCoefficients):.6e})"
            )

            text = f"{pypandoc.convert_text(equation.GetDisplayHTML(), 'tex', format='html')}"
            text = text.replace("*", "$\cdot$")
            axes.annotate(
                f"{text}{equation.GetCoefficientDesignators()}\n{equation.solvedCoefficients}",
                xy=(1.0, -0.2),
                xycoords="axes fraction",
                ha="right",
                va="center",
                linespacing=1.5,
                fontsize=10,
            )
            fig.set_tight_layout(True)

            pdf.savefig(fig)
            plt.close()

        # metadata via the PdfPages object:
        d = pdf.infodict()
        d["Title"] = "pyeq3 output"
        d["Author"] = "pyeq3"
        d["Subject"] = "plots from multifit"
        d["Keywords"] = "plot multifit"
        d["CreationDate"] = datetime(2009, 11, 13)
        d["ModDate"] = datetime.today()
