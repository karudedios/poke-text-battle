const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',

  entry: {
    game: resolve(__dirname, 'src', 'index.js'),
  },

  resolve: {
    alias: {
      'utils': resolve(__dirname, 'src', 'utils'),
      'sagas': resolve(__dirname, 'src', 'sagas'),
      'actions': resolve(__dirname, 'src', 'actions'),
      'reducers': resolve(__dirname, 'src', 'reducers'),
      'containers': resolve(__dirname, 'src', 'containers'),
      'components': resolve(__dirname, 'src', 'components'),
    },
  },

  module: {
    rules: [{
     test: /\.jsx?/,
     loaders: [
       'babel-loader',
       'eslint-loader',
     ],

     include: resolve(__dirname, 'src'),
     exclude: resolve(__dirname, 'node_modules'),
    }]
  },

  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
  },

  optimization: {
    minimize: false,
    runtimeChunk: true,
    splitChunks: {
      name: true,
      chunks: "async",
      cacheGroups: {
        vendor: {
          enforce: true,
          name: 'vendor',
          chunks: 'initial',
          test: /node_modules/,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, 'src', 'index.html'),
    }),
  ],
};
