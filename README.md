# hw-05
hw-05 - Brushing and Linking 

Link to GitHub Pages: `[insert your clickable hyperlink here]`

## Purpose

The purpose of this assignment is practice event handling with JavaScript.  

## Instructions

1. Background material to support this assignment is provided below in the Resources section.  

1. You can find a reference for what your final webpage should look like and how it should behanve in the "reference" folder. 

1. Create a GitHub Page for your repo and add the link to your GitHub Page above where you see `[insert your clickable hyperlink here]`. 

1. Clone this repo and work locally. Be sure to push the final version of your code (and any significant updates along the way) before submitting. 

1. A .css file (style.css) was included in your repo. Add this file to your index.html file as an an **external** stylesheet. All styling for your webpage should be achieved using this external stylesheet.  

1. One JavaScript file (js/brushinglinking.js) was included in your repo. Add this files to your index.html file as an **external** script. All JavaScript code you write should be in this file or another .js file you create. 

1. The d3.v6 library (js/d3.v6.1.1/d3.min.js) was included in your repo. Add this file to your index.html file as an **external** script. You will not edit the file, but you need to include it to have access to D3 functions.     

1. You will be plotting the data included in the data folder (iris.csv). In order to plot this data you will need to start a python simple server from the directory in which your code is stored. Instructions for the simple server are provided in the section below.         

1. Your main task for this assignment is to create a coordinated visualization consisting of two scatter plots and one bar chart. These three charts will be coordinated via brushing and linking. If you open brushinglinking.js, you will see one of the three charts is implemented for you (Scatterplot1: Petal Length vs. Sepal Length), and that "TODO" comments walk you through remaining steps. Please be sure to read through all of the brushinglinking.js starter code before begining your work. There are several function skeletons you will ultimates need to fill in. Please see the Brushing with D3 resource below to help with this assignment.  

1. After reading all of the above instructions, plese complete the following:
    - Add another scatterplot (Scatterplot2) that shows Petal Width vs. Sepal Width.  
    - Add a barchart that shows counts of each Iris species in the iris.csv dataset. **You may hardcode the data for this plot, you do not need to dynamically calculate counts.** 
    - Implement brushing and linking such that when a user brushes points in Scatterplot1 corresponding points in Scatterplot2 are highlighted by bold borders.
    - Implement brushing and linking such that when a user brushes points in Scatterplot2 corresponding points in Scatterplot1 are highlighted by bold borders and species included in the brush are highlighted by bold borders in the bar chart.      

## Python Simple Server

- In order to read data from csv files, you will need to use a python simple server. To do that follow these steps:
  - `CD` or open a terminal / command prompt window in the same folder that holds your website code.
  - Start a python simple server with one of these commands (depending on how you set python up on your machine): `python -m http.server`, `python3 -m http.server`, or `py -m http.server`. 
  - After running the command, wait for the output: `Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/)`.
  - Open your web browser (Firefox or Chrome) and navigate to the URL: http://localhost:8000. This is where you will see your code rendered. 

## Resources 

**Note that there are different versions of D3 (we are using version 6), so make sure the tutorials you use are up-to-date (or you at least understand what is different about v6 versus older versions).**

* [Intro to D3 - Creative Coding for the Web](https://www.fluidencodings.com/teaching-materials/cc-for-the-web/v1/page.php?pid=svg)

* [D3 Data Joins - Creative Coding for the Web](https://www.fluidencodings.com/teaching-materials/cc-for-the-web/v1/page.php?pid=data-joins) 

* Brushing with D3: [https://www.d3-graph-gallery.com/graph/interactivity_brush.html](https://www.d3-graph-gallery.com/graph/interactivity_brush.html)

* Intro to D3 in 10 basic examples: https://www.d3-graph-gallery.com/intro_d3js.html (highly recommend this resource)

* D3 Coursera by Enrico Bertini: https://www.coursera.org/learn/information-visualization-programming-d3js

* What is D3? https://d3js.org/

* Example D3 Charts: https://observablehq.com/@d3/gallery

* Interactive Data Visualization for the Web by Scott Murray: Available through Northeastern Library

* Tips and Tricks: https://leanpub.com/D3-Tips-and-Tricks/read (written for v3 but well written)

## Submission

* Be sure to push all changes to your repo and follow all instructions above. 
* For this portion of your assignment **submit a clickable URL to your GitHub repository** (not your GitHub Page).