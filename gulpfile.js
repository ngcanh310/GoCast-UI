const { src, dest, series, watch } = require('gulp');

// sass
const scss = require('gulp-sass')(require('sass'));
const autoPrefixer = require('gulp-autoprefixer')

function sass() {
    return src('./sass/*.scss')
        .pipe(scss())
        .pipe(autoPrefixer('last 2 versions'))
        .pipe(dest('./disk/styles/'))
}

// pug
const pug = require('gulp-pug')

function code() {
    return src('./pug/*.pug')
        .pipe(pug())
        .pipe(dest('./disk/html/'))
}

function watchTask() {
    watch(
            [
                './sass/*.scss',
                './pug/*.pug'
            ],
            series(sass, code)
        )
}

exports.default = series(sass, code, watchTask);