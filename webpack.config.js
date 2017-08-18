var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: {
    main: APP_DIR + '/main.jsx'
  },  
  module: {    
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loaders: ['react-hot-loader', 'babel-loader']
      },
      {
        test: /\.html$/,
        loader: "file-loader?name=[name].[ext]",
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    publicPath: "/",
    contentBase: "./public",
    hot: true
  },
  output: {
    path: BUILD_DIR,
    publicPath: "/",
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map'
  },
  watch: true
};

module.exports = config;