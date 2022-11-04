const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  module: {
    rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            {
							loader: 'file-loader',
							options: {
								name: '[name].css',
								outputPath: 'css/'
							}
						},
						{
							loader: 'extract-loader'
						},
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
              }
            },
            {
							loader: 'postcss-loader'
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
});