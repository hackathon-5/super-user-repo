var webpack = require('webpack'),
  path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'app.js',
    path: path.join(__dirname, '/public/js/bundle')
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loaders: ['babel']
    }]
  },
  externals: {
    "leaflet": "L"
  },
  devtool: 'source-map'
}
