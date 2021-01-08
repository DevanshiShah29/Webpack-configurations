const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

  //entry file 
  entry: "./src/index.js",

  //loaders
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      }
    ],
  },
  // Provides template to HTML file inside dist directory
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
  ],

};