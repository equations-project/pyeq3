from setuptools import setup, find_packages  # Always prefer setuptools over distutils
from codecs import open  # To use a consistent encoding
from os import path

here = path.abspath(path.dirname(__file__))

long_description = '''A large collection of Python3 equations that perform curve fitting on 2D and 3D data, output source code in several computing languages, and run a genetic algorithm for initial parameter estimation. Comes with cluster, parallel, IPython, GUI, NodeJS, and web-based graphical examples. Includes orthogonal distance and relative error regressions.

Discussion group is at https://groups.google.com/forum/#!forum/zunzun_dot_com

Full source code with examples: https://bitbucket.org/zunzuncode/pyeq3
'''

setup(
    name='pyeq3',

    # Versions should comply with PEP440.  For a discussion on single-sourcing
    # the version across setup.py and the project code, see
    # https://packaging.python.org/en/latest/development.html#single-sourcing-the-version
    version='12.5.1',

    description='Large curve fitting and surface fitting library with hundreds of named equations',
    long_description=long_description,

    # The project's main homepage.
    url='https://bitbucket.org/zunzuncode/pyeq3',

   # Author details
    author='James Phillips',
    author_email='zunzun@zunzun.com',

    # Choose your license
    license='BSD',

    # See https://pypi.python.org/pypi?%3Aaction=list_classifiers
    classifiers=[
        # How mature is this project? Common values are
        #   3 - Alpha
        #   4 - Beta
        #   5 - Production/Stable
        'Development Status :: 6 - Mature',

        # Indicate who your project is intended for
        'Intended Audience :: Developers',
        'Topic :: Scientific/Engineering :: Mathematics',

        # Pick your license as you wish (should match "license" above)
        'License :: OSI Approved :: BSD License',

        # Specify the Python versions you support here. In particular, ensure
        # that you indicate whether you support Python 2, Python 3 or both.
        'Programming Language :: Python :: 3',
    ],

    # What does your project relate to?
    keywords='curve fitting and surface fitting',

    # You can just specify the packages manually here if your project is
    # simple. Or you can use find_packages().
    packages=find_packages(exclude=[]),

    # List run-time dependencies here.  These will be installed by pip when your
    # project is installed. For an analysis of "install_requires" vs pip's
    # requirements files see:
    # https://packaging.python.org/en/latest/technical.html#install-requires-vs-requirements-files
    install_requires=[],

    # List additional groups of dependencies here (e.g. development dependencies).
    # You can install these using the following syntax, for example:
    # $ pip install -e .[dev,test]
    extras_require = {
    },

    # If there are data files included in your packages that need to be
    # installed, specify them here.  If using Python 2.6 or less, then these
    # have to be included in MANIFEST.in as well.
    package_data={},

    # Although 'package_data' is the preferred approach, in some case you may
    # need to place data files outside of your packages.
    # see http://docs.python.org/3.4/distutils/setupscript.html#installing-additional-files
    # In this case, 'data_file' will be installed into '<sys.prefix>/my_data'
    data_files=[],

    # To provide executable scripts, use entry points in preference to the
    # "scripts" keyword. Entry points provide cross-platform support and allow
    # pip to create the appropriate form of executable for the target platform.
    entry_points={},
)
