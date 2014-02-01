Angularjs-Flask
===============

This is basically a simple step by step tutorial of angularjs. This repo contains small examples that I worked out towards learning angularjs. I use Flask as the server side framework using python. 

How to read this tutorial
-------------------------

This tutorial is split into small simple examples. Every example has a simple objective, and I take a minimal approach rather than a best practices approach. Each example will add one concept on angularjs. This is not so much of a flask tutorial. We will use very minimal flask and instead focus on angularjs instead.

Example 1 : First Angularjs App
-------------------------------

This app shows the basic wiring that goes behind an angularjs based webpage. The file structure is as follows:
* `webapp.py` : This is the main python file that serves the web app
* `templates/index.html` : This is the html webpage that the webapp.py serves
* `static/*` : This has all the static resources such as javascript, css, and static html files.

In the basic example, the `index.html` file has `<html ng-app>` to denote that this is angularjs web app. Then there is a lot of boiler plate code that is standard part of [bootstrap](http://getbootstrap.com "BootStrap").
