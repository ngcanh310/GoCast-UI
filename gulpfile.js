const { src, dest, watch } = require('gulp');
const pug = require('gulp-pug');
const sourcemaps = require('gulp-sourcemaps');

const PUG_URL = 'pug/*.pug';
const SCSS_URL = 'sass/**/*.scss';

const sass = require('gulp-sass')(require('sass'));
function css() {
	return src(SCSS_URL)
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(dest('dist/styles'));
}
exports.css = css;

function html() {
	return src(PUG_URL)
		.pipe(pug({ pretty: true }))
		.pipe(dest('dist/html'));
}
exports.html = html;

exports.watch = function () {
	watch(SCSS_URL, css);
	watch('pug/**/*.pug', html);
};