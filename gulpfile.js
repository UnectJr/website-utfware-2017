'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var imgmin = require('gulp-imagemin');

gulp.task('sass', function () {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('imgmin', function () {
    return gulp.src('./img/**')
        .pipe(imgmin())
        .pipe(gulp.dest('./img/'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
    gulp.watch('./img/**', ['imgmin']);
});