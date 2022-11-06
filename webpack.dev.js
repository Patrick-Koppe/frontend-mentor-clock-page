const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: "source-map", // any "source-map"-like devtool is possible
  watch: true,
  entry: {
    app: './src/app.js',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
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
  },
};