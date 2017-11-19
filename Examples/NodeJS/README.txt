
using the NodeJS package python-shell, NodeJS can
make python calls into pyeq3 for curve fitting and
surface fitting.  I installed python-shell using npm.
see http://commonproblems.readthedocs.io/en/latest/

First, install pyeq3 with the command

sudo pip install pyeq3

and then run the nodejs-to-pyeq3 interface generator with

python3 generator.py

and now run the NodeJS example files:

LinearPolynomial_2D.js
ExponentialWithOffset_2D.js

LinearPolynomial_3D.js
