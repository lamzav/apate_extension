const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        // Rule for global CSS (not CSS Modules)
        test: /\.css$/,
        exclude: /\.module\.css$/, // Exclude CSS Modules
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        // Rule for CSS Modules
        test: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]', // Optional: customize generated class names
              },
              importLoaders: 1,
            },
          }
        ],
      }
    ],
  },
});
