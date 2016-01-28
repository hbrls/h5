var gulp = require('gulp');
var pkg = require('./package.json');
var shell = require('gulp-shell');
var sass = require('gulp-ruby-sass');
var cssshrink = require('gulp-cssshrink');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');


gulp.task('libs', shell.task([
  'rm -f ./libs/*.js',
  'cp node_modules/vue/dist/vue.js ./libs',
  'cp node_modules/vue/dist/vue.min.js ./libs',
  'cp node_modules/vue-resource/dist/vue-resource.min.js ./libs',
  'cp node_modules/headjs/dist/1.0.0/head.core.min.js ./libs',
  'cp node_modules/director/build/director.min.js ./libs && echo ";" >> ./libs/director.min.js',
  'wget https://raw.githubusercontent.com/hbrls/bootstrap/xs/dist/css/bootstrap.xs.0.0.1.min.css -P ./libs',
]));


gulp.task('js', shell.task([
  'npm run -s js-debug',
  'npm run -s js-prod',
]));


gulp.task('css', function () {
  return sass('./sass/h5.min.scss', {
      style: 'expanded',
      stopOnError: true,
      noCache: true
    })
    .on('error', function (err) { console.log(err.message); })
    .pipe(cssshrink())
    .pipe(minifyCSS({ keepSpecialComments: false }))
    .pipe(gulp.dest('dist/'));
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
