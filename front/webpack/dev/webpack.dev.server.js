const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseConfig = require('../webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');
const path = require('path');
const ROOT_DIR = path.resolve(__dirname, '../../');
const resolvePath = (...args) => path.resolve(ROOT_DIR, ...args);
const BUILD_DIR = resolvePath('dist');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const dotenv = require('dotenv').config({ path: __dirname + '/.env' })
const isDevelopment = process.env.NODE_ENV !== 'production'
const serverConfig = {
  target: 'node',
  mode: 'development',
  name: 'server',
  entry: {
    server: './ssr/server/index.jsx',
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
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify(isDevelopment ? 'development' : 'production'),
          browser: false
        },
      },
    })
  ],
  output: {
    path: BUILD_DIR,
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    chunkFilename: 'client/[name].js',
    assetModuleFilename: 'assets/[hash][ext][query]',
    globalObject: `typeof self !== 'undefined' ? self : this`
  },
  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, serverConfig);
