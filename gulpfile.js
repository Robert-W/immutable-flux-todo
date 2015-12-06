var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackConfig = require('./webpack.config');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var stylus = require('gulp-stylus');
var webpack = require('webpack');
var gulp = require('gulp');

var compiler = webpack(webpackConfig);

gulp.task('stylus', function () {
  return gulp.src(['src/css/app.styl'])
    .pipe(stylus({ linenos: true }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('public/css'));
});

gulp.task('stylus-production', function () {
  return gulp.src(['src/css/app.styl'])
    .pipe(stylus({ compress: true }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('copy-html', function () {
  return gulp.src(['src/**/*.html'])
    .pipe(gulp.dest('public'));
});

gulp.task('copy-html-production', function () {
  return gulp.src(['src/**/*.html'])
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
  gulp.watch('src/**/*.styl', ['stylus']);
  gulp.watch('src/**/*.html', ['copy-html']);
});

gulp.task('start', ['stylus', 'copy-html', 'watch']);
gulp.task('production', ['stylus-production', 'copy-html-production']);

gulp.task('server', function () {
  browserSync({
    files: ['public/**/*.html', 'public/**/*.js', 'public/**/*.css'],
    port: process.env.PORT || 3000,
    reloadOnRestart: false,
    logFileChanges: false,
    ghostMode: false,
    open: false,
    ui: false,
    server: {
      baseDir: 'public',
      middleware: [
        webpackDevMiddleware(compiler, {
          publicPath: webpackConfig.output.publicPath,
          stats: { colors: true }
        }),
        webpackHotMiddleware(compiler)
      ]
    }
  });
});
