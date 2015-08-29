var webpack = require('webpack'),
  path = require('path');

module.exports = {
  context: path.join(__dirname, '/app'),
  entry: 'src/index.js',
  output: {
    filename: 'app.bundle.js',
    path: path.join(__dirname, '/public/js/')
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loaders: ['babel']
    }]
  }
}
