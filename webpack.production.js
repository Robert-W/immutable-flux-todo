var path = require('path');

module.exports = {
  entry: [
    path.join(__dirname, 'src/js/main.js')
  ],
  output: {
    path: path.resolve('dist/js'),
    filename: 'bundle.js'
  },
  module: {
    noParse: [path.join(__dirname, 'vendor/react/react.min.js')],
    loaders: [{
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
      'react-lib': path.join(__dirname, 'vendor/react/react.min'),
      'react-dom': path.join(__dirname, 'vendor/react/react-dom.min')
    }
  }
};
