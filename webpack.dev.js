const path = require("path");
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common,{
  mode: "development",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /.scss$/,
        use: [
          "style-loader", 
          "css-loader", 
          "sass-loader" ,
          "postcss-loader"
        ]
      }
    ]
  },
  devServer: {
    port: 8080,
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ]
});