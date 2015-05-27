/**
 *
 *  Eskside Design Small Project Starter-Kit Gulpfile
 *
 *	Watch, update, minify and concatenate HTML, CSS, and JS.
 *	Autoprefix CSS 
 *	Refresh all connected browsers on file save with Browsersync
 *	Optimise Images
 *	Copy and push all required project files to 'dist' folder on build
 *
 */

'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var pagespeed = require('psi');
var uglify = require('gulp-uglify');
//var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var reload = browserSync.reload;

// Set our autoprefix options
var AUTOPREFIXER_BROWSERS = [
  'ie >= 9',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 6',
  'android >= 2.3',
  'bb >= 10'
];





/**
 *
 * Concatenate and minify main js file
 * Add any additional js files to this list
 *
 */

gulp.task('js', function() {
	return gulp.src([
		'app/js/vendors/modernizr.js',
		'app/js/vendors/jquery-1.11.3.js',
		'app/js/vendors/picturefill.js',
		'app/js/vendors/custom.js'
	])
	.pipe(uglify())
  .pipe(concat("script-01.min.js"))
	.pipe(gulp.dest('app/js'))
	.pipe(gulp.dest('dist/js'))
	.pipe(reload({stream: true, once: true}))
	.pipe($.size({title: 'js'}));
});





/**
 *
 * CSS STRUCTURE 
 *
 * Add any new css files to this list. The cascade matters. 
 * We could just watch and build all files in css folder but we have more control
 * on the cascade this way by placing the css files in the required order. Kinda similar 
 * to what sass would do with @imports. I tend not to use sass on small projects, 
 * hence this build kit.
 *
 */

gulp.task('main-css', function() {
  return gulp.src([  
		'app/css/vendors/normalize.css', 
		'app/css/base/base.css',
		'app/css/base/fonts.css',
		'app/css/base/typography.css',
		'app/css/base/svg.css', 
		'app/css/structure/header.css', 
		'app/css/structure/nav.css',   
		'app/css/structure/hero.css',  
		'app/css/structure/frame.css', 
		'app/css/structure/footer.css', 
		'app/css/components/lists.css', 
		'app/css/components/social.css', 
		'app/css/components/buttons.css',
		'app/css/components/form.css'
	])
		.pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
    //.pipe(minifyCSS({keepBreaks:false}))
		.pipe(concat("style-01.min.css"))
		.pipe($.if('*.css', $.csso()))
    .pipe(gulp.dest('app/css'))
		.pipe(gulp.dest('dist/css'))
		.pipe($.size({title: 'main-css'}));
});


// Minify CSS from the Pages Folder
gulp.task('pages-css', function() {
  return gulp.src('app/css/pages/*.css')
		.pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
    //.pipe(minifyCSS({keepBreaks:false}))
		.pipe($.if('*.css', $.csso()))
    .pipe(gulp.dest('app/css/pages'))
		.pipe(gulp.dest('dist/css/pages'))
		.pipe($.size({title: 'pages-css'}));
});


gulp.task('styles', ['main-css', 'pages-css']);





/**
 *
 * Optimise Images and copy to dist folder
 *
 */

gulp.task('images', function () {
  return gulp.src('app/images/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist/images'))
    .pipe($.size({title: 'images'}));
});





/**
 *
 * Copy web fonts to dist folder
 *
 */

gulp.task('fonts', function () {
  return gulp.src(['app/fonts/**'])
		.pipe(gulp.dest('dist/fonts'))
    .pipe($.size({title: 'fonts'}));
});





/**
 *
 * Copy PHP files to dist folder
 *
 */

gulp.task('php', function() {			
	return gulp.src('app/*.php')
	.pipe($.if('*.php', $.minifyHtml()))
  .pipe(gulp.dest('dist/'))
	.pipe(reload({stream: true}))
	.pipe($.size({title: 'php'}));
});





/**
 *
 * Copy ALL other files to dist folder
 * 
 * Favicon
 * xml sitemap
 * htaccess
 * iOS, Android Icons
 * Robots text etc
 *
 */

gulp.task('extras', function() {			
	return gulp.src([
		'app/*.ico', 
		'app/*.xml', 
		'app/.htaccess', 
		'app/*.png', 
		'app/*.txt'
	])
	.pipe(gulp.dest('dist/'))
	.pipe(reload({stream: true}))
	.pipe($.size({title: 'extras'}));
});





/**
 *
 * Minify HTML
 *
 */

gulp.task('html', function () {
	var opts = {comments:false,spare:true};
  return gulp.src('app/**/*.html')
    .pipe($.if('*.html', $.minifyHtml(opts)))
    .pipe(gulp.dest('dist'))
    .pipe($.size({title: 'html'}));
});





/**
 *
 * Clean output directory
 *
 */

gulp.task('clean', del.bind(null, ['.tmp', 'dist']));





/**
 *
 * Watch Files For Changes & Reload
 *
 */

gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: ['app/', '.tmp']
    },
    notify: false
  });
  gulp.watch(['app/**/*.html'], reload);
	gulp.watch(['app/**/*.php'], reload);
  gulp.watch(['app/css/**/*.css'], ['styles', reload]);
  gulp.watch(['app/js/**/*.js'], ['js', reload]);
  gulp.watch(['app/images/**/*'], ['images', reload]);
});





/**
 *
 * Build Production Files, the Default Task
 *
 */

gulp.task('default', ['clean'], function (cb) {
  runSequence('styles', ['js', 'fonts', 'html', 'images', 'php', 'extras'], cb);
});
