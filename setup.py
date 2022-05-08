from setuptools import find_packages
from codecs import open  # To use a consistent encoding
from os import path
import re

versionstuff = dict(re.findall("(.+) = '(.+)'",
                               open('pyeq3/version.py').read()))

here = path.abspath(path.dirname(__file__))

long_description = ("A large collection of Python3 equations that "
                    "perform curve fitting on 2D and 3D data, "
                    "output source code in several computing "
                    "languages, and run a genetic algorithm "
                    "for initial parameter estimation. Comes with "
                    "cluster, parallel, IPython, GUI, NodeJS, and "
                    "web-based graphical examples. "
                    "Includes orthogonal distance and "
                    "relative error regressions.\n\n"
                    "Discussion group: https://groups.google.com/g/findcurves\n"
                    "Full source code with examples: https://github.com/bobmyhill/pyeq3.")

metadata = dict(name='pyeq3',
                version=versionstuff['version'],
                description='An equation, curve and surface fitting library',
                url='https://github.com/bobmyhill/pyeq3',
                author='James Phillips, Robert Myhill',
                author_email='bob.myhill@bristol.ac.uk',
                license='BSD',
                long_description_content_type="text/x-rst",
                long_description=long_description,
                packages=find_packages(exclude=[]),
                package_data={'burnman': ['data/input_*/*']},
                classifiers=['License :: OSI Approved :: BSD License',
                             'Development Status :: 6 - Mature',
                             'Intended Audience :: Developers',
                             'Topic :: Scientific/Engineering :: Mathematics',
                             'Programming Language :: Python :: 3.7',
                             'Programming Language :: Python :: 3.8',
                             'Programming Language :: Python :: 3.9',
                             'Programming Language :: Python :: 3.10'],
                keywords='curve, surface, fitting'
                )

# Try to use setuptools in order to check dependencies.
# if the system does not have setuptools, fall back on
# distutils.
try:
    from setuptools import setup
    metadata['install_requires'] = ['numpy', 'matplotlib', 'scipy']
except ImportError:
    from distutils.core import setup

setup(**metadata)
