from pyeq3.Utilities.Multifit import FitDataToAllModelsAndOutput
import matplotlib.pyplot as plt
import logging
import argparse

logging.basicConfig(
    filename=f"{__file__}.log", encoding="utf-8", filemode="w", level=logging.CRITICAL
)

plt.rcParams["text.usetex"] = True


def main():
    parser = argparse.ArgumentParser(
        description="Run multifit using pyeq3 with multiprocessing."
    )
    parser.add_argument(
        "--datafile",
        type=str,
        required=True,
        help="Path to input data file (txt/dat). Example: data.dat",
    )
    parser.add_argument(
        "--misfit-criterion",
        type=str,
        default="SSQABS",
        help="Fitting target (see pyeq3 IModel.fittingTargetDictionary). Recommended: SSQABS",
    )
    parser.add_argument(
        "--max-params",
        type=int,
        default=2,
        help="Maximum number of parameters allowed. Default 2, increase for more complex models, but be aware of overfitting and increasing computational cost",
    )
    parser.add_argument(
        "--pdf-out",
        type=str,
        default="fitting_figures.pdf",
        help="Output PDF file for plots. Recommended: fitting_figures.pdf",
    )
    parser.add_argument(
        "--txt-out",
        type=str,
        default="function_code.out",
        help="Output text file with function code. Recommended: function_code.out",
    )
    parser.add_argument(
        "--max-n-functions",
        type=int,
        default=10,
        help="Maximum number of functions to plot. Recommended: 10",
    )
    parser.add_argument(
        "--number-of-cpus",
        type=int,
        default=10,
        help="Maximum number of CPUs to use. Maximum always leaves one free, unless only one is available. Recommended: 10",
    )

    args = parser.parse_args()

    FitDataToAllModelsAndOutput(
        datafile=args.datafile,
        misfit_criterion=args.misfit_criterion,
        max_params=args.max_params,
        pdf_outfile=args.pdf_out,
        txt_outfile=args.txt_out,
        max_n_functions=args.max_n_functions,
        number_of_cpus=args.number_of_cpus,
    )


if __name__ == "__main__":
    main()
