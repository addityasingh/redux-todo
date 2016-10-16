var path = require('path');
var webpack = require('webpack');

var ENVIRONMENT = process.env.NODE_ENV || 'production';
var IS_PROD = ENVIRONMENT === 'production';

module.exports = {
  devtool: IS_PROD ? 'cheap-module-source-map' : 'eval',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    IS_PROD ? 
      new webpack.DefinePlugin({
        'process.env': {
        'NODE_ENV': JSON.stringify('production')
        }
    }) :
    null
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};
