from matplotlib import cm  # to colormap the surface plot from blue to red
from mpl_toolkits.mplot3d import Axes3D  # 3D apecific
import matplotlib.pyplot as plt
import os
import sys
import numpy

import pyeq3


import matplotlib

# immediately preceding the "import matplotlib.pyplot" statement
matplotlib.use("Agg")


# animation frame size
graphWidth = 640
graphHeight = 480


# model some data
print("Modeling data")
equation = pyeq3.Models_3D.Polynomial.FullCubic()
pyeq3.dataConvertorService().ConvertAndSortColumnarASCII(
    equation.exampleData, equation, False
)
equation.Solve()


# raw data for scatterplot
x_data = equation.dataCache.allDataCacheDictionary["IndependentData"][0]
y_data = equation.dataCache.allDataCacheDictionary["IndependentData"][1]
z_data = equation.dataCache.allDataCacheDictionary["DependentData"]


# create X, Y, Z mesh grid for surface plot
print("Creating mesh grid data")
xModel = numpy.linspace(min(x_data), max(x_data), 20)
yModel = numpy.linspace(min(y_data), max(y_data), 20)
X, Y = numpy.meshgrid(xModel, yModel)
tempcache = equation.dataCache
equation.dataCache = pyeq3.dataCache()
equation.dataCache.allDataCacheDictionary["IndependentData"] = numpy.array([X, Y])
equation.dataCache.FindOrCreateAllDataCache(equation)
Z = equation.CalculateModelPredictions(
    equation.solvedCoefficients, equation.dataCache.allDataCacheDictionary
)
equation.dataCache = tempcache


# matplotlib specific code for the plots
fig = plt.figure(
    figsize=(float(graphWidth) / 100.0, float(graphHeight) / 100.0), dpi=100
)
ax = fig.gca(projection="3d")


print("Creating matplotlib graph objects")
# create a surface plot using the X, Y, Z mesh data created above
ax.plot_surface(
    X, Y, Z, rstride=1, cstride=1, cmap=cm.coolwarm, linewidth=1, antialiased=True
)
# create a scatter plot of the raw data
ax.scatter(x_data, y_data, z_data)


ax.set_title("Surface Rotation")  # add a title for surface plot
ax.set_xlabel("X Data")  # X axis data label
ax.set_ylabel("Y Data")  # Y axis data label
ax.set_zlabel("Z Data")  # Z axis data label


plt.tight_layout()  # prevents cropping axis labels


print("Creating animation frames", end=" ")
# create individual frames for the animation
for ii in range(0, 360, 2):  # create frame every two degrees
    print(ii, end=" ")
    sys.stdout.flush()

    ax.view_init(elev=10.0, azim=ii)

    # use leading zeros in file names for sorting by name
    numstr = str(ii)
    if ii < 100:
        numstr = "0" + str(ii)
        if ii < 10:
            numstr = "00" + str(ii)

    fig.savefig("anim_" + numstr + ".png")  # GIF format not available

plt.close("all")  # done with matplotlib at this point

print()

# matplotlib does not save to GIF format, so convert format here
commandString = "mogrify -format gif anim_*png"
print("Calling " + commandString)
p = os.popen(commandString)
p.close()

# now convert the individual frames into animation
commandString = "gifsicle --loop --colors 256 --delay 10 anim_*.gif > rotation.gif"
print("Calling " + commandString)
p = os.popen(commandString)
p.close()


# delete now-unused files
print("Deleting unused files")
currentDir = os.listdir(".")
for filename in currentDir:
    if filename.startswith("anim_"):
        os.remove(filename)


print("Done!  Created animated GIF file named rotation.gif")
