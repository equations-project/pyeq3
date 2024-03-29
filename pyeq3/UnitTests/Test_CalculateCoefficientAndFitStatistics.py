import DataForUnitTests
import pyeq3
import sys
import os
import unittest

# the pyeq3 directory is located up one level from here
if os.path.join(sys.path[0][: sys.path[0].rfind(os.sep)], "..") not in sys.path:
    sys.path.append(os.path.join(sys.path[0][: sys.path[0].rfind(os.sep)], ".."))

import numpy

numpy.seterr(all="ignore")


class TestCalculateCoefficientAndFitStatistics(unittest.TestCase):
    def test_CalculateCoefficientAndFitStatisticsUsingUserDefinedFunction_2D(self):
        model_df_e_ShouldBe = 9.0
        model_df_r_ShouldBe = 1.0
        model_r2_ShouldBe = 0.996389372503
        model_rmse_ShouldBe = 00.142649386595
        model_r2adj_ShouldBe = 0.99598819167
        model_Fstat_ShouldBe = 2483.64151657
        model_Fpv_ShouldBe = 2.64577248998e-12
        model_ll_ShouldBe = 5.81269665017
        model_aic_ShouldBe = -0.693217572758
        model_bic_ShouldBe = -0.620872977703
        model_cov_beta_ShouldBe = numpy.array(
            [[1.93842855, -0.26398964], [-0.26398964, 0.03772113]]
        )
        model_sd_beta_ShouldBe = numpy.array([0.0482103, 0.00093816])
        model_tstat_beta_ShouldBe = numpy.array([-36.52226166, 49.83614545])
        model_pstat_beta_ShouldBe = numpy.array([4.28455049e-11, 2.64588351e-12])
        model_ci_ShouldBe = numpy.array(
            [
                [-8.5158339321793157, -7.5224373409719512],
                [1.4571589560702567, 1.595735631605572],
            ]
        )

        model = pyeq3.Models_2D.UserDefinedFunction.UserDefinedFunction(
            "SSQABS", "Default", "m*X + b"
        )
        pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(
            model.exampleData, model, False
        )
        model.Solve()
        model.CalculateModelErrors(
            model.solvedCoefficients, model.dataCache.allDataCacheDictionary
        )
        model.CalculateCoefficientAndFitStatistics()

        self.assertTrue(
            numpy.allclose(model.df_e, model_df_e_ShouldBe, rtol=1.0e-06, atol=1.0e-300)
        )
        self.assertTrue(
            numpy.allclose(model.df_r, model_df_r_ShouldBe, rtol=1.0e-06, atol=1.0e-300)
        )
        self.assertTrue(
            numpy.allclose(model.r2, model_r2_ShouldBe, rtol=1.0e-06, atol=1.0e-300)
        )
        self.assertTrue(
            numpy.allclose(model.rmse, model_rmse_ShouldBe, rtol=1.0e-06, atol=1.0e-300)
        )
        self.assertTrue(
            numpy.allclose(
                model.r2adj, model_r2adj_ShouldBe, rtol=1.0e-06, atol=1.0e-300
            )
        )
        self.assertTrue(
            numpy.allclose(
                model.Fstat, model_Fstat_ShouldBe, rtol=1.0e-06, atol=1.0e-300
            )
        )
        self.assertTrue(
            numpy.allclose(model.Fpv, model_Fpv_ShouldBe, rtol=1.0e-06, atol=1.0e-300)
        )
        self.assertTrue(
            numpy.allclose(model.ll, model_ll_ShouldBe, rtol=1.0e-06, atol=1.0e-300)
        )
        self.assertTrue(
            numpy.allclose(model.aic, model_aic_ShouldBe, rtol=1.0e-06, atol=1.0e-300)
        )
        self.assertTrue(
            numpy.allclose(model.bic, model_bic_ShouldBe, rtol=1.0e-06, atol=1.0e-300)
        )
        self.assertTrue(
            numpy.allclose(
                model.cov_beta, model_cov_beta_ShouldBe, rtol=1.0e-06, atol=1.0e-300
            )
        )
        self.assertTrue(
            numpy.allclose(
                model.sd_beta, model_sd_beta_ShouldBe, rtol=1.0e-05, atol=1.0e-300
            )
        )  # extra tolerance
        self.assertTrue(
            numpy.allclose(
                model.tstat_beta, model_tstat_beta_ShouldBe, rtol=1.0e-06, atol=1.0e-300
            )
        )
        self.assertTrue(
            numpy.allclose(
                model.pstat_beta, model_pstat_beta_ShouldBe, rtol=1.0e-04, atol=1.0e-300
            )
        )
        self.assertTrue(
            numpy.allclose(model.ci, model_ci_ShouldBe, rtol=1.0e-06, atol=1.0e-300)
        )

    def test_CalculateCoefficientAndFitStatisticsUsingSpline_2D(self):
        model_df_e_ShouldBe = 8.0
        model_df_r_ShouldBe = 2.0
        model_r2_ShouldBe = 0.999870240966
        model_rmse_ShouldBe = 0.0270425329959
        model_r2adj_ShouldBe = 0.999837801207
        model_Fstat_ShouldBe = 30822.3699783
        model_Fpv_ShouldBe = 3.33066907388e-16
        model_ll_ShouldBe = 24.1054640542
        model_aic_ShouldBe = -3.83735710076
        model_bic_ShouldBe = -3.72884020818

        model = pyeq3.Models_2D.Spline.Spline(inSmoothingFactor=1.0, inXOrder=3)
        pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(
            DataForUnitTests.asciiDataInColumns_2D, model, False
        )
        pyeq3.solverService().SolveUsingSpline(model)
        model.CalculateModelErrors(
            model.solvedCoefficients, model.dataCache.allDataCacheDictionary
        )
        model.CalculateCoefficientAndFitStatistics()

        self.assertTrue(
            numpy.allclose(model.df_e, model_df_e_ShouldBe, rtol=1.0e-06, atol=1.0e-300)
        )
        self.assertTrue(
            numpy.allclose(model.df_r, model_df_r_ShouldBe, rtol=1.0e-06, atol=1.0e-300)
        )
        self.assertTrue(
            numpy.allclose(model.r2, model_r2_ShouldBe, rtol=1.0e-06, atol=1.0e-300)
        )
        self.assertTrue(
            numpy.allclose(model.rmse, model_rmse_ShouldBe, rtol=1.0e-06, atol=1.0e-300)
        )
        self.assertTrue(
            numpy.allclose(
                model.r2adj, model_r2adj_ShouldBe, rtol=1.0e-06, atol=1.0e-300
            )
        )
        self.assertTrue(
            numpy.allclose(
                model.Fstat, model_Fstat_ShouldBe, rtol=1.0e-06, atol=1.0e-300
            )
        )
        self.assertTrue(
            numpy.allclose(model.Fpv, model_Fpv_ShouldBe, rtol=1.0e-06, atol=1.0e-300)
        )
        self.assertTrue(
            numpy.allclose(model.ll, model_ll_ShouldBe, rtol=1.0e-06, atol=1.0e-300)
        )
        self.assertTrue(
            numpy.allclose(model.aic, model_aic_ShouldBe, rtol=1.0e-06, atol=1.0e-300)
        )
        self.assertTrue(
            numpy.allclose(model.bic, model_bic_ShouldBe, rtol=1.0e-06, atol=1.0e-300)
        )
        self.assertEqual(model.cov_beta, None)
        self.assertEqual(type(model.sd_beta), type(None))
        self.assertEqual(type(model.tstat_beta), type(None))
        self.assertEqual(type(model.pstat_beta), type(None))
        self.assertEqual(model.ci, None)


if __name__ == "__main__":
    unittest.main()
