..
  This file has been created using examples/List/DocListStandardEquations.py.
  Rerun that example and replace this file created by that script.

2D Models
---------

Astrophysics
^^^^^^^^^^^^

* King 14 (``King_14``)

  * King 14

    :math:`f{(x)} = k * {[}1/\sqrt{(1 + {(x/r\_c)} ^2)} - 1/\sqrt{(1 + {(r\_t/r\_c)} ^2)}{]} ^2`

    [k, r_c, r_t]

  * King 14 With Offset

    :math:`f{(x)} = k * {[}1/\sqrt{(1 + {(x/r\_c)} ^2)} - 1/\sqrt{(1 + {(r\_t/r\_c)} ^2)}{]} ^2 + \text{Offset}`

    [k, r_c, r_t, Offset]


BioScience
^^^^^^^^^^

* Aphid Population Growth (``AphidPopulationGrowth``)

  * Aphid Population Growth

    :math:`N{(t)} = a * \exp{(bt)} * {(1 + c * \exp{(bt)})}^{-2}`

    [a, b, c]

  * Aphid Population Growth With Offset

    :math:`N{(t)} = a * \exp{(bt)} * {(1 + c * \exp{(bt)})}^{-2} + \text{Offset}`

    [a, b, c, Offset]

* von Bertalanffy Growth (``BertalanffyGrowth``)

  * von Bertalanffy Growth

    :math:`L{(t)} = L_{inf} * {(1.0 - \exp{(-K *{(t-t_{zero})})})}`

    [Linf, K, tzero]

  * von Bertalanffy Growth With Offset

    :math:`L{(t)} = L_{inf} * {(1.0 - \exp{(-K *{(t-t_{zero})})})} + \text{Offset}`

    [Linf, K, tzero, Offset]

* Beverton-Holt A (``BevertonHoltA``)

  * Beverton-Holt A

    :math:`y = r / {(1 + {({(r-1)}/K)} * x)}`

    [r, K]

  * Beverton-Holt A With Offset

    :math:`y = r / {(1 + {({(r-1)}/K)} * x)} + \text{Offset}`

    [r, K, Offset]

* Beverton-Holt B (``BevertonHoltB``)

  * Beverton-Holt B

    :math:`y = rx / {(1 + {({(r-1)}/K)} * x)}`

    [r, K]

  * Beverton-Holt B With Offset

    :math:`y = rx / {(1 + {({(r-1)}/K)} * x)} + \text{Offset}`

    [r, K, Offset]

* BioScience A (``BioScienceA``)

  * BioScience A

    :math:`y = a * {(1.0 - {(b * c^{x})})}`

    [a, b, c]

  * BioScience A With Offset

    :math:`y = a * {(1.0 - {(b * c^{x})})} + \text{Offset}`

    [a, b, c, Offset]

* BioScience B (``BioScienceB``)

  * BioScience B

    :math:`y = a * {(1.0 -{(1.0 + {(x/b)}^{c})}^{-1.0 *d})}`

    [a, b, c, d]

  * BioScience B With Offset

    :math:`y = a * {(1.0 -{(1.0 + {(x/b)}^{c})}^{-1.0 *d})} + \text{Offset}`

    [a, b, c, d, Offset]

* Cellular Conductance (``CellularConductance``)

  * Cellular Conductance

    :math:`g = p3/{(1+\exp{({(v-p1)}/p2)})} + p4*\exp{({(v-45)}/p5)}`

    [p1, p2, p3, p4, p5]

  * Cellular Conductance With Offset

    :math:`g = p3/{(1+\exp{({(v-p1)}/p2)})} + p4*\exp{({(v-45)}/p5)} + \text{Offset}`

    [p1, p2, p3, p4, p5, Offset]

* Derek Duncan Custom Equation (``DerekDuncanCustomEquation``)

  * Derek Duncan Custom Equation

    :math:`y = a / {(1 + \exp{(-1/b*{(x-c)})})}^{d}`

    [a, b, c, d]

  * Derek Duncan Custom Equation With Offset

    :math:`y = a / {(1 + \exp{(-1/b*{(x-c)})})}^{d} + \text{Offset}`

    [a, b, c, d, Offset]

* Dose-Response A (``DoseResponseA``)

  * Dose-Response A

    :math:`y = b + {(a-b)} / {(1 + 10^{x-c})}`

    [a, b, c]

* Dose-Response B (``DoseResponseB``)

  * Dose-Response B

    :math:`y = b + {(a-b)} / {(1 + 10^{c-x})}`

    [a, b, c]

* Dose-Response C (``DoseResponseC``)

  * Dose-Response C

    :math:`y = b + {(a-b)} / {(1 + 10^{d*{(x-c)}})}`

    [a, b, c, d]

* Dose-Response D (``DoseResponseD``)

  * Dose-Response D

    :math:`y = b + {(a-b)} / {(1 + 10^{d*{(c-x)}})}`

    [a, b, c, d]

* Dose-Response E (``DoseResponseE``)

  * Dose-Response E

    :math:`y = b + {(a-b)} / {(1 + {(x/c)}^{d})}`

    [a, b, c, d]

* Generalized Negative Exponential (``GeneralizedNegativeExponential``)

  * Generalized Negative Exponential

    :math:`y = a * {(1.0 - \exp{(-bx)})}^{c}`

    [a, b, c]

  * Generalized Negative Exponential With Offset

    :math:`y = a * {(1.0 - \exp{(-bx)})}^{c} + \text{Offset}`

    [a, b, c, Offset]

* Generalized Product Accumulation (``GeneralizedProductAccumulation``)

  * Generalized Product Accumulation

    :math:`y = a{(b-x)} / {(c + {(b-x)})} + d{(b-x)} + f`

    [a, b, c, d, f]

* Generalized Substrate Depletion (``GeneralizedSubstrateDepletion``)

  * Generalized Substrate Depletion

    :math:`y = ax / {(b + x)} - cx - d`

    [a, b, c, d]

* High-Low Affinity (``HighLowAffinity``)

  * High-Low Affinity

    :math:`y = abx / {(1+bx)}`

    [a, b]

  * High-Low Affinity With Offset

    :math:`y = abx / {(1+bx)} + \text{Offset}`

    [a, b, Offset]

* High-Low Affinity Double (``HighLowAffinityDouble``)

  * High-Low Affinity Double

    :math:`y = abx / {(1+bx)} + cdx / {(1+dx)}`

    [a, b, c, d]

  * High-Low Affinity Double With Offset

    :math:`y = abx / {(1+bx)} + cdx / {(1+dx)} + \text{Offset}`

    [a, b, c, d, Offset]

* High-Low Affinity Isotope Displacement ([Hot] subsumed) (``HighLowAffinityIsotopeDisplacement``)

  * High-Low Affinity Isotope Displacement ([Hot] subsumed)

    :math:`y = ab / {(1+bx)}`

    [a, b]

  * High-Low Affinity Isotope Displacement ([Hot] subsumed) With Offset

    :math:`y = ab / {(1+bx)} + \text{Offset}`

    [a, b, Offset]

* High-Low Affinity Double Isotope Displacement ([Hot] subsumed) (``HighLowAffinityIsotopeDisplacementDouble``)

  * High-Low Affinity Double Isotope Displacement ([Hot] subsumed)

    :math:`y = ab / {(1+bx)} + cd / {(1+dx)}`

    [a, b, c, d]

  * High-Low Affinity Double Isotope Displacement ([Hot] subsumed) With Offset

    :math:`y = ab / {(1+bx)} + cd / {(1+dx)} + \text{Offset}`

    [a, b, c, d, Offset]

* Hyperbolic A (``HyperbolicA``)

  * Hyperbolic A

    :math:`y = {(a + x)} / {(b + x)}`

    [a, b]

  * Hyperbolic A With Offset

    :math:`y = {(a + x)} / {(b + x)} + \text{Offset}`

    [a, b, Offset]

* Hyperbolic B (``HyperbolicB``)

  * Hyperbolic B

    :math:`y = {(a + bx)} / {(c + x)}`

    [a, b, c]

  * Hyperbolic B With Offset

    :math:`y = {(a + bx)} / {(c + x)} + \text{Offset}`

    [a, b, c, Offset]

* Hyperbolic C (``HyperbolicC``)

  * Hyperbolic C

    :math:`y = {(a + x)} / {(b + cx)}`

    [a, b, c]

  * Hyperbolic C With Offset

    :math:`y = {(a + x)} / {(b + cx)} + \text{Offset}`

    [a, b, c, Offset]

* Hyperbolic D (``HyperbolicD``)

  * Hyperbolic D

    :math:`y = {(a + bx)} / {(c + dx)}`

    [a, b, c, d]

  * Hyperbolic D With Offset

    :math:`y = {(a + bx)} / {(c + dx)} + \text{Offset}`

    [a, b, c, d, Offset]

* Hyperbolic E (``HyperbolicE``)

  * Hyperbolic E

    :math:`y = ax / {(b + x)}`

    [a, b]

  * Hyperbolic E With Offset

    :math:`y = ax / {(b + x)} + \text{Offset}`

    [a, b, Offset]

* Hyperbolic F (``HyperbolicF``)

  * Hyperbolic F

    :math:`y = ax / {(b + x)} + cx`

    [a, b, c]

  * Hyperbolic F With Offset

    :math:`y = ax / {(b + x)} + cx + \text{Offset}`

    [a, b, c, Offset]

* Hyperbolic G (``HyperbolicG``)

  * Hyperbolic G

    :math:`y = ax / {(b + x)} + cx / {(d + x)}`

    [a, b, c, d]

  * Hyperbolic G With Offset

    :math:`y = ax / {(b + x)} + cx / {(d + x)} + \text{Offset}`

    [a, b, c, d, Offset]

* Hyperbolic H (``HyperbolicH``)

  * Hyperbolic H

    :math:`y = ax / {(b + x)} + cx / {(d + x)} + fx`

    [a, b, c, d, f]

  * Hyperbolic H With Offset

    :math:`y = ax / {(b + x)} + cx / {(d + x)} + fx + \text{Offset}`

    [a, b, c, d, f, Offset]

* Hyperbolic I (``HyperbolicI``)

  * Hyperbolic I

    :math:`y = ab / {(b + x)}`

    [a, b]

  * Hyperbolic I With Offset

    :math:`y = ab / {(b + x)} + \text{Offset}`

    [a, b, Offset]

* Hyperbolic J (``HyperbolicJ``)

  * Hyperbolic J

    :math:`y = x / {(a + bx)}`

    [a, b]

  * Hyperbolic J With Offset

    :math:`y = x / {(a + bx)} + \text{Offset}`

    [a, b, Offset]

* Hyperbolic Logistic (``HyperbolicLogistic``)

  * Hyperbolic Logistic

    :math:`y = ax^{b} / {(c + x^{b})}`

    [a, b, c]

  * Hyperbolic Logistic With Offset

    :math:`y = ax^{b} / {(c + x^{b})} + \text{Offset}`

    [a, b, c, Offset]

* Jorge Rabinovich Population Growth (``JorgeRabinovichPopulationGrowth``)

  * Jorge Rabinovich Population Growth

    :math:`Y = {(P1*CC)} / {(P1 + {(CC-P1)}*\exp{(-R*X)})}`

    [P1, CC, R]

  * Jorge Rabinovich Population Growth With Offset

    :math:`Y = {(P1*CC)} / {(P1 + {(CC-P1)}*\exp{(-R*X)})} + \text{Offset}`

    [P1, CC, R, Offset]

* Membrane Transport (``MembraneTransport``)

  * Membrane Transport

    :math:`y = a{(x-b)} / {(x^{2} + cx + d)}`

    [a, b, c, d]

  * Membrane Transport With Offset

    :math:`y = a{(x-b)} / {(x^{2} + cx + d)} + \text{Offset}`

    [a, b, c, d, Offset]

* Michaelis-Menten (``MichaelisMenten``)

  * Michaelis-Menten

    :math:`y = ax / {(b + x)}`

    [a, b]

  * Michaelis-Menten With Offset

    :math:`y = ax / {(b + x)} + \text{Offset}`

    [a, b, Offset]

* Michaelis-Menten Double (``MichaelisMentenDouble``)

  * Michaelis-Menten Double

    :math:`y = ax / {(b + x)} + cx / {(d + x)}`

    [a, b, c, d]

  * Michaelis-Menten Double With Offset

    :math:`y = ax / {(b + x)} + cx / {(d + x)} + \text{Offset}`

    [a, b, c, d, Offset]

* Michaelis-Menten Isotope Displacement Double ([Hot] subsumed) (``MichaelisMentenDoubleIsotopeDisplacement``)

  * Michaelis-Menten Isotope Displacement Double ([Hot] subsumed)

    :math:`y = a / {(b + x)} + c / {(d + x)}`

    [a, b, c, d]

  * Michaelis-Menten Isotope Displacement Double ([Hot] subsumed) With Offset

    :math:`y = a / {(b + x)} + c / {(d + x)} + \text{Offset}`

    [a, b, c, d, Offset]

* Michaelis-Menten Isotope Displacement ([Hot] subsumed) (``MichaelisMentenIsotopeDisplacement``)

  * Michaelis-Menten Isotope Displacement ([Hot] subsumed)

    :math:`y = a / {(b + x)}`

    [a, b]

  * Michaelis-Menten Isotope Displacement ([Hot] subsumed) With Offset

    :math:`y = a / {(b + x)} + \text{Offset}`

    [a, b, Offset]

* Michaelis-Menten Product Accumulation (``MichaelisMentenProductAccumulation``)

  * Michaelis-Menten Product Accumulation

    :math:`y = a{(b-x)} / {(c + {(b-x)})}`

    [a, b, c]

  * Michaelis-Menten Product Accumulation With Offset

    :math:`y = a{(b-x)} / {(c + {(b-x)})} + \text{Offset}`

    [a, b, c, Offset]

* Negative Exponential (``NegativeExponential``)

  * Negative Exponential

    :math:`y = a * {(1.0 - \exp{(-bx)})}`

    [a, b]

  * Negative Exponential With Offset

    :math:`y = a * {(1.0 - \exp{(-bx)})} + \text{Offset}`

    [a, b, Offset]

* New Zealand Ecology Logistic 1 (``NewZealandEcologyLogistic1``)

  * New Zealand Ecology Logistic 1

    :math:`n = B0 + {({(B1 - B0)} / {(1.0 + \exp{({(B2 + D)} * B3)})})}`

    [B0, B1, B2, B3]

* New Zealand Ecology Logistic 2 (``NewZealandEcologyLogistic2``)

  * New Zealand Ecology Logistic 2

    :math:`n = B0 + {({(B1 - B0)} / {(1.0 + \exp{({(B2 + D + {(B4*D^{2})})} *B3)})})}`

    [B0, B1, B2, B3, B4]

* Plant Disease Exponential Model (``PlantDisease_Exponential``)

  * Plant Disease Exponential Model

    :math:`Incidence = y0 * \exp{(r * time)}`

    [y0, r]

  * Plant Disease Exponential Model With Offset

    :math:`Incidence = y0 * \exp{(r * time)} + \text{Offset}`

    [y0, r, Offset]

* Plant Disease Gompertz Model (``PlantDisease_Gompertz``)

  * Plant Disease Gompertz Model

    :math:`Incidence = \exp{(ln{(y0)} * \exp{(-r * time)})}`

    [y0, r]

  * Plant Disease Gompertz Model With Offset

    :math:`Incidence = \exp{(ln{(y0)} * \exp{(-r * time)})} + \text{Offset}`

    [y0, r, Offset]

* Plant Disease Logistic Model (``PlantDisease_Logistic``)

  * Plant Disease Logistic Model

    :math:`Incidence = 1 / {(1 + {(1 - y0)} / {(y0 * \exp{(-r * time)})})}`

    [y0, r]

  * Plant Disease Logistic Model With Offset

    :math:`Incidence = 1 / {(1 + {(1 - y0)} / {(y0 * \exp{(-r * time)})})} + \text{Offset}`

    [y0, r, Offset]

* Plant Disease Monomolecular Model (``PlantDisease_Monomolecular``)

  * Plant Disease Monomolecular Model

    :math:`Incidence = 1 - {({(1 - y0)} * \exp{(-r * time)})}`

    [y0, r]

  * Plant Disease Monomolecular Model With Offset

    :math:`Incidence = 1 - {({(1 - y0)} * \exp{(-r * time)})} + \text{Offset}`

    [y0, r, Offset]

* Plant Disease Weibull Model (``PlantDisease_Weibull``)

  * Plant Disease Weibull Model

    :math:`Incidence = 1 - \exp{(-1.0 * {({(time - a)} / b)}^{c})}`

    [a, b, c]

  * Plant Disease Weibull Model With Offset

    :math:`Incidence = 1 - \exp{(-1.0 * {({(time - a)} / b)}^{c})} + \text{Offset}`

    [a, b, c, Offset]

* Plant Disease Weibull Model Scaled (``PlantDisease_WeibullScaled``)

  * Plant Disease Weibull Model Scaled

    :math:`y = Scale * {(1 - \exp{(-1.0 * {({(time - a)} / b)}^{c})})}`

    [a, b, c, Scale]

  * Plant Disease Weibull Model Scaled With Offset

    :math:`y = Scale * {(1 - \exp{(-1.0 * {({(time - a)} / b)}^{c})})} +\text{Offset}`

    [a, b, c, Scale, Offset]

* Preece And Baines Growth (``PreeceAndBaines``)

  * Preece And Baines Growth

    :math:`y = a - 2{(a-b)} / {(\exp{(c{(x-d)})} + \exp{(f{(x-d)})})}`

    [a, b, c, d, f]

* Scaled Log (``ScaledLog``)

  * Scaled Log

    :math:`y = a * log{(x)}`

    [a]

  * Scaled Log With Offset

    :math:`y = a * log{(x)} + \text{Offset}`

    [a, Offset]

* Scaled Log Transform (``ScaledLog_Transform``)

  * Scaled Log Transform

    :math:`y = a * log{(bx + c)}`

    [a, b, c]

  * Scaled Log Transform With Offset

    :math:`y = a * log{(bx + c)} + \text{Offset}`

    [a, b, c, Offset]

* Scaled Power (``ScaledPower``)

  * Scaled Power

    :math:`y = a * x^{b}`

    [a, b]

  * Scaled Power With Offset

    :math:`y = a * x^{b} + \text{Offset}`

    [a, b, Offset]

* Scaled Power Transform (``ScaledPower_Transform``)

  * Scaled Power Transform

    :math:`y = a * {(cx + d)}^{b}`

    [a, b, c, d]

  * Scaled Power Transform With Offset

    :math:`y = a * {(cx + d)}^{b} + \text{Offset}`

    [a, b, c, d, Offset]

* Standard 3-Parameter Logistic Equation (``StandardLogistic3Parameter``)

  * Standard 3-Parameter Logistic Equation

    :math:`y = d + {(a - d)} / {(1 + {(x / c)})}`

    [a, c, d]

* Standard 4-Parameter Logistic Equation (``StandardLogistic4Parameter``)

  * Standard 4-Parameter Logistic Equation

    :math:`y = d + {(a - d)} / {(1 + {(x / c)}^{b})}`

    [a, b, c, d]

* Standard 5-Parameter Logistic Equation (``StandardLogistic5Parameter``)

  * Standard 5-Parameter Logistic Equation

    :math:`y = d + {(a - d)} / {(1 + {(x / c)}^{b} )}^{f}`

    [a, b, c, d, f]

* Weibull (``Weibull``)

  * Weibull

    :math:`y = a * {(1.0 - \exp{(-b * {(x - c)}^{d})})}`

    [a, b, c, d]

  * Weibull With Offset

    :math:`y = a * {(1.0 - \exp{(-b * {(x - c)}^{d})})} + \text{Offset}`

    [a, b, c, d, Offset]

* Xiaogang Peng Immunoassay (``XiaogangPengImmunoassay``)

  * Xiaogang Peng Immunoassay

    :math:`y = K / {(1.0 + \exp{(-1.0 * {(a + blog{(x)} + cx)})})}`

    [K, a, b, c]

  * Xiaogang Peng Immunoassay With Offset

    :math:`y = K / {(1.0 + \exp{(-1.0 * {(a + blog{(x)} + cx)})})} + \text{Offset}`

    [K, a, b, c, Offset]


BurkardtCollectionBased
^^^^^^^^^^^^^^^^^^^^^^^

* Arcsin CDF Based (``arcsin_cdf``)

  * Arcsin CDF Based

    :math:`y = a * asin{( {(bx+c)} / d)}`

    [a, b, c, d]

  * Arcsin CDF Based With Offset

    :math:`y = a * asin{( {(bx+c)} / d)} + \text{Offset}`

    [a, b, c, d, Offset]

* Arcsin PDF Based (``arcsin_pdf``)

  * Arcsin PDF Based

    :math:`y = a / \sqrt{( b^{2} - x^{2})}`

    [a, b]

  * Arcsin PDF Based With Offset

    :math:`y = a / \sqrt{( b^{2} - x^{2})} + \text{Offset}`

    [a, b, Offset]

* Bradford CDF Based A (``bradford_cdf_a``)

  * Bradford CDF Based A

    :math:`y = ln{(1.0+c*{(x-a)}/{(b-a)})} / ln{(c+1.0)}`

    [a, b, c]

  * Bradford CDF Based A With Offset

    :math:`y = ln{(1.0+c*{(x-a)}/{(b-a)})} / ln{(c+1.0)} + \text{Offset}`

    [a, b, c, Offset]

* Bradford CDF Based B (``bradford_cdf_b``)

  * Bradford CDF Based B

    :math:`y = d * ln{(1.0+c*{(x-a)}/{(b-a)})} / ln{(c+1.0)}`

    [a, b, c, d]

  * Bradford CDF Based B With Offset

    :math:`y = d * ln{(1.0+c*{(x-a)}/{(b-a)})} / ln{(c+1.0)} + \text{Offset}`

    [a, b, c, d, Offset]

* Bradford PDF Based (``bradford_pdf``)

  * Bradford PDF Based

    :math:`y = c / {({( c * {(x-a)} + b-a)} * ln{(c + 1.0)})}`

    [a, b, c]

  * Bradford PDF Based With Offset

    :math:`y = c / {({( c * {(x-a)} + b-a)} * ln{(c + 1.0)})} + \text{Offset}`

    [a, b, c, Offset]

* Burr CDF Based A (``burr_cdf_a``)

  * Burr CDF Based A

    :math:`y = 1.0 / {( 1.0 + {( b / {( x-a )})}^{c})}^{d}`

    [a, b, c, d]

  * Burr CDF Based A With Offset

    :math:`y = 1.0 / {( 1.0 + {( b / {( x-a )})}^{c})}^{d}+ \text{Offset}`

    [a, b, c, d, Offset]

* Burr CDF Based B (``burr_cdf_b``)

  * Burr CDF Based B

    :math:`y = f / {( 1.0 + {( b / {( x-a )})}^{c})}^{d}`

    [a, b, c, d, f]

  * Burr CDF Based B With Offset

    :math:`y = f / {( 1.0 + {( b / {( x-a )})}^{c})}^{d} +\text{Offset}`

    [a, b, c, d, f, Offset]

* Burr PDF Based (``burr_pdf``)

  * Burr PDF Based

    :math:`y = {(c*d/b)} * {({(x-a)}/b)}^{(-c-1.0)} *{(1.0+{({(x-a)}/b)}^{(-c)})}^{(-d-1.0)}`

    [a, b, c, d]

  * Burr PDF Based With Offset

    :math:`y = {(c*d/b)} * {({(x-a)}/b)}^{(-c-1.0)} *{(1.0+{({(x-a)}/b)}^{(-c)})}^{(-d-1.0)} + \text{Offset}`

    [a, b, c, d, Offset]

* Dipole CDF Based (``dipole_cdf``)

  * Dipole CDF Based

    :math:`y = a * arctan{(x)} + b/x`

    [a, b]

  * Dipole CDF Based With Offset

    :math:`y = a * arctan{(x)} + b/x + \text{Offset}`

    [a, b, Offset]

* Exponential PDF Based (``exponential_pdf``)

  * Exponential PDF Based

    :math:`y = {(1.0/b)} * \exp{({(a-x)}/b)}`

    [a, b]

  * Exponential PDF Based With Offset

    :math:`y = {(1.0/b)} * \exp{({(a-x)}/b)} + \text{Offset}`

    [a, b, Offset]

* Exponential PDF Based Scaled (``exponential_pdf_scaled``)

  * Exponential PDF Based Scaled

    :math:`y = Scale * {(1.0/b)} * \exp{({(a-x)}/b)}`

    [a, b, Scale]

  * Exponential PDF Based Scaled With Offset

    :math:`y = Scale * {(1.0/b)} * \exp{({(a-x)}/b)} + \text{Offset}`

    [a, b, Scale, Offset]

* Extreme Values CDF Based A (``extreme_values_cdf_a``)

  * Extreme Values CDF Based A

    :math:`y = \exp{(-\exp{(-{({(x-a)}/b)})})}`

    [a, b]

  * Extreme Values CDF Based A With Offset

    :math:`y = \exp{(-\exp{(-{({(x-a)}/b)})})} + \text{Offset}`

    [a, b, Offset]

* Extreme Values CDF Based B (``extreme_values_cdf_b``)

  * Extreme Values CDF Based B

    :math:`y = c * \exp{(-\exp{(-{({(x-a)}/b)})})}`

    [a, b, c]

  * Extreme Values CDF Based B With Offset

    :math:`y = c * \exp{(-\exp{(-{({(x-a)}/b)})})} + \text{Offset}`

    [a, b, c, Offset]

* Extreme Values PDF Based (``extreme_values_pdf``)

  * Extreme Values PDF Based

    :math:`y = {(1.0/b)} * \exp{({({(a-x)}/b)}-\exp{({(a-x)}/b)})}`

    [a, b]

  * Extreme Values PDF Based With Offset

    :math:`y = {(1.0/b)} * \exp{({({(a-x)}/b)}-\exp{({(a-x)}/b)})} + \text{Offset}`

    [a, b, Offset]

* Fisk CDF Based A (``fisk_cdf_a``)

  * Fisk CDF Based A

    :math:`y = 1.0 / {(1.0+{(b/{(x-a)})}^{c})}`

    [a, b, c]

  * Fisk CDF Based A With Offset

    :math:`y = 1.0 / {(1.0+{(b/{(x-a)})}^{c})} + \text{Offset}`

    [a, b, c, Offset]

* Fisk CDF Based B (``fisk_cdf_b``)

  * Fisk CDF Based B

    :math:`y = d / {(1.0+{(b/{(x-a)})}^{c})}`

    [a, b, c, d]

  * Fisk CDF Based B With Offset

    :math:`y = d / {(1.0+{(b/{(x-a)})}^{c})} + \text{Offset}`

    [a, b, c, d, Offset]

* Fisk PDF Based (``fisk_pdf``)

  * Fisk PDF Based

    :math:`y = {(c/b)} * {({(x-a)}/b)}^{{(c-1.0)}} / {(1.0 +{({(x-a)}/b)}^{c})}^{2}`

    [a, b, c]

  * Fisk PDF Based With Offset

    :math:`y = {(c/b)} * {({(x-a)}/b)}^{{(c-1.0)}} / {(1.0 +{({(x-a)}/b)}^{c})}^{2} + \text{Offset}`

    [a, b, c, Offset]

* Folded Normal PDF Based (``folded_normal_pdf``)

  * Folded Normal PDF Based

    :math:`y = c * {(1/b)} * cosh{(a*x/b^{2})} * \exp{(-0.5 *{(x^{2} + a^{2})}/b^{2})}`

    [a, b, c]

  * Folded Normal PDF Based With Offset

    :math:`y = c * {(1/b)} * cosh{(a*x/b^{2})} * \exp{(-0.5 *{(x^{2} + a^{2})}/b^{2})} +\text{Offset}`

    [a, b, c, Offset]

* Frechet CDF Based A (``frechet_cdf_a``)

  * Frechet CDF Based A

    :math:`y = \exp{(-1.0 / x^{a})}`

    [a]

  * Frechet CDF Based A With Offset

    :math:`y = \exp{(-1.0 / x^{a})} + \text{Offset}`

    [a, Offset]

* Frechet CDF Based B (``frechet_cdf_b``)

  * Frechet CDF Based B

    :math:`y = b * \exp{(-1.0 / x^{a})}`

    [a, b]

  * Frechet CDF Based B With Offset

    :math:`y = b * \exp{(-1.0 / x^{a})} + \text{Offset}`

    [a, b, Offset]

* Frechet PDF Based A (``frechet_pdf_a``)

  * Frechet PDF Based A

    :math:`y = \exp{(- 1.0 / x^{a})} / x^{{( a + 1.0)}}`

    [a]

  * Frechet PDF Based A With Offset

    :math:`y = \exp{(- 1.0 / x^{a})} / x^{{( a + 1.0)}} +\text{Offset}`

    [a, Offset]

* Frechet PDF Based B (``frechet_pdf_b``)

  * Frechet PDF Based B

    :math:`y = b * \exp{(- 1.0 / x^{a})} / x^{{( a +1.0)}}`

    [a, b]

  * Frechet PDF Based B With Offset

    :math:`y = b * \exp{(- 1.0 / x^{a})} / x^{{( a +1.0)}} + \text{Offset}`

    [a, b, Offset]

* Genlogistic CDF Based A (``genlogistic_cdf_a``)

  * Genlogistic CDF Based A

    :math:`y = {(1.0/{(1.0+\exp{(-{(x-a)}/b)})})}^{c}`

    [a, b, c]

  * Genlogistic CDF Based A With Offset

    :math:`y = {(1.0/{(1.0+\exp{(-{(x-a)}/b)})})}^{c} + \text{Offset}`

    [a, b, c, Offset]

* Genlogistic CDF Based B (``genlogistic_cdf_b``)

  * Genlogistic CDF Based B

    :math:`y = {(d/{(1.0+\exp{(-{(x-a)}/b)})})}^{c}`

    [a, b, c, d]

  * Genlogistic CDF Based B With Offset

    :math:`y = {(d/{(1.0+\exp{(-{(x-a)}/b)})})}^{c} + \text{Offset}`

    [a, b, c, d, Offset]

* Genlogistic PDF Based (``genlogistic_pdf``)

  * Genlogistic PDF Based

    :math:`y = {(c/b)} * \exp{(-{({(x-a)}/b)})} /{(1.0+\exp{(-{({(x-a)}/b)})})}^{{(c+1.0)}}`

    [a, b, c]

  * Genlogistic PDF Based With Offset

    :math:`y = {(c/b)} * \exp{(-{({(x-a)}/b)})} /{(1.0+\exp{(-{({(x-a)}/b)})})}^{{(c+1.0)}} + \text{Offset}`

    [a, b, c, Offset]

* Gompertz CDF Based (``gompertz_cdf``)

  * Gompertz CDF Based

    :math:`y = 1.0 - \exp{(-b * {(a^{x}-1.0)} / ln{(a)})}`

    [a, b]

  * Gompertz CDF Based With Offset

    :math:`y = 1.0 - \exp{(-b * {(a^{x}-1.0)} / ln{(a)})} + \text{Offset}`

    [a, b, Offset]

* Gompertz CDF Based Scaled (``gompertz_cdf_scaled``)

  * Gompertz CDF Based Scaled

    :math:`y = Scale * {(1.0 - \exp{(-b * {(a^{x}-1.0)} / ln{(a)})})}`

    [a, b, Scale]

  * Gompertz CDF Based Scaled With Offset

    :math:`y = Scale * {(1.0 - \exp{(-b * {(a^{x}-1.0)} / ln{(a)})})} +\text{Offset}`

    [a, b, Scale, Offset]

* Gumbel CDF Based (``gumbel_cdf``)

  * Gumbel CDF Based

    :math:`y = a * \exp{(-\exp{(-x)})}`

    [a]

  * Gumbel CDF Based With Offset

    :math:`y = a * \exp{(-\exp{(-x)})} + \text{Offset}`

    [a, Offset]

* Gumbel PDF Based (``gumbel_pdf``)

  * Gumbel PDF Based

    :math:`y = a * \exp{(-x-\exp{(-x)})}`

    [a]

  * Gumbel PDF Based With Offset

    :math:`y = a * \exp{(-x-\exp{(-x)})} + \text{Offset}`

    [a, Offset]

* Half Normal PDF Based (``half_normal_pdf``)

  * Half Normal PDF Based

    :math:`y = c * {( 1.0/b)} * \exp{(-0.5*{({(x-a)}/b)}*{({(x-a)}/b)})}`

    [a, b, c]

  * Half Normal PDF Based With Offset

    :math:`y = c * {( 1.0/b)} * \exp{(-0.5*{({(x-a)}/b)}*{({(x-a)}/b)})} + \text{Offset}`

    [a, b, c, Offset]

* Inverse_gaussian PDF Based A (``inverse_gaussian_pdf_a``)

  * Inverse_gaussian PDF Based A

    :math:`y = \sqrt{(b/{(c*x^{3})})}*\exp{(-b*{(x-a)}^{2} /{(2.0*a^{2}*x)})}`

    [a, b, c]

  * Inverse_gaussian PDF Based A With Offset

    :math:`y = \sqrt{(b/{(c*x^{3})})}*\exp{(-b*{(x-a)}^{2} /{(2.0*a^{2}*x)})} + \text{Offset}`

    [a, b, c, Offset]

* Inverse_gaussian PDF Based B (``inverse_gaussian_pdf_b``)

  * Inverse_gaussian PDF Based B

    :math:`y = \sqrt{(b/{(c*x^{3})})}*\exp{(-b*{(x-a)}^{2} /{(2.0*a^{2}*x)})}`

    [a, b, c, d]

  * Inverse_gaussian PDF Based B With Offset

    :math:`y = \sqrt{(b/{(c*x^{3})})}*\exp{(-b*{(x-a)}^{2} /{(2.0*a^{2}*x)})} + \text{Offset}`

    [a, b, c, d, Offset]

* Levy PDF Based (``levy_pdf``)

  * Levy PDF Based

    :math:`y = b^{0.5} *\exp{(-b/{(2.0*{(x-a)})})}/\sqrt{({(x-a)}^{3})}`

    [a, b]

  * Levy PDF Based With Offset

    :math:`y = b^{0.5} *\exp{(-b/{(2.0*{(x-a)})})}/\sqrt{({(x-a)}^{3})} + \text{Offset}`

    [a, b, Offset]

* Levy PDF Based Scaled (``levy_pdf_scaled``)

  * Levy PDF Based Scaled

    :math:`y = Scale * b^{0.5} *\exp{(-b/{(2.0*{(x-a)})})}/\sqrt{({(x-a)}^{3})}`

    [a, b, Scale]

  * Levy PDF Based Scaled With Offset

    :math:`y = Scale * b^{0.5} *\exp{(-b/{(2.0*{(x-a)})})}/\sqrt{({(x-a)}^{3})} + \text{Offset}`

    [a, b, Scale, Offset]

* Log Normal PDF Based (``log_normal_pdf``)

  * Log Normal PDF Based

    :math:`y = \exp{(-0.5*{({(ln{(x)}-a)}/b)}^{2})} / {(b*x)}`

    [a, b]

  * Log Normal PDF Based With Offset

    :math:`y = \exp{(-0.5*{({(ln{(x)}-a)}/b)}^{2})} / {(b*x)} + \text{Offset}`

    [a, b, Offset]

* Logistic PDF Based (``logistic_pdf``)

  * Logistic PDF Based

    :math:`y = \exp{({(a-x)}/b)} / {(b*{(1.0+\exp{({(a-x)}/b)})}^{2})}`

    [a, b]

  * Logistic PDF Based With Offset

    :math:`y = \exp{({(a-x)}/b)} / {(b*{(1.0+\exp{({(a-x)}/b)})}^{2})} + \text{Offset}`

    [a, b, Offset]

* Pareto PDF Based (``pareto_pdf``)

  * Pareto PDF Based

    :math:`y = b * a^{b} / x^{{(b+1.0)}}`

    [a, b]

  * Pareto PDF Based With Offset

    :math:`y = b * a^{b} / x^{{(b+1.0)}} + \text{Offset}`

    [a, b, Offset]

* Power PDF Based (``power_pdf``)

  * Power PDF Based

    :math:`y = {(a/b)} * {(x/b)}^{{(a-1.0)}}`

    [a, b]

  * Power PDF Based With Offset

    :math:`y = {(a/b)} * {(x/b)}^{{(a-1.0)}} + \text{Offset}`

    [a, b, Offset]

* Rayleigh CDF Based A (``rayleigh_cdf_a``)

  * Rayleigh CDF Based A

    :math:`y = 1.0 - \exp{(-x^{2}/{(2.0*a^{2})})}`

    [a]

  * Rayleigh CDF Based A With Offset

    :math:`y = 1.0 - \exp{(-x^{2}/{(2.0*a^{2})})} + \text{Offset}`

    [a, Offset]

* Rayleigh CDF Based B (``rayleigh_cdf_b``)

  * Rayleigh CDF Based B

    :math:`y = b * \exp{(-x^{2}/{(2.0*a^{2})})}`

    [a, b]

  * Rayleigh CDF Based B With Offset

    :math:`y = b * \exp{(-x^{2}/{(2.0*a^{2})})} + \text{Offset}`

    [a, b, Offset]

* Rayleigh PDF Based (``rayleigh_pdf``)

  * Rayleigh PDF Based

    :math:`y = {(x/a^{2})} *\exp{(-x^{2}/{(2.0*a^{2})})}`

    [a]

  * Rayleigh PDF Based With Offset

    :math:`y = {(x/a^{2})} *\exp{(-x^{2}/{(2.0*a^{2})})} + \text{Offset}`

    [a, Offset]

* Rayleigh PDF Based Scaled (``rayleigh_pdf_scaled``)

  * Rayleigh PDF Based Scaled

    :math:`y = Scale * {(x/a^{2})} *\exp{(-x^{2}/{(2.0*a^{2})})}`

    [a, Scale]

  * Rayleigh PDF Based Scaled With Offset

    :math:`y = Scale * {(x/a^{2})} *\exp{(-x^{2}/{(2.0*a^{2})})} + \text{Offset}`

    [a, Scale, Offset]

* Reciprocal CDF Based (``reciprocal_cdf``)

  * Reciprocal CDF Based

    :math:`y = ln{(a/x)} / ln{(a/b)}`

    [a, b]

  * Reciprocal CDF Based With Offset

    :math:`y = ln{(a/x)} / ln{(a/b)} + \text{Offset}`

    [a, b, Offset]

* Sech CDF Based (``sech_cdf``)

  * Sech CDF Based

    :math:`y = c * atan{(\exp{({(x-a)}/b)})}`

    [a, b, c]

  * Sech CDF Based With Offset

    :math:`y = c * atan{(\exp{({(x-a)}/b)})} + \text{Offset}`

    [a, b, c, Offset]

* Weibull CDF Based A (``weibull_cdf_a``)

  * Weibull CDF Based A

    :math:`y = 1.0 / \exp{({({(x-a)}/b)}^{c})}`

    [a, b, c]

  * Weibull CDF Based A With Offset

    :math:`y = 1.0 / \exp{({({(x-a)}/b)}^{c})} + \text{Offset}`

    [a, b, c, Offset]

* Weibull CDF Based B (``weibull_cdf_b``)

  * Weibull CDF Based B

    :math:`y = d / \exp{({({(x-a)}/b)}^{c})}`

    [a, b, c, d]

  * Weibull CDF Based B With Offset

    :math:`y = d / \exp{({({(x-a)}/b)}^{c})} + \text{Offset}`

    [a, b, c, d, Offset]

* Weibull PDF Based (``weibull_pdf``)

  * Weibull PDF Based

    :math:`y = {(c/b)} * {({(x-a)}/b)}^{{(c-1.0)}} /\exp{({({(x-a)}/b)}^{c})}`

    [a, b, c]

  * Weibull PDF Based With Offset

    :math:`y = {(c/b)} * {({(x-a)}/b)}^{{(c-1.0)}} /\exp{({({(x-a)}/b)}^{c})} + \text{Offset}`

    [a, b, c, Offset]


Engineering
^^^^^^^^^^^

* Dispersion Optical (``DispersionOptical``)

  * Dispersion Optical

    :math:`n^{2}{(x)} = A1 + A2*x^{2} +A3/x^{2} + A4/x^{4}`

    [A1, A2, A3, A4]

* Dispersion Optical Square Root (``DispersionOpticalSqrt``)

  * Dispersion Optical Square Root

    :math:`n = {(A1 + A2*x^{2} + A3/x^{2} +A4/x^{4})}^{0.5}`

    [A1, A2, A3, A4]

* Electron Beam Lithography Point Spread (``ElectronBeamLithographyPointSpread``)

  * Electron Beam Lithography Point Spread

    :math:`y = a*\exp{(-b*x)} + c*\exp{(-{(x-d)}^{2} /f^{2})} + g*\exp{(-{(x-h)}^{2} /i^{2})} + j*\exp{(-{(x-k)}^{2} /l^{2})}`

    [a, b, c, d, f, g, h, i, j, k, l]

  * Electron Beam Lithography Point Spread With Offset

    :math:`y = a*\exp{(-b*x)} + c*\exp{(-{(x-d)}^{2} /f^{2})} + g*\exp{(-{(x-h)}^{2} /i^{2})} + j*\exp{(-{(x-k)}^{2} /l^{2})} + \text{Offset}`

    [a, b, c, d, f, g, h, i, j, k, l, Offset]

* Extended Steinhart-Hart (``Extended_Steinhart_Hart``)

  * Extended Steinhart-Hart

    :math:`1/T = A + Bln{(R)} + C{(ln{(R)})}^{2} +D{(ln{(R)})}^{3}`

    [A, B, C, D]

* Graeme Paterson Electric Motor (``GraemePatersonElectricMotor``)

  * Graeme Paterson Electric Motor

    :math:`y = A*\exp{(-b*t)}*cos{(omega*t + phi)} + A2*\exp{(-b2*t)}`

    [A, b, omega, phi, A2, b2]

  * Graeme Paterson Electric Motor With Offset

    :math:`y = A*\exp{(-b*t)}*cos{(omega*t + phi)} + A2*\exp{(-b2*t)} + \text{Offset}`

    [A, b, omega, phi, A2, b2, Offset]

* Klimpel Kinetics Flotation A (``KlimpelFlotationA``)

  * Klimpel Kinetics Flotation A

    :math:`y = a * {(1 - {(1 - \exp{(-b*x)})} / {(b*x)})}`

    [a, b]

  * Klimpel Kinetics Flotation A With Offset

    :math:`y = a * {(1 - {(1 - \exp{(-b*x)})} / {(b*x)})} + \text{Offset}`

    [a, b, Offset]

* Maxwell - Wiechert 1 (``MaxwellWiechert_1``)

  * Maxwell - Wiechert 1

    :math:`y = a1*\exp{(-X/Tau1)}`

    [a1, Tau1]

  * Maxwell - Wiechert 1 With Offset

    :math:`y = a1*\exp{(-X/Tau1)} + \text{Offset}`

    [a1, Tau1, Offset]

* Maxwell - Wiechert 2 (``MaxwellWiechert_2``)

  * Maxwell - Wiechert 2

    :math:`y = a1*\exp{(-X/Tau1)} + a2*\exp{(-X/Tau2)}`

    [a1, Tau1, a2, Tau2]

  * Maxwell - Wiechert 2 With Offset

    :math:`y = a1*\exp{(-X/Tau1)} + a2*\exp{(-X/Tau2)} + \text{Offset}`

    [a1, Tau1, a2, Tau2, Offset]

* Maxwell - Wiechert 3 (``MaxwellWiechert_3``)

  * Maxwell - Wiechert 3

    :math:`y = a1*\exp{(-X/Tau1)} + a2*\exp{(-X/Tau2)} + a3*\exp{(-X/Tau3)}`

    [a1, Tau1, a2, Tau2, a3, Tau3]

  * Maxwell - Wiechert 3 With Offset

    :math:`y = a1*\exp{(-X/Tau1)} + a2*\exp{(-X/Tau2)} + a3*\exp{(-X/Tau3)} + \text{Offset}`

    [a1, Tau1, a2, Tau2, a3, Tau3, Offset]

* Maxwell - Wiechert 4 (``MaxwellWiechert_4``)

  * Maxwell - Wiechert 4

    :math:`y = a1*\exp{(-X/Tau1)} + a2*\exp{(-X/Tau2)} + a3*\exp{(-X/Tau3)} +a4*\exp{(-X/Tau4)}`

    [a1, Tau1, a2, Tau2, a3, Tau3, a4, Tau4]

  * Maxwell - Wiechert 4 With Offset

    :math:`y = a1*\exp{(-X/Tau1)} + a2*\exp{(-X/Tau2)} + a3*\exp{(-X/Tau3)} +a4*\exp{(-X/Tau4)} + \text{Offset}`

    [a1, Tau1, a2, Tau2, a3, Tau3, a4, Tau4, Offset]

* Modified Arps Well Production (``ModifiedArpsWellProduction``)

  * Modified Arps Well Production

    :math:`y = {(qi\_x/{({(1.0-b\_x)}*Di\_x)})} *{(1.0-{({(1.0+b\_x*Di\_x*x)}^{(1.0-1.0/b\_x)})})}`

    [qi_x, b_x, Di_x]

  * Modified Arps Well Production With Offset

    :math:`y = {(qi\_x/{({(1.0-b\_x)}*Di\_x)})} *{(1.0-{({(1.0+b\_x*Di\_x*x)}^{(1.0-1.0/b\_x)})})} + \text{Offset}`

    [qi_x, b_x, Di_x, Offset]

* Ramberg-Osgood (``Ramberg_Osgood``)

  * Ramberg-Osgood

    :math:`y = {(Stress / Youngs\_Modulus)} + {(Stress/K)}^{{(1.0/n)}}`

    [Youngs_Modulus, K, n]

  * Ramberg-Osgood With Offset

    :math:`y = {(Stress / Youngs\_Modulus)} + {(Stress/K)}^{{(1.0/n)}} +\text{Offset}`

    [Youngs_Modulus, K, n, Offset]

* Reciprocal Extended Steinhart-Hart (``Reciprocal_Extended_Steinhart_Hart``)

  * Reciprocal Extended Steinhart-Hart

    :math:`T = 1.0 / {(A + Bln{(R)} + C{(ln{(R)})}^{2} +D{(ln{(R)})}^{3})}`

    [A, B, C, D]

  * Reciprocal Extended Steinhart-Hart With Offset

    :math:`T = 1.0 / {(A + Bln{(R)} + C{(ln{(R)})}^{2} +D{(ln{(R)})}^{3})} + \text{Offset}`

    [A, B, C, D, Offset]

* Reciprocal Steinhart-Hart (``Reciprocal_Steinhart_Hart``)

  * Reciprocal Steinhart-Hart

    :math:`T = 1.0 / {(A + Bln{(R)} + C{(ln{(R)})}^{3})}`

    [A, B, C]

  * Reciprocal Steinhart-Hart With Offset

    :math:`T = 1.0 / {(A + Bln{(R)} + C{(ln{(R)})}^{3})} + \text{Offset}`

    [A, B, C, Offset]

* Sellmeier Optical (``SellmeierOptical``)

  * Sellmeier Optical

    :math:`n^{2}{(x)} = 1 + {(B1x^{2})}/{(x^{2}-C1)} + {(B2x^{2})}/{(x^{2}-C2)} + {(B3x^{2})}/{(x^{2}-C3)}`

    [B1, C1, B2, C2, B3, C3]

  * Sellmeier Optical With Offset

    :math:`n^{2}{(x)} = 1 + {(B1x^{2})}/{(x^{2}-C1)} + {(B2x^{2})}/{(x^{2}-C2)} + {(B3x^{2})}/{(x^{2}-C3)} + \text{Offset}`

    [B1, C1, B2, C2, B3, C3, Offset]

* Sellmeier Optical Square Root (``SellmeierOpticalSqrt``)

  * Sellmeier Optical Square Root

    :math:`n = {(1 + {(B1 x^{2})}/{(x^{2}-C1)} + {(B2x^{2})}/{(x^{2}-C2)} + {(B3x^{2})}/{(x^{2}-C3)})}^{0.5}`

    [B1, C1, B2, C2, B3, C3]

  * Sellmeier Optical Square Root With Offset

    :math:`n = {(1 + {(B1 x^{2})}/{(x^{2}-C1)} + {(B2x^{2})}/{(x^{2}-C2)} + {(B3x^{2})}/{(x^{2}-C3)})}^{0.5} +\text{Offset}`

    [B1, C1, B2, C2, B3, C3, Offset]

* Steinhart-Hart (``Steinhart_Hart``)

  * Steinhart-Hart

    :math:`1/T = A + Bln{(R)} + C{(ln{(R)})}^{3}`

    [A, B, C]

* VanDeemter Chromatography (``VanDeemterChromatography``)

  * VanDeemter Chromatography

    :math:`y = a + b/x + cx`

    [a, b, c]


Exponential
^^^^^^^^^^^

* Asymptotic Exponential A (``AsymptoticExponentialA``)

  * Asymptotic Exponential A

    :math:`y = 1.0 - a^{x}`

    [a]

  * Asymptotic Exponential A With Offset

    :math:`y = 1.0 - a^{x} + \text{Offset}`

    [a, Offset]

* Asymptotic Exponential A Transform (``AsymptoticExponentialA_Transform``)

  * Asymptotic Exponential A Transform

    :math:`y = 1.0 - a^{bx + c}`

    [a, b, c]

  * Asymptotic Exponential A Transform With Offset

    :math:`y = 1.0 - a^{bx + c} + \text{Offset}`

    [a, b, c, Offset]

* Asymptotic Exponential B (``AsymptoticExponentialB``)

  * Asymptotic Exponential B

    :math:`y = a * {(1.0 - \exp{(bx)})}`

    [a, b]

  * Asymptotic Exponential B With Offset

    :math:`y = a * {(1.0 - \exp{(bx)})} + \text{Offset}`

    [a, b, Offset]

* Bruno Torremans Quadruple Exponential (``BrunoTorremansQuadrupleExponential``)

  * Bruno Torremans Quadruple Exponential

    :math:`y = \text{Offset} - R1 * \exp{(-x/T1)} + R2 * \exp{(-x/T2)} + R3 * \exp{(-x/T3)} + R4 *\exp{(-x/T4)}`

    [R1, R2, R3, R4, T1, T2, T3, T4, Offset]

* Double Asymptotic Exponential B (``DoubleAsymptoticExponentialB``)

  * Double Asymptotic Exponential B

    :math:`y = a * {(1.0 - \exp{(bx)})} + c * {(1.0 - \exp{(dx)})}`

    [a, b, c, d]

  * Double Asymptotic Exponential B With Offset

    :math:`y = a * {(1.0 - \exp{(bx)})} + c * {(1.0 - \exp{(dx)})} + \text{Offset}`

    [a, b, c, d, Offset]

* Double Exponential (``DoubleExponential``)

  * Double Exponential

    :math:`y = a * \exp{(bx)} + c * \exp{(dx)}`

    [a, b, c, d]

  * Double Exponential With Offset

    :math:`y = a * \exp{(bx)} + c * \exp{(dx)} + \text{Offset}`

    [a, b, c, d, Offset]

* Exponential (``Exponential``)

  * Exponential

    :math:`y = a * \exp{(bx)}`

    [a, b]

  * Exponential With Offset

    :math:`y = a * \exp{(bx)} + \text{Offset}`

    [a, b, Offset]

* Hocket-Sherby (``Hocket_Sherby``)

  * Hocket-Sherby

    :math:`y = b - {(b-a)} * \exp{(-c * {(x^{d})})}`

    [a, b, c, d]

* Hoerl (``Hoerl``)

  * Hoerl

    :math:`y = x^{a} * \exp{(x)}`

    [a]

  * Hoerl With Offset

    :math:`y = x^{a} * \exp{(x)} + \text{Offset}`

    [a, Offset]

* Hoerl Transform (``Hoerl_Transform``)

  * Hoerl Transform

    :math:`y = {(bx + c)}^{a} * \exp{(bx + c)}`

    [a, b, c]

  * Hoerl Transform With Offset

    :math:`y = {(bx + c)}^{a} * \exp{(bx + c)} + \text{Offset}`

    [a, b, c, Offset]

* Inverted Exponential (``InvExponential``)

  * Inverted Exponential

    :math:`y = a * \exp{(b/x)}`

    [a, b]

  * Inverted Exponential With Offset

    :math:`y = a * \exp{(b/x)} + \text{Offset}`

    [a, b, Offset]

* Inverted Offset Exponential (``InvertedOffsetExponential``)

  * Inverted Offset Exponential

    :math:`y = a * \exp{(b/{(x+c)})}`

    [a, b, c]

  * Inverted Offset Exponential With Offset

    :math:`y = a * \exp{(b/{(x+c)})} + \text{Offset}`

    [a, b, c, Offset]

* Jonathan Litz Custom Exponential (``JonathanLitzCustomExponential``)

  * Jonathan Litz Custom Exponential

    :math:`y = a + b * x + c * \exp{(-d * x)} - c * x * \exp{(-d * x)}`

    [a, b, c, d]

* Lake Nganoke Samples Exponential (``LakeNganokeSamplesExponential``)

  * Lake Nganoke Samples Exponential

    :math:`y = C/{(1.0 + \exp{({(x-A)}/B)})} + D * \exp{({(x-B)}/E)}`

    [A, B, C, D, E]

  * Lake Nganoke Samples Exponential With Offset

    :math:`y = C/{(1.0 + \exp{({(x-A)}/B)})} + D * \exp{({(x-B)}/E)} + \text{Offset}`

    [A, B, C, D, E, Offset]

* Offset Exponential (``OffsetExponential``)

  * Offset Exponential

    :math:`y = a * \exp{(bx + c)}`

    [a, b, c]

  * Offset Exponential With Offset

    :math:`y = a * \exp{(bx + c)} + \text{Offset}`

    [a, b, c, Offset]

* Scaled Exponential (``ScaledExponential``)

  * Scaled Exponential

    :math:`y = a * \exp{(x)}`

    [a]

  * Scaled Exponential With Offset

    :math:`y = a * \exp{(x)} + \text{Offset}`

    [a, Offset]

* Shifted Exponential (``ShiftedExponential``)

  * Shifted Exponential

    :math:`y = a * \exp{(x + b)}`

    [a, b]

  * Shifted Exponential With Offset

    :math:`y = a * \exp{(x + b)} + \text{Offset}`

    [a, b, Offset]

* Simple Exponential (``SimpleExponential``)

  * Simple Exponential

    :math:`y = a^{x}`

    [a]

  * Simple Exponential With Offset

    :math:`y = a^{x} + \text{Offset}`

    [a, Offset]

* Steve Battison Exponential A (``SteveBattisonExponentialA``)

  * Steve Battison Exponential A

    :math:`y = \exp{({(a + bx)} / {(c + dx)})}`

    [a, b, c, d]

  * Steve Battison Exponential A With Offset

    :math:`y = \exp{({(a + bx)} / {(c + dx)})} + \text{Offset}`

    [a, b, c, d, Offset]

* Steve Battison Exponential B (``SteveBattisonExponentialB``)

  * Steve Battison Exponential B

    :math:`y = a * \exp{({(b + cx)} / {(d + fx)})}`

    [a, b, c, d, f]

  * Steve Battison Exponential B With Offset

    :math:`y = a * \exp{({(b + cx)} / {(d + fx)})} + \text{Offset}`

    [a, b, c, d, f, Offset]

* Stirling (``Stirling``)

  * Stirling

    :math:`y = a * {(\exp{(bx)} - 1.0)} / b`

    [a, b]

  * Stirling With Offset

    :math:`y = a * {(\exp{(bx)} - 1.0)} / b + \text{Offset}`

    [a, b, Offset]

* Triple Exponential (``TripleExponential``)

  * Triple Exponential

    :math:`y = a * \exp{(bx)} + c * \exp{(dx)} + f * \exp{(gx)}`

    [a, b, c, d, f, g]

  * Triple Exponential With Offset

    :math:`y = a * \exp{(bx)} + c * \exp{(dx)} + f * \exp{(gx)} + \text{Offset}`

    [a, b, c, d, f, g, Offset]

* Standard Vapor Pressure (``VaporPressure``)

  * Standard Vapor Pressure

    :math:`y = \exp{(a + {(b/x)} + c*ln{(x)})}`

    [a, b, c]

  * Standard Vapor Pressure With Offset

    :math:`y = \exp{(a + {(b/x)} + c*ln{(x)})} + \text{Offset}`

    [a, b, c, Offset]


FourierSeries
^^^^^^^^^^^^^

* 1 Term (Scaled X) (``ScaledX_1Term``)

  * 1 Term (Scaled X)

    :math:`y = a0 + a1*sin{(c1*x)}+b1*cos{(c1*x)}`

    [a0, a1, b1, c1]

* 1 Term Standard (``Standard_1Term``)

  * 1 Term Standard

    :math:`y = a0 + a1*sin{(x)}+b1*cos{(x)}`

    [a0, a1, b1]

* 2 Term Standard (``Standard_2Term``)

  * 2 Term Standard

    :math:`y = a0 + a1*sin{(x)}+b1*cos{(x)} + a2*sin{(2x)}+b2*cos{(2x)}`

    [a0, a1, b1, a2, b2]

* 3 Term Standard (``Standard_3Term``)

  * 3 Term Standard

    :math:`y = a0 + a1*sin{(x)}+b1*cos{(x)} + a2*sin{(2x)}+b2*cos{(2x)} +a3*sin{(3x)}+b3*cos{(3x)}`

    [a0, a1, b1, a2, b2, a3, b3]

* 4 Term Standard (``Standard_4Term``)

  * 4 Term Standard

    :math:`y = a0 + a1*sin{(x)}+b1*cos{(x)} + a2*sin{(2x)}+b2*cos{(2x)} +a3*sin{(3x)}+b3*cos{(3x)} + a4*sin{(4x)}+b4*cos{(4x)}`

    [a0, a1, b1, a2, b2, a3, b3, a4, b4]


LegendrePolynomial
^^^^^^^^^^^^^^^^^^

* Legendre Polynomial G - Eighth Degree (``EighthDegreeLegendrePolynomial``)

  * Legendre Polynomial G - Eighth Degree

    :math:`y = a + bx + cP_{2} + dP_{3} +fP_{4} + gP_{5} + hP_{6} +iP_{7} + jP_{8}`

    [a, b, c, d, f, g, h, i, j]

* Legendre Polynomial D - Fifth Degree (``FifthDegreeLegendrePolynomial``)

  * Legendre Polynomial D - Fifth Degree

    :math:`y = a + bx + cP_{2} + dP_{3} +fP_{4} + gP_{5}`

    [a, b, c, d, f, g]

* Legendre Polynomial C - Fourth Degree (``FourthDegreeLegendrePolynomial``)

  * Legendre Polynomial C - Fourth Degree

    :math:`y = a + bx + cP_{2} + dP_{3} +fP_{4}`

    [a, b, c, d, f]

* Gamma Ray Angular Distribution (degrees) A (``GammaRayAngularDistributionDegreesA``)

  * Gamma Ray Angular Distribution (degrees) A

    :math:`y = A0 + A2 * P_{2}{(cos{(theta)})}`

    [A0, A2]

* Gamma Ray Angular Distribution (degrees) B (``GammaRayAngularDistributionDegreesB``)

  * Gamma Ray Angular Distribution (degrees) B

    :math:`y = A0 + A2 * P_{2}{(cos{(theta)})} + A4 *P_{4}{(cos{(theta)})}`

    [A0, A2, A4]

* Gamma Ray Angular Distribution (radians) A (``GammaRayAngularDistributionRadiansA``)

  * Gamma Ray Angular Distribution (radians) A

    :math:`y = A0 + A2 * P_{2}{(cos{(theta)})}`

    [A0, A2]

* Gamma Ray Angular Distribution (radians) B (``GammaRayAngularDistributionRadiansB``)

  * Gamma Ray Angular Distribution (radians) B

    :math:`y = A0 + A2 * P_{2}{(cos{(theta)})} + A4 *P_{4}{(cos{(theta)})}`

    [A0, A2, A4]

* Legendre Polynomial H - Ninth Degree (``NinthDegreeLegendrePolynomial``)

  * Legendre Polynomial H - Ninth Degree

    :math:`y = a + bx + cP_{2} + dP_{3} +fP_{4} + gP_{5} + hP_{6} +iP_{7} + jP_{8} + kP_{9}`

    [a, b, c, d, f, g, h, i, j, k]

* Legendre Polynomial A - Second Degree (``SecondDegreeLegendrePolynomial``)

  * Legendre Polynomial A - Second Degree

    :math:`y = a + bx + cP_{2}`

    [a, b, c]

* Legendre Polynomial F - Seventh Degree (``SeventhDegreeLegendrePolynomial``)

  * Legendre Polynomial F - Seventh Degree

    :math:`y = a + bx + cP_{2} + dP_{3} +fP_{4} + gP_{5} + hP_{6} +iP_{7}`

    [a, b, c, d, f, g, h, i]

* Legendre Polynomial E - Sixth Degree (``SixthDegreeLegendrePolynomial``)

  * Legendre Polynomial E - Sixth Degree

    :math:`y = a + bx + cP_{2} + dP_{3} +fP_{4} + gP_{5} + hP_{6}`

    [a, b, c, d, f, g, h]

* Legendre Polynomial I - Tenth Degree (``TenthDegreeLegendrePolynomial``)

  * Legendre Polynomial I - Tenth Degree

    :math:`y = a + bx + cP_{2} + dP_{3} +fP_{4} + gP_{5} + hP_{6} +iP_{7} + jP_{8} + kP_{9} +mP_{10}`

    [a, b, c, d, f, g, h, i, j, k, m]

* Legendre Polynomial B - Third Degree (``ThirdDegreeLegendrePolynomial``)

  * Legendre Polynomial B - Third Degree

    :math:`y = a + bx + cP_{2} + dP_{3}`

    [a, b, c, d]


Logarithmic
^^^^^^^^^^^

* Base 10 Logarithmic (``Base10Logarithmic``)

  * Base 10 Logarithmic

    :math:`y = a + b*log_{10}{(x)}`

    [a, b]

* Bradley (``Bradley``)

  * Bradley

    :math:`y = a * ln{(-b * ln{(x)})}`

    [a, b]

  * Bradley With Offset

    :math:`y = a * ln{(-b * ln{(x)})} + \text{Offset}`

    [a, b, Offset]

* Bradley Transform (``BradleyTransform``)

  * Bradley Transform

    :math:`y = a * ln{(-b * ln{(cx + d)})}`

    [a, b, c, d]

  * Bradley Transform With Offset

    :math:`y = a * ln{(-b * ln{(cx + d)})} + \text{Offset}`

    [a, b, c, d, Offset]

* Crystal Resonator Ageing MIL-PRF-55310E (``CrystalResonatorAgeing``)

  * Crystal Resonator Ageing MIL-PRF-55310E

    :math:`y = A{(ln{(Bt + 1)})} + f0`

    [A, B, f0]

* Cubic Logarithmic (``CubicLogarithmic``)

  * Cubic Logarithmic

    :math:`y = a + b*ln{(x)} + c*ln{(x)}^{2} +d*ln{(x)}^{3}`

    [a, b, c, d]

* Cubic Logarithmic Scaled (``CubicLogarithmicScaled``)

  * Cubic Logarithmic Scaled

    :math:`y = a + b*ln{(f*x)} + c*ln{(f*x)}^{2} +d*ln{(f*x)}^{3}`

    [a, b, c, d, f]

* Cubic Logarithmic Transform (``CubicLogarithmicTransform``)

  * Cubic Logarithmic Transform

    :math:`y = a + b*ln{(f*x+g)} + c*ln{(f*x+g)}^{2} +d*ln{(f*x+g)}^{3}`

    [a, b, c, d, f, g]

* Linear Logarithmic (``LinearLogarithmic``)

  * Linear Logarithmic

    :math:`y = a + b*ln{(x)}`

    [a, b]

* Linear Logarithmic Scaled (``LinearLogarithmicScaled``)

  * Linear Logarithmic Scaled

    :math:`y = a + b*ln{(cx)}`

    [a, b, c]

* Linear Logarithmic Shifted (``LinearLogarithmicShifted``)

  * Linear Logarithmic Shifted

    :math:`y = a + b*ln{(c+x)}`

    [a, b, c]

* Linear Logarithmic Transform (``LinearLogarithmicTransform``)

  * Linear Logarithmic Transform

    :math:`y = a + b*ln{(cx+d)}`

    [a, b, c, d]

* Quadratic Logarithmic (``QuadraticLogarithmic``)

  * Quadratic Logarithmic

    :math:`y = a + b*ln{(x)} + c*ln{(x)}^{2}`

    [a, b, c]

* Quadratic Logarithmic Scaled (``QuadraticLogarithmicScaled``)

  * Quadratic Logarithmic Scaled

    :math:`y = a + b*ln{(dx)} + c*ln{(dx)}^{2}`

    [a, b, c, d]

* Quadratic Logarithmic Transform (``QuadraticLogarithmicTransform``)

  * Quadratic Logarithmic Transform

    :math:`y = a + b*ln{(dx+f)} + c*ln{(dx+f)}^{2}`

    [a, b, c, d, f]

* Quartic Logarithmic (``QuarticLogarithmic``)

  * Quartic Logarithmic

    :math:`y = a + b*ln{(x)} + c*ln{(x)}^{2} +d*ln{(x)}^{3} + f*ln{(x)}^{4}`

    [a, b, c, d, f]

* Quartic Logarithmic Scaled (``QuarticLogarithmicScaled``)

  * Quartic Logarithmic Scaled

    :math:`y = a + b*ln{(h*x)} + c*ln{(h*x)}^{2} +d*ln{(h*x)}^{3} + f*ln{(h*x)}^{4}`

    [a, b, c, d, f, g]

* Quartic Logarithmic Transform (``QuarticLogarithmicTransform``)

  * Quartic Logarithmic Transform

    :math:`y = a + b*ln{(g*x+h)} + c*ln{(g*x+h)}^{2} +d*ln{(g*x+h)}^{3} + f*ln{(g*x+h)}^{4}`

    [a, b, c, d, f, g, h]

* Quintic Logarithmic (``QuinticLogarithmic``)

  * Quintic Logarithmic

    :math:`y = a + b*ln{(x)} + c*ln{(x)}^{2} +d*ln{(x)}^{3} + f*ln{(x)}^{4} +g*ln{(x)}^{5}`

    [a, b, c, d, f, g]

* Quintic Logarithmic Scaled (``QuinticLogarithmicScaled``)

  * Quintic Logarithmic Scaled

    :math:`y = a + b*ln{(h*x)} + c*ln{(h*x)}^{2} +d*ln{(h*x)}^{3} + f*ln{(h*x)}^{4} +g*ln{(h*x)}^{4}`

    [a, b, c, d, f, g, h]

* Quintic Logarithmic Transform (``QuinticLogarithmicTransform``)

  * Quintic Logarithmic Transform

    :math:`y = a + b*ln{(h*x+i)} + c*ln{(h*x+i)}^{2} +d*ln{(h*x+i)}^{3} + f*ln{(h*x+i)}^{4} +g*ln{(h*x+i)}^{5}`

    [a, b, c, d, f, g, h, i]


Miscellaneous
^^^^^^^^^^^^^

* Arrhenius Rate Constant Law (``ArrheniusRateConstantLaw``)

  * Arrhenius Rate Constant Law

    :math:`y = a * \exp{(-b/x)}`

    [a, b]

  * Arrhenius Rate Constant Law With Offset

    :math:`y = a * \exp{(-b/x)} + \text{Offset}`

    [a, b, Offset]

* Arrhenius Rate Constant Law Stretched (``ArrheniusRateConstantLawStretched``)

  * Arrhenius Rate Constant Law Stretched

    :math:`y = a * \exp{(-pow{(b/x, c)})}`

    [a, b, c]

  * Arrhenius Rate Constant Law Stretched With Offset

    :math:`y = a * \exp{(-pow{(b/x, c)})} + \text{Offset}`

    [a, b, c, Offset]

* Bleasdale-Nelder (``Bleasdale_Nelder``)

  * Bleasdale-Nelder

    :math:`y = {(a + bx)}^{-c}`

    [a, b, c]

  * Bleasdale-Nelder With Offset

    :math:`y = {(a + bx)}^{-c} + \text{Offset}`

    [a, b, c, Offset]

* Catenary (``Catenary``)

  * Catenary

    :math:`y = a * cosh{(x / a)}`

    [a]

  * Catenary With Offset

    :math:`y = a * cosh{(x / a)} + \text{Offset}`

    [a, Offset]

* Catenary Transform (``CatenaryTransform``)

  * Catenary Transform

    :math:`y = a * cosh{({(bx + c)} / a)}`

    [a, b, c]

  * Catenary Transform With Offset

    :math:`y = a * cosh{({(bx + c)} / a)} + \text{Offset}`

    [a, b, c, Offset]

* Cissoid Of Diocles (``CissoidOfDiocles``)

  * Cissoid Of Diocles

    :math:`y = a{(x^{3} / {(2b-x)})}^{0.5}`

    [a, b]

  * Cissoid Of Diocles With Offset

    :math:`y = a{(x^{3} / {(2b-x)})}^{0.5} + \text{Offset}`

    [a, b, Offset]

* Cissoid Of Diocles Transform (``CissoidOfDioclesTransform``)

  * Cissoid Of Diocles Transform

    :math:`y = a{({(x*c-d)}^{3} / {(2b-{(x*c-d)})})}^{0.5}`

    [a, b, c, d]

  * Cissoid Of Diocles Transform With Offset

    :math:`y = a{({(x*c-d)}^{3} / {(2b-{(x*c-d)})})}^{0.5} +\text{Offset}`

    [a, b, c, d, Offset]

* Combined Power And Exponential (``CombinedPowerAndExponential``)

  * Combined Power And Exponential

    :math:`y = ax^{b} * \exp{(cx)}`

    [a, b, c]

  * Combined Power And Exponential With Offset

    :math:`y = ax^{b} * \exp{(cx)} + \text{Offset}`

    [a, b, c, Offset]

* David Rodbard NIH (``DavidRodbardNIH``)

  * David Rodbard NIH

    :math:`y = d + {(a - d)} / {(1.0 + {(x/c)}^{b})}`

    [a, b, c, d]

* Double Langmuir Probe Characteristic (``DoubleLangmuirProbeCharacteristic``)

  * Double Langmuir Probe Characteristic

    :math:`y = a * tanh{(bx+c)}`

    [a, b, c]

  * Double Langmuir Probe Characteristic With Offset

    :math:`y = a * tanh{(bx+c)} + \text{Offset}`

    [a, b, c, Offset]

* Double Rectangular Hyperbola A (``DoubleRectangularHyperbolaA``)

  * Double Rectangular Hyperbola A

    :math:`y = ax/{(b+x)} + cx/{(d+x)}`

    [a, b, c, d]

  * Double Rectangular Hyperbola A With Offset

    :math:`y = ax/{(b+x)} + cx/{(d+x)} + \text{Offset}`

    [a, b, c, d, Offset]

* Double Rectangular Hyperbola B (``DoubleRectangularHyperbolaB``)

  * Double Rectangular Hyperbola B

    :math:`y = ax/{(b+x)} + cx/{(d+x)} + fx`

    [a, b, c, d, f]

  * Double Rectangular Hyperbola B With Offset

    :math:`y = ax/{(b+x)} + cx/{(d+x)} + fx + \text{Offset}`

    [a, b, c, d, f, Offset]

* Figure Eight Curve (``FigureEight``)

  * Figure Eight Curve

    :math:`y = a{(x^{2} -{(x^{4}/b^{2})})}^{0.5}`

    [a, b]

  * Figure Eight Curve With Offset

    :math:`y = a{(x^{2} -{(x^{4}/b^{2})})}^{0.5} +\text{Offset}`

    [a, b, Offset]

* Figure Eight Curve Transform (``FigureEightTransform``)

  * Figure Eight Curve Transform

    :math:`y = a{({(cx+d)}^{2} -{({(cx+d)}^{4}/b^{2})})}^{0.5}`

    [a, b, c, d]

  * Figure Eight Curve Transform With Offset

    :math:`y = a{({(cx+d)}^{2} -{({(cx+d)}^{4}/b^{2})})}^{0.5} +\text{Offset}`

    [a, b, c, d, Offset]

* Gunary (``Gunary``)

  * Gunary

    :math:`y = x / {(a + bx + cx^{0.5})}`

    [a, b, c]

  * Gunary With Offset

    :math:`y = x / {(a + bx + cx^{0.5})} + \text{Offset}`

    [a, b, c, Offset]

* Hyperbola A Modified (``HyperbolaA_Modified``)

  * Hyperbola A Modified

    :math:`y = ax/{(1+bx)}`

    [a, b]

  * Hyperbola A Modified With Offset

    :math:`y = ax/{(1+bx)} + \text{Offset}`

    [a, b, Offset]

* Hyperbola B Modified (``HyperbolaB_Modified``)

  * Hyperbola B Modified

    :math:`y = x/{(a+bx)}`

    [a, b]

  * Hyperbola B Modified With Offset

    :math:`y = x/{(a+bx)} + \text{Offset}`

    [a, b, Offset]

* Hyperbolic Decay (``HyperbolicDecay``)

  * Hyperbolic Decay

    :math:`y = ab/{(b+x)}`

    [a, b]

  * Hyperbolic Decay With Offset

    :math:`y = ab/{(b+x)} + \text{Offset}`

    [a, b, Offset]

* Karplus NMR Spectroscopy (``KarplusNMRSpectroscopy``)

  * Karplus NMR Spectroscopy

    :math:`J{(da)} = Acos^{2}{(da)} + Bcos{(da)} + C`

    [A, B, C]

* Karplus NMR Spectroscopy Scaled (``KarplusNMRSpectroscopyScaled``)

  * Karplus NMR Spectroscopy Scaled

    :math:`J{(da)} = Acos^{2}{(s * da)} + Bcos{(s * da)} + C`

    [A, B, C, s]

* Lame's Cubic (``LamesCubic``)

  * Lame's Cubic

    :math:`y = {(a^{3} - x^{3})}^{1/3}`

    [a]

  * Lame's Cubic With Offset

    :math:`y = {(a^{3} - x^{3})}^{1/3} +\text{Offset}`

    [a, Offset]

* Lame's Cubic Transform (``LamesCubicTransform``)

  * Lame's Cubic Transform

    :math:`y = {(a^{3} - {(bx +c)}^{3})}^{1/3}`

    [a, b, c]

  * Lame's Cubic Transform With Offset

    :math:`y = {(a^{3} - {(bx +c)}^{3})}^{1/3} + \text{Offset}`

    [a, b, c, Offset]

* Miscellaneous 1 (``Misc1``)

  * Miscellaneous 1

    :math:`y = 1.0 + a{(1.0 - \exp{(bx)})}`

    [a, b]

  * Miscellaneous 1 With Offset

    :math:`y = 1.0 + a{(1.0 - \exp{(bx)})} + \text{Offset}`

    [a, b, Offset]

* Morse Potential (``MorsePotential``)

  * Morse Potential

    :math:`V = D*{(\exp{(-2*m*{(x-u)})} - 2*\exp{(-m*{(x-u)})})} + offset`

    [D, m, u, offset]

* Nelson-Siegel (``NelsonSiegel``)

  * Nelson-Siegel

    :math:`y{(m)} = B0 + B1*{({(1-\exp{(-m/t)})}/{(m/t)})} + B2*{({({(1-\exp{(-m/t)})}/{(m/t)})} -\exp{(-m/t)})}`

    [B0, B1, B2, t]

* Nelson-Siegel-Svensson (``NelsonSiegelSvensson``)

  * Nelson-Siegel-Svensson

    :math:`y{(m)} = B0 + B1*{({(1-\exp{(-m/t)})}/{(m/t)})} + B2*{({({(1-\exp{(-m/t)})}/{(m/t)})} -\exp{(-m/t)})} + B3*{({({(1-\exp{(-m/t2)})}/{(m/t2)})} - \exp{(-m/t2)})}`

    [B0, B1, B2, B3, t, t2]

* Niele's Semi-cubical Parabola (``NielesSemicubicalParabola``)

  * Niele's Semi-cubical Parabola

    :math:`y = {(ax^{2})}^{1.0/3.0}`

    [a]

  * Niele's Semi-cubical Parabola With Offset

    :math:`y = {(ax^{2})}^{1.0/3.0} + \text{Offset}`

    [a, Offset]

* Niele's Semi-cubical Parabola Transform (``NielesSemicubicalParabolaTransform``)

  * Niele's Semi-cubical Parabola Transform

    :math:`y = {(a{(b*x+c)}^{2})}^{1.0/3.0}`

    [a, b, c]

  * Niele's Semi-cubical Parabola Transform With Offset

    :math:`y = {(a{(b*x+c)}^{2})}^{1.0/3.0} + \text{Offset}`

    [a, b, c, Offset]

* Pareto A (``ParetoA``)

  * Pareto A

    :math:`y = 1 - x^{-a}`

    [a]

  * Pareto A With Offset

    :math:`y = 1 - x^{-a} + \text{Offset}`

    [a, Offset]

* Pareto B (``ParetoB``)

  * Pareto B

    :math:`y = a{(1 - x^{-b})}`

    [a, b]

  * Pareto B With Offset

    :math:`y = a{(1 - x^{-b})} + \text{Offset}`

    [a, b, Offset]

* Pareto C (``ParetoC``)

  * Pareto C

    :math:`y = 1.0 - {(1.0 / {(1 + ax)}^{b})}`

    [a, b]

  * Pareto C With Offset

    :math:`y = 1.0 - {(1.0 / {(1 + ax)}^{b})} + \text{Offset}`

    [a, b, Offset]

* Pareto D (``ParetoD``)

  * Pareto D

    :math:`y = 1.0 - {(1.0 / x^{a})}`

    [a]

  * Pareto D With Offset

    :math:`y = 1.0 - {(1.0 / x^{a})} + \text{Offset}`

    [a, Offset]

* Pear-shaped Quartic (``PearShapedQuartic``)

  * Pear-shaped Quartic

    :math:`y = a{(x^{3}{(b-x)} /c^{2})}^{0.5}`

    [a, b, c]

  * Pear-shaped Quartic With Offset

    :math:`y = a{(x^{3}{(b-x)} /c^{2})}^{0.5} + \text{Offset}`

    [a, b, c, Offset]

* Pear-shaped Quartic Transform (``PearShapedQuarticTransform``)

  * Pear-shaped Quartic Transform

    :math:`y = a{({(dx+f)}^{3}{(b-{(dx+f)})} /c^{2})}^{0.5}`

    [a, b, c, d, f]

  * Pear-shaped Quartic Transform With Offset

    :math:`y = a{({(dx+f)}^{3}{(b-{(dx+f)})} /c^{2})}^{0.5} + \text{Offset}`

    [a, b, c, d, f, Offset]

* Physicist Peter's Custom Equation (``PhysicistPeterCustomEquation``)

  * Physicist Peter's Custom Equation

    :math:`y = A + B*{(X-C)} + 0.5*G*{(X-C)}^2`

    [A, B, C, G]

* Physicist Peter's Pendulum Traversal (``PhysicistPeterPendulumTraversal``)

  * Physicist Peter's Pendulum Traversal

    :math:`y = a*{(x + b)}^{1/2}`

    [a, b]

  * Physicist Peter's Pendulum Traversal With Offset

    :math:`y = a*{(x + b)}^{1/2} + \text{Offset}`

    [a, b, Offset]

* Polytrope (``Polytrope``)

  * Polytrope

    :math:`y = a / x^{b}`

    [a, b]

  * Polytrope With Offset

    :math:`y = a / x^{b} + \text{Offset}`

    [a, b, Offset]

* Polytrope Transform (``PolytropeTransform``)

  * Polytrope Transform

    :math:`y = a / {(cx + d)}^{b}`

    [a, b, c, d]

  * Polytrope Transform With Offset

    :math:`y = a / {(cx + d)}^{b} + \text{Offset}`

    [a, b, c, d, Offset]

* Pursuit Curve (``PursuitCurve``)

  * Pursuit Curve

    :math:`y = ax^{2} - log{(x)}`

    [a]

  * Pursuit Curve With Offset

    :math:`y = ax^{2} - log{(x)} + \text{Offset}`

    [a, Offset]

* Pursuit Curve Transform (``PursuitCurve_Transform``)

  * Pursuit Curve Transform

    :math:`y = a{(bx + c)}^{2} - log{(bx + c)}`

    [a, b, c]

  * Pursuit Curve Transform With Offset

    :math:`y = a{(bx + c)}^{2} - log{(bx + c)} + \text{Offset}`

    [a, b, c, Offset]

* Rectangular Hyperbola A (``RectangularHyperbolaA``)

  * Rectangular Hyperbola A

    :math:`y = ax/{(b+x)}`

    [a, b]

  * Rectangular Hyperbola A With Offset

    :math:`y = ax/{(b+x)} + \text{Offset}`

    [a, b, Offset]

* Rectangular Hyperbola B (``RectangularHyperbolaB``)

  * Rectangular Hyperbola B

    :math:`y = ax/{(b+x)} + cx`

    [a, b, c]

  * Rectangular Hyperbola B With Offset

    :math:`y = ax/{(b+x)} + cx + \text{Offset}`

    [a, b, c, Offset]

* Serpentine (``Serpentine``)

  * Serpentine

    :math:`y = ax / {(1.0 + bx^{2})}`

    [a, b]

  * Serpentine With Offset

    :math:`y = ax / {(1.0 + bx^{2})} + \text{Offset}`

    [a, b, Offset]

* Shifted Reciprocal (``ShiftedReciprocal``)

  * Shifted Reciprocal

    :math:`y = 1.0 / {(a - x)}`

    [a]

  * Shifted Reciprocal With Offset

    :math:`y = 1.0 / {(a - x)} + \text{Offset}`

    [a, Offset]

* Square Modified (``Square_Modified``)

  * Square Modified

    :math:`y = x^{2} - ax`

    [a]

  * Square Modified With Offset

    :math:`y = x^{2} - ax + \text{Offset}`

    [a, Offset]

* Square Modified Transform (``Square_Modified_Transform``)

  * Square Modified Transform

    :math:`y = {(bx + c)}^{2} - a{(bx + c)}`

    [a, b, c]

  * Square Modified Transform With Offset

    :math:`y = {(bx + c)}^{2} - a{(bx + c)} + \text{Offset}`

    [a, b, c, Offset]

* Timothy Strobel's Custom Equation (``TimothyStrobelCustomEquation``)

  * Timothy Strobel's Custom Equation

    :math:`y ={(A-B*X^C)}*{(1-{(0.5+{(arctan{({(X-D)}/E)})}/pi)})}+{(F-G*X^H)}*{(0.5+{(arctan{({(X-D)}/E)})}/pi)}`

    [A, B, C, D, E, F, G, H]

  * Timothy Strobel's Custom Equation With Offset

    :math:`y ={(A-B*X^C)}*{(1-{(0.5+{(arctan{({(X-D)}/E)})}/pi)})}+{(F-G*X^H)}*{(0.5+{(arctan{({(X-D)}/E)})}/pi)}+ \text{Offset}`

    [A, B, C, D, E, F, G, H, Offset]

* Transition State Rate Constant Law (``TransitionStateRateConstantLaw``)

  * Transition State Rate Constant Law

    :math:`y = ax^{b} * \exp{(-c/x)}`

    [a, b, c]

  * Transition State Rate Constant Law With Offset

    :math:`y = ax^{b} * \exp{(-c/x)} + \text{Offset}`

    [a, b, c, Offset]

* Trisectrix Of Maclaurin (``TrisectrixOfMaclaurin``)

  * Trisectrix Of Maclaurin

    :math:`y = a{(x^{2}{(3b-x)} / {(b+x)})}^{0.5}`

    [a, b]

  * Trisectrix Of Maclaurin With Offset

    :math:`y = a{(x^{2}{(3b-x)} / {(b+x)})}^{0.5} + \text{Offset}`

    [a, b, Offset]

* Trisectrix Of Maclaurin Transform (``TrisectrixOfMaclaurinTransform``)

  * Trisectrix Of Maclaurin Transform

    :math:`y = a{({(cx+d)}^{2}{(3b-{(cx+d)})} /{(b+{(cx+d)})})}^{0.5}`

    [a, b, c, d]

  * Trisectrix Of Maclaurin Transform With Offset

    :math:`y = a{({(cx+d)}^{2}{(3b-{(cx+d)})} /{(b+{(cx+d)})})}^{0.5} + \text{Offset}`

    [a, b, c, d, Offset]

* Witch Of Maria Agnesi A (``WitchOfAgnesiA``)

  * Witch Of Maria Agnesi A

    :math:`y = 8a^{3} / {(x^{2} +4a^{2})}`

    [a]

  * Witch Of Maria Agnesi A With Offset

    :math:`y = 8a^{3} / {(x^{2} +4a^{2})} + \text{Offset}`

    [a, Offset]

* Witch Of Maria Agnesi B (``WitchOfAgnesiB``)

  * Witch Of Maria Agnesi B

    :math:`y = a^{3} / {(x^{2} + a^{2})}`

    [a]

  * Witch Of Maria Agnesi B With Offset

    :math:`y = a^{3} / {(x^{2} + a^{2})}+ \text{Offset}`

    [a, Offset]

* Witch Of Maria Agnesi C (``WitchOfAgnesiC``)

  * Witch Of Maria Agnesi C

    :math:`y = a^{3} / {({(x * b + c)}^{2} +a^{2})}`

    [a, b, c]

  * Witch Of Maria Agnesi C With Offset

    :math:`y = a^{3} / {({(x * b + c)}^{2} +a^{2})} + \text{Offset}`

    [a, b, c, Offset]


NIST
^^^^

* NIST Bennett5 (``NIST_Bennett5``)

  * NIST Bennett5

    :math:`y = a * {(b+x)}^{-1/c}`

    [a, b, c]

  * NIST Bennett5 With Offset

    :math:`y = a * {(b+x)}^{-1/c} + \text{Offset}`

    [a, b, c, Offset]

* NIST BoxBOD (``NIST_BoxBOD``)

  * NIST BoxBOD

    :math:`y = a * {(1.0-\exp{(-b*x)})}`

    [a, b]

  * NIST BoxBOD With Offset

    :math:`y = a * {(1.0-\exp{(-b*x)})} + \text{Offset}`

    [a, b, Offset]

* NIST Chwirut (``NIST_Chwirut``)

  * NIST Chwirut

    :math:`y = \exp{(-a*x)} / {(b + c*x)}`

    [a, b, c]

  * NIST Chwirut With Offset

    :math:`y = \exp{(-a*x)} / {(b + c*x)} + \text{Offset}`

    [a, b, c, Offset]

* NIST DanWood (``NIST_DanWood``)

  * NIST DanWood

    :math:`y = a*x^{b}`

    [a, b]

  * NIST DanWood With Offset

    :math:`y = a*x^{b} + \text{Offset}`

    [a, b, Offset]

* NIST ENSO (``NIST_ENSO``)

  * NIST ENSO

    :math:`y = a + b*cos{(2*pi*x/12)} + c*sin{(2*pi*x/12)} + f*cos{(2*pi*x/d)} +g*sin{(2*pi*x/d)} + i*cos{(2*pi*x/h)} + j*sin{(2*pi*x/h)}`

    [a, b, c, d, f, g, h, i, j]

* NIST Eckerle4 (``NIST_Eckerle4``)

  * NIST Eckerle4

    :math:`y = {(a/b)} * \exp{(-0.5*{({(x-c)}/b)}^{2})}`

    [a, b, c]

  * NIST Eckerle4 With Offset

    :math:`y = {(a/b)} * \exp{(-0.5*{({(x-c)}/b)}^{2})} + \text{Offset}`

    [a, b, c, Offset]

* NIST Gauss (``NIST_Gauss``)

  * NIST Gauss

    :math:`y = a*\exp{(-b*x)} + c*\exp{(-{(x-d)}^{2} /f^{2})} + g*\exp{(-{(x-h)}^{2} /i^{2})}`

    [a, b, c, d, f, g, h, i]

  * NIST Gauss With Offset

    :math:`y = a*\exp{(-b*x)} + c*\exp{(-{(x-d)}^{2} /f^{2})} + g*\exp{(-{(x-h)}^{2} /i^{2})} + \text{Offset}`

    [a, b, c, d, f, g, h, i, Offset]

* NIST Hahn (``NIST_Hahn``)

  * NIST Hahn

    :math:`y = {(a + b*x + c*x^{2} + d*x^{3})} / {(1.0 +f*x + g*x^{2} + h*x^{3})}`

    [a, b, c, d, f, g, h]

  * NIST Hahn With Offset

    :math:`y = {(a + b*x + c*x^{2} + d*x^{3})} / {(1.0 +f*x + g*x^{2} + h*x^{3})} + \text{Offset}`

    [a, b, c, d, f, g, h, Offset]

* NIST Kirby (``NIST_Kirby``)

  * NIST Kirby

    :math:`y = {(a + b*x + c*x^{2})} / {(1.0 + d*x +f*x^{2})}`

    [a, b, c, d, f]

  * NIST Kirby With Offset

    :math:`y = {(a + b*x + c*x^{2})} / {(1.0 + d*x +f*x^{2})} + \text{Offset}`

    [a, b, c, d, f, Offset]

* NIST Lanczos (``NIST_Lanczos``)

  * NIST Lanczos

    :math:`y = a*\exp{(-b*x)} + c*\exp{(-d*x)} + f*\exp{(-g*x)}`

    [a, b, c, d, f, g]

  * NIST Lanczos With Offset

    :math:`y = a*\exp{(-b*x)} + c*\exp{(-d*x)} + f*\exp{(-g*x)} + \text{Offset}`

    [a, b, c, d, f, g, Offset]

* NIST MGH09 (``NIST_MGH09``)

  * NIST MGH09

    :math:`y = a * {(x^{2} + b*x)} / {(x^{2} + c*x + d)}`

    [a, b, c, d]

  * NIST MGH09 With Offset

    :math:`y = a * {(x^{2} + b*x)} / {(x^{2} + c*x + d)}+ \text{Offset}`

    [a, b, c, d, Offset]

* NIST MGH10 (``NIST_MGH10``)

  * NIST MGH10

    :math:`y = a * \exp{(b/{(x+c)})}`

    [a, b, c]

  * NIST MGH10 With Offset

    :math:`y = a * \exp{(b/{(x+c)})} + \text{Offset}`

    [a, b, c, Offset]

* NIST MGH17 (``NIST_MGH17``)

  * NIST MGH17

    :math:`y = a + b*\exp{(-x*d)} + c*\exp{(-x*f)}`

    [a, b, c, d, f]

* NIST Misra1a (``NIST_Misra1a``)

  * NIST Misra1a

    :math:`y = a * {(1.0 - \exp{(-b*x)})}`

    [a, b]

  * NIST Misra1a With Offset

    :math:`y = a * {(1.0 - \exp{(-b*x)})} + \text{Offset}`

    [a, b, Offset]

* NIST Misra1b (``NIST_Misra1b``)

  * NIST Misra1b

    :math:`y = a * {(1.0 - {(1.0+b*x/2.0)}^{-2.0})}`

    [a, b]

  * NIST Misra1b With Offset

    :math:`y = a * {(1.0 - {(1.0+b*x/2.0)}^{-2.0})} + \text{Offset}`

    [a, b, Offset]

* NIST Misra1c (``NIST_Misra1c``)

  * NIST Misra1c

    :math:`y = a * {(1.0 - {(1.0 + 2.0*b*x)}^{-0.5})}`

    [a, b]

  * NIST Misra1c With Offset

    :math:`y = a * {(1.0 - {(1.0 + 2.0*b*x)}^{-0.5})} + \text{Offset}`

    [a, b, Offset]

* NIST Misra1d (``NIST_Misra1d``)

  * NIST Misra1d

    :math:`y = a * b * x * {(1.0 + b*x)}^{-1.0}`

    [a, b]

  * NIST Misra1d With Offset

    :math:`y = a * b * x * {(1.0 + b*x)}^{-1.0} + \text{Offset}`

    [a, b, Offset]

* NIST Rat42 (``NIST_Rat42``)

  * NIST Rat42

    :math:`y = a / {(1.0 + \exp{(b - c*x)})}`

    [a, b, c]

  * NIST Rat42 With Offset

    :math:`y = a / {(1.0 + \exp{(b - c*x)})} + \text{Offset}`

    [a, b, c, Offset]

* NIST Rat43 (``NIST_Rat43``)

  * NIST Rat43

    :math:`y = a / {({(1.0 + \exp{(b - c*x)})}^{{(1.0/d)}})}`

    [a, b, c, d]

  * NIST Rat43 With Offset

    :math:`y = a / {({(1.0 + \exp{(b - c*x)})}^{{(1.0/d)}})} + \text{Offset}`

    [a, b, c, d, Offset]

* NIST Roszman (``NIST_Roszman``)

  * NIST Roszman

    :math:`y = a - bx - {(arctan{(c/{(x-d)})} / pi)}`

    [a, b, c, d]

* NIST Thurber (``NIST_Thurber``)

  * NIST Thurber

    :math:`y = {(a + bx + cx^{2} + dx^{3})} / {(1.0 + fx+ gx^{2} + hx^{3})}`

    [a, b, c, d, f, g, h]

  * NIST Thurber With Offset

    :math:`y = {(a + bx + cx^{2} + dx^{3})} / {(1.0 + fx+ gx^{2} + hx^{3})} + \text{Offset}`

    [a, b, c, d, f, g, h, Offset]


Optical
^^^^^^^

* CAUCHY (``Cauchy``)

  * CAUCHY

    :math:`n = A + B/x^{2} + C/x^{4}`

    [A, B, C]

* CONRADY1 (``Conrady1``)

  * CONRADY1

    :math:`n = A + B/x + C/x^{3.5}`

    [A, B, C]

* CONRADY2 (``Conrady2``)

  * CONRADY2

    :math:`n = A + B/x^{2} + C/x^{3.5}`

    [A, B, C]

* HARTMANN1 (``Hartmann1``)

  * HARTMANN1

    :math:`n = A + B/{(C - x)}`

    [A, B, C]

* HARTMANN2 (``Hartmann2``)

  * HARTMANN2

    :math:`n = A + B/{(C - x)}^{2}`

    [A, B, C]

* HARTMANN3a (``Hartmann3a``)

  * HARTMANN3a

    :math:`n = A + B/{(C - x)}^{1.2}`

    [A, B, C]

* HARTMANN3b (``Hartmann3b``)

  * HARTMANN3b

    :math:`n = A/{(x - B)}^{1.2}`

    [A, B]

  * HARTMANN3b With Offset

    :math:`n = A/{(x - B)}^{1.2} + \text{Offset}`

    [A, B, Offset]

* HARTMANN4 (``Hartmann4``)

  * HARTMANN4

    :math:`n = A + B/{(C - x)} + D/{(E - x)}`

    [A, B, C, D, E]

* HERZBRGR2X2 (``Herzberger2X2``)

  * HERZBRGR2X2

    :math:`n = A + Bx^{2} + C / {(x^{2} - 0.028)} + D /{(x^{2} - 0.028)}^{2}`

    [A, B, C, D]

* HERZBRGR3X2 (``Herzberger3X2``)

  * HERZBRGR3X2

    :math:`n = A + Bx^{2} + Cx^{4} + D /{(x^{2} - 0.028)} + E / {(x^{2} -0.028)}^{2}`

    [A, B, C, D, E]

* HERZBRGR3X3 (``Herzberger3X3``)

  * HERZBRGR3X3

    :math:`n = A + Bx^{2} + Cx^{4} + D /{(x^{2} - 0.028)} + E / {(x^{2} -0.028)}^{2} + F / {(x^{2} -0.028)}^{4}`

    [A, B, C, D, E, F]

* HERZBRGR4X2 (``Herzberger4X2``)

  * HERZBRGR4X2

    :math:`n = A + Bx^{2} + Cx^{4} +Dx^{6} + E / {(x^{2} - 0.028)} + F /{(x^{2} - 0.028)}^{2}`

    [A, B, C, D, E, F]

* HERZBRGR5X2 (``Herzberger5X2``)

  * HERZBRGR5X2

    :math:`n = A + Bx^{2} + Cx^{4} +Dx^{6} + Ex^{8} + F /{(x^{2} - 0.028)} + G / {(x^{2} -0.028)}^{2}`

    [A, B, C, D, E, F, G]

* HERZBRGRJK (``HerzbergerJK``)

  * HERZBRGRJK

    :math:`n = A + Bx^{2} + Cx^{4} +Dx^{6} + E / {(x^{2} - J)} + F /{(x^{2} - K)}^{2}`

    [A, B, C, D, E, F, J, K]

* HoO1 (``HoO1``)

  * HoO1

    :math:`n^{2} = A + Bx^{2} + C /{(x^{2} - D^{2})}`

    [A, B, C, D]

* HoO2 (``HoO2``)

  * HoO2

    :math:`n^{2} = A + Bx^{2} + Cx^{2}/ {(x^{2} - D^{2})}`

    [A, B, C, D]

* KINGSLAKE1 (``Kingslake1``)

  * KINGSLAKE1

    :math:`n^{2} = A + B/{(x^{2}-C^{2})}+ D/{(x^{2}-E^{2})}`

    [A, B, C, D, E]

* KINGSLAKE2 (``Kingslake2``)

  * KINGSLAKE2

    :math:`n^{2} = A + B/{(x^{2}-C^{2})}+ D/{(x^{2}-E^{2})} +F/{(x^{2}-G^{2})}`

    [A, B, C, D, E, F, G]

* MISC01 (``Misc01``)

  * MISC01

    :math:`n^{2} = A + B/{(x^{2}-C^{2})}`

    [A, B, C]

* MISC02 (``Misc02``)

  * MISC02

    :math:`n^{2} = A + Bx^{2} +C/{(x^{2}-D^{2})}`

    [A, B, C, D]

* MISC03 (``Misc03``)

  * MISC03

    :math:`n^{2} = A + B/x^{2} +Cx^{2}/{(x^{2}-D^{2})}`

    [A, B, C, D]

* MISC04 (``Misc04``)

  * MISC04

    :math:`n^{2} = A + Bx^{2} + Cx^{4}+ D/x^{2} +Ex^{2}/{(x^{2}-F+{(Gx^{2}/{(x^{2}-F)})})}`

    [A, B, C, D, E, F, G]

* SCHOTT2X3 (``Schott2X3``)

  * SCHOTT2X3

    :math:`n^{2} = A + Bx^{2} +C/x^{2} + D/x^{4} + E/x^{6}`

    [A, B, C, D, E]

* SCHOTT2X4 (``Schott2X4``)

  * SCHOTT2X4

    :math:`n^{2} = A + Bx^{2} +C/x^{2} + D/x^{4} + E/x^{6}+ F/x^{8}`

    [A, B, C, D, E, F]

* SCHOTT2X5 (``Schott2X5``)

  * SCHOTT2X5

    :math:`n^{2} = A + Bx^{2} +C/x^{2} + D/x^{4} + E/x^{6}+ F/x^{8} + G/x^{10}`

    [A, B, C, D, E, F, G]

* SCHOTT2X6 (``Schott2X6``)

  * SCHOTT2X6

    :math:`n^{2} = A + Bx^{2} +C/x^{2} + D/x^{4} + E/x^{6}+ F/x^{8} + G/x^{10} +H/x^{12}`

    [A, B, C, D, E, F, G, H]

* SCHOTT3X3 (``Schott3X3``)

  * SCHOTT3X3

    :math:`n^{2} = A + Bx^{2} + Cx^{4}+ D/x^{2} + E/x^{4} +F/x^{6}`

    [A, B, C, D, E, F]

* SCHOTT3X4 (``Schott3X4``)

  * SCHOTT3X4

    :math:`n^{2} = A + Bx^{2} + Cx^{4}+ D/x^{2} + E/x^{4} +F/x^{6} + G/x^{8}`

    [A, B, C, D, E, F, G]

* SCHOTT3X5 (``Schott3X5``)

  * SCHOTT3X5

    :math:`n^{2} = A + Bx^{2} + Cx^{4}+ D/x^{2} + E/x^{4} +F/x^{6} + G/x^{8} +H/x^{10}`

    [A, B, C, D, E, F, G, H]

* SCHOTT4X4 (``Schott4X4``)

  * SCHOTT4X4

    :math:`n^{2} = A + Bx^{2} + Cx^{4}+ Dx^{6} + E/x^{2} +F/x^{4} + G/x^{6} + H/x^{8}`

    [A, B, C, D, E, F, G, H]

* SCHOTT5X5 (``Schott5X5``)

  * SCHOTT5X5

    :math:`n^{2} = A + Bx^{2} + Cx^{4}+ Dx^{6} + Ex^{8} + F/x^{2}+ G/x^{4} + H/x^{6} +J/x^{8} + K/x^{10}`

    [A, B, C, D, E, F, G, H, J, K]

* SELL1T (``Sell1T``)

  * SELL1T

    :math:`n^{2} = 1 + Ax^{2} / {(x^{2}- B^{2})}`

    [A, B]

* SELL1TA (``Sell1TA``)

  * SELL1TA

    :math:`n^{2} = A + Bx^{2} / {(x^{2}- C^{2})}`

    [A, B, C]

* SELL2T (``Sell2T``)

  * SELL2T

    :math:`n^{2} = 1 +Ax^{2}/{(x^{2}-B^{2})} +Cx^{2}/{(x^{2}-D^{2})}`

    [A, B, C, D]

* SELL2TA (``Sell2TA``)

  * SELL2TA

    :math:`n^{2} = A +Bx^{2}/{(x^{2}-C^{2})} +Dx^{2}/{(x^{2}-E^{2})}`

    [A, B, C, D, E]

* SELL3T (``Sell3T``)

  * SELL3T

    :math:`n^{2} = 1 +Ax^{2}/{(x^{2}-B^{2})} +Cx^{2}/{(x^{2}-D^{2})} +Ex^{2}/{(x^{2}-F^{2})}`

    [A, B, C, D, E, F]

* SELL3TA (``Sell3TA``)

  * SELL3TA

    :math:`n^{2} = A +Bx^{2}/{(x^{2}-C^{2})} +Dx^{2}/{(x^{2}-E^{2})} +Fx^{2}/{(x^{2}-G^{2})}`

    [A, B, C, D, E, F, G]

* SELL4T (``Sell4T``)

  * SELL4T

    :math:`n^{2} = 1 +Ax^{2}/{(x^{2}-B^{2})} +Cx^{2}/{(x^{2}-D^{2})} +Ex^{2}/{(x^{2}-F^{2})} +Gx^{2}/{(x^{2}-H^{2})}`

    [A, B, C, D, E, F, G, H]

* SELL4TA (``Sell4TA``)

  * SELL4TA

    :math:`n^{2} = A +Bx^{2}/{(x^{2}-C^{2})} +Dx^{2}/{(x^{2}-E^{2})} +Fx^{2}/{(x^{2}-G^{2})} +Hx^{2}/{(x^{2}-J^{2})}`

    [A, B, C, D, E, F, G, H, J]

* SELL5T (``Sell5T``)

  * SELL5T

    :math:`n^{2} = 1 +Ax^{2}/{(x^{2}-B^{2})} +Cx^{2}/{(x^{2}-D^{2})} +Ex^{2}/{(x^{2}-F^{2})} +Gx^{2}/{(x^{2}-H^{2})} +Jx^{2}/{(x^{2}-K^{2})}`

    [A, B, C, D, E, F, G, H, J, K]

* SELL5TA (``Sell5TA``)

  * SELL5TA

    :math:`n^{2} = A +Bx^{2}/{(x^{2}-C^{2})} +Dx^{2}/{(x^{2}-E^{2})} +Fx^{2}/{(x^{2}-G^{2})} +Hx^{2}/{(x^{2}-J^{2})} +Kx^{2}/{(x^{2}-M^{2})}`

    [A, B, C, D, E, F, G, H, J, K, M]

* SELL6TA (``Sell6TA``)

  * SELL6TA

    :math:`n^{2} = A +Bx^{2}/{(x^{2}-C^{2})} +Dx^{2}/{(x^{2}-E^{2})} +Fx^{2}/{(x^{2}-G^{2})} +Hx^{2}/{(x^{2}-J^{2})} +Kx^{2}/{(x^{2}-M^{2})} +Nx^{2}/{(x^{2}-P^{2})}`

    [A, B, C, D, E, F, G, H, J, K, M, N, P]

* SELL7TA (``Sell7TA``)

  * SELL7TA

    :math:`n^{2} = A +Bx^{2}/{(x^{2}-C^{2})} +Dx^{2}/{(x^{2}-E^{2})} +Fx^{2}/{(x^{2}-G^{2})} +Hx^{2}/{(x^{2}-J^{2})} +Kx^{2}/{(x^{2}-M^{2})} +Nx^{2}/{(x^{2}-P^{2})} +Qx^{2}/{(x^{2}-R^{2})}`

    [A, B, C, D, E, F, G, H, J, K, M, N, P, Q, R]

* SELLMOD1 (``Sellmod1``)

  * SELLMOD1

    :math:`n^{2} = A + Bx + Cx^{2} +Dx^{2}/{(x^{2}-E^{2})}`

    [A, B, C, D, E]

* SELLMOD1A (``Sellmod1A``)

  * SELLMOD1A

    :math:`n^{2} = A + Bx + Cx^{2} +D/{(x^{2}-E^{2})}`

    [A, B, C, D, E]

* SELLMOD2 (``Sellmod2``)

  * SELLMOD2

    :math:`n^{2} = A + Bx + Cx^{4} +Dx^{2}/{(x^{2}-E^{2})}`

    [A, B, C, D, E]

* SELLMOD2A (``Sellmod2A``)

  * SELLMOD2A

    :math:`n^{2} = A + Bx + Cx^{4} +D/{(x^{2}-E^{2})}`

    [A, B, C, D, E]

* SELLMOD3 (``Sellmod3``)

  * SELLMOD3

    :math:`n^{2} ={(Ax^{2}+B)}/{(x^{2}-C^{2})} +Dx^{2}/{(x^{2}-E^{2})}`

    [A, B, C, D, E]

  * SELLMOD3 With Offset

    :math:`n^{2} ={(Ax^{2}+B)}/{(x^{2}-C^{2})} +Dx^{2}/{(x^{2}-E^{2})} +\text{Offset}`

    [A, B, C, D, E, Offset]

* SELLMOD4 (``Sellmod4``)

  * SELLMOD4

    :math:`n^{2} = A + Bx^{2} +C/x^{2} +Dx^{2}/{(x^{2}-E^{2})} +Fx^{2}/{(x^{2}-G^{2})}`

    [A, B, C, D, E, F, G]

* SELLMOD4A (``Sellmod4A``)

  * SELLMOD4A

    :math:`n^{2} = A + Bx^{2} +C/x^{2} + D/{(x^{2}-E^{2})} +F/{(x^{2}-G^{2})}`

    [A, B, C, D, E, F, G]

* SELLMOD5 (``Sellmod5``)

  * SELLMOD5

    :math:`n^{2} = A + Bx^{2} +Cx^{2}/{(x^{2}-D^{2})} +Ex^{2}/{(x^{2}-F^{2})}`

    [A, B, C, D, E, F]

* SELLMOD6 (``Sellmod6``)

  * SELLMOD6

    :math:`n^{2} = A +Bx^{2}/{(x^{2}-C^{2})} +D/{(x^{2}-E^{2})}`

    [A, B, C, D, E]

* SELLMOD7 (``Sellmod7``)

  * SELLMOD7

    :math:`n^{2} = A + Bx^{2} + Cx^{4}+ D/x^{6} +Ex^{2}/{(x^{2}-F^{2})}`

    [A, B, C, D, E, F]

* SELLMOD7A (``Sellmod7A``)

  * SELLMOD7A

    :math:`n^{2} = A + Bx^{2} + Cx^{4}+ D/x^{6} + E/{(x^{2}-F^{2})}`

    [A, B, C, D, E, F]

* SELLMOD8 (``Sellmod8``)

  * SELLMOD8

    :math:`n^{2} = A + Bx^{2} + Cx^{4}+ D/{(x^{2}-E^{2})} +F/{(x^{2}-G^{2})}`

    [A, B, C, D, E, F, G]

* SELLMOD9 (``Sellmod9``)

  * SELLMOD9

    :math:`n^{2} = A + B/x^{2} +C/x^{4} + D/x^{6} +Ex^{2}/{(x^{2}-F^{2})}`

    [A, B, C, D, E, F]


Peak
^^^^

* Arnold Cohen Log-Normal Peak Shifted (``ArnoldCohenLogNormalShifted``)

  * Arnold Cohen Log-Normal Peak Shifted

    :math:`y = a * {(\exp{(-0.5 * {({(ln{(x-f)}-b)}/c)}^{2})})} / {(d * {(x-g)})}`

    [a, b, c, d, f, g]

  * Arnold Cohen Log-Normal Peak Shifted With Offset

    :math:`y = a * {(\exp{(-0.5 * {({(ln{(x-f)}-b)}/c)}^{2})})} / {(d * {(x-g)})} +\text{Offset}`

    [a, b, c, d, f, g, Offset]

* Arnold Cohen Two-Parameter Log-Normal Peak Shifted (``ArnoldCohenTwoParameterLogNormalShifted``)

  * Arnold Cohen Two-Parameter Log-Normal Peak Shifted

    :math:`y = \exp{(-0.5 * {({(ln{(x-d)}-b)}/c)}^{2})} / {(\sqrt{(2*pi)} * c *{(x-f)})}`

    [b, c, d, f]

  * Arnold Cohen Two-Parameter Log-Normal Peak Shifted With Offset

    :math:`y = \exp{(-0.5 * {({(ln{(x-d)}-b)}/c)}^{2})} / {(\sqrt{(2*pi)} * c *{(x-f)})} + \text{Offset}`

    [b, c, d, f, Offset]

* Box Lucas A (``BoxLucasA``)

  * Box Lucas A

    :math:`y = a * {(1.0 - b^{x})}`

    [a, b]

  * Box Lucas A With Offset

    :math:`y = a * {(1.0 - b^{x})} + \text{Offset}`

    [a, b, Offset]

* Box Lucas A Shifted (``BoxLucasAShifted``)

  * Box Lucas A Shifted

    :math:`y = a * {(1.0 - b^{x-c})}`

    [a, b, c]

  * Box Lucas A Shifted With Offset

    :math:`y = a * {(1.0 - b^{x-c})} + \text{Offset}`

    [a, b, c, Offset]

* Box Lucas B (``BoxLucasB``)

  * Box Lucas B

    :math:`y = a * {(1.0 - \exp{(-bx)})}`

    [a, b]

  * Box Lucas B With Offset

    :math:`y = a * {(1.0 - \exp{(-bx)})} + \text{Offset}`

    [a, b, Offset]

* Box Lucas B Shifted (``BoxLucasBShifted``)

  * Box Lucas B Shifted

    :math:`y = a * {(1.0 - \exp{(-b{(x-c)})})}`

    [a, b, c]

  * Box Lucas B Shifted With Offset

    :math:`y = a * {(1.0 - \exp{(-b{(x-c)})})} + \text{Offset}`

    [a, b, c, Offset]

* Box Lucas C (``BoxLucasC``)

  * Box Lucas C

    :math:`y = {(a / {(a-b)})} * {(\exp{(-bx)} - \exp{(-ax)})}`

    [a, b]

  * Box Lucas C With Offset

    :math:`y = {(a / {(a-b)})} * {(\exp{(-bx)} - \exp{(-ax)})} + \text{Offset}`

    [a, b, Offset]

* Box Lucas C shifted (``BoxLucasCShifted``)

  * Box Lucas C shifted

    :math:`y = {(a / {(a-b)})} * {(\exp{(-b{(x-c)})} - \exp{(-a{(x-c)})})}`

    [a, b, c]

  * Box Lucas C shifted With Offset

    :math:`y = {(a / {(a-b)})} * {(\exp{(-b{(x-c)})} - \exp{(-a{(x-c)})})} + \text{Offset}`

    [a, b, c, Offset]

* Extreme Value 4 Parameter Peak (``ExtremeValue4ParameterPeak``)

  * Extreme Value 4 Parameter Peak

    :math:`y = a * \exp{(-x + b + c - c*d*\exp{(-1.0 * {({(x + c*ln{(d)} - b)} / c)})} /{(c*d)})}`

    [a, b, c, d]

  * Extreme Value 4 Parameter Peak With Offset

    :math:`y = a * \exp{(-x + b + c - c*d*\exp{(-1.0 * {({(x + c*ln{(d)} - b)} / c)})} /{(c*d)})} + \text{Offset}`

    [a, b, c, d, Offset]

* Extreme Value Area (``ExtremeValueArea``)

  * Extreme Value Area

    :math:`y = {(a/c)} * \exp{(-\exp{(-{({(x-b)}/c)})}-{({(x-b)}/c)})}`

    [a, b, c]

  * Extreme Value Area With Offset

    :math:`y = {(a/c)} * \exp{(-\exp{(-{({(x-b)}/c)})}-{({(x-b)}/c)})} + \text{Offset}`

    [a, b, c, Offset]

* Extreme Value Peak (``ExtremeValuePeak``)

  * Extreme Value Peak

    :math:`y = a * \exp{(-\exp{(-{({(x-b)}/c)})}-{({(x-b)}/c)}+1.0)}`

    [a, b, c]

  * Extreme Value Peak With Offset

    :math:`y = a * \exp{(-\exp{(-{({(x-b)}/c)})}-{({(x-b)}/c)}+1.0)} + \text{Offset}`

    [a, b, c, Offset]

* Gaussian Area (``GaussianArea``)

  * Gaussian Area

    :math:`y = {(a / {(pow{(2*pi, 0.5)} * c)})} * \exp{(-0.5 *{({(x-b)}/c)}^{2})}`

    [a, b, c]

  * Gaussian Area With Offset

    :math:`y = {(a / {(pow{(2*pi, 0.5)} * c)})} * \exp{(-0.5 *{({(x-b)}/c)}^{2})} + \text{Offset}`

    [a, b, c, Offset]

* Gaussian Peak (``GaussianPeak``)

  * Gaussian Peak

    :math:`y = a * \exp{(-0.5 * {({(x-b)}/c)}^{2})}`

    [a, b, c]

  * Gaussian Peak With Offset

    :math:`y = a * \exp{(-0.5 * {({(x-b)}/c)}^{2})} + \text{Offset}`

    [a, b, c, Offset]

* Gaussian Peak Modified (``GaussianPeak_Modified``)

  * Gaussian Peak Modified

    :math:`y = a * \exp{(-0.5 * {({(x-b)}/c)}^{d})}`

    [a, b, c, d]

  * Gaussian Peak Modified With Offset

    :math:`y = a * \exp{(-0.5 * {({(x-b)}/c)}^{d})} + \text{Offset}`

    [a, b, c, d, Offset]

* Hamilton (``Hamilton``)

  * Hamilton

    :math:`Vb = Gb * {(I/mu)}^{ln{(mu/I)}/{(B*B)}} +{(Vb_{max} * I)}/{(I + sigma\_b)}`

    [Gb, mu, B, Vbmax, sigma_b]

  * Hamilton With Offset

    :math:`Vb = Gb * {(I/mu)}^{ln{(mu/I)}/{(B*B)}} +{(Vb_{max} * I)}/{(I + sigma\_b)} + \text{Offset}`

    [Gb, mu, B, Vbmax, sigma_b, Offset]

* Laplace Area (``LaplaceArea``)

  * Laplace Area

    :math:`y = {(a / {(pow{(2.0, 0.5)} * c)})} * \exp{({(-1.0 * pow{(2.0, 0.5)} * abs{(x-b)})}/c)}`

    [a, b, c]

  * Laplace Area With Offset

    :math:`y = {(a / {(pow{(2.0, 0.5)} * c)})} * \exp{({(-1.0 * pow{(2.0, 0.5)} * abs{(x-b)})}/c)}+ \text{Offset}`

    [a, b, c, Offset]

* Laplace Peak (``LaplacePeak``)

  * Laplace Peak

    :math:`y = a * \exp{({(-1.0 * pow{(2.0, 0.5)} * abs{(x-b)})}/c)}`

    [a, b, c]

  * Laplace Peak With Offset

    :math:`y = a * \exp{({(-1.0 * pow{(2.0, 0.5)} * abs{(x-b)})}/c)} + \text{Offset}`

    [a, b, c, Offset]

* Log-Normal 4 Parameter (``LogNormal4Parameter``)

  * Log-Normal 4 Parameter

    :math:`y = a * \exp{(-1.0 * {(ln{(2)} * ln{({({({(x-b)} * {(d^{2}-1)})} /{(c*d)})} + 1.0)}^{2})} / ln{(d)}^{2})}`

    [a, b, c, d]

  * Log-Normal 4 Parameter With Offset

    :math:`y = a * \exp{(-1.0 * {(ln{(2)} * ln{({({({(x-b)} * {(d^{2}-1)})} /{(c*d)})} + 1.0)}^{2})} / ln{(d)}^{2})} + \text{Offset}`

    [a, b, c, d, Offset]

* Log-Normal Peak A (``LogNormalA``)

  * Log-Normal Peak A

    :math:`y = a * \exp{(-0.5 * {({(ln{(x)}-b)}/c)}^{2})}`

    [a, b, c]

  * Log-Normal Peak A With Offset

    :math:`y = a * \exp{(-0.5 * {({(ln{(x)}-b)}/c)}^{2})} + \text{Offset}`

    [a, b, c, Offset]

* Log-Normal Peak A Shifted (``LogNormalAShifted``)

  * Log-Normal Peak A Shifted

    :math:`y = a * \exp{(-0.5 * {({(ln{(x-d)}-b)}/c)}^{2})}`

    [a, b, c, d]

  * Log-Normal Peak A Shifted With Offset

    :math:`y = a * \exp{(-0.5 * {({(ln{(x-d)}-b)}/c)}^{2})} + \text{Offset}`

    [a, b, c, d, Offset]

* Log-Normal Peak A Modified (``LogNormalA_Modified``)

  * Log-Normal Peak A Modified

    :math:`y = a * \exp{(-0.5 * {({(ln{(x)}-b)}/c)}^{d})}`

    [a, b, c, d]

  * Log-Normal Peak A Modified With Offset

    :math:`y = a * \exp{(-0.5 * {({(ln{(x)}-b)}/c)}^{d})} + \text{Offset}`

    [a, b, c, d, Offset]

* Log-Normal Peak A Modified Shifted (``LogNormalA_ModifiedShifted``)

  * Log-Normal Peak A Modified Shifted

    :math:`y = a * \exp{(-0.5 * {({(ln{(x-f)}-b)}/c)}^{d})}`

    [a, b, c, d, f]

  * Log-Normal Peak A Modified Shifted With Offset

    :math:`y = a * \exp{(-0.5 * {({(ln{(x-f)}-b)}/c)}^{d})} + \text{Offset}`

    [a, b, c, d, f, Offset]

* Log-Normal Peak B (``LogNormalB``)

  * Log-Normal Peak B

    :math:`y = a * \exp{(-0.5 * {(ln{(x/b)}/c)}^{2})}`

    [a, b, c]

  * Log-Normal Peak B With Offset

    :math:`y = a * \exp{(-0.5 * {(ln{(x/b)}/c)}^{2})} + \text{Offset}`

    [a, b, c, Offset]

* Log-Normal Peak B Shifted (``LogNormalBShifted``)

  * Log-Normal Peak B Shifted

    :math:`y = a * \exp{(-0.5 * {(ln{({(x-d/b)})}/c)}^{2})}`

    [a, b, c, d]

  * Log-Normal Peak B Shifted With Offset

    :math:`y = a * \exp{(-0.5 * {(ln{({(x-d/b)})}/c)}^{2})} + \text{Offset}`

    [a, b, c, d, Offset]

* Log-Normal Peak B Modified (``LogNormalB_Modified``)

  * Log-Normal Peak B Modified

    :math:`y = a * \exp{(-0.5 * {(ln{(x/b)}/c)}^{d})}`

    [a, b, c, d]

  * Log-Normal Peak B Modified With Offset

    :math:`y = a * \exp{(-0.5 * {(ln{(x/b)}/c)}^{d})} + \text{Offset}`

    [a, b, c, d, Offset]

* Log-Normal Peak B Modified Shifted (``LogNormalB_ModifiedShifted``)

  * Log-Normal Peak B Modified Shifted

    :math:`y = a * \exp{(-0.5 * {(ln{({(x-f)}/b)}/c)}^{d})}`

    [a, b, c, d, f]

  * Log-Normal Peak B Modified Shifted With Offset

    :math:`y = a * \exp{(-0.5 * {(ln{({(x-f)}/b)}/c)}^{d})} + \text{Offset}`

    [a, b, c, d, f, Offset]

* Logistic Area (``LogisticArea``)

  * Logistic Area

    :math:`y = a * \exp{(-1.0 * {(x-b)} / c)} / {(c * {(1.0 + \exp{(-1.0 * {(x-b)} /c)})}^{2})}`

    [a, b, c]

  * Logistic Area With Offset

    :math:`y = a * \exp{(-1.0 * {(x-b)} / c)} / {(c * {(1.0 + \exp{(-1.0 * {(x-b)} /c)})}^{2})} + \text{Offset}`

    [a, b, c, Offset]

* Logistic Peak (``LogisticPeak``)

  * Logistic Peak

    :math:`y = 4a * \exp{(-1.0 * {(x-b)} / c)} / {(1.0 + \exp{(-1.0 * {(x-b)} /c)})}^{2}`

    [a, b, c]

  * Logistic Peak With Offset

    :math:`y = 4a * \exp{(-1.0 * {(x-b)} / c)} / {(1.0 + \exp{(-1.0 * {(x-b)} /c)})}^{2} + \text{Offset}`

    [a, b, c, Offset]

* Lorentzian Modified Peak A (``LorentzianModifiedPeakA``)

  * Lorentzian Modified Peak A

    :math:`y = 1.0 / {(1.0 + {(x-a)}^{b})}`

    [a, b]

  * Lorentzian Modified Peak A With Offset

    :math:`y = 1.0 / {(1.0 + {(x-a)}^{b})} + \text{Offset}`

    [a, b, Offset]

* Lorentzian Modified Peak B (``LorentzianModifiedPeakB``)

  * Lorentzian Modified Peak B

    :math:`y = 1.0 / {(a + {(x-b)}^{c})}`

    [a, b, c]

  * Lorentzian Modified Peak B With Offset

    :math:`y = 1.0 / {(a + {(x-b)}^{c})} + \text{Offset}`

    [a, b, c, Offset]

* Lorentzian Modified Peak C (``LorentzianModifiedPeakC``)

  * Lorentzian Modified Peak C

    :math:`y = a / {(b + {(x-c)}^{d})}`

    [a, b, c, d]

  * Lorentzian Modified Peak C With Offset

    :math:`y = a / {(b + {(x-c)}^{d})} + \text{Offset}`

    [a, b, c, d, Offset]

* Lorentzian Modified Peak D (``LorentzianModifiedPeakD``)

  * Lorentzian Modified Peak D

    :math:`y = 1.0 / {(1.0 + {({(x-a)}/b)}^{c})}`

    [a, b, c]

  * Lorentzian Modified Peak D With Offset

    :math:`y = 1.0 / {(1.0 + {({(x-a)}/b)}^{c})} + \text{Offset}`

    [a, b, c, Offset]

* Lorentzian Modified Peak E (``LorentzianModifiedPeakE``)

  * Lorentzian Modified Peak E

    :math:`y = 1.0 / {(a + {({(x-b)}/c)}^{d})}`

    [a, b, c, d]

  * Lorentzian Modified Peak E With Offset

    :math:`y = 1.0 / {(a + {({(x-b)}/c)}^{d})} + \text{Offset}`

    [a, b, c, d, Offset]

* Lorentzian Modified Peak F (``LorentzianModifiedPeakF``)

  * Lorentzian Modified Peak F

    :math:`y = a / {(b + {({(x-c)}/d)}^{f})}`

    [a, b, c, d, f]

  * Lorentzian Modified Peak F With Offset

    :math:`y = a / {(b + {({(x-c)}/d)}^{f})} + \text{Offset}`

    [a, b, c, d, f, Offset]

* Lorentzian Modified Peak G (``LorentzianModifiedPeakG``)

  * Lorentzian Modified Peak G

    :math:`y = a / {(1.0 + {({(x-b)}/c)}^{d})}`

    [a, b, c, d]

  * Lorentzian Modified Peak G With Offset

    :math:`y = a / {(1.0 + {({(x-b)}/c)}^{d})} + \text{Offset}`

    [a, b, c, d, Offset]

* Lorentzian Peak A (``LorentzianPeakA``)

  * Lorentzian Peak A

    :math:`y = 1.0 / {(1.0 + {(x-a)}^{2})}`

    [a]

  * Lorentzian Peak A With Offset

    :math:`y = 1.0 / {(1.0 + {(x-a)}^{2})} + \text{Offset}`

    [a, Offset]

* Lorentzian Peak B (``LorentzianPeakB``)

  * Lorentzian Peak B

    :math:`y = 1.0 / {(a + {(x-b)}^{2})}`

    [a, b]

  * Lorentzian Peak B With Offset

    :math:`y = 1.0 / {(a + {(x-b)}^{2})} + \text{Offset}`

    [a, b, Offset]

* Lorentzian Peak C (``LorentzianPeakC``)

  * Lorentzian Peak C

    :math:`y = a / {(b + {(x-c)}^{2})}`

    [a, b, c]

  * Lorentzian Peak C With Offset

    :math:`y = a / {(b + {(x-c)}^{2})} + \text{Offset}`

    [a, b, c, Offset]

* Lorentzian Peak D (``LorentzianPeakD``)

  * Lorentzian Peak D

    :math:`y = 1.0 / {(1.0 + {({(x-a)}/b)}^{2})}`

    [a, b]

  * Lorentzian Peak D With Offset

    :math:`y = 1.0 / {(1.0 + {({(x-a)}/b)}^{2})} + \text{Offset}`

    [a, b, Offset]

* Lorentzian Peak E (``LorentzianPeakE``)

  * Lorentzian Peak E

    :math:`y = 1.0 / {(a + {({(x-b)}/c)}^{2})}`

    [a, b, c]

  * Lorentzian Peak E With Offset

    :math:`y = 1.0 / {(a + {({(x-b)}/c)}^{2})} + \text{Offset}`

    [a, b, c, Offset]

* Lorentzian Peak F (``LorentzianPeakF``)

  * Lorentzian Peak F

    :math:`y = a / {(b + {({(x-c)}/d)}^{2})}`

    [a, b, c, d]

  * Lorentzian Peak F With Offset

    :math:`y = a / {(b + {({(x-c)}/d)}^{2})} + \text{Offset}`

    [a, b, c, d, Offset]

* Lorentzian Peak G (``LorentzianPeakG``)

  * Lorentzian Peak G

    :math:`y = a / {(1.0 + {({(x-b)}/c)}^{2})}`

    [a, b, c]

  * Lorentzian Peak G With Offset

    :math:`y = a / {(1.0 + {({(x-b)}/c)}^{2})} + \text{Offset}`

    [a, b, c, Offset]

* Pseudo-Voight Peak (``PseudoVoight``)

  * Pseudo-Voight Peak

    :math:`y = a * {(d * {(1/{(1+{({(x-b)}/c)}^{2})})} + {(1-d)} * \exp{(-0.5 *{({(x-b)}/c)}^{2})})}`

    [a, b, c, d]

  * Pseudo-Voight Peak With Offset

    :math:`y = a * {(d * {(1/{(1+{({(x-b)}/c)}^{2})})} + {(1-d)} * \exp{(-0.5 *{({(x-b)}/c)}^{2})})} + \text{Offset}`

    [a, b, c, d, Offset]

* Pseudo-Voight Peak Modified (``PseudoVoight_Modified``)

  * Pseudo-Voight Peak Modified

    :math:`y = a * {(d * {(1/{(1+{({(x-b)}/c)}^{f})})} + {(1-d)} * \exp{(-0.5 *{({(x-b)}/c)}^{g})})}`

    [a, b, c, d, f, g]

  * Pseudo-Voight Peak Modified With Offset

    :math:`y = a * {(d * {(1/{(1+{({(x-b)}/c)}^{f})})} + {(1-d)} * \exp{(-0.5 *{({(x-b)}/c)}^{g})})} + \text{Offset}`

    [a, b, c, d, f, g, Offset]

* Pulse Peak (``Pulse``)

  * Pulse Peak

    :math:`y = 4a * \exp{(-{(x-b)}/c)} * {(1.0 - \exp{(-{(x-b)}/c)})}`

    [a, b, c]

  * Pulse Peak With Offset

    :math:`y = 4a * \exp{(-{(x-b)}/c)} * {(1.0 - \exp{(-{(x-b)}/c)})} + \text{Offset}`

    [a, b, c, Offset]

* UVED Fruit Growth Rate (``UVEDFruitGrowthRate``)

  * UVED Fruit Growth Rate

    :math:`y ={({(t/5)}^{{(a-1)}}*{(1-t/5)}^{{(b-1)}})}/{({({(a-1)}/{(a+b-2)})}^{{(a-1)}}*{({(b-1)}/{(a+b-2)})}^{{(b-1)}})}`

    [a, b]

  * UVED Fruit Growth Rate With Offset

    :math:`y ={({(t/5)}^{{(a-1)}}*{(1-t/5)}^{{(b-1)}})}/{({({(a-1)}/{(a+b-2)})}^{{(a-1)}}*{({(b-1)}/{(a+b-2)})}^{{(b-1)}})}+ \text{Offset}`

    [a, b, Offset]

* UVED Fruit Growth Rate B (``UVEDFruitGrowthRateB``)

  * UVED Fruit Growth Rate B

    :math:`y = c *{({(t/5)}^{{(a-1)}}*{(1-t/5)}^{{(b-1)}})}/{({({(a-1)}/{(a+b-2)})}^{{(a-1)}}*{({(b-1)}/{(a+b-2)})}^{{(b-1)}})}`

    [a, b, c]

  * UVED Fruit Growth Rate B With Offset

    :math:`y = c *{({(t/5)}^{{(a-1)}}*{(1-t/5)}^{{(b-1)}})}/{({({(a-1)}/{(a+b-2)})}^{{(a-1)}}*{({(b-1)}/{(a+b-2)})}^{{(b-1)}})}+ \text{Offset}`

    [a, b, c, Offset]

* UVED Fruit Growth Rate Scaled (``UVEDFruitGrowthRateScaled``)

  * UVED Fruit Growth Rate Scaled

    :math:`y ={(c*t)}^{{(a-1)}}*{(1-{(c*t)}^{{(b-1)}})}/{({({(a-1)}/{(a+b-2)})}^{{(a-1)}}*{({(b-1)}/{(a+b-2)})}^{{(b-1)}})}`

    [a, b, c]

  * UVED Fruit Growth Rate Scaled With Offset

    :math:`y ={(c*t)}^{{(a-1)}}*{(1-{(c*t)}^{{(b-1)}})}/{({({(a-1)}/{(a+b-2)})}^{{(a-1)}}*{({(b-1)}/{(a+b-2)})}^{{(b-1)}})}+ \text{Offset}`

    [a, b, c, Offset]

* UVED Fruit Growth Rate Scaled B (``UVEDFruitGrowthRateScaledB``)

  * UVED Fruit Growth Rate Scaled B

    :math:`y = d *{(c*t)}^{{(a-1)}}*{(1-{(c*t)}^{{(b-1)}})}/{({({(a-1)}/{(a+b-2)})}^{{(a-1)}}*{({(b-1)}/{(a+b-2)})}^{{(b-1)}})}`

    [a, b, c, d]

  * UVED Fruit Growth Rate Scaled B With Offset

    :math:`y = d *{(c*t)}^{{(a-1)}}*{(1-{(c*t)}^{{(b-1)}})}/{({({(a-1)}/{(a+b-2)})}^{{(a-1)}}*{({(b-1)}/{(a+b-2)})}^{{(b-1)}})}+ \text{Offset}`

    [a, b, c, d, Offset]

* UVED Fruit Growth Rate Transform (``UVEDFruitGrowthRateTransform``)

  * UVED Fruit Growth Rate Transform

    :math:`y ={(c*t+d)}^{{(a-1)}}*{(1-{(c*t+d)}^{{(b-1)}})}/{({({(a-1)}/{(a+b-2)})}^{{(a-1)}}*{({(b-1)}/{(a+b-2)})}^{{(b-1)}})}`

    [a, b, c, d]

  * UVED Fruit Growth Rate Transform With Offset

    :math:`y ={(c*t+d)}^{{(a-1)}}*{(1-{(c*t+d)}^{{(b-1)}})}/{({({(a-1)}/{(a+b-2)})}^{{(a-1)}}*{({(b-1)}/{(a+b-2)})}^{{(b-1)}})}+ \text{Offset}`

    [a, b, c, d, Offset]

* UVED Fruit Growth Rate Transform B (``UVEDFruitGrowthRateTransformB``)

  * UVED Fruit Growth Rate Transform B

    :math:`y = f *{(c*t+d)}^{{(a-1)}}*{(1-{(c*t+d)}^{{(b-1)}})}/{({({(a-1)}/{(a+b-2)})}^{{(a-1)}}*{({(b-1)}/{(a+b-2)})}^{{(b-1)}})}`

    [a, b, c, d, f]

  * UVED Fruit Growth Rate Transform B With Offset

    :math:`y = f *{(c*t+d)}^{{(a-1)}}*{(1-{(c*t+d)}^{{(b-1)}})}/{({({(a-1)}/{(a+b-2)})}^{{(a-1)}}*{({(b-1)}/{(a+b-2)})}^{{(b-1)}})}+ \text{Offset}`

    [a, b, c, d, f, Offset]

* Weibull Peak (``WeibullPeak``)

  * Weibull Peak

    :math:`y = a * \exp{(-0.5 * {(ln{(x/b)}/c)}^{2})}`

    [a, b, c]

  * Weibull Peak With Offset

    :math:`y = a * \exp{(-0.5 * {(ln{(x/b)}/c)}^{2})} + \text{Offset}`

    [a, b, c, Offset]

* Weibull Peak Shifted (``WeibullPeakShifted``)

  * Weibull Peak Shifted

    :math:`y = a * \exp{(-0.5 * {(ln{({(x-d)}/b)}/c)}^{2})}`

    [a, b, c, d]

  * Weibull Peak Shifted With Offset

    :math:`y = a * \exp{(-0.5 * {(ln{({(x-d)}/b)}/c)}^{2})} + \text{Offset}`

    [a, b, c, d, Offset]

* Weibull Peak Modified (``WeibullPeak_Modified``)

  * Weibull Peak Modified

    :math:`y = a * \exp{(-0.5 * {(ln{(x/b)}/c)}^{d})}`

    [a, b, c, d]

  * Weibull Peak Modified With Offset

    :math:`y = a * \exp{(-0.5 * {(ln{(x/b)}/c)}^{d})} + \text{Offset}`

    [a, b, c, d, Offset]

* Weibull Peak Modified Shifted (``WeibullPeak_ModifiedShifted``)

  * Weibull Peak Modified Shifted

    :math:`y = a * \exp{(-0.5 * {(ln{({(x-f)}/b)}/c)}^{d})}`

    [a, b, c, d, f]

  * Weibull Peak Modified Shifted With Offset

    :math:`y = a * \exp{(-0.5 * {(ln{({(x-f)}/b)}/c)}^{d})} + \text{Offset}`

    [a, b, c, d, f, Offset]


Polyfunctional
^^^^^^^^^^^^^^

* User-Selectable Polyfunctional (``UserSelectablePolyfunctional``)

  * User-Selectable Polyfunctional

    :math:`y = user-selectable function`

    []


Polynomial
^^^^^^^^^^

* 3rd Order (Cubic) (``Cubic``)

  * 3rd Order (Cubic)

    :math:`y = a + bx + cx^{2} + dx^{3}`

    [a, b, c, d]

* 1st Order (Linear) (``Linear``)

  * 1st Order (Linear)

    :math:`y = a + bx`

    [a, b]

* Marc Plante's Custom Quadratic (``MarcPlanteQuadratic``)

  * Marc Plante's Custom Quadratic

    :math:`y = {(-b + {(b^{2} - 4 a {(c - x)})}^{0.5})} / 2/ a`

    [a, b, c]

  * Marc Plante's Custom Quadratic With Offset

    :math:`y = {(-b + {(b^{2} - 4 a {(c - x)})}^{0.5})} / 2/ a + \text{Offset}`

    [a, b, c, Offset]

* 2nd Order (Quadratic) (``Quadratic``)

  * 2nd Order (Quadratic)

    :math:`y = a + bx + cx^{2}`

    [a, b, c]

* 4th Order (Quartic) (``Quartic``)

  * 4th Order (Quartic)

    :math:`y = a + bx + cx^{2} + dx^{3} +fx^{4}`

    [a, b, c, d, f]

* 5th Order (Quintic) (``Quintic``)

  * 5th Order (Quintic)

    :math:`y = a + bx + cx^{2} + dx^{3} +fx^{4} + gx^{5}`

    [a, b, c, d, f, g]

* User-Customizable Polynomial (``UserCustomizablePolynomial``)

  * User-Customizable Polynomial

    :math:`y = user-customizable polynomial`

    []

* User-Selectable Polynomial (``UserSelectablePolynomial``)

  * User-Selectable Polynomial

    :math:`y = user-selectable polynomial`



Power
^^^^^

* Geometric Modified (``Geometric_Modified``)

  * Geometric Modified

    :math:`y = a * x^{{(b/x)}}`

    [a, b]

  * Geometric Modified With Offset

    :math:`y = a * x^{{(b/x)}} + \text{Offset}`

    [a, b, Offset]

* Power A Modified (``PowerA_Modified``)

  * Power A Modified

    :math:`y = a * b^{x}`

    [a, b]

  * Power A Modified With Offset

    :math:`y = a * b^{x} + \text{Offset}`

    [a, b, Offset]

* Power A Modified Transform (``PowerA_Modified_Transform``)

  * Power A Modified Transform

    :math:`y = a * b^{cx + d}`

    [a, b, c, d]

  * Power A Modified Transform With Offset

    :math:`y = a * b^{cx + d} + \text{Offset}`

    [a, b, c, d, Offset]

* Power B Modified (``PowerB_Modified``)

  * Power B Modified

    :math:`y = a^{ln{(x)}}`

    [a]

  * Power B Modified With Offset

    :math:`y = a^{ln{(x)}} + \text{Offset}`

    [a, Offset]

* Power B Modified Transform (``PowerB_Modified_Transform``)

  * Power B Modified Transform

    :math:`y = a^{ln{(bx + c)}}`

    [a, b, c]

  * Power B Modified Transform With Offset

    :math:`y = a^{ln{(bx + c)}} + \text{Offset}`

    [a, b, c, Offset]

* Power C Modified (``PowerC_Modified``)

  * Power C Modified

    :math:`y = {(a + x)}^{b}`

    [a, b]

  * Power C Modified With Offset

    :math:`y = {(a + x)}^{b} + \text{Offset}`

    [a, b, Offset]

* Power C Modified Transform (``PowerC_Modified_Transform``)

  * Power C Modified Transform

    :math:`y = {(a + bx)}^{c}`

    [a, b, c]

  * Power C Modified Transform With Offset

    :math:`y = {(a + bx)}^{c} + \text{Offset}`

    [a, b, c, Offset]

* Power Law With Exponential Cutoff (``PowerLawExponentialCutoff``)

  * Power Law With Exponential Cutoff

    :math:`p{(k)} = C * k^{{(-T)}} * \exp{(-k/K)}`

    [C, T, K]

  * Power Law With Exponential Cutoff With Offset

    :math:`p{(k)} = C * k^{{(-T)}} * \exp{(-k/K)} + \text{Offset}`

    [C, T, K, Offset]

* Root (``PowerRoot``)

  * Root

    :math:`y = a^{{(1.0/x)}}`

    [a]

  * Root With Offset

    :math:`y = a^{{(1.0/x)}} + \text{Offset}`

    [a, Offset]

* Simple Power (``SimplePower``)

  * Simple Power

    :math:`y = x^{a}`

    [a]

  * Simple Power With Offset

    :math:`y = x^{a} + \text{Offset}`

    [a, Offset]

* Standard Geometric (``StandardGeometric``)

  * Standard Geometric

    :math:`y = a * x^{bx}`

    [a, b]

  * Standard Geometric With Offset

    :math:`y = a * x^{bx} + \text{Offset}`

    [a, b, Offset]

* Standard Power (``StandardPower``)

  * Standard Power

    :math:`y = a * x^{b}`

    [a, b]

  * Standard Power With Offset

    :math:`y = a * x^{b} + \text{Offset}`

    [a, b, Offset]

* X Shifted Power (``XShiftedPower``)

  * X Shifted Power

    :math:`y = a * {(x-b)}^{c}`

    [a, b, c]

  * X Shifted Power With Offset

    :math:`y = a * {(x-b)}^{c} + \text{Offset}`

    [a, b, c, Offset]


Rational
^^^^^^^^

* User-Selectable Rational (``UserSelectableRational``)

  * User-Selectable Rational

    :math:`y = user-selectable rational`

    []

  * User-Selectable Rational With Offset

    :math:`y = user-selectable rational + \text{Offset}`

    [Offset]


Sigmoidal
^^^^^^^^^

* BET Sigmoidal A (``BET_Sigmoidal_A``)

  * BET Sigmoidal A

    :math:`y = x / {(a + bx - {(a+b)}x^{2})}`

    [a, b]

  * BET Sigmoidal A With Offset

    :math:`y = x / {(a + bx - {(a+b)}x^{2})} + \text{Offset}`

    [a, b, Offset]

* BET Sigmoidal B (``BET_Sigmoidal_B``)

  * BET Sigmoidal B

    :math:`y = abx / {(1.0 + {(b-2.0)}x - {(b-1.0)}x^{2})}`

    [a, b]

  * BET Sigmoidal B With Offset

    :math:`y = abx / {(1.0 + {(b-2.0)}x - {(b-1.0)}x^{2})} + \text{Offset}`

    [a, b, Offset]

* Boltzmann Sigmoid A (``BoltzmannSigmoidA``)

  * Boltzmann Sigmoid A

    :math:`y = {(a - b)} / {(1.0 + \exp{({(x-c)}/d)})} + b`

    [a, b, c, d]

* Boltzmann Sigmoid B (``BoltzmannSigmoidB``)

  * Boltzmann Sigmoid B

    :math:`y = {(a - b)} / {(1.0 + \exp{({(x-c)}/{(dx)})})} + b`

    [a, b, c, d]

* Chapman (``Chapman``)

  * Chapman

    :math:`y = a * {(1.0 - \exp{(-bx)})}^{c}`

    [a, b, c]

  * Chapman With Offset

    :math:`y = a * {(1.0 - \exp{(-bx)})}^{c} + \text{Offset}`

    [a, b, c, Offset]

* Don Levin Sigmoid (``DonLevinSigmoid``)

  * Don Levin Sigmoid

    :math:`y = a1 / {(1.0 + \exp{(-{(x-b1)}/c1)})} + a2 / {(1.0 + \exp{(-{(x-b2)}/c2)})} + a3 /{(1.0 + \exp{(-{(x-b3)}/c3)})}`

    [a1, b1, c1, a2, b2, c2, a3, b3, c3]

  * Don Levin Sigmoid With Offset

    :math:`y = a1 / {(1.0 + \exp{(-{(x-b1)}/c1)})} + a2 / {(1.0 + \exp{(-{(x-b2)}/c2)})} + a3 /{(1.0 + \exp{(-{(x-b3)}/c3)})} + \text{Offset}`

    [a1, b1, c1, a2, b2, c2, a3, b3, c3, Offset]

* Five-Parameter Logistic (``FiveParameterLogistic``)

  * Five-Parameter Logistic

    :math:`y = d + {(a-d)} / {(1.0 + {(x/c)}^{b})}^{f}`

    [a, b, c, d, f]

* Four-Parameter Logistic (``FourParameterLogistic``)

  * Four-Parameter Logistic

    :math:`y = d + {(a-d)} / {(1.0 + {(x/c)}^{b})}`

    [a, b, c, d]

* Generalised Logistic (``GeneralisedLogistic``)

  * Generalised Logistic

    :math:`y = A + C / {(1 + T * \exp{(-B * {(x - M)})})}^{1/T}`

    [A, C, M, B, T]

* Gompertz A (``GompertzA``)

  * Gompertz A

    :math:`y = a * \exp{(-\exp{(b - cx)})}`

    [a, b, c]

  * Gompertz A With Offset

    :math:`y = a * \exp{(-\exp{(b - cx)})} + \text{Offset}`

    [a, b, c, Offset]

* Gompertz B (``GompertzB``)

  * Gompertz B

    :math:`y = a * \exp{(-\exp{({(x-b)}/c)})}`

    [a, b, c]

  * Gompertz B With Offset

    :math:`y = a * \exp{(-\exp{({(x-b)}/c)})} + \text{Offset}`

    [a, b, c, Offset]

* Gompertz C (``GompertzC``)

  * Gompertz C

    :math:`y = a * \exp{(b * \exp{(c * x)})}`

    [a, b, c]

  * Gompertz C With Offset

    :math:`y = a * \exp{(b * \exp{(c * x)})} + \text{Offset}`

    [a, b, c, Offset]

* Hill (``Hill``)

  * Hill

    :math:`y = ax^{b} / {(c^{b} +x^{b})}`

    [a, b, c]

  * Hill With Offset

    :math:`y = ax^{b} / {(c^{b} +x^{b})} + \text{Offset}`

    [a, b, c, Offset]

* JJacquelin Generalised Logistic (``JJacquelinGeneralisedLogistic``)

  * JJacquelin Generalised Logistic

    :math:`y = L / {(1.0 + {(b * \exp{(-k*t)})} + {(c * \exp{(h*t)})})}`

    [L, b, k, c, h]

  * JJacquelin Generalised Logistic With Offset

    :math:`y = L / {(1.0 + {(b * \exp{(-k*t)})} + {(c * \exp{(h*t)})})} + \text{Offset}`

    [L, b, k, c, h, Offset]

* Janoschek Growth (``Janoschek``)

  * Janoschek Growth

    :math:`w = a - {(1.0 - \exp{(-b * t^{c})})}`

    [a, b, c]

* Janoschek Growth Modified (``Janoschek_Modified``)

  * Janoschek Growth Modified

    :math:`w = a - {(a - w0)} * {(1.0 - \exp{(-b * t^{c})})}`

    [a, b, c, w0]

* Logistic A (``LogisticA``)

  * Logistic A

    :math:`y = a / {(1.0 + b*\exp{(-cx)})}`

    [a, b, c]

  * Logistic A With Offset

    :math:`y = a / {(1.0 + b*\exp{(-cx)})} + \text{Offset}`

    [a, b, c, Offset]

* Logistic B (``LogisticB``)

  * Logistic B

    :math:`y = a / {(1.0 + {(x/b)}^{c})}`

    [a, b, c]

  * Logistic B With Offset

    :math:`y = a / {(1.0 + {(x/b)}^{c})} + \text{Offset}`

    [a, b, c, Offset]

* Lomolino (``Lomolino``)

  * Lomolino

    :math:`y = a / {(1.0 + b^{ln{(c/x)}})}`

    [a, b, c]

  * Lomolino With Offset

    :math:`y = a / {(1.0 + b^{ln{(c/x)}})} + \text{Offset}`

    [a, b, c, Offset]

* Magnetic Saturation (``MagneticSaturation``)

  * Magnetic Saturation

    :math:`y = ax * {(1.0 + b*\exp{(cx)})}`

    [a, b, c]

  * Magnetic Saturation With Offset

    :math:`y = ax * {(1.0 + b*\exp{(cx)})} + \text{Offset}`

    [a, b, c, Offset]

* Morgan-Mercer-Flodin (MMF) (``MorganMercerFlodin``)

  * Morgan-Mercer-Flodin (MMF)

    :math:`y = {(a * b + c * x^{d})} / {(b + x^{d})}`

    [a, b, c, d]

  * Morgan-Mercer-Flodin (MMF) With Offset

    :math:`y = {(a * b + c * x^{d})} / {(b + x^{d})} +\text{Offset}`

    [a, b, c, d, Offset]

* Peters-Baskin Step-Stool: y (1) (``PetersBaskin_Y``)

  * Peters-Baskin Step-Stool: y (1)

    :math:`y = ln{(c + \exp{(b*d*x)})} / d`

    [b, c, d]

  * Peters-Baskin Step-Stool: y (1) With Offset

    :math:`y = ln{(c + \exp{(b*d*x)})} / d + \text{Offset}`

    [b, c, d, Offset]

* Peters-Baskin Step-Stool: yI (2) (``PetersBaskin_YI``)

  * Peters-Baskin Step-Stool: yI (2)

    :math:`yI = ln{(\exp{(b2*c1*d1)} + \exp{(b2*d1*x)})} / d1`

    [b2, c1, d1]

  * Peters-Baskin Step-Stool: yI (2) With Offset

    :math:`yI = ln{(\exp{(b2*c1*d1)} + \exp{(b2*d1*x)})} / d1 + \text{Offset}`

    [b2, c1, d1, Offset]

* Peters-Baskin Step-Stool: yII (3) (``PetersBaskin_YII``)

  * Peters-Baskin Step-Stool: yII (3)

    :math:`K = ln{( \exp{(b2*c1*d1)} + \exp{(b2*d1*x)} )}\\yII = b1*x + K/d1`

    [b2, c1, d1, b1]

  * Peters-Baskin Step-Stool: yII (3) With Offset

    :math:`K = ln{( \exp{(b2*c1*d1)} + \exp{(b2*d1*x)} )}\\yII = b1*x + K/d1 + \text{Offset}`

    [b2, c1, d1, b1, Offset]

* Peters-Baskin Step-Stool: yIII (6) (``PetersBaskin_YIII``)

  * Peters-Baskin Step-Stool: yIII (6)

    :math:`K = ln{( \exp{(b2*c1*d1)} + \exp{(b2*d1*x)} )}\\yII = b1*x + K/d1\\L = ln{( \exp{(b2*c1*d1)} + \exp{(b2*c2*d1)} )}\\yIII = yII - ln{( \exp{(d2*{(b1*c1 + L/d1)})} + \exp{(d2*yII)} )} / d2`

    [b2, c1, d1, b1, c2, d2]

  * Peters-Baskin Step-Stool: yIII (6) With Offset

    :math:`K = ln{( \exp{(b2*c1*d1)} + \exp{(b2*d1*x)} )}\\yII = b1*x + K/d1\\L = ln{( \exp{(b2*c1*d1)} + \exp{(b2*c2*d1)} )}\\yIII = yII - ln{( \exp{(d2*{(b1*c1 + L/d1)})} + \exp{(d2*yII)} )} / d2 + \text{Offset}`

    [b2, c1, d1, b1, c2, d2, Offset]

* Peters-Baskin Step-Stool: yIV (9) (``PetersBaskin_YIV``)

  * Peters-Baskin Step-Stool: yIV (9)

    :math:`K = ln{( \exp{(b2*c1*d1)} + \exp{(b2*d1*x)} )}\\yII = b1*x + K/d1\\L = ln{( \exp{(b2*c1*d1)} + \exp{(b2*c2*d1)} )}\\yIII = yII - ln{( \exp{(d2*{(b1*c2 + L/d1)})} + \exp{(d2*yII)} )} / d2\\yII,0 = ln{(\exp{(b2*c1*d1)} + 1.0 )} / d1\\yIII,0 = yII,0 - ln{( \exp{(d2*{(b1*c2 + L/d1)})} + \exp{(d2*yII,0)} )} / d2\\yIV = yIII - yIII,0`

    [b2, c1, d1, b1, c2, d2]

  * Peters-Baskin Step-Stool: yIV (9) With Offset

    :math:`K = ln{( \exp{(b2*c1*d1)} + \exp{(b2*d1*x)} )}\\yII = b1*x + K/d1\\L = ln{( \exp{(b2*c1*d1)} + \exp{(b2*c2*d1)} )}\\yIII = yII - ln{( \exp{(d2*{(b1*c2 + L/d1)})} + \exp{(d2*yII)} )} / d2\\yII,0 = ln{(\exp{(b2*c1*d1)} + 1.0 )} / d1\\yIII,0 = yII,0 - ln{( \exp{(d2*{(b1*c2 + L/d1)})} + \exp{(d2*yII,0)} )} / d2\\yIV = yIII - yIII,0 + \text{Offset}`

    [b2, c1, d1, b1, c2, d2, Offset]

* Peters-Baskin Step-Stool: yV (10) (``PetersBaskin_YV``)

  * Peters-Baskin Step-Stool: yV (10)

    :math:`K = ln{( \exp{(b2*c1*d1)} + \exp{(b2*d1*x)} )}\\yII = b1*x + K/d1\\L = ln{( \exp{(b2*c1*d1)} + \exp{(b2*c2*d1)} )}\\yIII = yII - ln{( \exp{(d2*{(b1*c2 + L/d1)})} + \exp{(d2*yII)} )} / d2\\yII,0 = ln{(\exp{(b2*c1*d1)} + 1.0 )} / d1\\yIII,0 = yII,0 - ln{( \exp{(d2*{(b1*c2 + L/d1)})} + \exp{(d2*yII,0)} )} / d2\\yIV = yIII - yIII,0 + q`

    [b2, c1, d1, b1, c2, d2, q]

* Peters-Baskin Step-Stool: yV (10) Scaled (``PetersBaskin_YV_Scaled``)

  * Peters-Baskin Step-Stool: yV (10) Scaled

    :math:`K = ln{( \exp{(b2*c1*d1)} + \exp{(b2*d1*x)} )}\\yII = b1*x + K/d1\\L = ln{( \exp{(b2*c1*d1)} + \exp{(b2*c2*d1)} )}\\yIII = yII - ln{( \exp{(d2*{(b1*c2 + L/d1)})} + \exp{(d2*yII)} )} / d2\\yII,0 = ln{(\exp{(b2*c1*d1)} + 1.0 )} / d1\\yIII,0 = yII,0 - ln{( \exp{(d2*{(b1*c2 + L/d1)})} + \exp{(d2*yII,0)} )} / d2\\yIV = scale * {(yIII - yIII,0 )}+ q`

    [b2, c1, d1, b1, c2, d2, q, scale]

* Richards (``Richards``)

  * Richards

    :math:`y = 1.0 / {(a + b * e^{{(c*x)}})}^{d}`

    [a, b, c, d]

  * Richards With Offset

    :math:`y = 1.0 / {(a + b * e^{{(c*x)}})}^{d} + \text{Offset}`

    [a, b, c, d, Offset]

* Sigmoid A (``SigmoidA``)

  * Sigmoid A

    :math:`y = 1.0 / {(1.0 + \exp{(-a{(x-b)})})}`

    [a, b]

  * Sigmoid A With Offset

    :math:`y = 1.0 / {(1.0 + \exp{(-a{(x-b)})})} + \text{Offset}`

    [a, b, Offset]

* Sigmoid A Modified (``SigmoidA_Modified``)

  * Sigmoid A Modified

    :math:`y = 1.0 / {(1.0 + \exp{(-a{(x-b)})})}^{c}`

    [a, b, c]

  * Sigmoid A Modified With Offset

    :math:`y = 1.0 / {(1.0 + \exp{(-a{(x-b)})})}^{c} + \text{Offset}`

    [a, b, c, Offset]

* Sigmoid B (``SigmoidB``)

  * Sigmoid B

    :math:`y = a / {(1.0 + \exp{(-{(x-b)}/c)})}`

    [a, b, c]

  * Sigmoid B With Offset

    :math:`y = a / {(1.0 + \exp{(-{(x-b)}/c)})} + \text{Offset}`

    [a, b, c, Offset]

* Sigmoid B Modified (``SigmoidB_Modified``)

  * Sigmoid B Modified

    :math:`y = a / {(1.0 + \exp{(-{(x-b)}/c)})}^{d}`

    [a, b, c, d]

  * Sigmoid B Modified With Offset

    :math:`y = a / {(1.0 + \exp{(-{(x-b)}/c)})}^{d} + \text{Offset}`

    [a, b, c, d, Offset]

* Weibull (``Weibull``)

  * Weibull

    :math:`y = a - b*\exp{(-cx^{d})}`

    [a, b, c, d]

* Weibull CDF (``WeibullCDF``)

  * Weibull CDF

    :math:`y = 1.0 - \exp{(-{(x/b)}^{a})}`

    [a, b]

  * Weibull CDF With Offset

    :math:`y = 1.0 - \exp{(-{(x/b)}^{a})} + \text{Offset}`

    [a, b, Offset]

* Weibull CDF Scaled (``WeibullCDF_scaled``)

  * Weibull CDF Scaled

    :math:`y = Scale * {(1.0 - \exp{(-{(x/b)}^{a})})}`

    [a, b, Scale]

  * Weibull CDF Scaled With Offset

    :math:`y = Scale * {(1.0 - \exp{(-{(x/b)}^{a})})} + \text{Offset}`

    [a, b, Scale, Offset]

* Weibull PDF (``WeibullPDF``)

  * Weibull PDF

    :math:`y = {(a/b)} * {(x/b)}^{{(a-1.0)}} *\exp{(-{(x/b)}^{a})}`

    [a, b]

  * Weibull PDF With Offset

    :math:`y = {(a/b)} * {(x/b)}^{{(a-1.0)}} *\exp{(-{(x/b)}^{a})} + \text{Offset}`

    [a, b, Offset]


Simple
^^^^^^

* Simple Equation 01 (``SimpleEquation_01``)

  * Simple Equation 01

    :math:`y = a`

    [a]

* Simple Equation 02 (``SimpleEquation_02``)

  * Simple Equation 02

    :math:`y = a/pow{(x,-2.0)}`

    [a]

  * Simple Equation 02 With Offset

    :math:`y = a/pow{(x,-2.0)} + \text{Offset}`

    [a, Offset]

* Simple Equation 03 (``SimpleEquation_03``)

  * Simple Equation 03

    :math:`y = a*pow{(ln{(x)},b)}`

    [a, b]

  * Simple Equation 03 With Offset

    :math:`y = a*pow{(ln{(x)},b)} + \text{Offset}`

    [a, b, Offset]

* Simple Equation 04 (``SimpleEquation_04``)

  * Simple Equation 04

    :math:`y = a*pow{(x,3.0)}`

    [a]

  * Simple Equation 04 With Offset

    :math:`y = a*pow{(x,3.0)} + \text{Offset}`

    [a, Offset]

* Simple Equation 05 (``SimpleEquation_05``)

  * Simple Equation 05

    :math:`y = a*pow{(x,4.0)}`

    [a]

  * Simple Equation 05 With Offset

    :math:`y = a*pow{(x,4.0)} + \text{Offset}`

    [a, Offset]

* Simple Equation 06 (``SimpleEquation_06``)

  * Simple Equation 06

    :math:`y = x/{(a+b*pow{(x,2.0)})}`

    [a, b]

  * Simple Equation 06 With Offset

    :math:`y = x/{(a+b*pow{(x,2.0)})} + \text{Offset}`

    [a, b, Offset]

* Simple Equation 07 (``SimpleEquation_07``)

  * Simple Equation 07

    :math:`y = a * pow{(b,x)} * pow{(x,c)}`

    [a, b, c]

  * Simple Equation 07 With Offset

    :math:`y = a * pow{(b,x)} * pow{(x,c)} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 08 (``SimpleEquation_08``)

  * Simple Equation 08

    :math:`y = a*pow{(b,1.0/x)}*pow{(x,c)}`

    [a, b, c]

  * Simple Equation 08 With Offset

    :math:`y = a*pow{(b,1.0/x)}*pow{(x,c)} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 09 (``SimpleEquation_09``)

  * Simple Equation 09

    :math:`y = a*\exp{(pow{(x-b,2.0)}/c)}`

    [a, b, c]

  * Simple Equation 09 With Offset

    :math:`y = a*\exp{(pow{(x-b,2.0)}/c)} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 10 (``SimpleEquation_10``)

  * Simple Equation 10

    :math:`y = a*\exp{(pow{(ln{(x)}-b,2.0)}/c)}`

    [a, b, c]

  * Simple Equation 10 With Offset

    :math:`y = a*\exp{(pow{(ln{(x)}-b,2.0)}/c)} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 13 (``SimpleEquation_13``)

  * Simple Equation 13

    :math:`y = a*pow{(x/b,c)}*\exp{(x/b)}`

    [a, b, c]

  * Simple Equation 13 With Offset

    :math:`y = a*pow{(x/b,c)}*\exp{(x/b)} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 14 (``SimpleEquation_14``)

  * Simple Equation 14

    :math:`y = a*pow{(x,b+c*x)}`

    [a, b, c]

  * Simple Equation 14 With Offset

    :math:`y = a*pow{(x,b+c*x)} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 15 (``SimpleEquation_15``)

  * Simple Equation 15

    :math:`y = a*pow{(x,b+c/x)}`

    [a, b, c]

  * Simple Equation 15 With Offset

    :math:`y = a*pow{(x,b+c/x)} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 16 (``SimpleEquation_16``)

  * Simple Equation 16

    :math:`y = a*pow{(x,b+c*ln{(x)})}`

    [a, b, c]

  * Simple Equation 16 With Offset

    :math:`y = a*pow{(x,b+c*ln{(x)})} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 17 (``SimpleEquation_17``)

  * Simple Equation 17

    :math:`y = a*pow{(x,b*x+c*pow{(x,2.0)})}`

    [a, b, c]

  * Simple Equation 17 With Offset

    :math:`y = a*pow{(x,b*x+c*pow{(x,2.0)})} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 18 (``SimpleEquation_18``)

  * Simple Equation 18

    :math:`y = a*\exp{(b*x+c*pow{(x,0.5)})}`

    [a, b, c]

  * Simple Equation 18 With Offset

    :math:`y = a*\exp{(b*x+c*pow{(x,0.5)})} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 19 (``SimpleEquation_19``)

  * Simple Equation 19

    :math:`y = a*\exp{(b/x+c*x)}`

    [a, b, c]

  * Simple Equation 19 With Offset

    :math:`y = a*\exp{(b/x+c*x)} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 20 (``SimpleEquation_20``)

  * Simple Equation 20

    :math:`y = {(a+x)}/{(b+c*x)}`

    [a, b, c]

  * Simple Equation 20 With Offset

    :math:`y = {(a+x)}/{(b+c*x)} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 21 (``SimpleEquation_21``)

  * Simple Equation 21

    :math:`y = {(a+x)}/{(b+c*pow{(x,2.0)})}`

    [a, b, c]

  * Simple Equation 21 With Offset

    :math:`y = {(a+x)}/{(b+c*pow{(x,2.0)})} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 22 (``SimpleEquation_22``)

  * Simple Equation 22

    :math:`y = a*{(\exp{(b*x)}-\exp{(c*x)})}`

    [a, b, c]

  * Simple Equation 22 With Offset

    :math:`y = a*{(\exp{(b*x)}-\exp{(c*x)})} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 23 (``SimpleEquation_23``)

  * Simple Equation 23

    :math:`y = a*\exp{(b*\exp{(c*x)})}`

    [a, b, c]

  * Simple Equation 23 With Offset

    :math:`y = a*\exp{(b*\exp{(c*x)})} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 24 (``SimpleEquation_24``)

  * Simple Equation 24

    :math:`y = a/{(1.0 + b * \exp{(c*x)})}`

    [a, b, c]

  * Simple Equation 24 With Offset

    :math:`y = a/{(1.0 + b * \exp{(c*x)})} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 25 (``SimpleEquation_25``)

  * Simple Equation 25

    :math:`y = a/{(b+pow{(x,c)})}`

    [a, b, c]

  * Simple Equation 25 With Offset

    :math:`y = a/{(b+pow{(x,c)})} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 26 (``SimpleEquation_26``)

  * Simple Equation 26

    :math:`y = a/pow{(1.0 + b * pow{(x,c)},2.0)}`

    [a, b, c]

  * Simple Equation 26 With Offset

    :math:`y = a/pow{(1.0 + b * pow{(x,c)},2.0)} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 27 (``SimpleEquation_27``)

  * Simple Equation 27

    :math:`y = pow{(a+b*x,c)}`

    [a, b, c]

  * Simple Equation 27 With Offset

    :math:`y = pow{(a+b*x,c)} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 28 (``SimpleEquation_28``)

  * Simple Equation 28

    :math:`y = \exp{(a+b/x+c*ln{(x)})}`

    [a, b, c]

  * Simple Equation 28 With Offset

    :math:`y = \exp{(a+b/x+c*ln{(x)})} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 29 (``SimpleEquation_29``)

  * Simple Equation 29

    :math:`y = a*\exp{(b*pow{(x,c)})}`

    [a, b, c]

  * Simple Equation 29 With Offset

    :math:`y = a*\exp{(b*pow{(x,c)})} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 30 (``SimpleEquation_30``)

  * Simple Equation 30

    :math:`y = a*pow{(x,b*pow{(x,c)})}`

    [a, b, c]

  * Simple Equation 30 With Offset

    :math:`y = a*pow{(x,b*pow{(x,c)})} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 31 (``SimpleEquation_31``)

  * Simple Equation 31

    :math:`y = a*ln{(x+b)}`

    [a, b]

  * Simple Equation 31 With Offset

    :math:`y = a*ln{(x+b)} + \text{Offset}`

    [a, b, Offset]

* Simple Equation 32 (``SimpleEquation_32``)

  * Simple Equation 32

    :math:`y = a/x+b*pow{(x,c)}`

    [a, b, c]

  * Simple Equation 32 With Offset

    :math:`y = a/x+b*pow{(x,c)} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 33 (``SimpleEquation_33``)

  * Simple Equation 33

    :math:`y = a/x+b*\exp{(c/x)}`

    [a, b, c]

  * Simple Equation 33 With Offset

    :math:`y = a/x+b*\exp{(c/x)} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 34 (``SimpleEquation_34``)

  * Simple Equation 34

    :math:`y = a/x+b*\exp{(c*x)}`

    [a, b, c]

  * Simple Equation 34 With Offset

    :math:`y = a/x+b*\exp{(c*x)} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 35 (``SimpleEquation_35``)

  * Simple Equation 35

    :math:`y = a*\exp{(b*x)}/x`

    [a, b]

  * Simple Equation 35 With Offset

    :math:`y = a*\exp{(b*x)}/x + \text{Offset}`

    [a, b, Offset]

* Simple Equation 36 (``SimpleEquation_36``)

  * Simple Equation 36

    :math:`y = a*\exp{(b/x)}/x`

    [a, b]

  * Simple Equation 36 With Offset

    :math:`y = a*\exp{(b/x)}/x + \text{Offset}`

    [a, b, Offset]

* Simple Equation 37 (``SimpleEquation_37``)

  * Simple Equation 37

    :math:`y = a*pow{(x,b)}*ln{(x)}`

    [a, b]

  * Simple Equation 37 With Offset

    :math:`y = a*pow{(x,b)}*ln{(x)} + \text{Offset}`

    [a, b, Offset]

* Simple Equation 38 (``SimpleEquation_38``)

  * Simple Equation 38

    :math:`y = a*pow{(x,b)}/ln{(x)}`

    [a, b]

  * Simple Equation 38 With Offset

    :math:`y = a*pow{(x,b)}/ln{(x)} + \text{Offset}`

    [a, b, Offset]

* Simple Equation 39 (``SimpleEquation_39``)

  * Simple Equation 39

    :math:`y = a*pow{(x,b)}*ln{(x+c)}`

    [a, b, c]

  * Simple Equation 39 With Offset

    :math:`y = a*pow{(x,b)}*ln{(x+c)} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 40 (``SimpleEquation_40``)

  * Simple Equation 40

    :math:`y = a*pow{(ln{(x+b)},c)}`

    [a, b, c]

  * Simple Equation 40 With Offset

    :math:`y = a*pow{(ln{(x+b)},c)} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 41 (``SimpleEquation_41``)

  * Simple Equation 41

    :math:`y = a*pow{(x,b/x)}+c*x`

    [a, b, c]

  * Simple Equation 41 With Offset

    :math:`y = a*pow{(x,b/x)}+c*x + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 42 (``SimpleEquation_42``)

  * Simple Equation 42

    :math:`y = a*pow{(x,b/x)}+c*ln{(x)}`

    [a, b, c]

  * Simple Equation 42 With Offset

    :math:`y = a*pow{(x,b/x)}+c*ln{(x)} + \text{Offset}`

    [a, b, c, Offset]

* Simple Reciprocal (``SimpleReciprocalA``)

  * Simple Reciprocal

    :math:`y = a / x`

    [a]

  * Simple Reciprocal With Offset

    :math:`y = a / x + \text{Offset}`

    [a, Offset]


Spline
^^^^^^

* Spline (``Spline``)

  * Spline

    :math:`y = B-Spline Interpolation Curve`



Trigonometric
^^^^^^^^^^^^^

* Great Circle [Degrees] (``GreatCircleDegrees``)

  * Great Circle [Degrees]

    :math:`latitude = arctan{(A*cos{({(B + longitude)} / 57.2957795131)})} *57.2957795131`

    [A, B]

* Great Circle [radians] (``GreatCircleRadians``)

  * Great Circle [radians]

    :math:`latitude = arctan{(A*cos{(B + longitude)})}`

    [A, B]

* Hyperbolic Cosine [radians] (``HyperbolicCosine``)

  * Hyperbolic Cosine [radians]

    :math:`y = amplitude * cosh{(pi * {(x - center)} / width)}`

    [amplitude, center, width]

  * Hyperbolic Cosine [radians] With Offset

    :math:`y = amplitude * cosh{(pi * {(x - center)} / width)} + \text{Offset}`

    [amplitude, center, width, Offset]

* Hyperbolic Cosine [radians] (Nyquist Limited) (``HyperbolicCosine_NyquistLimited``)

  * Hyperbolic Cosine [radians] (Nyquist Limited)

    :math:`y = amplitude * cosh{(pi * {(x - center)} / width)}`

    [amplitude, center, width]

  * Hyperbolic Cosine [radians] (Nyquist Limited) With Offset

    :math:`y = amplitude * cosh{(pi * {(x - center)} / width)} + \text{Offset}`

    [amplitude, center, width, Offset]

* Cardinal Sine (sinc) [radians] (``Sinc``)

  * Cardinal Sine (sinc) [radians]

    :math:`y = amplitude * sin{(pi * {(x - center)} / width)} / {(pi * {(x - center)} /width)}`

    [amplitude, center, width]

  * Cardinal Sine (sinc) [radians] With Offset

    :math:`y = amplitude * sin{(pi * {(x - center)} / width)} / {(pi * {(x - center)} /width)} + \text{Offset}`

    [amplitude, center, width, Offset]

* Cardinal Sine (sinc) Squared [radians] (``SincSquared``)

  * Cardinal Sine (sinc) Squared [radians]

    :math:`y = amplitude * sin{(pi * {(x - center)} / width)}^{2} / {(pi* {(x - center)} / width)}`

    [amplitude, center, width]

  * Cardinal Sine (sinc) Squared [radians] With Offset

    :math:`y = amplitude * sin{(pi * {(x - center)} / width)}^{2} / {(pi* {(x - center)} / width)} + \text{Offset}`

    [amplitude, center, width, Offset]

* Cardinal Sine (sinc) Squared [radians] (Nyquist Limited) (``SincSquared_NyquistLimited``)

  * Cardinal Sine (sinc) Squared [radians] (Nyquist Limited)

    :math:`y = amplitude * sin{(pi * {(x - center)} / width)}^{2} / {(pi* {(x - center)} / width)}`

    [amplitude, center, width]

  * Cardinal Sine (sinc) Squared [radians] (Nyquist Limited) With Offset

    :math:`y = amplitude * sin{(pi * {(x - center)} / width)}^{2} / {(pi* {(x - center)} / width)} + \text{Offset}`

    [amplitude, center, width, Offset]

* Cardinal Sine (sinc) [radians] (Nyquist Limited) (``Sinc_NyquistLimited``)

  * Cardinal Sine (sinc) [radians] (Nyquist Limited)

    :math:`y = amplitude * sin{(pi * {(x - center)} / width)} / {(pi * {(x - center)} /width)}`

    [amplitude, center, width]

  * Cardinal Sine (sinc) [radians] (Nyquist Limited) With Offset

    :math:`y = amplitude * sin{(pi * {(x - center)} / width)} / {(pi * {(x - center)} /width)} + \text{Offset}`

    [amplitude, center, width, Offset]

* Sine [radians] (``Sine``)

  * Sine [radians]

    :math:`y = amplitude * sin{(pi * {(x - center)} / width)}`

    [amplitude, center, width]

  * Sine [radians] With Offset

    :math:`y = amplitude * sin{(pi * {(x - center)} / width)} + \text{Offset}`

    [amplitude, center, width, Offset]

* Sine Squared [radians] (``SineSquared``)

  * Sine Squared [radians]

    :math:`y = amplitude * sin{(pi * {(x - center)} / width)}^{2}`

    [amplitude, center, width]

  * Sine Squared [radians] With Offset

    :math:`y = amplitude * sin{(pi * {(x - center)} / width)}^{2} +\text{Offset}`

    [amplitude, center, width, Offset]

* Sine Squared [radians] (Nyquist Limited) (``SineSquared_NyquistLimited``)

  * Sine Squared [radians] (Nyquist Limited)

    :math:`y = amplitude * sin{(pi * {(x - center)} / width)}^{2}`

    [amplitude, center, width]

  * Sine Squared [radians] (Nyquist Limited) With Offset

    :math:`y = amplitude * sin{(pi * {(x - center)} / width)}^{2} +\text{Offset}`

    [amplitude, center, width, Offset]

* Sine [radians] (Nyquist Limited) (``Sine_NyquistLimited``)

  * Sine [radians] (Nyquist Limited)

    :math:`y = amplitude * sin{(pi * {(x - center)} / width)}`

    [amplitude, center, width]

  * Sine [radians] (Nyquist Limited) With Offset

    :math:`y = amplitude * sin{(pi * {(x - center)} / width)} + \text{Offset}`

    [amplitude, center, width, Offset]

* Tangent [radians] (``Tangent``)

  * Tangent [radians]

    :math:`y = amplitude * tan{(pi * {(x - center)} / width)}`

    [amplitude, center, width]

  * Tangent [radians] With Offset

    :math:`y = amplitude * tan{(pi * {(x - center)} / width)} + \text{Offset}`

    [amplitude, center, width, Offset]

* Tangent [radians] (Nyquist Limited) (``Tangent_NyquistLimited``)

  * Tangent [radians] (Nyquist Limited)

    :math:`y = amplitude * tan{(pi * {(x - center)} / width)}`

    [amplitude, center, width]

  * Tangent [radians] (Nyquist Limited) With Offset

    :math:`y = amplitude * tan{(pi * {(x - center)} / width)} + \text{Offset}`

    [amplitude, center, width, Offset]


UserDefinedFunction
^^^^^^^^^^^^^^^^^^^

* User Defined Function (``UserDefinedFunction``)

  * User Defined Function

    :math:`y = User Defined Function`



YieldDensity
^^^^^^^^^^^^

* Bleasdale (``Bleasdale``)

  * Bleasdale

    :math:`y = 1.0 / {(a + bx)}^{{(-1.0/c)}}`

    [a, b, c]

  * Bleasdale With Offset

    :math:`y = 1.0 / {(a + bx)}^{{(-1.0/c)}} + \text{Offset}`

    [a, b, c, Offset]

* Extended Holliday (``ExtendedHolliday``)

  * Extended Holliday

    :math:`y = a / {(a + bx + cx^{2})}`

    [a, b, c]

  * Extended Holliday With Offset

    :math:`y = a / {(a + bx + cx^{2})} + \text{Offset}`

    [a, b, c, Offset]

* Harris (``Harris``)

  * Harris

    :math:`y = 1.0 / {(a + bx^{c})}`

    [a, b, c]

  * Harris With Offset

    :math:`y = 1.0 / {(a + bx^{c})} + \text{Offset}`

    [a, b, c, Offset]

* Holliday (``Holliday``)

  * Holliday

    :math:`y = 1.0 / {(a + bx + cx^{2})}`

    [a, b, c]

  * Holliday With Offset

    :math:`y = 1.0 / {(a + bx + cx^{2})} + \text{Offset}`

    [a, b, c, Offset]

* Inverse Bleasdale (``InverseBleasdale``)

  * Inverse Bleasdale

    :math:`y = x / {(a + bx)}^{{(-1.0/c)}}`

    [a, b, c]

  * Inverse Bleasdale With Offset

    :math:`y = x / {(a + bx)}^{{(-1.0/c)}} + \text{Offset}`

    [a, b, c, Offset]

* InverseHarris (``InverseHarris``)

  * InverseHarris

    :math:`y = x / {(a + bx^{c})}`

    [a, b, c]

  * InverseHarris With Offset

    :math:`y = x / {(a + bx^{c})} + \text{Offset}`

    [a, b, c, Offset]

* Nelder (``Nelder``)

  * Nelder

    :math:`y = {(a + x)} / {(b + c{(a + x)} + d{(a + x)}^{2})}`

    [a, b, c, d]

  * Nelder With Offset

    :math:`y = {(a + x)} / {(b + c{(a + x)} + d{(a + x)}^{2})} + \text{Offset}`

    [a, b, c, d, Offset]

3D Models
---------

BioScience
^^^^^^^^^^

* Chen-Clayton (``ChenClayton``)

  * Chen-Clayton

    :math:`r.h.{(T_{k},M)} = \exp{(-{(C1/T^{C2})} *\exp{(-C3*T^{C4}*M)})}`

    [C1, C2, C3, C4]

  * Chen-Clayton With Offset

    :math:`r.h.{(T_{k},M)} = \exp{(-{(C1/T^{C2})} *\exp{(-C3*T^{C4}*M)})} + \text{Offset}`

    [C1, C2, C3, C4, Offset]

* Chen-Clayton Scaled (``ChenClayton_scaled``)

  * Chen-Clayton Scaled

    :math:`z = Scale * \exp{(-{(C1/T^{C2})} *\exp{(-C3*T^{C4}*M)})}`

    [C1, C2, C3, C4, Scale]

  * Chen-Clayton Scaled With Offset

    :math:`z = Scale * \exp{(-{(C1/T^{C2})} *\exp{(-C3*T^{C4}*M)})} + \text{Offset}`

    [C1, C2, C3, C4, Scale, Offset]

* High-Low Affinity Double Isotope Displacement (y = [Hot]) (``HighLowAffinityDoubleIsotopeDisplacement``)

  * High-Low Affinity Double Isotope Displacement (y = [Hot])

    :math:`z = aby / {(1+b{(x+y)})} + cdy / {(1+d{(x+y)})}`

    [a, b, c, d]

  * High-Low Affinity Double Isotope Displacement (y = [Hot]) With Offset

    :math:`z = aby / {(1+b{(x+y)})} + cdy / {(1+d{(x+y)})} + \text{Offset}`

    [a, b, c, d, Offset]

* High-Low Affinity Isotope Displacement (y = [Hot]) (``HighLowAffinityIsotopeDisplacement``)

  * High-Low Affinity Isotope Displacement (y = [Hot])

    :math:`z = aby / {(1+b{(x+y)})}`

    [a, b]

  * High-Low Affinity Isotope Displacement (y = [Hot]) With Offset

    :math:`z = aby / {(1+b{(x+y)})} + \text{Offset}`

    [a, b, Offset]

* Logistic Growth (``LogisticGrowth``)

  * Logistic Growth

    :math:`z = a / {(1 + \exp{(-{(b + cx + dy + fxy)})})} + g`

    [a, b, c, d, f, g]

* Michaelis-Menten Double Isotope Displacement (y = [Hot]) (``MichaelisMentenDoubleIsotopeDisplacement``)

  * Michaelis-Menten Double Isotope Displacement (y = [Hot])

    :math:`z = ay / {(b + x + y)} + cy / {(d + x + y)}`

    [a, b, c, d]

  * Michaelis-Menten Double Isotope Displacement (y = [Hot]) With Offset

    :math:`z = ay / {(b + x + y)} + cy / {(d + x + y)} + \text{Offset}`

    [a, b, c, d, Offset]

* Michaelis-Menten Isotope Displacement (y = [Hot]) (``MichaelisMentenIsotopeDisplacement``)

  * Michaelis-Menten Isotope Displacement (y = [Hot])

    :math:`z = ay / {(b + x + y)}`

    [a, b]

  * Michaelis-Menten Isotope Displacement (y = [Hot]) With Offset

    :math:`z = ay / {(b + x + y)} + \text{Offset}`

    [a, b, Offset]

* Modified Chung-Pfost (``ModifiedChungPfost``)

  * Modified Chung-Pfost

    :math:`r.h.{(T,M)} = \exp{(-{(C1/{(T+C2)})} * \exp{(-C3*M)})}`

    [C1, C2, C3]

  * Modified Chung-Pfost With Offset

    :math:`r.h.{(T,M)} = \exp{(-{(C1/{(T+C2)})} * \exp{(-C3*M)})} + \text{Offset}`

    [C1, C2, C3, Offset]

* Modified Halsey (``ModifiedHalsey``)

  * Modified Halsey

    :math:`r.h.{(T,M)} = \exp{(-\exp{(C1 + C2*T)} * M^{-C3})}`

    [C1, C2, C3]

  * Modified Halsey With Offset

    :math:`r.h.{(T,M)} = \exp{(-\exp{(C1 + C2*T)} * M^{-C3})} + \text{Offset}`

    [C1, C2, C3, Offset]

* Modified Halsey Scaled (``ModifiedHalsey_scaled``)

  * Modified Halsey Scaled

    :math:`z = Scale * \exp{(-\exp{(C1 + C2*T)} * M^{-C3})}`

    [C1, C2, C3, Scale]

  * Modified Halsey Scaled With Offset

    :math:`z = Scale * \exp{(-\exp{(C1 + C2*T)} * M^{-C3})} + \text{Offset}`

    [C1, C2, C3, Scale, Offset]

* Modified Henderson (``ModifiedHenderson``)

  * Modified Henderson

    :math:`r.h.{(T,M)} = 1 - \exp{(-C1 * {(T + C2)} * M^{C3})}`

    [C1, C2, C3]

  * Modified Henderson With Offset

    :math:`r.h.{(T,M)} = 1 - \exp{(-C1 * {(T + C2)} * M^{C3})} + \text{Offset}`

    [C1, C2, C3, Offset]

* Strohman-Yoerger (``StrohmanYoerger``)

  * Strohman-Yoerger

    :math:`r.h.{(P_{s},M)} = \exp{(C1*\exp{(-C2*M)}*ln{(P_{s})} -C3*\exp{(-C4*M)})}`

    [C1, C2, C3, C4]

  * Strohman-Yoerger With Offset

    :math:`r.h.{(P_{s},M)} = \exp{(C1*\exp{(-C2*M)}*ln{(P_{s})} -C3*\exp{(-C4*M)})} + \text{Offset}`

    [C1, C2, C3, C4, Offset]


EnzymeKinetics
^^^^^^^^^^^^^^

* Competitive Inhibition A (``CompetitiveInhibitionA``)

  * Competitive Inhibition A

    :math:`z = ax / {(b{(1 + y/c)} + x)}`

    [a, b, c]

  * Competitive Inhibition A With Offset

    :math:`z = ax / {(b{(1 + y/c)} + x)} + \text{Offset}`

    [a, b, c, Offset]

* Competitive Inhibition B (``CompetitiveInhibitionB``)

  * Competitive Inhibition B

    :math:`z = ay / {(b{(1 + x/c)} + y)}`

    [a, b, c]

  * Competitive Inhibition B With Offset

    :math:`z = ay / {(b{(1 + x/c)} + y)} + \text{Offset}`

    [a, b, c, Offset]

* Competitive Inhibition C (``CompetitiveInhibitionC``)

  * Competitive Inhibition C

    :math:`z = axy / {(b{(1 + x/c)} + y)}`

    [a, b, c]

  * Competitive Inhibition C With Offset

    :math:`z = axy / {(b{(1 + x/c)} + y)} + \text{Offset}`

    [a, b, c, Offset]

* Inhibition By Competing Substrate A (``InhibitionByCompetingSubstrateA``)

  * Inhibition By Competing Substrate A

    :math:`z = {(ax/b)} / {(1 + x/b + y/c)}`

    [a, b, c]

  * Inhibition By Competing Substrate A With Offset

    :math:`z = {(ax/b)} / {(1 + x/b + y/c)} + \text{Offset}`

    [a, b, c, Offset]

* Inhibition By Competing Substrate B (``InhibitionByCompetingSubstrateB``)

  * Inhibition By Competing Substrate B

    :math:`z = {(ay/b)} / {(1 + y/b + x/c)}`

    [a, b, c]

  * Inhibition By Competing Substrate B With Offset

    :math:`z = {(ay/b)} / {(1 + y/b + x/c)} + \text{Offset}`

    [a, b, c, Offset]

* Inhibition By Competing Substrate C (``InhibitionByCompetingSubstrateC``)

  * Inhibition By Competing Substrate C

    :math:`z = {(axy/b)} / {(1 + y/b + x/c)}`

    [a, b, c]

  * Inhibition By Competing Substrate C With Offset

    :math:`z = {(axy/b)} / {(1 + y/b + x/c)} + \text{Offset}`

    [a, b, c, Offset]

* Michaelis Menten Product Inhibition (``MichaelisMentenProductInhibition``)

  * Michaelis Menten Product Inhibition

    :math:`z = {(ax/b - cy/d)} / {(1 + x/b + y/d)}`

    [a, b, c, d]

  * Michaelis Menten Product Inhibition With Offset

    :math:`z = {(ax/b - cy/d)} / {(1 + x/b + y/d)} + \text{Offset}`

    [a, b, c, d, Offset]

* Mixed Inhibition A (``MixedInhibitionA``)

  * Mixed Inhibition A

    :math:`z = ax / {(b{(1 + y/c)} + x{(1 + y/d)})}`

    [a, b, c, d]

  * Mixed Inhibition A With Offset

    :math:`z = ax / {(b{(1 + y/c)} + x{(1 + y/d)})} + \text{Offset}`

    [a, b, c, d, Offset]

* Mixed Inhibition B (``MixedInhibitionB``)

  * Mixed Inhibition B

    :math:`z = ay / {(b{(1 + x/c)} + y{(1 + x/d)})}`

    [a, b, c, d]

  * Mixed Inhibition B With Offset

    :math:`z = ay / {(b{(1 + x/c)} + y{(1 + x/d)})} + \text{Offset}`

    [a, b, c, d, Offset]

* Noncompetitive Inhibition A (``NoncompetitiveInhibitionA``)

  * Noncompetitive Inhibition A

    :math:`z = ax / {({(b + x)}{(1 + y/c)})}`

    [a, b, c]

  * Noncompetitive Inhibition A With Offset

    :math:`z = ax / {({(b + x)}{(1 + y/c)})} + \text{Offset}`

    [a, b, c, Offset]

* Noncompetitive Inhibition B (``NoncompetitiveInhibitionB``)

  * Noncompetitive Inhibition B

    :math:`z = ay / {({(b + y)}{(1 + x/c)})}`

    [a, b, c]

  * Noncompetitive Inhibition B With Offset

    :math:`z = ay / {({(b + y)}{(1 + x/c)})} + \text{Offset}`

    [a, b, c, Offset]

* Ping Pong Bi Bi A (``PingPongBiBiA``)

  * Ping Pong Bi Bi A

    :math:`z = ax / {(bx + cy + xy)}`

    [a, b, c]

  * Ping Pong Bi Bi A With Offset

    :math:`z = ax / {(bx + cy + xy)} + \text{Offset}`

    [a, b, c, Offset]

* Ping Pong Bi Bi B (``PingPongBiBiB``)

  * Ping Pong Bi Bi B

    :math:`z = ay / {(by + cx + xy)}`

    [a, b, c]

  * Ping Pong Bi Bi B With Offset

    :math:`z = ay / {(by + cx + xy)} + \text{Offset}`

    [a, b, c, Offset]

* Ping Pong Bi Bi C (``PingPongBiBiC``)

  * Ping Pong Bi Bi C

    :math:`z = axy / {(by + cx + xy)}`

    [a, b, c]

  * Ping Pong Bi Bi C With Offset

    :math:`z = axy / {(by + cx + xy)} + \text{Offset}`

    [a, b, c, Offset]

* Uncompetitive Inhibition A (``UncompetitiveInhibitionA``)

  * Uncompetitive Inhibition A

    :math:`z = ax / {(b + x{(1 + y/c)})}`

    [a, b, c]

  * Uncompetitive Inhibition A With Offset

    :math:`z = ax / {(b + x{(1 + y/c)})} + \text{Offset}`

    [a, b, c, Offset]

* Uncompetitive Inhibition B (``UncompetitiveInhibitionB``)

  * Uncompetitive Inhibition B

    :math:`z = ay / {(b + y{(1 + x/c)})}`

    [a, b, c]

  * Uncompetitive Inhibition B With Offset

    :math:`z = ay / {(b + y{(1 + x/c)})} + \text{Offset}`

    [a, b, c, Offset]


Exponential
^^^^^^^^^^^

* Full Cubic Exponential (``FullCubicExponential``)

  * Full Cubic Exponential

    :math:`z = a + b*\exp{(x)} + c*\exp{(y)} + d*\exp{(x)}^{2} +f*\exp{(y)}^{2} + g*\exp{(x)}^{3} +h*\exp{(y)}^{3} + i*\exp{(x)}*\exp{(y)} +j*\exp{(x)}^{2}*\exp{(y)} + k*\exp{(x)}*\exp{(y)}^{2}`

    [a, b, c, d, f, g, h, i, j, k]

* Transform Full Cubic Exponential (``FullCubicExponentialTransform``)

  * Transform Full Cubic Exponential

    :math:`z = a + b*\exp{(m*x+n)} + c*\exp{(o*y+p)} + d*\exp{(m*x+n)}^{2} +f*\exp{(o*y+p)}^{2} + g*\exp{(m*x+n)}^{3} +h*\exp{(o*y+p)}^{3} + i*\exp{(m*x+n)}*\exp{(o*y+p)} +j*\exp{(m*x+n)}^{2}*\exp{(o*y+p)} +k*\exp{(m*x+n)}*\exp{(o*y+p)}^{2}`

    [a, b, c, d, f, g, h, i, j, k, m, n, o, p]

* Full Quadratic Exponential (``FullQuadraticExponential``)

  * Full Quadratic Exponential

    :math:`z = a + b*\exp{(x)} + c*\exp{(y)} + d*\exp{(x)}^{2} +f*\exp{(y)}^{2} + g*\exp{(x)}*\exp{(y)}`

    [a, b, c, d, f, g]

* Transform Full Quadratic Exponential (``FullQuadraticExponentialTransform``)

  * Transform Full Quadratic Exponential

    :math:`z = a + b*\exp{(h*x+i)} + c*\exp{(j*y+k)} + d*\exp{(h*x+i)}^{2} +e*\exp{(j*y+k)}^{2} + f*\exp{(h*x+i)}*\exp{(j*y+k)}`

    [a, b, c, d, f, g, h, i, j, k]

* Linear Exponential (``LinearExponential``)

  * Linear Exponential

    :math:`z = a + b*\exp{(x)} + c*\exp{(y)}`

    [a, b, c]

* Transform Linear Exponential (``LinearExponentialTransform``)

  * Transform Linear Exponential

    :math:`z = a + b*\exp{(d*x+f)} + c*\exp{(g*y+h)}`

    [a, b, c, d, f, g, h]

* Simplified Cubic Exponential (``SimplifiedCubicExponential``)

  * Simplified Cubic Exponential

    :math:`z = a + b*\exp{(x)} + c*\exp{(y)} + d*\exp{(x)}^{2} +e*\exp{(y)}^{2} + f*\exp{(x)}^{3} +g*\exp{(y)}^{3}`

    [a, b, c, d, f, g, h]

* Transform Simplified Cubic Exponential (``SimplifiedCubicExponentialTransform``)

  * Transform Simplified Cubic Exponential

    :math:`z = a + b*\exp{(i*x+j)} + c*\exp{(k*y+m)} + d*\exp{(i*x+j)}^{2} +f*\exp{(k*y+m)}^{2} + g*\exp{(i*x+j)}^{3} +h*\exp{(k*y+m)}^{3}`

    [a, b, c, d, f, g, h, i, j, k, m]

* Simplified Quadratic Exponential (``SimplifiedQuadraticExponential``)

  * Simplified Quadratic Exponential

    :math:`z = a + b*\exp{(x)} + c*\exp{(y)} + d*\exp{(x)}^{2} +f*\exp{(y)}^{2}`

    [a, b, c, d, f]

* Transform Simplified Quadratic Exponential (``SimplifiedQuadraticExponentialTransform``)

  * Transform Simplified Quadratic Exponential

    :math:`z = a + b*\exp{(g*x+h)} + c*\exp{(i*y+j)} + d*\exp{(g*x+h)}^{2} +f*\exp{(i*y+j)}^{2}`

    [a, b, c, d, f, g, h, i, j]


Logarithmic
^^^^^^^^^^^

* Full Cubic Logarithmic (``FullCubicLogarithmic``)

  * Full Cubic Logarithmic

    :math:`z = a + b*ln{(x)} + c*ln{(y)} + d*ln{(x)}^{2} +f*ln{(y)}^{2} + g*ln{(x)}^{3} +h*ln{(y)}^{3} + i*ln{(x)}*ln{(y)} +j*ln{(x)}^{2}*ln{(y)} + k*ln{(x)}*ln{(y)}^{2}`

    [a, b, c, d, f, g, h, i, j, k]

* Transform Full Cubic Logarithmic (``FullCubicLogarithmicTransform``)

  * Transform Full Cubic Logarithmic

    :math:`z = a + b*ln{(m*x+n)} + c*ln{(o*y+p)} + d*ln{(m*x+n)}^{2} +f*ln{(o*y+p)}^{2} + g*ln{(m*x+n)}^{3} +h*ln{(o*y+p)}^{3} + i*ln{(m*x+n)}*ln{(o*y+p)} +j*ln{(m*x+n)}^{2}*ln{(o*y+p)} +k*ln{(m*x+n)}*ln{(o*y+p)}^{2}`

    [a, b, c, d, f, g, h, i, j, k, m, n, o, p]

* Full Quadratic Logarithmic (``FullQuadraticLogarithmic``)

  * Full Quadratic Logarithmic

    :math:`z = a + b*ln{(x)} + c*ln{(y)} + d*ln{(x)}^{2} +f*ln{(y)}^{2} + g*ln{(x)}*ln{(y)}`

    [a, b, c, d, f, g]

* Transform Full Quadratic Logarithmic (``FullQuadraticLogarithmicTransform``)

  * Transform Full Quadratic Logarithmic

    :math:`z = a + b*ln{(h*x+i)} + c*ln{(j*y+k)} + d*ln{(h*x+i)}^{2} +f*ln{(j*y+k)}^{2} + g*ln{(h*x+i)}*ln{(j*y+k)}`

    [a, b, c, d, f, g, h, i, j, k]

* Linear Logarithmic (``LinearLogarithmic``)

  * Linear Logarithmic

    :math:`z = a + b*ln{(x)} + c*ln{(y)}`

    [a, b, c]

* Transform Linear Logarithmic (``LinearLogarithmicTransform``)

  * Transform Linear Logarithmic

    :math:`z = a + b*ln{(d*x+f)} + c*ln{(g*y+h)}`

    [a, b, c, d, f, g, h]

* Simplified Cubic Logarithmic (``SimplifiedCubicLogarithmic``)

  * Simplified Cubic Logarithmic

    :math:`z = a + b*ln{(x)} + c*ln{(y)} + d*ln{(x)}^{2} +f*ln{(y)}^{2} + g*ln{(x)}^{3} +h*ln{(y)}^{3}`

    [a, b, c, d, f, g, h]

* Transform Simplified Cubic Logarithmic (``SimplifiedCubicLogarithmicTransform``)

  * Transform Simplified Cubic Logarithmic

    :math:`z = a + b*ln{(i*x+j)} + c*ln{(k*y+m)} + d*ln{(i*x+j)}^{2} +f*ln{(k*y+m)}^{2} + g*ln{(i*x+j)}^{3} +h*ln{(k*y+m)}^{3}`

    [a, b, c, d, f, g, h, i, j, k, m]

* Simplified Quadratic Logarithmic (``SimplifiedQuadraticLogarithmic``)

  * Simplified Quadratic Logarithmic

    :math:`z = a + b*ln{(x)} + c*ln{(y)} + d*ln{(x)}^{2} +f*ln{(y)}^{2}`

    [a, b, c, d, f]

* Transform Simplified Quadratic Logarithmic (``SimplifiedQuadraticLogarithmicTransform``)

  * Transform Simplified Quadratic Logarithmic

    :math:`z = a + b*ln{(g*x+h)} + c*ln{(i*y+j)} + d*ln{(g*x+h)}^{2} +f*ln{(i*y+j)}^{2}`

    [a, b, c, d, f, g, h, i, j]


Miscellaneous
^^^^^^^^^^^^^

* Gary Cler's Custom Equation Transform (``GaryCler_Transform``)

  * Gary Cler's Custom Equation Transform

    :math:`z = a * {(dx + f)}^{b} * {(gy + h)}^{c}`

    [a, b, c, d, f, g, h]

  * Gary Cler's Custom Equation Transform With Offset

    :math:`z = a * {(dx + f)}^{b} * {(gy + h)}^{c} +\text{Offset}`

    [a, b, c, d, f, g, h, Offset]

* Gaussian Curvature Of Paraboloid (``GaussianCurvatureOfParaboloid``)

  * Gaussian Curvature Of Paraboloid

    :math:`z = 4a^{2} / {(1 + 4a^{2} *{(x^{2} + y^{2})})}^{2}`

    [a]

  * Gaussian Curvature Of Paraboloid With Offset

    :math:`z = 4a^{2} / {(1 + 4a^{2} *{(x^{2} + y^{2})})}^{2} +\text{Offset}`

    [a, Offset]

* Gaussian Curvature Of Paraboloid Scaled (``GaussianCurvatureOfParaboloid_scaled``)

  * Gaussian Curvature Of Paraboloid Scaled

    :math:`z = Scale * 4a^{2} / {(1 + 4a^{2} *{(x^{2} + y^{2})})}^{2}`

    [a, Scale]

  * Gaussian Curvature Of Paraboloid Scaled With Offset

    :math:`z = Scale * 4a^{2} / {(1 + 4a^{2} *{(x^{2} + y^{2})})}^{2} +\text{Offset}`

    [a, Scale, Offset]

* Gaussian Curvature Of Richmond's Minimal Surface (``GaussianCurvatureOfRichmondsMinimalSurface``)

  * Gaussian Curvature Of Richmond's Minimal Surface

    :math:`z = -1.0 * a * {(x^{2} +y^{2})}^{3} / {(b + {(x^{2} +y^{2})}^{2})}^{4}`

    [a, b]

  * Gaussian Curvature Of Richmond's Minimal Surface With Offset

    :math:`z = -1.0 * a * {(x^{2} +y^{2})}^{3} / {(b + {(x^{2} +y^{2})}^{2})}^{4} + \text{Offset}`

    [a, b, Offset]

* Gaussian Curvature Of Whitney's Umbrella A (``GaussianCurvatureOfWhitneysUmbrellaA``)

  * Gaussian Curvature Of Whitney's Umbrella A

    :math:`z = -1.0 * a * y^{2} / {(x^{2} + a *{(y^{2} + y^{4})})}^{2}`

    [a]

  * Gaussian Curvature Of Whitney's Umbrella A With Offset

    :math:`z = -1.0 * a * y^{2} / {(x^{2} + a *{(y^{2} + y^{4})})}^{2} +\text{Offset}`

    [a, Offset]

* Gaussian Curvature Of Whitney's Umbrella B (``GaussianCurvatureOfWhitneysUmbrellaB``)

  * Gaussian Curvature Of Whitney's Umbrella B

    :math:`z = -1.0 * a * x^{2} / {(y^{2} + a *{(x^{2} + x^{4})})}^{2}`

    [a]

  * Gaussian Curvature Of Whitney's Umbrella B With Offset

    :math:`z = -1.0 * a * x^{2} / {(y^{2} + a *{(x^{2} + x^{4})})}^{2} +\text{Offset}`

    [a, Offset]

* Liping Zheng's core loss coefficients (``LipingZheng``)

  * Liping Zheng's core loss coefficients

    :math:`z = ax^{2}y + bx^{2}y^{2} +cx^{1.5}y^{1.5}`

    [a, b, c]

  * Liping Zheng's core loss coefficients With Offset

    :math:`z = ax^{2}y + bx^{2}y^{2} +cx^{1.5}y^{1.5} + \text{Offset}`

    [a, b, c, Offset]

* Mean Curvature Of Paraboloid (``MeanCurvatureOfParaboloid``)

  * Mean Curvature Of Paraboloid

    :math:`z = 2 * {(a + 2a^{3} * {(x^{2} +y^{2})})} / {(1 + 4a^{2} *{(x^{2} + y^{2})})}^{1.5}`

    [a]

  * Mean Curvature Of Paraboloid With Offset

    :math:`z = 2 * {(a + 2a^{3} * {(x^{2} +y^{2})})} / {(1 + 4a^{2} *{(x^{2} + y^{2})})}^{1.5} +\text{Offset}`

    [a, Offset]

* Mean Curvature Of Paraboloid Scaled (``MeanCurvatureOfParaboloid_scaled``)

  * Mean Curvature Of Paraboloid Scaled

    :math:`z = Scale * {(a + 2a^{3} * {(x^{2} +y^{2})})} / {(1 + 4a^{2} *{(x^{2} + y^{2})})}^{1.5}`

    [a, Scale]

  * Mean Curvature Of Paraboloid Scaled With Offset

    :math:`z = Scale * {(a + 2a^{3} * {(x^{2} +y^{2})})} / {(1 + 4a^{2} *{(x^{2} + y^{2})})}^{1.5} +\text{Offset}`

    [a, Scale, Offset]

* Mean Curvature Of Whitney's Umbrella A (``MeanCurvatureOfWhitneysUmbrellaA``)

  * Mean Curvature Of Whitney's Umbrella A

    :math:`z = -1.0 * x * {(a + b * y^{2})} / {(x^{2} +a * {(y^{2} + y^{4})})}^{1.5}`

    [a, b]

  * Mean Curvature Of Whitney's Umbrella A With Offset

    :math:`z = -1.0 * x * {(a + b * y^{2})} / {(x^{2} +a * {(y^{2} + y^{4})})}^{1.5}+ \text{Offset}`

    [a, b, Offset]

* Mean Curvature Of Whitney's Umbrella B (``MeanCurvatureOfWhitneysUmbrellaB``)

  * Mean Curvature Of Whitney's Umbrella B

    :math:`z = -1.0 * y * {(a + b * x^{2})} / {(y^{2} +a * {(x^{2} + x^{4})})}^{1.5}`

    [a, b]

  * Mean Curvature Of Whitney's Umbrella B With Offset

    :math:`z = -1.0 * y * {(a + b * x^{2})} / {(y^{2} +a * {(x^{2} + x^{4})})}^{1.5}+ \text{Offset}`

    [a, b, Offset]

* Menn's Surface A (``MennSurfaceA``)

  * Menn's Surface A

    :math:`z = ax^{4} + bx^{2}y -cy^{2}`

    [a, b, c]

  * Menn's Surface A With Offset

    :math:`z = ax^{4} + bx^{2}y -cy^{2} + \text{Offset}`

    [a, b, c, Offset]

* Menn's Surface B (``MennSurfaceB``)

  * Menn's Surface B

    :math:`z = ay^{4} + by^{2}x -cx^{2}`

    [a, b, c]

  * Menn's Surface B With Offset

    :math:`z = ay^{4} + by^{2}x -cx^{2} + \text{Offset}`

    [a, b, c, Offset]

* Monkey Saddle A (``MonkeySaddleA``)

  * Monkey Saddle A

    :math:`z = ax^{3} - bxy^{2}`

    [a, b]

  * Monkey Saddle A With Offset

    :math:`z = ax^{3} - bxy^{2} + \text{Offset}`

    [a, b, Offset]

* Monkey Saddle B (``MonkeySaddleB``)

  * Monkey Saddle B

    :math:`z = ay^{3} - byx^{2}`

    [a, b]

  * Monkey Saddle B With Offset

    :math:`z = ay^{3} - byx^{2} + \text{Offset}`

    [a, b, Offset]

* Monkey Saddle Transform A (``MonkeySaddle_TransformA``)

  * Monkey Saddle Transform A

    :math:`z = a{(cx + d)}^{3} - b{(cx + d)}{(fy + g)}^{2}`

    [a, b, c, d, f, g]

  * Monkey Saddle Transform A With Offset

    :math:`z = a{(cx + d)}^{3} - b{(cx + d)}{(fy + g)}^{2}+ \text{Offset}`

    [a, b, c, d, f, g, Offset]

* Monkey Saddle Transform B (``MonkeySaddle_TransformB``)

  * Monkey Saddle Transform B

    :math:`z = a{(cy + d)}^{3} - b{(cy + d)}{(fx + g)}^{2}`

    [a, b, c, d, f, g]

  * Monkey Saddle Transform B With Offset

    :math:`z = a{(cy + d)}^{3} - b{(cy + d)}{(fx + g)}^{2}+ \text{Offset}`

    [a, b, c, d, f, g, Offset]

* Paraboloid (``Paraboloid``)

  * Paraboloid

    :math:`z = a * {(x^{2} + y^{2})}`

    [a]

  * Paraboloid With Offset

    :math:`z = a * {(x^{2} + y^{2})} + \text{Offset}`

    [a, Offset]

* Paraboloid Transform (``Paraboloid_Transform``)

  * Paraboloid Transform

    :math:`z = a * {({(bx + c)}^{2} + {(dy + f)}^{2})}`

    [a, b, c, d, f]

  * Paraboloid Transform With Offset

    :math:`z = a * {({(bx + c)}^{2} + {(dy + f)}^{2})} +\text{Offset}`

    [a, b, c, d, f, Offset]

* Paschen's Law for Breakdown Field Strength (``PaschensBreakdownFieldStrengthLaw``)

  * Paschen's Law for Breakdown Field Strength

    :math:`Ebreakdown = pressure * {(a / {(ln{(pressure * distance)} + b)})}`

    [a, b]

  * Paschen's Law for Breakdown Field Strength With Offset

    :math:`Ebreakdown = pressure * {(a / {(ln{(pressure * distance)} + b)})} + \text{Offset}`

    [a, b, Offset]

* Paschen's Law for Breakdown Voltage (``PaschensBreakdownVoltageLaw``)

  * Paschen's Law for Breakdown Voltage

    :math:`Vbreakdown = a{(pressure * distance)} / {(ln{(pressure * distance)} + b)}`

    [a, b]

  * Paschen's Law for Breakdown Voltage With Offset

    :math:`Vbreakdown = a{(pressure * distance)} / {(ln{(pressure * distance)} + b)} +\text{Offset}`

    [a, b, Offset]

* Rex Kelfkens' Custom Equation (``RexKelfkens``)

  * Rex Kelfkens' Custom Equation

    :math:`z = \exp{(A+B*ln{(x)}+C*ln{(y)})}`

    [A, B, C]

  * Rex Kelfkens' Custom Equation With Offset

    :math:`z = \exp{(A+B*ln{(x)}+C*ln{(y)})} + \text{Offset}`

    [A, B, C, Offset]

* Rex Kelfkens' Custom Equation Transform (``RexKelfkensTransform``)

  * Rex Kelfkens' Custom Equation Transform

    :math:`z = \exp{(A+B*ln{(x * xscale + xoffset)}+C*ln{(y * yscale + yoffset)})}`

    [A, B, C, xscale, xoffset, yscale, yoffset]

  * Rex Kelfkens' Custom Equation Transform With Offset

    :math:`z = \exp{(A+B*ln{(x * xscale + xoffset)}+C*ln{(y * yscale + yoffset)})} +\text{Offset}`

    [A, B, C, xscale, xoffset, yscale, yoffset, Offset]


NIST
^^^^

* NIST Nelson (``NIST_Nelson``)

  * NIST Nelson

    :math:`log{(y)} = b1 - b2 * X1 * \exp{(-b3*X2)}`

    [b1, b2, b3]

* NIST Nelson Autolog (``NIST_NelsonAutolog``)

  * NIST Nelson Autolog

    :math:`z = \exp{(b1 - b2 * x * \exp{(-b3*y)})}`

    [b1, b2, b3]

  * NIST Nelson Autolog With Offset

    :math:`z = \exp{(b1 - b2 * x * \exp{(-b3*y)})} + \text{Offset}`

    [b1, b2, b3, Offset]


Optical
^^^^^^^

* Sag For Asphere 0 (``SagForAsphere0``)

  * Sag For Asphere 0

    :math:`s^{2} = x^{2} + y^{2}\\z = {(s^{2}/r)} /{(1+{(1-{(k+1)}{(s/r)}^{2})}^{1/2})}`

    [k, r]

  * Sag For Asphere 0 With Offset

    :math:`s^{2} = x^{2} + y^{2}\\z = {(s^{2}/r)} /{(1+{(1-{(k+1)}{(s/r)}^{2})}^{1/2})} + \text{Offset}`

    [k, r, Offset]

* Sag For Asphere 0 Borisovsky (``SagForAsphere0_Borisovsky``)

  * Sag For Asphere 0 Borisovsky

    :math:`s^{2} = {(x - a)}^{2} + {(y -b)}^{2}\\z = {(s^{2}/r)} /{(1+{(1-{(k+1)}{(s/r)}^{2})}^{1/2})} + offset`

    [a, b, k, r, offset]

  * Sag For Asphere 0 Borisovsky With Offset

    :math:`s^{2} = {(x - a)}^{2} + {(y -b)}^{2}\\z = {(s^{2}/r)} /{(1+{(1-{(k+1)}{(s/r)}^{2})}^{1/2})} + offset +\text{Offset}`

    [a, b, k, r, offset, Offset]

* Transform Sag For Asphere 0 (``SagForAsphere0_Transform``)

  * Transform Sag For Asphere 0

    :math:`s^{2} = {(ax+b)}^{2} +{(cy+d)}^{2}\\z = {(s^{2}/r)} /{(1+{(1-{(k+1)}{(s/r)}^{2})}^{1/2})}`

    [k, r, a, b, c, d]

  * Transform Sag For Asphere 0 With Offset

    :math:`s^{2} = {(ax+b)}^{2} +{(cy+d)}^{2}\\z = {(s^{2}/r)} /{(1+{(1-{(k+1)}{(s/r)}^{2})}^{1/2})} + \text{Offset}`

    [k, r, a, b, c, d, Offset]

* Sag For Asphere 0 Scaled (``SagForAsphere0_scaled``)

  * Sag For Asphere 0 Scaled

    :math:`s^{2} = x^{2} + y^{2}\\z = Scale * {(s^{2}/r)} /{(1+{(1-{(k+1)}{(s/r)}^{2})}^{1/2})}`

    [k, r, Scale]

  * Sag For Asphere 0 Scaled With Offset

    :math:`s^{2} = x^{2} + y^{2}\\z = Scale * {(s^{2}/r)} /{(1+{(1-{(k+1)}{(s/r)}^{2})}^{1/2})} + \text{Offset}`

    [k, r, Scale, Offset]

* Sag For Asphere 1 (``SagForAsphere1``)

  * Sag For Asphere 1

    :math:`s^{2} = x^{2} + y^{2}\\z = {(s^{2}/r)} /{(1+{(1-{(k+1)}{(s/r)}^{2})}^{1/2})} +A4*s^{4}`

    [k, r, A4]

  * Sag For Asphere 1 With Offset

    :math:`s^{2} = x^{2} + y^{2}\\z = {(s^{2}/r)} /{(1+{(1-{(k+1)}{(s/r)}^{2})}^{1/2})} +A4*s^{4} + \text{Offset}`

    [k, r, A4, Offset]

* Transform Sag For Asphere 1 (``SagForAsphere1_Transform``)

  * Transform Sag For Asphere 1

    :math:`s^{2} = {(ax+b)}^{2} +{(cy+d)}^{2}\\z = {(s^{2}/r)} /{(1+{(1-{(k+1)}{(s/r)}^{2})}^{1/2})} +A4*s^{4}`

    [k, r, A4, a, b, c, d]

  * Transform Sag For Asphere 1 With Offset

    :math:`s^{2} = {(ax+b)}^{2} +{(cy+d)}^{2}\\z = {(s^{2}/r)} /{(1+{(1-{(k+1)}{(s/r)}^{2})}^{1/2})} +A4*s^{4} + \text{Offset}`

    [k, r, A4, a, b, c, d, Offset]

* Sag For Asphere 2 (``SagForAsphere2``)

  * Sag For Asphere 2

    :math:`s^{2} = x^{2} + y^{2}\\z = {(s^{2}/r)} /{(1+{(1-{(k+1)}{(s/r)}^{2})}^{1/2})} +A4*s^{4} + A6*s^{6}`

    [k, r, A4, A6]

  * Sag For Asphere 2 With Offset

    :math:`s^{2} = x^{2} + y^{2}\\z = {(s^{2}/r)} /{(1+{(1-{(k+1)}{(s/r)}^{2})}^{1/2})} +A4*s^{4} + A6*s^{6} + \text{Offset}`

    [k, r, A4, A6, Offset]

* Transform Sag For Asphere 2 (``SagForAsphere2_Transform``)

  * Transform Sag For Asphere 2

    :math:`s^{2} = {(ax+b)}^{2} +{(cy+d)}^{2}\\z = {(s^{2}/r)} /{(1+{(1-{(k+1)}{(s/r)}^{2})}^{1/2})} +A4*s^{4} + A6*s^{6}`

    [k, r, A4, A6, a, b, c, d]

  * Transform Sag For Asphere 2 With Offset

    :math:`s^{2} = {(ax+b)}^{2} +{(cy+d)}^{2}\\z = {(s^{2}/r)} /{(1+{(1-{(k+1)}{(s/r)}^{2})}^{1/2})} +A4*s^{4} + A6*s^{6} + \text{Offset}`

    [k, r, A4, A6, a, b, c, d, Offset]

* Sag For Asphere 3 (``SagForAsphere3``)

  * Sag For Asphere 3

    :math:`s^{2} = x^{2} + y^{2}\\z = {(s^{2}/r)} /{(1+{(1-{(k+1)}{(s/r)}^{2})}^{1/2})} +A4*s^{4} + A6*s^{6} +A8*s^{8}`

    [k, r, A4, A6, A8]

  * Sag For Asphere 3 With Offset

    :math:`s^{2} = x^{2} + y^{2}\\z = {(s^{2}/r)} /{(1+{(1-{(k+1)}{(s/r)}^{2})}^{1/2})} +A4*s^{4} + A6*s^{6} +A8*s^{8} + \text{Offset}`

    [k, r, A4, A6, A8, Offset]

* Transform Sag For Asphere 3 (``SagForAsphere3_Transform``)

  * Transform Sag For Asphere 3

    :math:`s^{2} = {(ax+b)}^{2} +{(cy+d)}^{2}\\z = {(s^{2}/r)} /{(1+{(1-{(k+1)}{(s/r)}^{2})}^{1/2})} +A4*s^{4} + A6*s^{6} +A8*s^{8}`

    [k, r, A4, A6, A8, a, b, c, d]

  * Transform Sag For Asphere 3 With Offset

    :math:`s^{2} = {(ax+b)}^{2} +{(cy+d)}^{2}\\z = {(s^{2}/r)} /{(1+{(1-{(k+1)}{(s/r)}^{2})}^{1/2})} +A4*s^{4} + A6*s^{6} +A8*s^{8} + \text{Offset}`

    [k, r, A4, A6, A8, a, b, c, d, Offset]


Peak
^^^^

* Extreme Value A (``ExtremeValueA``)

  * Extreme Value A

    :math:`z = a * \exp{(-\exp{(-{(x-b)}/c)}-{(x-b)}/c+1)} + d *\exp{(-\exp{(-{(y-f)}/g)}-{(y-f)}/g+1)}`

    [a, b, c, d, f, g]

  * Extreme Value A With Offset

    :math:`z = a * \exp{(-\exp{(-{(x-b)}/c)}-{(x-b)}/c+1)} + d *\exp{(-\exp{(-{(y-f)}/g)}-{(y-f)}/g+1)} + \text{Offset}`

    [a, b, c, d, f, g, Offset]

* Extreme Value B (``ExtremeValueB``)

  * Extreme Value B

    :math:`z = a * \exp{(-\exp{(-{(x-b)}/c)}-{(x-b)}/c+1)} * \exp{(-\exp{(-{(y-d)}/f)}-{(y-d)}/f+1)}`

    [a, b, c, d, f]

  * Extreme Value B With Offset

    :math:`z = a * \exp{(-\exp{(-{(x-b)}/c)}-{(x-b)}/c+1)} * \exp{(-\exp{(-{(y-d)}/f)}-{(y-d)}/f+1)} +\text{Offset}`

    [a, b, c, d, f, Offset]

* Gaussian A (``GaussianA``)

  * Gaussian A

    :math:`z = a * \exp{(-0.5 * {({({(x-b)}/c)}^{2} +{({(y-d)}/f)}^{2})})}`

    [a, b, c, d, f]

  * Gaussian A With Offset

    :math:`z = a * \exp{(-0.5 * {({({(x-b)}/c)}^{2} +{({(y-d)}/f)}^{2})})} + \text{Offset}`

    [a, b, c, d, f, Offset]

* Gaussian B (``GaussianB``)

  * Gaussian B

    :math:`z = a * \exp{(-0.5 * {({({(x-b)}/c)}^{2})})} + d * \exp{(-0.5 *{({({(y-f)}/g)}^{2})})}`

    [a, b, c, d, f, g]

  * Gaussian B With Offset

    :math:`z = a * \exp{(-0.5 * {({({(x-b)}/c)}^{2})})} + d * \exp{(-0.5 *{({({(y-f)}/g)}^{2})})} + \text{Offset}`

    [a, b, c, d, f, g, Offset]

* Log-Normal A (``LogNormalA``)

  * Log-Normal A

    :math:`z = a * \exp{(-0.5 * {({({(ln{(x)}-b)}/c)}^{2} +{({(ln{(y)}-d)}/f)}^{2})})}`

    [a, b, c, d, f]

  * Log-Normal A With Offset

    :math:`z = a * \exp{(-0.5 * {({({(ln{(x)}-b)}/c)}^{2} +{({(ln{(y)}-d)}/f)}^{2})})} + \text{Offset}`

    [a, b, c, d, f, Offset]

* Log-Normal B (``LogNormalB``)

  * Log-Normal B

    :math:`z = a * \exp{(-0.5 * {({({(ln{(x)}-b)}/c)}^{2})})} + d * \exp{(-0.5 *{({({(ln{(y)}-f)}/g)}^{2})})}`

    [a, b, c, d, f, g]

  * Log-Normal B With Offset

    :math:`z = a * \exp{(-0.5 * {({({(ln{(x)}-b)}/c)}^{2})})} + d * \exp{(-0.5 *{({({(ln{(y)}-f)}/g)}^{2})})} + \text{Offset}`

    [a, b, c, d, f, g, Offset]

* Logistic A (``LogisticA``)

  * Logistic A

    :math:`z = 4a * \exp{(-{({(x-b)}/c)})}/{({(1+\exp{(-{({(x-b)}/c)})})}^{2})} + 4d *\exp{(-{({(y-f)}/g)})}/{({(1+\exp{(-{({(y-f)}/g)})})}^{2})}`

    [a, b, c, d, f, g]

  * Logistic A With Offset

    :math:`z = 4a * \exp{(-{({(x-b)}/c)})}/{({(1+\exp{(-{({(x-b)}/c)})})}^{2})} + 4d *\exp{(-{({(y-f)}/g)})}/{({(1+\exp{(-{({(y-f)}/g)})})}^{2})} + \text{Offset}`

    [a, b, c, d, f, g, Offset]

* Logistic B (``LogisticB``)

  * Logistic B

    :math:`z = 16a * \exp{(-{({(x-b)}/c)}-{({(y-d)}/f)})} /{({(1+\exp{(-{({(x-b)}/c)})})}^{2} *{(1+\exp{(-{({(y-d)}/f)})})}^{2})}`

    [a, b, c, d, f]

  * Logistic B With Offset

    :math:`z = 16a * \exp{(-{({(x-b)}/c)}-{({(y-d)}/f)})} /{({(1+\exp{(-{({(x-b)}/c)})})}^{2} *{(1+\exp{(-{({(y-d)}/f)})})}^{2})} + \text{Offset}`

    [a, b, c, d, f, Offset]

* Lorentzian A (``LorentzianA``)

  * Lorentzian A

    :math:`z = a /{({(1+{({(x-b)}/c)}^{2})}*{(1+{({(y-d)}/f)}^{2})})}`

    [a, b, c, d, f]

  * Lorentzian A With Offset

    :math:`z = a /{({(1+{({(x-b)}/c)}^{2})}*{(1+{({(y-d)}/f)}^{2})})} +\text{Offset}`

    [a, b, c, d, f, Offset]

* Lorentzian B (``LorentzianB``)

  * Lorentzian B

    :math:`z = a / {(1+{({(x-b)}/c)}^{2})} + d *{(1+{({(y-f)}/g)}^{2})}`

    [a, b, c, d, f, g]

  * Lorentzian B With Offset

    :math:`z = a / {(1+{({(x-b)}/c)}^{2})} + d *{(1+{({(y-f)}/g)}^{2})} + \text{Offset}`

    [a, b, c, d, f, g, Offset]


Polyfunctional
^^^^^^^^^^^^^^

* User-Selectable Polyfunctional (``UserSelectablePolyfunctional``)

  * User-Selectable Polyfunctional

    :math:`z = user-selectable function`

    []


Polynomial
^^^^^^^^^^

* Full Cubic (``FullCubic``)

  * Full Cubic

    :math:`z = a + bx + cy + dx^{2} + fy^{2} +gx^{3} + hy^{3} + ixy +jx^{2}y + kxy^{2}`

    [a, b, c, d, f, g, h, i, j, k]

* Full Quadratic (``FullQuadratic``)

  * Full Quadratic

    :math:`z = a + bx + cy + dx^{2} + fy^{2} + gxy`

    [a, b, c, d, f, g]

* Linear (``Linear``)

  * Linear

    :math:`z = a + bx + cy`

    [a, b, c]

* Simplified Cubic (``SimplifiedCubic``)

  * Simplified Cubic

    :math:`z = a + bx + cy + dx^{2} + fy^{2} +gx^{3} + hy^{3}`

    [a, b, c, d, f, g, h]

* Simplified Quadratic (``SimplifiedQuadratic``)

  * Simplified Quadratic

    :math:`z = a + bx + cy + dx^{2} + fy^{2}`

    [a, b, c, d, f]

* User-Selectable Polynomial (``UserSelectablePolynomial``)

  * User-Selectable Polynomial

    :math:`z = user-selectable polynomial`



Power
^^^^^

* Power A (``PowerA``)

  * Power A

    :math:`z = a * {(x^{b} + y^{c})}`

    [a, b, c]

  * Power A With Offset

    :math:`z = a * {(x^{b} + y^{c})} + \text{Offset}`

    [a, b, c, Offset]

* Transform Power A (``PowerA_Transform``)

  * Transform Power A

    :math:`z = a * {({(dx + f)}^{b} + {(gy + h)}^{c})}`

    [a, b, c, d, f, g, h]

  * Transform Power A With Offset

    :math:`z = a * {({(dx + f)}^{b} + {(gy + h)}^{c})} +\text{Offset}`

    [a, b, c, d, f, g, h, Offset]

* Power B (``PowerB``)

  * Power B

    :math:`z = a + x^{b} + y^{c}`

    [a, b, c]

* Transform Power B (``PowerB_Transform``)

  * Transform Power B

    :math:`z = a + {(dx + f)}^{b} + {(gy + h)}^{c}`

    [a, b, c, d, f, g, h]

* Power C (``PowerC``)

  * Power C

    :math:`z = a + x^{b} * y^{c}`

    [a, b, c]

* Transform Power C (``PowerC_Transform``)

  * Transform Power C

    :math:`z = a + {(dx + f)}^{b} * {(gy + h)}^{c}`

    [a, b, c, d, f, g, h]

* Power D (``PowerD``)

  * Power D

    :math:`z = ax^{b} + cy^{d}`

    [a, b, c, d]

  * Power D With Offset

    :math:`z = ax^{b} + cy^{d} + \text{Offset}`

    [a, b, c, d, Offset]

* Transform Power D (``PowerD_Transform``)

  * Transform Power D

    :math:`z = a{(fx + g)}^{b} + c{(hy + i)}^{d}`

    [a, b, c, d, f, g, h, i]

  * Transform Power D With Offset

    :math:`z = a{(fx + g)}^{b} + c{(hy + i)}^{d} + \text{Offset}`

    [a, b, c, d, f, g, h, i, Offset]

* Power E (``PowerE``)

  * Power E

    :math:`z = a * x^{b} * y^{c}`

    [a, b, c]

  * Power E With Offset

    :math:`z = a * x^{b} * y^{c} + \text{Offset}`

    [a, b, c, Offset]

* Transform Power E (``PowerE_Transform``)

  * Transform Power E

    :math:`z = a * {(dx + f)}^{b} * {(gy + h)}^{c}`

    [a, b, c, d, f, g, h]

  * Transform Power E With Offset

    :math:`z = a * {(dx + f)}^{b} * {(gy + h)}^{c} +\text{Offset}`

    [a, b, c, d, f, g, h, Offset]


Rational
^^^^^^^^

* Rational A (``RationalA``)

  * Rational A

    :math:`z = {(a + bx + cy)}/{(1 + dx + fy)}`

    [a, b, c, d, f]

  * Rational A With Offset

    :math:`z = {(a + bx + cy)}/{(1 + dx + fy)} + \text{Offset}`

    [a, b, c, d, f, Offset]

* Rational B (``RationalB``)

  * Rational B

    :math:`z = {(a + b*ln{(x)} + c*ln{(y)})}/{(1 + dx + fy)}`

    [a, b, c, d, f]

  * Rational B With Offset

    :math:`z = {(a + b*ln{(x)} + c*ln{(y)})}/{(1 + dx + fy)} + \text{Offset}`

    [a, b, c, d, f, Offset]

* Rational C (``RationalC``)

  * Rational C

    :math:`z = {(a + b*\exp{(x)} + c*ln{(y)})}/{(1 + dx + fy)}`

    [a, b, c, d, f]

  * Rational C With Offset

    :math:`z = {(a + b*\exp{(x)} + c*ln{(y)})}/{(1 + dx + fy)} + \text{Offset}`

    [a, b, c, d, f, Offset]

* Rational D (``RationalD``)

  * Rational D

    :math:`z = {(a + b*ln{(x)} + c*\exp{(y)})}/{(1 + dx + fy)}`

    [a, b, c, d, f]

  * Rational D With Offset

    :math:`z = {(a + b*ln{(x)} + c*\exp{(y)})}/{(1 + dx + fy)} + \text{Offset}`

    [a, b, c, d, f, Offset]

* Rational E (``RationalE``)

  * Rational E

    :math:`z = {(a + b*\exp{(x)} + c*\exp{(y)})}/{(1 + dx + fy)}`

    [a, b, c, d, f]

  * Rational E With Offset

    :math:`z = {(a + b*\exp{(x)} + c*\exp{(y)})}/{(1 + dx + fy)} + \text{Offset}`

    [a, b, c, d, f, Offset]

* Rational F (``RationalF``)

  * Rational F

    :math:`z = {(a + bx + cy)}/{(1 + d*ln{(x)} + f*ln{(y)})}`

    [a, b, c, d, f]

  * Rational F With Offset

    :math:`z = {(a + bx + cy)}/{(1 + d*ln{(x)} + f*ln{(y)})} + \text{Offset}`

    [a, b, c, d, f, Offset]

* Rational G (``RationalG``)

  * Rational G

    :math:`z = {(a + bx + cy)}/{(1 + d*\exp{(x)} + f*ln{(y)})}`

    [a, b, c, d, f]

  * Rational G With Offset

    :math:`z = {(a + bx + cy)}/{(1 + d*\exp{(x)} + f*ln{(y)})} + \text{Offset}`

    [a, b, c, d, f, Offset]

* Rational H (``RationalH``)

  * Rational H

    :math:`z = {(a + bx + cy)}/{(1 + d*ln{(x)} + f*\exp{(y)})}`

    [a, b, c, d, f]

  * Rational H With Offset

    :math:`z = {(a + bx + cy)}/{(1 + d*ln{(x)} + f*\exp{(y)})} + \text{Offset}`

    [a, b, c, d, f, Offset]

* Rational I (``RationalI``)

  * Rational I

    :math:`z = {(a + bx + cy)}/{(1 + d*\exp{(x)} + f*\exp{(y)})}`

    [a, b, c, d, f]

  * Rational I With Offset

    :math:`z = {(a + bx + cy)}/{(1 + d*\exp{(x)} + f*\exp{(y)})} + \text{Offset}`

    [a, b, c, d, f, Offset]

* Rational J (``RationalJ``)

  * Rational J

    :math:`z = {(a + b*ln{(x)} + c*ln{(y)})}/{(1 + d*ln{(x)} + f*ln{(y)})}`

    [a, b, c, d, f]

  * Rational J With Offset

    :math:`z = {(a + b*ln{(x)} + c*ln{(y)})}/{(1 + d*ln{(x)} + f*ln{(y)})} + \text{Offset}`

    [a, b, c, d, f, Offset]

* Rational K (``RationalK``)

  * Rational K

    :math:`z = {(a + b*\exp{(x)} + c*ln{(y)})}/{(1 + d*\exp{(x)} + f*ln{(y)})}`

    [a, b, c, d, f]

  * Rational K With Offset

    :math:`z = {(a + b*\exp{(x)} + c*ln{(y)})}/{(1 + d*\exp{(x)} + f*ln{(y)})} + \text{Offset}`

    [a, b, c, d, f, Offset]

* Rational L (``RationalL``)

  * Rational L

    :math:`z = {(a + b*ln{(x)} + c*\exp{(y)})}/{(1 + d*ln{(x)} + f*\exp{(y)})}`

    [a, b, c, d, f]

  * Rational L With Offset

    :math:`z = {(a + b*ln{(x)} + c*\exp{(y)})}/{(1 + d*ln{(x)} + f*\exp{(y)})} + \text{Offset}`

    [a, b, c, d, f, Offset]

* Rational M (``RationalM``)

  * Rational M

    :math:`z = {(a + b*\exp{(x)} + c*\exp{(y)})}/{(1 + d*\exp{(x)} + f*\exp{(y)})}`

    [a, b, c, d, f]

  * Rational M With Offset

    :math:`z = {(a + b*\exp{(x)} + c*\exp{(y)})}/{(1 + d*\exp{(x)} + f*\exp{(y)})} + \text{Offset}`

    [a, b, c, d, f, Offset]

* Rational N (``RationalN``)

  * Rational N

    :math:`z = {(a + bx + cy + dxy)}/{(1 + fx + gy + hxy)}`

    [a, b, c, d, f, g, h]

  * Rational N With Offset

    :math:`z = {(a + bx + cy + dxy)}/{(1 + fx + gy + hxy)} + \text{Offset}`

    [a, b, c, d, f, g, h, Offset]

* Rational O (``RationalO``)

  * Rational O

    :math:`z = {(a + b*ln{(x)} + c*ln{(y)} + d*ln{(x)}ln{(y)})}/{(1 + fx + gy + hxy)}`

    [a, b, c, d, f, g, h]

  * Rational O With Offset

    :math:`z = {(a + b*ln{(x)} + c*ln{(y)} + d*ln{(x)}ln{(y)})}/{(1 + fx + gy + hxy)} + \text{Offset}`

    [a, b, c, d, f, g, h, Offset]

* Rational P (``RationalP``)

  * Rational P

    :math:`z = {(a + b*\exp{(x)} + c*ln{(y)} + d*\exp{(x)}ln{(y)})}/{(1 + fx + gy + hxy)}`

    [a, b, c, d, f, g, h]

  * Rational P With Offset

    :math:`z = {(a + b*\exp{(x)} + c*ln{(y)} + d*\exp{(x)}ln{(y)})}/{(1 + fx + gy + hxy)} +\text{Offset}`

    [a, b, c, d, f, g, h, Offset]

* Rational Q (``RationalQ``)

  * Rational Q

    :math:`z = {(a + b*ln{(x)} + c*\exp{(y)} + d*ln{(x)}\exp{(y)})}/{(1 + fx + gy + hxy)}`

    [a, b, c, d, f, g, h]

  * Rational Q With Offset

    :math:`z = {(a + b*ln{(x)} + c*\exp{(y)} + d*ln{(x)}\exp{(y)})}/{(1 + fx + gy + hxy)} +\text{Offset}`

    [a, b, c, d, f, g, h, Offset]

* Rational R (``RationalR``)

  * Rational R

    :math:`z = {(a + b*\exp{(x)} + c*\exp{(y)} + d*\exp{(x)}\exp{(y)})}/{(1 + fx + gy + hxy)}`

    [a, b, c, d, f, g, h]

  * Rational R With Offset

    :math:`z = {(a + b*\exp{(x)} + c*\exp{(y)} + d*\exp{(x)}\exp{(y)})}/{(1 + fx + gy + hxy)} +\text{Offset}`

    [a, b, c, d, f, g, h, Offset]

* Rational S (``RationalS``)

  * Rational S

    :math:`z = {(a + bx + cy + dxy)}/{(1 + f*ln{(x)} + g*ln{(y)} + h*ln{(x)}*ln{(y)})}`

    [a, b, c, d, f, g, h]

  * Rational S With Offset

    :math:`z = {(a + bx + cy + dxy)}/{(1 + f*ln{(x)} + g*ln{(y)} + h*ln{(x)}*ln{(y)})} + \text{Offset}`

    [a, b, c, d, f, g, h, Offset]

* Rational T (``RationalT``)

  * Rational T

    :math:`z = {(a + bx + cy + dxy)}/{(1 + f*\exp{(x)} + g*ln{(y)} + h*\exp{(x)}*ln{(y)})}`

    [a, b, c, d, f, g, h]

  * Rational T With Offset

    :math:`z = {(a + bx + cy + dxy)}/{(1 + f*\exp{(x)} + g*ln{(y)} + h*\exp{(x)}*ln{(y)})} +\text{Offset}`

    [a, b, c, d, f, g, h, Offset]

* Rational U (``RationalU``)

  * Rational U

    :math:`z = {(a + bx + cy + dxy)}/{(1 + f*ln{(x)} + g*\exp{(y)} + h*ln{(x)}*\exp{(y)})}`

    [a, b, c, d, f, g, h]

  * Rational U With Offset

    :math:`z = {(a + bx + cy + dxy)}/{(1 + f*ln{(x)} + g*\exp{(y)} + h*ln{(x)}*\exp{(y)})} +\text{Offset}`

    [a, b, c, d, f, g, h, Offset]

* Rational V (``RationalV``)

  * Rational V

    :math:`z = {(a + bx + cy + dxy)}/{(1 + f*\exp{(x)} + g*\exp{(y)} + h*\exp{(x)}*\exp{(y)})}`

    [a, b, c, d, f, g, h]

  * Rational V With Offset

    :math:`z = {(a + bx + cy + dxy)}/{(1 + f*\exp{(x)} + g*\exp{(y)} + h*\exp{(x)}*\exp{(y)})} +\text{Offset}`

    [a, b, c, d, f, g, h, Offset]

* Rational W (``RationalW``)

  * Rational W

    :math:`z = {(a + b*ln{(x)} + c*ln{(y)} + d*ln{(x)}*ln{(y)})}/{(1 + f*ln{(x)} + g*ln{(y)} +h*ln{(x)}*ln{(y)})}`

    [a, b, c, d, f, g, h]

  * Rational W With Offset

    :math:`z = {(a + b*ln{(x)} + c*ln{(y)} + d*ln{(x)}*ln{(y)})}/{(1 + f*ln{(x)} + g*ln{(y)} +h*ln{(x)}*ln{(y)})} + \text{Offset}`

    [a, b, c, d, f, g, h, Offset]

* Rational X (``RationalX``)

  * Rational X

    :math:`z = {(a + b*\exp{(x)} + c*ln{(y)} + d*\exp{(x)}*ln{(y)})}/{(1 + f*\exp{(x)} + g*ln{(y)} +h*\exp{(x)}*ln{(y)})}`

    [a, b, c, d, f, g, h]

  * Rational X With Offset

    :math:`z = {(a + b*\exp{(x)} + c*ln{(y)} + d*\exp{(x)}*ln{(y)})}/{(1 + f*\exp{(x)} + g*ln{(y)} +h*\exp{(x)}*ln{(y)})} + \text{Offset}`

    [a, b, c, d, f, g, h, Offset]

* Rational Y (``RationalY``)

  * Rational Y

    :math:`z = {(a + b*ln{(x)} + c*\exp{(y)} + d*ln{(x)}*\exp{(y)})}/{(1 + f*ln{(x)} + g*\exp{(y)} +h*ln{(x)}*\exp{(y)})}`

    [a, b, c, d, f, g, h]

  * Rational Y With Offset

    :math:`z = {(a + b*ln{(x)} + c*\exp{(y)} + d*ln{(x)}*\exp{(y)})}/{(1 + f*ln{(x)} + g*\exp{(y)} +h*ln{(x)}*\exp{(y)})} + \text{Offset}`

    [a, b, c, d, f, g, h, Offset]

* Rational Z (``RationalZ``)

  * Rational Z

    :math:`z = {(a + b*\exp{(x)} + c*\exp{(y)} + d*\exp{(x)}*\exp{(y)})}/{(1 + f*\exp{(x)} + g*\exp{(y)}+ h*\exp{(x)}*\exp{(y)})}`

    [a, b, c, d, f, g, h]

  * Rational Z With Offset

    :math:`z = {(a + b*\exp{(x)} + c*\exp{(y)} + d*\exp{(x)}*\exp{(y)})}/{(1 + f*\exp{(x)} + g*\exp{(y)}+ h*\exp{(x)}*\exp{(y)})} + \text{Offset}`

    [a, b, c, d, f, g, h, Offset]


RomanSurfaces
^^^^^^^^^^^^^

* Roman Surface (minus) (``RomanSurfaceMinus``)

  * Roman Surface (minus)

    :math:`z = {(k{(y^{2}-x^{2})} -{(x^{2}-y^{2})}\sqrt{(k^{2}-x^{2}-y^{2})})}/ {(2{(x^{2}+y^{2})})}`

    [k]

  * Roman Surface (minus) With Offset

    :math:`z = {(k{(y^{2}-x^{2})} -{(x^{2}-y^{2})}\sqrt{(k^{2}-x^{2}-y^{2})})}/ {(2{(x^{2}+y^{2})})} + \text{Offset}`

    [k, Offset]

* Roman Surface (minus) Offset XY (``RomanSurfaceMinus_OffsetXY``)

  * Roman Surface (minus) Offset XY

    :math:`z = {(k{({(y+b)}^{2}-{(x+a)}^{2})} -{({(x+a)}^{2}-{(y+b)}^{2})}\sqrt{(k^{2}-{(x+a)}^{2}-{(y+b)}^{2})})}/ {(2{({(x+a)}^{2}+{(y+b)}^{2})})}`

    [k, a, b]

  * Roman Surface (minus) Offset XY With Offset

    :math:`z = {(k{({(y+b)}^{2}-{(x+a)}^{2})} -{({(x+a)}^{2}-{(y+b)}^{2})}\sqrt{(k^{2}-{(x+a)}^{2}-{(y+b)}^{2})})}/ {(2{({(x+a)}^{2}+{(y+b)}^{2})})} + \text{Offset}`

    [k, a, b, Offset]

* Roman Surface (minus) Scaled And Offset XY (``RomanSurfaceMinus_ScaledAndOffsetXY``)

  * Roman Surface (minus) Scaled And Offset XY

    :math:`z = {(k{({(cy+d)}^{2}-{(ax+b)}^{2})} -{({(ax+b)}^{2}-{(cy+d)}^{2})}\sqrt{(k^{2}-{(ax+b)}^{2}-{(cy+d)}^{2})})}/ {(2{({(ax+b)}^{2}+{(cy+d)}^{2})})}`

    [k, a, b, c, d]

  * Roman Surface (minus) Scaled And Offset XY With Offset

    :math:`z = {(k{({(cy+d)}^{2}-{(ax+b)}^{2})} -{({(ax+b)}^{2}-{(cy+d)}^{2})}\sqrt{(k^{2}-{(ax+b)}^{2}-{(cy+d)}^{2})})}/ {(2{({(ax+b)}^{2}+{(cy+d)}^{2})})} + \text{Offset}`

    [k, a, b, c, d, Offset]

* Roman Surface (plus) (``RomanSurfacePlus``)

  * Roman Surface (plus)

    :math:`z = {(k{(y^{2}-x^{2})} +{(x^{2}-y^{2})}\sqrt{(k^{2}-x^{2}-y^{2})})}/ {(2{(x^{2}+y^{2})})}`

    [k]

  * Roman Surface (plus) With Offset

    :math:`z = {(k{(y^{2}-x^{2})} +{(x^{2}-y^{2})}\sqrt{(k^{2}-x^{2}-y^{2})})}/ {(2{(x^{2}+y^{2})})} + \text{Offset}`

    [k, Offset]

* Roman Surface (plus) Offset XY (``RomanSurfacePlus_OffsetXY``)

  * Roman Surface (plus) Offset XY

    :math:`z = {(k{({(y+b)}^{2}-{(x+a)}^{2})} +{({(x+a)}^{2}-{(y+b)}^{2})}\sqrt{(k^{2}-{(x+a)}^{2}-{(y+b)}^{2})})}/ {(2{({(x+a)}^{2}+{(y+b)}^{2})})}`

    [k, a, b]

  * Roman Surface (plus) Offset XY With Offset

    :math:`z = {(k{({(y+b)}^{2}-{(x+a)}^{2})} +{({(x+a)}^{2}-{(y+b)}^{2})}\sqrt{(k^{2}-{(x+a)}^{2}-{(y+b)}^{2})})}/ {(2{({(x+a)}^{2}+{(y+b)}^{2})})} + \text{Offset}`

    [k, a, b, Offset]

* Roman Surface (plus) Scaled And Offset XY (``RomanSurfacePlus_ScaledAndOffsetXY``)

  * Roman Surface (plus) Scaled And Offset XY

    :math:`z = {(k{({(cy+d)}^{2}-{(ax+b)}^{2})} +{({(ax+b)}^{2}-{(cy+d)}^{2})}\sqrt{(k^{2}-{(ax+b)}^{2}-{(cy+d)}^{2})})}/ {(2{({(ax+b)}^{2}+{(cy+d)}^{2})})}`

    [k, a, b, c, d]

  * Roman Surface (plus) Scaled And Offset XY With Offset

    :math:`z = {(k{({(cy+d)}^{2}-{(ax+b)}^{2})} +{({(ax+b)}^{2}-{(cy+d)}^{2})}\sqrt{(k^{2}-{(ax+b)}^{2}-{(cy+d)}^{2})})}/ {(2{({(ax+b)}^{2}+{(cy+d)}^{2})})} + \text{Offset}`

    [k, a, b, c, d, Offset]

* Roman Surface (plus) Scaled (``RomanSurfacePlus_scaled``)

  * Roman Surface (plus) Scaled

    :math:`z = Scale * {(k{(y^{2}-x^{2})} +{(x^{2}-y^{2})}\sqrt{(k^{2}-x^{2}-y^{2})})}/ {(2{(x^{2}+y^{2})})}`

    [k, Scale]

  * Roman Surface (plus) Scaled With Offset

    :math:`z = Scale * {(k{(y^{2}-x^{2})} +{(x^{2}-y^{2})}\sqrt{(k^{2}-x^{2}-y^{2})})}/ {(2{(x^{2}+y^{2})})} + \text{Offset}`

    [k, Scale, Offset]


Sigmoidal
^^^^^^^^^

* Andrea Prunotto Sigmoid A (``AndreaPrunottoSigmoidA``)

  * Andrea Prunotto Sigmoid A

    :math:`z = a0 + {(a1 / {(1.0 + \exp{(a2 * {(x + a3 + a4 * y + a5 * x * y)})})})}`

    [a0, a1, a2, a3, a4, a5]

* Andrea Prunotto Sigmoid B (``AndreaPrunottoSigmoidB``)

  * Andrea Prunotto Sigmoid B

    :math:`z = a0 + {(a1 / {(1.0 + \exp{(a2 * {(x * a3 + a4 * y + a5 * x * y)})})})}`

    [a0, a1, a2, a3, a4, a5]

* Fraser Smith Sigmoid (``FraserSmithSigmoid``)

  * Fraser Smith Sigmoid

    :math:`z = 1.0 / {({(1.0 + \exp{(a - bx)})} * {(1.0 + \exp{(c - dy)})})}`

    [a, b, c, d]

  * Fraser Smith Sigmoid With Offset

    :math:`z = 1.0 / {({(1.0 + \exp{(a - bx)})} * {(1.0 + \exp{(c - dy)})})} + \text{Offset}`

    [a, b, c, d, Offset]

* Fraser Smith Sigmoid Scaled (``FraserSmithSigmoid_scaled``)

  * Fraser Smith Sigmoid Scaled

    :math:`z = Scale / {({(1.0 + \exp{(a - bx)})} * {(1.0 + \exp{(c - dy)})})}`

    [a, b, c, d, Scale]

  * Fraser Smith Sigmoid Scaled With Offset

    :math:`z = Scale / {({(1.0 + \exp{(a - bx)})} * {(1.0 + \exp{(c - dy)})})} + \text{Offset}`

    [a, b, c, d, Scale, Offset]

* Sigmoid (``Sigmoid``)

  * Sigmoid

    :math:`z = a / {({(1.0 + \exp{(b - cx)})} * {(1.0 + \exp{(d - fy)})})}`

    [a, b, c, d, f]

  * Sigmoid With Offset

    :math:`z = a / {({(1.0 + \exp{(b - cx)})} * {(1.0 + \exp{(d - fy)})})} + \text{Offset}`

    [a, b, c, d, f, Offset]


Simple
^^^^^^

* Simple Equation 01 (``SimpleEquation_01``)

  * Simple Equation 01

    :math:`z = a*pow{(x,b)}*pow{(y,c)}`

    [a, b, c]

  * Simple Equation 01 With Offset

    :math:`z = a*pow{(x,b)}*pow{(y,c)} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 02 (``SimpleEquation_02``)

  * Simple Equation 02

    :math:`z = x/{(a+b*y)}`

    [a, b]

  * Simple Equation 02 With Offset

    :math:`z = x/{(a+b*y)} + \text{Offset}`

    [a, b, Offset]

* Simple Equation 03 (``SimpleEquation_03``)

  * Simple Equation 03

    :math:`z = y/{(a+b*x)}`

    [a, b]

  * Simple Equation 03 With Offset

    :math:`z = y/{(a+b*x)} + \text{Offset}`

    [a, b, Offset]

* Simple Equation 04 (``SimpleEquation_04``)

  * Simple Equation 04

    :math:`z = a*pow{(x,b*y)}`

    [a, b]

  * Simple Equation 04 With Offset

    :math:`z = a*pow{(x,b*y)} + \text{Offset}`

    [a, b, Offset]

* Simple Equation 05 (``SimpleEquation_05``)

  * Simple Equation 05

    :math:`z = a*pow{(y,b*x)}`

    [a, b]

  * Simple Equation 05 With Offset

    :math:`z = a*pow{(y,b*x)} + \text{Offset}`

    [a, b, Offset]

* Simple Equation 06 (``SimpleEquation_06``)

  * Simple Equation 06

    :math:`z = a*pow{(x,b/y)}`

    [a, b]

  * Simple Equation 06 With Offset

    :math:`z = a*pow{(x,b/y)} + \text{Offset}`

    [a, b, Offset]

* Simple Equation 07 (``SimpleEquation_07``)

  * Simple Equation 07

    :math:`z = a*pow{(y,b/x)}`

    [a, b]

  * Simple Equation 07 With Offset

    :math:`z = a*pow{(y,b/x)} + \text{Offset}`

    [a, b, Offset]

* Simple Equation 08 (``SimpleEquation_08``)

  * Simple Equation 08

    :math:`z = a*x+b*pow{(y,2.0)}`

    [a, b]

  * Simple Equation 08 With Offset

    :math:`z = a*x+b*pow{(y,2.0)} + \text{Offset}`

    [a, b, Offset]

* Simple Equation 09 (``SimpleEquation_09``)

  * Simple Equation 09

    :math:`z = a*y+b*pow{(x,2.0)}`

    [a, b]

  * Simple Equation 09 With Offset

    :math:`z = a*y+b*pow{(x,2.0)} + \text{Offset}`

    [a, b, Offset]

* Simple Equation 10 (``SimpleEquation_10``)

  * Simple Equation 10

    :math:`z = x/{(a+b*pow{(y,2.0)})}`

    [a, b]

  * Simple Equation 10 With Offset

    :math:`z = x/{(a+b*pow{(y,2.0)})} + \text{Offset}`

    [a, b, Offset]

* Simple Equation 11 (``SimpleEquation_11``)

  * Simple Equation 11

    :math:`z = y/{(a+b*pow{(x,2.0)})}`

    [a, b]

  * Simple Equation 11 With Offset

    :math:`z = y/{(a+b*pow{(x,2.0)})} + \text{Offset}`

    [a, b, Offset]

* Simple Equation 12 (``SimpleEquation_12``)

  * Simple Equation 12

    :math:`z = a*pow{(b,x)}*pow{(y,c)}`

    [a, b, c]

  * Simple Equation 12 With Offset

    :math:`z = a*pow{(b,x)}*pow{(y,c)} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 13 (``SimpleEquation_13``)

  * Simple Equation 13

    :math:`z = a*pow{(b,y)}*pow{(x,c)}`

    [a, b, c]

  * Simple Equation 13 With Offset

    :math:`z = a*pow{(b,y)}*pow{(x,c)} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 14 (``SimpleEquation_14``)

  * Simple Equation 14

    :math:`z = a*pow{(x*y,b)}`

    [a, b]

  * Simple Equation 14 With Offset

    :math:`z = a*pow{(x*y,b)} + \text{Offset}`

    [a, b, Offset]

* Simple Equation 15 (``SimpleEquation_15``)

  * Simple Equation 15

    :math:`z = a*pow{(x/y,b)}`

    [a, b]

  * Simple Equation 15 With Offset

    :math:`z = a*pow{(x/y,b)} + \text{Offset}`

    [a, b, Offset]

* Simple Equation 16 (``SimpleEquation_16``)

  * Simple Equation 16

    :math:`z = a*{(pow{(b,1.0/x)})}*pow{(y,c)}`

    [a, b, c]

  * Simple Equation 16 With Offset

    :math:`z = a*{(pow{(b,1.0/x)})}*pow{(y,c)} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 17 (``SimpleEquation_17``)

  * Simple Equation 17

    :math:`z = a*pow{(b,1.0/y)}*pow{(x,c)}`

    [a, b, c]

  * Simple Equation 17 With Offset

    :math:`z = a*pow{(b,1.0/y)}*pow{(x,c)} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 18 (``SimpleEquation_18``)

  * Simple Equation 18

    :math:`z = a*pow{(x/b,c)}*\exp{(y/b)}`

    [a, b, c]

  * Simple Equation 18 With Offset

    :math:`z = a*pow{(x/b,c)}*\exp{(y/b)} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 19 (``SimpleEquation_19``)

  * Simple Equation 19

    :math:`z = a*pow{(y/b,c)}*\exp{(x/b)}`

    [a, b, c]

  * Simple Equation 19 With Offset

    :math:`z = a*pow{(y/b,c)}*\exp{(x/b)} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 20 (``SimpleEquation_20``)

  * Simple Equation 20

    :math:`z = a*pow{(x,b+c*y)}`

    [a, b, c]

  * Simple Equation 20 With Offset

    :math:`z = a*pow{(x,b+c*y)} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 21 (``SimpleEquation_21``)

  * Simple Equation 21

    :math:`z = a*pow{(y,b+c*x)}`

    [a, b, c]

  * Simple Equation 21 With Offset

    :math:`z = a*pow{(y,b+c*x)} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 22 (``SimpleEquation_22``)

  * Simple Equation 22

    :math:`z = a*pow{(x,b+c/y)}`

    [a, b, c]

  * Simple Equation 22 With Offset

    :math:`z = a*pow{(x,b+c/y)} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 23 (``SimpleEquation_23``)

  * Simple Equation 23

    :math:`z = a*pow{(y,b+c/x)}`

    [a, b, c]

  * Simple Equation 23 With Offset

    :math:`z = a*pow{(y,b+c/x)} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 24 (``SimpleEquation_24``)

  * Simple Equation 24

    :math:`z = a*pow{(x,b+c*ln{(y)})}`

    [a, b, c]

  * Simple Equation 24 With Offset

    :math:`z = a*pow{(x,b+c*ln{(y)})} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 25 (``SimpleEquation_25``)

  * Simple Equation 25

    :math:`z = a*pow{(y,b+c*ln{(x)})}`

    [a, b, c]

  * Simple Equation 25 With Offset

    :math:`z = a*pow{(y,b+c*ln{(x)})} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 26 (``SimpleEquation_26``)

  * Simple Equation 26

    :math:`z = a*pow{(y,b+c/ln{(x)})}`

    [a, b, c]

  * Simple Equation 26 With Offset

    :math:`z = a*pow{(y,b+c/ln{(x)})} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 27 (``SimpleEquation_27``)

  * Simple Equation 27

    :math:`z = a*pow{(x,b+c/ln{(y)})}`

    [a, b, c]

  * Simple Equation 27 With Offset

    :math:`z = a*pow{(x,b+c/ln{(y)})} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 28 (``SimpleEquation_28``)

  * Simple Equation 28

    :math:`z = a*\exp{(b*x+c*pow{(y,2.0)})}`

    [a, b, c]

  * Simple Equation 28 With Offset

    :math:`z = a*\exp{(b*x+c*pow{(y,2.0)})} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 29 (``SimpleEquation_29``)

  * Simple Equation 29

    :math:`z = a*\exp{(b*y+c*pow{(x,2.0)})}`

    [a, b, c]

  * Simple Equation 29 With Offset

    :math:`z = a*\exp{(b*y+c*pow{(x,2.0)})} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 30 (``SimpleEquation_30``)

  * Simple Equation 30

    :math:`z = a*\exp{(b/x+c*y)}`

    [a, b, c]

  * Simple Equation 30 With Offset

    :math:`z = a*\exp{(b/x+c*y)} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 31 (``SimpleEquation_31``)

  * Simple Equation 31

    :math:`z = a*\exp{(b/y+c*x)}`

    [a, b, c]

  * Simple Equation 31 With Offset

    :math:`z = a*\exp{(b/y+c*x)} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 32 (``SimpleEquation_32``)

  * Simple Equation 32

    :math:`z = {(a+x)}/{(b+c*y)}`

    [a, b, c]

  * Simple Equation 32 With Offset

    :math:`z = {(a+x)}/{(b+c*y)} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 33 (``SimpleEquation_33``)

  * Simple Equation 33

    :math:`z = {(a+y)}/{(b+c*x)}`

    [a, b, c]

  * Simple Equation 33 With Offset

    :math:`z = {(a+y)}/{(b+c*x)} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 34 (``SimpleEquation_34``)

  * Simple Equation 34

    :math:`z = {(a+x)}/{(b+c*pow{(y,2.0)})}`

    [a, b, c]

  * Simple Equation 34 With Offset

    :math:`z = {(a+x)}/{(b+c*pow{(y,2.0)})} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 35 (``SimpleEquation_35``)

  * Simple Equation 35

    :math:`z = {(a+y)}/{(b+c*pow{(x,2.0)})}`

    [a, b, c]

  * Simple Equation 35 With Offset

    :math:`z = {(a+y)}/{(b+c*pow{(x,2.0)})} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 36 (``SimpleEquation_36``)

  * Simple Equation 36

    :math:`z = a*{(\exp{(b*x)}-\exp{(c*y)})}`

    [a, b, c]

  * Simple Equation 36 With Offset

    :math:`z = a*{(\exp{(b*x)}-\exp{(c*y)})} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 37 (``SimpleEquation_37``)

  * Simple Equation 37

    :math:`z = a*pow{(x,b*pow{(y,c)})}`

    [a, b, c]

  * Simple Equation 37 With Offset

    :math:`z = a*pow{(x,b*pow{(y,c)})} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 38 (``SimpleEquation_38``)

  * Simple Equation 38

    :math:`z = a*pow{(y,b*pow{(x,c)})}`

    [a, b, c]

  * Simple Equation 38 With Offset

    :math:`z = a*pow{(y,b*pow{(x,c)})} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 39 (``SimpleEquation_39``)

  * Simple Equation 39

    :math:`z = x/{(a+b*y+c*pow{(y,0.5)})}`

    [a, b, c]

  * Simple Equation 39 With Offset

    :math:`z = x/{(a+b*y+c*pow{(y,0.5)})} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 40 (``SimpleEquation_40``)

  * Simple Equation 40

    :math:`z = y/{(a+b*x+c*pow{(x,0.5)})}`

    [a, b, c]

  * Simple Equation 40 With Offset

    :math:`z = y/{(a+b*x+c*pow{(x,0.5)})} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 41 (``SimpleEquation_41``)

  * Simple Equation 41

    :math:`z = \exp{(a+b/x+c*ln{(y)})}`

    [a, b, c]

  * Simple Equation 41 With Offset

    :math:`z = \exp{(a+b/x+c*ln{(y)})} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 42 (``SimpleEquation_42``)

  * Simple Equation 42

    :math:`z = \exp{(a+b/y+c*ln{(x)})}`

    [a, b, c]

  * Simple Equation 42 With Offset

    :math:`z = \exp{(a+b/y+c*ln{(x)})} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 43 (``SimpleEquation_43``)

  * Simple Equation 43

    :math:`z = a*pow{(x,b)}*ln{(y+c)}`

    [a, b, c]

  * Simple Equation 43 With Offset

    :math:`z = a*pow{(x,b)}*ln{(y+c)} + \text{Offset}`

    [a, b, c, Offset]

* Simple Equation 44 (``SimpleEquation_44``)

  * Simple Equation 44

    :math:`z = a*pow{(y,b)}*ln{(x+c)}`

    [a, b, c]

  * Simple Equation 44 With Offset

    :math:`z = a*pow{(y,b)}*ln{(x+c)} + \text{Offset}`

    [a, b, c, Offset]


Spline
^^^^^^

* Spline (``Spline``)

  * Spline

    :math:`z = B-Spline Interpolation Surface`



TaylorSeries
^^^^^^^^^^^^

* Taylor Series A (``TaylorA``)

  * Taylor Series A

    :math:`z = a + bx + cy + dx^{2} + fy^{2} + gxy`

    [a, b, c, d, f, g]

* Taylor Series B (``TaylorB``)

  * Taylor Series B

    :math:`z = a + b*ln{(x)} + cy + d*ln{(x)}^{2} +fy^{2} + g*ln{(x)}*y`

    [a, b, c, d, f, g]

* Taylor Series C (``TaylorC``)

  * Taylor Series C

    :math:`z = a + bx + c*ln{(y)} + dx^{2} +f*ln{(y)}^{2} + g*x*ln{(y)}`

    [a, b, c, d, f, g]

* Taylor Series D (``TaylorD``)

  * Taylor Series D

    :math:`z = a + b*ln{(x)} + c*ln{(y)} + d*ln{(x)}^{2} +f*ln{(y)}^{2} + g*ln{(x)}*ln{(y)}`

    [a, b, c, d, f, g]

* Taylor Series E (``TaylorE``)

  * Taylor Series E

    :math:`z = a + b/x + cy + d/x^{2} + fy^{2} + gy/x`

    [a, b, c, d, f, g]

* Taylor Series F (``TaylorF``)

  * Taylor Series F

    :math:`z = a + b/ln{(x)} + cy + d/ln{(x)}^{2} +fy^{2} + gy/ln{(x)}`

    [a, b, c, d, f, g]

* Taylor Series G (``TaylorG``)

  * Taylor Series G

    :math:`z = a + b/x + c*ln{(y)} + d/x^{2} +f*ln{(y)}^{2} + g*ln{(y)}/x`

    [a, b, c, d, f, g]

* Taylor Series H (``TaylorH``)

  * Taylor Series H

    :math:`z = a + b/ln{(x)} + c*ln{(y)} + d/ln{(x)}^{2} +f*ln{(y)}^{2} + g*ln{(y)}/ln{(x)}`

    [a, b, c, d, f, g]

* Taylor Series I (``TaylorI``)

  * Taylor Series I

    :math:`z = a + bx + c/y + dx^{2} + f/y^{2} + gx/y`

    [a, b, c, d, f, g]

* Taylor Series J (``TaylorJ``)

  * Taylor Series J

    :math:`z = a + b*ln{(x)} + c/y + d*ln{(x)}^{2} +f/y^{2} + g*ln{(x)}/y`

    [a, b, c, d, f, g]

* Taylor Series K (``TaylorK``)

  * Taylor Series K

    :math:`z = a + bx + c/ln{(y)} + dx^{2} +f/ln{(y)}^{2} + gx/ln{(y)}`

    [a, b, c, d, f, g]

* Taylor Series L (``TaylorL``)

  * Taylor Series L

    :math:`z = a + b*ln{(x)} + c/ln{(y)} + d*ln{(x)}^{2} +f/ln{(y)}^{2} + g*ln{(x)}/ln{(y)}`

    [a, b, c, d, f, g]

* Taylor Series M (``TaylorM``)

  * Taylor Series M

    :math:`z = a + b/x + c/y + d/x^{2} + f/y^{2} +g/{(xy)}`

    [a, b, c, d, f, g]

* Taylor Series N (``TaylorN``)

  * Taylor Series N

    :math:`z = a + b/ln{(x)} + c/y + d/ln{(x)}^{2} +f/y^{2} + g/{(ln{(x)}*y)}`

    [a, b, c, d, f, g]

* Taylor Series O (``TaylorO``)

  * Taylor Series O

    :math:`z = a + b/x + c/ln{(y)} + d/x^{2} +f/ln{(y)}^{2} + g/{(x*ln{(y)})}`

    [a, b, c, d, f, g]

* Taylor Series P (``TaylorP``)

  * Taylor Series P

    :math:`z = a + b/ln{(x)} + c/ln{(y)} + d/ln{(x)}^{2} +f/ln{(y)}^{2} + g/{(ln{(x)}*ln{(y)})}`

    [a, b, c, d, f, g]


Trigonometric
^^^^^^^^^^^^^

* Cosh XY [radians] (``CoshXY``)

  * Cosh XY [radians]

    :math:`z = amplitude * cosh{(pi * {(xy - center)} / width)}`

    [amplitude, center, width]

  * Cosh XY [radians] With Offset

    :math:`z = amplitude * cosh{(pi * {(xy - center)} / width)} + \text{Offset}`

    [amplitude, center, width, Offset]

* Cosh X Plus Cosh Y [radians] (``CoshX_Plus_CoshY``)

  * Cosh X Plus Cosh Y [radians]

    :math:`z = amplitude\_x * cosh{(pi * {(x - center\_x)} / width\_x)} + amplitude\_y* cosh{(pi * {(y - center\_y)} / width\_y)}`

    [amplitude_x, center_x, width_x, amplitude_y, center_y, width_y]

  * Cosh X Plus Cosh Y [radians] With Offset

    :math:`z = amplitude\_x * cosh{(pi * {(x - center\_x)} / width\_x)} + amplitude\_y* cosh{(pi * {(y - center\_y)} / width\_y)} + \text{Offset}`

    [amplitude_x, center_x, width_x, amplitude_y, center_y, width_y, Offset]

* Cosh X Plus Sine Y [radians] (``CoshX_Plus_SineY``)

  * Cosh X Plus Sine Y [radians]

    :math:`z = amplitude\_x * cosh{(pi * {(x - center\_x)} / width\_x)} + amplitude\_y* sin{(pi * {(y - center\_y)} / width\_y)}`

    [amplitude_x, center_x, width_x, amplitude_y, center_y, width_y]

  * Cosh X Plus Sine Y [radians] With Offset

    :math:`z = amplitude\_x * cosh{(pi * {(x - center\_x)} / width\_x)} + amplitude\_y* sin{(pi * {(y - center\_y)} / width\_y)} + \text{Offset}`

    [amplitude_x, center_x, width_x, amplitude_y, center_y, width_y, Offset]

* Cosh X Plus Tangent Y [radians] (``CoshX_Plus_TangentY``)

  * Cosh X Plus Tangent Y [radians]

    :math:`z = amplitude\_x * cosh{(pi * {(x - center\_x)} / width\_x)} + amplitude\_y* tan{(pi * {(y - center\_y)} / width\_y)}`

    [amplitude_x, center_x, width_x, amplitude_y, center_y, width_y]

  * Cosh X Plus Tangent Y [radians] With Offset

    :math:`z = amplitude\_x * cosh{(pi * {(x - center\_x)} / width\_x)} + amplitude\_y* tan{(pi * {(y - center\_y)} / width\_y)} + \text{Offset}`

    [amplitude_x, center_x, width_x, amplitude_y, center_y, width_y, Offset]

* Cosh X Times Cosh Y[radians] (``CoshX_Times_CoshY``)

  * Cosh X Times Cosh Y[radians]

    :math:`z = amplitude * cosh{(pi * {(x - center\_x)} / width\_x)} * cosh{(pi * {(y -center\_y)} / width\_y)}`

    [amplitude, center_x, width_x, center_y, width_y]

  * Cosh X Times Cosh Y[radians] With Offset

    :math:`z = amplitude * cosh{(pi * {(x - center\_x)} / width\_x)} * cosh{(pi * {(y -center\_y)} / width\_y)} + \text{Offset}`

    [amplitude, center_x, width_x, center_y, width_y, Offset]

* Cosh X Times Sine Y [radians] (``CoshX_Times_SineY``)

  * Cosh X Times Sine Y [radians]

    :math:`z = amplitude * cosh{(pi * {(x - center\_x)} / width\_x)} * sin{(pi * {(y -center\_y)} / width\_y)}`

    [amplitude, center_x, width_x, center_y, width_y]

  * Cosh X Times Sine Y [radians] With Offset

    :math:`z = amplitude * cosh{(pi * {(x - center\_x)} / width\_x)} * sin{(pi * {(y -center\_y)} / width\_y)} + \text{Offset}`

    [amplitude, center_x, width_x, center_y, width_y, Offset]

* Cosh X Times Tangent Y [radians] (``CoshX_Times_TangentY``)

  * Cosh X Times Tangent Y [radians]

    :math:`z = amplitude * cosh{(pi * {(x - center\_x)} / width\_x)} * tan{(pi * {(y -center\_y)} / width\_y)}`

    [amplitude, center_x, width_x, center_y, width_y]

  * Cosh X Times Tangent Y [radians] With Offset

    :math:`z = amplitude * cosh{(pi * {(x - center\_x)} / width\_x)} * tan{(pi * {(y -center\_y)} / width\_y)} + \text{Offset}`

    [amplitude, center_x, width_x, center_y, width_y, Offset]

* Reza's Custom Equation One [radians] (``RezaCustomOne``)

  * Reza's Custom Equation One [radians]

    :math:`z = {(cos{(a*x - b*y)} + sin{(c*x - d*y)})}^{n} - {(cos{(f*x -g*y)} + sin{(h*x- i*y)})}^{n}`

    [a, b, c, d, f, g, h, i, n]

  * Reza's Custom Equation One [radians] With Offset

    :math:`z = {(cos{(a*x - b*y)} + sin{(c*x - d*y)})}^{n} - {(cos{(f*x -g*y)} + sin{(h*x- i*y)})}^{n} + \text{Offset}`

    [a, b, c, d, f, g, h, i, n, Offset]

* Reza's Custom Equation Two [radians] (``RezaCustomTwo``)

  * Reza's Custom Equation Two [radians]

    :math:`z = abs{(cos{({(A*{(x+B)})} + C*{(y+D)})})} + abs{(cos{({(A*{(x+B)})} - C*{(y+D)})})} -{(sin{(E*x+F)})}^{2} - {(sin{(E*y+G)})}^{2}`

    [A, B, C, D, E, F, G]

  * Reza's Custom Equation Two [radians] With Offset

    :math:`z = abs{(cos{({(A*{(x+B)})} + C*{(y+D)})})} + abs{(cos{({(A*{(x+B)})} - C*{(y+D)})})} -{(sin{(E*x+F)})}^{2} - {(sin{(E*y+G)})}^{2} +\text{Offset}`

    [A, B, C, D, E, F, G, Offset]

* Sine XY [radians] (``SineXY``)

  * Sine XY [radians]

    :math:`z = amplitude * sin{(pi * {(xy - center)} / width)}`

    [amplitude, center, width]

  * Sine XY [radians] With Offset

    :math:`z = amplitude * sin{(pi * {(xy - center)} / width)} + \text{Offset}`

    [amplitude, center, width, Offset]

* Sine X Plus Cosh Y [radians] (``SineX_Plus_CoshY``)

  * Sine X Plus Cosh Y [radians]

    :math:`z = amplitude\_x * sin{(pi * {(x - center\_x)} / width\_x)} + amplitude\_y *cosh{(pi * {(y - center\_y)} / width\_y)}`

    [amplitude_x, center_x, width_x, amplitude_y, center_y, width_y]

  * Sine X Plus Cosh Y [radians] With Offset

    :math:`z = amplitude\_x * sin{(pi * {(x - center\_x)} / width\_x)} + amplitude\_y *cosh{(pi * {(y - center\_y)} / width\_y)} + \text{Offset}`

    [amplitude_x, center_x, width_x, amplitude_y, center_y, width_y, Offset]

* Sine X Plus Sine Y [radians] (``SineX_Plus_SineY``)

  * Sine X Plus Sine Y [radians]

    :math:`z = amplitude\_x * sin{(pi * {(x - center\_x)} / width\_x)} + amplitude\_y *sin{(pi * {(y - center\_y)} / width\_y)}`

    [amplitude_x, center_x, width_x, amplitude_y, center_y, width_y]

  * Sine X Plus Sine Y [radians] With Offset

    :math:`z = amplitude\_x * sin{(pi * {(x - center\_x)} / width\_x)} + amplitude\_y *sin{(pi * {(y - center\_y)} / width\_y)} + \text{Offset}`

    [amplitude_x, center_x, width_x, amplitude_y, center_y, width_y, Offset]

* Sine X Plus Tangent Y [radians] (``SineX_Plus_TangentY``)

  * Sine X Plus Tangent Y [radians]

    :math:`z = amplitude\_x * sin{(pi * {(x - center\_x)} / width\_x)} + amplitude\_y *tan{(pi * {(y - center\_y)} / width\_y)}`

    [amplitude_x, center_x, width_x, amplitude_y, center_y, width_y]

  * Sine X Plus Tangent Y [radians] With Offset

    :math:`z = amplitude\_x * sin{(pi * {(x - center\_x)} / width\_x)} + amplitude\_y *tan{(pi * {(y - center\_y)} / width\_y)} + \text{Offset}`

    [amplitude_x, center_x, width_x, amplitude_y, center_y, width_y, Offset]

* Sine X Times Cosh Y [radians] (``SineX_Times_CoshY``)

  * Sine X Times Cosh Y [radians]

    :math:`z = amplitude * sine{(pi * {(x - center\_x)} / width\_x)} * cosh{(pi * {(y -center\_y)} / width\_y)}`

    [amplitude, center_x, width_x, center_y, width_y]

  * Sine X Times Cosh Y [radians] With Offset

    :math:`z = amplitude * sine{(pi * {(x - center\_x)} / width\_x)} * cosh{(pi * {(y -center\_y)} / width\_y)} + \text{Offset}`

    [amplitude, center_x, width_x, center_y, width_y, Offset]

* Sine X Times Sine Y [radians] (``SineX_Times_SineY``)

  * Sine X Times Sine Y [radians]

    :math:`z = amplitude * sin{(pi * {(x - center\_x)} / width\_x)} * sin{(pi * {(y -center\_y)} / width\_y)}`

    [amplitude, center_x, width_x, center_y, width_y]

  * Sine X Times Sine Y [radians] With Offset

    :math:`z = amplitude * sin{(pi * {(x - center\_x)} / width\_x)} * sin{(pi * {(y -center\_y)} / width\_y)} + \text{Offset}`

    [amplitude, center_x, width_x, center_y, width_y, Offset]

* Sine X Times Tangent Y [radians] (``SineX_Times_TangentY``)

  * Sine X Times Tangent Y [radians]

    :math:`z = amplitude * sin{(pi * {(x - center\_x)} / width\_x)} * tan{(pi * {(y -center\_y)} / width\_y)}`

    [amplitude, center_x, width_x, center_y, width_y]

  * Sine X Times Tangent Y [radians] With Offset

    :math:`z = amplitude * sin{(pi * {(x - center\_x)} / width\_x)} * tan{(pi * {(y -center\_y)} / width\_y)} + \text{Offset}`

    [amplitude, center_x, width_x, center_y, width_y, Offset]

* Tangent XY [radians] (``TangentXY``)

  * Tangent XY [radians]

    :math:`z = amplitude * tan{(pi * {(xy - center)} / width)}`

    [amplitude, center, width]

  * Tangent XY [radians] With Offset

    :math:`z = amplitude * tan{(pi * {(xy - center)} / width)} + \text{Offset}`

    [amplitude, center, width, Offset]

* Tangent X Plus Cosh Y [radians] (``TangentX_Plus_CoshY``)

  * Tangent X Plus Cosh Y [radians]

    :math:`z = amplitude\_x * tan{(pi * {(x - center\_x)} / width\_x)} + amplitude\_y *cosh{(pi * {(y - center\_y)} / width\_y)}`

    [amplitude_x, center_x, width_x, amplitude_y, center_y, width_y]

  * Tangent X Plus Cosh Y [radians] With Offset

    :math:`z = amplitude\_x * tan{(pi * {(x - center\_x)} / width\_x)} + amplitude\_y *cosh{(pi * {(y - center\_y)} / width\_y)} + \text{Offset}`

    [amplitude_x, center_x, width_x, amplitude_y, center_y, width_y, Offset]

* Tangent X Plus Sine Y [radians] (``TangentX_Plus_SineY``)

  * Tangent X Plus Sine Y [radians]

    :math:`z = amplitude\_x * tan{(pi * {(x - center\_x)} / width\_x)} + amplitude\_y *sin{(pi * {(y - center\_y)} / width\_y)}`

    [amplitude_x, center_x, width_x, amplitude_y, center_y, width_y]

  * Tangent X Plus Sine Y [radians] With Offset

    :math:`z = amplitude\_x * tan{(pi * {(x - center\_x)} / width\_x)} + amplitude\_y *sin{(pi * {(y - center\_y)} / width\_y)} + \text{Offset}`

    [amplitude_x, center_x, width_x, amplitude_y, center_y, width_y, Offset]

* Tangent X Plus Tangent Y [radians] (``TangentX_Plus_TangentY``)

  * Tangent X Plus Tangent Y [radians]

    :math:`z = amplitude\_x * tan{(pi * {(x - center\_x)} / width\_x)} + amplitude\_y *tan{(pi * {(y - center\_y)} / width\_y)}`

    [amplitude_x, center_x, width_x, amplitude_y, center_y, width_y]

  * Tangent X Plus Tangent Y [radians] With Offset

    :math:`z = amplitude\_x * tan{(pi * {(x - center\_x)} / width\_x)} + amplitude\_y *tan{(pi * {(y - center\_y)} / width\_y)} + \text{Offset}`

    [amplitude_x, center_x, width_x, amplitude_y, center_y, width_y, Offset]

* Tangent X Times Cosh Y [radians] (``TangentX_Times_CoshY``)

  * Tangent X Times Cosh Y [radians]

    :math:`z = amplitude * tan{(pi * {(x - center\_x)} / width\_x)} * cosh{(pi * {(y -center\_y)} / width\_y)}`

    [amplitude, center_x, width_x, center_y, width_y]

  * Tangent X Times Cosh Y [radians] With Offset

    :math:`z = amplitude * tan{(pi * {(x - center\_x)} / width\_x)} * cosh{(pi * {(y -center\_y)} / width\_y)} + \text{Offset}`

    [amplitude, center_x, width_x, center_y, width_y, Offset]

* Tangent X Times Sine Y [radians] (``TangentX_Times_SineY``)

  * Tangent X Times Sine Y [radians]

    :math:`z = amplitude * tan{(pi * {(x - center\_x)} / width\_x)} * sin{(pi * {(y -center\_y)} / width\_y)}`

    [amplitude, center_x, width_x, center_y, width_y]

  * Tangent X Times Sine Y [radians] With Offset

    :math:`z = amplitude * tan{(pi * {(x - center\_x)} / width\_x)} * sin{(pi * {(y -center\_y)} / width\_y)} + \text{Offset}`

    [amplitude, center_x, width_x, center_y, width_y, Offset]

* Tangent X Times Tangent Y [radians] (``TangentX_Times_TangentY``)

  * Tangent X Times Tangent Y [radians]

    :math:`z = amplitude * tan{(pi * {(x - center\_x)} / width\_x)} * tan{(pi * {(y -center\_y)} / width\_y)}`

    [amplitude, center_x, width_x, center_y, width_y]

  * Tangent X Times Tangent Y [radians] With Offset

    :math:`z = amplitude * tan{(pi * {(x - center\_x)} / width\_x)} * tan{(pi * {(y -center\_y)} / width\_y)} + \text{Offset}`

    [amplitude, center_x, width_x, center_y, width_y, Offset]


UserDefinedFunction
^^^^^^^^^^^^^^^^^^^

* User Defined Function (``UserDefinedFunction``)

  * User Defined Function

    :math:`z = User Defined Function`


