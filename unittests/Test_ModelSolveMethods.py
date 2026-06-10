from . import DataForUnitTests
import pyeq3
import json
import sys
import os
import unittest

# the pyeq3 directory is located up one level from here
if os.path.join(sys.path[0][: sys.path[0].rfind(os.sep)], "..") not in sys.path:
    sys.path.append(os.path.join(sys.path[0][: sys.path[0].rfind(os.sep)], ".."))

import numpy

numpy.seterr(all="ignore")


class TestModelSolveMethods(unittest.TestCase):
    def test_UserDefinedFunctionSolve_3D(self):
        resultShouldBe = numpy.array([-2.46874698, -0.43649152, 1.88125938])
        model = pyeq3.Models_3D.UserDefinedFunction.UserDefinedFunction(
            "SSQABS", "Default", "a + b*X + c*Y"
        )
        pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(
            DataForUnitTests.asciiDataInColumns_3D_small, model, False
        )
        result = model.Solve()
        self.assertTrue(
            numpy.allclose(result, resultShouldBe, rtol=1.0e-06, atol=1.0e-300)
        )

    def test_UserDefinedFunctionSolve_SSQREL_2D(self):
        resultShouldBe = numpy.array([-6.93576507, 1.36423107])
        model = pyeq3.Models_2D.UserDefinedFunction.UserDefinedFunction(
            "SSQREL", "Default", "m*X + b"
        )
        pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(
            DataForUnitTests.asciiDataInColumns_2D_small, model, False
        )
        result = model.Solve()
        self.assertTrue(
            numpy.allclose(result, resultShouldBe, rtol=1.0e-06, atol=1.0e-300)
        )

    def test_UserDefinedFunctionSolve_SSQABS_2D(self):
        resultShouldBe = numpy.array([-7.88180304, 1.51245438])
        model = pyeq3.Models_2D.UserDefinedFunction.UserDefinedFunction(
            "SSQABS", "Default", "m*X + b"
        )
        pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(
            DataForUnitTests.asciiDataInColumns_2D_small, model, False
        )
        result = model.Solve()
        self.assertTrue(
            numpy.allclose(result, resultShouldBe, rtol=1.0e-06, atol=1.0e-300)
        )

    def test_SplineSolve_3D(self):
        resultShouldBe = (
            numpy.array([0.607, 0.607, 0.607, 3.017, 3.017, 3.017]),
            numpy.array([1.984, 1.984, 1.984, 3.153, 3.153, 3.153]),
            numpy.array(
                [
                    2.33418963,
                    1.80079612,
                    5.07902936,
                    0.54445029,
                    1.04110843,
                    2.14180324,
                    0.26992805,
                    0.39148852,
                    0.8177307,
                ]
            ),
        )
        model = pyeq3.Models_3D.Spline.Spline(
            inSmoothingFactor=1.0, inXOrder=2, inYOrder=2
        )
        pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(
            model.exampleData, model, False
        )
        result = model.Solve()
        self.assertTrue(
            numpy.allclose(result[0], resultShouldBe[0], rtol=1.0e-06, atol=1.0e-300)
        )
        self.assertTrue(
            numpy.allclose(result[1], resultShouldBe[1], rtol=1.0e-06, atol=1.0e-300)
        )
        self.assertTrue(
            numpy.allclose(result[2], resultShouldBe[2], rtol=1.0e-06, atol=1.0e-300)
        )

    def test_SplineSolve_2D(self):
        resultShouldBe = (
            numpy.array([5.357, 5.357, 5.357, 5.357, 9.861, 9.861, 9.861, 9.861]),
            numpy.array(
                [0.38297001, 1.95535226, 4.59605664, 7.16162379, 0.0, 0.0, 0.0, 0.0]
            ),
            3,
        )
        model = pyeq3.Models_2D.Spline.Spline(inSmoothingFactor=1.0, inXOrder=3)
        pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(
            model.exampleData, model, False
        )
        result = model.Solve()
        self.assertTrue(
            numpy.allclose(result[0], resultShouldBe[0], rtol=1.0e-06, atol=1.0e-300)
        )
        self.assertTrue(
            numpy.allclose(result[1], resultShouldBe[1], rtol=1.0e-06, atol=1.0e-300)
        )
        self.assertEqual(result[2], resultShouldBe[2])

    def test_SplineReconstructionFromStoredCoefficients_2D(self):
        # Simulate a fit reloaded from storage: a fresh instance that has only
        # solvedCoefficients as lists rather than the original numpy arrays,
        # and no live scipy spline object. Rebuilding from
        # the stored values must reproduce the predictions and
        # allow the source-code output service to work.
        model = pyeq3.Models_2D.Spline.Spline(inSmoothingFactor=1.0, inXOrder=3)
        pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(
            model.exampleData, model, False
        )
        model.Solve()
        before = model.CalculateModelPredictions(
            model.solvedCoefficients, model.dataCache.allDataCacheDictionary
        )

        knots, coeffs, degree = model.solvedCoefficients
        stored = json.loads(json.dumps([knots.tolist(), coeffs.tolist(), int(degree)]))

        reloaded = pyeq3.Models_2D.Spline.Spline()
        pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(
            model.exampleData, reloaded, False
        )
        reloaded.solvedCoefficients = stored
        reloaded.dataCache.FindOrCreateAllDataCache(reloaded)
        after = reloaded.CalculateModelPredictions(
            reloaded.solvedCoefficients, reloaded.dataCache.allDataCacheDictionary
        )
        self.assertTrue(numpy.allclose(after, before, rtol=1.0e-10, atol=1.0e-300))

        # source-code output reads UnivariateSpline._eval_args; a bare BSpline
        # would not have it, so this also guards the reconstructed object type
        sourceCode = pyeq3.outputSourceCodeService().GetOutputSourceCodePYTHON(reloaded)
        self.assertTrue(len(sourceCode) > 0)

    def test_SplineReconstructionFromStoredCoefficients_3D(self):
        # Same reload for the bivariate surface. The 3D tck carries no degrees,
        # so the rebuild also needs the stored xOrder and yOrder.
        model = pyeq3.Models_3D.Spline.Spline(
            inSmoothingFactor=1.0, inXOrder=2, inYOrder=2
        )
        pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(
            model.exampleData, model, False
        )
        model.Solve()
        before = model.CalculateModelPredictions(
            model.solvedCoefficients, model.dataCache.allDataCacheDictionary
        )

        xKnots, yKnots, coeffs = model.solvedCoefficients
        stored = json.loads(
            json.dumps(
                {
                    "coefficients": [xKnots.tolist(), yKnots.tolist(), coeffs.tolist()],
                    "xOrder": model.xOrder,
                    "yOrder": model.yOrder,
                }
            )
        )

        reloaded = pyeq3.Models_3D.Spline.Spline()
        pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(
            model.exampleData, reloaded, False
        )
        reloaded.xOrder = stored["xOrder"]
        reloaded.yOrder = stored["yOrder"]
        reloaded.solvedCoefficients = stored["coefficients"]
        reloaded.dataCache.FindOrCreateAllDataCache(reloaded)
        after = reloaded.CalculateModelPredictions(
            reloaded.solvedCoefficients, reloaded.dataCache.allDataCacheDictionary
        )
        self.assertTrue(numpy.allclose(after, before, rtol=1.0e-10, atol=1.0e-300))

        sourceCode = pyeq3.outputSourceCodeService().GetOutputSourceCodePYTHON(reloaded)
        self.assertTrue(len(sourceCode) > 0)

    def test_Solve_emptyNumpyArrayCoefficientConstraints_doesNotRaise(self):
        # Regression for issue #34: assigning EMPTY numpy arrays to the
        # coefficient-constraint attributes used to crash Solve(). The checks
        # `if self.fixedCoefficients != []` (and the bounds equivalents)
        # evaluated `numpy.array([]) != []`, which is an empty bool array,
        # and `if` on it raises "The truth value of an empty array is
        # ambiguous". Empty constraints must behave exactly like the default
        # empty lists, including keeping the linear solver path usable.
        coefficientsShouldBe = numpy.array(
            [-8.0191356407516956e00, 1.5264472941853220e00]
        )
        model = pyeq3.Models_2D.Polynomial.Linear("SSQABS")
        model.upperCoefficientBounds = numpy.array([])
        model.lowerCoefficientBounds = numpy.array([])
        model.fixedCoefficients = numpy.array([])
        pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(
            DataForUnitTests.asciiDataInColumns_2D, model, False
        )
        coefficients = model.Solve()
        self.assertTrue(model.CanLinearSolverBeUsedForSSQABS())
        self.assertTrue(
            numpy.allclose(
                coefficients, coefficientsShouldBe, rtol=1.0e-10, atol=1.0e-300
            )
        )

    def test_Solve_numpyArrayCoefficientBounds_doesNotRaise(self):
        # Regression for issue #34, non-empty case: on numpy 2.x,
        # `numpy.array([20.0, 10.0]) != []` raises "operands could not be
        # broadcast together" instead of returning a truth value, so
        # assigning numpy arrays as coefficient bounds crashed Solve().
        # These bounds do not bind, so the fit must match the unbounded
        # non-linear result.
        coefficientsShouldBe = numpy.array([-8.01913562, 1.52644729])
        model = pyeq3.Models_2D.Polynomial.Linear("SSQABS")
        model.upperCoefficientBounds = numpy.array([20.0, 10.0])
        model.lowerCoefficientBounds = numpy.array([-20.0, -10.0])
        pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(
            DataForUnitTests.asciiDataInColumns_2D, model, False
        )
        coefficients = model.Solve()
        self.assertTrue(
            numpy.allclose(
                coefficients, coefficientsShouldBe, rtol=1.0e-03, atol=1.0e-300
            )
        )


if __name__ == "__main__":
    unittest.main()
