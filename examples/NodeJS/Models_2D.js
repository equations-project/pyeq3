
exports.Astrophysics = module.exports.Astrophysics = {};

exports.Astrophysics.King_14 = module.exports.Astrophysics.King_14 = {
    pythonModuleName : "Astrophysics",
    pythonClassName : "King_14",
    extendedVersionString : "Default",
    displayName : "King 14",
    displayHTML : "f(x) = k * [1/sqrt(1 + (x/r_c) ** 2) - 1/sqrt(1 + (r_t/r_c) ** 2)] ** 2",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Astrophysics.King_14_WithOffset = module.exports.Astrophysics.King_14_WithOffset = {
    pythonModuleName : "Astrophysics",
    pythonClassName : "King_14",
    extendedVersionString : "Offset",
    displayName : "King 14 With Offset",
    displayHTML : "f(x) = k * [1/sqrt(1 + (x/r_c) ** 2) - 1/sqrt(1 + (r_t/r_c) ** 2)] ** 2 + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};


exports.BioScience = module.exports.BioScience = {};

exports.BioScience.AphidPopulationGrowth = module.exports.BioScience.AphidPopulationGrowth = {
    pythonModuleName : "BioScience",
    pythonClassName : "AphidPopulationGrowth",
    extendedVersionString : "Default",
    displayName : "Aphid Population Growth",
    displayHTML : "N(t) = a * exp(bt) * (1 + c * exp(bt))<sup>-2</sup>",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BioScience.AphidPopulationGrowth_WithOffset = module.exports.BioScience.AphidPopulationGrowth_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "AphidPopulationGrowth",
    extendedVersionString : "Offset",
    displayName : "Aphid Population Growth With Offset",
    displayHTML : "N(t) = a * exp(bt) * (1 + c * exp(bt))<sup>-2</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BioScience.BertalanffyGrowth = module.exports.BioScience.BertalanffyGrowth = {
    pythonModuleName : "BioScience",
    pythonClassName : "BertalanffyGrowth",
    extendedVersionString : "Default",
    displayName : "von Bertalanffy Growth",
    displayHTML : "L(t) = L<sub>inf</sub> * (1.0 - exp(-K * (t-t<sub>zero</sub>)))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BioScience.BertalanffyGrowth_WithOffset = module.exports.BioScience.BertalanffyGrowth_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "BertalanffyGrowth",
    extendedVersionString : "Offset",
    displayName : "von Bertalanffy Growth With Offset",
    displayHTML : "L(t) = L<sub>inf</sub> * (1.0 - exp(-K * (t-t<sub>zero</sub>))) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BioScience.BevertonHoltA = module.exports.BioScience.BevertonHoltA = {
    pythonModuleName : "BioScience",
    pythonClassName : "BevertonHoltA",
    extendedVersionString : "Default",
    displayName : "Beverton-Holt A",
    displayHTML : "y = r / (1 + ((r-1)/K) * x)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.BioScience.BevertonHoltA_WithOffset = module.exports.BioScience.BevertonHoltA_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "BevertonHoltA",
    extendedVersionString : "Offset",
    displayName : "Beverton-Holt A With Offset",
    displayHTML : "y = r / (1 + ((r-1)/K) * x) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BioScience.BevertonHoltB = module.exports.BioScience.BevertonHoltB = {
    pythonModuleName : "BioScience",
    pythonClassName : "BevertonHoltB",
    extendedVersionString : "Default",
    displayName : "Beverton-Holt B",
    displayHTML : "y = rx / (1 + ((r-1)/K) * x)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.BioScience.BevertonHoltB_WithOffset = module.exports.BioScience.BevertonHoltB_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "BevertonHoltB",
    extendedVersionString : "Offset",
    displayName : "Beverton-Holt B With Offset",
    displayHTML : "y = rx / (1 + ((r-1)/K) * x) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BioScience.BioScienceA = module.exports.BioScience.BioScienceA = {
    pythonModuleName : "BioScience",
    pythonClassName : "BioScienceA",
    extendedVersionString : "Default",
    displayName : "BioScience A",
    displayHTML : "y = a * (1.0 - (b * c<sup>x</sup>))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BioScience.BioScienceA_WithOffset = module.exports.BioScience.BioScienceA_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "BioScienceA",
    extendedVersionString : "Offset",
    displayName : "BioScience A With Offset",
    displayHTML : "y = a * (1.0 - (b * c<sup>x</sup>)) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BioScience.BioScienceB = module.exports.BioScience.BioScienceB = {
    pythonModuleName : "BioScience",
    pythonClassName : "BioScienceB",
    extendedVersionString : "Default",
    displayName : "BioScience B",
    displayHTML : "y = a * (1.0 -(1.0 + (x/b)<sup>c</sup>)<sup>-1.0 * d</sup>)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BioScience.BioScienceB_WithOffset = module.exports.BioScience.BioScienceB_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "BioScienceB",
    extendedVersionString : "Offset",
    displayName : "BioScience B With Offset",
    displayHTML : "y = a * (1.0 -(1.0 + (x/b)<sup>c</sup>)<sup>-1.0 * d</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.BioScience.CellularConductance = module.exports.BioScience.CellularConductance = {
    pythonModuleName : "BioScience",
    pythonClassName : "CellularConductance",
    extendedVersionString : "Default",
    displayName : "Cellular Conductance",
    displayHTML : "g = p3/(1+exp((v-p1)/p2)) + p4*exp((v-45)/p5)",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.BioScience.CellularConductance_WithOffset = module.exports.BioScience.CellularConductance_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "CellularConductance",
    extendedVersionString : "Offset",
    displayName : "Cellular Conductance With Offset",
    displayHTML : "g = p3/(1+exp((v-p1)/p2)) + p4*exp((v-45)/p5) + Offset",
    dimensionality : 2,
    numberOfParameters : 6
};

exports.BioScience.DerekDuncanCustomEquation = module.exports.BioScience.DerekDuncanCustomEquation = {
    pythonModuleName : "BioScience",
    pythonClassName : "DerekDuncanCustomEquation",
    extendedVersionString : "Default",
    displayName : "Derek Duncan Custom Equation",
    displayHTML : "y = a / (1 + exp(-1/b*(x-c)))<sup>d</sup>",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BioScience.DerekDuncanCustomEquation_WithOffset = module.exports.BioScience.DerekDuncanCustomEquation_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "DerekDuncanCustomEquation",
    extendedVersionString : "Offset",
    displayName : "Derek Duncan Custom Equation With Offset",
    displayHTML : "y = a / (1 + exp(-1/b*(x-c)))<sup>d</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.BioScience.DoseResponseA = module.exports.BioScience.DoseResponseA = {
    pythonModuleName : "BioScience",
    pythonClassName : "DoseResponseA",
    extendedVersionString : "Default",
    displayName : "Dose-Response A",
    displayHTML : "y = b + (a-b) / (1 + 10<sup>x-c</sup>)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BioScience.DoseResponseB = module.exports.BioScience.DoseResponseB = {
    pythonModuleName : "BioScience",
    pythonClassName : "DoseResponseB",
    extendedVersionString : "Default",
    displayName : "Dose-Response B",
    displayHTML : "y = b + (a-b) / (1 + 10<sup>c-x</sup>)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BioScience.DoseResponseC = module.exports.BioScience.DoseResponseC = {
    pythonModuleName : "BioScience",
    pythonClassName : "DoseResponseC",
    extendedVersionString : "Default",
    displayName : "Dose-Response C",
    displayHTML : "y = b + (a-b) / (1 + 10<sup>d*(x-c)</sup>)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BioScience.DoseResponseD = module.exports.BioScience.DoseResponseD = {
    pythonModuleName : "BioScience",
    pythonClassName : "DoseResponseD",
    extendedVersionString : "Default",
    displayName : "Dose-Response D",
    displayHTML : "y = b + (a-b) / (1 + 10<sup>d*(c-x)</sup>)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BioScience.DoseResponseE = module.exports.BioScience.DoseResponseE = {
    pythonModuleName : "BioScience",
    pythonClassName : "DoseResponseE",
    extendedVersionString : "Default",
    displayName : "Dose-Response E",
    displayHTML : "y = b + (a-b) / (1 + (x/c)<sup>d</sup>)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BioScience.GeneralizedNegativeExponential = module.exports.BioScience.GeneralizedNegativeExponential = {
    pythonModuleName : "BioScience",
    pythonClassName : "GeneralizedNegativeExponential",
    extendedVersionString : "Default",
    displayName : "Generalized Negative Exponential",
    displayHTML : "y = a * (1.0 - exp(-bx))<sup>c</sup>",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BioScience.GeneralizedNegativeExponential_WithOffset = module.exports.BioScience.GeneralizedNegativeExponential_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "GeneralizedNegativeExponential",
    extendedVersionString : "Offset",
    displayName : "Generalized Negative Exponential With Offset",
    displayHTML : "y = a * (1.0 - exp(-bx))<sup>c</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BioScience.GeneralizedProductAccumulation = module.exports.BioScience.GeneralizedProductAccumulation = {
    pythonModuleName : "BioScience",
    pythonClassName : "GeneralizedProductAccumulation",
    extendedVersionString : "Default",
    displayName : "Generalized Product Accumulation",
    displayHTML : "y = a(b-x) / (c + (b-x)) + d(b-x) + f",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.BioScience.GeneralizedSubstrateDepletion = module.exports.BioScience.GeneralizedSubstrateDepletion = {
    pythonModuleName : "BioScience",
    pythonClassName : "GeneralizedSubstrateDepletion",
    extendedVersionString : "Default",
    displayName : "Generalized Substrate Depletion",
    displayHTML : "y = ax / (b + x) - cx - d",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BioScience.HighLowAffinity = module.exports.BioScience.HighLowAffinity = {
    pythonModuleName : "BioScience",
    pythonClassName : "HighLowAffinity",
    extendedVersionString : "Default",
    displayName : "High-Low Affinity",
    displayHTML : "y = abx / (1+bx)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.BioScience.HighLowAffinity_WithOffset = module.exports.BioScience.HighLowAffinity_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "HighLowAffinity",
    extendedVersionString : "Offset",
    displayName : "High-Low Affinity With Offset",
    displayHTML : "y = abx / (1+bx) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BioScience.HighLowAffinityDouble = module.exports.BioScience.HighLowAffinityDouble = {
    pythonModuleName : "BioScience",
    pythonClassName : "HighLowAffinityDouble",
    extendedVersionString : "Default",
    displayName : "High-Low Affinity Double",
    displayHTML : "y = abx / (1+bx) + cdx / (1+dx)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BioScience.HighLowAffinityDouble_WithOffset = module.exports.BioScience.HighLowAffinityDouble_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "HighLowAffinityDouble",
    extendedVersionString : "Offset",
    displayName : "High-Low Affinity Double With Offset",
    displayHTML : "y = abx / (1+bx) + cdx / (1+dx) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.BioScience.HighLowAffinityIsotopeDisplacement = module.exports.BioScience.HighLowAffinityIsotopeDisplacement = {
    pythonModuleName : "BioScience",
    pythonClassName : "HighLowAffinityIsotopeDisplacement",
    extendedVersionString : "Default",
    displayName : "High-Low Affinity Isotope Displacement ([Hot] subsumed)",
    displayHTML : "y = ab / (1+bx)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.BioScience.HighLowAffinityIsotopeDisplacement_WithOffset = module.exports.BioScience.HighLowAffinityIsotopeDisplacement_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "HighLowAffinityIsotopeDisplacement",
    extendedVersionString : "Offset",
    displayName : "High-Low Affinity Isotope Displacement ([Hot] subsumed) With Offset",
    displayHTML : "y = ab / (1+bx) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BioScience.HighLowAffinityIsotopeDisplacementDouble = module.exports.BioScience.HighLowAffinityIsotopeDisplacementDouble = {
    pythonModuleName : "BioScience",
    pythonClassName : "HighLowAffinityIsotopeDisplacementDouble",
    extendedVersionString : "Default",
    displayName : "High-Low Affinity Double Isotope Displacement ([Hot] subsumed)",
    displayHTML : "y = ab / (1+bx) + cd / (1+dx)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BioScience.HighLowAffinityIsotopeDisplacementDouble_WithOffset = module.exports.BioScience.HighLowAffinityIsotopeDisplacementDouble_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "HighLowAffinityIsotopeDisplacementDouble",
    extendedVersionString : "Offset",
    displayName : "High-Low Affinity Double Isotope Displacement ([Hot] subsumed) With Offset",
    displayHTML : "y = ab / (1+bx) + cd / (1+dx) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.BioScience.HyperbolicA = module.exports.BioScience.HyperbolicA = {
    pythonModuleName : "BioScience",
    pythonClassName : "HyperbolicA",
    extendedVersionString : "Default",
    displayName : "Hyperbolic A",
    displayHTML : "y = (a + x) / (b + x)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.BioScience.HyperbolicA_WithOffset = module.exports.BioScience.HyperbolicA_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "HyperbolicA",
    extendedVersionString : "Offset",
    displayName : "Hyperbolic A With Offset",
    displayHTML : "y = (a + x) / (b + x) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BioScience.HyperbolicB = module.exports.BioScience.HyperbolicB = {
    pythonModuleName : "BioScience",
    pythonClassName : "HyperbolicB",
    extendedVersionString : "Default",
    displayName : "Hyperbolic B",
    displayHTML : "y = (a + bx) / (c + x)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BioScience.HyperbolicB_WithOffset = module.exports.BioScience.HyperbolicB_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "HyperbolicB",
    extendedVersionString : "Offset",
    displayName : "Hyperbolic B With Offset",
    displayHTML : "y = (a + bx) / (c + x) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BioScience.HyperbolicC = module.exports.BioScience.HyperbolicC = {
    pythonModuleName : "BioScience",
    pythonClassName : "HyperbolicC",
    extendedVersionString : "Default",
    displayName : "Hyperbolic C",
    displayHTML : "y = (a + x) / (b + cx)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BioScience.HyperbolicC_WithOffset = module.exports.BioScience.HyperbolicC_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "HyperbolicC",
    extendedVersionString : "Offset",
    displayName : "Hyperbolic C With Offset",
    displayHTML : "y = (a + x) / (b + cx) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BioScience.HyperbolicD = module.exports.BioScience.HyperbolicD = {
    pythonModuleName : "BioScience",
    pythonClassName : "HyperbolicD",
    extendedVersionString : "Default",
    displayName : "Hyperbolic D",
    displayHTML : "y = (a + bx) / (c + dx)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BioScience.HyperbolicD_WithOffset = module.exports.BioScience.HyperbolicD_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "HyperbolicD",
    extendedVersionString : "Offset",
    displayName : "Hyperbolic D With Offset",
    displayHTML : "y = (a + bx) / (c + dx) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.BioScience.HyperbolicE = module.exports.BioScience.HyperbolicE = {
    pythonModuleName : "BioScience",
    pythonClassName : "HyperbolicE",
    extendedVersionString : "Default",
    displayName : "Hyperbolic E",
    displayHTML : "y = ax / (b + x)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.BioScience.HyperbolicE_WithOffset = module.exports.BioScience.HyperbolicE_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "HyperbolicE",
    extendedVersionString : "Offset",
    displayName : "Hyperbolic E With Offset",
    displayHTML : "y = ax / (b + x) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BioScience.HyperbolicF = module.exports.BioScience.HyperbolicF = {
    pythonModuleName : "BioScience",
    pythonClassName : "HyperbolicF",
    extendedVersionString : "Default",
    displayName : "Hyperbolic F",
    displayHTML : "y = ax / (b + x) + cx",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BioScience.HyperbolicF_WithOffset = module.exports.BioScience.HyperbolicF_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "HyperbolicF",
    extendedVersionString : "Offset",
    displayName : "Hyperbolic F With Offset",
    displayHTML : "y = ax / (b + x) + cx + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BioScience.HyperbolicG = module.exports.BioScience.HyperbolicG = {
    pythonModuleName : "BioScience",
    pythonClassName : "HyperbolicG",
    extendedVersionString : "Default",
    displayName : "Hyperbolic G",
    displayHTML : "y = ax / (b + x) + cx / (d + x)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BioScience.HyperbolicG_WithOffset = module.exports.BioScience.HyperbolicG_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "HyperbolicG",
    extendedVersionString : "Offset",
    displayName : "Hyperbolic G With Offset",
    displayHTML : "y = ax / (b + x) + cx / (d + x) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.BioScience.HyperbolicH = module.exports.BioScience.HyperbolicH = {
    pythonModuleName : "BioScience",
    pythonClassName : "HyperbolicH",
    extendedVersionString : "Default",
    displayName : "Hyperbolic H",
    displayHTML : "y = ax / (b + x) + cx / (d + x) + fx",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.BioScience.HyperbolicH_WithOffset = module.exports.BioScience.HyperbolicH_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "HyperbolicH",
    extendedVersionString : "Offset",
    displayName : "Hyperbolic H With Offset",
    displayHTML : "y = ax / (b + x) + cx / (d + x) + fx + Offset",
    dimensionality : 2,
    numberOfParameters : 6
};

exports.BioScience.HyperbolicI = module.exports.BioScience.HyperbolicI = {
    pythonModuleName : "BioScience",
    pythonClassName : "HyperbolicI",
    extendedVersionString : "Default",
    displayName : "Hyperbolic I",
    displayHTML : "y = ab / (b + x)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.BioScience.HyperbolicI_WithOffset = module.exports.BioScience.HyperbolicI_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "HyperbolicI",
    extendedVersionString : "Offset",
    displayName : "Hyperbolic I With Offset",
    displayHTML : "y = ab / (b + x) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BioScience.HyperbolicJ = module.exports.BioScience.HyperbolicJ = {
    pythonModuleName : "BioScience",
    pythonClassName : "HyperbolicJ",
    extendedVersionString : "Default",
    displayName : "Hyperbolic J",
    displayHTML : "y = x / (a + bx)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.BioScience.HyperbolicJ_WithOffset = module.exports.BioScience.HyperbolicJ_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "HyperbolicJ",
    extendedVersionString : "Offset",
    displayName : "Hyperbolic J With Offset",
    displayHTML : "y = x / (a + bx) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BioScience.HyperbolicLogistic = module.exports.BioScience.HyperbolicLogistic = {
    pythonModuleName : "BioScience",
    pythonClassName : "HyperbolicLogistic",
    extendedVersionString : "Default",
    displayName : "Hyperbolic Logistic",
    displayHTML : "y = ax<sup>b</sup> / (c + x<sup>b</sup>)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BioScience.HyperbolicLogistic_WithOffset = module.exports.BioScience.HyperbolicLogistic_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "HyperbolicLogistic",
    extendedVersionString : "Offset",
    displayName : "Hyperbolic Logistic With Offset",
    displayHTML : "y = ax<sup>b</sup> / (c + x<sup>b</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BioScience.JorgeRabinovichPopulationGrowth = module.exports.BioScience.JorgeRabinovichPopulationGrowth = {
    pythonModuleName : "BioScience",
    pythonClassName : "JorgeRabinovichPopulationGrowth",
    extendedVersionString : "Default",
    displayName : "Jorge Rabinovich Population Growth",
    displayHTML : "Y = (P1*CC) / (P1 + (CC-P1)*exp(-R*X))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BioScience.JorgeRabinovichPopulationGrowth_WithOffset = module.exports.BioScience.JorgeRabinovichPopulationGrowth_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "JorgeRabinovichPopulationGrowth",
    extendedVersionString : "Offset",
    displayName : "Jorge Rabinovich Population Growth With Offset",
    displayHTML : "Y = (P1*CC) / (P1 + (CC-P1)*exp(-R*X)) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BioScience.MembraneTransport = module.exports.BioScience.MembraneTransport = {
    pythonModuleName : "BioScience",
    pythonClassName : "MembraneTransport",
    extendedVersionString : "Default",
    displayName : "Membrane Transport",
    displayHTML : "y = a(x-b) / (x<sup>2</sup> + cx + d)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BioScience.MembraneTransport_WithOffset = module.exports.BioScience.MembraneTransport_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "MembraneTransport",
    extendedVersionString : "Offset",
    displayName : "Membrane Transport With Offset",
    displayHTML : "y = a(x-b) / (x<sup>2</sup> + cx + d) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.BioScience.MichaelisMenten = module.exports.BioScience.MichaelisMenten = {
    pythonModuleName : "BioScience",
    pythonClassName : "MichaelisMenten",
    extendedVersionString : "Default",
    displayName : "Michaelis-Menten",
    displayHTML : "y = ax / (b + x)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.BioScience.MichaelisMenten_WithOffset = module.exports.BioScience.MichaelisMenten_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "MichaelisMenten",
    extendedVersionString : "Offset",
    displayName : "Michaelis-Menten With Offset",
    displayHTML : "y = ax / (b + x) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BioScience.MichaelisMentenDouble = module.exports.BioScience.MichaelisMentenDouble = {
    pythonModuleName : "BioScience",
    pythonClassName : "MichaelisMentenDouble",
    extendedVersionString : "Default",
    displayName : "Michaelis-Menten Double",
    displayHTML : "y = ax / (b + x) + cx / (d + x)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BioScience.MichaelisMentenDouble_WithOffset = module.exports.BioScience.MichaelisMentenDouble_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "MichaelisMentenDouble",
    extendedVersionString : "Offset",
    displayName : "Michaelis-Menten Double With Offset",
    displayHTML : "y = ax / (b + x) + cx / (d + x) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.BioScience.MichaelisMentenDoubleIsotopeDisplacement = module.exports.BioScience.MichaelisMentenDoubleIsotopeDisplacement = {
    pythonModuleName : "BioScience",
    pythonClassName : "MichaelisMentenDoubleIsotopeDisplacement",
    extendedVersionString : "Default",
    displayName : "Michaelis-Menten Isotope Displacement Double ([Hot] subsumed)",
    displayHTML : "y = a / (b + x) + c / (d + x)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BioScience.MichaelisMentenDoubleIsotopeDisplacement_WithOffset = module.exports.BioScience.MichaelisMentenDoubleIsotopeDisplacement_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "MichaelisMentenDoubleIsotopeDisplacement",
    extendedVersionString : "Offset",
    displayName : "Michaelis-Menten Isotope Displacement Double ([Hot] subsumed) With Offset",
    displayHTML : "y = a / (b + x) + c / (d + x) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.BioScience.MichaelisMentenIsotopeDisplacement = module.exports.BioScience.MichaelisMentenIsotopeDisplacement = {
    pythonModuleName : "BioScience",
    pythonClassName : "MichaelisMentenIsotopeDisplacement",
    extendedVersionString : "Default",
    displayName : "Michaelis-Menten Isotope Displacement ([Hot] subsumed)",
    displayHTML : "y = a / (b + x)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.BioScience.MichaelisMentenIsotopeDisplacement_WithOffset = module.exports.BioScience.MichaelisMentenIsotopeDisplacement_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "MichaelisMentenIsotopeDisplacement",
    extendedVersionString : "Offset",
    displayName : "Michaelis-Menten Isotope Displacement ([Hot] subsumed) With Offset",
    displayHTML : "y = a / (b + x) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BioScience.MichaelisMentenProductAccumulation = module.exports.BioScience.MichaelisMentenProductAccumulation = {
    pythonModuleName : "BioScience",
    pythonClassName : "MichaelisMentenProductAccumulation",
    extendedVersionString : "Default",
    displayName : "Michaelis-Menten Product Accumulation",
    displayHTML : "y = a(b-x) / (c + (b-x))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BioScience.MichaelisMentenProductAccumulation_WithOffset = module.exports.BioScience.MichaelisMentenProductAccumulation_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "MichaelisMentenProductAccumulation",
    extendedVersionString : "Offset",
    displayName : "Michaelis-Menten Product Accumulation With Offset",
    displayHTML : "y = a(b-x) / (c + (b-x)) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BioScience.NegativeExponential = module.exports.BioScience.NegativeExponential = {
    pythonModuleName : "BioScience",
    pythonClassName : "NegativeExponential",
    extendedVersionString : "Default",
    displayName : "Negative Exponential",
    displayHTML : "y = a * (1.0 - exp(-bx))",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.BioScience.NegativeExponential_WithOffset = module.exports.BioScience.NegativeExponential_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "NegativeExponential",
    extendedVersionString : "Offset",
    displayName : "Negative Exponential With Offset",
    displayHTML : "y = a * (1.0 - exp(-bx)) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BioScience.NewZealandEcologyLogistic1 = module.exports.BioScience.NewZealandEcologyLogistic1 = {
    pythonModuleName : "BioScience",
    pythonClassName : "NewZealandEcologyLogistic1",
    extendedVersionString : "Default",
    displayName : "New Zealand Ecology Logistic 1",
    displayHTML : "n = B0 + ((B1 - B0) / (1.0 + exp((B2 + D) * B3)))",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BioScience.NewZealandEcologyLogistic2 = module.exports.BioScience.NewZealandEcologyLogistic2 = {
    pythonModuleName : "BioScience",
    pythonClassName : "NewZealandEcologyLogistic2",
    extendedVersionString : "Default",
    displayName : "New Zealand Ecology Logistic 2",
    displayHTML : "n = B0 + ((B1 - B0) / (1.0 + exp((B2 + D + (B4*D<sup>2</sup>)) * B3)))",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.BioScience.PlantDisease_Exponential = module.exports.BioScience.PlantDisease_Exponential = {
    pythonModuleName : "BioScience",
    pythonClassName : "PlantDisease_Exponential",
    extendedVersionString : "Default",
    displayName : "Plant Disease Exponential Model",
    displayHTML : "Incidence = y0 * exp(r * time)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.BioScience.PlantDisease_Exponential_WithOffset = module.exports.BioScience.PlantDisease_Exponential_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "PlantDisease_Exponential",
    extendedVersionString : "Offset",
    displayName : "Plant Disease Exponential Model With Offset",
    displayHTML : "Incidence = y0 * exp(r * time) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BioScience.PlantDisease_Gompertz = module.exports.BioScience.PlantDisease_Gompertz = {
    pythonModuleName : "BioScience",
    pythonClassName : "PlantDisease_Gompertz",
    extendedVersionString : "Default",
    displayName : "Plant Disease Gompertz Model",
    displayHTML : "Incidence = exp(ln(y0) * exp(-r * time))",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.BioScience.PlantDisease_Gompertz_WithOffset = module.exports.BioScience.PlantDisease_Gompertz_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "PlantDisease_Gompertz",
    extendedVersionString : "Offset",
    displayName : "Plant Disease Gompertz Model With Offset",
    displayHTML : "Incidence = exp(ln(y0) * exp(-r * time)) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BioScience.PlantDisease_Logistic = module.exports.BioScience.PlantDisease_Logistic = {
    pythonModuleName : "BioScience",
    pythonClassName : "PlantDisease_Logistic",
    extendedVersionString : "Default",
    displayName : "Plant Disease Logistic Model",
    displayHTML : "Incidence = 1 / (1 + (1 - y0) / (y0 * exp(-r * time)))",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.BioScience.PlantDisease_Logistic_WithOffset = module.exports.BioScience.PlantDisease_Logistic_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "PlantDisease_Logistic",
    extendedVersionString : "Offset",
    displayName : "Plant Disease Logistic Model With Offset",
    displayHTML : "Incidence = 1 / (1 + (1 - y0) / (y0 * exp(-r * time))) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BioScience.PlantDisease_Monomolecular = module.exports.BioScience.PlantDisease_Monomolecular = {
    pythonModuleName : "BioScience",
    pythonClassName : "PlantDisease_Monomolecular",
    extendedVersionString : "Default",
    displayName : "Plant Disease Monomolecular Model",
    displayHTML : "Incidence = 1 - ((1 - y0) * exp(-r * time))",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.BioScience.PlantDisease_Monomolecular_WithOffset = module.exports.BioScience.PlantDisease_Monomolecular_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "PlantDisease_Monomolecular",
    extendedVersionString : "Offset",
    displayName : "Plant Disease Monomolecular Model With Offset",
    displayHTML : "Incidence = 1 - ((1 - y0) * exp(-r * time)) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BioScience.PlantDisease_Weibull = module.exports.BioScience.PlantDisease_Weibull = {
    pythonModuleName : "BioScience",
    pythonClassName : "PlantDisease_Weibull",
    extendedVersionString : "Default",
    displayName : "Plant Disease Weibull Model",
    displayHTML : "Incidence = 1 - exp(-1.0 * ((time - a) / b)<sup>c</sup>)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BioScience.PlantDisease_Weibull_WithOffset = module.exports.BioScience.PlantDisease_Weibull_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "PlantDisease_Weibull",
    extendedVersionString : "Offset",
    displayName : "Plant Disease Weibull Model With Offset",
    displayHTML : "Incidence = 1 - exp(-1.0 * ((time - a) / b)<sup>c</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BioScience.PlantDisease_WeibullScaled = module.exports.BioScience.PlantDisease_WeibullScaled = {
    pythonModuleName : "BioScience",
    pythonClassName : "PlantDisease_WeibullScaled",
    extendedVersionString : "Default",
    displayName : "Plant Disease Weibull Model Scaled",
    displayHTML : "y = Scale * (1 - exp(-1.0 * ((time - a) / b)<sup>c</sup>))",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BioScience.PlantDisease_WeibullScaled_WithOffset = module.exports.BioScience.PlantDisease_WeibullScaled_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "PlantDisease_WeibullScaled",
    extendedVersionString : "Offset",
    displayName : "Plant Disease Weibull Model Scaled With Offset",
    displayHTML : "y = Scale * (1 - exp(-1.0 * ((time - a) / b)<sup>c</sup>)) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.BioScience.PreeceAndBaines = module.exports.BioScience.PreeceAndBaines = {
    pythonModuleName : "BioScience",
    pythonClassName : "PreeceAndBaines",
    extendedVersionString : "Default",
    displayName : "Preece And Baines Growth",
    displayHTML : "y = a - 2(a-b) / (exp(c(x-d)) + exp(f(x-d)))",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.BioScience.ScaledLog = module.exports.BioScience.ScaledLog = {
    pythonModuleName : "BioScience",
    pythonClassName : "ScaledLog",
    extendedVersionString : "Default",
    displayName : "Scaled Log",
    displayHTML : "y = a * log(x)",
    dimensionality : 2,
    numberOfParameters : 1
};

exports.BioScience.ScaledLog_WithOffset = module.exports.BioScience.ScaledLog_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "ScaledLog",
    extendedVersionString : "Offset",
    displayName : "Scaled Log With Offset",
    displayHTML : "y = a * log(x) + Offset",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.BioScience.ScaledLog_Transform = module.exports.BioScience.ScaledLog_Transform = {
    pythonModuleName : "BioScience",
    pythonClassName : "ScaledLog_Transform",
    extendedVersionString : "Default",
    displayName : "Scaled Log Transform",
    displayHTML : "y = a * log(bx + c)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BioScience.ScaledLog_Transform_WithOffset = module.exports.BioScience.ScaledLog_Transform_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "ScaledLog_Transform",
    extendedVersionString : "Offset",
    displayName : "Scaled Log Transform With Offset",
    displayHTML : "y = a * log(bx + c) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BioScience.ScaledPower = module.exports.BioScience.ScaledPower = {
    pythonModuleName : "BioScience",
    pythonClassName : "ScaledPower",
    extendedVersionString : "Default",
    displayName : "Scaled Power",
    displayHTML : "y = a * x<sup>b</sup>",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.BioScience.ScaledPower_WithOffset = module.exports.BioScience.ScaledPower_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "ScaledPower",
    extendedVersionString : "Offset",
    displayName : "Scaled Power With Offset",
    displayHTML : "y = a * x<sup>b</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BioScience.ScaledPower_Transform = module.exports.BioScience.ScaledPower_Transform = {
    pythonModuleName : "BioScience",
    pythonClassName : "ScaledPower_Transform",
    extendedVersionString : "Default",
    displayName : "Scaled Power Transform",
    displayHTML : "y = a * (cx + d)<sup>b</sup>",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BioScience.ScaledPower_Transform_WithOffset = module.exports.BioScience.ScaledPower_Transform_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "ScaledPower_Transform",
    extendedVersionString : "Offset",
    displayName : "Scaled Power Transform With Offset",
    displayHTML : "y = a * (cx + d)<sup>b</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.BioScience.StandardLogistic3Parameter = module.exports.BioScience.StandardLogistic3Parameter = {
    pythonModuleName : "BioScience",
    pythonClassName : "StandardLogistic3Parameter",
    extendedVersionString : "Default",
    displayName : "Standard 3-Parameter Logistic Equation",
    displayHTML : "y = d + (a - d) / (1 + (x / c))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BioScience.StandardLogistic4Parameter = module.exports.BioScience.StandardLogistic4Parameter = {
    pythonModuleName : "BioScience",
    pythonClassName : "StandardLogistic4Parameter",
    extendedVersionString : "Default",
    displayName : "Standard 4-Parameter Logistic Equation",
    displayHTML : "y = d + (a - d) / (1 + (x / c)<sup>b</sup>)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BioScience.StandardLogistic5Parameter = module.exports.BioScience.StandardLogistic5Parameter = {
    pythonModuleName : "BioScience",
    pythonClassName : "StandardLogistic5Parameter",
    extendedVersionString : "Default",
    displayName : "Standard 5-Parameter Logistic Equation",
    displayHTML : "y = d + (a - d) / (1 + (x / c)<sup>b</sup> )<sup>f</sup>",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.BioScience.Weibull = module.exports.BioScience.Weibull = {
    pythonModuleName : "BioScience",
    pythonClassName : "Weibull",
    extendedVersionString : "Default",
    displayName : "Weibull",
    displayHTML : "y = a * (1.0 - exp(-b * (x - c)<sup>d</sup>))",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BioScience.Weibull_WithOffset = module.exports.BioScience.Weibull_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "Weibull",
    extendedVersionString : "Offset",
    displayName : "Weibull With Offset",
    displayHTML : "y = a * (1.0 - exp(-b * (x - c)<sup>d</sup>)) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.BioScience.XiaogangPengImmunoassay = module.exports.BioScience.XiaogangPengImmunoassay = {
    pythonModuleName : "BioScience",
    pythonClassName : "XiaogangPengImmunoassay",
    extendedVersionString : "Default",
    displayName : "Xiaogang Peng Immunoassay",
    displayHTML : "y = K / (1.0 + exp(-1.0 * (a + blog(x) + cx)))",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BioScience.XiaogangPengImmunoassay_WithOffset = module.exports.BioScience.XiaogangPengImmunoassay_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "XiaogangPengImmunoassay",
    extendedVersionString : "Offset",
    displayName : "Xiaogang Peng Immunoassay With Offset",
    displayHTML : "y = K / (1.0 + exp(-1.0 * (a + blog(x) + cx))) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};


exports.BurkardtCollectionBased = module.exports.BurkardtCollectionBased = {};

exports.BurkardtCollectionBased.arcsin_cdf = module.exports.BurkardtCollectionBased.arcsin_cdf = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "arcsin_cdf",
    extendedVersionString : "Default",
    displayName : "Arcsin CDF Based",
    displayHTML : "y = a * asin( (bx+c) / d)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BurkardtCollectionBased.arcsin_cdf_WithOffset = module.exports.BurkardtCollectionBased.arcsin_cdf_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "arcsin_cdf",
    extendedVersionString : "Offset",
    displayName : "Arcsin CDF Based With Offset",
    displayHTML : "y = a * asin( (bx+c) / d) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.BurkardtCollectionBased.arcsin_pdf = module.exports.BurkardtCollectionBased.arcsin_pdf = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "arcsin_pdf",
    extendedVersionString : "Default",
    displayName : "Arcsin PDF Based",
    displayHTML : "y = a / sqrt( b<sup>2</sup> - x<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.BurkardtCollectionBased.arcsin_pdf_WithOffset = module.exports.BurkardtCollectionBased.arcsin_pdf_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "arcsin_pdf",
    extendedVersionString : "Offset",
    displayName : "Arcsin PDF Based With Offset",
    displayHTML : "y = a / sqrt( b<sup>2</sup> - x<sup>2</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BurkardtCollectionBased.bradford_cdf_a = module.exports.BurkardtCollectionBased.bradford_cdf_a = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "bradford_cdf_a",
    extendedVersionString : "Default",
    displayName : "Bradford CDF Based A",
    displayHTML : "y = ln(1.0+c*(x-a)/(b-a)) / ln(c+1.0)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BurkardtCollectionBased.bradford_cdf_a_WithOffset = module.exports.BurkardtCollectionBased.bradford_cdf_a_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "bradford_cdf_a",
    extendedVersionString : "Offset",
    displayName : "Bradford CDF Based A With Offset",
    displayHTML : "y = ln(1.0+c*(x-a)/(b-a)) / ln(c+1.0) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BurkardtCollectionBased.bradford_cdf_b = module.exports.BurkardtCollectionBased.bradford_cdf_b = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "bradford_cdf_b",
    extendedVersionString : "Default",
    displayName : "Bradford CDF Based B",
    displayHTML : "y = d * ln(1.0+c*(x-a)/(b-a)) / ln(c+1.0)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BurkardtCollectionBased.bradford_cdf_b_WithOffset = module.exports.BurkardtCollectionBased.bradford_cdf_b_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "bradford_cdf_b",
    extendedVersionString : "Offset",
    displayName : "Bradford CDF Based B With Offset",
    displayHTML : "y = d * ln(1.0+c*(x-a)/(b-a)) / ln(c+1.0) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.BurkardtCollectionBased.bradford_pdf = module.exports.BurkardtCollectionBased.bradford_pdf = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "bradford_pdf",
    extendedVersionString : "Default",
    displayName : "Bradford PDF Based",
    displayHTML : "y = c / (( c * (x-a) + b-a) * ln(c + 1.0))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BurkardtCollectionBased.bradford_pdf_WithOffset = module.exports.BurkardtCollectionBased.bradford_pdf_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "bradford_pdf",
    extendedVersionString : "Offset",
    displayName : "Bradford PDF Based With Offset",
    displayHTML : "y = c / (( c * (x-a) + b-a) * ln(c + 1.0)) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BurkardtCollectionBased.burr_cdf_a = module.exports.BurkardtCollectionBased.burr_cdf_a = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "burr_cdf_a",
    extendedVersionString : "Default",
    displayName : "Burr CDF Based A",
    displayHTML : "y = 1.0 / ( 1.0 + ( b / ( x-a ))<sup>c</sup>)<sup>d</sup>",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BurkardtCollectionBased.burr_cdf_a_WithOffset = module.exports.BurkardtCollectionBased.burr_cdf_a_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "burr_cdf_a",
    extendedVersionString : "Offset",
    displayName : "Burr CDF Based A With Offset",
    displayHTML : "y = 1.0 / ( 1.0 + ( b / ( x-a ))<sup>c</sup>)<sup>d</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.BurkardtCollectionBased.burr_cdf_b = module.exports.BurkardtCollectionBased.burr_cdf_b = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "burr_cdf_b",
    extendedVersionString : "Default",
    displayName : "Burr CDF Based B",
    displayHTML : "y = f / ( 1.0 + ( b / ( x-a ))<sup>c</sup>)<sup>d</sup>",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.BurkardtCollectionBased.burr_cdf_b_WithOffset = module.exports.BurkardtCollectionBased.burr_cdf_b_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "burr_cdf_b",
    extendedVersionString : "Offset",
    displayName : "Burr CDF Based B With Offset",
    displayHTML : "y = f / ( 1.0 + ( b / ( x-a ))<sup>c</sup>)<sup>d</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 6
};

exports.BurkardtCollectionBased.burr_pdf = module.exports.BurkardtCollectionBased.burr_pdf = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "burr_pdf",
    extendedVersionString : "Default",
    displayName : "Burr PDF Based",
    displayHTML : "y = (c*d/b) * ((x-a)/b)^(-c-1.0) * (1.0+((x-a)/b)^(-c))^(-d-1.0)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BurkardtCollectionBased.burr_pdf_WithOffset = module.exports.BurkardtCollectionBased.burr_pdf_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "burr_pdf",
    extendedVersionString : "Offset",
    displayName : "Burr PDF Based With Offset",
    displayHTML : "y = (c*d/b) * ((x-a)/b)^(-c-1.0) * (1.0+((x-a)/b)^(-c))^(-d-1.0) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.BurkardtCollectionBased.dipole_cdf = module.exports.BurkardtCollectionBased.dipole_cdf = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "dipole_cdf",
    extendedVersionString : "Default",
    displayName : "Dipole CDF Based",
    displayHTML : "y = a * arctan(x) + b/x",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.BurkardtCollectionBased.dipole_cdf_WithOffset = module.exports.BurkardtCollectionBased.dipole_cdf_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "dipole_cdf",
    extendedVersionString : "Offset",
    displayName : "Dipole CDF Based With Offset",
    displayHTML : "y = a * arctan(x) + b/x + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BurkardtCollectionBased.exponential_pdf = module.exports.BurkardtCollectionBased.exponential_pdf = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "exponential_pdf",
    extendedVersionString : "Default",
    displayName : "Exponential PDF Based",
    displayHTML : "y = (1.0/b) * exp((a-x)/b)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.BurkardtCollectionBased.exponential_pdf_WithOffset = module.exports.BurkardtCollectionBased.exponential_pdf_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "exponential_pdf",
    extendedVersionString : "Offset",
    displayName : "Exponential PDF Based With Offset",
    displayHTML : "y = (1.0/b) * exp((a-x)/b) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BurkardtCollectionBased.exponential_pdf_scaled = module.exports.BurkardtCollectionBased.exponential_pdf_scaled = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "exponential_pdf_scaled",
    extendedVersionString : "Default",
    displayName : "Exponential PDF Based Scaled",
    displayHTML : "y = Scale * (1.0/b) * exp((a-x)/b)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BurkardtCollectionBased.exponential_pdf_scaled_WithOffset = module.exports.BurkardtCollectionBased.exponential_pdf_scaled_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "exponential_pdf_scaled",
    extendedVersionString : "Offset",
    displayName : "Exponential PDF Based Scaled With Offset",
    displayHTML : "y = Scale * (1.0/b) * exp((a-x)/b) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BurkardtCollectionBased.extreme_values_cdf_a = module.exports.BurkardtCollectionBased.extreme_values_cdf_a = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "extreme_values_cdf_a",
    extendedVersionString : "Default",
    displayName : "Extreme Values CDF Based A",
    displayHTML : "y = exp(-exp(-((x-a)/b)))",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.BurkardtCollectionBased.extreme_values_cdf_a_WithOffset = module.exports.BurkardtCollectionBased.extreme_values_cdf_a_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "extreme_values_cdf_a",
    extendedVersionString : "Offset",
    displayName : "Extreme Values CDF Based A With Offset",
    displayHTML : "y = exp(-exp(-((x-a)/b))) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BurkardtCollectionBased.extreme_values_cdf_b = module.exports.BurkardtCollectionBased.extreme_values_cdf_b = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "extreme_values_cdf_b",
    extendedVersionString : "Default",
    displayName : "Extreme Values CDF Based B",
    displayHTML : "y = c * exp(-exp(-((x-a)/b)))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BurkardtCollectionBased.extreme_values_cdf_b_WithOffset = module.exports.BurkardtCollectionBased.extreme_values_cdf_b_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "extreme_values_cdf_b",
    extendedVersionString : "Offset",
    displayName : "Extreme Values CDF Based B With Offset",
    displayHTML : "y = c * exp(-exp(-((x-a)/b))) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BurkardtCollectionBased.extreme_values_pdf = module.exports.BurkardtCollectionBased.extreme_values_pdf = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "extreme_values_pdf",
    extendedVersionString : "Default",
    displayName : "Extreme Values PDF Based",
    displayHTML : "y = (1.0/b) * exp(((a-x)/b)-exp((a-x)/b))",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.BurkardtCollectionBased.extreme_values_pdf_WithOffset = module.exports.BurkardtCollectionBased.extreme_values_pdf_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "extreme_values_pdf",
    extendedVersionString : "Offset",
    displayName : "Extreme Values PDF Based With Offset",
    displayHTML : "y = (1.0/b) * exp(((a-x)/b)-exp((a-x)/b)) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BurkardtCollectionBased.fisk_cdf_a = module.exports.BurkardtCollectionBased.fisk_cdf_a = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "fisk_cdf_a",
    extendedVersionString : "Default",
    displayName : "Fisk CDF Based A",
    displayHTML : "y = 1.0 / (1.0+(b/(x-a))<sup>c</sup>)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BurkardtCollectionBased.fisk_cdf_a_WithOffset = module.exports.BurkardtCollectionBased.fisk_cdf_a_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "fisk_cdf_a",
    extendedVersionString : "Offset",
    displayName : "Fisk CDF Based A With Offset",
    displayHTML : "y = 1.0 / (1.0+(b/(x-a))<sup>c</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BurkardtCollectionBased.fisk_cdf_b = module.exports.BurkardtCollectionBased.fisk_cdf_b = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "fisk_cdf_b",
    extendedVersionString : "Default",
    displayName : "Fisk CDF Based B",
    displayHTML : "y = d / (1.0+(b/(x-a))<sup>c</sup>)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BurkardtCollectionBased.fisk_cdf_b_WithOffset = module.exports.BurkardtCollectionBased.fisk_cdf_b_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "fisk_cdf_b",
    extendedVersionString : "Offset",
    displayName : "Fisk CDF Based B With Offset",
    displayHTML : "y = d / (1.0+(b/(x-a))<sup>c</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.BurkardtCollectionBased.fisk_pdf = module.exports.BurkardtCollectionBased.fisk_pdf = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "fisk_pdf",
    extendedVersionString : "Default",
    displayName : "Fisk PDF Based",
    displayHTML : "y = (c/b) * ((x-a)/b)<sup>(c-1.0)</sup> / (1.0 + ((x-a)/b)<sup>c</sup>)<sup>2</sup>",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BurkardtCollectionBased.fisk_pdf_WithOffset = module.exports.BurkardtCollectionBased.fisk_pdf_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "fisk_pdf",
    extendedVersionString : "Offset",
    displayName : "Fisk PDF Based With Offset",
    displayHTML : "y = (c/b) * ((x-a)/b)<sup>(c-1.0)</sup> / (1.0 + ((x-a)/b)<sup>c</sup>)<sup>2</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BurkardtCollectionBased.folded_normal_pdf = module.exports.BurkardtCollectionBased.folded_normal_pdf = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "folded_normal_pdf",
    extendedVersionString : "Default",
    displayName : "Folded Normal PDF Based",
    displayHTML : "y = c * (1/b) * cosh(a*x/b<sup>2</sup>) * exp(-0.5 * (x<sup>2</sup> + a<sup>2</sup>)/b<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BurkardtCollectionBased.folded_normal_pdf_WithOffset = module.exports.BurkardtCollectionBased.folded_normal_pdf_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "folded_normal_pdf",
    extendedVersionString : "Offset",
    displayName : "Folded Normal PDF Based With Offset",
    displayHTML : "y = c * (1/b) * cosh(a*x/b<sup>2</sup>) * exp(-0.5 * (x<sup>2</sup> + a<sup>2</sup>)/b<sup>2</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BurkardtCollectionBased.frechet_cdf_a = module.exports.BurkardtCollectionBased.frechet_cdf_a = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "frechet_cdf_a",
    extendedVersionString : "Default",
    displayName : "Frechet CDF Based A",
    displayHTML : "y = exp(-1.0 / x<sup>a</sup>)",
    dimensionality : 2,
    numberOfParameters : 1
};

exports.BurkardtCollectionBased.frechet_cdf_a_WithOffset = module.exports.BurkardtCollectionBased.frechet_cdf_a_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "frechet_cdf_a",
    extendedVersionString : "Offset",
    displayName : "Frechet CDF Based A With Offset",
    displayHTML : "y = exp(-1.0 / x<sup>a</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.BurkardtCollectionBased.frechet_cdf_b = module.exports.BurkardtCollectionBased.frechet_cdf_b = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "frechet_cdf_b",
    extendedVersionString : "Default",
    displayName : "Frechet CDF Based B",
    displayHTML : "y = b * exp(-1.0 / x<sup>a</sup>)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.BurkardtCollectionBased.frechet_cdf_b_WithOffset = module.exports.BurkardtCollectionBased.frechet_cdf_b_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "frechet_cdf_b",
    extendedVersionString : "Offset",
    displayName : "Frechet CDF Based B With Offset",
    displayHTML : "y = b * exp(-1.0 / x<sup>a</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BurkardtCollectionBased.frechet_pdf_a = module.exports.BurkardtCollectionBased.frechet_pdf_a = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "frechet_pdf_a",
    extendedVersionString : "Default",
    displayName : "Frechet PDF Based A",
    displayHTML : "y = exp(- 1.0 / x<sup>a</sup>) / x<sup>( a + 1.0)</sup>",
    dimensionality : 2,
    numberOfParameters : 1
};

exports.BurkardtCollectionBased.frechet_pdf_a_WithOffset = module.exports.BurkardtCollectionBased.frechet_pdf_a_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "frechet_pdf_a",
    extendedVersionString : "Offset",
    displayName : "Frechet PDF Based A With Offset",
    displayHTML : "y = exp(- 1.0 / x<sup>a</sup>) / x<sup>( a + 1.0)</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.BurkardtCollectionBased.frechet_pdf_b = module.exports.BurkardtCollectionBased.frechet_pdf_b = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "frechet_pdf_b",
    extendedVersionString : "Default",
    displayName : "Frechet PDF Based B",
    displayHTML : "y = b * exp(- 1.0 / x<sup>a</sup>) / x<sup>( a + 1.0)</sup>",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.BurkardtCollectionBased.frechet_pdf_b_WithOffset = module.exports.BurkardtCollectionBased.frechet_pdf_b_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "frechet_pdf_b",
    extendedVersionString : "Offset",
    displayName : "Frechet PDF Based B With Offset",
    displayHTML : "y = b * exp(- 1.0 / x<sup>a</sup>) / x<sup>( a + 1.0)</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BurkardtCollectionBased.genlogistic_cdf_a = module.exports.BurkardtCollectionBased.genlogistic_cdf_a = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "genlogistic_cdf_a",
    extendedVersionString : "Default",
    displayName : "Genlogistic CDF Based A",
    displayHTML : "y = (1.0/(1.0+exp(-(x-a)/b)))<sup>c</sup>",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BurkardtCollectionBased.genlogistic_cdf_a_WithOffset = module.exports.BurkardtCollectionBased.genlogistic_cdf_a_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "genlogistic_cdf_a",
    extendedVersionString : "Offset",
    displayName : "Genlogistic CDF Based A With Offset",
    displayHTML : "y = (1.0/(1.0+exp(-(x-a)/b)))<sup>c</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BurkardtCollectionBased.genlogistic_cdf_b = module.exports.BurkardtCollectionBased.genlogistic_cdf_b = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "genlogistic_cdf_b",
    extendedVersionString : "Default",
    displayName : "Genlogistic CDF Based B",
    displayHTML : "y = (d/(1.0+exp(-(x-a)/b)))<sup>c</sup>",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BurkardtCollectionBased.genlogistic_cdf_b_WithOffset = module.exports.BurkardtCollectionBased.genlogistic_cdf_b_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "genlogistic_cdf_b",
    extendedVersionString : "Offset",
    displayName : "Genlogistic CDF Based B With Offset",
    displayHTML : "y = (d/(1.0+exp(-(x-a)/b)))<sup>c</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.BurkardtCollectionBased.genlogistic_pdf = module.exports.BurkardtCollectionBased.genlogistic_pdf = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "genlogistic_pdf",
    extendedVersionString : "Default",
    displayName : "Genlogistic PDF Based",
    displayHTML : "y = (c/b) * exp(-((x-a)/b)) / (1.0+exp(-((x-a)/b)))<sup>(c+1.0)</sup>",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BurkardtCollectionBased.genlogistic_pdf_WithOffset = module.exports.BurkardtCollectionBased.genlogistic_pdf_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "genlogistic_pdf",
    extendedVersionString : "Offset",
    displayName : "Genlogistic PDF Based With Offset",
    displayHTML : "y = (c/b) * exp(-((x-a)/b)) / (1.0+exp(-((x-a)/b)))<sup>(c+1.0)</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BurkardtCollectionBased.gompertz_cdf = module.exports.BurkardtCollectionBased.gompertz_cdf = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "gompertz_cdf",
    extendedVersionString : "Default",
    displayName : "Gompertz CDF Based",
    displayHTML : "y = 1.0 - exp(-b * (a<sup>x</sup>-1.0) / ln(a))",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.BurkardtCollectionBased.gompertz_cdf_WithOffset = module.exports.BurkardtCollectionBased.gompertz_cdf_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "gompertz_cdf",
    extendedVersionString : "Offset",
    displayName : "Gompertz CDF Based With Offset",
    displayHTML : "y = 1.0 - exp(-b * (a<sup>x</sup>-1.0) / ln(a)) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BurkardtCollectionBased.gompertz_cdf_scaled = module.exports.BurkardtCollectionBased.gompertz_cdf_scaled = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "gompertz_cdf_scaled",
    extendedVersionString : "Default",
    displayName : "Gompertz CDF Based Scaled",
    displayHTML : "y = Scale * (1.0 - exp(-b * (a<sup>x</sup>-1.0) / ln(a)))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BurkardtCollectionBased.gompertz_cdf_scaled_WithOffset = module.exports.BurkardtCollectionBased.gompertz_cdf_scaled_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "gompertz_cdf_scaled",
    extendedVersionString : "Offset",
    displayName : "Gompertz CDF Based Scaled With Offset",
    displayHTML : "y = Scale * (1.0 - exp(-b * (a<sup>x</sup>-1.0) / ln(a))) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BurkardtCollectionBased.gumbel_cdf = module.exports.BurkardtCollectionBased.gumbel_cdf = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "gumbel_cdf",
    extendedVersionString : "Default",
    displayName : "Gumbel CDF Based",
    displayHTML : "y = a * exp(-exp(-x))",
    dimensionality : 2,
    numberOfParameters : 1
};

exports.BurkardtCollectionBased.gumbel_cdf_WithOffset = module.exports.BurkardtCollectionBased.gumbel_cdf_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "gumbel_cdf",
    extendedVersionString : "Offset",
    displayName : "Gumbel CDF Based With Offset",
    displayHTML : "y = a * exp(-exp(-x)) + Offset",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.BurkardtCollectionBased.gumbel_pdf = module.exports.BurkardtCollectionBased.gumbel_pdf = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "gumbel_pdf",
    extendedVersionString : "Default",
    displayName : "Gumbel PDF Based",
    displayHTML : "y = a * exp(-x-exp(-x))",
    dimensionality : 2,
    numberOfParameters : 1
};

exports.BurkardtCollectionBased.gumbel_pdf_WithOffset = module.exports.BurkardtCollectionBased.gumbel_pdf_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "gumbel_pdf",
    extendedVersionString : "Offset",
    displayName : "Gumbel PDF Based With Offset",
    displayHTML : "y = a * exp(-x-exp(-x)) + Offset",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.BurkardtCollectionBased.half_normal_pdf = module.exports.BurkardtCollectionBased.half_normal_pdf = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "half_normal_pdf",
    extendedVersionString : "Default",
    displayName : "Half Normal PDF Based",
    displayHTML : "y = c * ( 1.0/b) * exp(-0.5*((x-a)/b)*((x-a)/b))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BurkardtCollectionBased.half_normal_pdf_WithOffset = module.exports.BurkardtCollectionBased.half_normal_pdf_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "half_normal_pdf",
    extendedVersionString : "Offset",
    displayName : "Half Normal PDF Based With Offset",
    displayHTML : "y = c * ( 1.0/b) * exp(-0.5*((x-a)/b)*((x-a)/b)) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BurkardtCollectionBased.inverse_gaussian_pdf_a = module.exports.BurkardtCollectionBased.inverse_gaussian_pdf_a = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "inverse_gaussian_pdf_a",
    extendedVersionString : "Default",
    displayName : "Inverse_gaussian PDF Based A",
    displayHTML : "y = sqrt(b/(c*x<sup>3</sup>))*exp(-b*(x-a)<sup>2</sup> / (2.0*a<sup>2</sup>*x))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BurkardtCollectionBased.inverse_gaussian_pdf_a_WithOffset = module.exports.BurkardtCollectionBased.inverse_gaussian_pdf_a_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "inverse_gaussian_pdf_a",
    extendedVersionString : "Offset",
    displayName : "Inverse_gaussian PDF Based A With Offset",
    displayHTML : "y = sqrt(b/(c*x<sup>3</sup>))*exp(-b*(x-a)<sup>2</sup> / (2.0*a<sup>2</sup>*x)) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BurkardtCollectionBased.inverse_gaussian_pdf_b = module.exports.BurkardtCollectionBased.inverse_gaussian_pdf_b = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "inverse_gaussian_pdf_b",
    extendedVersionString : "Default",
    displayName : "Inverse_gaussian PDF Based B",
    displayHTML : "y = sqrt(b/(c*x<sup>3</sup>))*exp(-b*(x-a)<sup>2</sup> / (2.0*a<sup>2</sup>*x))",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BurkardtCollectionBased.inverse_gaussian_pdf_b_WithOffset = module.exports.BurkardtCollectionBased.inverse_gaussian_pdf_b_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "inverse_gaussian_pdf_b",
    extendedVersionString : "Offset",
    displayName : "Inverse_gaussian PDF Based B With Offset",
    displayHTML : "y = sqrt(b/(c*x<sup>3</sup>))*exp(-b*(x-a)<sup>2</sup> / (2.0*a<sup>2</sup>*x)) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.BurkardtCollectionBased.levy_pdf = module.exports.BurkardtCollectionBased.levy_pdf = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "levy_pdf",
    extendedVersionString : "Default",
    displayName : "Levy PDF Based",
    displayHTML : "y = b<sup>0.5</sup> * exp(-b/(2.0*(x-a)))/sqrt((x-a)<sup>3</sup>)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.BurkardtCollectionBased.levy_pdf_WithOffset = module.exports.BurkardtCollectionBased.levy_pdf_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "levy_pdf",
    extendedVersionString : "Offset",
    displayName : "Levy PDF Based With Offset",
    displayHTML : "y = b<sup>0.5</sup> * exp(-b/(2.0*(x-a)))/sqrt((x-a)<sup>3</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BurkardtCollectionBased.levy_pdf_scaled = module.exports.BurkardtCollectionBased.levy_pdf_scaled = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "levy_pdf_scaled",
    extendedVersionString : "Default",
    displayName : "Levy PDF Based Scaled",
    displayHTML : "y = Scale * b<sup>0.5</sup> * exp(-b/(2.0*(x-a)))/sqrt((x-a)<sup>3</sup>)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BurkardtCollectionBased.levy_pdf_scaled_WithOffset = module.exports.BurkardtCollectionBased.levy_pdf_scaled_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "levy_pdf_scaled",
    extendedVersionString : "Offset",
    displayName : "Levy PDF Based Scaled With Offset",
    displayHTML : "y = Scale * b<sup>0.5</sup> * exp(-b/(2.0*(x-a)))/sqrt((x-a)<sup>3</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BurkardtCollectionBased.log_normal_pdf = module.exports.BurkardtCollectionBased.log_normal_pdf = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "log_normal_pdf",
    extendedVersionString : "Default",
    displayName : "Log Normal PDF Based",
    displayHTML : "y = exp(-0.5*((ln(x)-a)/b)<sup>2</sup>) / (b*x)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.BurkardtCollectionBased.log_normal_pdf_WithOffset = module.exports.BurkardtCollectionBased.log_normal_pdf_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "log_normal_pdf",
    extendedVersionString : "Offset",
    displayName : "Log Normal PDF Based With Offset",
    displayHTML : "y = exp(-0.5*((ln(x)-a)/b)<sup>2</sup>) / (b*x) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BurkardtCollectionBased.logistic_pdf = module.exports.BurkardtCollectionBased.logistic_pdf = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "logistic_pdf",
    extendedVersionString : "Default",
    displayName : "Logistic PDF Based",
    displayHTML : "y = exp((a-x)/b) / (b*(1.0+exp((a-x)/b))<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.BurkardtCollectionBased.logistic_pdf_WithOffset = module.exports.BurkardtCollectionBased.logistic_pdf_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "logistic_pdf",
    extendedVersionString : "Offset",
    displayName : "Logistic PDF Based With Offset",
    displayHTML : "y = exp((a-x)/b) / (b*(1.0+exp((a-x)/b))<sup>2</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BurkardtCollectionBased.pareto_pdf = module.exports.BurkardtCollectionBased.pareto_pdf = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "pareto_pdf",
    extendedVersionString : "Default",
    displayName : "Pareto PDF Based",
    displayHTML : "y = b * a<sup>b</sup> / x<sup>(b+1.0)</sup>",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.BurkardtCollectionBased.pareto_pdf_WithOffset = module.exports.BurkardtCollectionBased.pareto_pdf_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "pareto_pdf",
    extendedVersionString : "Offset",
    displayName : "Pareto PDF Based With Offset",
    displayHTML : "y = b * a<sup>b</sup> / x<sup>(b+1.0)</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BurkardtCollectionBased.power_pdf = module.exports.BurkardtCollectionBased.power_pdf = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "power_pdf",
    extendedVersionString : "Default",
    displayName : "Power PDF Based",
    displayHTML : "y = (a/b) * (x/b)<sup>(a-1.0)</sup>",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.BurkardtCollectionBased.power_pdf_WithOffset = module.exports.BurkardtCollectionBased.power_pdf_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "power_pdf",
    extendedVersionString : "Offset",
    displayName : "Power PDF Based With Offset",
    displayHTML : "y = (a/b) * (x/b)<sup>(a-1.0)</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BurkardtCollectionBased.rayleigh_cdf_a = module.exports.BurkardtCollectionBased.rayleigh_cdf_a = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "rayleigh_cdf_a",
    extendedVersionString : "Default",
    displayName : "Rayleigh CDF Based A",
    displayHTML : "y = 1.0 - exp(-x<sup>2</sup>/(2.0*a<sup>2</sup>))",
    dimensionality : 2,
    numberOfParameters : 1
};

exports.BurkardtCollectionBased.rayleigh_cdf_a_WithOffset = module.exports.BurkardtCollectionBased.rayleigh_cdf_a_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "rayleigh_cdf_a",
    extendedVersionString : "Offset",
    displayName : "Rayleigh CDF Based A With Offset",
    displayHTML : "y = 1.0 - exp(-x<sup>2</sup>/(2.0*a<sup>2</sup>)) + Offset",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.BurkardtCollectionBased.rayleigh_cdf_b = module.exports.BurkardtCollectionBased.rayleigh_cdf_b = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "rayleigh_cdf_b",
    extendedVersionString : "Default",
    displayName : "Rayleigh CDF Based B",
    displayHTML : "y = b * exp(-x<sup>2</sup>/(2.0*a<sup>2</sup>))",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.BurkardtCollectionBased.rayleigh_cdf_b_WithOffset = module.exports.BurkardtCollectionBased.rayleigh_cdf_b_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "rayleigh_cdf_b",
    extendedVersionString : "Offset",
    displayName : "Rayleigh CDF Based B With Offset",
    displayHTML : "y = b * exp(-x<sup>2</sup>/(2.0*a<sup>2</sup>)) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BurkardtCollectionBased.rayleigh_pdf = module.exports.BurkardtCollectionBased.rayleigh_pdf = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "rayleigh_pdf",
    extendedVersionString : "Default",
    displayName : "Rayleigh PDF Based",
    displayHTML : "y = (x/a<sup>2</sup>) * exp(-x<sup>2</sup>/(2.0*a<sup>2</sup>))",
    dimensionality : 2,
    numberOfParameters : 1
};

exports.BurkardtCollectionBased.rayleigh_pdf_WithOffset = module.exports.BurkardtCollectionBased.rayleigh_pdf_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "rayleigh_pdf",
    extendedVersionString : "Offset",
    displayName : "Rayleigh PDF Based With Offset",
    displayHTML : "y = (x/a<sup>2</sup>) * exp(-x<sup>2</sup>/(2.0*a<sup>2</sup>)) + Offset",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.BurkardtCollectionBased.rayleigh_pdf_scaled = module.exports.BurkardtCollectionBased.rayleigh_pdf_scaled = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "rayleigh_pdf_scaled",
    extendedVersionString : "Default",
    displayName : "Rayleigh PDF Based Scaled",
    displayHTML : "y = Scale * (x/a<sup>2</sup>) * exp(-x<sup>2</sup>/(2.0*a<sup>2</sup>))",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.BurkardtCollectionBased.rayleigh_pdf_scaled_WithOffset = module.exports.BurkardtCollectionBased.rayleigh_pdf_scaled_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "rayleigh_pdf_scaled",
    extendedVersionString : "Offset",
    displayName : "Rayleigh PDF Based Scaled With Offset",
    displayHTML : "y = Scale * (x/a<sup>2</sup>) * exp(-x<sup>2</sup>/(2.0*a<sup>2</sup>)) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BurkardtCollectionBased.reciprocal_cdf = module.exports.BurkardtCollectionBased.reciprocal_cdf = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "reciprocal_cdf",
    extendedVersionString : "Default",
    displayName : "Reciprocal CDF Based",
    displayHTML : "y = ln(a/x) / ln(a/b)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.BurkardtCollectionBased.reciprocal_cdf_WithOffset = module.exports.BurkardtCollectionBased.reciprocal_cdf_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "reciprocal_cdf",
    extendedVersionString : "Offset",
    displayName : "Reciprocal CDF Based With Offset",
    displayHTML : "y = ln(a/x) / ln(a/b) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BurkardtCollectionBased.sech_cdf = module.exports.BurkardtCollectionBased.sech_cdf = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "sech_cdf",
    extendedVersionString : "Default",
    displayName : "Sech CDF Based",
    displayHTML : "y = c * atan(exp((x-a)/b))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BurkardtCollectionBased.sech_cdf_WithOffset = module.exports.BurkardtCollectionBased.sech_cdf_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "sech_cdf",
    extendedVersionString : "Offset",
    displayName : "Sech CDF Based With Offset",
    displayHTML : "y = c * atan(exp((x-a)/b)) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BurkardtCollectionBased.weibull_cdf_a = module.exports.BurkardtCollectionBased.weibull_cdf_a = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "weibull_cdf_a",
    extendedVersionString : "Default",
    displayName : "Weibull CDF Based A",
    displayHTML : "y = 1.0 / exp(((x-a)/b)<sup>c</sup>)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BurkardtCollectionBased.weibull_cdf_a_WithOffset = module.exports.BurkardtCollectionBased.weibull_cdf_a_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "weibull_cdf_a",
    extendedVersionString : "Offset",
    displayName : "Weibull CDF Based A With Offset",
    displayHTML : "y = 1.0 / exp(((x-a)/b)<sup>c</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BurkardtCollectionBased.weibull_cdf_b = module.exports.BurkardtCollectionBased.weibull_cdf_b = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "weibull_cdf_b",
    extendedVersionString : "Default",
    displayName : "Weibull CDF Based B",
    displayHTML : "y = d / exp(((x-a)/b)<sup>c</sup>)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.BurkardtCollectionBased.weibull_cdf_b_WithOffset = module.exports.BurkardtCollectionBased.weibull_cdf_b_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "weibull_cdf_b",
    extendedVersionString : "Offset",
    displayName : "Weibull CDF Based B With Offset",
    displayHTML : "y = d / exp(((x-a)/b)<sup>c</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.BurkardtCollectionBased.weibull_pdf = module.exports.BurkardtCollectionBased.weibull_pdf = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "weibull_pdf",
    extendedVersionString : "Default",
    displayName : "Weibull PDF Based",
    displayHTML : "y = (c/b) * ((x-a)/b)<sup>(c-1.0)</sup>  / exp(((x-a)/b)<sup>c</sup>)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.BurkardtCollectionBased.weibull_pdf_WithOffset = module.exports.BurkardtCollectionBased.weibull_pdf_WithOffset = {
    pythonModuleName : "BurkardtCollectionBased",
    pythonClassName : "weibull_pdf",
    extendedVersionString : "Offset",
    displayName : "Weibull PDF Based With Offset",
    displayHTML : "y = (c/b) * ((x-a)/b)<sup>(c-1.0)</sup>  / exp(((x-a)/b)<sup>c</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};


exports.Engineering = module.exports.Engineering = {};

exports.Engineering.DispersionOptical = module.exports.Engineering.DispersionOptical = {
    pythonModuleName : "Engineering",
    pythonClassName : "DispersionOptical",
    extendedVersionString : "Default",
    displayName : "Dispersion Optical",
    displayHTML : "n<sup>2</sup>(x) = A1 + A2*x<sup>2</sup> + A3/x<sup>2</sup> + A4/x<sup>4</sup>",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Engineering.DispersionOpticalSqrt = module.exports.Engineering.DispersionOpticalSqrt = {
    pythonModuleName : "Engineering",
    pythonClassName : "DispersionOpticalSqrt",
    extendedVersionString : "Default",
    displayName : "Dispersion Optical Square Root",
    displayHTML : "n = (A1 + A2*x<sup>2</sup> + A3/x<sup>2</sup> + A4/x<sup>4</sup>)<sup>0.5</sup>",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Engineering.ElectronBeamLithographyPointSpread = module.exports.Engineering.ElectronBeamLithographyPointSpread = {
    pythonModuleName : "Engineering",
    pythonClassName : "ElectronBeamLithographyPointSpread",
    extendedVersionString : "Default",
    displayName : "Electron Beam Lithography Point Spread",
    displayHTML : "y = a*exp(-b*x) + c*exp(-(x-d)<sup>2</sup> / f<sup>2</sup>) + g*exp(-(x-h)<sup>2</sup> / i<sup>2</sup>) + j*exp(-(x-k)<sup>2</sup> / l<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 11
};

exports.Engineering.ElectronBeamLithographyPointSpread_WithOffset = module.exports.Engineering.ElectronBeamLithographyPointSpread_WithOffset = {
    pythonModuleName : "Engineering",
    pythonClassName : "ElectronBeamLithographyPointSpread",
    extendedVersionString : "Offset",
    displayName : "Electron Beam Lithography Point Spread With Offset",
    displayHTML : "y = a*exp(-b*x) + c*exp(-(x-d)<sup>2</sup> / f<sup>2</sup>) + g*exp(-(x-h)<sup>2</sup> / i<sup>2</sup>) + j*exp(-(x-k)<sup>2</sup> / l<sup>2</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 12
};

exports.Engineering.Extended_Steinhart_Hart = module.exports.Engineering.Extended_Steinhart_Hart = {
    pythonModuleName : "Engineering",
    pythonClassName : "Extended_Steinhart_Hart",
    extendedVersionString : "Default",
    displayName : "Extended Steinhart-Hart",
    displayHTML : "1/T = A + Bln(R) + C(ln(R))<sup>2</sup> + D(ln(R))<sup>3</sup>",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Engineering.GraemePatersonElectricMotor = module.exports.Engineering.GraemePatersonElectricMotor = {
    pythonModuleName : "Engineering",
    pythonClassName : "GraemePatersonElectricMotor",
    extendedVersionString : "Default",
    displayName : "Graeme Paterson Electric Motor",
    displayHTML : "y =  A*exp(-b*t)*cos(omega*t + phi) + A2*exp(-b2*t)",
    dimensionality : 2,
    numberOfParameters : 6
};

exports.Engineering.GraemePatersonElectricMotor_WithOffset = module.exports.Engineering.GraemePatersonElectricMotor_WithOffset = {
    pythonModuleName : "Engineering",
    pythonClassName : "GraemePatersonElectricMotor",
    extendedVersionString : "Offset",
    displayName : "Graeme Paterson Electric Motor With Offset",
    displayHTML : "y =  A*exp(-b*t)*cos(omega*t + phi) + A2*exp(-b2*t) + Offset",
    dimensionality : 2,
    numberOfParameters : 7
};

exports.Engineering.KlimpelFlotationA = module.exports.Engineering.KlimpelFlotationA = {
    pythonModuleName : "Engineering",
    pythonClassName : "KlimpelFlotationA",
    extendedVersionString : "Default",
    displayName : "Klimpel Kinetics Flotation A",
    displayHTML : "y = a * (1 - (1 - exp(-b*x)) / (b*x))",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Engineering.KlimpelFlotationA_WithOffset = module.exports.Engineering.KlimpelFlotationA_WithOffset = {
    pythonModuleName : "Engineering",
    pythonClassName : "KlimpelFlotationA",
    extendedVersionString : "Offset",
    displayName : "Klimpel Kinetics Flotation A With Offset",
    displayHTML : "y = a * (1 - (1 - exp(-b*x)) / (b*x)) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Engineering.MaxwellWiechert_1 = module.exports.Engineering.MaxwellWiechert_1 = {
    pythonModuleName : "Engineering",
    pythonClassName : "MaxwellWiechert_1",
    extendedVersionString : "Default",
    displayName : "Maxwell - Wiechert 1",
    displayHTML : "y = a1*exp(-X/Tau1)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Engineering.MaxwellWiechert_1_WithOffset = module.exports.Engineering.MaxwellWiechert_1_WithOffset = {
    pythonModuleName : "Engineering",
    pythonClassName : "MaxwellWiechert_1",
    extendedVersionString : "Offset",
    displayName : "Maxwell - Wiechert 1 With Offset",
    displayHTML : "y = a1*exp(-X/Tau1) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Engineering.MaxwellWiechert_2 = module.exports.Engineering.MaxwellWiechert_2 = {
    pythonModuleName : "Engineering",
    pythonClassName : "MaxwellWiechert_2",
    extendedVersionString : "Default",
    displayName : "Maxwell - Wiechert 2",
    displayHTML : "y = a1*exp(-X/Tau1) + a2*exp(-X/Tau2)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Engineering.MaxwellWiechert_2_WithOffset = module.exports.Engineering.MaxwellWiechert_2_WithOffset = {
    pythonModuleName : "Engineering",
    pythonClassName : "MaxwellWiechert_2",
    extendedVersionString : "Offset",
    displayName : "Maxwell - Wiechert 2 With Offset",
    displayHTML : "y = a1*exp(-X/Tau1) + a2*exp(-X/Tau2) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Engineering.MaxwellWiechert_3 = module.exports.Engineering.MaxwellWiechert_3 = {
    pythonModuleName : "Engineering",
    pythonClassName : "MaxwellWiechert_3",
    extendedVersionString : "Default",
    displayName : "Maxwell - Wiechert 3",
    displayHTML : "y = a1*exp(-X/Tau1) + a2*exp(-X/Tau2) + a3*exp(-X/Tau3)",
    dimensionality : 2,
    numberOfParameters : 6
};

exports.Engineering.MaxwellWiechert_3_WithOffset = module.exports.Engineering.MaxwellWiechert_3_WithOffset = {
    pythonModuleName : "Engineering",
    pythonClassName : "MaxwellWiechert_3",
    extendedVersionString : "Offset",
    displayName : "Maxwell - Wiechert 3 With Offset",
    displayHTML : "y = a1*exp(-X/Tau1) + a2*exp(-X/Tau2) + a3*exp(-X/Tau3) + Offset",
    dimensionality : 2,
    numberOfParameters : 7
};

exports.Engineering.MaxwellWiechert_4 = module.exports.Engineering.MaxwellWiechert_4 = {
    pythonModuleName : "Engineering",
    pythonClassName : "MaxwellWiechert_4",
    extendedVersionString : "Default",
    displayName : "Maxwell - Wiechert 4",
    displayHTML : "y = a1*exp(-X/Tau1) + a2*exp(-X/Tau2) + a3*exp(-X/Tau3) + a4*exp(-X/Tau4)",
    dimensionality : 2,
    numberOfParameters : 8
};

exports.Engineering.MaxwellWiechert_4_WithOffset = module.exports.Engineering.MaxwellWiechert_4_WithOffset = {
    pythonModuleName : "Engineering",
    pythonClassName : "MaxwellWiechert_4",
    extendedVersionString : "Offset",
    displayName : "Maxwell - Wiechert 4 With Offset",
    displayHTML : "y = a1*exp(-X/Tau1) + a2*exp(-X/Tau2) + a3*exp(-X/Tau3) + a4*exp(-X/Tau4) + Offset",
    dimensionality : 2,
    numberOfParameters : 9
};

exports.Engineering.ModifiedArpsWellProduction = module.exports.Engineering.ModifiedArpsWellProduction = {
    pythonModuleName : "Engineering",
    pythonClassName : "ModifiedArpsWellProduction",
    extendedVersionString : "Default",
    displayName : "Modified Arps Well Production",
    displayHTML : "y = (qi_x/((1.0-b_x)*Di_x)) * (1.0-((1.0+b_x*Di_x*x)**(1.0-1.0/b_x)))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Engineering.ModifiedArpsWellProduction_WithOffset = module.exports.Engineering.ModifiedArpsWellProduction_WithOffset = {
    pythonModuleName : "Engineering",
    pythonClassName : "ModifiedArpsWellProduction",
    extendedVersionString : "Offset",
    displayName : "Modified Arps Well Production With Offset",
    displayHTML : "y = (qi_x/((1.0-b_x)*Di_x)) * (1.0-((1.0+b_x*Di_x*x)**(1.0-1.0/b_x))) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Engineering.Ramberg_Osgood = module.exports.Engineering.Ramberg_Osgood = {
    pythonModuleName : "Engineering",
    pythonClassName : "Ramberg_Osgood",
    extendedVersionString : "Default",
    displayName : "Ramberg-Osgood",
    displayHTML : "y = (Stress / Youngs_Modulus) + (Stress/K)<sup>(1.0/n)</sup>",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Engineering.Ramberg_Osgood_WithOffset = module.exports.Engineering.Ramberg_Osgood_WithOffset = {
    pythonModuleName : "Engineering",
    pythonClassName : "Ramberg_Osgood",
    extendedVersionString : "Offset",
    displayName : "Ramberg-Osgood With Offset",
    displayHTML : "y = (Stress / Youngs_Modulus) + (Stress/K)<sup>(1.0/n)</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Engineering.Reciprocal_Extended_Steinhart_Hart = module.exports.Engineering.Reciprocal_Extended_Steinhart_Hart = {
    pythonModuleName : "Engineering",
    pythonClassName : "Reciprocal_Extended_Steinhart_Hart",
    extendedVersionString : "Default",
    displayName : "Reciprocal Extended Steinhart-Hart",
    displayHTML : "T = 1.0 / (A + Bln(R) + C(ln(R))<sup>2</sup> + D(ln(R))<sup>3</sup>)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Engineering.Reciprocal_Extended_Steinhart_Hart_WithOffset = module.exports.Engineering.Reciprocal_Extended_Steinhart_Hart_WithOffset = {
    pythonModuleName : "Engineering",
    pythonClassName : "Reciprocal_Extended_Steinhart_Hart",
    extendedVersionString : "Offset",
    displayName : "Reciprocal Extended Steinhart-Hart With Offset",
    displayHTML : "T = 1.0 / (A + Bln(R) + C(ln(R))<sup>2</sup> + D(ln(R))<sup>3</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Engineering.Reciprocal_Steinhart_Hart = module.exports.Engineering.Reciprocal_Steinhart_Hart = {
    pythonModuleName : "Engineering",
    pythonClassName : "Reciprocal_Steinhart_Hart",
    extendedVersionString : "Default",
    displayName : "Reciprocal Steinhart-Hart",
    displayHTML : "T = 1.0 / (A + Bln(R) + C(ln(R))<sup>3</sup>)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Engineering.Reciprocal_Steinhart_Hart_WithOffset = module.exports.Engineering.Reciprocal_Steinhart_Hart_WithOffset = {
    pythonModuleName : "Engineering",
    pythonClassName : "Reciprocal_Steinhart_Hart",
    extendedVersionString : "Offset",
    displayName : "Reciprocal Steinhart-Hart With Offset",
    displayHTML : "T = 1.0 / (A + Bln(R) + C(ln(R))<sup>3</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Engineering.SellmeierOptical = module.exports.Engineering.SellmeierOptical = {
    pythonModuleName : "Engineering",
    pythonClassName : "SellmeierOptical",
    extendedVersionString : "Default",
    displayName : "Sellmeier Optical",
    displayHTML : "n<sup>2</sup>(x) = 1 + (B1 x<sup>2</sup>)/(x<sup>2</sup>-C1) + (B2 x<sup>2</sup>)/(x<sup>2</sup>-C2) + (B3 x<sup>2</sup>)/(x<sup>2</sup>-C3)",
    dimensionality : 2,
    numberOfParameters : 6
};

exports.Engineering.SellmeierOptical_WithOffset = module.exports.Engineering.SellmeierOptical_WithOffset = {
    pythonModuleName : "Engineering",
    pythonClassName : "SellmeierOptical",
    extendedVersionString : "Offset",
    displayName : "Sellmeier Optical With Offset",
    displayHTML : "n<sup>2</sup>(x) = 1 + (B1 x<sup>2</sup>)/(x<sup>2</sup>-C1) + (B2 x<sup>2</sup>)/(x<sup>2</sup>-C2) + (B3 x<sup>2</sup>)/(x<sup>2</sup>-C3) + Offset",
    dimensionality : 2,
    numberOfParameters : 7
};

exports.Engineering.SellmeierOpticalSqrt = module.exports.Engineering.SellmeierOpticalSqrt = {
    pythonModuleName : "Engineering",
    pythonClassName : "SellmeierOpticalSqrt",
    extendedVersionString : "Default",
    displayName : "Sellmeier Optical Square Root",
    displayHTML : "n = (1 + (B1 x<sup>2</sup>)/(x<sup>2</sup>-C1) + (B2 x<sup>2</sup>)/(x<sup>2</sup>-C2) + (B3 x<sup>2</sup>)/(x<sup>2</sup>-C3))<sup>0.5</sup>",
    dimensionality : 2,
    numberOfParameters : 6
};

exports.Engineering.SellmeierOpticalSqrt_WithOffset = module.exports.Engineering.SellmeierOpticalSqrt_WithOffset = {
    pythonModuleName : "Engineering",
    pythonClassName : "SellmeierOpticalSqrt",
    extendedVersionString : "Offset",
    displayName : "Sellmeier Optical Square Root With Offset",
    displayHTML : "n = (1 + (B1 x<sup>2</sup>)/(x<sup>2</sup>-C1) + (B2 x<sup>2</sup>)/(x<sup>2</sup>-C2) + (B3 x<sup>2</sup>)/(x<sup>2</sup>-C3))<sup>0.5</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 7
};

exports.Engineering.Steinhart_Hart = module.exports.Engineering.Steinhart_Hart = {
    pythonModuleName : "Engineering",
    pythonClassName : "Steinhart_Hart",
    extendedVersionString : "Default",
    displayName : "Steinhart-Hart",
    displayHTML : "1/T = A + Bln(R) + C(ln(R))<sup>3</sup>",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Engineering.VanDeemterChromatography = module.exports.Engineering.VanDeemterChromatography = {
    pythonModuleName : "Engineering",
    pythonClassName : "VanDeemterChromatography",
    extendedVersionString : "Default",
    displayName : "VanDeemter Chromatography",
    displayHTML : "y = a + b/x + cx",
    dimensionality : 2,
    numberOfParameters : 3
};


exports.Exponential = module.exports.Exponential = {};

exports.Exponential.AsymptoticExponentialA = module.exports.Exponential.AsymptoticExponentialA = {
    pythonModuleName : "Exponential",
    pythonClassName : "AsymptoticExponentialA",
    extendedVersionString : "Default",
    displayName : "Asymptotic Exponential A",
    displayHTML : "y = 1.0 - a<sup>x</sup>",
    dimensionality : 2,
    numberOfParameters : 1
};

exports.Exponential.AsymptoticExponentialA_WithOffset = module.exports.Exponential.AsymptoticExponentialA_WithOffset = {
    pythonModuleName : "Exponential",
    pythonClassName : "AsymptoticExponentialA",
    extendedVersionString : "Offset",
    displayName : "Asymptotic Exponential A With Offset",
    displayHTML : "y = 1.0 - a<sup>x</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Exponential.AsymptoticExponentialA_Transform = module.exports.Exponential.AsymptoticExponentialA_Transform = {
    pythonModuleName : "Exponential",
    pythonClassName : "AsymptoticExponentialA_Transform",
    extendedVersionString : "Default",
    displayName : "Asymptotic Exponential A Transform",
    displayHTML : "y = 1.0 - a<sup>bx + c</sup>",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Exponential.AsymptoticExponentialA_Transform_WithOffset = module.exports.Exponential.AsymptoticExponentialA_Transform_WithOffset = {
    pythonModuleName : "Exponential",
    pythonClassName : "AsymptoticExponentialA_Transform",
    extendedVersionString : "Offset",
    displayName : "Asymptotic Exponential A Transform With Offset",
    displayHTML : "y = 1.0 - a<sup>bx + c</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Exponential.AsymptoticExponentialB = module.exports.Exponential.AsymptoticExponentialB = {
    pythonModuleName : "Exponential",
    pythonClassName : "AsymptoticExponentialB",
    extendedVersionString : "Default",
    displayName : "Asymptotic Exponential B",
    displayHTML : "y = a * (1.0 - exp(bx))",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Exponential.AsymptoticExponentialB_WithOffset = module.exports.Exponential.AsymptoticExponentialB_WithOffset = {
    pythonModuleName : "Exponential",
    pythonClassName : "AsymptoticExponentialB",
    extendedVersionString : "Offset",
    displayName : "Asymptotic Exponential B With Offset",
    displayHTML : "y = a * (1.0 - exp(bx)) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Exponential.BrunoTorremansQuadrupleExponential = module.exports.Exponential.BrunoTorremansQuadrupleExponential = {
    pythonModuleName : "Exponential",
    pythonClassName : "BrunoTorremansQuadrupleExponential",
    extendedVersionString : "Default",
    displayName : "Bruno Torremans Quadruple Exponential",
    displayHTML : "y = Offset - R1 * exp(-x/T1) + R2 * exp(-x/T2) + R3 * exp(-x/T3) + R4 * exp(-x/T4)",
    dimensionality : 2,
    numberOfParameters : 9
};

exports.Exponential.DoubleAsymptoticExponentialB = module.exports.Exponential.DoubleAsymptoticExponentialB = {
    pythonModuleName : "Exponential",
    pythonClassName : "DoubleAsymptoticExponentialB",
    extendedVersionString : "Default",
    displayName : "Double Asymptotic Exponential B",
    displayHTML : "y = a * (1.0 - exp(bx)) + c * (1.0 - exp(dx))",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Exponential.DoubleAsymptoticExponentialB_WithOffset = module.exports.Exponential.DoubleAsymptoticExponentialB_WithOffset = {
    pythonModuleName : "Exponential",
    pythonClassName : "DoubleAsymptoticExponentialB",
    extendedVersionString : "Offset",
    displayName : "Double Asymptotic Exponential B With Offset",
    displayHTML : "y = a * (1.0 - exp(bx)) + c * (1.0 - exp(dx)) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Exponential.DoubleExponential = module.exports.Exponential.DoubleExponential = {
    pythonModuleName : "Exponential",
    pythonClassName : "DoubleExponential",
    extendedVersionString : "Default",
    displayName : "Double Exponential",
    displayHTML : "y = a * exp(bx) + c * exp(dx)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Exponential.DoubleExponential_WithOffset = module.exports.Exponential.DoubleExponential_WithOffset = {
    pythonModuleName : "Exponential",
    pythonClassName : "DoubleExponential",
    extendedVersionString : "Offset",
    displayName : "Double Exponential With Offset",
    displayHTML : "y = a * exp(bx) + c * exp(dx) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Exponential.Exponential = module.exports.Exponential.Exponential = {
    pythonModuleName : "Exponential",
    pythonClassName : "Exponential",
    extendedVersionString : "Default",
    displayName : "Exponential",
    displayHTML : "y = a * exp(bx)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Exponential.Exponential_WithOffset = module.exports.Exponential.Exponential_WithOffset = {
    pythonModuleName : "Exponential",
    pythonClassName : "Exponential",
    extendedVersionString : "Offset",
    displayName : "Exponential With Offset",
    displayHTML : "y = a * exp(bx) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Exponential.Hocket_Sherby = module.exports.Exponential.Hocket_Sherby = {
    pythonModuleName : "Exponential",
    pythonClassName : "Hocket_Sherby",
    extendedVersionString : "Default",
    displayName : "Hocket-Sherby",
    displayHTML : "y = b - (b-a) * exp(-c * (x<sup>d</sup>))",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Exponential.Hoerl = module.exports.Exponential.Hoerl = {
    pythonModuleName : "Exponential",
    pythonClassName : "Hoerl",
    extendedVersionString : "Default",
    displayName : "Hoerl",
    displayHTML : "y = x<sup>a</sup> * exp(x)",
    dimensionality : 2,
    numberOfParameters : 1
};

exports.Exponential.Hoerl_WithOffset = module.exports.Exponential.Hoerl_WithOffset = {
    pythonModuleName : "Exponential",
    pythonClassName : "Hoerl",
    extendedVersionString : "Offset",
    displayName : "Hoerl With Offset",
    displayHTML : "y = x<sup>a</sup> * exp(x) + Offset",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Exponential.Hoerl_Transform = module.exports.Exponential.Hoerl_Transform = {
    pythonModuleName : "Exponential",
    pythonClassName : "Hoerl_Transform",
    extendedVersionString : "Default",
    displayName : "Hoerl Transform",
    displayHTML : "y = (bx + c)<sup>a</sup> * exp(bx + c)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Exponential.Hoerl_Transform_WithOffset = module.exports.Exponential.Hoerl_Transform_WithOffset = {
    pythonModuleName : "Exponential",
    pythonClassName : "Hoerl_Transform",
    extendedVersionString : "Offset",
    displayName : "Hoerl Transform With Offset",
    displayHTML : "y = (bx + c)<sup>a</sup> * exp(bx + c) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Exponential.InvExponential = module.exports.Exponential.InvExponential = {
    pythonModuleName : "Exponential",
    pythonClassName : "InvExponential",
    extendedVersionString : "Default",
    displayName : "Inverted Exponential",
    displayHTML : "y = a * exp(b/x)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Exponential.InvExponential_WithOffset = module.exports.Exponential.InvExponential_WithOffset = {
    pythonModuleName : "Exponential",
    pythonClassName : "InvExponential",
    extendedVersionString : "Offset",
    displayName : "Inverted Exponential With Offset",
    displayHTML : "y = a * exp(b/x) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Exponential.InvertedOffsetExponential = module.exports.Exponential.InvertedOffsetExponential = {
    pythonModuleName : "Exponential",
    pythonClassName : "InvertedOffsetExponential",
    extendedVersionString : "Default",
    displayName : "Inverted Offset Exponential",
    displayHTML : "y = a * exp(b/(x+c))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Exponential.InvertedOffsetExponential_WithOffset = module.exports.Exponential.InvertedOffsetExponential_WithOffset = {
    pythonModuleName : "Exponential",
    pythonClassName : "InvertedOffsetExponential",
    extendedVersionString : "Offset",
    displayName : "Inverted Offset Exponential With Offset",
    displayHTML : "y = a * exp(b/(x+c)) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Exponential.JonathanLitzCustomExponential = module.exports.Exponential.JonathanLitzCustomExponential = {
    pythonModuleName : "Exponential",
    pythonClassName : "JonathanLitzCustomExponential",
    extendedVersionString : "Default",
    displayName : "Jonathan Litz Custom Exponential",
    displayHTML : "y = a + b * x + c * exp(-d * x) - c * x * exp(-d * x)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Exponential.LakeNganokeSamplesExponential = module.exports.Exponential.LakeNganokeSamplesExponential = {
    pythonModuleName : "Exponential",
    pythonClassName : "LakeNganokeSamplesExponential",
    extendedVersionString : "Default",
    displayName : "Lake Nganoke Samples Exponential",
    displayHTML : "y = C/(1.0 + exp((x-A)/B)) + D * exp((x-B)/E)",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Exponential.LakeNganokeSamplesExponential_WithOffset = module.exports.Exponential.LakeNganokeSamplesExponential_WithOffset = {
    pythonModuleName : "Exponential",
    pythonClassName : "LakeNganokeSamplesExponential",
    extendedVersionString : "Offset",
    displayName : "Lake Nganoke Samples Exponential With Offset",
    displayHTML : "y = C/(1.0 + exp((x-A)/B)) + D * exp((x-B)/E) + Offset",
    dimensionality : 2,
    numberOfParameters : 6
};

exports.Exponential.OffsetExponential = module.exports.Exponential.OffsetExponential = {
    pythonModuleName : "Exponential",
    pythonClassName : "OffsetExponential",
    extendedVersionString : "Default",
    displayName : "Offset Exponential",
    displayHTML : "y = a * exp(bx + c)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Exponential.OffsetExponential_WithOffset = module.exports.Exponential.OffsetExponential_WithOffset = {
    pythonModuleName : "Exponential",
    pythonClassName : "OffsetExponential",
    extendedVersionString : "Offset",
    displayName : "Offset Exponential With Offset",
    displayHTML : "y = a * exp(bx + c) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Exponential.ScaledExponential = module.exports.Exponential.ScaledExponential = {
    pythonModuleName : "Exponential",
    pythonClassName : "ScaledExponential",
    extendedVersionString : "Default",
    displayName : "Scaled Exponential",
    displayHTML : "y = a * exp(x)",
    dimensionality : 2,
    numberOfParameters : 1
};

exports.Exponential.ScaledExponential_WithOffset = module.exports.Exponential.ScaledExponential_WithOffset = {
    pythonModuleName : "Exponential",
    pythonClassName : "ScaledExponential",
    extendedVersionString : "Offset",
    displayName : "Scaled Exponential With Offset",
    displayHTML : "y = a * exp(x) + Offset",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Exponential.ShiftedExponential = module.exports.Exponential.ShiftedExponential = {
    pythonModuleName : "Exponential",
    pythonClassName : "ShiftedExponential",
    extendedVersionString : "Default",
    displayName : "Shifted Exponential",
    displayHTML : "y = a * exp(x + b)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Exponential.ShiftedExponential_WithOffset = module.exports.Exponential.ShiftedExponential_WithOffset = {
    pythonModuleName : "Exponential",
    pythonClassName : "ShiftedExponential",
    extendedVersionString : "Offset",
    displayName : "Shifted Exponential With Offset",
    displayHTML : "y = a * exp(x + b) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Exponential.SimpleExponential = module.exports.Exponential.SimpleExponential = {
    pythonModuleName : "Exponential",
    pythonClassName : "SimpleExponential",
    extendedVersionString : "Default",
    displayName : "Simple Exponential",
    displayHTML : "y = a<sup>x</sup>",
    dimensionality : 2,
    numberOfParameters : 1
};

exports.Exponential.SimpleExponential_WithOffset = module.exports.Exponential.SimpleExponential_WithOffset = {
    pythonModuleName : "Exponential",
    pythonClassName : "SimpleExponential",
    extendedVersionString : "Offset",
    displayName : "Simple Exponential With Offset",
    displayHTML : "y = a<sup>x</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Exponential.SteveBattisonExponentialA = module.exports.Exponential.SteveBattisonExponentialA = {
    pythonModuleName : "Exponential",
    pythonClassName : "SteveBattisonExponentialA",
    extendedVersionString : "Default",
    displayName : "Steve Battison Exponential A",
    displayHTML : "y = exp((a + bx) / (c + dx))",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Exponential.SteveBattisonExponentialA_WithOffset = module.exports.Exponential.SteveBattisonExponentialA_WithOffset = {
    pythonModuleName : "Exponential",
    pythonClassName : "SteveBattisonExponentialA",
    extendedVersionString : "Offset",
    displayName : "Steve Battison Exponential A With Offset",
    displayHTML : "y = exp((a + bx) / (c + dx)) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Exponential.SteveBattisonExponentialB = module.exports.Exponential.SteveBattisonExponentialB = {
    pythonModuleName : "Exponential",
    pythonClassName : "SteveBattisonExponentialB",
    extendedVersionString : "Default",
    displayName : "Steve Battison Exponential B",
    displayHTML : "y = a * exp((b + cx) / (d + fx))",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Exponential.SteveBattisonExponentialB_WithOffset = module.exports.Exponential.SteveBattisonExponentialB_WithOffset = {
    pythonModuleName : "Exponential",
    pythonClassName : "SteveBattisonExponentialB",
    extendedVersionString : "Offset",
    displayName : "Steve Battison Exponential B With Offset",
    displayHTML : "y = a * exp((b + cx) / (d + fx)) + Offset",
    dimensionality : 2,
    numberOfParameters : 6
};

exports.Exponential.Stirling = module.exports.Exponential.Stirling = {
    pythonModuleName : "Exponential",
    pythonClassName : "Stirling",
    extendedVersionString : "Default",
    displayName : "Stirling",
    displayHTML : "y = a * (exp(bx) - 1.0) / b",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Exponential.Stirling_WithOffset = module.exports.Exponential.Stirling_WithOffset = {
    pythonModuleName : "Exponential",
    pythonClassName : "Stirling",
    extendedVersionString : "Offset",
    displayName : "Stirling With Offset",
    displayHTML : "y = a * (exp(bx) - 1.0) / b + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Exponential.TripleExponential = module.exports.Exponential.TripleExponential = {
    pythonModuleName : "Exponential",
    pythonClassName : "TripleExponential",
    extendedVersionString : "Default",
    displayName : "Triple Exponential",
    displayHTML : "y = a * exp(bx) + c * exp(dx) + f * exp(gx)",
    dimensionality : 2,
    numberOfParameters : 6
};

exports.Exponential.TripleExponential_WithOffset = module.exports.Exponential.TripleExponential_WithOffset = {
    pythonModuleName : "Exponential",
    pythonClassName : "TripleExponential",
    extendedVersionString : "Offset",
    displayName : "Triple Exponential With Offset",
    displayHTML : "y = a * exp(bx) + c * exp(dx) + f * exp(gx) + Offset",
    dimensionality : 2,
    numberOfParameters : 7
};

exports.Exponential.VaporPressure = module.exports.Exponential.VaporPressure = {
    pythonModuleName : "Exponential",
    pythonClassName : "VaporPressure",
    extendedVersionString : "Default",
    displayName : "Standard Vapor Pressure",
    displayHTML : "y = exp(a + (b/x) + c*ln(x))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Exponential.VaporPressure_WithOffset = module.exports.Exponential.VaporPressure_WithOffset = {
    pythonModuleName : "Exponential",
    pythonClassName : "VaporPressure",
    extendedVersionString : "Offset",
    displayName : "Standard Vapor Pressure With Offset",
    displayHTML : "y = exp(a + (b/x) + c*ln(x)) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};


exports.FourierSeries = module.exports.FourierSeries = {};

exports.FourierSeries.ScaledX_1Term = module.exports.FourierSeries.ScaledX_1Term = {
    pythonModuleName : "FourierSeries",
    pythonClassName : "ScaledX_1Term",
    extendedVersionString : "Default",
    displayName : "1 Term (Scaled X)",
    displayHTML : "y = a0 + a1*sin(c1*x)+b1*cos(c1*x)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.FourierSeries.Standard_1Term = module.exports.FourierSeries.Standard_1Term = {
    pythonModuleName : "FourierSeries",
    pythonClassName : "Standard_1Term",
    extendedVersionString : "Default",
    displayName : "1 Term Standard",
    displayHTML : "y = a0 + a1*sin(x)+b1*cos(x)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.FourierSeries.Standard_2Term = module.exports.FourierSeries.Standard_2Term = {
    pythonModuleName : "FourierSeries",
    pythonClassName : "Standard_2Term",
    extendedVersionString : "Default",
    displayName : "2 Term Standard",
    displayHTML : "y = a0 + a1*sin(x)+b1*cos(x) + a2*sin(2x)+b2*cos(2x)",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.FourierSeries.Standard_3Term = module.exports.FourierSeries.Standard_3Term = {
    pythonModuleName : "FourierSeries",
    pythonClassName : "Standard_3Term",
    extendedVersionString : "Default",
    displayName : "3 Term Standard",
    displayHTML : "y = a0 + a1*sin(x)+b1*cos(x) + a2*sin(2x)+b2*cos(2x) + a3*sin(3x)+b3*cos(3x)",
    dimensionality : 2,
    numberOfParameters : 7
};

exports.FourierSeries.Standard_4Term = module.exports.FourierSeries.Standard_4Term = {
    pythonModuleName : "FourierSeries",
    pythonClassName : "Standard_4Term",
    extendedVersionString : "Default",
    displayName : "4 Term Standard",
    displayHTML : "y = a0 + a1*sin(x)+b1*cos(x) + a2*sin(2x)+b2*cos(2x) + a3*sin(3x)+b3*cos(3x) + a4*sin(4x)+b4*cos(4x)",
    dimensionality : 2,
    numberOfParameters : 9
};


exports.LegendrePolynomial = module.exports.LegendrePolynomial = {};

exports.LegendrePolynomial.EighthDegreeLegendrePolynomial = module.exports.LegendrePolynomial.EighthDegreeLegendrePolynomial = {
    pythonModuleName : "LegendrePolynomial",
    pythonClassName : "EighthDegreeLegendrePolynomial",
    extendedVersionString : "Default",
    displayName : "Legendre Polynomial G - Eighth Degree",
    displayHTML : "y = a + bx + cP<sub>2</sub> + dP<sub>3</sub> + fP<sub>4</sub> + gP<sub>5</sub> + hP<sub>6</sub> + iP<sub>7</sub> + jP<sub>8</sub>",
    dimensionality : 2,
    numberOfParameters : 9
};

exports.LegendrePolynomial.FifthDegreeLegendrePolynomial = module.exports.LegendrePolynomial.FifthDegreeLegendrePolynomial = {
    pythonModuleName : "LegendrePolynomial",
    pythonClassName : "FifthDegreeLegendrePolynomial",
    extendedVersionString : "Default",
    displayName : "Legendre Polynomial D - Fifth Degree",
    displayHTML : "y = a + bx + cP<sub>2</sub> + dP<sub>3</sub> + fP<sub>4</sub> + gP<sub>5</sub>",
    dimensionality : 2,
    numberOfParameters : 6
};

exports.LegendrePolynomial.FourthDegreeLegendrePolynomial = module.exports.LegendrePolynomial.FourthDegreeLegendrePolynomial = {
    pythonModuleName : "LegendrePolynomial",
    pythonClassName : "FourthDegreeLegendrePolynomial",
    extendedVersionString : "Default",
    displayName : "Legendre Polynomial C - Fourth Degree",
    displayHTML : "y = a + bx + cP<sub>2</sub> + dP<sub>3</sub> + fP<sub>4</sub>",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.LegendrePolynomial.GammaRayAngularDistributionDegreesA = module.exports.LegendrePolynomial.GammaRayAngularDistributionDegreesA = {
    pythonModuleName : "LegendrePolynomial",
    pythonClassName : "GammaRayAngularDistributionDegreesA",
    extendedVersionString : "Default",
    displayName : "Gamma Ray Angular Distribution (degrees) A",
    displayHTML : "y = A0 + A2 * P<sub>2</sub>(cos(theta))",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.LegendrePolynomial.GammaRayAngularDistributionDegreesB = module.exports.LegendrePolynomial.GammaRayAngularDistributionDegreesB = {
    pythonModuleName : "LegendrePolynomial",
    pythonClassName : "GammaRayAngularDistributionDegreesB",
    extendedVersionString : "Default",
    displayName : "Gamma Ray Angular Distribution (degrees) B",
    displayHTML : "y = A0 + A2 * P<sub>2</sub>(cos(theta)) + A4 * P<sub>4</sub>(cos(theta))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.LegendrePolynomial.GammaRayAngularDistributionRadiansA = module.exports.LegendrePolynomial.GammaRayAngularDistributionRadiansA = {
    pythonModuleName : "LegendrePolynomial",
    pythonClassName : "GammaRayAngularDistributionRadiansA",
    extendedVersionString : "Default",
    displayName : "Gamma Ray Angular Distribution (radians) A",
    displayHTML : "y = A0 + A2 * P<sub>2</sub>(cos(theta))",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.LegendrePolynomial.GammaRayAngularDistributionRadiansB = module.exports.LegendrePolynomial.GammaRayAngularDistributionRadiansB = {
    pythonModuleName : "LegendrePolynomial",
    pythonClassName : "GammaRayAngularDistributionRadiansB",
    extendedVersionString : "Default",
    displayName : "Gamma Ray Angular Distribution (radians) B",
    displayHTML : "y = A0 + A2 * P<sub>2</sub>(cos(theta)) + A4 * P<sub>4</sub>(cos(theta))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.LegendrePolynomial.NinthDegreeLegendrePolynomial = module.exports.LegendrePolynomial.NinthDegreeLegendrePolynomial = {
    pythonModuleName : "LegendrePolynomial",
    pythonClassName : "NinthDegreeLegendrePolynomial",
    extendedVersionString : "Default",
    displayName : "Legendre Polynomial H - Ninth Degree",
    displayHTML : "y = a + bx + cP<sub>2</sub> + dP<sub>3</sub> + fP<sub>4</sub> + gP<sub>5</sub> + hP<sub>6</sub> + iP<sub>7</sub> + jP<sub>8</sub> + kP<sub>9</sub>",
    dimensionality : 2,
    numberOfParameters : 10
};

exports.LegendrePolynomial.SecondDegreeLegendrePolynomial = module.exports.LegendrePolynomial.SecondDegreeLegendrePolynomial = {
    pythonModuleName : "LegendrePolynomial",
    pythonClassName : "SecondDegreeLegendrePolynomial",
    extendedVersionString : "Default",
    displayName : "Legendre Polynomial A - Second Degree",
    displayHTML : "y = a + bx + cP<sub>2</sub>",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.LegendrePolynomial.SeventhDegreeLegendrePolynomial = module.exports.LegendrePolynomial.SeventhDegreeLegendrePolynomial = {
    pythonModuleName : "LegendrePolynomial",
    pythonClassName : "SeventhDegreeLegendrePolynomial",
    extendedVersionString : "Default",
    displayName : "Legendre Polynomial F - Seventh Degree",
    displayHTML : "y = a + bx + cP<sub>2</sub> + dP<sub>3</sub> + fP<sub>4</sub> + gP<sub>5</sub> + hP<sub>6</sub> + iP<sub>7</sub>",
    dimensionality : 2,
    numberOfParameters : 8
};

exports.LegendrePolynomial.SixthDegreeLegendrePolynomial = module.exports.LegendrePolynomial.SixthDegreeLegendrePolynomial = {
    pythonModuleName : "LegendrePolynomial",
    pythonClassName : "SixthDegreeLegendrePolynomial",
    extendedVersionString : "Default",
    displayName : "Legendre Polynomial E - Sixth Degree",
    displayHTML : "y = a + bx + cP<sub>2</sub> + dP<sub>3</sub> + fP<sub>4</sub> + gP<sub>5</sub> + hP<sub>6</sub>",
    dimensionality : 2,
    numberOfParameters : 7
};

exports.LegendrePolynomial.TenthDegreeLegendrePolynomial = module.exports.LegendrePolynomial.TenthDegreeLegendrePolynomial = {
    pythonModuleName : "LegendrePolynomial",
    pythonClassName : "TenthDegreeLegendrePolynomial",
    extendedVersionString : "Default",
    displayName : "Legendre Polynomial I - Tenth Degree",
    displayHTML : "y = a + bx + cP<sub>2</sub> + dP<sub>3</sub> + fP<sub>4</sub> + gP<sub>5</sub> + hP<sub>6</sub> + iP<sub>7</sub> + jP<sub>8</sub> + kP<sub>9</sub> + mP<sub>10</sub>",
    dimensionality : 2,
    numberOfParameters : 11
};

exports.LegendrePolynomial.ThirdDegreeLegendrePolynomial = module.exports.LegendrePolynomial.ThirdDegreeLegendrePolynomial = {
    pythonModuleName : "LegendrePolynomial",
    pythonClassName : "ThirdDegreeLegendrePolynomial",
    extendedVersionString : "Default",
    displayName : "Legendre Polynomial B - Third Degree",
    displayHTML : "y = a + bx + cP<sub>2</sub> + dP<sub>3</sub>",
    dimensionality : 2,
    numberOfParameters : 4
};


exports.Logarithmic = module.exports.Logarithmic = {};

exports.Logarithmic.Base10Logarithmic = module.exports.Logarithmic.Base10Logarithmic = {
    pythonModuleName : "Logarithmic",
    pythonClassName : "Base10Logarithmic",
    extendedVersionString : "Default",
    displayName : "Base 10 Logarithmic",
    displayHTML : "y = a + b*log<sub>10</sub>(x)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Logarithmic.Bradley = module.exports.Logarithmic.Bradley = {
    pythonModuleName : "Logarithmic",
    pythonClassName : "Bradley",
    extendedVersionString : "Default",
    displayName : "Bradley",
    displayHTML : "y = a * ln(-b * ln(x))",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Logarithmic.Bradley_WithOffset = module.exports.Logarithmic.Bradley_WithOffset = {
    pythonModuleName : "Logarithmic",
    pythonClassName : "Bradley",
    extendedVersionString : "Offset",
    displayName : "Bradley With Offset",
    displayHTML : "y = a * ln(-b * ln(x)) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Logarithmic.BradleyTransform = module.exports.Logarithmic.BradleyTransform = {
    pythonModuleName : "Logarithmic",
    pythonClassName : "BradleyTransform",
    extendedVersionString : "Default",
    displayName : "Bradley Transform",
    displayHTML : "y = a * ln(-b * ln(cx + d))",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Logarithmic.BradleyTransform_WithOffset = module.exports.Logarithmic.BradleyTransform_WithOffset = {
    pythonModuleName : "Logarithmic",
    pythonClassName : "BradleyTransform",
    extendedVersionString : "Offset",
    displayName : "Bradley Transform With Offset",
    displayHTML : "y = a * ln(-b * ln(cx + d)) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Logarithmic.CrystalResonatorAgeing = module.exports.Logarithmic.CrystalResonatorAgeing = {
    pythonModuleName : "Logarithmic",
    pythonClassName : "CrystalResonatorAgeing",
    extendedVersionString : "Default",
    displayName : "Crystal Resonator Ageing MIL-PRF-55310E",
    displayHTML : "y = A(ln(Bt + 1)) + f0",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Logarithmic.CubicLogarithmic = module.exports.Logarithmic.CubicLogarithmic = {
    pythonModuleName : "Logarithmic",
    pythonClassName : "CubicLogarithmic",
    extendedVersionString : "Default",
    displayName : "Cubic Logarithmic",
    displayHTML : "y = a + b*ln(x) + c*ln(x)<sup>2</sup> + d*ln(x)<sup>3</sup>",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Logarithmic.CubicLogarithmicScaled = module.exports.Logarithmic.CubicLogarithmicScaled = {
    pythonModuleName : "Logarithmic",
    pythonClassName : "CubicLogarithmicScaled",
    extendedVersionString : "Default",
    displayName : "Cubic Logarithmic Scaled",
    displayHTML : "y = a + b*ln(f*x) + c*ln(f*x)<sup>2</sup> + d*ln(f*x)<sup>3</sup>",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Logarithmic.CubicLogarithmicTransform = module.exports.Logarithmic.CubicLogarithmicTransform = {
    pythonModuleName : "Logarithmic",
    pythonClassName : "CubicLogarithmicTransform",
    extendedVersionString : "Default",
    displayName : "Cubic Logarithmic Transform",
    displayHTML : "y = a + b*ln(f*x+g) + c*ln(f*x+g)<sup>2</sup> + d*ln(f*x+g)<sup>3</sup>",
    dimensionality : 2,
    numberOfParameters : 6
};

exports.Logarithmic.LinearLogarithmic = module.exports.Logarithmic.LinearLogarithmic = {
    pythonModuleName : "Logarithmic",
    pythonClassName : "LinearLogarithmic",
    extendedVersionString : "Default",
    displayName : "Linear Logarithmic",
    displayHTML : "y = a + b*ln(x)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Logarithmic.LinearLogarithmicScaled = module.exports.Logarithmic.LinearLogarithmicScaled = {
    pythonModuleName : "Logarithmic",
    pythonClassName : "LinearLogarithmicScaled",
    extendedVersionString : "Default",
    displayName : "Linear Logarithmic Scaled",
    displayHTML : "y = a + b*ln(cx)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Logarithmic.LinearLogarithmicShifted = module.exports.Logarithmic.LinearLogarithmicShifted = {
    pythonModuleName : "Logarithmic",
    pythonClassName : "LinearLogarithmicShifted",
    extendedVersionString : "Default",
    displayName : "Linear Logarithmic Shifted",
    displayHTML : "y = a + b*ln(c+x)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Logarithmic.LinearLogarithmicTransform = module.exports.Logarithmic.LinearLogarithmicTransform = {
    pythonModuleName : "Logarithmic",
    pythonClassName : "LinearLogarithmicTransform",
    extendedVersionString : "Default",
    displayName : "Linear Logarithmic Transform",
    displayHTML : "y = a + b*ln(cx+d)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Logarithmic.QuadraticLogarithmic = module.exports.Logarithmic.QuadraticLogarithmic = {
    pythonModuleName : "Logarithmic",
    pythonClassName : "QuadraticLogarithmic",
    extendedVersionString : "Default",
    displayName : "Quadratic Logarithmic",
    displayHTML : "y = a + b*ln(x) + c*ln(x)<sup>2</sup>",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Logarithmic.QuadraticLogarithmicScaled = module.exports.Logarithmic.QuadraticLogarithmicScaled = {
    pythonModuleName : "Logarithmic",
    pythonClassName : "QuadraticLogarithmicScaled",
    extendedVersionString : "Default",
    displayName : "Quadratic Logarithmic Scaled",
    displayHTML : "y = a + b*ln(dx) + c*ln(dx)<sup>2</sup>",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Logarithmic.QuadraticLogarithmicTransform = module.exports.Logarithmic.QuadraticLogarithmicTransform = {
    pythonModuleName : "Logarithmic",
    pythonClassName : "QuadraticLogarithmicTransform",
    extendedVersionString : "Default",
    displayName : "Quadratic Logarithmic Transform",
    displayHTML : "y = a + b*ln(dx+f) + c*ln(dx+f)<sup>2</sup>",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Logarithmic.QuarticLogarithmic = module.exports.Logarithmic.QuarticLogarithmic = {
    pythonModuleName : "Logarithmic",
    pythonClassName : "QuarticLogarithmic",
    extendedVersionString : "Default",
    displayName : "Quartic Logarithmic",
    displayHTML : "y = a + b*ln(x) + c*ln(x)<sup>2</sup> + d*ln(x)<sup>3</sup> + f*ln(x)<sup>4</sup>",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Logarithmic.QuarticLogarithmicScaled = module.exports.Logarithmic.QuarticLogarithmicScaled = {
    pythonModuleName : "Logarithmic",
    pythonClassName : "QuarticLogarithmicScaled",
    extendedVersionString : "Default",
    displayName : "Quartic Logarithmic Scaled",
    displayHTML : "y = a + b*ln(h*x) + c*ln(h*x)<sup>2</sup> + d*ln(h*x)<sup>3</sup> + f*ln(h*x)<sup>4</sup>",
    dimensionality : 2,
    numberOfParameters : 6
};

exports.Logarithmic.QuarticLogarithmicTransform = module.exports.Logarithmic.QuarticLogarithmicTransform = {
    pythonModuleName : "Logarithmic",
    pythonClassName : "QuarticLogarithmicTransform",
    extendedVersionString : "Default",
    displayName : "Quartic Logarithmic Transform",
    displayHTML : "y = a + b*ln(g*x+h) + c*ln(g*x+h)<sup>2</sup> + d*ln(g*x+h)<sup>3</sup> + f*ln(g*x+h)<sup>4</sup>",
    dimensionality : 2,
    numberOfParameters : 7
};

exports.Logarithmic.QuinticLogarithmic = module.exports.Logarithmic.QuinticLogarithmic = {
    pythonModuleName : "Logarithmic",
    pythonClassName : "QuinticLogarithmic",
    extendedVersionString : "Default",
    displayName : "Quintic Logarithmic",
    displayHTML : "y = a + b*ln(x) + c*ln(x)<sup>2</sup> + d*ln(x)<sup>3</sup> + f*ln(x)<sup>4</sup> + g*ln(x)<sup>5</sup>",
    dimensionality : 2,
    numberOfParameters : 6
};

exports.Logarithmic.QuinticLogarithmicScaled = module.exports.Logarithmic.QuinticLogarithmicScaled = {
    pythonModuleName : "Logarithmic",
    pythonClassName : "QuinticLogarithmicScaled",
    extendedVersionString : "Default",
    displayName : "Quintic Logarithmic Scaled",
    displayHTML : "y = a + b*ln(h*x) + c*ln(h*x)<sup>2</sup> + d*ln(h*x)<sup>3</sup> + f*ln(h*x)<sup>4</sup> + g*ln(h*x)<sup>4</sup>",
    dimensionality : 2,
    numberOfParameters : 7
};

exports.Logarithmic.QuinticLogarithmicTransform = module.exports.Logarithmic.QuinticLogarithmicTransform = {
    pythonModuleName : "Logarithmic",
    pythonClassName : "QuinticLogarithmicTransform",
    extendedVersionString : "Default",
    displayName : "Quintic Logarithmic Transform",
    displayHTML : "y = a + b*ln(h*x+i) + c*ln(h*x+i)<sup>2</sup> + d*ln(h*x+i)<sup>3</sup> + f*ln(h*x+i)<sup>4</sup> + g*ln(h*x+i)<sup>5</sup>",
    dimensionality : 2,
    numberOfParameters : 8
};


exports.Miscellaneous = module.exports.Miscellaneous = {};

exports.Miscellaneous.ArrheniusRateConstantLaw = module.exports.Miscellaneous.ArrheniusRateConstantLaw = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "ArrheniusRateConstantLaw",
    extendedVersionString : "Default",
    displayName : "Arrhenius Rate Constant Law",
    displayHTML : "y = a * exp(-b/x)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Miscellaneous.ArrheniusRateConstantLaw_WithOffset = module.exports.Miscellaneous.ArrheniusRateConstantLaw_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "ArrheniusRateConstantLaw",
    extendedVersionString : "Offset",
    displayName : "Arrhenius Rate Constant Law With Offset",
    displayHTML : "y = a * exp(-b/x) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Miscellaneous.ArrheniusRateConstantLawStretched = module.exports.Miscellaneous.ArrheniusRateConstantLawStretched = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "ArrheniusRateConstantLawStretched",
    extendedVersionString : "Default",
    displayName : "Arrhenius Rate Constant Law Stretched",
    displayHTML : "y = a * exp(-pow(b/x, c))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Miscellaneous.ArrheniusRateConstantLawStretched_WithOffset = module.exports.Miscellaneous.ArrheniusRateConstantLawStretched_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "ArrheniusRateConstantLawStretched",
    extendedVersionString : "Offset",
    displayName : "Arrhenius Rate Constant Law Stretched With Offset",
    displayHTML : "y = a * exp(-pow(b/x, c)) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Miscellaneous.Bleasdale_Nelder = module.exports.Miscellaneous.Bleasdale_Nelder = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "Bleasdale_Nelder",
    extendedVersionString : "Default",
    displayName : "Bleasdale-Nelder",
    displayHTML : "y = (a + bx)<sup>-c</sup>",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Miscellaneous.Bleasdale_Nelder_WithOffset = module.exports.Miscellaneous.Bleasdale_Nelder_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "Bleasdale_Nelder",
    extendedVersionString : "Offset",
    displayName : "Bleasdale-Nelder With Offset",
    displayHTML : "y = (a + bx)<sup>-c</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Miscellaneous.Catenary = module.exports.Miscellaneous.Catenary = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "Catenary",
    extendedVersionString : "Default",
    displayName : "Catenary",
    displayHTML : "y = a * cosh(x / a)",
    dimensionality : 2,
    numberOfParameters : 1
};

exports.Miscellaneous.Catenary_WithOffset = module.exports.Miscellaneous.Catenary_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "Catenary",
    extendedVersionString : "Offset",
    displayName : "Catenary With Offset",
    displayHTML : "y = a * cosh(x / a) + Offset",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Miscellaneous.CatenaryTransform = module.exports.Miscellaneous.CatenaryTransform = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "CatenaryTransform",
    extendedVersionString : "Default",
    displayName : "Catenary Transform",
    displayHTML : "y = a * cosh((bx + c) / a)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Miscellaneous.CatenaryTransform_WithOffset = module.exports.Miscellaneous.CatenaryTransform_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "CatenaryTransform",
    extendedVersionString : "Offset",
    displayName : "Catenary Transform With Offset",
    displayHTML : "y = a * cosh((bx + c) / a) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Miscellaneous.CissoidOfDiocles = module.exports.Miscellaneous.CissoidOfDiocles = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "CissoidOfDiocles",
    extendedVersionString : "Default",
    displayName : "Cissoid Of Diocles",
    displayHTML : "y = a(x<sup>3</sup> / (2b-x))<sup>0.5</sup>",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Miscellaneous.CissoidOfDiocles_WithOffset = module.exports.Miscellaneous.CissoidOfDiocles_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "CissoidOfDiocles",
    extendedVersionString : "Offset",
    displayName : "Cissoid Of Diocles With Offset",
    displayHTML : "y = a(x<sup>3</sup> / (2b-x))<sup>0.5</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Miscellaneous.CissoidOfDioclesTransform = module.exports.Miscellaneous.CissoidOfDioclesTransform = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "CissoidOfDioclesTransform",
    extendedVersionString : "Default",
    displayName : "Cissoid Of Diocles Transform",
    displayHTML : "y = a((x*c-d)<sup>3</sup> / (2b-(x*c-d)))<sup>0.5</sup>",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Miscellaneous.CissoidOfDioclesTransform_WithOffset = module.exports.Miscellaneous.CissoidOfDioclesTransform_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "CissoidOfDioclesTransform",
    extendedVersionString : "Offset",
    displayName : "Cissoid Of Diocles Transform With Offset",
    displayHTML : "y = a((x*c-d)<sup>3</sup> / (2b-(x*c-d)))<sup>0.5</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Miscellaneous.CombinedPowerAndExponential = module.exports.Miscellaneous.CombinedPowerAndExponential = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "CombinedPowerAndExponential",
    extendedVersionString : "Default",
    displayName : "Combined Power And Exponential",
    displayHTML : "y = ax<sup>b</sup> * exp(cx)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Miscellaneous.CombinedPowerAndExponential_WithOffset = module.exports.Miscellaneous.CombinedPowerAndExponential_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "CombinedPowerAndExponential",
    extendedVersionString : "Offset",
    displayName : "Combined Power And Exponential With Offset",
    displayHTML : "y = ax<sup>b</sup> * exp(cx) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Miscellaneous.DavidRodbardNIH = module.exports.Miscellaneous.DavidRodbardNIH = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "DavidRodbardNIH",
    extendedVersionString : "Default",
    displayName : "David Rodbard NIH",
    displayHTML : "y = d + (a - d) / (1.0 + (x/c)<sup>b</sup>)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Miscellaneous.DoubleLangmuirProbeCharacteristic = module.exports.Miscellaneous.DoubleLangmuirProbeCharacteristic = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "DoubleLangmuirProbeCharacteristic",
    extendedVersionString : "Default",
    displayName : "Double Langmuir Probe Characteristic",
    displayHTML : "y = a * tanh(bx+c)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Miscellaneous.DoubleLangmuirProbeCharacteristic_WithOffset = module.exports.Miscellaneous.DoubleLangmuirProbeCharacteristic_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "DoubleLangmuirProbeCharacteristic",
    extendedVersionString : "Offset",
    displayName : "Double Langmuir Probe Characteristic With Offset",
    displayHTML : "y = a * tanh(bx+c) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Miscellaneous.DoubleRectangularHyperbolaA = module.exports.Miscellaneous.DoubleRectangularHyperbolaA = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "DoubleRectangularHyperbolaA",
    extendedVersionString : "Default",
    displayName : "Double Rectangular Hyperbola A",
    displayHTML : "y = ax/(b+x) + cx/(d+x)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Miscellaneous.DoubleRectangularHyperbolaA_WithOffset = module.exports.Miscellaneous.DoubleRectangularHyperbolaA_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "DoubleRectangularHyperbolaA",
    extendedVersionString : "Offset",
    displayName : "Double Rectangular Hyperbola A With Offset",
    displayHTML : "y = ax/(b+x) + cx/(d+x) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Miscellaneous.DoubleRectangularHyperbolaB = module.exports.Miscellaneous.DoubleRectangularHyperbolaB = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "DoubleRectangularHyperbolaB",
    extendedVersionString : "Default",
    displayName : "Double Rectangular Hyperbola B",
    displayHTML : "y = ax/(b+x) + cx/(d+x) + fx",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Miscellaneous.DoubleRectangularHyperbolaB_WithOffset = module.exports.Miscellaneous.DoubleRectangularHyperbolaB_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "DoubleRectangularHyperbolaB",
    extendedVersionString : "Offset",
    displayName : "Double Rectangular Hyperbola B With Offset",
    displayHTML : "y = ax/(b+x) + cx/(d+x) + fx + Offset",
    dimensionality : 2,
    numberOfParameters : 6
};

exports.Miscellaneous.FigureEight = module.exports.Miscellaneous.FigureEight = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "FigureEight",
    extendedVersionString : "Default",
    displayName : "Figure Eight Curve",
    displayHTML : "y = a(x<sup>2</sup> - (x<sup>4</sup>/b<sup>2</sup>))<sup>0.5</sup>",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Miscellaneous.FigureEight_WithOffset = module.exports.Miscellaneous.FigureEight_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "FigureEight",
    extendedVersionString : "Offset",
    displayName : "Figure Eight Curve With Offset",
    displayHTML : "y = a(x<sup>2</sup> - (x<sup>4</sup>/b<sup>2</sup>))<sup>0.5</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Miscellaneous.FigureEightTransform = module.exports.Miscellaneous.FigureEightTransform = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "FigureEightTransform",
    extendedVersionString : "Default",
    displayName : "Figure Eight Curve Transform",
    displayHTML : "y = a((cx+d)<sup>2</sup> - ((cx+d)<sup>4</sup>/b<sup>2</sup>))<sup>0.5</sup>",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Miscellaneous.FigureEightTransform_WithOffset = module.exports.Miscellaneous.FigureEightTransform_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "FigureEightTransform",
    extendedVersionString : "Offset",
    displayName : "Figure Eight Curve Transform With Offset",
    displayHTML : "y = a((cx+d)<sup>2</sup> - ((cx+d)<sup>4</sup>/b<sup>2</sup>))<sup>0.5</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Miscellaneous.Gunary = module.exports.Miscellaneous.Gunary = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "Gunary",
    extendedVersionString : "Default",
    displayName : "Gunary",
    displayHTML : "y = x / (a + bx + cx<sup>0.5</sup>)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Miscellaneous.Gunary_WithOffset = module.exports.Miscellaneous.Gunary_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "Gunary",
    extendedVersionString : "Offset",
    displayName : "Gunary With Offset",
    displayHTML : "y = x / (a + bx + cx<sup>0.5</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Miscellaneous.HyperbolaA_Modified = module.exports.Miscellaneous.HyperbolaA_Modified = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "HyperbolaA_Modified",
    extendedVersionString : "Default",
    displayName : "Hyperbola A Modified",
    displayHTML : "y = ax/(1+bx)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Miscellaneous.HyperbolaA_Modified_WithOffset = module.exports.Miscellaneous.HyperbolaA_Modified_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "HyperbolaA_Modified",
    extendedVersionString : "Offset",
    displayName : "Hyperbola A Modified With Offset",
    displayHTML : "y = ax/(1+bx) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Miscellaneous.HyperbolaB_Modified = module.exports.Miscellaneous.HyperbolaB_Modified = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "HyperbolaB_Modified",
    extendedVersionString : "Default",
    displayName : "Hyperbola B Modified",
    displayHTML : "y = x/(a+bx)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Miscellaneous.HyperbolaB_Modified_WithOffset = module.exports.Miscellaneous.HyperbolaB_Modified_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "HyperbolaB_Modified",
    extendedVersionString : "Offset",
    displayName : "Hyperbola B Modified With Offset",
    displayHTML : "y = x/(a+bx) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Miscellaneous.HyperbolicDecay = module.exports.Miscellaneous.HyperbolicDecay = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "HyperbolicDecay",
    extendedVersionString : "Default",
    displayName : "Hyperbolic Decay",
    displayHTML : "y = ab/(b+x)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Miscellaneous.HyperbolicDecay_WithOffset = module.exports.Miscellaneous.HyperbolicDecay_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "HyperbolicDecay",
    extendedVersionString : "Offset",
    displayName : "Hyperbolic Decay With Offset",
    displayHTML : "y = ab/(b+x) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Miscellaneous.KarplusNMRSpectroscopy = module.exports.Miscellaneous.KarplusNMRSpectroscopy = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "KarplusNMRSpectroscopy",
    extendedVersionString : "Default",
    displayName : "Karplus NMR Spectroscopy",
    displayHTML : "J(da) = Acos<sup>2</sup>(da) + Bcos(da) + C",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Miscellaneous.KarplusNMRSpectroscopyScaled = module.exports.Miscellaneous.KarplusNMRSpectroscopyScaled = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "KarplusNMRSpectroscopyScaled",
    extendedVersionString : "Default",
    displayName : "Karplus NMR Spectroscopy Scaled",
    displayHTML : "J(da) = Acos<sup>2</sup>(s * da) + Bcos(s * da) + C",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Miscellaneous.LamesCubic = module.exports.Miscellaneous.LamesCubic = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "LamesCubic",
    extendedVersionString : "Default",
    displayName : "Lame's Cubic",
    displayHTML : "y = (a<sup>3</sup> - x<sup>3</sup>)<sup>1/3</sup>",
    dimensionality : 2,
    numberOfParameters : 1
};

exports.Miscellaneous.LamesCubic_WithOffset = module.exports.Miscellaneous.LamesCubic_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "LamesCubic",
    extendedVersionString : "Offset",
    displayName : "Lame's Cubic With Offset",
    displayHTML : "y = (a<sup>3</sup> - x<sup>3</sup>)<sup>1/3</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Miscellaneous.LamesCubicTransform = module.exports.Miscellaneous.LamesCubicTransform = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "LamesCubicTransform",
    extendedVersionString : "Default",
    displayName : "Lame's Cubic Transform",
    displayHTML : "y = (a<sup>3</sup> - (bx + c)<sup>3</sup>)<sup>1/3</sup>",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Miscellaneous.LamesCubicTransform_WithOffset = module.exports.Miscellaneous.LamesCubicTransform_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "LamesCubicTransform",
    extendedVersionString : "Offset",
    displayName : "Lame's Cubic Transform With Offset",
    displayHTML : "y = (a<sup>3</sup> - (bx + c)<sup>3</sup>)<sup>1/3</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Miscellaneous.Misc1 = module.exports.Miscellaneous.Misc1 = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "Misc1",
    extendedVersionString : "Default",
    displayName : "Miscellaneous 1",
    displayHTML : "y = 1.0 + a(1.0 - exp(bx))",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Miscellaneous.Misc1_WithOffset = module.exports.Miscellaneous.Misc1_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "Misc1",
    extendedVersionString : "Offset",
    displayName : "Miscellaneous 1 With Offset",
    displayHTML : "y = 1.0 + a(1.0 - exp(bx)) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Miscellaneous.MorsePotential = module.exports.Miscellaneous.MorsePotential = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "MorsePotential",
    extendedVersionString : "Default",
    displayName : "Morse Potential",
    displayHTML : "V = D*(exp(-2*m*(x-u)) - 2*exp(-m*(x-u))) + offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Miscellaneous.NelsonSiegel = module.exports.Miscellaneous.NelsonSiegel = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "NelsonSiegel",
    extendedVersionString : "Default",
    displayName : "Nelson-Siegel",
    displayHTML : "y(m) = B0 + B1*((1-exp(-m/t))/(m/t)) + B2*(((1-exp(-m/t))/(m/t)) - exp(-m/t)))",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Miscellaneous.NelsonSiegelSvensson = module.exports.Miscellaneous.NelsonSiegelSvensson = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "NelsonSiegelSvensson",
    extendedVersionString : "Default",
    displayName : "Nelson-Siegel-Svensson",
    displayHTML : "y(m) = B0 + B1*((1-exp(-m/t))/(m/t)) + B2*(((1-exp(-m/t))/(m/t)) - exp(-m/t)) + B3*(((1-exp(-m/t2))/(m/t2)) - exp(-m/t2))",
    dimensionality : 2,
    numberOfParameters : 6
};

exports.Miscellaneous.NielesSemicubicalParabola = module.exports.Miscellaneous.NielesSemicubicalParabola = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "NielesSemicubicalParabola",
    extendedVersionString : "Default",
    displayName : "Niele's Semi-cubical Parabola",
    displayHTML : "y = (ax<sup>2</sup>)<sup>1.0/3.0</sup>",
    dimensionality : 2,
    numberOfParameters : 1
};

exports.Miscellaneous.NielesSemicubicalParabola_WithOffset = module.exports.Miscellaneous.NielesSemicubicalParabola_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "NielesSemicubicalParabola",
    extendedVersionString : "Offset",
    displayName : "Niele's Semi-cubical Parabola With Offset",
    displayHTML : "y = (ax<sup>2</sup>)<sup>1.0/3.0</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Miscellaneous.NielesSemicubicalParabolaTransform = module.exports.Miscellaneous.NielesSemicubicalParabolaTransform = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "NielesSemicubicalParabolaTransform",
    extendedVersionString : "Default",
    displayName : "Niele's Semi-cubical Parabola Transform",
    displayHTML : "y = (a(b*x+c)<sup>2</sup>)<sup>1.0/3.0</sup>",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Miscellaneous.NielesSemicubicalParabolaTransform_WithOffset = module.exports.Miscellaneous.NielesSemicubicalParabolaTransform_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "NielesSemicubicalParabolaTransform",
    extendedVersionString : "Offset",
    displayName : "Niele's Semi-cubical Parabola Transform With Offset",
    displayHTML : "y = (a(b*x+c)<sup>2</sup>)<sup>1.0/3.0</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Miscellaneous.ParetoA = module.exports.Miscellaneous.ParetoA = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "ParetoA",
    extendedVersionString : "Default",
    displayName : "Pareto A",
    displayHTML : "y = 1 - x<sup>-a</sup>",
    dimensionality : 2,
    numberOfParameters : 1
};

exports.Miscellaneous.ParetoA_WithOffset = module.exports.Miscellaneous.ParetoA_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "ParetoA",
    extendedVersionString : "Offset",
    displayName : "Pareto A With Offset",
    displayHTML : "y = 1 - x<sup>-a</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Miscellaneous.ParetoB = module.exports.Miscellaneous.ParetoB = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "ParetoB",
    extendedVersionString : "Default",
    displayName : "Pareto B",
    displayHTML : "y = a(1 - x<sup>-b</sup>)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Miscellaneous.ParetoB_WithOffset = module.exports.Miscellaneous.ParetoB_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "ParetoB",
    extendedVersionString : "Offset",
    displayName : "Pareto B With Offset",
    displayHTML : "y = a(1 - x<sup>-b</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Miscellaneous.ParetoC = module.exports.Miscellaneous.ParetoC = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "ParetoC",
    extendedVersionString : "Default",
    displayName : "Pareto C",
    displayHTML : "y = 1.0 - (1.0 / (1 + ax)<sup>b</sup>",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Miscellaneous.ParetoC_WithOffset = module.exports.Miscellaneous.ParetoC_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "ParetoC",
    extendedVersionString : "Offset",
    displayName : "Pareto C With Offset",
    displayHTML : "y = 1.0 - (1.0 / (1 + ax)<sup>b</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Miscellaneous.ParetoD = module.exports.Miscellaneous.ParetoD = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "ParetoD",
    extendedVersionString : "Default",
    displayName : "Pareto D",
    displayHTML : "y = 1.0 - (1.0 / x<sup>a</sup>)",
    dimensionality : 2,
    numberOfParameters : 1
};

exports.Miscellaneous.ParetoD_WithOffset = module.exports.Miscellaneous.ParetoD_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "ParetoD",
    extendedVersionString : "Offset",
    displayName : "Pareto D With Offset",
    displayHTML : "y = 1.0 - (1.0 / x<sup>a</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Miscellaneous.PearShapedQuartic = module.exports.Miscellaneous.PearShapedQuartic = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "PearShapedQuartic",
    extendedVersionString : "Default",
    displayName : "Pear-shaped Quartic",
    displayHTML : "y = a(x<sup>3</sup>(b-x) / c<sup>2</sup>)<sup>0.5</sup>",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Miscellaneous.PearShapedQuartic_WithOffset = module.exports.Miscellaneous.PearShapedQuartic_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "PearShapedQuartic",
    extendedVersionString : "Offset",
    displayName : "Pear-shaped Quartic With Offset",
    displayHTML : "y = a(x<sup>3</sup>(b-x) / c<sup>2</sup>)<sup>0.5</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Miscellaneous.PearShapedQuarticTransform = module.exports.Miscellaneous.PearShapedQuarticTransform = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "PearShapedQuarticTransform",
    extendedVersionString : "Default",
    displayName : "Pear-shaped Quartic Transform",
    displayHTML : "y = a((dx+f)<sup>3</sup>(b-(dx+f)) / c<sup>2</sup>)<sup>0.5</sup>",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Miscellaneous.PearShapedQuarticTransform_WithOffset = module.exports.Miscellaneous.PearShapedQuarticTransform_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "PearShapedQuarticTransform",
    extendedVersionString : "Offset",
    displayName : "Pear-shaped Quartic Transform With Offset",
    displayHTML : "y = a((dx+f)<sup>3</sup>(b-(dx+f)) / c<sup>2</sup>)<sup>0.5</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 6
};

exports.Miscellaneous.PhysicistPeterCustomEquation = module.exports.Miscellaneous.PhysicistPeterCustomEquation = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "PhysicistPeterCustomEquation",
    extendedVersionString : "Default",
    displayName : "Physicist Peter's Custom Equation",
    displayHTML : "y = A + B*(X-C) + 0.5*G*(X-C)**2",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Miscellaneous.PhysicistPeterPendulumTraversal = module.exports.Miscellaneous.PhysicistPeterPendulumTraversal = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "PhysicistPeterPendulumTraversal",
    extendedVersionString : "Default",
    displayName : "Physicist Peter's Pendulum Traversal",
    displayHTML : "y = a*(x + b)<sup>1/2</sup>",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Miscellaneous.PhysicistPeterPendulumTraversal_WithOffset = module.exports.Miscellaneous.PhysicistPeterPendulumTraversal_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "PhysicistPeterPendulumTraversal",
    extendedVersionString : "Offset",
    displayName : "Physicist Peter's Pendulum Traversal With Offset",
    displayHTML : "y = a*(x + b)<sup>1/2</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Miscellaneous.Polytrope = module.exports.Miscellaneous.Polytrope = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "Polytrope",
    extendedVersionString : "Default",
    displayName : "Polytrope",
    displayHTML : "y = a / x<sup>b</sup>",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Miscellaneous.Polytrope_WithOffset = module.exports.Miscellaneous.Polytrope_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "Polytrope",
    extendedVersionString : "Offset",
    displayName : "Polytrope With Offset",
    displayHTML : "y = a / x<sup>b</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Miscellaneous.PolytropeTransform = module.exports.Miscellaneous.PolytropeTransform = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "PolytropeTransform",
    extendedVersionString : "Default",
    displayName : "Polytrope Transform",
    displayHTML : "y = a / (cx + d)<sup>b</sup>",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Miscellaneous.PolytropeTransform_WithOffset = module.exports.Miscellaneous.PolytropeTransform_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "PolytropeTransform",
    extendedVersionString : "Offset",
    displayName : "Polytrope Transform With Offset",
    displayHTML : "y = a / (cx + d)<sup>b</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Miscellaneous.PursuitCurve = module.exports.Miscellaneous.PursuitCurve = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "PursuitCurve",
    extendedVersionString : "Default",
    displayName : "Pursuit Curve",
    displayHTML : "y = ax<sup>2</sup> - log(x)",
    dimensionality : 2,
    numberOfParameters : 1
};

exports.Miscellaneous.PursuitCurve_WithOffset = module.exports.Miscellaneous.PursuitCurve_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "PursuitCurve",
    extendedVersionString : "Offset",
    displayName : "Pursuit Curve With Offset",
    displayHTML : "y = ax<sup>2</sup> - log(x) + Offset",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Miscellaneous.PursuitCurve_Transform = module.exports.Miscellaneous.PursuitCurve_Transform = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "PursuitCurve_Transform",
    extendedVersionString : "Default",
    displayName : "Pursuit Curve Transform",
    displayHTML : "y = a(bx + c)<sup>2</sup> - log(bx + c)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Miscellaneous.PursuitCurve_Transform_WithOffset = module.exports.Miscellaneous.PursuitCurve_Transform_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "PursuitCurve_Transform",
    extendedVersionString : "Offset",
    displayName : "Pursuit Curve Transform With Offset",
    displayHTML : "y = a(bx + c)<sup>2</sup> - log(bx + c) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Miscellaneous.RectangularHyperbolaA = module.exports.Miscellaneous.RectangularHyperbolaA = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "RectangularHyperbolaA",
    extendedVersionString : "Default",
    displayName : "Rectangular Hyperbola A",
    displayHTML : "y = ax/(b+x)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Miscellaneous.RectangularHyperbolaA_WithOffset = module.exports.Miscellaneous.RectangularHyperbolaA_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "RectangularHyperbolaA",
    extendedVersionString : "Offset",
    displayName : "Rectangular Hyperbola A With Offset",
    displayHTML : "y = ax/(b+x) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Miscellaneous.RectangularHyperbolaB = module.exports.Miscellaneous.RectangularHyperbolaB = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "RectangularHyperbolaB",
    extendedVersionString : "Default",
    displayName : "Rectangular Hyperbola B",
    displayHTML : "y = ax/(b+x) + cx",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Miscellaneous.RectangularHyperbolaB_WithOffset = module.exports.Miscellaneous.RectangularHyperbolaB_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "RectangularHyperbolaB",
    extendedVersionString : "Offset",
    displayName : "Rectangular Hyperbola B With Offset",
    displayHTML : "y = ax/(b+x) + cx + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Miscellaneous.Serpentine = module.exports.Miscellaneous.Serpentine = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "Serpentine",
    extendedVersionString : "Default",
    displayName : "Serpentine",
    displayHTML : "y = ax / (1.0 + bx<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Miscellaneous.Serpentine_WithOffset = module.exports.Miscellaneous.Serpentine_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "Serpentine",
    extendedVersionString : "Offset",
    displayName : "Serpentine With Offset",
    displayHTML : "y = ax / (1.0 + bx<sup>2</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Miscellaneous.ShiftedReciprocal = module.exports.Miscellaneous.ShiftedReciprocal = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "ShiftedReciprocal",
    extendedVersionString : "Default",
    displayName : "Shifted Reciprocal",
    displayHTML : "y = 1.0 / (a - x)",
    dimensionality : 2,
    numberOfParameters : 1
};

exports.Miscellaneous.ShiftedReciprocal_WithOffset = module.exports.Miscellaneous.ShiftedReciprocal_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "ShiftedReciprocal",
    extendedVersionString : "Offset",
    displayName : "Shifted Reciprocal With Offset",
    displayHTML : "y = 1.0 / (a - x) + Offset",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Miscellaneous.Square_Modified = module.exports.Miscellaneous.Square_Modified = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "Square_Modified",
    extendedVersionString : "Default",
    displayName : "Square Modified",
    displayHTML : "y = x<sup>2</sup> - ax",
    dimensionality : 2,
    numberOfParameters : 1
};

exports.Miscellaneous.Square_Modified_WithOffset = module.exports.Miscellaneous.Square_Modified_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "Square_Modified",
    extendedVersionString : "Offset",
    displayName : "Square Modified With Offset",
    displayHTML : "y = x<sup>2</sup> - ax + Offset",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Miscellaneous.Square_Modified_Transform = module.exports.Miscellaneous.Square_Modified_Transform = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "Square_Modified_Transform",
    extendedVersionString : "Default",
    displayName : "Square Modified Transform",
    displayHTML : "y = (bx + c)<sup>2</sup> - a(bx + c)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Miscellaneous.Square_Modified_Transform_WithOffset = module.exports.Miscellaneous.Square_Modified_Transform_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "Square_Modified_Transform",
    extendedVersionString : "Offset",
    displayName : "Square Modified Transform With Offset",
    displayHTML : "y = (bx + c)<sup>2</sup> - a(bx + c) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Miscellaneous.TimothyStrobelCustomEquation = module.exports.Miscellaneous.TimothyStrobelCustomEquation = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "TimothyStrobelCustomEquation",
    extendedVersionString : "Default",
    displayName : "Timothy Strobel's Custom Equation",
    displayHTML : "y = (A-B*X**C)*(1-(0.5+(arctan((X-D)/E))/pi))+(F-G*X**H)*(0.5+(arctan((X-D)/E))/pi)",
    dimensionality : 2,
    numberOfParameters : 8
};

exports.Miscellaneous.TimothyStrobelCustomEquation_WithOffset = module.exports.Miscellaneous.TimothyStrobelCustomEquation_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "TimothyStrobelCustomEquation",
    extendedVersionString : "Offset",
    displayName : "Timothy Strobel's Custom Equation With Offset",
    displayHTML : "y = (A-B*X**C)*(1-(0.5+(arctan((X-D)/E))/pi))+(F-G*X**H)*(0.5+(arctan((X-D)/E))/pi) + Offset",
    dimensionality : 2,
    numberOfParameters : 9
};

exports.Miscellaneous.TransitionStateRateConstantLaw = module.exports.Miscellaneous.TransitionStateRateConstantLaw = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "TransitionStateRateConstantLaw",
    extendedVersionString : "Default",
    displayName : "Transition State Rate Constant Law",
    displayHTML : "y = ax<sup>b</sup> * exp(-c/x)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Miscellaneous.TransitionStateRateConstantLaw_WithOffset = module.exports.Miscellaneous.TransitionStateRateConstantLaw_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "TransitionStateRateConstantLaw",
    extendedVersionString : "Offset",
    displayName : "Transition State Rate Constant Law With Offset",
    displayHTML : "y = ax<sup>b</sup> * exp(-c/x) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Miscellaneous.TrisectrixOfMaclaurin = module.exports.Miscellaneous.TrisectrixOfMaclaurin = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "TrisectrixOfMaclaurin",
    extendedVersionString : "Default",
    displayName : "Trisectrix Of Maclaurin",
    displayHTML : "y = a(x<sup>2</sup>(3b-x) / (b+x))<sup>0.5</sup>",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Miscellaneous.TrisectrixOfMaclaurin_WithOffset = module.exports.Miscellaneous.TrisectrixOfMaclaurin_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "TrisectrixOfMaclaurin",
    extendedVersionString : "Offset",
    displayName : "Trisectrix Of Maclaurin With Offset",
    displayHTML : "y = a(x<sup>2</sup>(3b-x) / (b+x))<sup>0.5</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Miscellaneous.TrisectrixOfMaclaurinTransform = module.exports.Miscellaneous.TrisectrixOfMaclaurinTransform = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "TrisectrixOfMaclaurinTransform",
    extendedVersionString : "Default",
    displayName : "Trisectrix Of Maclaurin Transform",
    displayHTML : "y = a((cx+d)<sup>2</sup>(3b-(cx+d)) / (b+(cx+d)))<sup>0.5</sup>",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Miscellaneous.TrisectrixOfMaclaurinTransform_WithOffset = module.exports.Miscellaneous.TrisectrixOfMaclaurinTransform_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "TrisectrixOfMaclaurinTransform",
    extendedVersionString : "Offset",
    displayName : "Trisectrix Of Maclaurin Transform With Offset",
    displayHTML : "y = a((cx+d)<sup>2</sup>(3b-(cx+d)) / (b+(cx+d)))<sup>0.5</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Miscellaneous.WitchOfAgnesiA = module.exports.Miscellaneous.WitchOfAgnesiA = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "WitchOfAgnesiA",
    extendedVersionString : "Default",
    displayName : "Witch Of Maria Agnesi A",
    displayHTML : "y = 8a<sup>3</sup> / (x<sup>2</sup> + 4a<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 1
};

exports.Miscellaneous.WitchOfAgnesiA_WithOffset = module.exports.Miscellaneous.WitchOfAgnesiA_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "WitchOfAgnesiA",
    extendedVersionString : "Offset",
    displayName : "Witch Of Maria Agnesi A With Offset",
    displayHTML : "y = 8a<sup>3</sup> / (x<sup>2</sup> + 4a<sup>2</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Miscellaneous.WitchOfAgnesiB = module.exports.Miscellaneous.WitchOfAgnesiB = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "WitchOfAgnesiB",
    extendedVersionString : "Default",
    displayName : "Witch Of Maria Agnesi B",
    displayHTML : "y = a<sup>3</sup> / (x<sup>2</sup> + a<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 1
};

exports.Miscellaneous.WitchOfAgnesiB_WithOffset = module.exports.Miscellaneous.WitchOfAgnesiB_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "WitchOfAgnesiB",
    extendedVersionString : "Offset",
    displayName : "Witch Of Maria Agnesi B With Offset",
    displayHTML : "y = a<sup>3</sup> / (x<sup>2</sup> + a<sup>2</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Miscellaneous.WitchOfAgnesiC = module.exports.Miscellaneous.WitchOfAgnesiC = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "WitchOfAgnesiC",
    extendedVersionString : "Default",
    displayName : "Witch Of Maria Agnesi C",
    displayHTML : "y = a<sup>3</sup> / ((x * b + c)<sup>2</sup> + a<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Miscellaneous.WitchOfAgnesiC_WithOffset = module.exports.Miscellaneous.WitchOfAgnesiC_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "WitchOfAgnesiC",
    extendedVersionString : "Offset",
    displayName : "Witch Of Maria Agnesi C With Offset",
    displayHTML : "y = a<sup>3</sup> / ((x * b + c)<sup>2</sup> + a<sup>2</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};


exports.NIST = module.exports.NIST = {};

exports.NIST.NIST_Bennett5 = module.exports.NIST.NIST_Bennett5 = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_Bennett5",
    extendedVersionString : "Default",
    displayName : "NIST Bennett5",
    displayHTML : "y = a * (b+x)<sup>-1/c</sup>",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.NIST.NIST_Bennett5_WithOffset = module.exports.NIST.NIST_Bennett5_WithOffset = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_Bennett5",
    extendedVersionString : "Offset",
    displayName : "NIST Bennett5 With Offset",
    displayHTML : "y = a * (b+x)<sup>-1/c</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.NIST.NIST_BoxBOD = module.exports.NIST.NIST_BoxBOD = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_BoxBOD",
    extendedVersionString : "Default",
    displayName : "NIST BoxBOD",
    displayHTML : "y = a * (1.0-exp(-b*x))",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.NIST.NIST_BoxBOD_WithOffset = module.exports.NIST.NIST_BoxBOD_WithOffset = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_BoxBOD",
    extendedVersionString : "Offset",
    displayName : "NIST BoxBOD With Offset",
    displayHTML : "y = a * (1.0-exp(-b*x)) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.NIST.NIST_Chwirut = module.exports.NIST.NIST_Chwirut = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_Chwirut",
    extendedVersionString : "Default",
    displayName : "NIST Chwirut",
    displayHTML : "y = exp(-a*x) / (b + c*x)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.NIST.NIST_Chwirut_WithOffset = module.exports.NIST.NIST_Chwirut_WithOffset = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_Chwirut",
    extendedVersionString : "Offset",
    displayName : "NIST Chwirut With Offset",
    displayHTML : "y = exp(-a*x) / (b + c*x) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.NIST.NIST_DanWood = module.exports.NIST.NIST_DanWood = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_DanWood",
    extendedVersionString : "Default",
    displayName : "NIST DanWood",
    displayHTML : "y = a*x<sup>b</sup>",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.NIST.NIST_DanWood_WithOffset = module.exports.NIST.NIST_DanWood_WithOffset = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_DanWood",
    extendedVersionString : "Offset",
    displayName : "NIST DanWood With Offset",
    displayHTML : "y = a*x<sup>b</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.NIST.NIST_ENSO = module.exports.NIST.NIST_ENSO = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_ENSO",
    extendedVersionString : "Default",
    displayName : "NIST ENSO",
    displayHTML : "y = a + b*cos(2*pi*x/12) + c*sin(2*pi*x/12) + f*cos(2*pi*x/d) + g*sin(2*pi*x/d) + i*cos(2*pi*x/h) + j*sin(2*pi*x/h)",
    dimensionality : 2,
    numberOfParameters : 9
};

exports.NIST.NIST_Eckerle4 = module.exports.NIST.NIST_Eckerle4 = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_Eckerle4",
    extendedVersionString : "Default",
    displayName : "NIST Eckerle4",
    displayHTML : "y = (a/b) * exp(-0.5*((x-c)/b)<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.NIST.NIST_Eckerle4_WithOffset = module.exports.NIST.NIST_Eckerle4_WithOffset = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_Eckerle4",
    extendedVersionString : "Offset",
    displayName : "NIST Eckerle4 With Offset",
    displayHTML : "y = (a/b) * exp(-0.5*((x-c)/b)<sup>2</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.NIST.NIST_Gauss = module.exports.NIST.NIST_Gauss = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_Gauss",
    extendedVersionString : "Default",
    displayName : "NIST Gauss",
    displayHTML : "y = a*exp(-b*x) + c*exp(-(x-d)<sup>2</sup> / f<sup>2</sup>) + g*exp(-(x-h)<sup>2</sup> / i<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 8
};

exports.NIST.NIST_Gauss_WithOffset = module.exports.NIST.NIST_Gauss_WithOffset = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_Gauss",
    extendedVersionString : "Offset",
    displayName : "NIST Gauss With Offset",
    displayHTML : "y = a*exp(-b*x) + c*exp(-(x-d)<sup>2</sup> / f<sup>2</sup>) + g*exp(-(x-h)<sup>2</sup> / i<sup>2</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 9
};

exports.NIST.NIST_Hahn = module.exports.NIST.NIST_Hahn = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_Hahn",
    extendedVersionString : "Default",
    displayName : "NIST Hahn",
    displayHTML : "y = (a + b*x + c*x<sup>2</sup> + d*x<sup>3</sup>) / (1.0 + f*x + g*x<sup>2</sup> + h*x<sup>3</sup>)",
    dimensionality : 2,
    numberOfParameters : 7
};

exports.NIST.NIST_Hahn_WithOffset = module.exports.NIST.NIST_Hahn_WithOffset = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_Hahn",
    extendedVersionString : "Offset",
    displayName : "NIST Hahn With Offset",
    displayHTML : "y = (a + b*x + c*x<sup>2</sup> + d*x<sup>3</sup>) / (1.0 + f*x + g*x<sup>2</sup> + h*x<sup>3</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 8
};

exports.NIST.NIST_Kirby = module.exports.NIST.NIST_Kirby = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_Kirby",
    extendedVersionString : "Default",
    displayName : "NIST Kirby",
    displayHTML : "y = (a + b*x + c*x<sup>2</sup>) / (1.0 + d*x + f*x<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.NIST.NIST_Kirby_WithOffset = module.exports.NIST.NIST_Kirby_WithOffset = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_Kirby",
    extendedVersionString : "Offset",
    displayName : "NIST Kirby With Offset",
    displayHTML : "y = (a + b*x + c*x<sup>2</sup>) / (1.0 + d*x + f*x<sup>2</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 6
};

exports.NIST.NIST_Lanczos = module.exports.NIST.NIST_Lanczos = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_Lanczos",
    extendedVersionString : "Default",
    displayName : "NIST Lanczos",
    displayHTML : "y = a*exp(-b*x) + c*exp(-d*x) + f*exp(-g*x)",
    dimensionality : 2,
    numberOfParameters : 6
};

exports.NIST.NIST_Lanczos_WithOffset = module.exports.NIST.NIST_Lanczos_WithOffset = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_Lanczos",
    extendedVersionString : "Offset",
    displayName : "NIST Lanczos With Offset",
    displayHTML : "y = a*exp(-b*x) + c*exp(-d*x) + f*exp(-g*x) + Offset",
    dimensionality : 2,
    numberOfParameters : 7
};

exports.NIST.NIST_MGH09 = module.exports.NIST.NIST_MGH09 = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_MGH09",
    extendedVersionString : "Default",
    displayName : "NIST MGH09",
    displayHTML : "y = a * (x<sup>2</sup> + b*x) / (x<sup>2</sup> + c*x + d)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.NIST.NIST_MGH09_WithOffset = module.exports.NIST.NIST_MGH09_WithOffset = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_MGH09",
    extendedVersionString : "Offset",
    displayName : "NIST MGH09 With Offset",
    displayHTML : "y = a * (x<sup>2</sup> + b*x) / (x<sup>2</sup> + c*x + d) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.NIST.NIST_MGH10 = module.exports.NIST.NIST_MGH10 = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_MGH10",
    extendedVersionString : "Default",
    displayName : "NIST MGH10",
    displayHTML : "y = a * exp(b/(x+c))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.NIST.NIST_MGH10_WithOffset = module.exports.NIST.NIST_MGH10_WithOffset = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_MGH10",
    extendedVersionString : "Offset",
    displayName : "NIST MGH10 With Offset",
    displayHTML : "y = a * exp(b/(x+c)) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.NIST.NIST_MGH17 = module.exports.NIST.NIST_MGH17 = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_MGH17",
    extendedVersionString : "Default",
    displayName : "NIST MGH17",
    displayHTML : "y = a + b*exp(-x*d) + c*exp(-x*f)",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.NIST.NIST_Misra1a = module.exports.NIST.NIST_Misra1a = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_Misra1a",
    extendedVersionString : "Default",
    displayName : "NIST Misra1a",
    displayHTML : "y = a * (1.0 - exp(-b*x))",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.NIST.NIST_Misra1a_WithOffset = module.exports.NIST.NIST_Misra1a_WithOffset = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_Misra1a",
    extendedVersionString : "Offset",
    displayName : "NIST Misra1a With Offset",
    displayHTML : "y = a * (1.0 - exp(-b*x)) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.NIST.NIST_Misra1b = module.exports.NIST.NIST_Misra1b = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_Misra1b",
    extendedVersionString : "Default",
    displayName : "NIST Misra1b",
    displayHTML : "y = a * (1.0 - (1.0+b*x/2.0)<sup>-2.0</sup>)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.NIST.NIST_Misra1b_WithOffset = module.exports.NIST.NIST_Misra1b_WithOffset = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_Misra1b",
    extendedVersionString : "Offset",
    displayName : "NIST Misra1b With Offset",
    displayHTML : "y = a * (1.0 - (1.0+b*x/2.0)<sup>-2.0</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.NIST.NIST_Misra1c = module.exports.NIST.NIST_Misra1c = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_Misra1c",
    extendedVersionString : "Default",
    displayName : "NIST Misra1c",
    displayHTML : "y = a * (1.0 - (1.0 + 2.0*b*x)<sup>-0.5</sup>)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.NIST.NIST_Misra1c_WithOffset = module.exports.NIST.NIST_Misra1c_WithOffset = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_Misra1c",
    extendedVersionString : "Offset",
    displayName : "NIST Misra1c With Offset",
    displayHTML : "y = a * (1.0 - (1.0 + 2.0*b*x)<sup>-0.5</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.NIST.NIST_Misra1d = module.exports.NIST.NIST_Misra1d = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_Misra1d",
    extendedVersionString : "Default",
    displayName : "NIST Misra1d",
    displayHTML : "y = a * b * x * (1.0 + b*x)<sup>-1.0</sup>",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.NIST.NIST_Misra1d_WithOffset = module.exports.NIST.NIST_Misra1d_WithOffset = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_Misra1d",
    extendedVersionString : "Offset",
    displayName : "NIST Misra1d With Offset",
    displayHTML : "y = a * b * x * (1.0 + b*x)<sup>-1.0</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.NIST.NIST_Rat42 = module.exports.NIST.NIST_Rat42 = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_Rat42",
    extendedVersionString : "Default",
    displayName : "NIST Rat42",
    displayHTML : "y = a / (1.0 + exp(b - c*x))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.NIST.NIST_Rat42_WithOffset = module.exports.NIST.NIST_Rat42_WithOffset = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_Rat42",
    extendedVersionString : "Offset",
    displayName : "NIST Rat42 With Offset",
    displayHTML : "y = a / (1.0 + exp(b - c*x)) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.NIST.NIST_Rat43 = module.exports.NIST.NIST_Rat43 = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_Rat43",
    extendedVersionString : "Default",
    displayName : "NIST Rat43",
    displayHTML : "y = a / ((1.0 + exp(b - c*x))<sup>(1.0/d)</sup>)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.NIST.NIST_Rat43_WithOffset = module.exports.NIST.NIST_Rat43_WithOffset = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_Rat43",
    extendedVersionString : "Offset",
    displayName : "NIST Rat43 With Offset",
    displayHTML : "y = a / ((1.0 + exp(b - c*x))<sup>(1.0/d)</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.NIST.NIST_Roszman = module.exports.NIST.NIST_Roszman = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_Roszman",
    extendedVersionString : "Default",
    displayName : "NIST Roszman",
    displayHTML : "y = a - bx - (arctan(c/(x-d)) / pi)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.NIST.NIST_Thurber = module.exports.NIST.NIST_Thurber = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_Thurber",
    extendedVersionString : "Default",
    displayName : "NIST Thurber",
    displayHTML : "y = (a + bx + cx<sup>2</sup> + dx<sup>3</sup>) / (1.0 + fx + gx<sup>2</sup> + hx<sup>3</sup>)",
    dimensionality : 2,
    numberOfParameters : 7
};

exports.NIST.NIST_Thurber_WithOffset = module.exports.NIST.NIST_Thurber_WithOffset = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_Thurber",
    extendedVersionString : "Offset",
    displayName : "NIST Thurber With Offset",
    displayHTML : "y = (a + bx + cx<sup>2</sup> + dx<sup>3</sup>) / (1.0 + fx + gx<sup>2</sup> + hx<sup>3</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 8
};


exports.Optical = module.exports.Optical = {};

exports.Optical.Cauchy = module.exports.Optical.Cauchy = {
    pythonModuleName : "Optical",
    pythonClassName : "Cauchy",
    extendedVersionString : "Default",
    displayName : "CAUCHY",
    displayHTML : "n = A + B/x<sup>2</sup> + C/x<sup>4</sup>",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Optical.Conrady1 = module.exports.Optical.Conrady1 = {
    pythonModuleName : "Optical",
    pythonClassName : "Conrady1",
    extendedVersionString : "Default",
    displayName : "CONRADY1",
    displayHTML : "n = A + B/x + C/x<sup>3.5</sup>",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Optical.Conrady2 = module.exports.Optical.Conrady2 = {
    pythonModuleName : "Optical",
    pythonClassName : "Conrady2",
    extendedVersionString : "Default",
    displayName : "CONRADY2",
    displayHTML : "n = A + B/x<sup>2</sup> + C/x<sup>3.5</sup>",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Optical.Hartmann1 = module.exports.Optical.Hartmann1 = {
    pythonModuleName : "Optical",
    pythonClassName : "Hartmann1",
    extendedVersionString : "Default",
    displayName : "HARTMANN1",
    displayHTML : "n = A + B/(C - x)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Optical.Hartmann2 = module.exports.Optical.Hartmann2 = {
    pythonModuleName : "Optical",
    pythonClassName : "Hartmann2",
    extendedVersionString : "Default",
    displayName : "HARTMANN2",
    displayHTML : "n = A + B/(C - x)<sup>2</sup>",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Optical.Hartmann3a = module.exports.Optical.Hartmann3a = {
    pythonModuleName : "Optical",
    pythonClassName : "Hartmann3a",
    extendedVersionString : "Default",
    displayName : "HARTMANN3a",
    displayHTML : "n = A + B/(C - x)<sup>1.2</sup>",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Optical.Hartmann3b = module.exports.Optical.Hartmann3b = {
    pythonModuleName : "Optical",
    pythonClassName : "Hartmann3b",
    extendedVersionString : "Default",
    displayName : "HARTMANN3b",
    displayHTML : "n = A/(x - B)<sup>1.2</sup>",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Optical.Hartmann3b_WithOffset = module.exports.Optical.Hartmann3b_WithOffset = {
    pythonModuleName : "Optical",
    pythonClassName : "Hartmann3b",
    extendedVersionString : "Offset",
    displayName : "HARTMANN3b With Offset",
    displayHTML : "n = A/(x - B)<sup>1.2</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Optical.Hartmann4 = module.exports.Optical.Hartmann4 = {
    pythonModuleName : "Optical",
    pythonClassName : "Hartmann4",
    extendedVersionString : "Default",
    displayName : "HARTMANN4",
    displayHTML : "n = A + B/(C - x) + D/(E - x)",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Optical.Herzberger2X2 = module.exports.Optical.Herzberger2X2 = {
    pythonModuleName : "Optical",
    pythonClassName : "Herzberger2X2",
    extendedVersionString : "Default",
    displayName : "HERZBRGR2X2",
    displayHTML : "n = A + Bx<sup>2</sup> + C / (x<sup>2</sup> - 0.028) + D / (x<sup>2</sup> - 0.028)<sup>2</sup>",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Optical.Herzberger3X2 = module.exports.Optical.Herzberger3X2 = {
    pythonModuleName : "Optical",
    pythonClassName : "Herzberger3X2",
    extendedVersionString : "Default",
    displayName : "HERZBRGR3X2",
    displayHTML : "n = A + Bx<sup>2</sup> + Cx<sup>4</sup> + D / (x<sup>2</sup> - 0.028) + E / (x<sup>2</sup> - 0.028)<sup>2</sup>",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Optical.Herzberger3X3 = module.exports.Optical.Herzberger3X3 = {
    pythonModuleName : "Optical",
    pythonClassName : "Herzberger3X3",
    extendedVersionString : "Default",
    displayName : "HERZBRGR3X3",
    displayHTML : "n = A + Bx<sup>2</sup> + Cx<sup>4</sup> + D / (x<sup>2</sup> - 0.028) + E / (x<sup>2</sup> - 0.028)<sup>2</sup> + F / (x<sup>2</sup> - 0.028)<sup>4</sup>",
    dimensionality : 2,
    numberOfParameters : 6
};

exports.Optical.Herzberger4X2 = module.exports.Optical.Herzberger4X2 = {
    pythonModuleName : "Optical",
    pythonClassName : "Herzberger4X2",
    extendedVersionString : "Default",
    displayName : "HERZBRGR4X2",
    displayHTML : "n = A + Bx<sup>2</sup> + Cx<sup>4</sup> + Dx<sup>6</sup> + E / (x<sup>2</sup> - 0.028) + F / (x<sup>2</sup> - 0.028)<sup>2</sup>",
    dimensionality : 2,
    numberOfParameters : 6
};

exports.Optical.Herzberger5X2 = module.exports.Optical.Herzberger5X2 = {
    pythonModuleName : "Optical",
    pythonClassName : "Herzberger5X2",
    extendedVersionString : "Default",
    displayName : "HERZBRGR5X2",
    displayHTML : "n = A + Bx<sup>2</sup> + Cx<sup>4</sup> + Dx<sup>6</sup> + Ex<sup>8</sup> + F / (x<sup>2</sup> - 0.028) + G / (x<sup>2</sup> - 0.028)<sup>2</sup>",
    dimensionality : 2,
    numberOfParameters : 7
};

exports.Optical.HerzbergerJK = module.exports.Optical.HerzbergerJK = {
    pythonModuleName : "Optical",
    pythonClassName : "HerzbergerJK",
    extendedVersionString : "Default",
    displayName : "HERZBRGRJK",
    displayHTML : "n = A + Bx<sup>2</sup> + Cx<sup>4</sup> + Dx<sup>6</sup> + E / (x<sup>2</sup> - J) + F / (x<sup>2</sup> - K)<sup>2</sup>",
    dimensionality : 2,
    numberOfParameters : 8
};

exports.Optical.HoO1 = module.exports.Optical.HoO1 = {
    pythonModuleName : "Optical",
    pythonClassName : "HoO1",
    extendedVersionString : "Default",
    displayName : "HoO1",
    displayHTML : "n<sup>2</sup> = A + Bx<sup>2</sup> + C / (x<sup>2</sup> - D<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Optical.HoO2 = module.exports.Optical.HoO2 = {
    pythonModuleName : "Optical",
    pythonClassName : "HoO2",
    extendedVersionString : "Default",
    displayName : "HoO2",
    displayHTML : "n<sup>2</sup> = A + Bx<sup>2</sup> + Cx<sup>2</sup> / (x<sup>2</sup> - D<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Optical.Kingslake1 = module.exports.Optical.Kingslake1 = {
    pythonModuleName : "Optical",
    pythonClassName : "Kingslake1",
    extendedVersionString : "Default",
    displayName : "KINGSLAKE1",
    displayHTML : "n<sup>2</sup> = A + B/(x<sup>2</sup>-C<sup>2</sup>) + D/(x<sup>2</sup>-E<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Optical.Kingslake2 = module.exports.Optical.Kingslake2 = {
    pythonModuleName : "Optical",
    pythonClassName : "Kingslake2",
    extendedVersionString : "Default",
    displayName : "KINGSLAKE2",
    displayHTML : "n<sup>2</sup> = A + B/(x<sup>2</sup>-C<sup>2</sup>) + D/(x<sup>2</sup>-E<sup>2</sup>) + F/(x<sup>2</sup>-G<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 7
};

exports.Optical.Misc01 = module.exports.Optical.Misc01 = {
    pythonModuleName : "Optical",
    pythonClassName : "Misc01",
    extendedVersionString : "Default",
    displayName : "MISC01",
    displayHTML : "n<sup>2</sup> = A + B/(x<sup>2</sup>-C<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Optical.Misc02 = module.exports.Optical.Misc02 = {
    pythonModuleName : "Optical",
    pythonClassName : "Misc02",
    extendedVersionString : "Default",
    displayName : "MISC02",
    displayHTML : "n<sup>2</sup> = A + Bx<sup>2</sup> + C/(x<sup>2</sup>-D<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Optical.Misc03 = module.exports.Optical.Misc03 = {
    pythonModuleName : "Optical",
    pythonClassName : "Misc03",
    extendedVersionString : "Default",
    displayName : "MISC03",
    displayHTML : "n<sup>2</sup> = A + B/x<sup>2</sup> + Cx<sup>2</sup>/(x<sup>2</sup>-D<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Optical.Misc04 = module.exports.Optical.Misc04 = {
    pythonModuleName : "Optical",
    pythonClassName : "Misc04",
    extendedVersionString : "Default",
    displayName : "MISC04",
    displayHTML : "n<sup>2</sup> = A + Bx<sup>2</sup> + Cx<sup>4</sup> + D/x<sup>2</sup> + Ex<sup>2</sup>/(x<sup>2</sup>-F+(Gx<sup>2</sup>/(x<sup>2</sup>-F)))",
    dimensionality : 2,
    numberOfParameters : 7
};

exports.Optical.Schott2X3 = module.exports.Optical.Schott2X3 = {
    pythonModuleName : "Optical",
    pythonClassName : "Schott2X3",
    extendedVersionString : "Default",
    displayName : "SCHOTT2X3",
    displayHTML : "n<sup>2</sup> = A + Bx<sup>2</sup> + C/x<sup>2</sup> + D/x<sup>4</sup> + E/x<sup>6</sup>",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Optical.Schott2X4 = module.exports.Optical.Schott2X4 = {
    pythonModuleName : "Optical",
    pythonClassName : "Schott2X4",
    extendedVersionString : "Default",
    displayName : "SCHOTT2X4",
    displayHTML : "n<sup>2</sup> = A + Bx<sup>2</sup> + C/x<sup>2</sup> + D/x<sup>4</sup> + E/x<sup>6</sup> + F/x<sup>8</sup>",
    dimensionality : 2,
    numberOfParameters : 6
};

exports.Optical.Schott2X5 = module.exports.Optical.Schott2X5 = {
    pythonModuleName : "Optical",
    pythonClassName : "Schott2X5",
    extendedVersionString : "Default",
    displayName : "SCHOTT2X5",
    displayHTML : "n<sup>2</sup> = A + Bx<sup>2</sup> + C/x<sup>2</sup> + D/x<sup>4</sup> + E/x<sup>6</sup> + F/x<sup>8</sup> + G/x<sup>10</sup>",
    dimensionality : 2,
    numberOfParameters : 7
};

exports.Optical.Schott2X6 = module.exports.Optical.Schott2X6 = {
    pythonModuleName : "Optical",
    pythonClassName : "Schott2X6",
    extendedVersionString : "Default",
    displayName : "SCHOTT2X6",
    displayHTML : "n<sup>2</sup> = A + Bx<sup>2</sup> + C/x<sup>2</sup> + D/x<sup>4</sup> + E/x<sup>6</sup> + F/x<sup>8</sup> + G/x<sup>10</sup> + H/x<sup>12</sup>",
    dimensionality : 2,
    numberOfParameters : 8
};

exports.Optical.Schott3X3 = module.exports.Optical.Schott3X3 = {
    pythonModuleName : "Optical",
    pythonClassName : "Schott3X3",
    extendedVersionString : "Default",
    displayName : "SCHOTT3X3",
    displayHTML : "n<sup>2</sup> = A + Bx<sup>2</sup> + Cx<sup>4</sup> + D/x<sup>2</sup> + E/x<sup>4</sup> + F/x<sup>6</sup>",
    dimensionality : 2,
    numberOfParameters : 6
};

exports.Optical.Schott3X4 = module.exports.Optical.Schott3X4 = {
    pythonModuleName : "Optical",
    pythonClassName : "Schott3X4",
    extendedVersionString : "Default",
    displayName : "SCHOTT3X4",
    displayHTML : "n<sup>2</sup> = A + Bx<sup>2</sup> + Cx<sup>4</sup> + D/x<sup>2</sup> + E/x<sup>4</sup> + F/x<sup>6</sup> + G/x<sup>8</sup>",
    dimensionality : 2,
    numberOfParameters : 7
};

exports.Optical.Schott3X5 = module.exports.Optical.Schott3X5 = {
    pythonModuleName : "Optical",
    pythonClassName : "Schott3X5",
    extendedVersionString : "Default",
    displayName : "SCHOTT3X5",
    displayHTML : "n<sup>2</sup> = A + Bx<sup>2</sup> + Cx<sup>4</sup> + D/x<sup>2</sup> + E/x<sup>4</sup> + F/x<sup>6</sup> + G/x<sup>8</sup> + H/x<sup>10</sup>",
    dimensionality : 2,
    numberOfParameters : 8
};

exports.Optical.Schott4X4 = module.exports.Optical.Schott4X4 = {
    pythonModuleName : "Optical",
    pythonClassName : "Schott4X4",
    extendedVersionString : "Default",
    displayName : "SCHOTT4X4",
    displayHTML : "n<sup>2</sup> = A + Bx<sup>2</sup> + Cx<sup>4</sup> + Dx<sup>6</sup> + E/x<sup>2</sup> + F/x<sup>4</sup> + G/x<sup>6</sup> + H/x<sup>8</sup>",
    dimensionality : 2,
    numberOfParameters : 8
};

exports.Optical.Schott5X5 = module.exports.Optical.Schott5X5 = {
    pythonModuleName : "Optical",
    pythonClassName : "Schott5X5",
    extendedVersionString : "Default",
    displayName : "SCHOTT5X5",
    displayHTML : "n<sup>2</sup> = A + Bx<sup>2</sup> + Cx<sup>4</sup> + Dx<sup>6</sup> + Ex<sup>8</sup> + F/x<sup>2</sup> + G/x<sup>4</sup> + H/x<sup>6</sup> + J/x<sup>8</sup> + K/x<sup>10</sup>",
    dimensionality : 2,
    numberOfParameters : 10
};

exports.Optical.Sell1T = module.exports.Optical.Sell1T = {
    pythonModuleName : "Optical",
    pythonClassName : "Sell1T",
    extendedVersionString : "Default",
    displayName : "SELL1T",
    displayHTML : "n<sup>2</sup> = 1 + Ax<sup>2</sup> / (x<sup>2</sup> - B<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Optical.Sell1TA = module.exports.Optical.Sell1TA = {
    pythonModuleName : "Optical",
    pythonClassName : "Sell1TA",
    extendedVersionString : "Default",
    displayName : "SELL1TA",
    displayHTML : "n<sup>2</sup> = A + Bx<sup>2</sup> / (x<sup>2</sup> - C<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Optical.Sell2T = module.exports.Optical.Sell2T = {
    pythonModuleName : "Optical",
    pythonClassName : "Sell2T",
    extendedVersionString : "Default",
    displayName : "SELL2T",
    displayHTML : "n<sup>2</sup> = 1 + Ax<sup>2</sup>/(x<sup>2</sup>-B<sup>2</sup>) + Cx<sup>2</sup>/(x<sup>2</sup>-D<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Optical.Sell2TA = module.exports.Optical.Sell2TA = {
    pythonModuleName : "Optical",
    pythonClassName : "Sell2TA",
    extendedVersionString : "Default",
    displayName : "SELL2TA",
    displayHTML : "n<sup>2</sup> = A + Bx<sup>2</sup>/(x<sup>2</sup>-C<sup>2</sup>) + Dx<sup>2</sup>/(x<sup>2</sup>-E<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Optical.Sell3T = module.exports.Optical.Sell3T = {
    pythonModuleName : "Optical",
    pythonClassName : "Sell3T",
    extendedVersionString : "Default",
    displayName : "SELL3T",
    displayHTML : "n<sup>2</sup> = 1 + Ax<sup>2</sup>/(x<sup>2</sup>-B<sup>2</sup>) + Cx<sup>2</sup>/(x<sup>2</sup>-D<sup>2</sup>) + Ex<sup>2</sup>/(x<sup>2</sup>-F<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 6
};

exports.Optical.Sell3TA = module.exports.Optical.Sell3TA = {
    pythonModuleName : "Optical",
    pythonClassName : "Sell3TA",
    extendedVersionString : "Default",
    displayName : "SELL3TA",
    displayHTML : "n<sup>2</sup> = A + Bx<sup>2</sup>/(x<sup>2</sup>-C<sup>2</sup>) + Dx<sup>2</sup>/(x<sup>2</sup>-E<sup>2</sup>) + Fx<sup>2</sup>/(x<sup>2</sup>-G<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 7
};

exports.Optical.Sell4T = module.exports.Optical.Sell4T = {
    pythonModuleName : "Optical",
    pythonClassName : "Sell4T",
    extendedVersionString : "Default",
    displayName : "SELL4T",
    displayHTML : "n<sup>2</sup> = 1 + Ax<sup>2</sup>/(x<sup>2</sup>-B<sup>2</sup>) + Cx<sup>2</sup>/(x<sup>2</sup>-D<sup>2</sup>) + Ex<sup>2</sup>/(x<sup>2</sup>-F<sup>2</sup>) + Gx<sup>2</sup>/(x<sup>2</sup>-H<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 8
};

exports.Optical.Sell4TA = module.exports.Optical.Sell4TA = {
    pythonModuleName : "Optical",
    pythonClassName : "Sell4TA",
    extendedVersionString : "Default",
    displayName : "SELL4TA",
    displayHTML : "n<sup>2</sup> = A + Bx<sup>2</sup>/(x<sup>2</sup>-C<sup>2</sup>) + Dx<sup>2</sup>/(x<sup>2</sup>-E<sup>2</sup>) + Fx<sup>2</sup>/(x<sup>2</sup>-G<sup>2</sup>) + Hx<sup>2</sup>/(x<sup>2</sup>-J<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 9
};

exports.Optical.Sell5T = module.exports.Optical.Sell5T = {
    pythonModuleName : "Optical",
    pythonClassName : "Sell5T",
    extendedVersionString : "Default",
    displayName : "SELL5T",
    displayHTML : "n<sup>2</sup> = 1 + Ax<sup>2</sup>/(x<sup>2</sup>-B<sup>2</sup>) + Cx<sup>2</sup>/(x<sup>2</sup>-D<sup>2</sup>) + Ex<sup>2</sup>/(x<sup>2</sup>-F<sup>2</sup>) + Gx<sup>2</sup>/(x<sup>2</sup>-H<sup>2</sup>) + Jx<sup>2</sup>/(x<sup>2</sup>-K<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 10
};

exports.Optical.Sell5TA = module.exports.Optical.Sell5TA = {
    pythonModuleName : "Optical",
    pythonClassName : "Sell5TA",
    extendedVersionString : "Default",
    displayName : "SELL5TA",
    displayHTML : "n<sup>2</sup> = A + Bx<sup>2</sup>/(x<sup>2</sup>-C<sup>2</sup>) + Dx<sup>2</sup>/(x<sup>2</sup>-E<sup>2</sup>) + Fx<sup>2</sup>/(x<sup>2</sup>-G<sup>2</sup>) + Hx<sup>2</sup>/(x<sup>2</sup>-J<sup>2</sup>) + Kx<sup>2</sup>/(x<sup>2</sup>-M<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 11
};

exports.Optical.Sell6TA = module.exports.Optical.Sell6TA = {
    pythonModuleName : "Optical",
    pythonClassName : "Sell6TA",
    extendedVersionString : "Default",
    displayName : "SELL6TA",
    displayHTML : "n<sup>2</sup> = A + Bx<sup>2</sup>/(x<sup>2</sup>-C<sup>2</sup>) + Dx<sup>2</sup>/(x<sup>2</sup>-E<sup>2</sup>) + Fx<sup>2</sup>/(x<sup>2</sup>-G<sup>2</sup>) + Hx<sup>2</sup>/(x<sup>2</sup>-J<sup>2</sup>) + Kx<sup>2</sup>/(x<sup>2</sup>-M<sup>2</sup>) + Nx<sup>2</sup>/(x<sup>2</sup>-P<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 13
};

exports.Optical.Sell7TA = module.exports.Optical.Sell7TA = {
    pythonModuleName : "Optical",
    pythonClassName : "Sell7TA",
    extendedVersionString : "Default",
    displayName : "SELL7TA",
    displayHTML : "n<sup>2</sup> = A + Bx<sup>2</sup>/(x<sup>2</sup>-C<sup>2</sup>) + Dx<sup>2</sup>/(x<sup>2</sup>-E<sup>2</sup>) + Fx<sup>2</sup>/(x<sup>2</sup>-G<sup>2</sup>) + Hx<sup>2</sup>/(x<sup>2</sup>-J<sup>2</sup>) + Kx<sup>2</sup>/(x<sup>2</sup>-M<sup>2</sup>) + Nx<sup>2</sup>/(x<sup>2</sup>-P<sup>2</sup>) + Qx<sup>2</sup>/(x<sup>2</sup>-R<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 15
};

exports.Optical.Sellmod1 = module.exports.Optical.Sellmod1 = {
    pythonModuleName : "Optical",
    pythonClassName : "Sellmod1",
    extendedVersionString : "Default",
    displayName : "SELLMOD1",
    displayHTML : "n<sup>2</sup> = A + Bx + Cx<sup>2</sup> + Dx<sup>2</sup>/(x<sup>2</sup>-E<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Optical.Sellmod1A = module.exports.Optical.Sellmod1A = {
    pythonModuleName : "Optical",
    pythonClassName : "Sellmod1A",
    extendedVersionString : "Default",
    displayName : "SELLMOD1A",
    displayHTML : "n<sup>2</sup> = A + Bx + Cx<sup>2</sup> + D/(x<sup>2</sup>-E<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Optical.Sellmod2 = module.exports.Optical.Sellmod2 = {
    pythonModuleName : "Optical",
    pythonClassName : "Sellmod2",
    extendedVersionString : "Default",
    displayName : "SELLMOD2",
    displayHTML : "n<sup>2</sup> = A + Bx + Cx<sup>4</sup> + Dx<sup>2</sup>/(x<sup>2</sup>-E<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Optical.Sellmod2A = module.exports.Optical.Sellmod2A = {
    pythonModuleName : "Optical",
    pythonClassName : "Sellmod2A",
    extendedVersionString : "Default",
    displayName : "SELLMOD2A",
    displayHTML : "n<sup>2</sup> = A + Bx + Cx<sup>4</sup> + D/(x<sup>2</sup>-E<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Optical.Sellmod3 = module.exports.Optical.Sellmod3 = {
    pythonModuleName : "Optical",
    pythonClassName : "Sellmod3",
    extendedVersionString : "Default",
    displayName : "SELLMOD3",
    displayHTML : "n<sup>2</sup> = (Ax<sup>2</sup>+B)/(x<sup>2</sup>-C<sup>2</sup>) + Dx<sup>2</sup>/(x<sup>2</sup>-E<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Optical.Sellmod3_WithOffset = module.exports.Optical.Sellmod3_WithOffset = {
    pythonModuleName : "Optical",
    pythonClassName : "Sellmod3",
    extendedVersionString : "Offset",
    displayName : "SELLMOD3 With Offset",
    displayHTML : "n<sup>2</sup> = (Ax<sup>2</sup>+B)/(x<sup>2</sup>-C<sup>2</sup>) + Dx<sup>2</sup>/(x<sup>2</sup>-E<sup>2</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 6
};

exports.Optical.Sellmod4 = module.exports.Optical.Sellmod4 = {
    pythonModuleName : "Optical",
    pythonClassName : "Sellmod4",
    extendedVersionString : "Default",
    displayName : "SELLMOD4",
    displayHTML : "n<sup>2</sup> = A + Bx<sup>2</sup> + C/x<sup>2</sup> + Dx<sup>2</sup>/(x<sup>2</sup>-E<sup>2</sup>) + Fx<sup>2</sup>/(x<sup>2</sup>-G<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 7
};

exports.Optical.Sellmod4A = module.exports.Optical.Sellmod4A = {
    pythonModuleName : "Optical",
    pythonClassName : "Sellmod4A",
    extendedVersionString : "Default",
    displayName : "SELLMOD4A",
    displayHTML : "n<sup>2</sup> = A + Bx<sup>2</sup> + C/x<sup>2</sup> + D/(x<sup>2</sup>-E<sup>2</sup>) + F/(x<sup>2</sup>-G<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 7
};

exports.Optical.Sellmod5 = module.exports.Optical.Sellmod5 = {
    pythonModuleName : "Optical",
    pythonClassName : "Sellmod5",
    extendedVersionString : "Default",
    displayName : "SELLMOD5",
    displayHTML : "n<sup>2</sup> = A + Bx<sup>2</sup> + Cx<sup>2</sup>/(x<sup>2</sup>-D<sup>2</sup>) + Ex<sup>2</sup>/(x<sup>2</sup>-F<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 6
};

exports.Optical.Sellmod6 = module.exports.Optical.Sellmod6 = {
    pythonModuleName : "Optical",
    pythonClassName : "Sellmod6",
    extendedVersionString : "Default",
    displayName : "SELLMOD6",
    displayHTML : "n<sup>2</sup> = A + Bx<sup>2</sup>/(x<sup>2</sup>-C<sup>2</sup>) + D/(x<sup>2</sup>-E<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Optical.Sellmod7 = module.exports.Optical.Sellmod7 = {
    pythonModuleName : "Optical",
    pythonClassName : "Sellmod7",
    extendedVersionString : "Default",
    displayName : "SELLMOD7",
    displayHTML : "n<sup>2</sup> = A + Bx<sup>2</sup> + Cx<sup>4</sup> + D/x<sup>6</sup> + Ex<sup>2</sup>/(x<sup>2</sup>-F<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 6
};

exports.Optical.Sellmod7A = module.exports.Optical.Sellmod7A = {
    pythonModuleName : "Optical",
    pythonClassName : "Sellmod7A",
    extendedVersionString : "Default",
    displayName : "SELLMOD7A",
    displayHTML : "n<sup>2</sup> = A + Bx<sup>2</sup> + Cx<sup>4</sup> + D/x<sup>6</sup> + E/(x<sup>2</sup>-F<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 6
};

exports.Optical.Sellmod8 = module.exports.Optical.Sellmod8 = {
    pythonModuleName : "Optical",
    pythonClassName : "Sellmod8",
    extendedVersionString : "Default",
    displayName : "SELLMOD8",
    displayHTML : "n<sup>2</sup> = A + Bx<sup>2</sup> + Cx<sup>4</sup> + D/(x<sup>2</sup>-E<sup>2</sup>) + F/(x<sup>2</sup>-G<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 7
};

exports.Optical.Sellmod9 = module.exports.Optical.Sellmod9 = {
    pythonModuleName : "Optical",
    pythonClassName : "Sellmod9",
    extendedVersionString : "Default",
    displayName : "SELLMOD9",
    displayHTML : "n<sup>2</sup> = A + B/x<sup>2</sup> + C/x<sup>4</sup> + D/x<sup>6</sup> + Ex<sup>2</sup>/(x<sup>2</sup>-F<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 6
};


exports.Peak = module.exports.Peak = {};

exports.Peak.ArnoldCohenLogNormalShifted = module.exports.Peak.ArnoldCohenLogNormalShifted = {
    pythonModuleName : "Peak",
    pythonClassName : "ArnoldCohenLogNormalShifted",
    extendedVersionString : "Default",
    displayName : "Arnold Cohen Log-Normal Peak Shifted",
    displayHTML : "y = a * (exp(-0.5 * ((ln(x-f)-b)/c)<sup>2</sup>)) / (d * (x-g))",
    dimensionality : 2,
    numberOfParameters : 6
};

exports.Peak.ArnoldCohenLogNormalShifted_WithOffset = module.exports.Peak.ArnoldCohenLogNormalShifted_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "ArnoldCohenLogNormalShifted",
    extendedVersionString : "Offset",
    displayName : "Arnold Cohen Log-Normal Peak Shifted With Offset",
    displayHTML : "y = a * (exp(-0.5 * ((ln(x-f)-b)/c)<sup>2</sup>)) / (d * (x-g)) + Offset",
    dimensionality : 2,
    numberOfParameters : 7
};

exports.Peak.ArnoldCohenTwoParameterLogNormalShifted = module.exports.Peak.ArnoldCohenTwoParameterLogNormalShifted = {
    pythonModuleName : "Peak",
    pythonClassName : "ArnoldCohenTwoParameterLogNormalShifted",
    extendedVersionString : "Default",
    displayName : "Arnold Cohen Two-Parameter Log-Normal Peak Shifted",
    displayHTML : "y = exp(-0.5 * ((ln(x-d)-b)/c)<sup>2</sup>) / (sqrt(2*pi) * c * (x-f))",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Peak.ArnoldCohenTwoParameterLogNormalShifted_WithOffset = module.exports.Peak.ArnoldCohenTwoParameterLogNormalShifted_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "ArnoldCohenTwoParameterLogNormalShifted",
    extendedVersionString : "Offset",
    displayName : "Arnold Cohen Two-Parameter Log-Normal Peak Shifted With Offset",
    displayHTML : "y = exp(-0.5 * ((ln(x-d)-b)/c)<sup>2</sup>) / (sqrt(2*pi) * c * (x-f)) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Peak.BoxLucasA = module.exports.Peak.BoxLucasA = {
    pythonModuleName : "Peak",
    pythonClassName : "BoxLucasA",
    extendedVersionString : "Default",
    displayName : "Box Lucas A",
    displayHTML : "y = a * (1.0 - b<sup>x</sup>)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Peak.BoxLucasA_WithOffset = module.exports.Peak.BoxLucasA_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "BoxLucasA",
    extendedVersionString : "Offset",
    displayName : "Box Lucas A With Offset",
    displayHTML : "y = a * (1.0 - b<sup>x</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Peak.BoxLucasAShifted = module.exports.Peak.BoxLucasAShifted = {
    pythonModuleName : "Peak",
    pythonClassName : "BoxLucasAShifted",
    extendedVersionString : "Default",
    displayName : "Box Lucas A Shifted",
    displayHTML : "y = a * (1.0 - b<sup>x-c</sup>)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Peak.BoxLucasAShifted_WithOffset = module.exports.Peak.BoxLucasAShifted_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "BoxLucasAShifted",
    extendedVersionString : "Offset",
    displayName : "Box Lucas A Shifted With Offset",
    displayHTML : "y = a * (1.0 - b<sup>x-c</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Peak.BoxLucasB = module.exports.Peak.BoxLucasB = {
    pythonModuleName : "Peak",
    pythonClassName : "BoxLucasB",
    extendedVersionString : "Default",
    displayName : "Box Lucas B",
    displayHTML : "y = a * (1.0 - exp(-bx))",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Peak.BoxLucasB_WithOffset = module.exports.Peak.BoxLucasB_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "BoxLucasB",
    extendedVersionString : "Offset",
    displayName : "Box Lucas B With Offset",
    displayHTML : "y = a * (1.0 - exp(-bx)) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Peak.BoxLucasBShifted = module.exports.Peak.BoxLucasBShifted = {
    pythonModuleName : "Peak",
    pythonClassName : "BoxLucasBShifted",
    extendedVersionString : "Default",
    displayName : "Box Lucas B Shifted",
    displayHTML : "y = a * (1.0 - exp(-b(x-c)))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Peak.BoxLucasBShifted_WithOffset = module.exports.Peak.BoxLucasBShifted_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "BoxLucasBShifted",
    extendedVersionString : "Offset",
    displayName : "Box Lucas B Shifted With Offset",
    displayHTML : "y = a * (1.0 - exp(-b(x-c))) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Peak.BoxLucasC = module.exports.Peak.BoxLucasC = {
    pythonModuleName : "Peak",
    pythonClassName : "BoxLucasC",
    extendedVersionString : "Default",
    displayName : "Box Lucas C",
    displayHTML : "y = (a / (a-b)) * (exp(-bx) - exp(-ax))",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Peak.BoxLucasC_WithOffset = module.exports.Peak.BoxLucasC_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "BoxLucasC",
    extendedVersionString : "Offset",
    displayName : "Box Lucas C With Offset",
    displayHTML : "y = (a / (a-b)) * (exp(-bx) - exp(-ax)) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Peak.BoxLucasCShifted = module.exports.Peak.BoxLucasCShifted = {
    pythonModuleName : "Peak",
    pythonClassName : "BoxLucasCShifted",
    extendedVersionString : "Default",
    displayName : "Box Lucas C shifted",
    displayHTML : "y = (a / (a-b)) * (exp(-b(x-c)) - exp(-a(x-c)))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Peak.BoxLucasCShifted_WithOffset = module.exports.Peak.BoxLucasCShifted_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "BoxLucasCShifted",
    extendedVersionString : "Offset",
    displayName : "Box Lucas C shifted With Offset",
    displayHTML : "y = (a / (a-b)) * (exp(-b(x-c)) - exp(-a(x-c))) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Peak.ExtremeValue4ParameterPeak = module.exports.Peak.ExtremeValue4ParameterPeak = {
    pythonModuleName : "Peak",
    pythonClassName : "ExtremeValue4ParameterPeak",
    extendedVersionString : "Default",
    displayName : "Extreme Value 4 Parameter Peak",
    displayHTML : "y = a * exp(-x + b + c - c*d*exp(-1.0 * ((x + c*ln(d) - b) / c)) / (c*d))",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Peak.ExtremeValue4ParameterPeak_WithOffset = module.exports.Peak.ExtremeValue4ParameterPeak_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "ExtremeValue4ParameterPeak",
    extendedVersionString : "Offset",
    displayName : "Extreme Value 4 Parameter Peak With Offset",
    displayHTML : "y = a * exp(-x + b + c - c*d*exp(-1.0 * ((x + c*ln(d) - b) / c)) / (c*d)) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Peak.ExtremeValueArea = module.exports.Peak.ExtremeValueArea = {
    pythonModuleName : "Peak",
    pythonClassName : "ExtremeValueArea",
    extendedVersionString : "Default",
    displayName : "Extreme Value Area",
    displayHTML : "y = (a/c) * exp(-exp(-((x-b)/c))-((x-b)/c))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Peak.ExtremeValueArea_WithOffset = module.exports.Peak.ExtremeValueArea_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "ExtremeValueArea",
    extendedVersionString : "Offset",
    displayName : "Extreme Value Area With Offset",
    displayHTML : "y = (a/c) * exp(-exp(-((x-b)/c))-((x-b)/c)) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Peak.ExtremeValuePeak = module.exports.Peak.ExtremeValuePeak = {
    pythonModuleName : "Peak",
    pythonClassName : "ExtremeValuePeak",
    extendedVersionString : "Default",
    displayName : "Extreme Value Peak",
    displayHTML : "y = a * exp(-exp(-((x-b)/c))-((x-b)/c)+1.0)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Peak.ExtremeValuePeak_WithOffset = module.exports.Peak.ExtremeValuePeak_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "ExtremeValuePeak",
    extendedVersionString : "Offset",
    displayName : "Extreme Value Peak With Offset",
    displayHTML : "y = a * exp(-exp(-((x-b)/c))-((x-b)/c)+1.0) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Peak.GaussianArea = module.exports.Peak.GaussianArea = {
    pythonModuleName : "Peak",
    pythonClassName : "GaussianArea",
    extendedVersionString : "Default",
    displayName : "Gaussian Area",
    displayHTML : "y = (a / (pow(2*pi, 0.5) * c)) * exp(-0.5 * ((x-b)/c)<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Peak.GaussianArea_WithOffset = module.exports.Peak.GaussianArea_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "GaussianArea",
    extendedVersionString : "Offset",
    displayName : "Gaussian Area With Offset",
    displayHTML : "y = (a / (pow(2*pi, 0.5) * c)) * exp(-0.5 * ((x-b)/c)<sup>2</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Peak.GaussianPeak = module.exports.Peak.GaussianPeak = {
    pythonModuleName : "Peak",
    pythonClassName : "GaussianPeak",
    extendedVersionString : "Default",
    displayName : "Gaussian Peak",
    displayHTML : "y = a * exp(-0.5 * ((x-b)/c)<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Peak.GaussianPeak_WithOffset = module.exports.Peak.GaussianPeak_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "GaussianPeak",
    extendedVersionString : "Offset",
    displayName : "Gaussian Peak With Offset",
    displayHTML : "y = a * exp(-0.5 * ((x-b)/c)<sup>2</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Peak.GaussianPeak_Modified = module.exports.Peak.GaussianPeak_Modified = {
    pythonModuleName : "Peak",
    pythonClassName : "GaussianPeak_Modified",
    extendedVersionString : "Default",
    displayName : "Gaussian Peak Modified",
    displayHTML : "y = a * exp(-0.5 * ((x-b)/c)<sup>d</sup>)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Peak.GaussianPeak_Modified_WithOffset = module.exports.Peak.GaussianPeak_Modified_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "GaussianPeak_Modified",
    extendedVersionString : "Offset",
    displayName : "Gaussian Peak Modified With Offset",
    displayHTML : "y = a * exp(-0.5 * ((x-b)/c)<sup>d</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Peak.Hamilton = module.exports.Peak.Hamilton = {
    pythonModuleName : "Peak",
    pythonClassName : "Hamilton",
    extendedVersionString : "Default",
    displayName : "Hamilton",
    displayHTML : "Vb = Gb * (I/mu)<sup>ln(mu/I)/(B*B)</sup> + (Vb<sub>max</sub> * I)/(I + sigma_b)",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Peak.Hamilton_WithOffset = module.exports.Peak.Hamilton_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "Hamilton",
    extendedVersionString : "Offset",
    displayName : "Hamilton With Offset",
    displayHTML : "Vb = Gb * (I/mu)<sup>ln(mu/I)/(B*B)</sup> + (Vb<sub>max</sub> * I)/(I + sigma_b) + Offset",
    dimensionality : 2,
    numberOfParameters : 6
};

exports.Peak.LaplaceArea = module.exports.Peak.LaplaceArea = {
    pythonModuleName : "Peak",
    pythonClassName : "LaplaceArea",
    extendedVersionString : "Default",
    displayName : "Laplace Area",
    displayHTML : "y = (a / (pow(2.0, 0.5) * c)) * exp((-1.0 * pow(2.0, 0.5) * abs(x-b))/c)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Peak.LaplaceArea_WithOffset = module.exports.Peak.LaplaceArea_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "LaplaceArea",
    extendedVersionString : "Offset",
    displayName : "Laplace Area With Offset",
    displayHTML : "y = (a / (pow(2.0, 0.5) * c)) * exp((-1.0 * pow(2.0, 0.5) * abs(x-b))/c) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Peak.LaplacePeak = module.exports.Peak.LaplacePeak = {
    pythonModuleName : "Peak",
    pythonClassName : "LaplacePeak",
    extendedVersionString : "Default",
    displayName : "Laplace Peak",
    displayHTML : "y = a * exp((-1.0 * pow(2.0, 0.5) * abs(x-b))/c)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Peak.LaplacePeak_WithOffset = module.exports.Peak.LaplacePeak_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "LaplacePeak",
    extendedVersionString : "Offset",
    displayName : "Laplace Peak With Offset",
    displayHTML : "y = a * exp((-1.0 * pow(2.0, 0.5) * abs(x-b))/c) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Peak.LogNormal4Parameter = module.exports.Peak.LogNormal4Parameter = {
    pythonModuleName : "Peak",
    pythonClassName : "LogNormal4Parameter",
    extendedVersionString : "Default",
    displayName : "Log-Normal 4 Parameter",
    displayHTML : "y = a * exp(-1.0 * (ln(2) * ln((((x-b) * (d<sup>2</sup>-1)) / (c*d)) + 1.0)<sup>2</sup>) / ln(d)<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Peak.LogNormal4Parameter_WithOffset = module.exports.Peak.LogNormal4Parameter_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "LogNormal4Parameter",
    extendedVersionString : "Offset",
    displayName : "Log-Normal 4 Parameter With Offset",
    displayHTML : "y = a * exp(-1.0 * (ln(2) * ln((((x-b) * (d<sup>2</sup>-1)) / (c*d)) + 1.0)<sup>2</sup>) / ln(d)<sup>2</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Peak.LogNormalA = module.exports.Peak.LogNormalA = {
    pythonModuleName : "Peak",
    pythonClassName : "LogNormalA",
    extendedVersionString : "Default",
    displayName : "Log-Normal Peak A",
    displayHTML : "y = a * exp(-0.5 * ((ln(x)-b)/c)<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Peak.LogNormalA_WithOffset = module.exports.Peak.LogNormalA_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "LogNormalA",
    extendedVersionString : "Offset",
    displayName : "Log-Normal Peak A With Offset",
    displayHTML : "y = a * exp(-0.5 * ((ln(x)-b)/c)<sup>2</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Peak.LogNormalAShifted = module.exports.Peak.LogNormalAShifted = {
    pythonModuleName : "Peak",
    pythonClassName : "LogNormalAShifted",
    extendedVersionString : "Default",
    displayName : "Log-Normal Peak A Shifted",
    displayHTML : "y = a * exp(-0.5 * ((ln(x-d)-b)/c)<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Peak.LogNormalAShifted_WithOffset = module.exports.Peak.LogNormalAShifted_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "LogNormalAShifted",
    extendedVersionString : "Offset",
    displayName : "Log-Normal Peak A Shifted With Offset",
    displayHTML : "y = a * exp(-0.5 * ((ln(x-d)-b)/c)<sup>2</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Peak.LogNormalA_Modified = module.exports.Peak.LogNormalA_Modified = {
    pythonModuleName : "Peak",
    pythonClassName : "LogNormalA_Modified",
    extendedVersionString : "Default",
    displayName : "Log-Normal Peak A Modified",
    displayHTML : "y = a * exp(-0.5 * ((ln(x)-b)/c)<sup>d</sup>)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Peak.LogNormalA_Modified_WithOffset = module.exports.Peak.LogNormalA_Modified_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "LogNormalA_Modified",
    extendedVersionString : "Offset",
    displayName : "Log-Normal Peak A Modified With Offset",
    displayHTML : "y = a * exp(-0.5 * ((ln(x)-b)/c)<sup>d</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Peak.LogNormalA_ModifiedShifted = module.exports.Peak.LogNormalA_ModifiedShifted = {
    pythonModuleName : "Peak",
    pythonClassName : "LogNormalA_ModifiedShifted",
    extendedVersionString : "Default",
    displayName : "Log-Normal Peak A Modified Shifted",
    displayHTML : "y = a * exp(-0.5 * ((ln(x-f)-b)/c)<sup>d</sup>)",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Peak.LogNormalA_ModifiedShifted_WithOffset = module.exports.Peak.LogNormalA_ModifiedShifted_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "LogNormalA_ModifiedShifted",
    extendedVersionString : "Offset",
    displayName : "Log-Normal Peak A Modified Shifted With Offset",
    displayHTML : "y = a * exp(-0.5 * ((ln(x-f)-b)/c)<sup>d</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 6
};

exports.Peak.LogNormalB = module.exports.Peak.LogNormalB = {
    pythonModuleName : "Peak",
    pythonClassName : "LogNormalB",
    extendedVersionString : "Default",
    displayName : "Log-Normal Peak B",
    displayHTML : "y = a * exp(-0.5 * (ln(x/b)/c)<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Peak.LogNormalB_WithOffset = module.exports.Peak.LogNormalB_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "LogNormalB",
    extendedVersionString : "Offset",
    displayName : "Log-Normal Peak B With Offset",
    displayHTML : "y = a * exp(-0.5 * (ln(x/b)/c)<sup>2</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Peak.LogNormalBShifted = module.exports.Peak.LogNormalBShifted = {
    pythonModuleName : "Peak",
    pythonClassName : "LogNormalBShifted",
    extendedVersionString : "Default",
    displayName : "Log-Normal Peak B Shifted",
    displayHTML : "y = a * exp(-0.5 * (ln((x-d/b))/c)<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Peak.LogNormalBShifted_WithOffset = module.exports.Peak.LogNormalBShifted_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "LogNormalBShifted",
    extendedVersionString : "Offset",
    displayName : "Log-Normal Peak B Shifted With Offset",
    displayHTML : "y = a * exp(-0.5 * (ln((x-d/b))/c)<sup>2</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Peak.LogNormalB_Modified = module.exports.Peak.LogNormalB_Modified = {
    pythonModuleName : "Peak",
    pythonClassName : "LogNormalB_Modified",
    extendedVersionString : "Default",
    displayName : "Log-Normal Peak B Modified",
    displayHTML : "y = a * exp(-0.5 * (ln(x/b)/c)<sup>d</sup>)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Peak.LogNormalB_Modified_WithOffset = module.exports.Peak.LogNormalB_Modified_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "LogNormalB_Modified",
    extendedVersionString : "Offset",
    displayName : "Log-Normal Peak B Modified With Offset",
    displayHTML : "y = a * exp(-0.5 * (ln(x/b)/c)<sup>d</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Peak.LogNormalB_ModifiedShifted = module.exports.Peak.LogNormalB_ModifiedShifted = {
    pythonModuleName : "Peak",
    pythonClassName : "LogNormalB_ModifiedShifted",
    extendedVersionString : "Default",
    displayName : "Log-Normal Peak B Modified Shifted",
    displayHTML : "y = a * exp(-0.5 * (ln((x-f)/b)/c)<sup>d</sup>)",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Peak.LogNormalB_ModifiedShifted_WithOffset = module.exports.Peak.LogNormalB_ModifiedShifted_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "LogNormalB_ModifiedShifted",
    extendedVersionString : "Offset",
    displayName : "Log-Normal Peak B Modified Shifted With Offset",
    displayHTML : "y = a * exp(-0.5 * (ln((x-f)/b)/c)<sup>d</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 6
};

exports.Peak.LogisticArea = module.exports.Peak.LogisticArea = {
    pythonModuleName : "Peak",
    pythonClassName : "LogisticArea",
    extendedVersionString : "Default",
    displayName : "Logistic Area",
    displayHTML : "y = a * exp(-1.0 * (x-b) / c) / (c * (1.0 + exp(-1.0 * (x-b) / c))<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Peak.LogisticArea_WithOffset = module.exports.Peak.LogisticArea_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "LogisticArea",
    extendedVersionString : "Offset",
    displayName : "Logistic Area With Offset",
    displayHTML : "y = a * exp(-1.0 * (x-b) / c) / (c * (1.0 + exp(-1.0 * (x-b) / c))<sup>2</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Peak.LogisticPeak = module.exports.Peak.LogisticPeak = {
    pythonModuleName : "Peak",
    pythonClassName : "LogisticPeak",
    extendedVersionString : "Default",
    displayName : "Logistic Peak",
    displayHTML : "y = 4a * exp(-1.0 * (x-b) / c) / (1.0 + exp(-1.0 * (x-b) / c))<sup>2</sup>",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Peak.LogisticPeak_WithOffset = module.exports.Peak.LogisticPeak_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "LogisticPeak",
    extendedVersionString : "Offset",
    displayName : "Logistic Peak With Offset",
    displayHTML : "y = 4a * exp(-1.0 * (x-b) / c) / (1.0 + exp(-1.0 * (x-b) / c))<sup>2</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Peak.LorentzianModifiedPeakA = module.exports.Peak.LorentzianModifiedPeakA = {
    pythonModuleName : "Peak",
    pythonClassName : "LorentzianModifiedPeakA",
    extendedVersionString : "Default",
    displayName : "Lorentzian Modified Peak A",
    displayHTML : "y = 1.0 / (1.0 + (x-a)<sup>b</sup>)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Peak.LorentzianModifiedPeakA_WithOffset = module.exports.Peak.LorentzianModifiedPeakA_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "LorentzianModifiedPeakA",
    extendedVersionString : "Offset",
    displayName : "Lorentzian Modified Peak A With Offset",
    displayHTML : "y = 1.0 / (1.0 + (x-a)<sup>b</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Peak.LorentzianModifiedPeakB = module.exports.Peak.LorentzianModifiedPeakB = {
    pythonModuleName : "Peak",
    pythonClassName : "LorentzianModifiedPeakB",
    extendedVersionString : "Default",
    displayName : "Lorentzian Modified Peak B",
    displayHTML : "y = 1.0 / (a + (x-b)<sup>c</sup>)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Peak.LorentzianModifiedPeakB_WithOffset = module.exports.Peak.LorentzianModifiedPeakB_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "LorentzianModifiedPeakB",
    extendedVersionString : "Offset",
    displayName : "Lorentzian Modified Peak B With Offset",
    displayHTML : "y = 1.0 / (a + (x-b)<sup>c</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Peak.LorentzianModifiedPeakC = module.exports.Peak.LorentzianModifiedPeakC = {
    pythonModuleName : "Peak",
    pythonClassName : "LorentzianModifiedPeakC",
    extendedVersionString : "Default",
    displayName : "Lorentzian Modified Peak C",
    displayHTML : "y = a / (b + (x-c)<sup>d</sup>)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Peak.LorentzianModifiedPeakC_WithOffset = module.exports.Peak.LorentzianModifiedPeakC_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "LorentzianModifiedPeakC",
    extendedVersionString : "Offset",
    displayName : "Lorentzian Modified Peak C With Offset",
    displayHTML : "y = a / (b + (x-c)<sup>d</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Peak.LorentzianModifiedPeakD = module.exports.Peak.LorentzianModifiedPeakD = {
    pythonModuleName : "Peak",
    pythonClassName : "LorentzianModifiedPeakD",
    extendedVersionString : "Default",
    displayName : "Lorentzian Modified Peak D",
    displayHTML : "y = 1.0 / (1.0 + ((x-a)/b)<sup>c</sup>)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Peak.LorentzianModifiedPeakD_WithOffset = module.exports.Peak.LorentzianModifiedPeakD_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "LorentzianModifiedPeakD",
    extendedVersionString : "Offset",
    displayName : "Lorentzian Modified Peak D With Offset",
    displayHTML : "y = 1.0 / (1.0 + ((x-a)/b)<sup>c</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Peak.LorentzianModifiedPeakE = module.exports.Peak.LorentzianModifiedPeakE = {
    pythonModuleName : "Peak",
    pythonClassName : "LorentzianModifiedPeakE",
    extendedVersionString : "Default",
    displayName : "Lorentzian Modified Peak E",
    displayHTML : "y = 1.0 / (a + ((x-b)/c)<sup>d</sup>)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Peak.LorentzianModifiedPeakE_WithOffset = module.exports.Peak.LorentzianModifiedPeakE_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "LorentzianModifiedPeakE",
    extendedVersionString : "Offset",
    displayName : "Lorentzian Modified Peak E With Offset",
    displayHTML : "y = 1.0 / (a + ((x-b)/c)<sup>d</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Peak.LorentzianModifiedPeakF = module.exports.Peak.LorentzianModifiedPeakF = {
    pythonModuleName : "Peak",
    pythonClassName : "LorentzianModifiedPeakF",
    extendedVersionString : "Default",
    displayName : "Lorentzian Modified Peak F",
    displayHTML : "y = a / (b + ((x-c)/d)<sup>f</sup>)",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Peak.LorentzianModifiedPeakF_WithOffset = module.exports.Peak.LorentzianModifiedPeakF_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "LorentzianModifiedPeakF",
    extendedVersionString : "Offset",
    displayName : "Lorentzian Modified Peak F With Offset",
    displayHTML : "y = a / (b + ((x-c)/d)<sup>f</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 6
};

exports.Peak.LorentzianModifiedPeakG = module.exports.Peak.LorentzianModifiedPeakG = {
    pythonModuleName : "Peak",
    pythonClassName : "LorentzianModifiedPeakG",
    extendedVersionString : "Default",
    displayName : "Lorentzian Modified Peak G",
    displayHTML : "y = a / (1.0 + ((x-b)/c)<sup>d</sup>)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Peak.LorentzianModifiedPeakG_WithOffset = module.exports.Peak.LorentzianModifiedPeakG_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "LorentzianModifiedPeakG",
    extendedVersionString : "Offset",
    displayName : "Lorentzian Modified Peak G With Offset",
    displayHTML : "y = a / (1.0 + ((x-b)/c)<sup>d</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Peak.LorentzianPeakA = module.exports.Peak.LorentzianPeakA = {
    pythonModuleName : "Peak",
    pythonClassName : "LorentzianPeakA",
    extendedVersionString : "Default",
    displayName : "Lorentzian Peak A",
    displayHTML : "y = 1.0 / (1.0 + (x-a)<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 1
};

exports.Peak.LorentzianPeakA_WithOffset = module.exports.Peak.LorentzianPeakA_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "LorentzianPeakA",
    extendedVersionString : "Offset",
    displayName : "Lorentzian Peak A With Offset",
    displayHTML : "y = 1.0 / (1.0 + (x-a)<sup>2</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Peak.LorentzianPeakB = module.exports.Peak.LorentzianPeakB = {
    pythonModuleName : "Peak",
    pythonClassName : "LorentzianPeakB",
    extendedVersionString : "Default",
    displayName : "Lorentzian Peak B",
    displayHTML : "y = 1.0 / (a + (x-b)<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Peak.LorentzianPeakB_WithOffset = module.exports.Peak.LorentzianPeakB_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "LorentzianPeakB",
    extendedVersionString : "Offset",
    displayName : "Lorentzian Peak B With Offset",
    displayHTML : "y = 1.0 / (a + (x-b)<sup>2</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Peak.LorentzianPeakC = module.exports.Peak.LorentzianPeakC = {
    pythonModuleName : "Peak",
    pythonClassName : "LorentzianPeakC",
    extendedVersionString : "Default",
    displayName : "Lorentzian Peak C",
    displayHTML : "y = a / (b + (x-c)<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Peak.LorentzianPeakC_WithOffset = module.exports.Peak.LorentzianPeakC_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "LorentzianPeakC",
    extendedVersionString : "Offset",
    displayName : "Lorentzian Peak C With Offset",
    displayHTML : "y = a / (b + (x-c)<sup>2</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Peak.LorentzianPeakD = module.exports.Peak.LorentzianPeakD = {
    pythonModuleName : "Peak",
    pythonClassName : "LorentzianPeakD",
    extendedVersionString : "Default",
    displayName : "Lorentzian Peak D",
    displayHTML : "y = 1.0 / (1.0 + ((x-a)/b)<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Peak.LorentzianPeakD_WithOffset = module.exports.Peak.LorentzianPeakD_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "LorentzianPeakD",
    extendedVersionString : "Offset",
    displayName : "Lorentzian Peak D With Offset",
    displayHTML : "y = 1.0 / (1.0 + ((x-a)/b)<sup>2</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Peak.LorentzianPeakE = module.exports.Peak.LorentzianPeakE = {
    pythonModuleName : "Peak",
    pythonClassName : "LorentzianPeakE",
    extendedVersionString : "Default",
    displayName : "Lorentzian Peak E",
    displayHTML : "y = 1.0 / (a + ((x-b)/c)<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Peak.LorentzianPeakE_WithOffset = module.exports.Peak.LorentzianPeakE_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "LorentzianPeakE",
    extendedVersionString : "Offset",
    displayName : "Lorentzian Peak E With Offset",
    displayHTML : "y = 1.0 / (a + ((x-b)/c)<sup>2</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Peak.LorentzianPeakF = module.exports.Peak.LorentzianPeakF = {
    pythonModuleName : "Peak",
    pythonClassName : "LorentzianPeakF",
    extendedVersionString : "Default",
    displayName : "Lorentzian Peak F",
    displayHTML : "y = a / (b + ((x-c)/d)<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Peak.LorentzianPeakF_WithOffset = module.exports.Peak.LorentzianPeakF_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "LorentzianPeakF",
    extendedVersionString : "Offset",
    displayName : "Lorentzian Peak F With Offset",
    displayHTML : "y = a / (b + ((x-c)/d)<sup>2</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Peak.LorentzianPeakG = module.exports.Peak.LorentzianPeakG = {
    pythonModuleName : "Peak",
    pythonClassName : "LorentzianPeakG",
    extendedVersionString : "Default",
    displayName : "Lorentzian Peak G",
    displayHTML : "y = a / (1.0 + ((x-b)/c)<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Peak.LorentzianPeakG_WithOffset = module.exports.Peak.LorentzianPeakG_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "LorentzianPeakG",
    extendedVersionString : "Offset",
    displayName : "Lorentzian Peak G With Offset",
    displayHTML : "y = a / (1.0 + ((x-b)/c)<sup>2</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Peak.PseudoVoight = module.exports.Peak.PseudoVoight = {
    pythonModuleName : "Peak",
    pythonClassName : "PseudoVoight",
    extendedVersionString : "Default",
    displayName : "Pseudo-Voight Peak",
    displayHTML : "y = a * (d * (1/(1+((x-b)/c)<sup>2</sup>)) + (1-d) * exp(-0.5 * ((x-b)/c)<sup>2</sup>))",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Peak.PseudoVoight_WithOffset = module.exports.Peak.PseudoVoight_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "PseudoVoight",
    extendedVersionString : "Offset",
    displayName : "Pseudo-Voight Peak With Offset",
    displayHTML : "y = a * (d * (1/(1+((x-b)/c)<sup>2</sup>)) + (1-d) * exp(-0.5 * ((x-b)/c)<sup>2</sup>)) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Peak.PseudoVoight_Modified = module.exports.Peak.PseudoVoight_Modified = {
    pythonModuleName : "Peak",
    pythonClassName : "PseudoVoight_Modified",
    extendedVersionString : "Default",
    displayName : "Pseudo-Voight Peak Modified",
    displayHTML : "y = a * (d * (1/(1+((x-b)/c)<sup>f</sup>)) + (1-d) * exp(-0.5 * ((x-b)/c)<sup>g</sup>))",
    dimensionality : 2,
    numberOfParameters : 6
};

exports.Peak.PseudoVoight_Modified_WithOffset = module.exports.Peak.PseudoVoight_Modified_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "PseudoVoight_Modified",
    extendedVersionString : "Offset",
    displayName : "Pseudo-Voight Peak Modified With Offset",
    displayHTML : "y = a * (d * (1/(1+((x-b)/c)<sup>f</sup>)) + (1-d) * exp(-0.5 * ((x-b)/c)<sup>g</sup>)) + Offset",
    dimensionality : 2,
    numberOfParameters : 7
};

exports.Peak.Pulse = module.exports.Peak.Pulse = {
    pythonModuleName : "Peak",
    pythonClassName : "Pulse",
    extendedVersionString : "Default",
    displayName : "Pulse Peak",
    displayHTML : "y = 4a * exp(-(x-b)/c) * (1.0 - exp(-(x-b)/c))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Peak.Pulse_WithOffset = module.exports.Peak.Pulse_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "Pulse",
    extendedVersionString : "Offset",
    displayName : "Pulse Peak With Offset",
    displayHTML : "y = 4a * exp(-(x-b)/c) * (1.0 - exp(-(x-b)/c)) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Peak.UVEDFruitGrowthRate = module.exports.Peak.UVEDFruitGrowthRate = {
    pythonModuleName : "Peak",
    pythonClassName : "UVEDFruitGrowthRate",
    extendedVersionString : "Default",
    displayName : "UVED Fruit Growth Rate",
    displayHTML : "y = ((t/5)<sup>(a-1)</sup>*(1-t/5)<sup>(b-1)</sup>)/(((a-1)/(a+b-2))<sup>(a-1)</sup>*((b-1)/(a+b-2))<sup>(b-1)</sup>)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Peak.UVEDFruitGrowthRate_WithOffset = module.exports.Peak.UVEDFruitGrowthRate_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "UVEDFruitGrowthRate",
    extendedVersionString : "Offset",
    displayName : "UVED Fruit Growth Rate With Offset",
    displayHTML : "y = ((t/5)<sup>(a-1)</sup>*(1-t/5)<sup>(b-1)</sup>)/(((a-1)/(a+b-2))<sup>(a-1)</sup>*((b-1)/(a+b-2))<sup>(b-1)</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Peak.UVEDFruitGrowthRateB = module.exports.Peak.UVEDFruitGrowthRateB = {
    pythonModuleName : "Peak",
    pythonClassName : "UVEDFruitGrowthRateB",
    extendedVersionString : "Default",
    displayName : "UVED Fruit Growth Rate B",
    displayHTML : "y = c * ((t/5)<sup>(a-1)</sup>*(1-t/5)<sup>(b-1)</sup>)/(((a-1)/(a+b-2))<sup>(a-1)</sup>*((b-1)/(a+b-2))<sup>(b-1)</sup>)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Peak.UVEDFruitGrowthRateB_WithOffset = module.exports.Peak.UVEDFruitGrowthRateB_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "UVEDFruitGrowthRateB",
    extendedVersionString : "Offset",
    displayName : "UVED Fruit Growth Rate B With Offset",
    displayHTML : "y = c * ((t/5)<sup>(a-1)</sup>*(1-t/5)<sup>(b-1)</sup>)/(((a-1)/(a+b-2))<sup>(a-1)</sup>*((b-1)/(a+b-2))<sup>(b-1)</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Peak.UVEDFruitGrowthRateScaled = module.exports.Peak.UVEDFruitGrowthRateScaled = {
    pythonModuleName : "Peak",
    pythonClassName : "UVEDFruitGrowthRateScaled",
    extendedVersionString : "Default",
    displayName : "UVED Fruit Growth Rate Scaled",
    displayHTML : "y = (c*t)<sup>(a-1)</sup>*(1-(c*t)<sup>(b-1)</sup>)/(((a-1)/(a+b-2))<sup>(a-1)</sup>*((b-1)/(a+b-2))<sup>(b-1)</sup>)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Peak.UVEDFruitGrowthRateScaled_WithOffset = module.exports.Peak.UVEDFruitGrowthRateScaled_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "UVEDFruitGrowthRateScaled",
    extendedVersionString : "Offset",
    displayName : "UVED Fruit Growth Rate Scaled With Offset",
    displayHTML : "y = (c*t)<sup>(a-1)</sup>*(1-(c*t)<sup>(b-1)</sup>)/(((a-1)/(a+b-2))<sup>(a-1)</sup>*((b-1)/(a+b-2))<sup>(b-1)</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Peak.UVEDFruitGrowthRateScaledB = module.exports.Peak.UVEDFruitGrowthRateScaledB = {
    pythonModuleName : "Peak",
    pythonClassName : "UVEDFruitGrowthRateScaledB",
    extendedVersionString : "Default",
    displayName : "UVED Fruit Growth Rate Scaled B",
    displayHTML : "y = d * (c*t)<sup>(a-1)</sup>*(1-(c*t)<sup>(b-1)</sup>)/(((a-1)/(a+b-2))<sup>(a-1)</sup>*((b-1)/(a+b-2))<sup>(b-1)</sup>)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Peak.UVEDFruitGrowthRateScaledB_WithOffset = module.exports.Peak.UVEDFruitGrowthRateScaledB_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "UVEDFruitGrowthRateScaledB",
    extendedVersionString : "Offset",
    displayName : "UVED Fruit Growth Rate Scaled B With Offset",
    displayHTML : "y = d * (c*t)<sup>(a-1)</sup>*(1-(c*t)<sup>(b-1)</sup>)/(((a-1)/(a+b-2))<sup>(a-1)</sup>*((b-1)/(a+b-2))<sup>(b-1)</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Peak.UVEDFruitGrowthRateTransform = module.exports.Peak.UVEDFruitGrowthRateTransform = {
    pythonModuleName : "Peak",
    pythonClassName : "UVEDFruitGrowthRateTransform",
    extendedVersionString : "Default",
    displayName : "UVED Fruit Growth Rate Transform",
    displayHTML : "y = (c*t+d)<sup>(a-1)</sup>*(1-(c*t+d)<sup>(b-1)</sup>)/(((a-1)/(a+b-2))<sup>(a-1)</sup>*((b-1)/(a+b-2))<sup>(b-1)</sup>)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Peak.UVEDFruitGrowthRateTransform_WithOffset = module.exports.Peak.UVEDFruitGrowthRateTransform_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "UVEDFruitGrowthRateTransform",
    extendedVersionString : "Offset",
    displayName : "UVED Fruit Growth Rate Transform With Offset",
    displayHTML : "y = (c*t+d)<sup>(a-1)</sup>*(1-(c*t+d)<sup>(b-1)</sup>)/(((a-1)/(a+b-2))<sup>(a-1)</sup>*((b-1)/(a+b-2))<sup>(b-1)</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Peak.UVEDFruitGrowthRateTransformB = module.exports.Peak.UVEDFruitGrowthRateTransformB = {
    pythonModuleName : "Peak",
    pythonClassName : "UVEDFruitGrowthRateTransformB",
    extendedVersionString : "Default",
    displayName : "UVED Fruit Growth Rate Transform B",
    displayHTML : "y = f * (c*t+d)<sup>(a-1)</sup>*(1-(c*t+d)<sup>(b-1)</sup>)/(((a-1)/(a+b-2))<sup>(a-1)</sup>*((b-1)/(a+b-2))<sup>(b-1)</sup>)",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Peak.UVEDFruitGrowthRateTransformB_WithOffset = module.exports.Peak.UVEDFruitGrowthRateTransformB_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "UVEDFruitGrowthRateTransformB",
    extendedVersionString : "Offset",
    displayName : "UVED Fruit Growth Rate Transform B With Offset",
    displayHTML : "y = f * (c*t+d)<sup>(a-1)</sup>*(1-(c*t+d)<sup>(b-1)</sup>)/(((a-1)/(a+b-2))<sup>(a-1)</sup>*((b-1)/(a+b-2))<sup>(b-1)</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 6
};

exports.Peak.WeibullPeak = module.exports.Peak.WeibullPeak = {
    pythonModuleName : "Peak",
    pythonClassName : "WeibullPeak",
    extendedVersionString : "Default",
    displayName : "Weibull Peak",
    displayHTML : "y = a * exp(-0.5 * (ln(x/b)/c)<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Peak.WeibullPeak_WithOffset = module.exports.Peak.WeibullPeak_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "WeibullPeak",
    extendedVersionString : "Offset",
    displayName : "Weibull Peak With Offset",
    displayHTML : "y = a * exp(-0.5 * (ln(x/b)/c)<sup>2</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Peak.WeibullPeakShifted = module.exports.Peak.WeibullPeakShifted = {
    pythonModuleName : "Peak",
    pythonClassName : "WeibullPeakShifted",
    extendedVersionString : "Default",
    displayName : "Weibull Peak Shifted",
    displayHTML : "y = a * exp(-0.5 * (ln((x-d)/b)/c)<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Peak.WeibullPeakShifted_WithOffset = module.exports.Peak.WeibullPeakShifted_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "WeibullPeakShifted",
    extendedVersionString : "Offset",
    displayName : "Weibull Peak Shifted With Offset",
    displayHTML : "y = a * exp(-0.5 * (ln((x-d)/b)/c)<sup>2</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Peak.WeibullPeak_Modified = module.exports.Peak.WeibullPeak_Modified = {
    pythonModuleName : "Peak",
    pythonClassName : "WeibullPeak_Modified",
    extendedVersionString : "Default",
    displayName : "Weibull Peak Modified",
    displayHTML : "y = a * exp(-0.5 * (ln(x/b)/c)<sup>d</sup>)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Peak.WeibullPeak_Modified_WithOffset = module.exports.Peak.WeibullPeak_Modified_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "WeibullPeak_Modified",
    extendedVersionString : "Offset",
    displayName : "Weibull Peak Modified With Offset",
    displayHTML : "y = a * exp(-0.5 * (ln(x/b)/c)<sup>d</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Peak.WeibullPeak_ModifiedShifted = module.exports.Peak.WeibullPeak_ModifiedShifted = {
    pythonModuleName : "Peak",
    pythonClassName : "WeibullPeak_ModifiedShifted",
    extendedVersionString : "Default",
    displayName : "Weibull Peak Modified Shifted",
    displayHTML : "y = a * exp(-0.5 * (ln((x-f)/b)/c)<sup>d</sup>)",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Peak.WeibullPeak_ModifiedShifted_WithOffset = module.exports.Peak.WeibullPeak_ModifiedShifted_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "WeibullPeak_ModifiedShifted",
    extendedVersionString : "Offset",
    displayName : "Weibull Peak Modified Shifted With Offset",
    displayHTML : "y = a * exp(-0.5 * (ln((x-f)/b)/c)<sup>d</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 6
};


exports.Polyfunctional = module.exports.Polyfunctional = {};


exports.Polynomial = module.exports.Polynomial = {};

exports.Polynomial.Cubic = module.exports.Polynomial.Cubic = {
    pythonModuleName : "Polynomial",
    pythonClassName : "Cubic",
    extendedVersionString : "Default",
    displayName : "3rd Order (Cubic)",
    displayHTML : "y = a + bx + cx<sup>2</sup> + dx<sup>3</sup>",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Polynomial.Linear = module.exports.Polynomial.Linear = {
    pythonModuleName : "Polynomial",
    pythonClassName : "Linear",
    extendedVersionString : "Default",
    displayName : "1st Order (Linear)",
    displayHTML : "y = a + bx",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Polynomial.MarcPlanteQuadratic = module.exports.Polynomial.MarcPlanteQuadratic = {
    pythonModuleName : "Polynomial",
    pythonClassName : "MarcPlanteQuadratic",
    extendedVersionString : "Default",
    displayName : "Marc Plante's Custom Quadratic",
    displayHTML : "y = (-b + (b<sup>2</sup> - 4 a (c - x))<sup>0.5</sup>) / 2 / a ",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Polynomial.MarcPlanteQuadratic_WithOffset = module.exports.Polynomial.MarcPlanteQuadratic_WithOffset = {
    pythonModuleName : "Polynomial",
    pythonClassName : "MarcPlanteQuadratic",
    extendedVersionString : "Offset",
    displayName : "Marc Plante's Custom Quadratic With Offset",
    displayHTML : "y = (-b + (b<sup>2</sup> - 4 a (c - x))<sup>0.5</sup>) / 2 / a  + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Polynomial.Quadratic = module.exports.Polynomial.Quadratic = {
    pythonModuleName : "Polynomial",
    pythonClassName : "Quadratic",
    extendedVersionString : "Default",
    displayName : "2nd Order (Quadratic)",
    displayHTML : "y = a + bx + cx<sup>2</sup>",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Polynomial.Quartic = module.exports.Polynomial.Quartic = {
    pythonModuleName : "Polynomial",
    pythonClassName : "Quartic",
    extendedVersionString : "Default",
    displayName : "4th Order (Quartic)",
    displayHTML : "y = a + bx + cx<sup>2</sup> + dx<sup>3</sup> + fx<sup>4</sup>",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Polynomial.Quintic = module.exports.Polynomial.Quintic = {
    pythonModuleName : "Polynomial",
    pythonClassName : "Quintic",
    extendedVersionString : "Default",
    displayName : "5th Order (Quintic)",
    displayHTML : "y = a + bx + cx<sup>2</sup> + dx<sup>3</sup> + fx<sup>4</sup> + gx<sup>5</sup>",
    dimensionality : 2,
    numberOfParameters : 6
};


exports.Power = module.exports.Power = {};

exports.Power.Geometric_Modified = module.exports.Power.Geometric_Modified = {
    pythonModuleName : "Power",
    pythonClassName : "Geometric_Modified",
    extendedVersionString : "Default",
    displayName : "Geometric Modified",
    displayHTML : "y = a * x<sup>(b/x)</sup>",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Power.Geometric_Modified_WithOffset = module.exports.Power.Geometric_Modified_WithOffset = {
    pythonModuleName : "Power",
    pythonClassName : "Geometric_Modified",
    extendedVersionString : "Offset",
    displayName : "Geometric Modified With Offset",
    displayHTML : "y = a * x<sup>(b/x)</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Power.PowerA_Modified = module.exports.Power.PowerA_Modified = {
    pythonModuleName : "Power",
    pythonClassName : "PowerA_Modified",
    extendedVersionString : "Default",
    displayName : "Power A Modified",
    displayHTML : "y = a * b<sup>x</sup>",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Power.PowerA_Modified_WithOffset = module.exports.Power.PowerA_Modified_WithOffset = {
    pythonModuleName : "Power",
    pythonClassName : "PowerA_Modified",
    extendedVersionString : "Offset",
    displayName : "Power A Modified With Offset",
    displayHTML : "y = a * b<sup>x</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Power.PowerA_Modified_Transform = module.exports.Power.PowerA_Modified_Transform = {
    pythonModuleName : "Power",
    pythonClassName : "PowerA_Modified_Transform",
    extendedVersionString : "Default",
    displayName : "Power A Modified Transform",
    displayHTML : "y = a * b<sup>cx + d</sup>",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Power.PowerA_Modified_Transform_WithOffset = module.exports.Power.PowerA_Modified_Transform_WithOffset = {
    pythonModuleName : "Power",
    pythonClassName : "PowerA_Modified_Transform",
    extendedVersionString : "Offset",
    displayName : "Power A Modified Transform With Offset",
    displayHTML : "y = a * b<sup>cx + d</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Power.PowerB_Modified = module.exports.Power.PowerB_Modified = {
    pythonModuleName : "Power",
    pythonClassName : "PowerB_Modified",
    extendedVersionString : "Default",
    displayName : "Power B Modified",
    displayHTML : "y = a<sup>ln(x)</sup>",
    dimensionality : 2,
    numberOfParameters : 1
};

exports.Power.PowerB_Modified_WithOffset = module.exports.Power.PowerB_Modified_WithOffset = {
    pythonModuleName : "Power",
    pythonClassName : "PowerB_Modified",
    extendedVersionString : "Offset",
    displayName : "Power B Modified With Offset",
    displayHTML : "y = a<sup>ln(x)</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Power.PowerB_Modified_Transform = module.exports.Power.PowerB_Modified_Transform = {
    pythonModuleName : "Power",
    pythonClassName : "PowerB_Modified_Transform",
    extendedVersionString : "Default",
    displayName : "Power B Modified Transform",
    displayHTML : "y = a<sup>ln(bx + c)</sup>",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Power.PowerB_Modified_Transform_WithOffset = module.exports.Power.PowerB_Modified_Transform_WithOffset = {
    pythonModuleName : "Power",
    pythonClassName : "PowerB_Modified_Transform",
    extendedVersionString : "Offset",
    displayName : "Power B Modified Transform With Offset",
    displayHTML : "y = a<sup>ln(bx + c)</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Power.PowerC_Modified = module.exports.Power.PowerC_Modified = {
    pythonModuleName : "Power",
    pythonClassName : "PowerC_Modified",
    extendedVersionString : "Default",
    displayName : "Power C Modified",
    displayHTML : "y = (a + x)<sup>b</sup>",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Power.PowerC_Modified_WithOffset = module.exports.Power.PowerC_Modified_WithOffset = {
    pythonModuleName : "Power",
    pythonClassName : "PowerC_Modified",
    extendedVersionString : "Offset",
    displayName : "Power C Modified With Offset",
    displayHTML : "y = (a + x)<sup>b</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Power.PowerC_Modified_Transform = module.exports.Power.PowerC_Modified_Transform = {
    pythonModuleName : "Power",
    pythonClassName : "PowerC_Modified_Transform",
    extendedVersionString : "Default",
    displayName : "Power C Modified Transform",
    displayHTML : "y = (a + bx)<sup>c</sup>",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Power.PowerC_Modified_Transform_WithOffset = module.exports.Power.PowerC_Modified_Transform_WithOffset = {
    pythonModuleName : "Power",
    pythonClassName : "PowerC_Modified_Transform",
    extendedVersionString : "Offset",
    displayName : "Power C Modified Transform With Offset",
    displayHTML : "y = (a + bx)<sup>c</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Power.PowerLawExponentialCutoff = module.exports.Power.PowerLawExponentialCutoff = {
    pythonModuleName : "Power",
    pythonClassName : "PowerLawExponentialCutoff",
    extendedVersionString : "Default",
    displayName : "Power Law With Exponential Cutoff",
    displayHTML : "p(k) = C * k<sup>(-T)</sup> * exp(-k/K)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Power.PowerLawExponentialCutoff_WithOffset = module.exports.Power.PowerLawExponentialCutoff_WithOffset = {
    pythonModuleName : "Power",
    pythonClassName : "PowerLawExponentialCutoff",
    extendedVersionString : "Offset",
    displayName : "Power Law With Exponential Cutoff With Offset",
    displayHTML : "p(k) = C * k<sup>(-T)</sup> * exp(-k/K) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Power.PowerRoot = module.exports.Power.PowerRoot = {
    pythonModuleName : "Power",
    pythonClassName : "PowerRoot",
    extendedVersionString : "Default",
    displayName : "Root",
    displayHTML : "y = a<sup>(1.0/x)</sup>",
    dimensionality : 2,
    numberOfParameters : 1
};

exports.Power.PowerRoot_WithOffset = module.exports.Power.PowerRoot_WithOffset = {
    pythonModuleName : "Power",
    pythonClassName : "PowerRoot",
    extendedVersionString : "Offset",
    displayName : "Root With Offset",
    displayHTML : "y = a<sup>(1.0/x)</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Power.SimplePower = module.exports.Power.SimplePower = {
    pythonModuleName : "Power",
    pythonClassName : "SimplePower",
    extendedVersionString : "Default",
    displayName : "Simple Power",
    displayHTML : "y = x<sup>a</sup>",
    dimensionality : 2,
    numberOfParameters : 1
};

exports.Power.SimplePower_WithOffset = module.exports.Power.SimplePower_WithOffset = {
    pythonModuleName : "Power",
    pythonClassName : "SimplePower",
    extendedVersionString : "Offset",
    displayName : "Simple Power With Offset",
    displayHTML : "y = x<sup>a</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Power.StandardGeometric = module.exports.Power.StandardGeometric = {
    pythonModuleName : "Power",
    pythonClassName : "StandardGeometric",
    extendedVersionString : "Default",
    displayName : "Standard Geometric",
    displayHTML : "y = a * x<sup>bx</sup>",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Power.StandardGeometric_WithOffset = module.exports.Power.StandardGeometric_WithOffset = {
    pythonModuleName : "Power",
    pythonClassName : "StandardGeometric",
    extendedVersionString : "Offset",
    displayName : "Standard Geometric With Offset",
    displayHTML : "y = a * x<sup>bx</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Power.StandardPower = module.exports.Power.StandardPower = {
    pythonModuleName : "Power",
    pythonClassName : "StandardPower",
    extendedVersionString : "Default",
    displayName : "Standard Power",
    displayHTML : "y = a * x<sup>b</sup>",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Power.StandardPower_WithOffset = module.exports.Power.StandardPower_WithOffset = {
    pythonModuleName : "Power",
    pythonClassName : "StandardPower",
    extendedVersionString : "Offset",
    displayName : "Standard Power With Offset",
    displayHTML : "y = a * x<sup>b</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Power.XShiftedPower = module.exports.Power.XShiftedPower = {
    pythonModuleName : "Power",
    pythonClassName : "XShiftedPower",
    extendedVersionString : "Default",
    displayName : "X Shifted Power",
    displayHTML : "y = a * (x-b)<sup>c</sup>",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Power.XShiftedPower_WithOffset = module.exports.Power.XShiftedPower_WithOffset = {
    pythonModuleName : "Power",
    pythonClassName : "XShiftedPower",
    extendedVersionString : "Offset",
    displayName : "X Shifted Power With Offset",
    displayHTML : "y = a * (x-b)<sup>c</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};


exports.Rational = module.exports.Rational = {};


exports.Sigmoidal = module.exports.Sigmoidal = {};

exports.Sigmoidal.BET_Sigmoidal_A = module.exports.Sigmoidal.BET_Sigmoidal_A = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "BET_Sigmoidal_A",
    extendedVersionString : "Default",
    displayName : "BET Sigmoidal A",
    displayHTML : "y = x / (a + bx - (a+b)x<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Sigmoidal.BET_Sigmoidal_A_WithOffset = module.exports.Sigmoidal.BET_Sigmoidal_A_WithOffset = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "BET_Sigmoidal_A",
    extendedVersionString : "Offset",
    displayName : "BET Sigmoidal A With Offset",
    displayHTML : "y = x / (a + bx - (a+b)x<sup>2</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Sigmoidal.BET_Sigmoidal_B = module.exports.Sigmoidal.BET_Sigmoidal_B = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "BET_Sigmoidal_B",
    extendedVersionString : "Default",
    displayName : "BET Sigmoidal B",
    displayHTML : "y = abx / (1.0 + (b-2.0)x - (b-1.0)x<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Sigmoidal.BET_Sigmoidal_B_WithOffset = module.exports.Sigmoidal.BET_Sigmoidal_B_WithOffset = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "BET_Sigmoidal_B",
    extendedVersionString : "Offset",
    displayName : "BET Sigmoidal B With Offset",
    displayHTML : "y = abx / (1.0 + (b-2.0)x - (b-1.0)x<sup>2</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Sigmoidal.BoltzmannSigmoidA = module.exports.Sigmoidal.BoltzmannSigmoidA = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "BoltzmannSigmoidA",
    extendedVersionString : "Default",
    displayName : "Boltzmann Sigmoid A",
    displayHTML : "y = (a - b) / (1.0 + exp((x-c)/d)) + b",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Sigmoidal.BoltzmannSigmoidB = module.exports.Sigmoidal.BoltzmannSigmoidB = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "BoltzmannSigmoidB",
    extendedVersionString : "Default",
    displayName : "Boltzmann Sigmoid B",
    displayHTML : "y = (a - b) / (1.0 + exp((x-c)/(dx))) + b",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Sigmoidal.Chapman = module.exports.Sigmoidal.Chapman = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "Chapman",
    extendedVersionString : "Default",
    displayName : "Chapman",
    displayHTML : "y = a * (1.0 - exp(-bx))<sup>c</sup>",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Sigmoidal.Chapman_WithOffset = module.exports.Sigmoidal.Chapman_WithOffset = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "Chapman",
    extendedVersionString : "Offset",
    displayName : "Chapman With Offset",
    displayHTML : "y = a * (1.0 - exp(-bx))<sup>c</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Sigmoidal.DonLevinSigmoid = module.exports.Sigmoidal.DonLevinSigmoid = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "DonLevinSigmoid",
    extendedVersionString : "Default",
    displayName : "Don Levin Sigmoid",
    displayHTML : "y = a1 / (1.0 + exp(-(x-b1)/c1)) + a2 / (1.0 + exp(-(x-b2)/c2)) + a3 / (1.0 + exp(-(x-b3)/c3))",
    dimensionality : 2,
    numberOfParameters : 9
};

exports.Sigmoidal.DonLevinSigmoid_WithOffset = module.exports.Sigmoidal.DonLevinSigmoid_WithOffset = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "DonLevinSigmoid",
    extendedVersionString : "Offset",
    displayName : "Don Levin Sigmoid With Offset",
    displayHTML : "y = a1 / (1.0 + exp(-(x-b1)/c1)) + a2 / (1.0 + exp(-(x-b2)/c2)) + a3 / (1.0 + exp(-(x-b3)/c3)) + Offset",
    dimensionality : 2,
    numberOfParameters : 10
};

exports.Sigmoidal.FiveParameterLogistic = module.exports.Sigmoidal.FiveParameterLogistic = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "FiveParameterLogistic",
    extendedVersionString : "Default",
    displayName : "Five-Parameter Logistic",
    displayHTML : "y = d + (a-d) / (1.0 + (x/c)<sup>b</sup>)<sup>f</sup>",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Sigmoidal.FourParameterLogistic = module.exports.Sigmoidal.FourParameterLogistic = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "FourParameterLogistic",
    extendedVersionString : "Default",
    displayName : "Four-Parameter Logistic",
    displayHTML : "y = d + (a-d) / (1.0 + (x/c)<sup>b</sup>)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Sigmoidal.GeneralisedLogistic = module.exports.Sigmoidal.GeneralisedLogistic = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "GeneralisedLogistic",
    extendedVersionString : "Default",
    displayName : "Generalised Logistic",
    displayHTML : "y = A + C / (1 + T * exp(-B * (x - M)))<sup>1/T</sup>",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Sigmoidal.GompertzA = module.exports.Sigmoidal.GompertzA = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "GompertzA",
    extendedVersionString : "Default",
    displayName : "Gompertz A",
    displayHTML : "y = a * exp(-exp(b - cx))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Sigmoidal.GompertzA_WithOffset = module.exports.Sigmoidal.GompertzA_WithOffset = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "GompertzA",
    extendedVersionString : "Offset",
    displayName : "Gompertz A With Offset",
    displayHTML : "y = a * exp(-exp(b - cx)) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Sigmoidal.GompertzB = module.exports.Sigmoidal.GompertzB = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "GompertzB",
    extendedVersionString : "Default",
    displayName : "Gompertz B",
    displayHTML : "y = a * exp(-exp((x-b)/c))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Sigmoidal.GompertzB_WithOffset = module.exports.Sigmoidal.GompertzB_WithOffset = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "GompertzB",
    extendedVersionString : "Offset",
    displayName : "Gompertz B With Offset",
    displayHTML : "y = a * exp(-exp((x-b)/c)) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Sigmoidal.GompertzC = module.exports.Sigmoidal.GompertzC = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "GompertzC",
    extendedVersionString : "Default",
    displayName : "Gompertz C",
    displayHTML : "y = a * exp(b * exp(c * x))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Sigmoidal.GompertzC_WithOffset = module.exports.Sigmoidal.GompertzC_WithOffset = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "GompertzC",
    extendedVersionString : "Offset",
    displayName : "Gompertz C With Offset",
    displayHTML : "y = a * exp(b * exp(c * x)) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Sigmoidal.Hill = module.exports.Sigmoidal.Hill = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "Hill",
    extendedVersionString : "Default",
    displayName : "Hill",
    displayHTML : "y = ax<sup>b</sup> / (c<sup>b</sup> + x<sup>b</sup>)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Sigmoidal.Hill_WithOffset = module.exports.Sigmoidal.Hill_WithOffset = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "Hill",
    extendedVersionString : "Offset",
    displayName : "Hill With Offset",
    displayHTML : "y = ax<sup>b</sup> / (c<sup>b</sup> + x<sup>b</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Sigmoidal.JJacquelinGeneralisedLogistic = module.exports.Sigmoidal.JJacquelinGeneralisedLogistic = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "JJacquelinGeneralisedLogistic",
    extendedVersionString : "Default",
    displayName : "JJacquelin Generalised Logistic",
    displayHTML : "y = L / (1.0 + (b * exp(-k*t)) + (c * exp(h*t)))",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Sigmoidal.JJacquelinGeneralisedLogistic_WithOffset = module.exports.Sigmoidal.JJacquelinGeneralisedLogistic_WithOffset = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "JJacquelinGeneralisedLogistic",
    extendedVersionString : "Offset",
    displayName : "JJacquelin Generalised Logistic With Offset",
    displayHTML : "y = L / (1.0 + (b * exp(-k*t)) + (c * exp(h*t))) + Offset",
    dimensionality : 2,
    numberOfParameters : 6
};

exports.Sigmoidal.Janoschek = module.exports.Sigmoidal.Janoschek = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "Janoschek",
    extendedVersionString : "Default",
    displayName : "Janoschek Growth",
    displayHTML : "w = a - (1.0 - exp(-b * t<sup>c</sup>))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Sigmoidal.Janoschek_Modified = module.exports.Sigmoidal.Janoschek_Modified = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "Janoschek_Modified",
    extendedVersionString : "Default",
    displayName : "Janoschek Growth Modified",
    displayHTML : "w = a - (a - w0) * (1.0 - exp(-b * t<sup>c</sup>))",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Sigmoidal.LogisticA = module.exports.Sigmoidal.LogisticA = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "LogisticA",
    extendedVersionString : "Default",
    displayName : "Logistic A",
    displayHTML : "y = a / (1.0 + b*exp(-cx))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Sigmoidal.LogisticA_WithOffset = module.exports.Sigmoidal.LogisticA_WithOffset = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "LogisticA",
    extendedVersionString : "Offset",
    displayName : "Logistic A With Offset",
    displayHTML : "y = a / (1.0 + b*exp(-cx)) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Sigmoidal.LogisticB = module.exports.Sigmoidal.LogisticB = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "LogisticB",
    extendedVersionString : "Default",
    displayName : "Logistic B",
    displayHTML : "y = a / (1.0 + (x/b)<sup>c</sup>)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Sigmoidal.LogisticB_WithOffset = module.exports.Sigmoidal.LogisticB_WithOffset = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "LogisticB",
    extendedVersionString : "Offset",
    displayName : "Logistic B With Offset",
    displayHTML : "y = a / (1.0 + (x/b)<sup>c</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Sigmoidal.Lomolino = module.exports.Sigmoidal.Lomolino = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "Lomolino",
    extendedVersionString : "Default",
    displayName : "Lomolino",
    displayHTML : "y = a / (1.0 + b<sup>ln(c/x)</sup>)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Sigmoidal.Lomolino_WithOffset = module.exports.Sigmoidal.Lomolino_WithOffset = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "Lomolino",
    extendedVersionString : "Offset",
    displayName : "Lomolino With Offset",
    displayHTML : "y = a / (1.0 + b<sup>ln(c/x)</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Sigmoidal.MagneticSaturation = module.exports.Sigmoidal.MagneticSaturation = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "MagneticSaturation",
    extendedVersionString : "Default",
    displayName : "Magnetic Saturation",
    displayHTML : "y = ax * (1.0 + b*exp(cx))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Sigmoidal.MagneticSaturation_WithOffset = module.exports.Sigmoidal.MagneticSaturation_WithOffset = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "MagneticSaturation",
    extendedVersionString : "Offset",
    displayName : "Magnetic Saturation With Offset",
    displayHTML : "y = ax * (1.0 + b*exp(cx)) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Sigmoidal.MorganMercerFlodin = module.exports.Sigmoidal.MorganMercerFlodin = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "MorganMercerFlodin",
    extendedVersionString : "Default",
    displayName : "Morgan-Mercer-Flodin (MMF)",
    displayHTML : "y = (a * b + c * x<sup>d</sup>) / (b + x<sup>d</sup>)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Sigmoidal.MorganMercerFlodin_WithOffset = module.exports.Sigmoidal.MorganMercerFlodin_WithOffset = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "MorganMercerFlodin",
    extendedVersionString : "Offset",
    displayName : "Morgan-Mercer-Flodin (MMF) With Offset",
    displayHTML : "y = (a * b + c * x<sup>d</sup>) / (b + x<sup>d</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Sigmoidal.PetersBaskin_Y = module.exports.Sigmoidal.PetersBaskin_Y = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "PetersBaskin_Y",
    extendedVersionString : "Default",
    displayName : "Peters-Baskin Step-Stool: y (1)",
    displayHTML : "y = ln(c + exp(b*d*x)) / d",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Sigmoidal.PetersBaskin_Y_WithOffset = module.exports.Sigmoidal.PetersBaskin_Y_WithOffset = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "PetersBaskin_Y",
    extendedVersionString : "Offset",
    displayName : "Peters-Baskin Step-Stool: y (1) With Offset",
    displayHTML : "y = ln(c + exp(b*d*x)) / d + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Sigmoidal.PetersBaskin_YI = module.exports.Sigmoidal.PetersBaskin_YI = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "PetersBaskin_YI",
    extendedVersionString : "Default",
    displayName : "Peters-Baskin Step-Stool: yI (2)",
    displayHTML : "yI = ln(exp(b2*c1*d1) + exp(b2*d1*x)) / d1",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Sigmoidal.PetersBaskin_YI_WithOffset = module.exports.Sigmoidal.PetersBaskin_YI_WithOffset = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "PetersBaskin_YI",
    extendedVersionString : "Offset",
    displayName : "Peters-Baskin Step-Stool: yI (2) With Offset",
    displayHTML : "yI = ln(exp(b2*c1*d1) + exp(b2*d1*x)) / d1 + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Sigmoidal.PetersBaskin_YII = module.exports.Sigmoidal.PetersBaskin_YII = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "PetersBaskin_YII",
    extendedVersionString : "Default",
    displayName : "Peters-Baskin Step-Stool: yII (3)",
    displayHTML : "K = ln( exp(b2*c1*d1) + exp(b2*d1*x) )<br>yII = b1*x + K/d1",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Sigmoidal.PetersBaskin_YII_WithOffset = module.exports.Sigmoidal.PetersBaskin_YII_WithOffset = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "PetersBaskin_YII",
    extendedVersionString : "Offset",
    displayName : "Peters-Baskin Step-Stool: yII (3) With Offset",
    displayHTML : "K = ln( exp(b2*c1*d1) + exp(b2*d1*x) )<br>yII = b1*x + K/d1 + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Sigmoidal.PetersBaskin_YIII = module.exports.Sigmoidal.PetersBaskin_YIII = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "PetersBaskin_YIII",
    extendedVersionString : "Default",
    displayName : "Peters-Baskin Step-Stool: yIII (6)",
    displayHTML : "K = ln( exp(b2*c1*d1) + exp(b2*d1*x) )<br>yII = b1*x + K/d1<br>L = ln( exp(b2*c1*d1) + exp(b2*c2*d1) )<br>yIII = yII - ln( exp(d2*(b1*c1 + L/d1)) + exp(d2*yII) ) / d2",
    dimensionality : 2,
    numberOfParameters : 6
};

exports.Sigmoidal.PetersBaskin_YIII_WithOffset = module.exports.Sigmoidal.PetersBaskin_YIII_WithOffset = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "PetersBaskin_YIII",
    extendedVersionString : "Offset",
    displayName : "Peters-Baskin Step-Stool: yIII (6) With Offset",
    displayHTML : "K = ln( exp(b2*c1*d1) + exp(b2*d1*x) )<br>yII = b1*x + K/d1<br>L = ln( exp(b2*c1*d1) + exp(b2*c2*d1) )<br>yIII = yII - ln( exp(d2*(b1*c1 + L/d1)) + exp(d2*yII) ) / d2 + Offset",
    dimensionality : 2,
    numberOfParameters : 7
};

exports.Sigmoidal.PetersBaskin_YIV = module.exports.Sigmoidal.PetersBaskin_YIV = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "PetersBaskin_YIV",
    extendedVersionString : "Default",
    displayName : "Peters-Baskin Step-Stool: yIV (9)",
    displayHTML : "K = ln( exp(b2*c1*d1) + exp(b2*d1*x) )<br>yII = b1*x + K/d1<br>L = ln( exp(b2*c1*d1) + exp(b2*c2*d1) )<br>yIII = yII - ln( exp(d2*(b1*c2 + L/d1)) + exp(d2*yII) ) / d2<br>yII,0 = ln(exp(b2*c1*d1) + 1.0 ) / d1<br>yIII,0 = yII,0 - ln( exp(d2*(b1*c2 + L/d1)) + exp(d2*yII,0) ) / d2<br>yIV = yIII - yIII,0",
    dimensionality : 2,
    numberOfParameters : 6
};

exports.Sigmoidal.PetersBaskin_YIV_WithOffset = module.exports.Sigmoidal.PetersBaskin_YIV_WithOffset = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "PetersBaskin_YIV",
    extendedVersionString : "Offset",
    displayName : "Peters-Baskin Step-Stool: yIV (9) With Offset",
    displayHTML : "K = ln( exp(b2*c1*d1) + exp(b2*d1*x) )<br>yII = b1*x + K/d1<br>L = ln( exp(b2*c1*d1) + exp(b2*c2*d1) )<br>yIII = yII - ln( exp(d2*(b1*c2 + L/d1)) + exp(d2*yII) ) / d2<br>yII,0 = ln(exp(b2*c1*d1) + 1.0 ) / d1<br>yIII,0 = yII,0 - ln( exp(d2*(b1*c2 + L/d1)) + exp(d2*yII,0) ) / d2<br>yIV = yIII - yIII,0 + Offset",
    dimensionality : 2,
    numberOfParameters : 7
};

exports.Sigmoidal.PetersBaskin_YV = module.exports.Sigmoidal.PetersBaskin_YV = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "PetersBaskin_YV",
    extendedVersionString : "Default",
    displayName : "Peters-Baskin Step-Stool: yV (10)",
    displayHTML : "K = ln( exp(b2*c1*d1) + exp(b2*d1*x) )<br>yII = b1*x + K/d1<br>L = ln( exp(b2*c1*d1) + exp(b2*c2*d1) )<br>yIII = yII - ln( exp(d2*(b1*c2 + L/d1)) + exp(d2*yII) ) / d2<br>yII,0 = ln(exp(b2*c1*d1) + 1.0 ) / d1<br>yIII,0 = yII,0 - ln( exp(d2*(b1*c2 + L/d1)) + exp(d2*yII,0) ) / d2<br>yIV = yIII - yIII,0 + q",
    dimensionality : 2,
    numberOfParameters : 7
};

exports.Sigmoidal.PetersBaskin_YV_Scaled = module.exports.Sigmoidal.PetersBaskin_YV_Scaled = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "PetersBaskin_YV_Scaled",
    extendedVersionString : "Default",
    displayName : "Peters-Baskin Step-Stool: yV (10) Scaled",
    displayHTML : "K = ln( exp(b2*c1*d1) + exp(b2*d1*x) )<br>yII = b1*x + K/d1<br>L = ln( exp(b2*c1*d1) + exp(b2*c2*d1) )<br>yIII = yII - ln( exp(d2*(b1*c2 + L/d1)) + exp(d2*yII) ) / d2<br>yII,0 = ln(exp(b2*c1*d1) + 1.0 ) / d1<br>yIII,0 = yII,0 - ln( exp(d2*(b1*c2 + L/d1)) + exp(d2*yII,0) ) / d2<br>yIV = scale * (yIII - yIII,0 )+ q",
    dimensionality : 2,
    numberOfParameters : 8
};

exports.Sigmoidal.Richards = module.exports.Sigmoidal.Richards = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "Richards",
    extendedVersionString : "Default",
    displayName : "Richards",
    displayHTML : "y = 1.0 / (a + b * e<sup>(c*x)</sup>)<sup>d</sup>",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Sigmoidal.Richards_WithOffset = module.exports.Sigmoidal.Richards_WithOffset = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "Richards",
    extendedVersionString : "Offset",
    displayName : "Richards With Offset",
    displayHTML : "y = 1.0 / (a + b * e<sup>(c*x)</sup>)<sup>d</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Sigmoidal.SigmoidA = module.exports.Sigmoidal.SigmoidA = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "SigmoidA",
    extendedVersionString : "Default",
    displayName : "Sigmoid A",
    displayHTML : "y = 1.0 / (1.0 + exp(-a(x-b)))",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Sigmoidal.SigmoidA_WithOffset = module.exports.Sigmoidal.SigmoidA_WithOffset = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "SigmoidA",
    extendedVersionString : "Offset",
    displayName : "Sigmoid A With Offset",
    displayHTML : "y = 1.0 / (1.0 + exp(-a(x-b))) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Sigmoidal.SigmoidA_Modified = module.exports.Sigmoidal.SigmoidA_Modified = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "SigmoidA_Modified",
    extendedVersionString : "Default",
    displayName : "Sigmoid A Modified",
    displayHTML : "y = 1.0 / (1.0 + exp(-a(x-b)))<sup>c</sup>",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Sigmoidal.SigmoidA_Modified_WithOffset = module.exports.Sigmoidal.SigmoidA_Modified_WithOffset = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "SigmoidA_Modified",
    extendedVersionString : "Offset",
    displayName : "Sigmoid A Modified With Offset",
    displayHTML : "y = 1.0 / (1.0 + exp(-a(x-b)))<sup>c</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Sigmoidal.SigmoidB = module.exports.Sigmoidal.SigmoidB = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "SigmoidB",
    extendedVersionString : "Default",
    displayName : "Sigmoid B",
    displayHTML : "y = a / (1.0 + exp(-(x-b)/c))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Sigmoidal.SigmoidB_WithOffset = module.exports.Sigmoidal.SigmoidB_WithOffset = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "SigmoidB",
    extendedVersionString : "Offset",
    displayName : "Sigmoid B With Offset",
    displayHTML : "y = a / (1.0 + exp(-(x-b)/c)) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Sigmoidal.SigmoidB_Modified = module.exports.Sigmoidal.SigmoidB_Modified = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "SigmoidB_Modified",
    extendedVersionString : "Default",
    displayName : "Sigmoid B Modified",
    displayHTML : "y = a / (1.0 + exp(-(x-b)/c))<sup>d</sup>",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Sigmoidal.SigmoidB_Modified_WithOffset = module.exports.Sigmoidal.SigmoidB_Modified_WithOffset = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "SigmoidB_Modified",
    extendedVersionString : "Offset",
    displayName : "Sigmoid B Modified With Offset",
    displayHTML : "y = a / (1.0 + exp(-(x-b)/c))<sup>d</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

exports.Sigmoidal.Weibull = module.exports.Sigmoidal.Weibull = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "Weibull",
    extendedVersionString : "Default",
    displayName : "Weibull",
    displayHTML : "y = a - b*exp(-cx<sup>d</sup>)",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Sigmoidal.WeibullCDF = module.exports.Sigmoidal.WeibullCDF = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "WeibullCDF",
    extendedVersionString : "Default",
    displayName : "Weibull CDF",
    displayHTML : "y = 1.0 - exp(-(x/b)<sup>a</sup>)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Sigmoidal.WeibullCDF_WithOffset = module.exports.Sigmoidal.WeibullCDF_WithOffset = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "WeibullCDF",
    extendedVersionString : "Offset",
    displayName : "Weibull CDF With Offset",
    displayHTML : "y = 1.0 - exp(-(x/b)<sup>a</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Sigmoidal.WeibullCDF_scaled = module.exports.Sigmoidal.WeibullCDF_scaled = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "WeibullCDF_scaled",
    extendedVersionString : "Default",
    displayName : "Weibull CDF Scaled",
    displayHTML : "y = Scale * (1.0 - exp(-(x/b)<sup>a</sup>))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Sigmoidal.WeibullCDF_scaled_WithOffset = module.exports.Sigmoidal.WeibullCDF_scaled_WithOffset = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "WeibullCDF_scaled",
    extendedVersionString : "Offset",
    displayName : "Weibull CDF Scaled With Offset",
    displayHTML : "y = Scale * (1.0 - exp(-(x/b)<sup>a</sup>)) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Sigmoidal.WeibullPDF = module.exports.Sigmoidal.WeibullPDF = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "WeibullPDF",
    extendedVersionString : "Default",
    displayName : "Weibull PDF",
    displayHTML : "y = (a/b) * (x/b)<sup>(a-1.0)</sup> * exp(-(x/b)<sup>a</sup>)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Sigmoidal.WeibullPDF_WithOffset = module.exports.Sigmoidal.WeibullPDF_WithOffset = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "WeibullPDF",
    extendedVersionString : "Offset",
    displayName : "Weibull PDF With Offset",
    displayHTML : "y = (a/b) * (x/b)<sup>(a-1.0)</sup> * exp(-(x/b)<sup>a</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};


exports.Simple = module.exports.Simple = {};

exports.Simple.SimpleEquation_01 = module.exports.Simple.SimpleEquation_01 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_01",
    extendedVersionString : "Default",
    displayName : "Simple Equation 01",
    displayHTML : "y = a",
    dimensionality : 2,
    numberOfParameters : 1
};

exports.Simple.SimpleEquation_02 = module.exports.Simple.SimpleEquation_02 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_02",
    extendedVersionString : "Default",
    displayName : "Simple Equation 02",
    displayHTML : "y = a/pow(x,-2.0)",
    dimensionality : 2,
    numberOfParameters : 1
};

exports.Simple.SimpleEquation_02_WithOffset = module.exports.Simple.SimpleEquation_02_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_02",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 02 With Offset",
    displayHTML : "y = a/pow(x,-2.0) + Offset",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Simple.SimpleEquation_03 = module.exports.Simple.SimpleEquation_03 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_03",
    extendedVersionString : "Default",
    displayName : "Simple Equation 03",
    displayHTML : "y = a*pow(ln(x),b)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Simple.SimpleEquation_03_WithOffset = module.exports.Simple.SimpleEquation_03_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_03",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 03 With Offset",
    displayHTML : "y = a*pow(ln(x),b) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_04 = module.exports.Simple.SimpleEquation_04 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_04",
    extendedVersionString : "Default",
    displayName : "Simple Equation 04",
    displayHTML : "y = a*pow(x,3.0)",
    dimensionality : 2,
    numberOfParameters : 1
};

exports.Simple.SimpleEquation_04_WithOffset = module.exports.Simple.SimpleEquation_04_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_04",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 04 With Offset",
    displayHTML : "y = a*pow(x,3.0) + Offset",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Simple.SimpleEquation_05 = module.exports.Simple.SimpleEquation_05 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_05",
    extendedVersionString : "Default",
    displayName : "Simple Equation 05",
    displayHTML : "y = a*pow(x,4.0)",
    dimensionality : 2,
    numberOfParameters : 1
};

exports.Simple.SimpleEquation_05_WithOffset = module.exports.Simple.SimpleEquation_05_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_05",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 05 With Offset",
    displayHTML : "y = a*pow(x,4.0) + Offset",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Simple.SimpleEquation_06 = module.exports.Simple.SimpleEquation_06 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_06",
    extendedVersionString : "Default",
    displayName : "Simple Equation 06",
    displayHTML : "y = x/(a+b*pow(x,2.0))",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Simple.SimpleEquation_06_WithOffset = module.exports.Simple.SimpleEquation_06_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_06",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 06 With Offset",
    displayHTML : "y = x/(a+b*pow(x,2.0)) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_07 = module.exports.Simple.SimpleEquation_07 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_07",
    extendedVersionString : "Default",
    displayName : "Simple Equation 07",
    displayHTML : "y = a * pow(b,x) * pow(x,c)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_07_WithOffset = module.exports.Simple.SimpleEquation_07_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_07",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 07 With Offset",
    displayHTML : "y = a * pow(b,x) * pow(x,c) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_08 = module.exports.Simple.SimpleEquation_08 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_08",
    extendedVersionString : "Default",
    displayName : "Simple Equation 08",
    displayHTML : "y = a*pow(b,1.0/x)*pow(x,c)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_08_WithOffset = module.exports.Simple.SimpleEquation_08_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_08",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 08 With Offset",
    displayHTML : "y = a*pow(b,1.0/x)*pow(x,c) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_09 = module.exports.Simple.SimpleEquation_09 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_09",
    extendedVersionString : "Default",
    displayName : "Simple Equation 09",
    displayHTML : "y = a*exp(pow(x-b,2.0)/c)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_09_WithOffset = module.exports.Simple.SimpleEquation_09_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_09",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 09 With Offset",
    displayHTML : "y = a*exp(pow(x-b,2.0)/c) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_10 = module.exports.Simple.SimpleEquation_10 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_10",
    extendedVersionString : "Default",
    displayName : "Simple Equation 10",
    displayHTML : "y = a*exp(pow(ln(x)-b,2.0)/c)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_10_WithOffset = module.exports.Simple.SimpleEquation_10_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_10",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 10 With Offset",
    displayHTML : "y = a*exp(pow(ln(x)-b,2.0)/c) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_13 = module.exports.Simple.SimpleEquation_13 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_13",
    extendedVersionString : "Default",
    displayName : "Simple Equation 13",
    displayHTML : "y = a*pow(x/b,c)*exp(x/b)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_13_WithOffset = module.exports.Simple.SimpleEquation_13_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_13",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 13 With Offset",
    displayHTML : "y = a*pow(x/b,c)*exp(x/b) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_14 = module.exports.Simple.SimpleEquation_14 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_14",
    extendedVersionString : "Default",
    displayName : "Simple Equation 14",
    displayHTML : "y = a*pow(x,b+c*x)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_14_WithOffset = module.exports.Simple.SimpleEquation_14_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_14",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 14 With Offset",
    displayHTML : "y = a*pow(x,b+c*x) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_15 = module.exports.Simple.SimpleEquation_15 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_15",
    extendedVersionString : "Default",
    displayName : "Simple Equation 15",
    displayHTML : "y = a*pow(x,b+c/x)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_15_WithOffset = module.exports.Simple.SimpleEquation_15_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_15",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 15 With Offset",
    displayHTML : "y = a*pow(x,b+c/x) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_16 = module.exports.Simple.SimpleEquation_16 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_16",
    extendedVersionString : "Default",
    displayName : "Simple Equation 16",
    displayHTML : "y = a*pow(x,b+c*ln(x))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_16_WithOffset = module.exports.Simple.SimpleEquation_16_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_16",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 16 With Offset",
    displayHTML : "y = a*pow(x,b+c*ln(x)) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_17 = module.exports.Simple.SimpleEquation_17 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_17",
    extendedVersionString : "Default",
    displayName : "Simple Equation 17",
    displayHTML : "y = a*pow(x,b*x+c*pow(x,2.0))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_17_WithOffset = module.exports.Simple.SimpleEquation_17_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_17",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 17 With Offset",
    displayHTML : "y = a*pow(x,b*x+c*pow(x,2.0)) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_18 = module.exports.Simple.SimpleEquation_18 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_18",
    extendedVersionString : "Default",
    displayName : "Simple Equation 18",
    displayHTML : "y = a*exp(b*x+c*pow(x,0.5))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_18_WithOffset = module.exports.Simple.SimpleEquation_18_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_18",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 18 With Offset",
    displayHTML : "y = a*exp(b*x+c*pow(x,0.5)) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_19 = module.exports.Simple.SimpleEquation_19 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_19",
    extendedVersionString : "Default",
    displayName : "Simple Equation 19",
    displayHTML : "y = a*exp(b/x+c*x)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_19_WithOffset = module.exports.Simple.SimpleEquation_19_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_19",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 19 With Offset",
    displayHTML : "y = a*exp(b/x+c*x) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_20 = module.exports.Simple.SimpleEquation_20 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_20",
    extendedVersionString : "Default",
    displayName : "Simple Equation 20",
    displayHTML : "y = (a+x)/(b+c*x)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_20_WithOffset = module.exports.Simple.SimpleEquation_20_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_20",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 20 With Offset",
    displayHTML : "y = (a+x)/(b+c*x) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_21 = module.exports.Simple.SimpleEquation_21 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_21",
    extendedVersionString : "Default",
    displayName : "Simple Equation 21",
    displayHTML : "y = (a+x)/(b+c*pow(x,2.0))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_21_WithOffset = module.exports.Simple.SimpleEquation_21_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_21",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 21 With Offset",
    displayHTML : "y = (a+x)/(b+c*pow(x,2.0)) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_22 = module.exports.Simple.SimpleEquation_22 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_22",
    extendedVersionString : "Default",
    displayName : "Simple Equation 22",
    displayHTML : "y = a*(exp(b*x)-exp(c*x))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_22_WithOffset = module.exports.Simple.SimpleEquation_22_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_22",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 22 With Offset",
    displayHTML : "y = a*(exp(b*x)-exp(c*x)) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_23 = module.exports.Simple.SimpleEquation_23 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_23",
    extendedVersionString : "Default",
    displayName : "Simple Equation 23",
    displayHTML : "y = a*exp(b*exp(c*x))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_23_WithOffset = module.exports.Simple.SimpleEquation_23_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_23",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 23 With Offset",
    displayHTML : "y = a*exp(b*exp(c*x)) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_24 = module.exports.Simple.SimpleEquation_24 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_24",
    extendedVersionString : "Default",
    displayName : "Simple Equation 24",
    displayHTML : "y = a/(1.0 + b * exp(c*x))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_24_WithOffset = module.exports.Simple.SimpleEquation_24_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_24",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 24 With Offset",
    displayHTML : "y = a/(1.0 + b * exp(c*x)) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_25 = module.exports.Simple.SimpleEquation_25 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_25",
    extendedVersionString : "Default",
    displayName : "Simple Equation 25",
    displayHTML : "y = a/(b+pow(x,c))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_25_WithOffset = module.exports.Simple.SimpleEquation_25_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_25",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 25 With Offset",
    displayHTML : "y = a/(b+pow(x,c)) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_26 = module.exports.Simple.SimpleEquation_26 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_26",
    extendedVersionString : "Default",
    displayName : "Simple Equation 26",
    displayHTML : "y = a/pow(1.0 + b * pow(x,c),2.0)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_26_WithOffset = module.exports.Simple.SimpleEquation_26_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_26",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 26 With Offset",
    displayHTML : "y = a/pow(1.0 + b * pow(x,c),2.0) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_27 = module.exports.Simple.SimpleEquation_27 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_27",
    extendedVersionString : "Default",
    displayName : "Simple Equation 27",
    displayHTML : "y = pow(a+b*x,c)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_27_WithOffset = module.exports.Simple.SimpleEquation_27_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_27",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 27 With Offset",
    displayHTML : "y = pow(a+b*x,c) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_28 = module.exports.Simple.SimpleEquation_28 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_28",
    extendedVersionString : "Default",
    displayName : "Simple Equation 28",
    displayHTML : "y = exp(a+b/x+c*ln(x))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_28_WithOffset = module.exports.Simple.SimpleEquation_28_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_28",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 28 With Offset",
    displayHTML : "y = exp(a+b/x+c*ln(x)) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_29 = module.exports.Simple.SimpleEquation_29 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_29",
    extendedVersionString : "Default",
    displayName : "Simple Equation 29",
    displayHTML : "y = a*exp(b*pow(x,c))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_29_WithOffset = module.exports.Simple.SimpleEquation_29_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_29",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 29 With Offset",
    displayHTML : "y = a*exp(b*pow(x,c)) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_30 = module.exports.Simple.SimpleEquation_30 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_30",
    extendedVersionString : "Default",
    displayName : "Simple Equation 30",
    displayHTML : "y = a*pow(x,b*pow(x,c))",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_30_WithOffset = module.exports.Simple.SimpleEquation_30_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_30",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 30 With Offset",
    displayHTML : "y = a*pow(x,b*pow(x,c)) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_31 = module.exports.Simple.SimpleEquation_31 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_31",
    extendedVersionString : "Default",
    displayName : "Simple Equation 31",
    displayHTML : "y = a*ln(x+b)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Simple.SimpleEquation_31_WithOffset = module.exports.Simple.SimpleEquation_31_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_31",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 31 With Offset",
    displayHTML : "y = a*ln(x+b) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_32 = module.exports.Simple.SimpleEquation_32 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_32",
    extendedVersionString : "Default",
    displayName : "Simple Equation 32",
    displayHTML : "y = a/x+b*pow(x,c)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_32_WithOffset = module.exports.Simple.SimpleEquation_32_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_32",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 32 With Offset",
    displayHTML : "y = a/x+b*pow(x,c) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_33 = module.exports.Simple.SimpleEquation_33 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_33",
    extendedVersionString : "Default",
    displayName : "Simple Equation 33",
    displayHTML : "y = a/x+b*exp(c/x)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_33_WithOffset = module.exports.Simple.SimpleEquation_33_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_33",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 33 With Offset",
    displayHTML : "y = a/x+b*exp(c/x) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_34 = module.exports.Simple.SimpleEquation_34 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_34",
    extendedVersionString : "Default",
    displayName : "Simple Equation 34",
    displayHTML : "y = a/x+b*exp(c*x)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_34_WithOffset = module.exports.Simple.SimpleEquation_34_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_34",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 34 With Offset",
    displayHTML : "y = a/x+b*exp(c*x) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_35 = module.exports.Simple.SimpleEquation_35 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_35",
    extendedVersionString : "Default",
    displayName : "Simple Equation 35",
    displayHTML : "y = a*exp(b*x)/x",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Simple.SimpleEquation_35_WithOffset = module.exports.Simple.SimpleEquation_35_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_35",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 35 With Offset",
    displayHTML : "y = a*exp(b*x)/x + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_36 = module.exports.Simple.SimpleEquation_36 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_36",
    extendedVersionString : "Default",
    displayName : "Simple Equation 36",
    displayHTML : "y = a*exp(b/x)/x",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Simple.SimpleEquation_36_WithOffset = module.exports.Simple.SimpleEquation_36_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_36",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 36 With Offset",
    displayHTML : "y = a*exp(b/x)/x + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_37 = module.exports.Simple.SimpleEquation_37 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_37",
    extendedVersionString : "Default",
    displayName : "Simple Equation 37",
    displayHTML : "y = a*pow(x,b)*ln(x)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Simple.SimpleEquation_37_WithOffset = module.exports.Simple.SimpleEquation_37_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_37",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 37 With Offset",
    displayHTML : "y = a*pow(x,b)*ln(x) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_38 = module.exports.Simple.SimpleEquation_38 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_38",
    extendedVersionString : "Default",
    displayName : "Simple Equation 38",
    displayHTML : "y = a*pow(x,b)/ln(x)",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Simple.SimpleEquation_38_WithOffset = module.exports.Simple.SimpleEquation_38_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_38",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 38 With Offset",
    displayHTML : "y = a*pow(x,b)/ln(x) + Offset",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_39 = module.exports.Simple.SimpleEquation_39 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_39",
    extendedVersionString : "Default",
    displayName : "Simple Equation 39",
    displayHTML : "y = a*pow(x,b)*ln(x+c)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_39_WithOffset = module.exports.Simple.SimpleEquation_39_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_39",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 39 With Offset",
    displayHTML : "y = a*pow(x,b)*ln(x+c) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_40 = module.exports.Simple.SimpleEquation_40 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_40",
    extendedVersionString : "Default",
    displayName : "Simple Equation 40",
    displayHTML : "y = a*pow(ln(x+b),c)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_40_WithOffset = module.exports.Simple.SimpleEquation_40_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_40",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 40 With Offset",
    displayHTML : "y = a*pow(ln(x+b),c) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_41 = module.exports.Simple.SimpleEquation_41 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_41",
    extendedVersionString : "Default",
    displayName : "Simple Equation 41",
    displayHTML : "y = a*pow(x,b/x)+c*x",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_41_WithOffset = module.exports.Simple.SimpleEquation_41_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_41",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 41 With Offset",
    displayHTML : "y = a*pow(x,b/x)+c*x + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_42 = module.exports.Simple.SimpleEquation_42 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_42",
    extendedVersionString : "Default",
    displayName : "Simple Equation 42",
    displayHTML : "y = a*pow(x,b/x)+c*ln(x)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_42_WithOffset = module.exports.Simple.SimpleEquation_42_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_42",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 42 With Offset",
    displayHTML : "y = a*pow(x,b/x)+c*ln(x) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Simple.SimpleReciprocalA = module.exports.Simple.SimpleReciprocalA = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleReciprocalA",
    extendedVersionString : "Default",
    displayName : "Simple Reciprocal",
    displayHTML : "y = a / x",
    dimensionality : 2,
    numberOfParameters : 1
};

exports.Simple.SimpleReciprocalA_WithOffset = module.exports.Simple.SimpleReciprocalA_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleReciprocalA",
    extendedVersionString : "Offset",
    displayName : "Simple Reciprocal With Offset",
    displayHTML : "y = a / x + Offset",
    dimensionality : 2,
    numberOfParameters : 2
};


exports.Spline = module.exports.Spline = {};


exports.Trigonometric = module.exports.Trigonometric = {};

exports.Trigonometric.GreatCircleDegrees = module.exports.Trigonometric.GreatCircleDegrees = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "GreatCircleDegrees",
    extendedVersionString : "Default",
    displayName : "Great Circle [Degrees]",
    displayHTML : "latitude = arctan(A*cos((B + longitude) / 57.2957795131)) * 57.2957795131",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Trigonometric.GreatCircleRadians = module.exports.Trigonometric.GreatCircleRadians = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "GreatCircleRadians",
    extendedVersionString : "Default",
    displayName : "Great Circle [radians]",
    displayHTML : "latitude = arctan(A*cos(B + longitude))",
    dimensionality : 2,
    numberOfParameters : 2
};

exports.Trigonometric.HyperbolicCosine = module.exports.Trigonometric.HyperbolicCosine = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "HyperbolicCosine",
    extendedVersionString : "Default",
    displayName : "Hyperbolic Cosine [radians]",
    displayHTML : "y = amplitude * cosh(pi * (x - center) / width)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Trigonometric.HyperbolicCosine_WithOffset = module.exports.Trigonometric.HyperbolicCosine_WithOffset = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "HyperbolicCosine",
    extendedVersionString : "Offset",
    displayName : "Hyperbolic Cosine [radians] With Offset",
    displayHTML : "y = amplitude * cosh(pi * (x - center) / width) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Trigonometric.HyperbolicCosine_NyquistLimited = module.exports.Trigonometric.HyperbolicCosine_NyquistLimited = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "HyperbolicCosine_NyquistLimited",
    extendedVersionString : "Default",
    displayName : "Hyperbolic Cosine [radians] (Nyquist Limited)",
    displayHTML : "y = amplitude * cosh(pi * (x - center) / width)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Trigonometric.HyperbolicCosine_NyquistLimited_WithOffset = module.exports.Trigonometric.HyperbolicCosine_NyquistLimited_WithOffset = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "HyperbolicCosine_NyquistLimited",
    extendedVersionString : "Offset",
    displayName : "Hyperbolic Cosine [radians] (Nyquist Limited) With Offset",
    displayHTML : "y = amplitude * cosh(pi * (x - center) / width) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Trigonometric.Sinc = module.exports.Trigonometric.Sinc = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "Sinc",
    extendedVersionString : "Default",
    displayName : "Cardinal Sine (sinc) [radians]",
    displayHTML : "y = amplitude * sin(pi * (x - center) / width) / (pi * (x - center) / width)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Trigonometric.Sinc_WithOffset = module.exports.Trigonometric.Sinc_WithOffset = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "Sinc",
    extendedVersionString : "Offset",
    displayName : "Cardinal Sine (sinc) [radians] With Offset",
    displayHTML : "y = amplitude * sin(pi * (x - center) / width) / (pi * (x - center) / width) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Trigonometric.SincSquared = module.exports.Trigonometric.SincSquared = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "SincSquared",
    extendedVersionString : "Default",
    displayName : "Cardinal Sine (sinc) Squared [radians]",
    displayHTML : "y = amplitude * sin(pi * (x - center) / width)<sup>2</sup> / (pi * (x - center) / width)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Trigonometric.SincSquared_WithOffset = module.exports.Trigonometric.SincSquared_WithOffset = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "SincSquared",
    extendedVersionString : "Offset",
    displayName : "Cardinal Sine (sinc) Squared [radians] With Offset",
    displayHTML : "y = amplitude * sin(pi * (x - center) / width)<sup>2</sup> / (pi * (x - center) / width) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Trigonometric.SincSquared_NyquistLimited = module.exports.Trigonometric.SincSquared_NyquistLimited = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "SincSquared_NyquistLimited",
    extendedVersionString : "Default",
    displayName : "Cardinal Sine (sinc) Squared [radians] (Nyquist Limited)",
    displayHTML : "y = amplitude * sin(pi * (x - center) / width)<sup>2</sup> / (pi * (x - center) / width)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Trigonometric.SincSquared_NyquistLimited_WithOffset = module.exports.Trigonometric.SincSquared_NyquistLimited_WithOffset = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "SincSquared_NyquistLimited",
    extendedVersionString : "Offset",
    displayName : "Cardinal Sine (sinc) Squared [radians] (Nyquist Limited) With Offset",
    displayHTML : "y = amplitude * sin(pi * (x - center) / width)<sup>2</sup> / (pi * (x - center) / width) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Trigonometric.Sinc_NyquistLimited = module.exports.Trigonometric.Sinc_NyquistLimited = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "Sinc_NyquistLimited",
    extendedVersionString : "Default",
    displayName : "Cardinal Sine (sinc) [radians] (Nyquist Limited)",
    displayHTML : "y = amplitude * sin(pi * (x - center) / width) / (pi * (x - center) / width)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Trigonometric.Sinc_NyquistLimited_WithOffset = module.exports.Trigonometric.Sinc_NyquistLimited_WithOffset = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "Sinc_NyquistLimited",
    extendedVersionString : "Offset",
    displayName : "Cardinal Sine (sinc) [radians] (Nyquist Limited) With Offset",
    displayHTML : "y = amplitude * sin(pi * (x - center) / width) / (pi * (x - center) / width) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Trigonometric.Sine = module.exports.Trigonometric.Sine = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "Sine",
    extendedVersionString : "Default",
    displayName : "Sine [radians]",
    displayHTML : "y = amplitude * sin(pi * (x - center) / width)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Trigonometric.Sine_WithOffset = module.exports.Trigonometric.Sine_WithOffset = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "Sine",
    extendedVersionString : "Offset",
    displayName : "Sine [radians] With Offset",
    displayHTML : "y = amplitude * sin(pi * (x - center) / width) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Trigonometric.SineSquared = module.exports.Trigonometric.SineSquared = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "SineSquared",
    extendedVersionString : "Default",
    displayName : "Sine Squared [radians]",
    displayHTML : "y = amplitude * sin(pi * (x - center) / width)<sup>2</sup>",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Trigonometric.SineSquared_WithOffset = module.exports.Trigonometric.SineSquared_WithOffset = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "SineSquared",
    extendedVersionString : "Offset",
    displayName : "Sine Squared [radians] With Offset",
    displayHTML : "y = amplitude * sin(pi * (x - center) / width)<sup>2</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Trigonometric.SineSquared_NyquistLimited = module.exports.Trigonometric.SineSquared_NyquistLimited = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "SineSquared_NyquistLimited",
    extendedVersionString : "Default",
    displayName : "Sine Squared [radians] (Nyquist Limited)",
    displayHTML : "y = amplitude * sin(pi * (x - center) / width)<sup>2</sup>",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Trigonometric.SineSquared_NyquistLimited_WithOffset = module.exports.Trigonometric.SineSquared_NyquistLimited_WithOffset = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "SineSquared_NyquistLimited",
    extendedVersionString : "Offset",
    displayName : "Sine Squared [radians] (Nyquist Limited) With Offset",
    displayHTML : "y = amplitude * sin(pi * (x - center) / width)<sup>2</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Trigonometric.Sine_NyquistLimited = module.exports.Trigonometric.Sine_NyquistLimited = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "Sine_NyquistLimited",
    extendedVersionString : "Default",
    displayName : "Sine [radians] (Nyquist Limited)",
    displayHTML : "y = amplitude * sin(pi * (x - center) / width)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Trigonometric.Sine_NyquistLimited_WithOffset = module.exports.Trigonometric.Sine_NyquistLimited_WithOffset = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "Sine_NyquistLimited",
    extendedVersionString : "Offset",
    displayName : "Sine [radians] (Nyquist Limited) With Offset",
    displayHTML : "y = amplitude * sin(pi * (x - center) / width) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Trigonometric.Tangent = module.exports.Trigonometric.Tangent = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "Tangent",
    extendedVersionString : "Default",
    displayName : "Tangent [radians]",
    displayHTML : "y = amplitude * tan(pi * (x - center) / width)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Trigonometric.Tangent_WithOffset = module.exports.Trigonometric.Tangent_WithOffset = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "Tangent",
    extendedVersionString : "Offset",
    displayName : "Tangent [radians] With Offset",
    displayHTML : "y = amplitude * tan(pi * (x - center) / width) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.Trigonometric.Tangent_NyquistLimited = module.exports.Trigonometric.Tangent_NyquistLimited = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "Tangent_NyquistLimited",
    extendedVersionString : "Default",
    displayName : "Tangent [radians] (Nyquist Limited)",
    displayHTML : "y = amplitude * tan(pi * (x - center) / width)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.Trigonometric.Tangent_NyquistLimited_WithOffset = module.exports.Trigonometric.Tangent_NyquistLimited_WithOffset = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "Tangent_NyquistLimited",
    extendedVersionString : "Offset",
    displayName : "Tangent [radians] (Nyquist Limited) With Offset",
    displayHTML : "y = amplitude * tan(pi * (x - center) / width) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};


exports.UserDefinedFunction = module.exports.UserDefinedFunction = {};


exports.YieldDensity = module.exports.YieldDensity = {};

exports.YieldDensity.Bleasdale = module.exports.YieldDensity.Bleasdale = {
    pythonModuleName : "YieldDensity",
    pythonClassName : "Bleasdale",
    extendedVersionString : "Default",
    displayName : "Bleasdale",
    displayHTML : "y = 1.0 / (a + bx)<sup>(-1.0/c)</sup>",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.YieldDensity.Bleasdale_WithOffset = module.exports.YieldDensity.Bleasdale_WithOffset = {
    pythonModuleName : "YieldDensity",
    pythonClassName : "Bleasdale",
    extendedVersionString : "Offset",
    displayName : "Bleasdale With Offset",
    displayHTML : "y = 1.0 / (a + bx)<sup>(-1.0/c)</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.YieldDensity.ExtendedHolliday = module.exports.YieldDensity.ExtendedHolliday = {
    pythonModuleName : "YieldDensity",
    pythonClassName : "ExtendedHolliday",
    extendedVersionString : "Default",
    displayName : "Extended Holliday",
    displayHTML : "y = a / (a + bx + cx<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.YieldDensity.ExtendedHolliday_WithOffset = module.exports.YieldDensity.ExtendedHolliday_WithOffset = {
    pythonModuleName : "YieldDensity",
    pythonClassName : "ExtendedHolliday",
    extendedVersionString : "Offset",
    displayName : "Extended Holliday With Offset",
    displayHTML : "y = a / (a + bx + cx<sup>2</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.YieldDensity.Harris = module.exports.YieldDensity.Harris = {
    pythonModuleName : "YieldDensity",
    pythonClassName : "Harris",
    extendedVersionString : "Default",
    displayName : "Harris",
    displayHTML : "y = 1.0 / (a + bx<sup>c</sup>)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.YieldDensity.Harris_WithOffset = module.exports.YieldDensity.Harris_WithOffset = {
    pythonModuleName : "YieldDensity",
    pythonClassName : "Harris",
    extendedVersionString : "Offset",
    displayName : "Harris With Offset",
    displayHTML : "y = 1.0 / (a + bx<sup>c</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.YieldDensity.Holliday = module.exports.YieldDensity.Holliday = {
    pythonModuleName : "YieldDensity",
    pythonClassName : "Holliday",
    extendedVersionString : "Default",
    displayName : "Holliday",
    displayHTML : "y = 1.0 / (a + bx + cx<sup>2</sup>)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.YieldDensity.Holliday_WithOffset = module.exports.YieldDensity.Holliday_WithOffset = {
    pythonModuleName : "YieldDensity",
    pythonClassName : "Holliday",
    extendedVersionString : "Offset",
    displayName : "Holliday With Offset",
    displayHTML : "y = 1.0 / (a + bx + cx<sup>2</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.YieldDensity.InverseBleasdale = module.exports.YieldDensity.InverseBleasdale = {
    pythonModuleName : "YieldDensity",
    pythonClassName : "InverseBleasdale",
    extendedVersionString : "Default",
    displayName : "Inverse Bleasdale",
    displayHTML : "y = x / (a + bx)<sup>(-1.0/c)</sup>",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.YieldDensity.InverseBleasdale_WithOffset = module.exports.YieldDensity.InverseBleasdale_WithOffset = {
    pythonModuleName : "YieldDensity",
    pythonClassName : "InverseBleasdale",
    extendedVersionString : "Offset",
    displayName : "Inverse Bleasdale With Offset",
    displayHTML : "y = x / (a + bx)<sup>(-1.0/c)</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.YieldDensity.InverseHarris = module.exports.YieldDensity.InverseHarris = {
    pythonModuleName : "YieldDensity",
    pythonClassName : "InverseHarris",
    extendedVersionString : "Default",
    displayName : "InverseHarris",
    displayHTML : "y = x / (a + bx<sup>c</sup>)",
    dimensionality : 2,
    numberOfParameters : 3
};

exports.YieldDensity.InverseHarris_WithOffset = module.exports.YieldDensity.InverseHarris_WithOffset = {
    pythonModuleName : "YieldDensity",
    pythonClassName : "InverseHarris",
    extendedVersionString : "Offset",
    displayName : "InverseHarris With Offset",
    displayHTML : "y = x / (a + bx<sup>c</sup>) + Offset",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.YieldDensity.Nelder = module.exports.YieldDensity.Nelder = {
    pythonModuleName : "YieldDensity",
    pythonClassName : "Nelder",
    extendedVersionString : "Default",
    displayName : "Nelder",
    displayHTML : "y = (a + x) / (b + c(a + x) + d(a + x)<sup>2</sup>",
    dimensionality : 2,
    numberOfParameters : 4
};

exports.YieldDensity.Nelder_WithOffset = module.exports.YieldDensity.Nelder_WithOffset = {
    pythonModuleName : "YieldDensity",
    pythonClassName : "Nelder",
    extendedVersionString : "Offset",
    displayName : "Nelder With Offset",
    displayHTML : "y = (a + x) / (b + c(a + x) + d(a + x)<sup>2</sup> + Offset",
    dimensionality : 2,
    numberOfParameters : 5
};

