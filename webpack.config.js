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
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|png)$/,
        loader: "file-loader?name=[path][name].[ext]"
     },
     {
       test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
       exclude: /node_modules/,
       loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]'
     },
     {
       test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
       exclude: /node_modules/,
       loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]'
     },
     {
       test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
       loader: 'file-loader?name=fonts/[name].[ext]'
     },
     {
       test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
       loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
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