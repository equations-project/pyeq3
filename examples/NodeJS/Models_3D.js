
exports.BioScience = module.exports.BioScience = {};

exports.BioScience.ChenClayton = module.exports.BioScience.ChenClayton = {
    pythonModuleName : "BioScience",
    pythonClassName : "ChenClayton",
    extendedVersionString : "Default",
    displayName : "Chen-Clayton",
    displayHTML : "r.h.(T<sub>k</sub>,M) = exp(-(C1/T<sup>C2</sup>) * exp(-C3*T<sup>C4</sup>*M))",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.BioScience.ChenClayton_WithOffset = module.exports.BioScience.ChenClayton_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "ChenClayton",
    extendedVersionString : "Offset",
    displayName : "Chen-Clayton With Offset",
    displayHTML : "r.h.(T<sub>k</sub>,M) = exp(-(C1/T<sup>C2</sup>) * exp(-C3*T<sup>C4</sup>*M)) + Offset",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.BioScience.ChenClayton_scaled = module.exports.BioScience.ChenClayton_scaled = {
    pythonModuleName : "BioScience",
    pythonClassName : "ChenClayton_scaled",
    extendedVersionString : "Default",
    displayName : "Chen-Clayton Scaled",
    displayHTML : "z = Scale * exp(-(C1/T<sup>C2</sup>) * exp(-C3*T<sup>C4</sup>*M))",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.BioScience.ChenClayton_scaled_WithOffset = module.exports.BioScience.ChenClayton_scaled_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "ChenClayton_scaled",
    extendedVersionString : "Offset",
    displayName : "Chen-Clayton Scaled With Offset",
    displayHTML : "z = Scale * exp(-(C1/T<sup>C2</sup>) * exp(-C3*T<sup>C4</sup>*M)) + Offset",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.BioScience.HighLowAffinityDoubleIsotopeDisplacement = module.exports.BioScience.HighLowAffinityDoubleIsotopeDisplacement = {
    pythonModuleName : "BioScience",
    pythonClassName : "HighLowAffinityDoubleIsotopeDisplacement",
    extendedVersionString : "Default",
    displayName : "High-Low Affinity Double Isotope Displacement (y = [Hot])",
    displayHTML : "z = aby / (1+b(x+y)) + cdy / (1+d(x+y))",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.BioScience.HighLowAffinityDoubleIsotopeDisplacement_WithOffset = module.exports.BioScience.HighLowAffinityDoubleIsotopeDisplacement_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "HighLowAffinityDoubleIsotopeDisplacement",
    extendedVersionString : "Offset",
    displayName : "High-Low Affinity Double Isotope Displacement (y = [Hot]) With Offset",
    displayHTML : "z = aby / (1+b(x+y)) + cdy / (1+d(x+y)) + Offset",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.BioScience.HighLowAffinityIsotopeDisplacement = module.exports.BioScience.HighLowAffinityIsotopeDisplacement = {
    pythonModuleName : "BioScience",
    pythonClassName : "HighLowAffinityIsotopeDisplacement",
    extendedVersionString : "Default",
    displayName : "High-Low Affinity Isotope Displacement (y = [Hot])",
    displayHTML : "z = aby / (1+b(x+y))",
    dimensionality : 3,
    numberOfParameters : 2
};

exports.BioScience.HighLowAffinityIsotopeDisplacement_WithOffset = module.exports.BioScience.HighLowAffinityIsotopeDisplacement_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "HighLowAffinityIsotopeDisplacement",
    extendedVersionString : "Offset",
    displayName : "High-Low Affinity Isotope Displacement (y = [Hot]) With Offset",
    displayHTML : "z = aby / (1+b(x+y)) + Offset",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.BioScience.LogisticGrowth = module.exports.BioScience.LogisticGrowth = {
    pythonModuleName : "BioScience",
    pythonClassName : "LogisticGrowth",
    extendedVersionString : "Default",
    displayName : "Logistic Growth",
    displayHTML : "z = a / (1 + exp(-(b + cx + dy + fxy))) + g",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.BioScience.MichaelisMentenDoubleIsotopeDisplacement = module.exports.BioScience.MichaelisMentenDoubleIsotopeDisplacement = {
    pythonModuleName : "BioScience",
    pythonClassName : "MichaelisMentenDoubleIsotopeDisplacement",
    extendedVersionString : "Default",
    displayName : "Michaelis-Menten Double Isotope Displacement (y = [Hot])",
    displayHTML : "z = ay / (b + x + y) + cy / (d + x + y)",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.BioScience.MichaelisMentenDoubleIsotopeDisplacement_WithOffset = module.exports.BioScience.MichaelisMentenDoubleIsotopeDisplacement_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "MichaelisMentenDoubleIsotopeDisplacement",
    extendedVersionString : "Offset",
    displayName : "Michaelis-Menten Double Isotope Displacement (y = [Hot]) With Offset",
    displayHTML : "z = ay / (b + x + y) + cy / (d + x + y) + Offset",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.BioScience.MichaelisMentenIsotopeDisplacement = module.exports.BioScience.MichaelisMentenIsotopeDisplacement = {
    pythonModuleName : "BioScience",
    pythonClassName : "MichaelisMentenIsotopeDisplacement",
    extendedVersionString : "Default",
    displayName : "Michaelis-Menten Isotope Displacement (y = [Hot])",
    displayHTML : "z = ay / (b + x + y)",
    dimensionality : 3,
    numberOfParameters : 2
};

exports.BioScience.MichaelisMentenIsotopeDisplacement_WithOffset = module.exports.BioScience.MichaelisMentenIsotopeDisplacement_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "MichaelisMentenIsotopeDisplacement",
    extendedVersionString : "Offset",
    displayName : "Michaelis-Menten Isotope Displacement (y = [Hot]) With Offset",
    displayHTML : "z = ay / (b + x + y) + Offset",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.BioScience.ModifiedChungPfost = module.exports.BioScience.ModifiedChungPfost = {
    pythonModuleName : "BioScience",
    pythonClassName : "ModifiedChungPfost",
    extendedVersionString : "Default",
    displayName : "Modified Chung-Pfost",
    displayHTML : "r.h.(T,M) = exp(-(C1/(T+C2)) * exp(-C3*M))",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.BioScience.ModifiedChungPfost_WithOffset = module.exports.BioScience.ModifiedChungPfost_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "ModifiedChungPfost",
    extendedVersionString : "Offset",
    displayName : "Modified Chung-Pfost With Offset",
    displayHTML : "r.h.(T,M) = exp(-(C1/(T+C2)) * exp(-C3*M)) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.BioScience.ModifiedHalsey = module.exports.BioScience.ModifiedHalsey = {
    pythonModuleName : "BioScience",
    pythonClassName : "ModifiedHalsey",
    extendedVersionString : "Default",
    displayName : "Modified Halsey",
    displayHTML : "r.h.(T,M) = exp(-exp(C1 + C2*T) * M<sup>-C3</sup>)",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.BioScience.ModifiedHalsey_WithOffset = module.exports.BioScience.ModifiedHalsey_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "ModifiedHalsey",
    extendedVersionString : "Offset",
    displayName : "Modified Halsey With Offset",
    displayHTML : "r.h.(T,M) = exp(-exp(C1 + C2*T) * M<sup>-C3</sup>) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.BioScience.ModifiedHalsey_scaled = module.exports.BioScience.ModifiedHalsey_scaled = {
    pythonModuleName : "BioScience",
    pythonClassName : "ModifiedHalsey_scaled",
    extendedVersionString : "Default",
    displayName : "Modified Halsey Scaled",
    displayHTML : "z = Scale * exp(-exp(C1 + C2*T) * M<sup>-C3</sup>)",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.BioScience.ModifiedHalsey_scaled_WithOffset = module.exports.BioScience.ModifiedHalsey_scaled_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "ModifiedHalsey_scaled",
    extendedVersionString : "Offset",
    displayName : "Modified Halsey Scaled With Offset",
    displayHTML : "z = Scale * exp(-exp(C1 + C2*T) * M<sup>-C3</sup>) + Offset",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.BioScience.ModifiedHenderson = module.exports.BioScience.ModifiedHenderson = {
    pythonModuleName : "BioScience",
    pythonClassName : "ModifiedHenderson",
    extendedVersionString : "Default",
    displayName : "Modified Henderson",
    displayHTML : "r.h.(T,M) = 1 - exp(-C1 * (T + C2) * M<sup>C3</sup>)",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.BioScience.ModifiedHenderson_WithOffset = module.exports.BioScience.ModifiedHenderson_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "ModifiedHenderson",
    extendedVersionString : "Offset",
    displayName : "Modified Henderson With Offset",
    displayHTML : "r.h.(T,M) = 1 - exp(-C1 * (T + C2) * M<sup>C3</sup>) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.BioScience.StrohmanYoerger = module.exports.BioScience.StrohmanYoerger = {
    pythonModuleName : "BioScience",
    pythonClassName : "StrohmanYoerger",
    extendedVersionString : "Default",
    displayName : "Strohman-Yoerger",
    displayHTML : "r.h.(P<sub>s</sub>,M) = exp(C1*exp(-C2*M)*ln(P<sub>s</sub>) - C3*exp(-C4*M))",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.BioScience.StrohmanYoerger_WithOffset = module.exports.BioScience.StrohmanYoerger_WithOffset = {
    pythonModuleName : "BioScience",
    pythonClassName : "StrohmanYoerger",
    extendedVersionString : "Offset",
    displayName : "Strohman-Yoerger With Offset",
    displayHTML : "r.h.(P<sub>s</sub>,M) = exp(C1*exp(-C2*M)*ln(P<sub>s</sub>) - C3*exp(-C4*M)) + Offset",
    dimensionality : 3,
    numberOfParameters : 5
};


exports.EnzymeKinetics = module.exports.EnzymeKinetics = {};

exports.EnzymeKinetics.CompetitiveInhibitionA = module.exports.EnzymeKinetics.CompetitiveInhibitionA = {
    pythonModuleName : "EnzymeKinetics",
    pythonClassName : "CompetitiveInhibitionA",
    extendedVersionString : "Default",
    displayName : "Competitive Inhibition A",
    displayHTML : "z = ax / (b(1 + y/c) + x)",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.EnzymeKinetics.CompetitiveInhibitionA_WithOffset = module.exports.EnzymeKinetics.CompetitiveInhibitionA_WithOffset = {
    pythonModuleName : "EnzymeKinetics",
    pythonClassName : "CompetitiveInhibitionA",
    extendedVersionString : "Offset",
    displayName : "Competitive Inhibition A With Offset",
    displayHTML : "z = ax / (b(1 + y/c) + x) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.EnzymeKinetics.CompetitiveInhibitionB = module.exports.EnzymeKinetics.CompetitiveInhibitionB = {
    pythonModuleName : "EnzymeKinetics",
    pythonClassName : "CompetitiveInhibitionB",
    extendedVersionString : "Default",
    displayName : "Competitive Inhibition B",
    displayHTML : "z = ay / (b(1 + x/c) + y)",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.EnzymeKinetics.CompetitiveInhibitionB_WithOffset = module.exports.EnzymeKinetics.CompetitiveInhibitionB_WithOffset = {
    pythonModuleName : "EnzymeKinetics",
    pythonClassName : "CompetitiveInhibitionB",
    extendedVersionString : "Offset",
    displayName : "Competitive Inhibition B With Offset",
    displayHTML : "z = ay / (b(1 + x/c) + y) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.EnzymeKinetics.CompetitiveInhibitionC = module.exports.EnzymeKinetics.CompetitiveInhibitionC = {
    pythonModuleName : "EnzymeKinetics",
    pythonClassName : "CompetitiveInhibitionC",
    extendedVersionString : "Default",
    displayName : "Competitive Inhibition C",
    displayHTML : "z = axy / (b(1 + x/c) + y)",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.EnzymeKinetics.CompetitiveInhibitionC_WithOffset = module.exports.EnzymeKinetics.CompetitiveInhibitionC_WithOffset = {
    pythonModuleName : "EnzymeKinetics",
    pythonClassName : "CompetitiveInhibitionC",
    extendedVersionString : "Offset",
    displayName : "Competitive Inhibition C With Offset",
    displayHTML : "z = axy / (b(1 + x/c) + y) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.EnzymeKinetics.InhibitionByCompetingSubstrateA = module.exports.EnzymeKinetics.InhibitionByCompetingSubstrateA = {
    pythonModuleName : "EnzymeKinetics",
    pythonClassName : "InhibitionByCompetingSubstrateA",
    extendedVersionString : "Default",
    displayName : "Inhibition By Competing Substrate A",
    displayHTML : "z = (ax/b) / (1 + x/b + y/c)",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.EnzymeKinetics.InhibitionByCompetingSubstrateA_WithOffset = module.exports.EnzymeKinetics.InhibitionByCompetingSubstrateA_WithOffset = {
    pythonModuleName : "EnzymeKinetics",
    pythonClassName : "InhibitionByCompetingSubstrateA",
    extendedVersionString : "Offset",
    displayName : "Inhibition By Competing Substrate A With Offset",
    displayHTML : "z = (ax/b) / (1 + x/b + y/c) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.EnzymeKinetics.InhibitionByCompetingSubstrateB = module.exports.EnzymeKinetics.InhibitionByCompetingSubstrateB = {
    pythonModuleName : "EnzymeKinetics",
    pythonClassName : "InhibitionByCompetingSubstrateB",
    extendedVersionString : "Default",
    displayName : "Inhibition By Competing Substrate B",
    displayHTML : "z = (ay/b) / (1 + y/b + x/c)",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.EnzymeKinetics.InhibitionByCompetingSubstrateB_WithOffset = module.exports.EnzymeKinetics.InhibitionByCompetingSubstrateB_WithOffset = {
    pythonModuleName : "EnzymeKinetics",
    pythonClassName : "InhibitionByCompetingSubstrateB",
    extendedVersionString : "Offset",
    displayName : "Inhibition By Competing Substrate B With Offset",
    displayHTML : "z = (ay/b) / (1 + y/b + x/c) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.EnzymeKinetics.InhibitionByCompetingSubstrateC = module.exports.EnzymeKinetics.InhibitionByCompetingSubstrateC = {
    pythonModuleName : "EnzymeKinetics",
    pythonClassName : "InhibitionByCompetingSubstrateC",
    extendedVersionString : "Default",
    displayName : "Inhibition By Competing Substrate C",
    displayHTML : "z = (axy/b) / (1 + y/b + x/c)",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.EnzymeKinetics.InhibitionByCompetingSubstrateC_WithOffset = module.exports.EnzymeKinetics.InhibitionByCompetingSubstrateC_WithOffset = {
    pythonModuleName : "EnzymeKinetics",
    pythonClassName : "InhibitionByCompetingSubstrateC",
    extendedVersionString : "Offset",
    displayName : "Inhibition By Competing Substrate C With Offset",
    displayHTML : "z = (axy/b) / (1 + y/b + x/c) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.EnzymeKinetics.MichaelisMentenProductInhibition = module.exports.EnzymeKinetics.MichaelisMentenProductInhibition = {
    pythonModuleName : "EnzymeKinetics",
    pythonClassName : "MichaelisMentenProductInhibition",
    extendedVersionString : "Default",
    displayName : "Michaelis Menten Product Inhibition",
    displayHTML : "z = (ax/b - cy/d) / (1 + x/b + y/d)",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.EnzymeKinetics.MichaelisMentenProductInhibition_WithOffset = module.exports.EnzymeKinetics.MichaelisMentenProductInhibition_WithOffset = {
    pythonModuleName : "EnzymeKinetics",
    pythonClassName : "MichaelisMentenProductInhibition",
    extendedVersionString : "Offset",
    displayName : "Michaelis Menten Product Inhibition With Offset",
    displayHTML : "z = (ax/b - cy/d) / (1 + x/b + y/d) + Offset",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.EnzymeKinetics.MixedInhibitionA = module.exports.EnzymeKinetics.MixedInhibitionA = {
    pythonModuleName : "EnzymeKinetics",
    pythonClassName : "MixedInhibitionA",
    extendedVersionString : "Default",
    displayName : "Mixed Inhibition A",
    displayHTML : "z = ax / (b(1 + y/c) + x(1 + y/d))",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.EnzymeKinetics.MixedInhibitionA_WithOffset = module.exports.EnzymeKinetics.MixedInhibitionA_WithOffset = {
    pythonModuleName : "EnzymeKinetics",
    pythonClassName : "MixedInhibitionA",
    extendedVersionString : "Offset",
    displayName : "Mixed Inhibition A With Offset",
    displayHTML : "z = ax / (b(1 + y/c) + x(1 + y/d)) + Offset",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.EnzymeKinetics.MixedInhibitionB = module.exports.EnzymeKinetics.MixedInhibitionB = {
    pythonModuleName : "EnzymeKinetics",
    pythonClassName : "MixedInhibitionB",
    extendedVersionString : "Default",
    displayName : "Mixed Inhibition B",
    displayHTML : "z = ay / (b(1 + x/c) + y(1 + x/d))",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.EnzymeKinetics.MixedInhibitionB_WithOffset = module.exports.EnzymeKinetics.MixedInhibitionB_WithOffset = {
    pythonModuleName : "EnzymeKinetics",
    pythonClassName : "MixedInhibitionB",
    extendedVersionString : "Offset",
    displayName : "Mixed Inhibition B With Offset",
    displayHTML : "z = ay / (b(1 + x/c) + y(1 + x/d)) + Offset",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.EnzymeKinetics.NoncompetitiveInhibitionA = module.exports.EnzymeKinetics.NoncompetitiveInhibitionA = {
    pythonModuleName : "EnzymeKinetics",
    pythonClassName : "NoncompetitiveInhibitionA",
    extendedVersionString : "Default",
    displayName : "Noncompetitive Inhibition A",
    displayHTML : "z = ax / ((b + x)(1 + y/c))",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.EnzymeKinetics.NoncompetitiveInhibitionA_WithOffset = module.exports.EnzymeKinetics.NoncompetitiveInhibitionA_WithOffset = {
    pythonModuleName : "EnzymeKinetics",
    pythonClassName : "NoncompetitiveInhibitionA",
    extendedVersionString : "Offset",
    displayName : "Noncompetitive Inhibition A With Offset",
    displayHTML : "z = ax / ((b + x)(1 + y/c)) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.EnzymeKinetics.NoncompetitiveInhibitionB = module.exports.EnzymeKinetics.NoncompetitiveInhibitionB = {
    pythonModuleName : "EnzymeKinetics",
    pythonClassName : "NoncompetitiveInhibitionB",
    extendedVersionString : "Default",
    displayName : "Noncompetitive Inhibition B",
    displayHTML : "z = ay / ((b + y)(1 + x/c))",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.EnzymeKinetics.NoncompetitiveInhibitionB_WithOffset = module.exports.EnzymeKinetics.NoncompetitiveInhibitionB_WithOffset = {
    pythonModuleName : "EnzymeKinetics",
    pythonClassName : "NoncompetitiveInhibitionB",
    extendedVersionString : "Offset",
    displayName : "Noncompetitive Inhibition B With Offset",
    displayHTML : "z = ay / ((b + y)(1 + x/c)) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.EnzymeKinetics.PingPongBiBiA = module.exports.EnzymeKinetics.PingPongBiBiA = {
    pythonModuleName : "EnzymeKinetics",
    pythonClassName : "PingPongBiBiA",
    extendedVersionString : "Default",
    displayName : "Ping Pong Bi Bi A",
    displayHTML : "z = ax / (bx + cy + xy)",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.EnzymeKinetics.PingPongBiBiA_WithOffset = module.exports.EnzymeKinetics.PingPongBiBiA_WithOffset = {
    pythonModuleName : "EnzymeKinetics",
    pythonClassName : "PingPongBiBiA",
    extendedVersionString : "Offset",
    displayName : "Ping Pong Bi Bi A With Offset",
    displayHTML : "z = ax / (bx + cy + xy) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.EnzymeKinetics.PingPongBiBiB = module.exports.EnzymeKinetics.PingPongBiBiB = {
    pythonModuleName : "EnzymeKinetics",
    pythonClassName : "PingPongBiBiB",
    extendedVersionString : "Default",
    displayName : "Ping Pong Bi Bi B",
    displayHTML : "z = ay / (by + cx + xy)",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.EnzymeKinetics.PingPongBiBiB_WithOffset = module.exports.EnzymeKinetics.PingPongBiBiB_WithOffset = {
    pythonModuleName : "EnzymeKinetics",
    pythonClassName : "PingPongBiBiB",
    extendedVersionString : "Offset",
    displayName : "Ping Pong Bi Bi B With Offset",
    displayHTML : "z = ay / (by + cx + xy) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.EnzymeKinetics.PingPongBiBiC = module.exports.EnzymeKinetics.PingPongBiBiC = {
    pythonModuleName : "EnzymeKinetics",
    pythonClassName : "PingPongBiBiC",
    extendedVersionString : "Default",
    displayName : "Ping Pong Bi Bi C",
    displayHTML : "z = axy / (by + cx + xy)",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.EnzymeKinetics.PingPongBiBiC_WithOffset = module.exports.EnzymeKinetics.PingPongBiBiC_WithOffset = {
    pythonModuleName : "EnzymeKinetics",
    pythonClassName : "PingPongBiBiC",
    extendedVersionString : "Offset",
    displayName : "Ping Pong Bi Bi C With Offset",
    displayHTML : "z = axy / (by + cx + xy) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.EnzymeKinetics.UncompetitiveInhibitionA = module.exports.EnzymeKinetics.UncompetitiveInhibitionA = {
    pythonModuleName : "EnzymeKinetics",
    pythonClassName : "UncompetitiveInhibitionA",
    extendedVersionString : "Default",
    displayName : "Uncompetitive Inhibition A",
    displayHTML : "z = ax / (b + x(1 + y/c))",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.EnzymeKinetics.UncompetitiveInhibitionA_WithOffset = module.exports.EnzymeKinetics.UncompetitiveInhibitionA_WithOffset = {
    pythonModuleName : "EnzymeKinetics",
    pythonClassName : "UncompetitiveInhibitionA",
    extendedVersionString : "Offset",
    displayName : "Uncompetitive Inhibition A With Offset",
    displayHTML : "z = ax / (b + x(1 + y/c)) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.EnzymeKinetics.UncompetitiveInhibitionB = module.exports.EnzymeKinetics.UncompetitiveInhibitionB = {
    pythonModuleName : "EnzymeKinetics",
    pythonClassName : "UncompetitiveInhibitionB",
    extendedVersionString : "Default",
    displayName : "Uncompetitive Inhibition B",
    displayHTML : "z = ay / (b + y(1 + x/c))",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.EnzymeKinetics.UncompetitiveInhibitionB_WithOffset = module.exports.EnzymeKinetics.UncompetitiveInhibitionB_WithOffset = {
    pythonModuleName : "EnzymeKinetics",
    pythonClassName : "UncompetitiveInhibitionB",
    extendedVersionString : "Offset",
    displayName : "Uncompetitive Inhibition B With Offset",
    displayHTML : "z = ay / (b + y(1 + x/c)) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};


exports.Exponential = module.exports.Exponential = {};

exports.Exponential.FullCubicExponential = module.exports.Exponential.FullCubicExponential = {
    pythonModuleName : "Exponential",
    pythonClassName : "FullCubicExponential",
    extendedVersionString : "Default",
    displayName : "Full Cubic Exponential",
    displayHTML : "z = a + b*exp(x) + c*exp(y) + d*exp(x)<sup>2</sup> + f*exp(y)<sup>2</sup> + g*exp(x)<sup>3</sup> + h*exp(y)<sup>3</sup> + i*exp(x)*exp(y) + j*exp(x)<sup>2</sup>*exp(y) + k*exp(x)*exp(y)<sup>2</sup>",
    dimensionality : 3,
    numberOfParameters : 10
};

exports.Exponential.FullCubicExponentialTransform = module.exports.Exponential.FullCubicExponentialTransform = {
    pythonModuleName : "Exponential",
    pythonClassName : "FullCubicExponentialTransform",
    extendedVersionString : "Default",
    displayName : "Transform Full Cubic Exponential",
    displayHTML : "z = a + b*exp(m*x+n) + c*exp(o*y+p) + d*exp(m*x+n)<sup>2</sup> + f*exp(o*y+p)<sup>2</sup> + g*exp(m*x+n)<sup>3</sup> + h*exp(o*y+p)<sup>3</sup> + i*exp(m*x+n)*exp(o*y+p) + j*exp(m*x+n)<sup>2</sup>*exp(o*y+p) + k*exp(m*x+n)*exp(o*y+p)<sup>2</sup>",
    dimensionality : 3,
    numberOfParameters : 14
};

exports.Exponential.FullQuadraticExponential = module.exports.Exponential.FullQuadraticExponential = {
    pythonModuleName : "Exponential",
    pythonClassName : "FullQuadraticExponential",
    extendedVersionString : "Default",
    displayName : "Full Quadratic Exponential",
    displayHTML : "z = a + b*exp(x) + c*exp(y) + d*exp(x)<sup>2</sup> + f*exp(y)<sup>2</sup> + g*exp(x)*exp(y)",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Exponential.FullQuadraticExponentialTransform = module.exports.Exponential.FullQuadraticExponentialTransform = {
    pythonModuleName : "Exponential",
    pythonClassName : "FullQuadraticExponentialTransform",
    extendedVersionString : "Default",
    displayName : "Transform Full Quadratic Exponential",
    displayHTML : "z = a + b*exp(h*x+i) + c*exp(j*y+k) + d*exp(h*x+i)<sup>2</sup> + e*exp(j*y+k)<sup>2</sup> + f*exp(h*x+i)*exp(j*y+k)",
    dimensionality : 3,
    numberOfParameters : 10
};

exports.Exponential.LinearExponential = module.exports.Exponential.LinearExponential = {
    pythonModuleName : "Exponential",
    pythonClassName : "LinearExponential",
    extendedVersionString : "Default",
    displayName : "Linear Exponential",
    displayHTML : "z = a + b*exp(x) + c*exp(y)",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Exponential.LinearExponentialTransform = module.exports.Exponential.LinearExponentialTransform = {
    pythonModuleName : "Exponential",
    pythonClassName : "LinearExponentialTransform",
    extendedVersionString : "Default",
    displayName : "Transform Linear Exponential",
    displayHTML : "z = a + b*exp(d*x+f) + c*exp(g*y+h)",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Exponential.SimplifiedCubicExponential = module.exports.Exponential.SimplifiedCubicExponential = {
    pythonModuleName : "Exponential",
    pythonClassName : "SimplifiedCubicExponential",
    extendedVersionString : "Default",
    displayName : "Simplified Cubic Exponential",
    displayHTML : "z = a + b*exp(x) + c*exp(y) + d*exp(x)<sup>2</sup> + e*exp(y)<sup>2</sup> + f*exp(x)<sup>3</sup> + g*exp(y)<sup>3</sup>",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Exponential.SimplifiedCubicExponentialTransform = module.exports.Exponential.SimplifiedCubicExponentialTransform = {
    pythonModuleName : "Exponential",
    pythonClassName : "SimplifiedCubicExponentialTransform",
    extendedVersionString : "Default",
    displayName : "Transform Simplified Cubic Exponential",
    displayHTML : "z = a + b*exp(i*x+j) + c*exp(k*y+m) + d*exp(i*x+j)<sup>2</sup> + f*exp(k*y+m)<sup>2</sup> + g*exp(i*x+j)<sup>3</sup> + h*exp(k*y+m)<sup>3</sup>",
    dimensionality : 3,
    numberOfParameters : 11
};

exports.Exponential.SimplifiedQuadraticExponential = module.exports.Exponential.SimplifiedQuadraticExponential = {
    pythonModuleName : "Exponential",
    pythonClassName : "SimplifiedQuadraticExponential",
    extendedVersionString : "Default",
    displayName : "Simplified Quadratic Exponential",
    displayHTML : "z = a + b*exp(x) + c*exp(y) + d*exp(x)<sup>2</sup> + f*exp(y)<sup>2</sup>",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.Exponential.SimplifiedQuadraticExponentialTransform = module.exports.Exponential.SimplifiedQuadraticExponentialTransform = {
    pythonModuleName : "Exponential",
    pythonClassName : "SimplifiedQuadraticExponentialTransform",
    extendedVersionString : "Default",
    displayName : "Transform Simplified Quadratic Exponential",
    displayHTML : "z = a + b*exp(g*x+h) + c*exp(i*y+j) + d*exp(g*x+h)<sup>2</sup> + f*exp(i*y+j)<sup>2</sup>",
    dimensionality : 3,
    numberOfParameters : 9
};


exports.Logarithmic = module.exports.Logarithmic = {};

exports.Logarithmic.FullCubicLogarithmic = module.exports.Logarithmic.FullCubicLogarithmic = {
    pythonModuleName : "Logarithmic",
    pythonClassName : "FullCubicLogarithmic",
    extendedVersionString : "Default",
    displayName : "Full Cubic Logarithmic",
    displayHTML : "z = a + b*ln(x) + c*ln(y) + d*ln(x)<sup>2</sup> + f*ln(y)<sup>2</sup> + g*ln(x)<sup>3</sup> + h*ln(y)<sup>3</sup> + i*ln(x)*ln(y) + j*ln(x)<sup>2</sup>*ln(y) + k*ln(x)*ln(y)<sup>2</sup>",
    dimensionality : 3,
    numberOfParameters : 10
};

exports.Logarithmic.FullCubicLogarithmicTransform = module.exports.Logarithmic.FullCubicLogarithmicTransform = {
    pythonModuleName : "Logarithmic",
    pythonClassName : "FullCubicLogarithmicTransform",
    extendedVersionString : "Default",
    displayName : "Transform Full Cubic Logarithmic",
    displayHTML : "z = a + b*ln(m*x+n) + c*ln(o*y+p) + d*ln(m*x+n)<sup>2</sup> + f*ln(o*y+p)<sup>2</sup> + g*ln(m*x+n)<sup>3</sup> + h*ln(o*y+p)<sup>3</sup> + i*ln(m*x+n)*ln(o*y+p) + j*ln(m*x+n)<sup>2</sup>*ln(o*y+p) + k*ln(m*x+n)*ln(o*y+p)<sup>2</sup>",
    dimensionality : 3,
    numberOfParameters : 14
};

exports.Logarithmic.FullQuadraticLogarithmic = module.exports.Logarithmic.FullQuadraticLogarithmic = {
    pythonModuleName : "Logarithmic",
    pythonClassName : "FullQuadraticLogarithmic",
    extendedVersionString : "Default",
    displayName : "Full Quadratic Logarithmic",
    displayHTML : "z = a + b*ln(x) + c*ln(y) + d*ln(x)<sup>2</sup> + f*ln(y)<sup>2</sup> + g*ln(x)*ln(y)",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Logarithmic.FullQuadraticLogarithmicTransform = module.exports.Logarithmic.FullQuadraticLogarithmicTransform = {
    pythonModuleName : "Logarithmic",
    pythonClassName : "FullQuadraticLogarithmicTransform",
    extendedVersionString : "Default",
    displayName : "Transform Full Quadratic Logarithmic",
    displayHTML : "z = a + b*ln(h*x+i) + c*ln(j*y+k) + d*ln(h*x+i)<sup>2</sup> + f*ln(j*y+k)<sup>2</sup> + g*ln(h*x+i)*ln(j*y+k)",
    dimensionality : 3,
    numberOfParameters : 10
};

exports.Logarithmic.LinearLogarithmic = module.exports.Logarithmic.LinearLogarithmic = {
    pythonModuleName : "Logarithmic",
    pythonClassName : "LinearLogarithmic",
    extendedVersionString : "Default",
    displayName : "Linear Logarithmic",
    displayHTML : "z = a + b*ln(x) + c*ln(y)",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Logarithmic.LinearLogarithmicTransform = module.exports.Logarithmic.LinearLogarithmicTransform = {
    pythonModuleName : "Logarithmic",
    pythonClassName : "LinearLogarithmicTransform",
    extendedVersionString : "Default",
    displayName : "Transform Linear Logarithmic",
    displayHTML : "z = a + b*ln(d*x+f) + c*ln(g*y+h)",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Logarithmic.SimplifiedCubicLogarithmic = module.exports.Logarithmic.SimplifiedCubicLogarithmic = {
    pythonModuleName : "Logarithmic",
    pythonClassName : "SimplifiedCubicLogarithmic",
    extendedVersionString : "Default",
    displayName : "Simplified Cubic Logarithmic",
    displayHTML : "z = a + b*ln(x) + c*ln(y) + d*ln(x)<sup>2</sup> + f*ln(y)<sup>2</sup> + g*ln(x)<sup>3</sup> + h*ln(y)<sup>3</sup>",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Logarithmic.SimplifiedCubicLogarithmicTransform = module.exports.Logarithmic.SimplifiedCubicLogarithmicTransform = {
    pythonModuleName : "Logarithmic",
    pythonClassName : "SimplifiedCubicLogarithmicTransform",
    extendedVersionString : "Default",
    displayName : "Transform Simplified Cubic Logarithmic",
    displayHTML : "z = a + b*ln(i*x+j) + c*ln(k*y+m) + d*ln(i*x+j)<sup>2</sup> + f*ln(k*y+m)<sup>2</sup> + g*ln(i*x+j)<sup>3</sup> + h*ln(k*y+m)<sup>3</sup>",
    dimensionality : 3,
    numberOfParameters : 11
};

exports.Logarithmic.SimplifiedQuadraticLogarithmic = module.exports.Logarithmic.SimplifiedQuadraticLogarithmic = {
    pythonModuleName : "Logarithmic",
    pythonClassName : "SimplifiedQuadraticLogarithmic",
    extendedVersionString : "Default",
    displayName : "Simplified Quadratic Logarithmic",
    displayHTML : "z = a + b*ln(x) + c*ln(y) + d*ln(x)<sup>2</sup> + f*ln(y)<sup>2</sup>",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.Logarithmic.SimplifiedQuadraticLogarithmicTransform = module.exports.Logarithmic.SimplifiedQuadraticLogarithmicTransform = {
    pythonModuleName : "Logarithmic",
    pythonClassName : "SimplifiedQuadraticLogarithmicTransform",
    extendedVersionString : "Default",
    displayName : "Transform Simplified Quadratic Logarithmic",
    displayHTML : "z = a + b*ln(g*x+h) + c*ln(i*y+j) + d*ln(g*x+h)<sup>2</sup> + f*ln(i*y+j)<sup>2</sup>",
    dimensionality : 3,
    numberOfParameters : 9
};


exports.Miscellaneous = module.exports.Miscellaneous = {};

exports.Miscellaneous.GaryCler_Transform = module.exports.Miscellaneous.GaryCler_Transform = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "GaryCler_Transform",
    extendedVersionString : "Default",
    displayName : "Gary Cler's Custom Equation Transform",
    displayHTML : "z = a * (dx + f)<sup>b</sup> * (gy + h)<sup>c</sup>",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Miscellaneous.GaryCler_Transform_WithOffset = module.exports.Miscellaneous.GaryCler_Transform_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "GaryCler_Transform",
    extendedVersionString : "Offset",
    displayName : "Gary Cler's Custom Equation Transform With Offset",
    displayHTML : "z = a * (dx + f)<sup>b</sup> * (gy + h)<sup>c</sup> + Offset",
    dimensionality : 3,
    numberOfParameters : 8
};

exports.Miscellaneous.GaussianCurvatureOfParaboloid = module.exports.Miscellaneous.GaussianCurvatureOfParaboloid = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "GaussianCurvatureOfParaboloid",
    extendedVersionString : "Default",
    displayName : "Gaussian Curvature Of Paraboloid",
    displayHTML : "z = 4a<sup>2</sup> / (1 + 4a<sup>2</sup> * (x<sup>2</sup> + y<sup>2</sup>))<sup>2</sup>",
    dimensionality : 3,
    numberOfParameters : 1
};

exports.Miscellaneous.GaussianCurvatureOfParaboloid_WithOffset = module.exports.Miscellaneous.GaussianCurvatureOfParaboloid_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "GaussianCurvatureOfParaboloid",
    extendedVersionString : "Offset",
    displayName : "Gaussian Curvature Of Paraboloid With Offset",
    displayHTML : "z = 4a<sup>2</sup> / (1 + 4a<sup>2</sup> * (x<sup>2</sup> + y<sup>2</sup>))<sup>2</sup> + Offset",
    dimensionality : 3,
    numberOfParameters : 2
};

exports.Miscellaneous.GaussianCurvatureOfParaboloid_scaled = module.exports.Miscellaneous.GaussianCurvatureOfParaboloid_scaled = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "GaussianCurvatureOfParaboloid_scaled",
    extendedVersionString : "Default",
    displayName : "Gaussian Curvature Of Paraboloid Scaled",
    displayHTML : "z = Scale * 4a<sup>2</sup> / (1 + 4a<sup>2</sup> * (x<sup>2</sup> + y<sup>2</sup>))<sup>2</sup>",
    dimensionality : 3,
    numberOfParameters : 2
};

exports.Miscellaneous.GaussianCurvatureOfParaboloid_scaled_WithOffset = module.exports.Miscellaneous.GaussianCurvatureOfParaboloid_scaled_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "GaussianCurvatureOfParaboloid_scaled",
    extendedVersionString : "Offset",
    displayName : "Gaussian Curvature Of Paraboloid Scaled With Offset",
    displayHTML : "z = Scale * 4a<sup>2</sup> / (1 + 4a<sup>2</sup> * (x<sup>2</sup> + y<sup>2</sup>))<sup>2</sup> + Offset",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Miscellaneous.GaussianCurvatureOfRichmondsMinimalSurface = module.exports.Miscellaneous.GaussianCurvatureOfRichmondsMinimalSurface = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "GaussianCurvatureOfRichmondsMinimalSurface",
    extendedVersionString : "Default",
    displayName : "Gaussian Curvature Of Richmond's Minimal Surface",
    displayHTML : "z = -1.0 * a * (x<sup>2</sup> + y<sup>2</sup>)<sup>3</sup> / (b + (x<sup>2</sup> + y<sup>2</sup>)<sup>2</sup>)<sup>4</sup>",
    dimensionality : 3,
    numberOfParameters : 2
};

exports.Miscellaneous.GaussianCurvatureOfRichmondsMinimalSurface_WithOffset = module.exports.Miscellaneous.GaussianCurvatureOfRichmondsMinimalSurface_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "GaussianCurvatureOfRichmondsMinimalSurface",
    extendedVersionString : "Offset",
    displayName : "Gaussian Curvature Of Richmond's Minimal Surface With Offset",
    displayHTML : "z = -1.0 * a * (x<sup>2</sup> + y<sup>2</sup>)<sup>3</sup> / (b + (x<sup>2</sup> + y<sup>2</sup>)<sup>2</sup>)<sup>4</sup> + Offset",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Miscellaneous.GaussianCurvatureOfWhitneysUmbrellaA = module.exports.Miscellaneous.GaussianCurvatureOfWhitneysUmbrellaA = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "GaussianCurvatureOfWhitneysUmbrellaA",
    extendedVersionString : "Default",
    displayName : "Gaussian Curvature Of Whitney's Umbrella A",
    displayHTML : "z = -1.0 * a * y<sup>2</sup> / (x<sup>2</sup> + a * (y<sup>2</sup> + y<sup>4</sup>))<sup>2</sup>",
    dimensionality : 3,
    numberOfParameters : 1
};

exports.Miscellaneous.GaussianCurvatureOfWhitneysUmbrellaA_WithOffset = module.exports.Miscellaneous.GaussianCurvatureOfWhitneysUmbrellaA_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "GaussianCurvatureOfWhitneysUmbrellaA",
    extendedVersionString : "Offset",
    displayName : "Gaussian Curvature Of Whitney's Umbrella A With Offset",
    displayHTML : "z = -1.0 * a * y<sup>2</sup> / (x<sup>2</sup> + a * (y<sup>2</sup> + y<sup>4</sup>))<sup>2</sup> + Offset",
    dimensionality : 3,
    numberOfParameters : 2
};

exports.Miscellaneous.GaussianCurvatureOfWhitneysUmbrellaB = module.exports.Miscellaneous.GaussianCurvatureOfWhitneysUmbrellaB = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "GaussianCurvatureOfWhitneysUmbrellaB",
    extendedVersionString : "Default",
    displayName : "Gaussian Curvature Of Whitney's Umbrella B",
    displayHTML : "z = -1.0 * a * x<sup>2</sup> / (y<sup>2</sup> + a * (x<sup>2</sup> + x<sup>4</sup>))<sup>2</sup>",
    dimensionality : 3,
    numberOfParameters : 1
};

exports.Miscellaneous.GaussianCurvatureOfWhitneysUmbrellaB_WithOffset = module.exports.Miscellaneous.GaussianCurvatureOfWhitneysUmbrellaB_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "GaussianCurvatureOfWhitneysUmbrellaB",
    extendedVersionString : "Offset",
    displayName : "Gaussian Curvature Of Whitney's Umbrella B With Offset",
    displayHTML : "z = -1.0 * a * x<sup>2</sup> / (y<sup>2</sup> + a * (x<sup>2</sup> + x<sup>4</sup>))<sup>2</sup> + Offset",
    dimensionality : 3,
    numberOfParameters : 2
};

exports.Miscellaneous.LipingZheng = module.exports.Miscellaneous.LipingZheng = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "LipingZheng",
    extendedVersionString : "Default",
    displayName : "Liping Zheng's core loss coefficients",
    displayHTML : "z = ax<sup>2</sup>y + bx<sup>2</sup>y<sup>2</sup> + cx<sup>1.5</sup>y<sup>1.5</sup>",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Miscellaneous.LipingZheng_WithOffset = module.exports.Miscellaneous.LipingZheng_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "LipingZheng",
    extendedVersionString : "Offset",
    displayName : "Liping Zheng's core loss coefficients With Offset",
    displayHTML : "z = ax<sup>2</sup>y + bx<sup>2</sup>y<sup>2</sup> + cx<sup>1.5</sup>y<sup>1.5</sup> + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Miscellaneous.MeanCurvatureOfParaboloid = module.exports.Miscellaneous.MeanCurvatureOfParaboloid = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "MeanCurvatureOfParaboloid",
    extendedVersionString : "Default",
    displayName : "Mean Curvature Of Paraboloid",
    displayHTML : "z = 2 * (a + 2a<sup>3</sup> * (x<sup>2</sup> + y<sup>2</sup>)) / (1 + 4a<sup>2</sup> * (x<sup>2</sup> + y<sup>2</sup>))<sup>1.5</sup>",
    dimensionality : 3,
    numberOfParameters : 1
};

exports.Miscellaneous.MeanCurvatureOfParaboloid_WithOffset = module.exports.Miscellaneous.MeanCurvatureOfParaboloid_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "MeanCurvatureOfParaboloid",
    extendedVersionString : "Offset",
    displayName : "Mean Curvature Of Paraboloid With Offset",
    displayHTML : "z = 2 * (a + 2a<sup>3</sup> * (x<sup>2</sup> + y<sup>2</sup>)) / (1 + 4a<sup>2</sup> * (x<sup>2</sup> + y<sup>2</sup>))<sup>1.5</sup> + Offset",
    dimensionality : 3,
    numberOfParameters : 2
};

exports.Miscellaneous.MeanCurvatureOfParaboloid_scaled = module.exports.Miscellaneous.MeanCurvatureOfParaboloid_scaled = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "MeanCurvatureOfParaboloid_scaled",
    extendedVersionString : "Default",
    displayName : "Mean Curvature Of Paraboloid Scaled",
    displayHTML : "z = Scale * (a + 2a<sup>3</sup> * (x<sup>2</sup> + y<sup>2</sup>)) / (1 + 4a<sup>2</sup> * (x<sup>2</sup> + y<sup>2</sup>))<sup>1.5</sup>",
    dimensionality : 3,
    numberOfParameters : 2
};

exports.Miscellaneous.MeanCurvatureOfParaboloid_scaled_WithOffset = module.exports.Miscellaneous.MeanCurvatureOfParaboloid_scaled_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "MeanCurvatureOfParaboloid_scaled",
    extendedVersionString : "Offset",
    displayName : "Mean Curvature Of Paraboloid Scaled With Offset",
    displayHTML : "z = Scale * (a + 2a<sup>3</sup> * (x<sup>2</sup> + y<sup>2</sup>)) / (1 + 4a<sup>2</sup> * (x<sup>2</sup> + y<sup>2</sup>))<sup>1.5</sup> + Offset",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Miscellaneous.MeanCurvatureOfWhitneysUmbrellaA = module.exports.Miscellaneous.MeanCurvatureOfWhitneysUmbrellaA = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "MeanCurvatureOfWhitneysUmbrellaA",
    extendedVersionString : "Default",
    displayName : "Mean Curvature Of Whitney's Umbrella A",
    displayHTML : "z = -1.0 * x * (a + b * y<sup>2</sup>) / (x<sup>2</sup> + a * (y<sup>2</sup> + y<sup>4</sup>))<sup>1.5</sup>",
    dimensionality : 3,
    numberOfParameters : 2
};

exports.Miscellaneous.MeanCurvatureOfWhitneysUmbrellaA_WithOffset = module.exports.Miscellaneous.MeanCurvatureOfWhitneysUmbrellaA_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "MeanCurvatureOfWhitneysUmbrellaA",
    extendedVersionString : "Offset",
    displayName : "Mean Curvature Of Whitney's Umbrella A With Offset",
    displayHTML : "z = -1.0 * x * (a + b * y<sup>2</sup>) / (x<sup>2</sup> + a * (y<sup>2</sup> + y<sup>4</sup>))<sup>1.5</sup> + Offset",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Miscellaneous.MeanCurvatureOfWhitneysUmbrellaB = module.exports.Miscellaneous.MeanCurvatureOfWhitneysUmbrellaB = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "MeanCurvatureOfWhitneysUmbrellaB",
    extendedVersionString : "Default",
    displayName : "Mean Curvature Of Whitney's Umbrella B",
    displayHTML : "z = -1.0 * y * (a + b * x<sup>2</sup>) / (y<sup>2</sup> + a * (x<sup>2</sup> + x<sup>4</sup>))<sup>1.5</sup>",
    dimensionality : 3,
    numberOfParameters : 2
};

exports.Miscellaneous.MeanCurvatureOfWhitneysUmbrellaB_WithOffset = module.exports.Miscellaneous.MeanCurvatureOfWhitneysUmbrellaB_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "MeanCurvatureOfWhitneysUmbrellaB",
    extendedVersionString : "Offset",
    displayName : "Mean Curvature Of Whitney's Umbrella B With Offset",
    displayHTML : "z = -1.0 * y * (a + b * x<sup>2</sup>) / (y<sup>2</sup> + a * (x<sup>2</sup> + x<sup>4</sup>))<sup>1.5</sup> + Offset",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Miscellaneous.MennSurfaceA = module.exports.Miscellaneous.MennSurfaceA = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "MennSurfaceA",
    extendedVersionString : "Default",
    displayName : "Menn's Surface A",
    displayHTML : "z = ax<sup>4</sup> + bx<sup>2</sup>y - cy<sup>2</sup>",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Miscellaneous.MennSurfaceA_WithOffset = module.exports.Miscellaneous.MennSurfaceA_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "MennSurfaceA",
    extendedVersionString : "Offset",
    displayName : "Menn's Surface A With Offset",
    displayHTML : "z = ax<sup>4</sup> + bx<sup>2</sup>y - cy<sup>2</sup> + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Miscellaneous.MennSurfaceB = module.exports.Miscellaneous.MennSurfaceB = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "MennSurfaceB",
    extendedVersionString : "Default",
    displayName : "Menn's Surface B",
    displayHTML : "z = ay<sup>4</sup> + by<sup>2</sup>x - cx<sup>2</sup>",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Miscellaneous.MennSurfaceB_WithOffset = module.exports.Miscellaneous.MennSurfaceB_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "MennSurfaceB",
    extendedVersionString : "Offset",
    displayName : "Menn's Surface B With Offset",
    displayHTML : "z = ay<sup>4</sup> + by<sup>2</sup>x - cx<sup>2</sup> + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Miscellaneous.MonkeySaddleA = module.exports.Miscellaneous.MonkeySaddleA = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "MonkeySaddleA",
    extendedVersionString : "Default",
    displayName : "Monkey Saddle A",
    displayHTML : "z = ax<sup>3</sup> - bxy<sup>2</sup>",
    dimensionality : 3,
    numberOfParameters : 2
};

exports.Miscellaneous.MonkeySaddleA_WithOffset = module.exports.Miscellaneous.MonkeySaddleA_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "MonkeySaddleA",
    extendedVersionString : "Offset",
    displayName : "Monkey Saddle A With Offset",
    displayHTML : "z = ax<sup>3</sup> - bxy<sup>2</sup> + Offset",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Miscellaneous.MonkeySaddleB = module.exports.Miscellaneous.MonkeySaddleB = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "MonkeySaddleB",
    extendedVersionString : "Default",
    displayName : "Monkey Saddle B",
    displayHTML : "z = ay<sup>3</sup> - byx<sup>2</sup>",
    dimensionality : 3,
    numberOfParameters : 2
};

exports.Miscellaneous.MonkeySaddleB_WithOffset = module.exports.Miscellaneous.MonkeySaddleB_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "MonkeySaddleB",
    extendedVersionString : "Offset",
    displayName : "Monkey Saddle B With Offset",
    displayHTML : "z = ay<sup>3</sup> - byx<sup>2</sup> + Offset",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Miscellaneous.MonkeySaddle_TransformA = module.exports.Miscellaneous.MonkeySaddle_TransformA = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "MonkeySaddle_TransformA",
    extendedVersionString : "Default",
    displayName : "Monkey Saddle Transform A",
    displayHTML : "z = a(cx + d)<sup>3</sup> - b(cx + d)(fy + g)<sup>2</sup>",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Miscellaneous.MonkeySaddle_TransformA_WithOffset = module.exports.Miscellaneous.MonkeySaddle_TransformA_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "MonkeySaddle_TransformA",
    extendedVersionString : "Offset",
    displayName : "Monkey Saddle Transform A With Offset",
    displayHTML : "z = a(cx + d)<sup>3</sup> - b(cx + d)(fy + g)<sup>2</sup> + Offset",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Miscellaneous.MonkeySaddle_TransformB = module.exports.Miscellaneous.MonkeySaddle_TransformB = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "MonkeySaddle_TransformB",
    extendedVersionString : "Default",
    displayName : "Monkey Saddle Transform B",
    displayHTML : "z = a(cy + d)<sup>3</sup> - b(cy + d)(fx + g)<sup>2</sup>",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Miscellaneous.MonkeySaddle_TransformB_WithOffset = module.exports.Miscellaneous.MonkeySaddle_TransformB_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "MonkeySaddle_TransformB",
    extendedVersionString : "Offset",
    displayName : "Monkey Saddle Transform B With Offset",
    displayHTML : "z = a(cy + d)<sup>3</sup> - b(cy + d)(fx + g)<sup>2</sup> + Offset",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Miscellaneous.Paraboloid = module.exports.Miscellaneous.Paraboloid = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "Paraboloid",
    extendedVersionString : "Default",
    displayName : "Paraboloid",
    displayHTML : "z = a * (x<sup>2</sup> + y<sup>2</sup>)",
    dimensionality : 3,
    numberOfParameters : 1
};

exports.Miscellaneous.Paraboloid_WithOffset = module.exports.Miscellaneous.Paraboloid_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "Paraboloid",
    extendedVersionString : "Offset",
    displayName : "Paraboloid With Offset",
    displayHTML : "z = a * (x<sup>2</sup> + y<sup>2</sup>) + Offset",
    dimensionality : 3,
    numberOfParameters : 2
};

exports.Miscellaneous.Paraboloid_Transform = module.exports.Miscellaneous.Paraboloid_Transform = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "Paraboloid_Transform",
    extendedVersionString : "Default",
    displayName : "Paraboloid Transform",
    displayHTML : "z = a * ((bx + c)<sup>2</sup> + (dy + f)<sup>2</sup>)",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.Miscellaneous.Paraboloid_Transform_WithOffset = module.exports.Miscellaneous.Paraboloid_Transform_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "Paraboloid_Transform",
    extendedVersionString : "Offset",
    displayName : "Paraboloid Transform With Offset",
    displayHTML : "z = a * ((bx + c)<sup>2</sup> + (dy + f)<sup>2</sup>) + Offset",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Miscellaneous.PaschensBreakdownFieldStrengthLaw = module.exports.Miscellaneous.PaschensBreakdownFieldStrengthLaw = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "PaschensBreakdownFieldStrengthLaw",
    extendedVersionString : "Default",
    displayName : "Paschen's Law for Breakdown Field Strength",
    displayHTML : "Ebreakdown = pressure * (a / (ln(pressure * distance) + b))",
    dimensionality : 3,
    numberOfParameters : 2
};

exports.Miscellaneous.PaschensBreakdownFieldStrengthLaw_WithOffset = module.exports.Miscellaneous.PaschensBreakdownFieldStrengthLaw_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "PaschensBreakdownFieldStrengthLaw",
    extendedVersionString : "Offset",
    displayName : "Paschen's Law for Breakdown Field Strength With Offset",
    displayHTML : "Ebreakdown = pressure * (a / (ln(pressure * distance) + b)) + Offset",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Miscellaneous.PaschensBreakdownVoltageLaw = module.exports.Miscellaneous.PaschensBreakdownVoltageLaw = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "PaschensBreakdownVoltageLaw",
    extendedVersionString : "Default",
    displayName : "Paschen's Law for Breakdown Voltage",
    displayHTML : "Vbreakdown = a(pressure * distance) / (ln(pressure * distance) + b)",
    dimensionality : 3,
    numberOfParameters : 2
};

exports.Miscellaneous.PaschensBreakdownVoltageLaw_WithOffset = module.exports.Miscellaneous.PaschensBreakdownVoltageLaw_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "PaschensBreakdownVoltageLaw",
    extendedVersionString : "Offset",
    displayName : "Paschen's Law for Breakdown Voltage With Offset",
    displayHTML : "Vbreakdown = a(pressure * distance) / (ln(pressure * distance) + b) + Offset",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Miscellaneous.RexKelfkens = module.exports.Miscellaneous.RexKelfkens = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "RexKelfkens",
    extendedVersionString : "Default",
    displayName : "Rex Kelfkens' Custom Equation",
    displayHTML : "z =  exp(A+B*ln(x)+C*ln(y))",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Miscellaneous.RexKelfkens_WithOffset = module.exports.Miscellaneous.RexKelfkens_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "RexKelfkens",
    extendedVersionString : "Offset",
    displayName : "Rex Kelfkens' Custom Equation With Offset",
    displayHTML : "z =  exp(A+B*ln(x)+C*ln(y)) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Miscellaneous.RexKelfkensTransform = module.exports.Miscellaneous.RexKelfkensTransform = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "RexKelfkensTransform",
    extendedVersionString : "Default",
    displayName : "Rex Kelfkens' Custom Equation Transform",
    displayHTML : "z =  exp(A+B*ln(x * xscale + xoffset)+C*ln(y * yscale + yoffset))",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Miscellaneous.RexKelfkensTransform_WithOffset = module.exports.Miscellaneous.RexKelfkensTransform_WithOffset = {
    pythonModuleName : "Miscellaneous",
    pythonClassName : "RexKelfkensTransform",
    extendedVersionString : "Offset",
    displayName : "Rex Kelfkens' Custom Equation Transform With Offset",
    displayHTML : "z =  exp(A+B*ln(x * xscale + xoffset)+C*ln(y * yscale + yoffset)) + Offset",
    dimensionality : 3,
    numberOfParameters : 8
};


exports.NIST = module.exports.NIST = {};

exports.NIST.NIST_Nelson = module.exports.NIST.NIST_Nelson = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_Nelson",
    extendedVersionString : "Default",
    displayName : "NIST Nelson",
    displayHTML : "log(y) = b1 - b2 * X1 * exp(-b3*X2)",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.NIST.NIST_NelsonAutolog = module.exports.NIST.NIST_NelsonAutolog = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_NelsonAutolog",
    extendedVersionString : "Default",
    displayName : "NIST Nelson Autolog",
    displayHTML : "z = exp(b1 - b2 * x * exp(-b3*y))",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.NIST.NIST_NelsonAutolog_WithOffset = module.exports.NIST.NIST_NelsonAutolog_WithOffset = {
    pythonModuleName : "NIST",
    pythonClassName : "NIST_NelsonAutolog",
    extendedVersionString : "Offset",
    displayName : "NIST Nelson Autolog With Offset",
    displayHTML : "z = exp(b1 - b2 * x * exp(-b3*y)) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};


exports.Optical = module.exports.Optical = {};

exports.Optical.SagForAsphere0 = module.exports.Optical.SagForAsphere0 = {
    pythonModuleName : "Optical",
    pythonClassName : "SagForAsphere0",
    extendedVersionString : "Default",
    displayName : "Sag For Asphere 0",
    displayHTML : "s<sup>2</sup> = x<sup>2</sup> + y<sup>2</sup><br>z = (s<sup>2</sup>/r) / (1+(1-(k+1)(s/r)<sup>2</sup>)<sup>1/2</sup>)",
    dimensionality : 3,
    numberOfParameters : 2
};

exports.Optical.SagForAsphere0_WithOffset = module.exports.Optical.SagForAsphere0_WithOffset = {
    pythonModuleName : "Optical",
    pythonClassName : "SagForAsphere0",
    extendedVersionString : "Offset",
    displayName : "Sag For Asphere 0 With Offset",
    displayHTML : "s<sup>2</sup> = x<sup>2</sup> + y<sup>2</sup><br>z = (s<sup>2</sup>/r) / (1+(1-(k+1)(s/r)<sup>2</sup>)<sup>1/2</sup>) + Offset",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Optical.SagForAsphere0_Borisovsky = module.exports.Optical.SagForAsphere0_Borisovsky = {
    pythonModuleName : "Optical",
    pythonClassName : "SagForAsphere0_Borisovsky",
    extendedVersionString : "Default",
    displayName : "Sag For Asphere 0 Borisovsky",
    displayHTML : "s<sup>2</sup> = (x - a)<sup>2</sup> + (y - b)<sup>2</sup><br>z = (s<sup>2</sup>/r) / (1+(1-(k+1)(s/r)<sup>2</sup>)<sup>1/2</sup>) + offset",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.Optical.SagForAsphere0_Borisovsky_WithOffset = module.exports.Optical.SagForAsphere0_Borisovsky_WithOffset = {
    pythonModuleName : "Optical",
    pythonClassName : "SagForAsphere0_Borisovsky",
    extendedVersionString : "Offset",
    displayName : "Sag For Asphere 0 Borisovsky With Offset",
    displayHTML : "s<sup>2</sup> = (x - a)<sup>2</sup> + (y - b)<sup>2</sup><br>z = (s<sup>2</sup>/r) / (1+(1-(k+1)(s/r)<sup>2</sup>)<sup>1/2</sup>) + offset + Offset",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Optical.SagForAsphere0_Transform = module.exports.Optical.SagForAsphere0_Transform = {
    pythonModuleName : "Optical",
    pythonClassName : "SagForAsphere0_Transform",
    extendedVersionString : "Default",
    displayName : "Transform Sag For Asphere 0",
    displayHTML : "s<sup>2</sup> = (ax+b)<sup>2</sup> + (cy+d)<sup>2</sup><br>z = (s<sup>2</sup>/r) / (1+(1-(k+1)(s/r)<sup>2</sup>)<sup>1/2</sup>)",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Optical.SagForAsphere0_Transform_WithOffset = module.exports.Optical.SagForAsphere0_Transform_WithOffset = {
    pythonModuleName : "Optical",
    pythonClassName : "SagForAsphere0_Transform",
    extendedVersionString : "Offset",
    displayName : "Transform Sag For Asphere 0 With Offset",
    displayHTML : "s<sup>2</sup> = (ax+b)<sup>2</sup> + (cy+d)<sup>2</sup><br>z = (s<sup>2</sup>/r) / (1+(1-(k+1)(s/r)<sup>2</sup>)<sup>1/2</sup>) + Offset",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Optical.SagForAsphere0_scaled = module.exports.Optical.SagForAsphere0_scaled = {
    pythonModuleName : "Optical",
    pythonClassName : "SagForAsphere0_scaled",
    extendedVersionString : "Default",
    displayName : "Sag For Asphere 0 Scaled",
    displayHTML : "s<sup>2</sup> = x<sup>2</sup> + y<sup>2</sup><br>z = Scale * (s<sup>2</sup>/r) / (1+(1-(k+1)(s/r)<sup>2</sup>)<sup>1/2</sup>)",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Optical.SagForAsphere0_scaled_WithOffset = module.exports.Optical.SagForAsphere0_scaled_WithOffset = {
    pythonModuleName : "Optical",
    pythonClassName : "SagForAsphere0_scaled",
    extendedVersionString : "Offset",
    displayName : "Sag For Asphere 0 Scaled With Offset",
    displayHTML : "s<sup>2</sup> = x<sup>2</sup> + y<sup>2</sup><br>z = Scale * (s<sup>2</sup>/r) / (1+(1-(k+1)(s/r)<sup>2</sup>)<sup>1/2</sup>) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Optical.SagForAsphere1 = module.exports.Optical.SagForAsphere1 = {
    pythonModuleName : "Optical",
    pythonClassName : "SagForAsphere1",
    extendedVersionString : "Default",
    displayName : "Sag For Asphere 1",
    displayHTML : "s<sup>2</sup> = x<sup>2</sup> + y<sup>2</sup><br>z = (s<sup>2</sup>/r) / (1+(1-(k+1)(s/r)<sup>2</sup>)<sup>1/2</sup>) + A4*s<sup>4</sup>",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Optical.SagForAsphere1_WithOffset = module.exports.Optical.SagForAsphere1_WithOffset = {
    pythonModuleName : "Optical",
    pythonClassName : "SagForAsphere1",
    extendedVersionString : "Offset",
    displayName : "Sag For Asphere 1 With Offset",
    displayHTML : "s<sup>2</sup> = x<sup>2</sup> + y<sup>2</sup><br>z = (s<sup>2</sup>/r) / (1+(1-(k+1)(s/r)<sup>2</sup>)<sup>1/2</sup>) + A4*s<sup>4</sup> + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Optical.SagForAsphere1_Transform = module.exports.Optical.SagForAsphere1_Transform = {
    pythonModuleName : "Optical",
    pythonClassName : "SagForAsphere1_Transform",
    extendedVersionString : "Default",
    displayName : "Transform Sag For Asphere 1",
    displayHTML : "s<sup>2</sup> = (ax+b)<sup>2</sup> + (cy+d)<sup>2</sup><br>z = (s<sup>2</sup>/r) / (1+(1-(k+1)(s/r)<sup>2</sup>)<sup>1/2</sup>) + A4*s<sup>4</sup>",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Optical.SagForAsphere1_Transform_WithOffset = module.exports.Optical.SagForAsphere1_Transform_WithOffset = {
    pythonModuleName : "Optical",
    pythonClassName : "SagForAsphere1_Transform",
    extendedVersionString : "Offset",
    displayName : "Transform Sag For Asphere 1 With Offset",
    displayHTML : "s<sup>2</sup> = (ax+b)<sup>2</sup> + (cy+d)<sup>2</sup><br>z = (s<sup>2</sup>/r) / (1+(1-(k+1)(s/r)<sup>2</sup>)<sup>1/2</sup>) + A4*s<sup>4</sup> + Offset",
    dimensionality : 3,
    numberOfParameters : 8
};

exports.Optical.SagForAsphere2 = module.exports.Optical.SagForAsphere2 = {
    pythonModuleName : "Optical",
    pythonClassName : "SagForAsphere2",
    extendedVersionString : "Default",
    displayName : "Sag For Asphere 2",
    displayHTML : "s<sup>2</sup> = x<sup>2</sup> + y<sup>2</sup><br>z = (s<sup>2</sup>/r) / (1+(1-(k+1)(s/r)<sup>2</sup>)<sup>1/2</sup>) + A4*s<sup>4</sup> + A6*s<sup>6</sup>",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Optical.SagForAsphere2_WithOffset = module.exports.Optical.SagForAsphere2_WithOffset = {
    pythonModuleName : "Optical",
    pythonClassName : "SagForAsphere2",
    extendedVersionString : "Offset",
    displayName : "Sag For Asphere 2 With Offset",
    displayHTML : "s<sup>2</sup> = x<sup>2</sup> + y<sup>2</sup><br>z = (s<sup>2</sup>/r) / (1+(1-(k+1)(s/r)<sup>2</sup>)<sup>1/2</sup>) + A4*s<sup>4</sup> + A6*s<sup>6</sup> + Offset",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.Optical.SagForAsphere2_Transform = module.exports.Optical.SagForAsphere2_Transform = {
    pythonModuleName : "Optical",
    pythonClassName : "SagForAsphere2_Transform",
    extendedVersionString : "Default",
    displayName : "Transform Sag For Asphere 2",
    displayHTML : "s<sup>2</sup> = (ax+b)<sup>2</sup> + (cy+d)<sup>2</sup><br>z = (s<sup>2</sup>/r) / (1+(1-(k+1)(s/r)<sup>2</sup>)<sup>1/2</sup>) + A4*s<sup>4</sup> + A6*s<sup>6</sup>",
    dimensionality : 3,
    numberOfParameters : 8
};

exports.Optical.SagForAsphere2_Transform_WithOffset = module.exports.Optical.SagForAsphere2_Transform_WithOffset = {
    pythonModuleName : "Optical",
    pythonClassName : "SagForAsphere2_Transform",
    extendedVersionString : "Offset",
    displayName : "Transform Sag For Asphere 2 With Offset",
    displayHTML : "s<sup>2</sup> = (ax+b)<sup>2</sup> + (cy+d)<sup>2</sup><br>z = (s<sup>2</sup>/r) / (1+(1-(k+1)(s/r)<sup>2</sup>)<sup>1/2</sup>) + A4*s<sup>4</sup> + A6*s<sup>6</sup> + Offset",
    dimensionality : 3,
    numberOfParameters : 9
};

exports.Optical.SagForAsphere3 = module.exports.Optical.SagForAsphere3 = {
    pythonModuleName : "Optical",
    pythonClassName : "SagForAsphere3",
    extendedVersionString : "Default",
    displayName : "Sag For Asphere 3",
    displayHTML : "s<sup>2</sup> = x<sup>2</sup> + y<sup>2</sup><br>z = (s<sup>2</sup>/r) / (1+(1-(k+1)(s/r)<sup>2</sup>)<sup>1/2</sup>) + A4*s<sup>4</sup> + A6*s<sup>6</sup> + A8*s<sup>8</sup>",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.Optical.SagForAsphere3_WithOffset = module.exports.Optical.SagForAsphere3_WithOffset = {
    pythonModuleName : "Optical",
    pythonClassName : "SagForAsphere3",
    extendedVersionString : "Offset",
    displayName : "Sag For Asphere 3 With Offset",
    displayHTML : "s<sup>2</sup> = x<sup>2</sup> + y<sup>2</sup><br>z = (s<sup>2</sup>/r) / (1+(1-(k+1)(s/r)<sup>2</sup>)<sup>1/2</sup>) + A4*s<sup>4</sup> + A6*s<sup>6</sup> + A8*s<sup>8</sup> + Offset",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Optical.SagForAsphere3_Transform = module.exports.Optical.SagForAsphere3_Transform = {
    pythonModuleName : "Optical",
    pythonClassName : "SagForAsphere3_Transform",
    extendedVersionString : "Default",
    displayName : "Transform Sag For Asphere 3",
    displayHTML : "s<sup>2</sup> = (ax+b)<sup>2</sup> + (cy+d)<sup>2</sup><br>z = (s<sup>2</sup>/r) / (1+(1-(k+1)(s/r)<sup>2</sup>)<sup>1/2</sup>) + A4*s<sup>4</sup> + A6*s<sup>6</sup> + A8*s<sup>8</sup>",
    dimensionality : 3,
    numberOfParameters : 9
};

exports.Optical.SagForAsphere3_Transform_WithOffset = module.exports.Optical.SagForAsphere3_Transform_WithOffset = {
    pythonModuleName : "Optical",
    pythonClassName : "SagForAsphere3_Transform",
    extendedVersionString : "Offset",
    displayName : "Transform Sag For Asphere 3 With Offset",
    displayHTML : "s<sup>2</sup> = (ax+b)<sup>2</sup> + (cy+d)<sup>2</sup><br>z = (s<sup>2</sup>/r) / (1+(1-(k+1)(s/r)<sup>2</sup>)<sup>1/2</sup>) + A4*s<sup>4</sup> + A6*s<sup>6</sup> + A8*s<sup>8</sup> + Offset",
    dimensionality : 3,
    numberOfParameters : 10
};


exports.Peak = module.exports.Peak = {};

exports.Peak.ExtremeValueA = module.exports.Peak.ExtremeValueA = {
    pythonModuleName : "Peak",
    pythonClassName : "ExtremeValueA",
    extendedVersionString : "Default",
    displayName : "Extreme Value A",
    displayHTML : "z = a * exp(-exp(-(x-b)/c)-(x-b)/c+1) + d * exp(-exp(-(y-f)/g)-(y-f)/g+1)",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Peak.ExtremeValueA_WithOffset = module.exports.Peak.ExtremeValueA_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "ExtremeValueA",
    extendedVersionString : "Offset",
    displayName : "Extreme Value A With Offset",
    displayHTML : "z = a * exp(-exp(-(x-b)/c)-(x-b)/c+1) + d * exp(-exp(-(y-f)/g)-(y-f)/g+1) + Offset",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Peak.ExtremeValueB = module.exports.Peak.ExtremeValueB = {
    pythonModuleName : "Peak",
    pythonClassName : "ExtremeValueB",
    extendedVersionString : "Default",
    displayName : "Extreme Value B",
    displayHTML : "z = a * exp(-exp(-(x-b)/c)-(x-b)/c+1) * exp(-exp(-(y-d)/f)-(y-d)/f+1)",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.Peak.ExtremeValueB_WithOffset = module.exports.Peak.ExtremeValueB_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "ExtremeValueB",
    extendedVersionString : "Offset",
    displayName : "Extreme Value B With Offset",
    displayHTML : "z = a * exp(-exp(-(x-b)/c)-(x-b)/c+1) * exp(-exp(-(y-d)/f)-(y-d)/f+1) + Offset",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Peak.GaussianA = module.exports.Peak.GaussianA = {
    pythonModuleName : "Peak",
    pythonClassName : "GaussianA",
    extendedVersionString : "Default",
    displayName : "Gaussian A",
    displayHTML : "z = a * exp(-0.5 * (((x-b)/c)<sup>2</sup> + ((y-d)/f)<sup>2</sup>))",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.Peak.GaussianA_WithOffset = module.exports.Peak.GaussianA_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "GaussianA",
    extendedVersionString : "Offset",
    displayName : "Gaussian A With Offset",
    displayHTML : "z = a * exp(-0.5 * (((x-b)/c)<sup>2</sup> + ((y-d)/f)<sup>2</sup>)) + Offset",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Peak.GaussianB = module.exports.Peak.GaussianB = {
    pythonModuleName : "Peak",
    pythonClassName : "GaussianB",
    extendedVersionString : "Default",
    displayName : "Gaussian B",
    displayHTML : "z = a * exp(-0.5 * (((x-b)/c)<sup>2</sup>)) + d * exp(-0.5 * (((y-f)/g)<sup>2</sup>))",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Peak.GaussianB_WithOffset = module.exports.Peak.GaussianB_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "GaussianB",
    extendedVersionString : "Offset",
    displayName : "Gaussian B With Offset",
    displayHTML : "z = a * exp(-0.5 * (((x-b)/c)<sup>2</sup>)) + d * exp(-0.5 * (((y-f)/g)<sup>2</sup>)) + Offset",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Peak.LogNormalA = module.exports.Peak.LogNormalA = {
    pythonModuleName : "Peak",
    pythonClassName : "LogNormalA",
    extendedVersionString : "Default",
    displayName : "Log-Normal A",
    displayHTML : "z = a * exp(-0.5 * (((ln(x)-b)/c)<sup>2</sup> + ((ln(y)-d)/f)<sup>2</sup>))",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.Peak.LogNormalA_WithOffset = module.exports.Peak.LogNormalA_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "LogNormalA",
    extendedVersionString : "Offset",
    displayName : "Log-Normal A With Offset",
    displayHTML : "z = a * exp(-0.5 * (((ln(x)-b)/c)<sup>2</sup> + ((ln(y)-d)/f)<sup>2</sup>)) + Offset",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Peak.LogNormalB = module.exports.Peak.LogNormalB = {
    pythonModuleName : "Peak",
    pythonClassName : "LogNormalB",
    extendedVersionString : "Default",
    displayName : "Log-Normal B",
    displayHTML : "z = a * exp(-0.5 * (((ln(x)-b)/c)<sup>2</sup>)) + d * exp(-0.5 * (((ln(y)-f)/g)<sup>2</sup>))",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Peak.LogNormalB_WithOffset = module.exports.Peak.LogNormalB_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "LogNormalB",
    extendedVersionString : "Offset",
    displayName : "Log-Normal B With Offset",
    displayHTML : "z = a * exp(-0.5 * (((ln(x)-b)/c)<sup>2</sup>)) + d * exp(-0.5 * (((ln(y)-f)/g)<sup>2</sup>)) + Offset",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Peak.LogisticA = module.exports.Peak.LogisticA = {
    pythonModuleName : "Peak",
    pythonClassName : "LogisticA",
    extendedVersionString : "Default",
    displayName : "Logistic A",
    displayHTML : "z = 4a * exp(-((x-b)/c))/((1+exp(-((x-b)/c)))<sup>2</sup>) + 4d * exp(-((y-f)/g))/((1+exp(-((y-f)/g)))<sup>2</sup>)",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Peak.LogisticA_WithOffset = module.exports.Peak.LogisticA_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "LogisticA",
    extendedVersionString : "Offset",
    displayName : "Logistic A With Offset",
    displayHTML : "z = 4a * exp(-((x-b)/c))/((1+exp(-((x-b)/c)))<sup>2</sup>) + 4d * exp(-((y-f)/g))/((1+exp(-((y-f)/g)))<sup>2</sup>) + Offset",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Peak.LogisticB = module.exports.Peak.LogisticB = {
    pythonModuleName : "Peak",
    pythonClassName : "LogisticB",
    extendedVersionString : "Default",
    displayName : "Logistic B",
    displayHTML : "z = 16a * exp(-((x-b)/c)-((y-d)/f)) / ((1+exp(-((x-b)/c)))<sup>2</sup> * (1+exp(-((y-d)/f)))<sup>2</sup>)",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.Peak.LogisticB_WithOffset = module.exports.Peak.LogisticB_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "LogisticB",
    extendedVersionString : "Offset",
    displayName : "Logistic B With Offset",
    displayHTML : "z = 16a * exp(-((x-b)/c)-((y-d)/f)) / ((1+exp(-((x-b)/c)))<sup>2</sup> * (1+exp(-((y-d)/f)))<sup>2</sup>) + Offset",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Peak.LorentzianA = module.exports.Peak.LorentzianA = {
    pythonModuleName : "Peak",
    pythonClassName : "LorentzianA",
    extendedVersionString : "Default",
    displayName : "Lorentzian A",
    displayHTML : "z = a / ((1+((x-b)/c)<sup>2</sup>)*(1+((y-d)/f)<sup>2</sup>))",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.Peak.LorentzianA_WithOffset = module.exports.Peak.LorentzianA_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "LorentzianA",
    extendedVersionString : "Offset",
    displayName : "Lorentzian A With Offset",
    displayHTML : "z = a / ((1+((x-b)/c)<sup>2</sup>)*(1+((y-d)/f)<sup>2</sup>)) + Offset",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Peak.LorentzianB = module.exports.Peak.LorentzianB = {
    pythonModuleName : "Peak",
    pythonClassName : "LorentzianB",
    extendedVersionString : "Default",
    displayName : "Lorentzian B",
    displayHTML : "z = a / (1+((x-b)/c)<sup>2</sup>) + d * (1+((y-f)/g)<sup>2</sup>)",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Peak.LorentzianB_WithOffset = module.exports.Peak.LorentzianB_WithOffset = {
    pythonModuleName : "Peak",
    pythonClassName : "LorentzianB",
    extendedVersionString : "Offset",
    displayName : "Lorentzian B With Offset",
    displayHTML : "z = a / (1+((x-b)/c)<sup>2</sup>) + d * (1+((y-f)/g)<sup>2</sup>) + Offset",
    dimensionality : 3,
    numberOfParameters : 7
};


exports.Polyfunctional = module.exports.Polyfunctional = {};


exports.Polynomial = module.exports.Polynomial = {};

exports.Polynomial.FullCubic = module.exports.Polynomial.FullCubic = {
    pythonModuleName : "Polynomial",
    pythonClassName : "FullCubic",
    extendedVersionString : "Default",
    displayName : "Full Cubic",
    displayHTML : "z = a + bx + cy + dx<sup>2</sup> + fy<sup>2</sup> + gx<sup>3</sup> + hy<sup>3</sup> + ixy + jx<sup>2</sup>y + kxy<sup>2</sup>",
    dimensionality : 3,
    numberOfParameters : 10
};

exports.Polynomial.FullQuadratic = module.exports.Polynomial.FullQuadratic = {
    pythonModuleName : "Polynomial",
    pythonClassName : "FullQuadratic",
    extendedVersionString : "Default",
    displayName : "Full Quadratic",
    displayHTML : "z = a + bx + cy + dx<sup>2</sup> + fy<sup>2</sup> + gxy",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Polynomial.Linear = module.exports.Polynomial.Linear = {
    pythonModuleName : "Polynomial",
    pythonClassName : "Linear",
    extendedVersionString : "Default",
    displayName : "Linear",
    displayHTML : "z = a + bx + cy",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Polynomial.SimplifiedCubic = module.exports.Polynomial.SimplifiedCubic = {
    pythonModuleName : "Polynomial",
    pythonClassName : "SimplifiedCubic",
    extendedVersionString : "Default",
    displayName : "Simplified Cubic",
    displayHTML : "z = a + bx + cy + dx<sup>2</sup> + fy<sup>2</sup> + gx<sup>3</sup> + hy<sup>3</sup>",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Polynomial.SimplifiedQuadratic = module.exports.Polynomial.SimplifiedQuadratic = {
    pythonModuleName : "Polynomial",
    pythonClassName : "SimplifiedQuadratic",
    extendedVersionString : "Default",
    displayName : "Simplified Quadratic",
    displayHTML : "z = a + bx + cy + dx<sup>2</sup> + fy<sup>2</sup>",
    dimensionality : 3,
    numberOfParameters : 5
};


exports.Power = module.exports.Power = {};

exports.Power.PowerA = module.exports.Power.PowerA = {
    pythonModuleName : "Power",
    pythonClassName : "PowerA",
    extendedVersionString : "Default",
    displayName : "Power A",
    displayHTML : "z = a * (x<sup>b</sup> + y<sup>c</sup>)",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Power.PowerA_WithOffset = module.exports.Power.PowerA_WithOffset = {
    pythonModuleName : "Power",
    pythonClassName : "PowerA",
    extendedVersionString : "Offset",
    displayName : "Power A With Offset",
    displayHTML : "z = a * (x<sup>b</sup> + y<sup>c</sup>) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Power.PowerA_Transform = module.exports.Power.PowerA_Transform = {
    pythonModuleName : "Power",
    pythonClassName : "PowerA_Transform",
    extendedVersionString : "Default",
    displayName : "Transform Power A",
    displayHTML : "z = a * ((dx + f)<sup>b</sup> + (gy + h)<sup>c</sup>)",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Power.PowerA_Transform_WithOffset = module.exports.Power.PowerA_Transform_WithOffset = {
    pythonModuleName : "Power",
    pythonClassName : "PowerA_Transform",
    extendedVersionString : "Offset",
    displayName : "Transform Power A With Offset",
    displayHTML : "z = a * ((dx + f)<sup>b</sup> + (gy + h)<sup>c</sup>) + Offset",
    dimensionality : 3,
    numberOfParameters : 8
};

exports.Power.PowerB = module.exports.Power.PowerB = {
    pythonModuleName : "Power",
    pythonClassName : "PowerB",
    extendedVersionString : "Default",
    displayName : "Power B",
    displayHTML : "z = a + x<sup>b</sup> + y<sup>c</sup>",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Power.PowerB_Transform = module.exports.Power.PowerB_Transform = {
    pythonModuleName : "Power",
    pythonClassName : "PowerB_Transform",
    extendedVersionString : "Default",
    displayName : "Transform Power B",
    displayHTML : "z = a + (dx + f)<sup>b</sup> + (gy + h)<sup>c</sup>",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Power.PowerC = module.exports.Power.PowerC = {
    pythonModuleName : "Power",
    pythonClassName : "PowerC",
    extendedVersionString : "Default",
    displayName : "Power C",
    displayHTML : "z = a + x<sup>b</sup> * y<sup>c</sup>",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Power.PowerC_Transform = module.exports.Power.PowerC_Transform = {
    pythonModuleName : "Power",
    pythonClassName : "PowerC_Transform",
    extendedVersionString : "Default",
    displayName : "Transform Power C",
    displayHTML : "z = a + (dx + f)<sup>b</sup> * (gy + h)<sup>c</sup>",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Power.PowerD = module.exports.Power.PowerD = {
    pythonModuleName : "Power",
    pythonClassName : "PowerD",
    extendedVersionString : "Default",
    displayName : "Power D",
    displayHTML : "z = ax<sup>b</sup> + cy<sup>d</sup>",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Power.PowerD_WithOffset = module.exports.Power.PowerD_WithOffset = {
    pythonModuleName : "Power",
    pythonClassName : "PowerD",
    extendedVersionString : "Offset",
    displayName : "Power D With Offset",
    displayHTML : "z = ax<sup>b</sup> + cy<sup>d</sup> + Offset",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.Power.PowerD_Transform = module.exports.Power.PowerD_Transform = {
    pythonModuleName : "Power",
    pythonClassName : "PowerD_Transform",
    extendedVersionString : "Default",
    displayName : "Transform Power D",
    displayHTML : "z = a(fx + g)<sup>b</sup> + c(hy + i)<sup>d</sup>",
    dimensionality : 3,
    numberOfParameters : 8
};

exports.Power.PowerD_Transform_WithOffset = module.exports.Power.PowerD_Transform_WithOffset = {
    pythonModuleName : "Power",
    pythonClassName : "PowerD_Transform",
    extendedVersionString : "Offset",
    displayName : "Transform Power D With Offset",
    displayHTML : "z = a(fx + g)<sup>b</sup> + c(hy + i)<sup>d</sup> + Offset",
    dimensionality : 3,
    numberOfParameters : 9
};

exports.Power.PowerE = module.exports.Power.PowerE = {
    pythonModuleName : "Power",
    pythonClassName : "PowerE",
    extendedVersionString : "Default",
    displayName : "Power E",
    displayHTML : "z = a * x<sup>b</sup> * y<sup>c</sup>",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Power.PowerE_WithOffset = module.exports.Power.PowerE_WithOffset = {
    pythonModuleName : "Power",
    pythonClassName : "PowerE",
    extendedVersionString : "Offset",
    displayName : "Power E With Offset",
    displayHTML : "z = a * x<sup>b</sup> * y<sup>c</sup> + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Power.PowerE_Transform = module.exports.Power.PowerE_Transform = {
    pythonModuleName : "Power",
    pythonClassName : "PowerE_Transform",
    extendedVersionString : "Default",
    displayName : "Transform Power E",
    displayHTML : "z = a * (dx + f)<sup>b</sup> * (gy + h)<sup>c</sup>",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Power.PowerE_Transform_WithOffset = module.exports.Power.PowerE_Transform_WithOffset = {
    pythonModuleName : "Power",
    pythonClassName : "PowerE_Transform",
    extendedVersionString : "Offset",
    displayName : "Transform Power E With Offset",
    displayHTML : "z = a * (dx + f)<sup>b</sup> * (gy + h)<sup>c</sup> + Offset",
    dimensionality : 3,
    numberOfParameters : 8
};


exports.Rational = module.exports.Rational = {};

exports.Rational.RationalA = module.exports.Rational.RationalA = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalA",
    extendedVersionString : "Default",
    displayName : "Rational A",
    displayHTML : "z = (a + bx + cy)/(1 + dx + fy)",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.Rational.RationalA_WithOffset = module.exports.Rational.RationalA_WithOffset = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalA",
    extendedVersionString : "Offset",
    displayName : "Rational A With Offset",
    displayHTML : "z = (a + bx + cy)/(1 + dx + fy) + Offset",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Rational.RationalB = module.exports.Rational.RationalB = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalB",
    extendedVersionString : "Default",
    displayName : "Rational B",
    displayHTML : "z = (a + b*ln(x) + c*ln(y))/(1 + dx + fy)",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.Rational.RationalB_WithOffset = module.exports.Rational.RationalB_WithOffset = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalB",
    extendedVersionString : "Offset",
    displayName : "Rational B With Offset",
    displayHTML : "z = (a + b*ln(x) + c*ln(y))/(1 + dx + fy) + Offset",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Rational.RationalC = module.exports.Rational.RationalC = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalC",
    extendedVersionString : "Default",
    displayName : "Rational C",
    displayHTML : "z = (a + b*exp(x) + c*ln(y))/(1 + dx + fy)",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.Rational.RationalC_WithOffset = module.exports.Rational.RationalC_WithOffset = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalC",
    extendedVersionString : "Offset",
    displayName : "Rational C With Offset",
    displayHTML : "z = (a + b*exp(x) + c*ln(y))/(1 + dx + fy) + Offset",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Rational.RationalD = module.exports.Rational.RationalD = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalD",
    extendedVersionString : "Default",
    displayName : "Rational D",
    displayHTML : "z = (a + b*ln(x) + c*exp(y))/(1 + dx + fy)",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.Rational.RationalD_WithOffset = module.exports.Rational.RationalD_WithOffset = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalD",
    extendedVersionString : "Offset",
    displayName : "Rational D With Offset",
    displayHTML : "z = (a + b*ln(x) + c*exp(y))/(1 + dx + fy) + Offset",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Rational.RationalE = module.exports.Rational.RationalE = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalE",
    extendedVersionString : "Default",
    displayName : "Rational E",
    displayHTML : "z = (a + b*exp(x) + c*exp(y))/(1 + dx + fy)",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.Rational.RationalE_WithOffset = module.exports.Rational.RationalE_WithOffset = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalE",
    extendedVersionString : "Offset",
    displayName : "Rational E With Offset",
    displayHTML : "z = (a + b*exp(x) + c*exp(y))/(1 + dx + fy) + Offset",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Rational.RationalF = module.exports.Rational.RationalF = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalF",
    extendedVersionString : "Default",
    displayName : "Rational F",
    displayHTML : "z = (a + bx + cy)/(1 + d*ln(x) + f*ln(y))",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.Rational.RationalF_WithOffset = module.exports.Rational.RationalF_WithOffset = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalF",
    extendedVersionString : "Offset",
    displayName : "Rational F With Offset",
    displayHTML : "z = (a + bx + cy)/(1 + d*ln(x) + f*ln(y)) + Offset",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Rational.RationalG = module.exports.Rational.RationalG = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalG",
    extendedVersionString : "Default",
    displayName : "Rational G",
    displayHTML : "z = (a + bx + cy)/(1 + d*exp(x) + f*ln(y))",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.Rational.RationalG_WithOffset = module.exports.Rational.RationalG_WithOffset = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalG",
    extendedVersionString : "Offset",
    displayName : "Rational G With Offset",
    displayHTML : "z = (a + bx + cy)/(1 + d*exp(x) + f*ln(y)) + Offset",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Rational.RationalH = module.exports.Rational.RationalH = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalH",
    extendedVersionString : "Default",
    displayName : "Rational H",
    displayHTML : "z = (a + bx + cy)/(1 + d*ln(x) + f*exp(y))",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.Rational.RationalH_WithOffset = module.exports.Rational.RationalH_WithOffset = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalH",
    extendedVersionString : "Offset",
    displayName : "Rational H With Offset",
    displayHTML : "z = (a + bx + cy)/(1 + d*ln(x) + f*exp(y)) + Offset",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Rational.RationalI = module.exports.Rational.RationalI = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalI",
    extendedVersionString : "Default",
    displayName : "Rational I",
    displayHTML : "z = (a + bx + cy)/(1 + d*exp(x) + f*exp(y))",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.Rational.RationalI_WithOffset = module.exports.Rational.RationalI_WithOffset = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalI",
    extendedVersionString : "Offset",
    displayName : "Rational I With Offset",
    displayHTML : "z = (a + bx + cy)/(1 + d*exp(x) + f*exp(y)) + Offset",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Rational.RationalJ = module.exports.Rational.RationalJ = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalJ",
    extendedVersionString : "Default",
    displayName : "Rational J",
    displayHTML : "z = (a + b*ln(x) + c*ln(y))/(1 + d*ln(x) + f*ln(y))",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.Rational.RationalJ_WithOffset = module.exports.Rational.RationalJ_WithOffset = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalJ",
    extendedVersionString : "Offset",
    displayName : "Rational J With Offset",
    displayHTML : "z = (a + b*ln(x) + c*ln(y))/(1 + d*ln(x) + f*ln(y)) + Offset",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Rational.RationalK = module.exports.Rational.RationalK = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalK",
    extendedVersionString : "Default",
    displayName : "Rational K",
    displayHTML : "z = (a + b*exp(x) + c*ln(y))/(1 + d*exp(x) + f*ln(y))",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.Rational.RationalK_WithOffset = module.exports.Rational.RationalK_WithOffset = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalK",
    extendedVersionString : "Offset",
    displayName : "Rational K With Offset",
    displayHTML : "z = (a + b*exp(x) + c*ln(y))/(1 + d*exp(x) + f*ln(y)) + Offset",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Rational.RationalL = module.exports.Rational.RationalL = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalL",
    extendedVersionString : "Default",
    displayName : "Rational L",
    displayHTML : "z = (a + b*ln(x) + c*exp(y))/(1 + d*ln(x) + f*exp(y))",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.Rational.RationalL_WithOffset = module.exports.Rational.RationalL_WithOffset = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalL",
    extendedVersionString : "Offset",
    displayName : "Rational L With Offset",
    displayHTML : "z = (a + b*ln(x) + c*exp(y))/(1 + d*ln(x) + f*exp(y)) + Offset",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Rational.RationalM = module.exports.Rational.RationalM = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalM",
    extendedVersionString : "Default",
    displayName : "Rational M",
    displayHTML : "z = (a + b*exp(x) + c*exp(y))/(1 + d*exp(x) + f*exp(y))",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.Rational.RationalM_WithOffset = module.exports.Rational.RationalM_WithOffset = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalM",
    extendedVersionString : "Offset",
    displayName : "Rational M With Offset",
    displayHTML : "z = (a + b*exp(x) + c*exp(y))/(1 + d*exp(x) + f*exp(y)) + Offset",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Rational.RationalN = module.exports.Rational.RationalN = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalN",
    extendedVersionString : "Default",
    displayName : "Rational N",
    displayHTML : "z = (a + bx + cy + dxy)/(1 + fx + gy + hxy)",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Rational.RationalN_WithOffset = module.exports.Rational.RationalN_WithOffset = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalN",
    extendedVersionString : "Offset",
    displayName : "Rational N With Offset",
    displayHTML : "z = (a + bx + cy + dxy)/(1 + fx + gy + hxy) + Offset",
    dimensionality : 3,
    numberOfParameters : 8
};

exports.Rational.RationalO = module.exports.Rational.RationalO = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalO",
    extendedVersionString : "Default",
    displayName : "Rational O",
    displayHTML : "z = (a + b*ln(x) + c*ln(y) + d*ln(x)ln(y))/(1 + fx + gy + hxy)",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Rational.RationalO_WithOffset = module.exports.Rational.RationalO_WithOffset = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalO",
    extendedVersionString : "Offset",
    displayName : "Rational O With Offset",
    displayHTML : "z = (a + b*ln(x) + c*ln(y) + d*ln(x)ln(y))/(1 + fx + gy + hxy) + Offset",
    dimensionality : 3,
    numberOfParameters : 8
};

exports.Rational.RationalP = module.exports.Rational.RationalP = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalP",
    extendedVersionString : "Default",
    displayName : "Rational P",
    displayHTML : "z = (a + b*exp(x) + c*ln(y) + d*exp(x)ln(y))/(1 + fx + gy + hxy)",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Rational.RationalP_WithOffset = module.exports.Rational.RationalP_WithOffset = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalP",
    extendedVersionString : "Offset",
    displayName : "Rational P With Offset",
    displayHTML : "z = (a + b*exp(x) + c*ln(y) + d*exp(x)ln(y))/(1 + fx + gy + hxy) + Offset",
    dimensionality : 3,
    numberOfParameters : 8
};

exports.Rational.RationalQ = module.exports.Rational.RationalQ = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalQ",
    extendedVersionString : "Default",
    displayName : "Rational Q",
    displayHTML : "z = (a + b*ln(x) + c*exp(y) + d*ln(x)exp(y))/(1 + fx + gy + hxy)",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Rational.RationalQ_WithOffset = module.exports.Rational.RationalQ_WithOffset = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalQ",
    extendedVersionString : "Offset",
    displayName : "Rational Q With Offset",
    displayHTML : "z = (a + b*ln(x) + c*exp(y) + d*ln(x)exp(y))/(1 + fx + gy + hxy) + Offset",
    dimensionality : 3,
    numberOfParameters : 8
};

exports.Rational.RationalR = module.exports.Rational.RationalR = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalR",
    extendedVersionString : "Default",
    displayName : "Rational R",
    displayHTML : "z = (a + b*exp(x) + c*exp(y) + d*exp(x)exp(y))/(1 + fx + gy + hxy)",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Rational.RationalR_WithOffset = module.exports.Rational.RationalR_WithOffset = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalR",
    extendedVersionString : "Offset",
    displayName : "Rational R With Offset",
    displayHTML : "z = (a + b*exp(x) + c*exp(y) + d*exp(x)exp(y))/(1 + fx + gy + hxy) + Offset",
    dimensionality : 3,
    numberOfParameters : 8
};

exports.Rational.RationalS = module.exports.Rational.RationalS = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalS",
    extendedVersionString : "Default",
    displayName : "Rational S",
    displayHTML : "z = (a + bx + cy + dxy)/(1 + f*ln(x) + g*ln(y) + h*ln(x)*ln(y))",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Rational.RationalS_WithOffset = module.exports.Rational.RationalS_WithOffset = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalS",
    extendedVersionString : "Offset",
    displayName : "Rational S With Offset",
    displayHTML : "z = (a + bx + cy + dxy)/(1 + f*ln(x) + g*ln(y) + h*ln(x)*ln(y)) + Offset",
    dimensionality : 3,
    numberOfParameters : 8
};

exports.Rational.RationalT = module.exports.Rational.RationalT = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalT",
    extendedVersionString : "Default",
    displayName : "Rational T",
    displayHTML : "z = (a + bx + cy + dxy)/(1 + f*exp(x) + g*ln(y) + h*exp(x)*ln(y))",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Rational.RationalT_WithOffset = module.exports.Rational.RationalT_WithOffset = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalT",
    extendedVersionString : "Offset",
    displayName : "Rational T With Offset",
    displayHTML : "z = (a + bx + cy + dxy)/(1 + f*exp(x) + g*ln(y) + h*exp(x)*ln(y)) + Offset",
    dimensionality : 3,
    numberOfParameters : 8
};

exports.Rational.RationalU = module.exports.Rational.RationalU = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalU",
    extendedVersionString : "Default",
    displayName : "Rational U",
    displayHTML : "z = (a + bx + cy + dxy)/(1 + f*ln(x) + g*exp(y) + h*ln(x)*exp(y))",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Rational.RationalU_WithOffset = module.exports.Rational.RationalU_WithOffset = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalU",
    extendedVersionString : "Offset",
    displayName : "Rational U With Offset",
    displayHTML : "z = (a + bx + cy + dxy)/(1 + f*ln(x) + g*exp(y) + h*ln(x)*exp(y)) + Offset",
    dimensionality : 3,
    numberOfParameters : 8
};

exports.Rational.RationalV = module.exports.Rational.RationalV = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalV",
    extendedVersionString : "Default",
    displayName : "Rational V",
    displayHTML : "z = (a + bx + cy + dxy)/(1 + f*exp(x) + g*exp(y) + h*exp(x)*exp(y))",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Rational.RationalV_WithOffset = module.exports.Rational.RationalV_WithOffset = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalV",
    extendedVersionString : "Offset",
    displayName : "Rational V With Offset",
    displayHTML : "z = (a + bx + cy + dxy)/(1 + f*exp(x) + g*exp(y) + h*exp(x)*exp(y)) + Offset",
    dimensionality : 3,
    numberOfParameters : 8
};

exports.Rational.RationalW = module.exports.Rational.RationalW = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalW",
    extendedVersionString : "Default",
    displayName : "Rational W",
    displayHTML : "z = (a + b*ln(x) + c*ln(y) + d*ln(x)*ln(y))/(1 + f*ln(x) + g*ln(y) + h*ln(x)*ln(y))",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Rational.RationalW_WithOffset = module.exports.Rational.RationalW_WithOffset = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalW",
    extendedVersionString : "Offset",
    displayName : "Rational W With Offset",
    displayHTML : "z = (a + b*ln(x) + c*ln(y) + d*ln(x)*ln(y))/(1 + f*ln(x) + g*ln(y) + h*ln(x)*ln(y)) + Offset",
    dimensionality : 3,
    numberOfParameters : 8
};

exports.Rational.RationalX = module.exports.Rational.RationalX = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalX",
    extendedVersionString : "Default",
    displayName : "Rational X",
    displayHTML : "z = (a + b*exp(x) + c*ln(y) + d*exp(x)*ln(y))/(1 + f*exp(x) + g*ln(y) + h*exp(x)*ln(y))",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Rational.RationalX_WithOffset = module.exports.Rational.RationalX_WithOffset = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalX",
    extendedVersionString : "Offset",
    displayName : "Rational X With Offset",
    displayHTML : "z = (a + b*exp(x) + c*ln(y) + d*exp(x)*ln(y))/(1 + f*exp(x) + g*ln(y) + h*exp(x)*ln(y)) + Offset",
    dimensionality : 3,
    numberOfParameters : 8
};

exports.Rational.RationalY = module.exports.Rational.RationalY = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalY",
    extendedVersionString : "Default",
    displayName : "Rational Y",
    displayHTML : "z = (a + b*ln(x) + c*exp(y) + d*ln(x)*exp(y))/(1 + f*ln(x) + g*exp(y) + h*ln(x)*exp(y))",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Rational.RationalY_WithOffset = module.exports.Rational.RationalY_WithOffset = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalY",
    extendedVersionString : "Offset",
    displayName : "Rational Y With Offset",
    displayHTML : "z = (a + b*ln(x) + c*exp(y) + d*ln(x)*exp(y))/(1 + f*ln(x) + g*exp(y) + h*ln(x)*exp(y)) + Offset",
    dimensionality : 3,
    numberOfParameters : 8
};

exports.Rational.RationalZ = module.exports.Rational.RationalZ = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalZ",
    extendedVersionString : "Default",
    displayName : "Rational Z",
    displayHTML : "z = (a + b*exp(x) + c*exp(y) + d*exp(x)*exp(y))/(1 + f*exp(x) + g*exp(y) + h*exp(x)*exp(y))",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Rational.RationalZ_WithOffset = module.exports.Rational.RationalZ_WithOffset = {
    pythonModuleName : "Rational",
    pythonClassName : "RationalZ",
    extendedVersionString : "Offset",
    displayName : "Rational Z With Offset",
    displayHTML : "z = (a + b*exp(x) + c*exp(y) + d*exp(x)*exp(y))/(1 + f*exp(x) + g*exp(y) + h*exp(x)*exp(y)) + Offset",
    dimensionality : 3,
    numberOfParameters : 8
};


exports.RomanSurfaces = module.exports.RomanSurfaces = {};

exports.RomanSurfaces.RomanSurfaceMinus = module.exports.RomanSurfaces.RomanSurfaceMinus = {
    pythonModuleName : "RomanSurfaces",
    pythonClassName : "RomanSurfaceMinus",
    extendedVersionString : "Default",
    displayName : "Roman Surface (minus)",
    displayHTML : "z = (k(y<sup>2</sup>-x<sup>2</sup>) - (x<sup>2</sup>-y<sup>2</sup>)sqrt(k<sup>2</sup>-x<sup>2</sup>-y<sup>2</sup>)) / (2(x<sup>2</sup>+y<sup>2</sup>))",
    dimensionality : 3,
    numberOfParameters : 1
};

exports.RomanSurfaces.RomanSurfaceMinus_WithOffset = module.exports.RomanSurfaces.RomanSurfaceMinus_WithOffset = {
    pythonModuleName : "RomanSurfaces",
    pythonClassName : "RomanSurfaceMinus",
    extendedVersionString : "Offset",
    displayName : "Roman Surface (minus) With Offset",
    displayHTML : "z = (k(y<sup>2</sup>-x<sup>2</sup>) - (x<sup>2</sup>-y<sup>2</sup>)sqrt(k<sup>2</sup>-x<sup>2</sup>-y<sup>2</sup>)) / (2(x<sup>2</sup>+y<sup>2</sup>)) + Offset",
    dimensionality : 3,
    numberOfParameters : 2
};

exports.RomanSurfaces.RomanSurfaceMinus_OffsetXY = module.exports.RomanSurfaces.RomanSurfaceMinus_OffsetXY = {
    pythonModuleName : "RomanSurfaces",
    pythonClassName : "RomanSurfaceMinus_OffsetXY",
    extendedVersionString : "Default",
    displayName : "Roman Surface (minus) Offset XY",
    displayHTML : "z = (k((y+b)<sup>2</sup>-(x+a)<sup>2</sup>) - ((x+a)<sup>2</sup>-(y+b)<sup>2</sup>)sqrt(k<sup>2</sup>-(x+a)<sup>2</sup>-(y+b)<sup>2</sup>)) / (2((x+a)<sup>2</sup>+(y+b)<sup>2</sup>))",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.RomanSurfaces.RomanSurfaceMinus_OffsetXY_WithOffset = module.exports.RomanSurfaces.RomanSurfaceMinus_OffsetXY_WithOffset = {
    pythonModuleName : "RomanSurfaces",
    pythonClassName : "RomanSurfaceMinus_OffsetXY",
    extendedVersionString : "Offset",
    displayName : "Roman Surface (minus) Offset XY With Offset",
    displayHTML : "z = (k((y+b)<sup>2</sup>-(x+a)<sup>2</sup>) - ((x+a)<sup>2</sup>-(y+b)<sup>2</sup>)sqrt(k<sup>2</sup>-(x+a)<sup>2</sup>-(y+b)<sup>2</sup>)) / (2((x+a)<sup>2</sup>+(y+b)<sup>2</sup>)) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.RomanSurfaces.RomanSurfaceMinus_ScaledAndOffsetXY = module.exports.RomanSurfaces.RomanSurfaceMinus_ScaledAndOffsetXY = {
    pythonModuleName : "RomanSurfaces",
    pythonClassName : "RomanSurfaceMinus_ScaledAndOffsetXY",
    extendedVersionString : "Default",
    displayName : "Roman Surface (minus) Scaled And Offset XY",
    displayHTML : "z = (k((cy+d)<sup>2</sup>-(ax+b)<sup>2</sup>) - ((ax+b)<sup>2</sup>-(cy+d)<sup>2</sup>)sqrt(k<sup>2</sup>-(ax+b)<sup>2</sup>-(cy+d)<sup>2</sup>)) / (2((ax+b)<sup>2</sup>+(cy+d)<sup>2</sup>))",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.RomanSurfaces.RomanSurfaceMinus_ScaledAndOffsetXY_WithOffset = module.exports.RomanSurfaces.RomanSurfaceMinus_ScaledAndOffsetXY_WithOffset = {
    pythonModuleName : "RomanSurfaces",
    pythonClassName : "RomanSurfaceMinus_ScaledAndOffsetXY",
    extendedVersionString : "Offset",
    displayName : "Roman Surface (minus) Scaled And Offset XY With Offset",
    displayHTML : "z = (k((cy+d)<sup>2</sup>-(ax+b)<sup>2</sup>) - ((ax+b)<sup>2</sup>-(cy+d)<sup>2</sup>)sqrt(k<sup>2</sup>-(ax+b)<sup>2</sup>-(cy+d)<sup>2</sup>)) / (2((ax+b)<sup>2</sup>+(cy+d)<sup>2</sup>)) + Offset",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.RomanSurfaces.RomanSurfacePlus = module.exports.RomanSurfaces.RomanSurfacePlus = {
    pythonModuleName : "RomanSurfaces",
    pythonClassName : "RomanSurfacePlus",
    extendedVersionString : "Default",
    displayName : "Roman Surface (plus)",
    displayHTML : "z = (k(y<sup>2</sup>-x<sup>2</sup>) + (x<sup>2</sup>-y<sup>2</sup>)sqrt(k<sup>2</sup>-x<sup>2</sup>-y<sup>2</sup>)) / (2(x<sup>2</sup>+y<sup>2</sup>))",
    dimensionality : 3,
    numberOfParameters : 1
};

exports.RomanSurfaces.RomanSurfacePlus_WithOffset = module.exports.RomanSurfaces.RomanSurfacePlus_WithOffset = {
    pythonModuleName : "RomanSurfaces",
    pythonClassName : "RomanSurfacePlus",
    extendedVersionString : "Offset",
    displayName : "Roman Surface (plus) With Offset",
    displayHTML : "z = (k(y<sup>2</sup>-x<sup>2</sup>) + (x<sup>2</sup>-y<sup>2</sup>)sqrt(k<sup>2</sup>-x<sup>2</sup>-y<sup>2</sup>)) / (2(x<sup>2</sup>+y<sup>2</sup>)) + Offset",
    dimensionality : 3,
    numberOfParameters : 2
};

exports.RomanSurfaces.RomanSurfacePlus_OffsetXY = module.exports.RomanSurfaces.RomanSurfacePlus_OffsetXY = {
    pythonModuleName : "RomanSurfaces",
    pythonClassName : "RomanSurfacePlus_OffsetXY",
    extendedVersionString : "Default",
    displayName : "Roman Surface (plus) Offset XY",
    displayHTML : "z = (k((y+b)<sup>2</sup>-(x+a)<sup>2</sup>) + ((x+a)<sup>2</sup>-(y+b)<sup>2</sup>)sqrt(k<sup>2</sup>-(x+a)<sup>2</sup>-(y+b)<sup>2</sup>)) / (2((x+a)<sup>2</sup>+(y+b)<sup>2</sup>))",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.RomanSurfaces.RomanSurfacePlus_OffsetXY_WithOffset = module.exports.RomanSurfaces.RomanSurfacePlus_OffsetXY_WithOffset = {
    pythonModuleName : "RomanSurfaces",
    pythonClassName : "RomanSurfacePlus_OffsetXY",
    extendedVersionString : "Offset",
    displayName : "Roman Surface (plus) Offset XY With Offset",
    displayHTML : "z = (k((y+b)<sup>2</sup>-(x+a)<sup>2</sup>) + ((x+a)<sup>2</sup>-(y+b)<sup>2</sup>)sqrt(k<sup>2</sup>-(x+a)<sup>2</sup>-(y+b)<sup>2</sup>)) / (2((x+a)<sup>2</sup>+(y+b)<sup>2</sup>)) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.RomanSurfaces.RomanSurfacePlus_ScaledAndOffsetXY = module.exports.RomanSurfaces.RomanSurfacePlus_ScaledAndOffsetXY = {
    pythonModuleName : "RomanSurfaces",
    pythonClassName : "RomanSurfacePlus_ScaledAndOffsetXY",
    extendedVersionString : "Default",
    displayName : "Roman Surface (plus) Scaled And Offset XY",
    displayHTML : "z = (k((cy+d)<sup>2</sup>-(ax+b)<sup>2</sup>) + ((ax+b)<sup>2</sup>-(cy+d)<sup>2</sup>)sqrt(k<sup>2</sup>-(ax+b)<sup>2</sup>-(cy+d)<sup>2</sup>)) / (2((ax+b)<sup>2</sup>+(cy+d)<sup>2</sup>))",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.RomanSurfaces.RomanSurfacePlus_ScaledAndOffsetXY_WithOffset = module.exports.RomanSurfaces.RomanSurfacePlus_ScaledAndOffsetXY_WithOffset = {
    pythonModuleName : "RomanSurfaces",
    pythonClassName : "RomanSurfacePlus_ScaledAndOffsetXY",
    extendedVersionString : "Offset",
    displayName : "Roman Surface (plus) Scaled And Offset XY With Offset",
    displayHTML : "z = (k((cy+d)<sup>2</sup>-(ax+b)<sup>2</sup>) + ((ax+b)<sup>2</sup>-(cy+d)<sup>2</sup>)sqrt(k<sup>2</sup>-(ax+b)<sup>2</sup>-(cy+d)<sup>2</sup>)) / (2((ax+b)<sup>2</sup>+(cy+d)<sup>2</sup>)) + Offset",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.RomanSurfaces.RomanSurfacePlus_scaled = module.exports.RomanSurfaces.RomanSurfacePlus_scaled = {
    pythonModuleName : "RomanSurfaces",
    pythonClassName : "RomanSurfacePlus_scaled",
    extendedVersionString : "Default",
    displayName : "Roman Surface (plus) Scaled",
    displayHTML : "z = Scale * (k(y<sup>2</sup>-x<sup>2</sup>) + (x<sup>2</sup>-y<sup>2</sup>)sqrt(k<sup>2</sup>-x<sup>2</sup>-y<sup>2</sup>)) / (2(x<sup>2</sup>+y<sup>2</sup>))",
    dimensionality : 3,
    numberOfParameters : 2
};

exports.RomanSurfaces.RomanSurfacePlus_scaled_WithOffset = module.exports.RomanSurfaces.RomanSurfacePlus_scaled_WithOffset = {
    pythonModuleName : "RomanSurfaces",
    pythonClassName : "RomanSurfacePlus_scaled",
    extendedVersionString : "Offset",
    displayName : "Roman Surface (plus) Scaled With Offset",
    displayHTML : "z = Scale * (k(y<sup>2</sup>-x<sup>2</sup>) + (x<sup>2</sup>-y<sup>2</sup>)sqrt(k<sup>2</sup>-x<sup>2</sup>-y<sup>2</sup>)) / (2(x<sup>2</sup>+y<sup>2</sup>)) + Offset",
    dimensionality : 3,
    numberOfParameters : 3
};


exports.Sigmoidal = module.exports.Sigmoidal = {};

exports.Sigmoidal.AndreaPrunottoSigmoidA = module.exports.Sigmoidal.AndreaPrunottoSigmoidA = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "AndreaPrunottoSigmoidA",
    extendedVersionString : "Default",
    displayName : "Andrea Prunotto Sigmoid A",
    displayHTML : "z = a0 + (a1 / (1.0 + exp(a2 * (x + a3 + a4 * y + a5 * x * y))))",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Sigmoidal.AndreaPrunottoSigmoidB = module.exports.Sigmoidal.AndreaPrunottoSigmoidB = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "AndreaPrunottoSigmoidB",
    extendedVersionString : "Default",
    displayName : "Andrea Prunotto Sigmoid B",
    displayHTML : "z = a0 + (a1 / (1.0 + exp(a2 * (x * a3 + a4 * y + a5 * x * y))))",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Sigmoidal.FraserSmithSigmoid = module.exports.Sigmoidal.FraserSmithSigmoid = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "FraserSmithSigmoid",
    extendedVersionString : "Default",
    displayName : "Fraser Smith Sigmoid",
    displayHTML : "z = 1.0 / ((1.0 + exp(a - bx)) * (1.0 + exp(c - dy)))",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Sigmoidal.FraserSmithSigmoid_WithOffset = module.exports.Sigmoidal.FraserSmithSigmoid_WithOffset = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "FraserSmithSigmoid",
    extendedVersionString : "Offset",
    displayName : "Fraser Smith Sigmoid With Offset",
    displayHTML : "z = 1.0 / ((1.0 + exp(a - bx)) * (1.0 + exp(c - dy))) + Offset",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.Sigmoidal.FraserSmithSigmoid_scaled = module.exports.Sigmoidal.FraserSmithSigmoid_scaled = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "FraserSmithSigmoid_scaled",
    extendedVersionString : "Default",
    displayName : "Fraser Smith Sigmoid Scaled",
    displayHTML : "z = Scale / ((1.0 + exp(a - bx)) * (1.0 + exp(c - dy)))",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.Sigmoidal.FraserSmithSigmoid_scaled_WithOffset = module.exports.Sigmoidal.FraserSmithSigmoid_scaled_WithOffset = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "FraserSmithSigmoid_scaled",
    extendedVersionString : "Offset",
    displayName : "Fraser Smith Sigmoid Scaled With Offset",
    displayHTML : "z = Scale / ((1.0 + exp(a - bx)) * (1.0 + exp(c - dy))) + Offset",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Sigmoidal.Sigmoid = module.exports.Sigmoidal.Sigmoid = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "Sigmoid",
    extendedVersionString : "Default",
    displayName : "Sigmoid",
    displayHTML : "z = a / ((1.0 + exp(b - cx)) * (1.0 + exp(d - fy)))",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.Sigmoidal.Sigmoid_WithOffset = module.exports.Sigmoidal.Sigmoid_WithOffset = {
    pythonModuleName : "Sigmoidal",
    pythonClassName : "Sigmoid",
    extendedVersionString : "Offset",
    displayName : "Sigmoid With Offset",
    displayHTML : "z = a / ((1.0 + exp(b - cx)) * (1.0 + exp(d - fy))) + Offset",
    dimensionality : 3,
    numberOfParameters : 6
};


exports.Simple = module.exports.Simple = {};

exports.Simple.SimpleEquation_01 = module.exports.Simple.SimpleEquation_01 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_01",
    extendedVersionString : "Default",
    displayName : "Simple Equation 01",
    displayHTML : "z = a*pow(x,b)*pow(y,c)",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_01_WithOffset = module.exports.Simple.SimpleEquation_01_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_01",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 01 With Offset",
    displayHTML : "z = a*pow(x,b)*pow(y,c) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_02 = module.exports.Simple.SimpleEquation_02 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_02",
    extendedVersionString : "Default",
    displayName : "Simple Equation 02",
    displayHTML : "z = x/(a+b*y)",
    dimensionality : 3,
    numberOfParameters : 2
};

exports.Simple.SimpleEquation_02_WithOffset = module.exports.Simple.SimpleEquation_02_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_02",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 02 With Offset",
    displayHTML : "z = x/(a+b*y) + Offset",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_03 = module.exports.Simple.SimpleEquation_03 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_03",
    extendedVersionString : "Default",
    displayName : "Simple Equation 03",
    displayHTML : "z = y/(a+b*x)",
    dimensionality : 3,
    numberOfParameters : 2
};

exports.Simple.SimpleEquation_03_WithOffset = module.exports.Simple.SimpleEquation_03_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_03",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 03 With Offset",
    displayHTML : "z = y/(a+b*x) + Offset",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_04 = module.exports.Simple.SimpleEquation_04 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_04",
    extendedVersionString : "Default",
    displayName : "Simple Equation 04",
    displayHTML : "z = a*pow(x,b*y)",
    dimensionality : 3,
    numberOfParameters : 2
};

exports.Simple.SimpleEquation_04_WithOffset = module.exports.Simple.SimpleEquation_04_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_04",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 04 With Offset",
    displayHTML : "z = a*pow(x,b*y) + Offset",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_05 = module.exports.Simple.SimpleEquation_05 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_05",
    extendedVersionString : "Default",
    displayName : "Simple Equation 05",
    displayHTML : "z = a*pow(y,b*x)",
    dimensionality : 3,
    numberOfParameters : 2
};

exports.Simple.SimpleEquation_05_WithOffset = module.exports.Simple.SimpleEquation_05_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_05",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 05 With Offset",
    displayHTML : "z = a*pow(y,b*x) + Offset",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_06 = module.exports.Simple.SimpleEquation_06 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_06",
    extendedVersionString : "Default",
    displayName : "Simple Equation 06",
    displayHTML : "z = a*pow(x,b/y)",
    dimensionality : 3,
    numberOfParameters : 2
};

exports.Simple.SimpleEquation_06_WithOffset = module.exports.Simple.SimpleEquation_06_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_06",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 06 With Offset",
    displayHTML : "z = a*pow(x,b/y) + Offset",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_07 = module.exports.Simple.SimpleEquation_07 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_07",
    extendedVersionString : "Default",
    displayName : "Simple Equation 07",
    displayHTML : "z = a*pow(y,b/x)",
    dimensionality : 3,
    numberOfParameters : 2
};

exports.Simple.SimpleEquation_07_WithOffset = module.exports.Simple.SimpleEquation_07_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_07",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 07 With Offset",
    displayHTML : "z = a*pow(y,b/x) + Offset",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_08 = module.exports.Simple.SimpleEquation_08 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_08",
    extendedVersionString : "Default",
    displayName : "Simple Equation 08",
    displayHTML : "z = a*x+b*pow(y,2.0)",
    dimensionality : 3,
    numberOfParameters : 2
};

exports.Simple.SimpleEquation_08_WithOffset = module.exports.Simple.SimpleEquation_08_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_08",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 08 With Offset",
    displayHTML : "z = a*x+b*pow(y,2.0) + Offset",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_09 = module.exports.Simple.SimpleEquation_09 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_09",
    extendedVersionString : "Default",
    displayName : "Simple Equation 09",
    displayHTML : "z = a*y+b*pow(x,2.0)",
    dimensionality : 3,
    numberOfParameters : 2
};

exports.Simple.SimpleEquation_09_WithOffset = module.exports.Simple.SimpleEquation_09_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_09",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 09 With Offset",
    displayHTML : "z = a*y+b*pow(x,2.0) + Offset",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_10 = module.exports.Simple.SimpleEquation_10 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_10",
    extendedVersionString : "Default",
    displayName : "Simple Equation 10",
    displayHTML : "z = x/(a+b*pow(y,2.0))",
    dimensionality : 3,
    numberOfParameters : 2
};

exports.Simple.SimpleEquation_10_WithOffset = module.exports.Simple.SimpleEquation_10_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_10",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 10 With Offset",
    displayHTML : "z = x/(a+b*pow(y,2.0)) + Offset",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_11 = module.exports.Simple.SimpleEquation_11 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_11",
    extendedVersionString : "Default",
    displayName : "Simple Equation 11",
    displayHTML : "z = y/(a+b*pow(x,2.0))",
    dimensionality : 3,
    numberOfParameters : 2
};

exports.Simple.SimpleEquation_11_WithOffset = module.exports.Simple.SimpleEquation_11_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_11",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 11 With Offset",
    displayHTML : "z = y/(a+b*pow(x,2.0)) + Offset",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_12 = module.exports.Simple.SimpleEquation_12 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_12",
    extendedVersionString : "Default",
    displayName : "Simple Equation 12",
    displayHTML : "z = a*pow(b,x)*pow(y,c)",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_12_WithOffset = module.exports.Simple.SimpleEquation_12_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_12",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 12 With Offset",
    displayHTML : "z = a*pow(b,x)*pow(y,c) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_13 = module.exports.Simple.SimpleEquation_13 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_13",
    extendedVersionString : "Default",
    displayName : "Simple Equation 13",
    displayHTML : "z = a*pow(b,y)*pow(x,c)",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_13_WithOffset = module.exports.Simple.SimpleEquation_13_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_13",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 13 With Offset",
    displayHTML : "z = a*pow(b,y)*pow(x,c) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_14 = module.exports.Simple.SimpleEquation_14 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_14",
    extendedVersionString : "Default",
    displayName : "Simple Equation 14",
    displayHTML : "z = a*pow(x*y,b)",
    dimensionality : 3,
    numberOfParameters : 2
};

exports.Simple.SimpleEquation_14_WithOffset = module.exports.Simple.SimpleEquation_14_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_14",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 14 With Offset",
    displayHTML : "z = a*pow(x*y,b) + Offset",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_15 = module.exports.Simple.SimpleEquation_15 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_15",
    extendedVersionString : "Default",
    displayName : "Simple Equation 15",
    displayHTML : "z = a*pow(x/y,b)",
    dimensionality : 3,
    numberOfParameters : 2
};

exports.Simple.SimpleEquation_15_WithOffset = module.exports.Simple.SimpleEquation_15_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_15",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 15 With Offset",
    displayHTML : "z = a*pow(x/y,b) + Offset",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_16 = module.exports.Simple.SimpleEquation_16 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_16",
    extendedVersionString : "Default",
    displayName : "Simple Equation 16",
    displayHTML : "z = a*(pow(b,1.0/x))*pow(y,c)",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_16_WithOffset = module.exports.Simple.SimpleEquation_16_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_16",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 16 With Offset",
    displayHTML : "z = a*(pow(b,1.0/x))*pow(y,c) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_17 = module.exports.Simple.SimpleEquation_17 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_17",
    extendedVersionString : "Default",
    displayName : "Simple Equation 17",
    displayHTML : "z = a*pow(b,1.0/y)*pow(x,c)",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_17_WithOffset = module.exports.Simple.SimpleEquation_17_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_17",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 17 With Offset",
    displayHTML : "z = a*pow(b,1.0/y)*pow(x,c) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_18 = module.exports.Simple.SimpleEquation_18 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_18",
    extendedVersionString : "Default",
    displayName : "Simple Equation 18",
    displayHTML : "z = a*pow(x/b,c)*exp(y/b)",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_18_WithOffset = module.exports.Simple.SimpleEquation_18_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_18",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 18 With Offset",
    displayHTML : "z = a*pow(x/b,c)*exp(y/b) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_19 = module.exports.Simple.SimpleEquation_19 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_19",
    extendedVersionString : "Default",
    displayName : "Simple Equation 19",
    displayHTML : "z = a*pow(y/b,c)*exp(x/b)",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_19_WithOffset = module.exports.Simple.SimpleEquation_19_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_19",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 19 With Offset",
    displayHTML : "z = a*pow(y/b,c)*exp(x/b) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_20 = module.exports.Simple.SimpleEquation_20 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_20",
    extendedVersionString : "Default",
    displayName : "Simple Equation 20",
    displayHTML : "z = a*pow(x,b+c*y)",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_20_WithOffset = module.exports.Simple.SimpleEquation_20_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_20",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 20 With Offset",
    displayHTML : "z = a*pow(x,b+c*y) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_21 = module.exports.Simple.SimpleEquation_21 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_21",
    extendedVersionString : "Default",
    displayName : "Simple Equation 21",
    displayHTML : "z = a*pow(y,b+c*x)",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_21_WithOffset = module.exports.Simple.SimpleEquation_21_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_21",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 21 With Offset",
    displayHTML : "z = a*pow(y,b+c*x) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_22 = module.exports.Simple.SimpleEquation_22 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_22",
    extendedVersionString : "Default",
    displayName : "Simple Equation 22",
    displayHTML : "z = a*pow(x,b+c/y)",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_22_WithOffset = module.exports.Simple.SimpleEquation_22_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_22",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 22 With Offset",
    displayHTML : "z = a*pow(x,b+c/y) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_23 = module.exports.Simple.SimpleEquation_23 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_23",
    extendedVersionString : "Default",
    displayName : "Simple Equation 23",
    displayHTML : "z = a*pow(y,b+c/x)",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_23_WithOffset = module.exports.Simple.SimpleEquation_23_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_23",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 23 With Offset",
    displayHTML : "z = a*pow(y,b+c/x) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_24 = module.exports.Simple.SimpleEquation_24 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_24",
    extendedVersionString : "Default",
    displayName : "Simple Equation 24",
    displayHTML : "z = a*pow(x,b+c*ln(y))",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_24_WithOffset = module.exports.Simple.SimpleEquation_24_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_24",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 24 With Offset",
    displayHTML : "z = a*pow(x,b+c*ln(y)) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_25 = module.exports.Simple.SimpleEquation_25 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_25",
    extendedVersionString : "Default",
    displayName : "Simple Equation 25",
    displayHTML : "z = a*pow(y,b+c*ln(x))",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_25_WithOffset = module.exports.Simple.SimpleEquation_25_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_25",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 25 With Offset",
    displayHTML : "z = a*pow(y,b+c*ln(x)) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_26 = module.exports.Simple.SimpleEquation_26 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_26",
    extendedVersionString : "Default",
    displayName : "Simple Equation 26",
    displayHTML : "z = a*pow(y,b+c/ln(x))",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_26_WithOffset = module.exports.Simple.SimpleEquation_26_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_26",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 26 With Offset",
    displayHTML : "z = a*pow(y,b+c/ln(x)) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_27 = module.exports.Simple.SimpleEquation_27 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_27",
    extendedVersionString : "Default",
    displayName : "Simple Equation 27",
    displayHTML : "z = a*pow(x,b+c/ln(y))",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_27_WithOffset = module.exports.Simple.SimpleEquation_27_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_27",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 27 With Offset",
    displayHTML : "z = a*pow(x,b+c/ln(y)) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_28 = module.exports.Simple.SimpleEquation_28 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_28",
    extendedVersionString : "Default",
    displayName : "Simple Equation 28",
    displayHTML : "z = a*exp(b*x+c*pow(y,2.0))",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_28_WithOffset = module.exports.Simple.SimpleEquation_28_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_28",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 28 With Offset",
    displayHTML : "z = a*exp(b*x+c*pow(y,2.0)) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_29 = module.exports.Simple.SimpleEquation_29 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_29",
    extendedVersionString : "Default",
    displayName : "Simple Equation 29",
    displayHTML : "z = a*exp(b*y+c*pow(x,2.0))",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_29_WithOffset = module.exports.Simple.SimpleEquation_29_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_29",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 29 With Offset",
    displayHTML : "z = a*exp(b*y+c*pow(x,2.0)) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_30 = module.exports.Simple.SimpleEquation_30 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_30",
    extendedVersionString : "Default",
    displayName : "Simple Equation 30",
    displayHTML : "z = a*exp(b/x+c*y)",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_30_WithOffset = module.exports.Simple.SimpleEquation_30_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_30",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 30 With Offset",
    displayHTML : "z = a*exp(b/x+c*y) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_31 = module.exports.Simple.SimpleEquation_31 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_31",
    extendedVersionString : "Default",
    displayName : "Simple Equation 31",
    displayHTML : "z = a*exp(b/y+c*x)",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_31_WithOffset = module.exports.Simple.SimpleEquation_31_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_31",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 31 With Offset",
    displayHTML : "z = a*exp(b/y+c*x) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_32 = module.exports.Simple.SimpleEquation_32 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_32",
    extendedVersionString : "Default",
    displayName : "Simple Equation 32",
    displayHTML : "z = (a+x)/(b+c*y)",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_32_WithOffset = module.exports.Simple.SimpleEquation_32_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_32",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 32 With Offset",
    displayHTML : "z = (a+x)/(b+c*y) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_33 = module.exports.Simple.SimpleEquation_33 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_33",
    extendedVersionString : "Default",
    displayName : "Simple Equation 33",
    displayHTML : "z = (a+y)/(b+c*x)",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_33_WithOffset = module.exports.Simple.SimpleEquation_33_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_33",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 33 With Offset",
    displayHTML : "z = (a+y)/(b+c*x) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_34 = module.exports.Simple.SimpleEquation_34 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_34",
    extendedVersionString : "Default",
    displayName : "Simple Equation 34",
    displayHTML : "z = (a+x)/(b+c*pow(y,2.0))",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_34_WithOffset = module.exports.Simple.SimpleEquation_34_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_34",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 34 With Offset",
    displayHTML : "z = (a+x)/(b+c*pow(y,2.0)) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_35 = module.exports.Simple.SimpleEquation_35 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_35",
    extendedVersionString : "Default",
    displayName : "Simple Equation 35",
    displayHTML : "z = (a+y)/(b+c*pow(x,2.0))",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_35_WithOffset = module.exports.Simple.SimpleEquation_35_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_35",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 35 With Offset",
    displayHTML : "z = (a+y)/(b+c*pow(x,2.0)) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_36 = module.exports.Simple.SimpleEquation_36 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_36",
    extendedVersionString : "Default",
    displayName : "Simple Equation 36",
    displayHTML : "z = a*(exp(b*x)-exp(c*y))",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_36_WithOffset = module.exports.Simple.SimpleEquation_36_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_36",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 36 With Offset",
    displayHTML : "z = a*(exp(b*x)-exp(c*y)) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_37 = module.exports.Simple.SimpleEquation_37 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_37",
    extendedVersionString : "Default",
    displayName : "Simple Equation 37",
    displayHTML : "z = a*pow(x,b*pow(y,c))",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_37_WithOffset = module.exports.Simple.SimpleEquation_37_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_37",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 37 With Offset",
    displayHTML : "z = a*pow(x,b*pow(y,c)) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_38 = module.exports.Simple.SimpleEquation_38 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_38",
    extendedVersionString : "Default",
    displayName : "Simple Equation 38",
    displayHTML : "z = a*pow(y,b*pow(x,c))",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_38_WithOffset = module.exports.Simple.SimpleEquation_38_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_38",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 38 With Offset",
    displayHTML : "z = a*pow(y,b*pow(x,c)) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_39 = module.exports.Simple.SimpleEquation_39 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_39",
    extendedVersionString : "Default",
    displayName : "Simple Equation 39",
    displayHTML : "z = x/(a+b*y+c*pow(y,0.5))",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_39_WithOffset = module.exports.Simple.SimpleEquation_39_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_39",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 39 With Offset",
    displayHTML : "z = x/(a+b*y+c*pow(y,0.5)) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_40 = module.exports.Simple.SimpleEquation_40 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_40",
    extendedVersionString : "Default",
    displayName : "Simple Equation 40",
    displayHTML : "z = y/(a+b*x+c*pow(x,0.5))",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_40_WithOffset = module.exports.Simple.SimpleEquation_40_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_40",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 40 With Offset",
    displayHTML : "z = y/(a+b*x+c*pow(x,0.5)) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_41 = module.exports.Simple.SimpleEquation_41 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_41",
    extendedVersionString : "Default",
    displayName : "Simple Equation 41",
    displayHTML : "z = exp(a+b/x+c*ln(y))",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_41_WithOffset = module.exports.Simple.SimpleEquation_41_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_41",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 41 With Offset",
    displayHTML : "z = exp(a+b/x+c*ln(y)) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_42 = module.exports.Simple.SimpleEquation_42 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_42",
    extendedVersionString : "Default",
    displayName : "Simple Equation 42",
    displayHTML : "z = exp(a+b/y+c*ln(x))",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_42_WithOffset = module.exports.Simple.SimpleEquation_42_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_42",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 42 With Offset",
    displayHTML : "z = exp(a+b/y+c*ln(x)) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_43 = module.exports.Simple.SimpleEquation_43 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_43",
    extendedVersionString : "Default",
    displayName : "Simple Equation 43",
    displayHTML : "z = a*pow(x,b)*ln(y+c)",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_43_WithOffset = module.exports.Simple.SimpleEquation_43_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_43",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 43 With Offset",
    displayHTML : "z = a*pow(x,b)*ln(y+c) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Simple.SimpleEquation_44 = module.exports.Simple.SimpleEquation_44 = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_44",
    extendedVersionString : "Default",
    displayName : "Simple Equation 44",
    displayHTML : "z = a*pow(y,b)*ln(x+c)",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Simple.SimpleEquation_44_WithOffset = module.exports.Simple.SimpleEquation_44_WithOffset = {
    pythonModuleName : "Simple",
    pythonClassName : "SimpleEquation_44",
    extendedVersionString : "Offset",
    displayName : "Simple Equation 44 With Offset",
    displayHTML : "z = a*pow(y,b)*ln(x+c) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};


exports.Spline = module.exports.Spline = {};


exports.TaylorSeries = module.exports.TaylorSeries = {};

exports.TaylorSeries.TaylorA = module.exports.TaylorSeries.TaylorA = {
    pythonModuleName : "TaylorSeries",
    pythonClassName : "TaylorA",
    extendedVersionString : "Default",
    displayName : "Taylor Series A",
    displayHTML : "z = a + bx + cy + dx<sup>2</sup> + fy<sup>2</sup> + gxy",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.TaylorSeries.TaylorB = module.exports.TaylorSeries.TaylorB = {
    pythonModuleName : "TaylorSeries",
    pythonClassName : "TaylorB",
    extendedVersionString : "Default",
    displayName : "Taylor Series B",
    displayHTML : "z = a + b*ln(x) + cy + d*ln(x)<sup>2</sup> + fy<sup>2</sup> + g*ln(x)*y",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.TaylorSeries.TaylorC = module.exports.TaylorSeries.TaylorC = {
    pythonModuleName : "TaylorSeries",
    pythonClassName : "TaylorC",
    extendedVersionString : "Default",
    displayName : "Taylor Series C",
    displayHTML : "z = a + bx + c*ln(y) + dx<sup>2</sup> + f*ln(y)<sup>2</sup> + g*x*ln(y)",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.TaylorSeries.TaylorD = module.exports.TaylorSeries.TaylorD = {
    pythonModuleName : "TaylorSeries",
    pythonClassName : "TaylorD",
    extendedVersionString : "Default",
    displayName : "Taylor Series D",
    displayHTML : "z = a + b*ln(x) + c*ln(y) + d*ln(x)<sup>2</sup> + f*ln(y)<sup>2</sup> + g*ln(x)*ln(y)",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.TaylorSeries.TaylorE = module.exports.TaylorSeries.TaylorE = {
    pythonModuleName : "TaylorSeries",
    pythonClassName : "TaylorE",
    extendedVersionString : "Default",
    displayName : "Taylor Series E",
    displayHTML : "z = a + b/x + cy + d/x<sup>2</sup> + fy<sup>2</sup> + gy/x",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.TaylorSeries.TaylorF = module.exports.TaylorSeries.TaylorF = {
    pythonModuleName : "TaylorSeries",
    pythonClassName : "TaylorF",
    extendedVersionString : "Default",
    displayName : "Taylor Series F",
    displayHTML : "z = a + b/ln(x) + cy + d/ln(x)<sup>2</sup> + fy<sup>2</sup> + gy/ln(x)",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.TaylorSeries.TaylorG = module.exports.TaylorSeries.TaylorG = {
    pythonModuleName : "TaylorSeries",
    pythonClassName : "TaylorG",
    extendedVersionString : "Default",
    displayName : "Taylor Series G",
    displayHTML : "z = a + b/x + c*ln(y) + d/x<sup>2</sup> + f*ln(y)<sup>2</sup> + g*ln(y)/x",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.TaylorSeries.TaylorH = module.exports.TaylorSeries.TaylorH = {
    pythonModuleName : "TaylorSeries",
    pythonClassName : "TaylorH",
    extendedVersionString : "Default",
    displayName : "Taylor Series H",
    displayHTML : "z = a + b/ln(x) + c*ln(y) + d/ln(x)<sup>2</sup> + f*ln(y)<sup>2</sup> + g*ln(y)/ln(x)",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.TaylorSeries.TaylorI = module.exports.TaylorSeries.TaylorI = {
    pythonModuleName : "TaylorSeries",
    pythonClassName : "TaylorI",
    extendedVersionString : "Default",
    displayName : "Taylor Series I",
    displayHTML : "z = a + bx + c/y + dx<sup>2</sup> + f/y<sup>2</sup> + gx/y",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.TaylorSeries.TaylorJ = module.exports.TaylorSeries.TaylorJ = {
    pythonModuleName : "TaylorSeries",
    pythonClassName : "TaylorJ",
    extendedVersionString : "Default",
    displayName : "Taylor Series J",
    displayHTML : "z = a + b*ln(x) + c/y + d*ln(x)<sup>2</sup> + f/y<sup>2</sup> + g*ln(x)/y",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.TaylorSeries.TaylorK = module.exports.TaylorSeries.TaylorK = {
    pythonModuleName : "TaylorSeries",
    pythonClassName : "TaylorK",
    extendedVersionString : "Default",
    displayName : "Taylor Series K",
    displayHTML : "z = a + bx + c/ln(y) + dx<sup>2</sup> + f/ln(y)<sup>2</sup> + gx/ln(y)",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.TaylorSeries.TaylorL = module.exports.TaylorSeries.TaylorL = {
    pythonModuleName : "TaylorSeries",
    pythonClassName : "TaylorL",
    extendedVersionString : "Default",
    displayName : "Taylor Series L",
    displayHTML : "z = a + b*ln(x) + c/ln(y) + d*ln(x)<sup>2</sup> + f/ln(y)<sup>2</sup> + g*ln(x)/ln(y)",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.TaylorSeries.TaylorM = module.exports.TaylorSeries.TaylorM = {
    pythonModuleName : "TaylorSeries",
    pythonClassName : "TaylorM",
    extendedVersionString : "Default",
    displayName : "Taylor Series M",
    displayHTML : "z = a + b/x + c/y + d/x<sup>2</sup> + f/y<sup>2</sup> + g/(xy)",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.TaylorSeries.TaylorN = module.exports.TaylorSeries.TaylorN = {
    pythonModuleName : "TaylorSeries",
    pythonClassName : "TaylorN",
    extendedVersionString : "Default",
    displayName : "Taylor Series N",
    displayHTML : "z = a + b/ln(x) + c/y + d/ln(x)<sup>2</sup> + f/y<sup>2</sup> + g/(ln(x)*y)",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.TaylorSeries.TaylorO = module.exports.TaylorSeries.TaylorO = {
    pythonModuleName : "TaylorSeries",
    pythonClassName : "TaylorO",
    extendedVersionString : "Default",
    displayName : "Taylor Series O",
    displayHTML : "z = a + b/x + c/ln(y) + d/x<sup>2</sup> + f/ln(y)<sup>2</sup> + g/(x*ln(y))",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.TaylorSeries.TaylorP = module.exports.TaylorSeries.TaylorP = {
    pythonModuleName : "TaylorSeries",
    pythonClassName : "TaylorP",
    extendedVersionString : "Default",
    displayName : "Taylor Series P",
    displayHTML : "z = a + b/ln(x) + c/ln(y) + d/ln(x)<sup>2</sup> + f/ln(y)<sup>2</sup> + g/(ln(x)*ln(y))",
    dimensionality : 3,
    numberOfParameters : 6
};


exports.Trigonometric = module.exports.Trigonometric = {};

exports.Trigonometric.CoshXY = module.exports.Trigonometric.CoshXY = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "CoshXY",
    extendedVersionString : "Default",
    displayName : "Cosh XY [radians]",
    displayHTML : "z = amplitude * cosh(pi * (xy - center) / width)",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Trigonometric.CoshXY_WithOffset = module.exports.Trigonometric.CoshXY_WithOffset = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "CoshXY",
    extendedVersionString : "Offset",
    displayName : "Cosh XY [radians] With Offset",
    displayHTML : "z = amplitude * cosh(pi * (xy - center) / width) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Trigonometric.CoshX_Plus_CoshY = module.exports.Trigonometric.CoshX_Plus_CoshY = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "CoshX_Plus_CoshY",
    extendedVersionString : "Default",
    displayName : "Cosh X Plus Cosh Y [radians]",
    displayHTML : "z = amplitude_x * cosh(pi * (x - center_x) / width_x) + amplitude_y * cosh(pi * (y - center_y) / width_y)",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Trigonometric.CoshX_Plus_CoshY_WithOffset = module.exports.Trigonometric.CoshX_Plus_CoshY_WithOffset = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "CoshX_Plus_CoshY",
    extendedVersionString : "Offset",
    displayName : "Cosh X Plus Cosh Y [radians] With Offset",
    displayHTML : "z = amplitude_x * cosh(pi * (x - center_x) / width_x) + amplitude_y * cosh(pi * (y - center_y) / width_y) + Offset",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Trigonometric.CoshX_Plus_SineY = module.exports.Trigonometric.CoshX_Plus_SineY = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "CoshX_Plus_SineY",
    extendedVersionString : "Default",
    displayName : "Cosh X Plus Sine Y [radians]",
    displayHTML : "z = amplitude_x * cosh(pi * (x - center_x) / width_x) + amplitude_y * sin(pi * (y - center_y) / width_y)",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Trigonometric.CoshX_Plus_SineY_WithOffset = module.exports.Trigonometric.CoshX_Plus_SineY_WithOffset = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "CoshX_Plus_SineY",
    extendedVersionString : "Offset",
    displayName : "Cosh X Plus Sine Y [radians] With Offset",
    displayHTML : "z = amplitude_x * cosh(pi * (x - center_x) / width_x) + amplitude_y * sin(pi * (y - center_y) / width_y) + Offset",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Trigonometric.CoshX_Plus_TangentY = module.exports.Trigonometric.CoshX_Plus_TangentY = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "CoshX_Plus_TangentY",
    extendedVersionString : "Default",
    displayName : "Cosh X Plus Tangent Y [radians]",
    displayHTML : "z = amplitude_x * cosh(pi * (x - center_x) / width_x) + amplitude_y * tan(pi * (y - center_y) / width_y)",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Trigonometric.CoshX_Plus_TangentY_WithOffset = module.exports.Trigonometric.CoshX_Plus_TangentY_WithOffset = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "CoshX_Plus_TangentY",
    extendedVersionString : "Offset",
    displayName : "Cosh X Plus Tangent Y [radians] With Offset",
    displayHTML : "z = amplitude_x * cosh(pi * (x - center_x) / width_x) + amplitude_y * tan(pi * (y - center_y) / width_y) + Offset",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Trigonometric.CoshX_Times_CoshY = module.exports.Trigonometric.CoshX_Times_CoshY = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "CoshX_Times_CoshY",
    extendedVersionString : "Default",
    displayName : "Cosh X Times Cosh Y[radians]",
    displayHTML : "z = amplitude * cosh(pi * (x - center_x) / width_x) * cosh(pi * (y - center_y) / width_y)",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.Trigonometric.CoshX_Times_CoshY_WithOffset = module.exports.Trigonometric.CoshX_Times_CoshY_WithOffset = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "CoshX_Times_CoshY",
    extendedVersionString : "Offset",
    displayName : "Cosh X Times Cosh Y[radians] With Offset",
    displayHTML : "z = amplitude * cosh(pi * (x - center_x) / width_x) * cosh(pi * (y - center_y) / width_y) + Offset",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Trigonometric.CoshX_Times_SineY = module.exports.Trigonometric.CoshX_Times_SineY = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "CoshX_Times_SineY",
    extendedVersionString : "Default",
    displayName : "Cosh X Times Sine Y [radians]",
    displayHTML : "z = amplitude * cosh(pi * (x - center_x) / width_x) * sin(pi * (y - center_y) / width_y)",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.Trigonometric.CoshX_Times_SineY_WithOffset = module.exports.Trigonometric.CoshX_Times_SineY_WithOffset = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "CoshX_Times_SineY",
    extendedVersionString : "Offset",
    displayName : "Cosh X Times Sine Y [radians] With Offset",
    displayHTML : "z = amplitude * cosh(pi * (x - center_x) / width_x) * sin(pi * (y - center_y) / width_y) + Offset",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Trigonometric.CoshX_Times_TangentY = module.exports.Trigonometric.CoshX_Times_TangentY = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "CoshX_Times_TangentY",
    extendedVersionString : "Default",
    displayName : "Cosh X Times Tangent Y [radians]",
    displayHTML : "z = amplitude * cosh(pi * (x - center_x) / width_x) * tan(pi * (y - center_y) / width_y)",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.Trigonometric.CoshX_Times_TangentY_WithOffset = module.exports.Trigonometric.CoshX_Times_TangentY_WithOffset = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "CoshX_Times_TangentY",
    extendedVersionString : "Offset",
    displayName : "Cosh X Times Tangent Y [radians] With Offset",
    displayHTML : "z = amplitude * cosh(pi * (x - center_x) / width_x) * tan(pi * (y - center_y) / width_y) + Offset",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Trigonometric.RezaCustomOne = module.exports.Trigonometric.RezaCustomOne = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "RezaCustomOne",
    extendedVersionString : "Default",
    displayName : "Reza's Custom Equation One [radians]",
    displayHTML : "z = (cos(a*x - b*y) + sin(c*x - d*y))<sup>n</sup> - (cos(f*x - g*y) + sin(h*x- i*y))<sup>n</sup>",
    dimensionality : 3,
    numberOfParameters : 9
};

exports.Trigonometric.RezaCustomOne_WithOffset = module.exports.Trigonometric.RezaCustomOne_WithOffset = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "RezaCustomOne",
    extendedVersionString : "Offset",
    displayName : "Reza's Custom Equation One [radians] With Offset",
    displayHTML : "z = (cos(a*x - b*y) + sin(c*x - d*y))<sup>n</sup> - (cos(f*x - g*y) + sin(h*x- i*y))<sup>n</sup> + Offset",
    dimensionality : 3,
    numberOfParameters : 10
};

exports.Trigonometric.RezaCustomTwo = module.exports.Trigonometric.RezaCustomTwo = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "RezaCustomTwo",
    extendedVersionString : "Default",
    displayName : "Reza's Custom Equation Two [radians]",
    displayHTML : "z = abs(cos((A*(x+B)) + C*(y+D))) + abs(cos((A*(x+B)) - C*(y+D))) - (sin(E*x+F))<sup>2</sup> - (sin(E*y+G))<sup>2</sup>",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Trigonometric.RezaCustomTwo_WithOffset = module.exports.Trigonometric.RezaCustomTwo_WithOffset = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "RezaCustomTwo",
    extendedVersionString : "Offset",
    displayName : "Reza's Custom Equation Two [radians] With Offset",
    displayHTML : "z = abs(cos((A*(x+B)) + C*(y+D))) + abs(cos((A*(x+B)) - C*(y+D))) - (sin(E*x+F))<sup>2</sup> - (sin(E*y+G))<sup>2</sup> + Offset",
    dimensionality : 3,
    numberOfParameters : 8
};

exports.Trigonometric.SineXY = module.exports.Trigonometric.SineXY = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "SineXY",
    extendedVersionString : "Default",
    displayName : "Sine XY [radians]",
    displayHTML : "z = amplitude * sin(pi * (xy - center) / width)",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Trigonometric.SineXY_WithOffset = module.exports.Trigonometric.SineXY_WithOffset = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "SineXY",
    extendedVersionString : "Offset",
    displayName : "Sine XY [radians] With Offset",
    displayHTML : "z = amplitude * sin(pi * (xy - center) / width) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Trigonometric.SineX_Plus_CoshY = module.exports.Trigonometric.SineX_Plus_CoshY = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "SineX_Plus_CoshY",
    extendedVersionString : "Default",
    displayName : "Sine X Plus Cosh Y [radians]",
    displayHTML : "z = amplitude_x * sin(pi * (x - center_x) / width_x) + amplitude_y * cosh(pi * (y - center_y) / width_y)",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Trigonometric.SineX_Plus_CoshY_WithOffset = module.exports.Trigonometric.SineX_Plus_CoshY_WithOffset = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "SineX_Plus_CoshY",
    extendedVersionString : "Offset",
    displayName : "Sine X Plus Cosh Y [radians] With Offset",
    displayHTML : "z = amplitude_x * sin(pi * (x - center_x) / width_x) + amplitude_y * cosh(pi * (y - center_y) / width_y) + Offset",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Trigonometric.SineX_Plus_SineY = module.exports.Trigonometric.SineX_Plus_SineY = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "SineX_Plus_SineY",
    extendedVersionString : "Default",
    displayName : "Sine X Plus Sine Y [radians]",
    displayHTML : "z = amplitude_x * sin(pi * (x - center_x) / width_x) + amplitude_y * sin(pi * (y - center_y) / width_y)",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Trigonometric.SineX_Plus_SineY_WithOffset = module.exports.Trigonometric.SineX_Plus_SineY_WithOffset = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "SineX_Plus_SineY",
    extendedVersionString : "Offset",
    displayName : "Sine X Plus Sine Y [radians] With Offset",
    displayHTML : "z = amplitude_x * sin(pi * (x - center_x) / width_x) + amplitude_y * sin(pi * (y - center_y) / width_y) + Offset",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Trigonometric.SineX_Plus_TangentY = module.exports.Trigonometric.SineX_Plus_TangentY = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "SineX_Plus_TangentY",
    extendedVersionString : "Default",
    displayName : "Sine X Plus Tangent Y [radians]",
    displayHTML : "z = amplitude_x * sin(pi * (x - center_x) / width_x) + amplitude_y * tan(pi * (y - center_y) / width_y)",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Trigonometric.SineX_Plus_TangentY_WithOffset = module.exports.Trigonometric.SineX_Plus_TangentY_WithOffset = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "SineX_Plus_TangentY",
    extendedVersionString : "Offset",
    displayName : "Sine X Plus Tangent Y [radians] With Offset",
    displayHTML : "z = amplitude_x * sin(pi * (x - center_x) / width_x) + amplitude_y * tan(pi * (y - center_y) / width_y) + Offset",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Trigonometric.SineX_Times_CoshY = module.exports.Trigonometric.SineX_Times_CoshY = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "SineX_Times_CoshY",
    extendedVersionString : "Default",
    displayName : "Sine X Times Cosh Y [radians]",
    displayHTML : "z = amplitude * sine(pi * (x - center_x) / width_x) * cosh(pi * (y - center_y) / width_y)",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.Trigonometric.SineX_Times_CoshY_WithOffset = module.exports.Trigonometric.SineX_Times_CoshY_WithOffset = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "SineX_Times_CoshY",
    extendedVersionString : "Offset",
    displayName : "Sine X Times Cosh Y [radians] With Offset",
    displayHTML : "z = amplitude * sine(pi * (x - center_x) / width_x) * cosh(pi * (y - center_y) / width_y) + Offset",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Trigonometric.SineX_Times_SineY = module.exports.Trigonometric.SineX_Times_SineY = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "SineX_Times_SineY",
    extendedVersionString : "Default",
    displayName : "Sine X Times Sine Y [radians]",
    displayHTML : "z = amplitude * sin(pi * (x - center_x) / width_x) * sin(pi * (y - center_y) / width_y)",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.Trigonometric.SineX_Times_SineY_WithOffset = module.exports.Trigonometric.SineX_Times_SineY_WithOffset = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "SineX_Times_SineY",
    extendedVersionString : "Offset",
    displayName : "Sine X Times Sine Y [radians] With Offset",
    displayHTML : "z = amplitude * sin(pi * (x - center_x) / width_x) * sin(pi * (y - center_y) / width_y) + Offset",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Trigonometric.SineX_Times_TangentY = module.exports.Trigonometric.SineX_Times_TangentY = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "SineX_Times_TangentY",
    extendedVersionString : "Default",
    displayName : "Sine X Times Tangent Y [radians]",
    displayHTML : "z = amplitude * sin(pi * (x - center_x) / width_x) * tan(pi * (y - center_y) / width_y)",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.Trigonometric.SineX_Times_TangentY_WithOffset = module.exports.Trigonometric.SineX_Times_TangentY_WithOffset = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "SineX_Times_TangentY",
    extendedVersionString : "Offset",
    displayName : "Sine X Times Tangent Y [radians] With Offset",
    displayHTML : "z = amplitude * sin(pi * (x - center_x) / width_x) * tan(pi * (y - center_y) / width_y) + Offset",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Trigonometric.TangentXY = module.exports.Trigonometric.TangentXY = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "TangentXY",
    extendedVersionString : "Default",
    displayName : "Tangent XY [radians]",
    displayHTML : "z = amplitude * tan(pi * (xy - center) / width)",
    dimensionality : 3,
    numberOfParameters : 3
};

exports.Trigonometric.TangentXY_WithOffset = module.exports.Trigonometric.TangentXY_WithOffset = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "TangentXY",
    extendedVersionString : "Offset",
    displayName : "Tangent XY [radians] With Offset",
    displayHTML : "z = amplitude * tan(pi * (xy - center) / width) + Offset",
    dimensionality : 3,
    numberOfParameters : 4
};

exports.Trigonometric.TangentX_Plus_CoshY = module.exports.Trigonometric.TangentX_Plus_CoshY = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "TangentX_Plus_CoshY",
    extendedVersionString : "Default",
    displayName : "Tangent X Plus Cosh Y [radians]",
    displayHTML : "z = amplitude_x * tan(pi * (x - center_x) / width_x) + amplitude_y * cosh(pi * (y - center_y) / width_y)",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Trigonometric.TangentX_Plus_CoshY_WithOffset = module.exports.Trigonometric.TangentX_Plus_CoshY_WithOffset = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "TangentX_Plus_CoshY",
    extendedVersionString : "Offset",
    displayName : "Tangent X Plus Cosh Y [radians] With Offset",
    displayHTML : "z = amplitude_x * tan(pi * (x - center_x) / width_x) + amplitude_y * cosh(pi * (y - center_y) / width_y) + Offset",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Trigonometric.TangentX_Plus_SineY = module.exports.Trigonometric.TangentX_Plus_SineY = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "TangentX_Plus_SineY",
    extendedVersionString : "Default",
    displayName : "Tangent X Plus Sine Y [radians]",
    displayHTML : "z = amplitude_x * tan(pi * (x - center_x) / width_x) + amplitude_y * sin(pi * (y - center_y) / width_y)",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Trigonometric.TangentX_Plus_SineY_WithOffset = module.exports.Trigonometric.TangentX_Plus_SineY_WithOffset = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "TangentX_Plus_SineY",
    extendedVersionString : "Offset",
    displayName : "Tangent X Plus Sine Y [radians] With Offset",
    displayHTML : "z = amplitude_x * tan(pi * (x - center_x) / width_x) + amplitude_y * sin(pi * (y - center_y) / width_y) + Offset",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Trigonometric.TangentX_Plus_TangentY = module.exports.Trigonometric.TangentX_Plus_TangentY = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "TangentX_Plus_TangentY",
    extendedVersionString : "Default",
    displayName : "Tangent X Plus Tangent Y [radians]",
    displayHTML : "z = amplitude_x * tan(pi * (x - center_x) / width_x) + amplitude_y * tan(pi * (y - center_y) / width_y)",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Trigonometric.TangentX_Plus_TangentY_WithOffset = module.exports.Trigonometric.TangentX_Plus_TangentY_WithOffset = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "TangentX_Plus_TangentY",
    extendedVersionString : "Offset",
    displayName : "Tangent X Plus Tangent Y [radians] With Offset",
    displayHTML : "z = amplitude_x * tan(pi * (x - center_x) / width_x) + amplitude_y * tan(pi * (y - center_y) / width_y) + Offset",
    dimensionality : 3,
    numberOfParameters : 7
};

exports.Trigonometric.TangentX_Times_CoshY = module.exports.Trigonometric.TangentX_Times_CoshY = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "TangentX_Times_CoshY",
    extendedVersionString : "Default",
    displayName : "Tangent X Times Cosh Y [radians]",
    displayHTML : "z = amplitude * tan(pi * (x - center_x) / width_x) * cosh(pi * (y - center_y) / width_y)",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.Trigonometric.TangentX_Times_CoshY_WithOffset = module.exports.Trigonometric.TangentX_Times_CoshY_WithOffset = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "TangentX_Times_CoshY",
    extendedVersionString : "Offset",
    displayName : "Tangent X Times Cosh Y [radians] With Offset",
    displayHTML : "z = amplitude * tan(pi * (x - center_x) / width_x) * cosh(pi * (y - center_y) / width_y) + Offset",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Trigonometric.TangentX_Times_SineY = module.exports.Trigonometric.TangentX_Times_SineY = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "TangentX_Times_SineY",
    extendedVersionString : "Default",
    displayName : "Tangent X Times Sine Y [radians]",
    displayHTML : "z = amplitude * tan(pi * (x - center_x) / width_x) * sin(pi * (y - center_y) / width_y)",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.Trigonometric.TangentX_Times_SineY_WithOffset = module.exports.Trigonometric.TangentX_Times_SineY_WithOffset = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "TangentX_Times_SineY",
    extendedVersionString : "Offset",
    displayName : "Tangent X Times Sine Y [radians] With Offset",
    displayHTML : "z = amplitude * tan(pi * (x - center_x) / width_x) * sin(pi * (y - center_y) / width_y) + Offset",
    dimensionality : 3,
    numberOfParameters : 6
};

exports.Trigonometric.TangentX_Times_TangentY = module.exports.Trigonometric.TangentX_Times_TangentY = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "TangentX_Times_TangentY",
    extendedVersionString : "Default",
    displayName : "Tangent X Times Tangent Y [radians]",
    displayHTML : "z = amplitude * tan(pi * (x - center_x) / width_x) * tan(pi * (y - center_y) / width_y)",
    dimensionality : 3,
    numberOfParameters : 5
};

exports.Trigonometric.TangentX_Times_TangentY_WithOffset = module.exports.Trigonometric.TangentX_Times_TangentY_WithOffset = {
    pythonModuleName : "Trigonometric",
    pythonClassName : "TangentX_Times_TangentY",
    extendedVersionString : "Offset",
    displayName : "Tangent X Times Tangent Y [radians] With Offset",
    displayHTML : "z = amplitude * tan(pi * (x - center_x) / width_x) * tan(pi * (y - center_y) / width_y) + Offset",
    dimensionality : 3,
    numberOfParameters : 6
};


exports.UserDefinedFunction = module.exports.UserDefinedFunction = {};

