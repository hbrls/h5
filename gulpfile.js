var pump = require('pump');
var gulp = require('gulp');
var pkg = require('./package.json');
var merge = require('merge-stream');
var addsrc = require('gulp-add-src');
var shell = require('gulp-shell');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


gulp.task('libs', shell.task([
  'rm -f ./libs/*.js',
  'cp node_modules/vue/dist/vue.js ./libs',
  'cp node_modules/vue/dist/vue.min.js ./libs',
  'cp node_modules/vue-resource/dist/vue-resource.min.js ./libs',
  'cp node_modules/director/build/director.min.js ./libs && echo ";" >> ./libs/director.min.js',
  'wget https://raw.githubusercontent.com/nice-fungal/bootstrap/xs/dist/css/bootstrap-xs-803aefc053.css -P ./libs',
  'wget https://raw.githubusercontent.com/hbrls/headjs/v2/dist/2.0/head.core.min.js -P ./libs',
]));


gulp.task('js', shell.task([
  'npm run -s js-debug',
  'npm run -s js-prod',
]));


gulp.task('css', function (done) {
  return gulp
    .src('./sass/h5.scss')
    .pipe(sass())
    .pipe(cssnano({ autoprefixer: { add: true }}))
    .pipe(addsrc.prepend('./libs/bootstrap-xs-803aefc053.css'))
    .pipe(concat('h5.min.css'))
    .pipe(gulp.dest('./dist'));
});


gulp.task('build', ['js', 'css'], function () {
  return gulp
    .src([
      'dist/h5.debug.js',
      'dist/h5.min.css',
      'dist/h5.min.js',
    ])
    .pipe(rename(function (path) {
      path.basename = path.basename.replace('h5', 'h5-' + pkg.version);
      return path;
    }))
    .pipe(gulp.dest('dist'));
});


gulp.task('example', shell.task([
  'cp ./dist/h5.min.js ./example/js/',
  'cp ./dist/h5.min.css ./example/css/',
]));


gulp.task('default', ['build']);
