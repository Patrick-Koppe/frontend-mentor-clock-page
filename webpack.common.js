const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.js',
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // fallback to style-loader in development
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "css/main.css",
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: false, // prevent multiple js file, if u use a separate file
      filename: '../index.html'
    }),
  ],

  output: {
    filename: './js/main.js',
    path: path.resolve(__dirname, 'dist/assets/'),
    clean: true,
  }
};