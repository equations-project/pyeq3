import sys
import os
import unittest
import inspect

# the pyeq3 directory is located up one level from here
if os.path.join(sys.path[0][: sys.path[0].rfind(os.sep)], "..") not in sys.path:
    sys.path.append(os.path.join(sys.path[0][: sys.path[0].rfind(os.sep)], ".."))

import pyeq3


class Test_BioScience2D(unittest.TestCase):
    def test_AphidPopulationGrowth(self):
        equation = pyeq3.Models_2D.BioScience.AphidPopulationGrowth("SSQABS")
        pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(
            equation.exampleData, equation, False
        )
        self.assertTrue(
            0.374 >= equation.CalculateAllDataFittingTarget(equation.Solve())
        )


class Test_Engineering2D(unittest.TestCase):
    def test_DispersionOptical(self):
        equation = pyeq3.Models_2D.Engineering.DispersionOptical("SSQABS")
        pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(
            equation.exampleData, equation, False
        )
        self.assertTrue(
            1.77e-02 >= equation.CalculateAllDataFittingTarget(equation.Solve())
        )


class Test_Exponential2D(unittest.TestCase):
    def test_Hocket_Sherby(self):
        equation = pyeq3.Models_2D.Exponential.Hocket_Sherby("SSQABS")
        pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(
            equation.exampleData, equation, False
        )
        self.assertTrue(
            8.30e-03 >= equation.CalculateAllDataFittingTarget(equation.Solve())
        )


class Test_LegendrePolynomial2D(unittest.TestCase):
    def test_SecondDegreeLegendrePolynomial(self):
        equation = pyeq3.Models_2D.LegendrePolynomial.SecondDegreeLegendrePolynomial(
            "SSQABS"
        )
        pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(
            equation.exampleData, equation, False
        )
        self.assertTrue(
            0.0146 >= equation.CalculateAllDataFittingTarget(equation.Solve())
        )


class Test_Logarithmic2D(unittest.TestCase):
    def test_LinearLogarithmic(self):
        equation = pyeq3.Models_2D.Logarithmic.LinearLogarithmic("SSQABS")
        pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(
            equation.exampleData, equation, False
        )
        self.assertTrue(
            1.20 >= equation.CalculateAllDataFittingTarget(equation.Solve())
        )


class Test_Exponential3D(unittest.TestCase):
    def test_FullCubicExponential(self):
        equation = pyeq3.Models_3D.Exponential.FullCubicExponential("SSQABS")
        pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(
            equation.exampleData, equation, False
        )
        self.assertTrue(
            0.05 >= equation.CalculateAllDataFittingTarget(equation.Solve())
        )


class Test_Polyfunctional2D(unittest.TestCase):
    def test_Polyfunctional2D(self):
        equation = pyeq3.Models_2D.Polyfunctional.UserSelectablePolyfunctional(
            "SSQABS", "Default", [0, 1, 3]
        )
        pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(
            equation.exampleData, equation, False
        )
        self.assertTrue(
            0.013 >= equation.CalculateAllDataFittingTarget(equation.Solve())
        )


class Test_Polyfunctional3D(unittest.TestCase):
    def test_Polyfunctional3D(self):
        equation = pyeq3.Models_3D.Polyfunctional.UserSelectablePolyfunctional(
            "SSQREL", "Default", [[0, 0], [1, 1], [3, 3]]
        )
        pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(
            equation.exampleData, equation, False
        )
        self.assertTrue(8.2 >= equation.CalculateAllDataFittingTarget(equation.Solve()))


class Test_Rationals(unittest.TestCase):
    def test_Rational2D(self):
        equation = pyeq3.Models_2D.Rational.UserSelectableRational(
            "SSQABS", "Default", [0, 1], [2, 3]
        )
        pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(
            equation.exampleData, equation, False
        )
        self.assertTrue(
            0.009 >= equation.CalculateAllDataFittingTarget(equation.Solve())
        )

    def test_Rational_WithOffset_2D(self):
        equation = pyeq3.Models_2D.Rational.UserSelectableRational(
            "SSQABS", "Offset", [0, 1], [2, 3]
        )
        pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(
            equation.exampleData, equation, False
        )
        self.assertTrue(
            0.008 >= equation.CalculateAllDataFittingTarget(equation.Solve())
        )


class Test_Polynomials(unittest.TestCase):
    def test_Polynomial2D(self):
        equation = pyeq3.Models_2D.Polynomial.UserSelectablePolynomial(
            "SSQABS", "Default", 2
        )
        pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(
            equation.exampleData, equation, False
        )
        self.assertTrue(
            0.015 >= equation.CalculateAllDataFittingTarget(equation.Solve())
        )

    def test_Polynomial3D(self):
        equation = pyeq3.Models_3D.Polynomial.UserSelectablePolynomial(
            "SSQABS", "Default", 2, 2
        )
        pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(
            equation.exampleData, equation, False
        )
        self.assertTrue(
            2.92e-04 >= equation.CalculateAllDataFittingTarget(equation.Solve())
        )

    def test_UserCustomizablePolynomial2D(self):
        flags = [8, 9, 10]
        equation = pyeq3.Models_2D.Polynomial.UserCustomizablePolynomial(
            "SSQABS", inPolynomial2DFlags=flags
        )  # SSQABS by default
        pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(
            equation.exampleData, equation, False
        )
        self.assertTrue(
            0.015 >= equation.CalculateAllDataFittingTarget(equation.Solve())
        )


class Test_InstantiationOfAllEquations(unittest.TestCase):
    # The test is that no exceptions are raised
    def test_InstantiationOfAllNamedEquations(self):
        for submodule in inspect.getmembers(pyeq3.Models_2D) + inspect.getmembers(
            pyeq3.Models_3D
        ):
            if inspect.ismodule(submodule[1]):
                for equationClass in inspect.getmembers(submodule[1]):
                    if inspect.isclass(equationClass[1]):
                        equationClass[1]("SSQABS")  # non-offset forms
                        if equationClass[1].autoGenerateOffsetForm is True:
                            # offset forms
                            equationClass[1]("SSQABS", "Offset")


if __name__ == "__main__":
    unittest.main()
