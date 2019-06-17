let gulp = require('gulp');
let sass = require('gulp-sass');
let sassGlob = require('gulp-sass-glob');
let sourcemaps = require('gulp-sourcemaps');
let plumber = require('gulp-plumber');
let notify = require('gulp-notify');
let postcss = require('gulp-postcss');
let autoprefixer = require('autoprefixer');
let cssdeclsort = require('css-declaration-sorter');
let mqpacker = require('css-mqpacker');

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(sourcemaps.init())
        .pipe(sassGlob())
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(postcss([mqpacker()]))
        .pipe(postcss([cssdeclsort({
            order: 'smacss'
        })]))
        .pipe(postcss([autoprefixer({
            browsers: ['last 2 versions', 'ie >= 10']
        })]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('../css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', gulp.task('sass'));
});
