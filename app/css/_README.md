# CSS

The CSS files are divided into multiple folders. Each folder contains as many files as you like. It's actuually better to have everything broken down into modules. This makes editing files a lot easier. Rather than hunting through a stylesheet containing thousands of lines of code, we break everything down into smaller modules.

Gulp watches your CSS files for edits then minifys and concatenates all the files into...

`style-01.min.css` 

**This file should not be edited directly. It's compiled by editing the individual CSS files**

You can add any CSS files you like as you build components. Any CSS files that you add to the project have to be added to the gulpfile too. Open `gulpfile.js` and scroll down to the CSS task. You will see a list of the included CSS files. Add your new files to the list.

** Remember the cascade matters**. This is CSS so the order of your files is important. 