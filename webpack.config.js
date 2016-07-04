'use strict';

var path = require('path');

var config = {
  entry: path.join(__dirname, 'app', 'index.js'),
  output: {
    path: path.join(__dirname, 'bundle'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
    { 
      test: /\.js$/, 
      exclude: /node_modules/, 
      loaders: ['babel-loader'],
      include: __dirname
    }
    ]
  }
};

module.exports = config;
