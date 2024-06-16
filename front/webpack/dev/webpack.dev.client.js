const webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');
const baseConfig = require('../webpack.base.js');
const ROOT_DIR = path.resolve(__dirname, '../../');
const resolvePath = (...args) => path.resolve(ROOT_DIR, ...args);
const BUILD_DIR = resolvePath('dist');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const clientConfig = {
  target: 'web',
  mode: 'development',
  entry: {
    client: ['./ssr/client/index.jsx'],
  },
  devServer: {
    contentBase: './dist',
    compress: true,
    historyApiFallback: true,
    // hot: true,
    // open: true,
  },
  output: {
    path: resolvePath(BUILD_DIR, 'client'),
    publicPath: '/client/',
    filename: '[name].js',
    chunkFilename: '[name].js',
    asyncChunks: true,
    assetModuleFilename: 'assets/[hash][ext][query]',
    globalObject: `typeof self !== 'undefined' ? self : this`
  },
  resolve: {
    ...baseConfig.resolve,
  },
  module: {
    ...baseConfig.module,
    rules: [
      {
        test: /\.(css|less|styl|scss|sass|sss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
      patterns: [
          { from: 'public' }
      ]
    })
  ],
  optimization: {
    chunkIds: 'natural',
    splitChunks: {
      chunks: 'all', 
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
    minimize: false,
  },
};

module.exports = merge(baseConfig, clientConfig);
