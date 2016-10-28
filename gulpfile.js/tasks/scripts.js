var gulp = require('gulp');
var config = require('../config').scripts;
var minify = require('gulp-minify');
var rollup = require('rollup-stream');
var source = require('vinyl-source-stream');

gulp.task('scripts', function () {
  return rollup({
      entry: config.source
    })
  .pipe(source('app.js'))

  .pipe( gulp.dest( config.dest ) );
});
