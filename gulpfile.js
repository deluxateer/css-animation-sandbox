const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

function prefix() {
  return (
    gulp.src(['src/*.css'])
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
      .pipe(gulp.dest('dist/css/'))
  );
}

function watch() {
  gulp.watch('src/*.css', prefix);
}

let build = gulp.series(prefix, watch);

exports.prefix = prefix;
exports.watch = watch;
exports.default = build;