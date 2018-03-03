'use strict';
var HtmlWebPackPlugin = require('html-webpack-plugin')
var webpack = require('webpack');
var path = require('path');
console.log(__dirname);
module.exports = {
    entry : [
      `${__dirname}/../index.js`
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: {
            loader: "html-loader"
          }
        },
        {
          test: /\.(scss|css)$/,
          use: {
            // loaders: ["style-loader", "css-loader", "sass-loader"]
            loader: "sass-loader"
          }
        }
      ]
  },
  plugins: [
  new HtmlWebPackPlugin({
    template: "./index.html",
    filename: "./index.html"
  })
  ],
  output: {
    path: __dirname+'/dist',
    filename: "bundle.js"
  },
  devServer: {
    contentBase: __dirname+"/dist",
    historyApiFallback: true
  }
}
