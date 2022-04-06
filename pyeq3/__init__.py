#    pyeq3 is a collection of equations expressed as Python classes
#
#    Copyright (C) 2013 James R. Phillips
#    2548 Vera Cruz Drive
#    Birmingham, AL 35235 USA
#
#    email: zunzun@zunzun.com
#
#    License: BSD-style (see LICENSE.txt in main source directory)
"""
Introducing pyeq3 |version|
===========================

Overview
--------

pyeq3 is a large collection of python3 equations that perform curve fitting on 2D and 3D data,
output source code in several computing languages, and run a genetic algorithm for initial parameter estimation.
The module comes with cluster, parallel, IPython, GUI, NodeJS, and web-based graphical examples.
It includes orthogonal distance and relative error regressions.

pyeq3 is released under a permissive license. It relies on numpy, scipy, and matplotlib.

 - Homepage: https://github.com/bobmyhill/pyeq3
 - Discussion group: https://groups.google.com/g/findcurves
 - Documentation: http://pyeq3.readthedocs.io
 - Source code with examples: https://github.com/bobmyhill/pyeq3

If you haven't yet installed pyeq3, you can go straight to :ref:`ref-installation` for detailed
instructions. After that, you might want to try out some :ref:`ref-examples`.


Citing pyeq3
------------

If you use pyeq3 in your work, we ask that you cite the following publications:

 - Phillips, J. and Myhill, R. (2022):
   pyeq3 (version |version|) [Software]. Zenodo.
   `(https://doi.org/10.5281/zenodo.5552756) <https://doi.org/10.5281/zenodo.5552756>`_


Contributing to pyeq3
---------------------

If you would like to contribute bug fixes, new functions or new modules
to the existing codebase, please make a
pull request at `https://github.com/bobmyhill/pyeq3/pulls <https://github.com/bobmyhill/pyeq3/pulls>`_.


.. _ref-installation:


Requirements
------------

  - Python 3.7+
  - Python modules: NumPy, SciPy, Matplotlib

Installation
------------

Installation of pyeq3 is mostly platform independent.
As long as you know how to use a terminal, the process should be straightforward.
The following instructions should help, but let us know if you have any problems.

Dependencies
^^^^^^^^^^^^
First, make sure you have a sufficiently recent version of python installed
on your machine (see above for the latest requirements).
To check your version of python, type the following in a terminal:
    python --version
If your version is not recent enough, visit https://www.python.org/ to
find out how to install a newer version.

Once you have checked your version of python, you should make sure you have
installed the python module pip. We will use this module to install BurnMan.
If you don't have it already, you can install it by opening a
terminal window and typing:

    python -m ensurepip --upgrade

Mac users will also need to install Xcode, which can be found in the MacStore.

Stable version
^^^^^^^^^^^^^^

If you are only interested in using pyeq3
(rather than developing the software), and you aren't interested in any of the
latest changes, you can install the stable version by typing
the following into a terminal window:

    python -m pip install pyeq3

This method of installation does not give you easy access to all the examples,
or the test suite. These can be found in the latest release package which can
be downloaded from https://github.com/bobmyhill/pyeq3/releases.

Development version
^^^^^^^^^^^^^^^^^^^
If you want to install the development version of pyeq3
(with all the latest features), you will first need to download the source code.
The best way to do this is by using git (a version control system).
To install git, follow the instructions at https://git-scm.com/downloads.

Then, using a terminal, navigate to the directory into which you want to
clone the BurnMan repository, and type

    git clone https://github.com/bobmyhill/pyeq3.git

(If you don't want to use git, you can download the current main branch
from https://github.com/bobmyhill/pyeq3/archive/main.zip.)

Once the repository is cloned, navigate to the top-level directory by typing
`cd pyeq3` in the terminal, and then install pyeq3, either in static mode:
`python -m pip install .` or in development mode
(if you want to develop or modify the code): `python -m pip install -e .`.

Checking that the installation worked
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
To check that the installation has worked, navigate to the
examples directory and try running the examples:

    python <example-name>.py


Acknowledgement and Support
---------------------------

  - This project was initiated by James Phillips, and we are incredibly grateful
    for his time and efforts.

  - We are also grateful to Ross Moffett, webmaster at http://www.findcurves.com.

"""

import sys
python_version = sys.version_info[0]
if python_version < 3:
    raise Exception('Python 3 is required to use pyeq3')

from .version import version as __version__
from . import DataCache
from . import Services
from . import Utilities
from . import ExtendedVersionHandlers
from . import IModel
from . import Models_2D
from . import Models_3D
from . import Graphics

dataConvertorService = Services.DataConverterService.DataConverterService
solverService = Services.SolverService.SolverService
outputSourceCodeService = Services.OutputSourceCodeService.OutputSourceCodeService
dataCache = DataCache.DataCache.DataCache