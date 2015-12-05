var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackConfig = require('./webpack.config');
var browserSync = require('browser-sync');
var webpack = require('webpack');
var gulp = require('gulp');

var compiler = webpack(webpackConfig);

gulp.task('copy-css', function () {
  return gulp.src(['src/css/**/*.css'])
    .pipe(gulp.dest('public/css'));
});

gulp.task('copy-html', function () {
  return gulp.src(['src/**/*.html'])
    .pipe(gulp.dest('public'));
});

gulp.task('watch', function () {
  gulp.watch('src/css/**/*.css', ['copy-css']);
  gulp.watch('src/**/*.html', ['copy-html']);
});

gulp.task('start', ['copy-css', 'copy-html', 'watch']);

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
