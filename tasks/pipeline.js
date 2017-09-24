/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your views and static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files, and ! in front of an expression to ignore files.)
 *
 * For more information see:
 *   https://github.com/balderdashy/sails-docs/blob/master/anatomy/myApp/tasks/pipeline.js.md
 */

/* CSS files to inject in order */
var cssFilesToInject = [
  'styles/**/*.css'
];

/* Client-side javascript files to inject in order */
var jsFilesToInject = [

  /* Load sails.io before everything else */
  'js/dependencies/sails.io.js',

  /* Dependencies like jQuery, or Angular are brought in here */
  'js/dependencies/**/*.js',

  /* All of the rest of your client-side js files */
  'js/**/*.js'
];

/* Client-side HTML templates are injected using the sources below
 The ordering of these templates shouldn't matter. */
var templateFilesToInject = [
  'templates/**/*.html'
];

/* Default path for public folder (see documentation for more information) */
var tmpPath = 'public/';

/* Prefix relative paths to source files so they point to the proper locations
(i.e. where the other Grunt tasks spit them out, or in some cases, where
 they reside in the first place) */
module.exports.cssFilesToInject = cssFilesToInject.map(function(cssPath) {
  /* If we're ignoring the file, make sure the ! is at the beginning of the path */
  if (cssPath[0] === '!') {
    return require('path').join('!public/', cssPath.substr(1));
  }
  return require('path').join('public/', cssPath);
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(jsPath) {
  /* If we're ignoring the file, make sure the ! is at the beginning of the path */
  if (jsPath[0] === '!') {
    return require('path').join('!public/', jsPath.substr(1));
  }
  return require('path').join('public/', jsPath);
});
module.exports.templateFilesToInject = templateFilesToInject.map(function(tplPath) {
  /* If we're ignoring the file, make sure the ! is at the beginning of the path */
  if (tplPath[0] === '!') {
    return require('path').join('!assets/', tplPath.substr(1));
  }
  return require('path').join('assets/',tplPath);
});


