const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

  //entry file 
  entry:{
    main: "./src/index.js",
    bootstrap: "./src/vendor.js",
    vendor: ['react', 'react-dom'],
  },

  //loaders
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      {
        test: /.html$/,
        use: ["html-loader"]
      },
      {
        test: /.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      }
    ],
  },
  optimization: {
    // https://stackoverflow.com/questions/48985780/webpack-4-create-vendor-chunk
    splitChunks: {
      cacheGroups: {
        vendor: {
          test:/[\\/]node_modules[\\/]/,
          name: "other",
          chunks: 'all',
        },
       
      },
    }
  },
  // Provides template to HTML file inside dist directory
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
  ],

};