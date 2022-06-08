const { src, watch, dest, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')

function buildSass() {
  return src('sass/**/*.scss')
    .pipe(sass())
    .pipe(purgecss({ content: ['*.html'] }))
    .pipe(dest('css'))
}

function watchSass() {
  watch(['sass/**/*.scss', '*.html'], buildSass)
}

exports.default = series(buildSass, watchSass)
