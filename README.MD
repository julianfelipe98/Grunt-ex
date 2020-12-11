# Grunt JS example

## About 
Grunt is a JS task runner,
this is a Grunt example 
implementing uglify and concat ,
more about Grunt: https://gruntjs.com/
## Uglify
Grunt plugin for minyfy js files ,
more about uglify: https://www.npmjs.com/package/grunt-contrib-uglify
## Concat
Grunt plugin for concating files ,
more about concat: https://www.npmjs.com/package/grunt-contrib-concat
## Getting started step by step

* Clone the repo https://github.com/julianfelipe98/Grunt-example
* If you do not have installed Grunt CLI , install it with:

  `npm install -g grunt-cli`
* In the proyect directory install the dependences as dev dependences:


`npm install grunt --save-dev`

`npm install grunt-contrib-uglify --save-dev`


`npm install grunt-contrib-concat --save-dev`

* In the proyect directory : `grunt conocat-js` for concat all .js on js folder , this will create a file called scripts.js on build folder, there ,there you will find the .js files concated.

* In the proyect directory : `grunt uglify` for minify the scripts.js created prior, this file will be in the build folder too

* In the proyect directory : `grunt conocat-css` for concat all .css on css folder , this will create a file called styles.css on build folder, there , you will find the .css files concated

## Getting started auto

* Clone the repo https://github.com/julianfelipe98/Grunt-example

* If you do not have installed Grunt CLI , install it with:

  `npm install -g grunt-cli`
* In the proyect directory install the dependences as dev dependences:


`npm install grunt --save-dev`

`npm install grunt-contrib-uglify --save-dev`


`npm install grunt-contrib-concat --save-dev`


* In the proyect directory : 

`grunt`

for concat all .css and .js on css and js folders, this will create two files called styles.css and scripts.js on build folder, there , you will find the .css files concated (styles.css) and .js concated(scripts.js) 
