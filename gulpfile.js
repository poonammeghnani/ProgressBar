var
  // modules
  gulp = require('gulp'),

  // development mode?
  devBuild = (process.env.NODE_ENV !== 'production'),

  // folders
  folder = {
    src: 'src/',
    build: 'build/'
  }
;

var jsFiles = 'src/js/*.js',  
jsDest = 'build/js';

var minify = require('gulp-minify');

gulp.task('compress', function() {
  gulp.src(jsFiles)
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'-min.js'
        }
    }))
    .pipe(gulp.dest(jsDest))
});

var gulp = require('gulp'),
connect = require('gulp-connect');

gulp.task('webserver', function() {
connect.server();
});

gulp.task('default', ['webserver']);