# Small Project Srarter-Kit

This is small strater kit that I use to jumpstart any projects. It's a structure I use with Gulp to minify, concatenate and build project files. The Gulpfile included is a watered down version but it's really meant as a start point.

Gulp will watch all project files, concatenate and minify them on file edit and save while refreshing all connected device browsers.

Any issues hit me up on [Twitter](https://twitter.com/esksidedesign)

#### GETTING STARTED

1. Install [Node.js](https://nodejs.org/) and [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md). 
2. Duplicate and rename the starter kit folder to suit your project name and move that to your desired location.
3. From Terminal cd into starter kit directory - example (`cd Documents/sites/your_project`)
4. Type `sudo npm install` into the terminal (enter your computer password when promted)

All node modules required for gulp to do it's magic will be installed into the `node_modules/` folder which will be created after you run `npm install`. Once complete enter `gulp serve` into the Terminal and your browser should start up and display the basic project index.html page. Now start editing the files and gulp will update and build all the relevant files and refresh the browser for you. 

Run `gulp` in terminal to build project ready for deployment.

Terminal will also show you the local and external IP. Any devices connected to your network will be able to access the project. Browser sync will refresh all the browsers on all the connected devices at the same time whenever you edit and save files. It's awesome!

Each folder within the project has its own `README.md` file to explain it's purpose and add extra information.

