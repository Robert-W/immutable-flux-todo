var webpack = require('webpack');
var path = require('path');

module.exports = {
  debug: true,
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    path.join(__dirname, 'src/js/main.js')
  ],
  output: {
    path: path.resolve('public/js'),
    filename: 'bundle.js',
    publicPath: '/js/'
  },
  module: {
    // noParse: [path.join(__dirname, 'vendor/react/react.min.js')],
    loaders: [{
      test: /\.js?$/,
      loader: 'react-hot',
      exclude: /(node_modules|vendor|public)/
    }, {
      test: /\.js?$/,
      loader: 'babel',
      exclude: /(node_modules|vendor|public)/,
      query: {
        presets: ['es2015', 'react', 'stage-0'],
        plugins: ['transform-runtime']
      }
    }]
  },
  resolve: {
    alias: {
      'js': path.join(__dirname, 'src/js'),
      'components': path.join(__dirname, 'src/js/components'),
      'react-lib': path.join(__dirname, 'node_modules/react/react'),
      'react-dom': path.join(__dirname, 'node_modules/react/lib/ReactDOM')
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
