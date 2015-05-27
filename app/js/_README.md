# Javascript

The `js/` folder contains our javascript files. jQuery-1.11.3 is the current version at time of build. I include Modernizr as it allows us to provide fallbacks for when javascript fails or is disabled, or for SVG, Flexbox etc. Picturefill is used as a pollyfill for `srcset` and `sizes` as a responsive image solution as browser support still sucks. Finally we have Fontface Observer to provide a better solution for delivering web fonts.

### Vendors
+ [jQuery 1.11.3](https://jquery.com/download/)
+ [Modernizr 2.8.3](http://modernizr.com/download/)
+ [Picturefill 2.3.1](http://www.filamentgroup.com/code/)
+ [Fontface Observer](https://github.com/bramstein/fontfaceobserver)

It's worth checking to see if updated versions of the javascript files are available from their respected developers. 

** Fontface observer is included directly within a `script` tag in the HTML along with Google Analytics.**

### Other JS Files
+ `custom.js`

The `custom.js` file contains the navigation toggle and is where you should put any plugin triggers that you need.

When you edit any files they will be processed through gulp, concatenated, minified and renamed to `script-01.min.js`. This is the file that's included in our pages.

You can add any JS files you like as you build your project. Any JS files that you add to the project have to be added to the gulpfile too. Open `gulpfile.js` and scroll down to the JS task. You will see a list of the included JS files. Add your new files to the list and gulp will automagically add them to `script-01.min.js`.

### Notes

Don't edit the script-01.min.js file as this is created whenever you edit individual the javascript files. Any edits to that file will be wiped. You can rename the location and name of this file via the gulpfile.js in the root folder.