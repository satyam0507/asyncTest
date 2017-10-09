var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

var buildSources = ['lib/**/*.js'];


var bundler = browserify({
    entries: ['./lib/index.js'],
    standalone: '_nv_async',
    debug: true,
});

gulp.task('default', function() {
        return bundler
            .bundle()
            .pipe(source('app.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({
                loadMaps: true,
            }))
            .pipe(uglify({
                // compress: false,
            }))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('./'));
});





