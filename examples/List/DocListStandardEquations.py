import inspect

import pyeq3
import pypandoc

with open('model_list.rst', 'w') as outfile:

    outfile.write('..\n  This file has been created using '
                  'examples/List/DocListStandardEquations.py.\n'
                  '  Rerun that example and replace this file '
                  'created by that script.\n\n')

    for (dim, models) in [(2, pyeq3.Models_2D),
                          (3, pyeq3.Models_3D)]:
        outfile.write(f'{dim}D Models\n')
        outfile.write('---------\n')

        for submodule in inspect.getmembers(models):
            if inspect.ismodule(submodule[1]):
                outfile.write(f'\n{submodule[0]}\n')
                outfile.write(f'{"^"*len(submodule[0])}\n\n')
                for equationClass in inspect.getmembers(submodule[1]):
                    if inspect.isclass(equationClass[1]):
                        equation = equationClass[1]('SSQABS', 'Default')
                        outfile.write(
                            f'* {equation.GetDisplayName()} (``{equation.__class__.__name__}``)\n\n')

                        for extendedVersionName in ['Default', 'Offset']:

                            if (-1 != extendedVersionName.find('Offset')) and (equationClass[1].autoGenerateOffsetForm is False):
                                continue

                            equation = equationClass[1]('SSQABS',
                                                        extendedVersionName)

                            outfile.write(
                                f'  * {equation.GetDisplayName()}\n\n')

                            text = f"{pypandoc.convert_text(equation.GetDisplayHTML(), 'tex', format='html')}"
                            text = text.replace('\n', '').replace(
                                '**', '^').replace('^ ', '^').replace('sqrt', '\\sqrt').replace('exp', '\\exp').replace('(', '{(').replace(')', ')}').replace('{}', '').replace('\\^', '^')
                            text = text.replace('Offset', '\\text{Offset}')
                            text = text.replace('\\textsubscript', '_')
                            text = text.replace('\\textsuperscript', '^')

                            if text.count('{') != text.count('}'):
                                print('The html string of the following model '
                                      'has different numbers of opening and '
                                      'closing parentheses:')
                                print(submodule)
                                print(equation.GetDisplayHTML())
                                print(text)
                            else:
                                outfile.write(f'    :math:`{text}`\n\n')

                            try:
                                coeffs = str(
                                    equation.GetCoefficientDesignators()).replace("\'", "")
                                outfile.write(f'    {coeffs}\n')
                            except (TypeError, AttributeError,
                                    NotImplementedError):
                                pass
                            outfile.write('\n')
