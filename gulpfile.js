var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');

var paths = {
    styles: 'front/styles/*.scss',
    scripts: 'front/scripts/**/*.js'
};

gulp.task('default', ['serve', 'watch']);

gulp.task('serve', function () {
    connect.server({
        root: 'front',
        port: 8000
    });
});

gulp.task('watch', function() {
    gulp.watch(paths.styles, ['styles']);
    gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('styles', function() {
    return gulp.src(paths.styles)
        .pipe(sass({ style: 'expanded', errLogToConsole: true}))
        .pipe(autoprefixer())
        .pipe(gulp.dest('front/assets/styles'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest('front/assets/styles'));
});

gulp.task('scripts', function() {
    return gulp.src(paths.scripts)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('front/assets/scripts'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('front/assets/scripts'));
});