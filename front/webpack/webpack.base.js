const webpack = require('webpack');

const path = require('path');
const scriptExtensions = /\.(tsx|ts|js|jsx|mjs)$/;
const imageExtensions = /\.(bmp|gif|jpg|jpeg|png)$/;
const fontsExtension = /\.(eot|otf|ttf|woff|woff2)$/;

module.exports = {
  // devtool: false,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, '../src/'),
      '@/pages': path.resolve(__dirname, '../src/pages'),
      '@/layouts': path.resolve(__dirname, '../src/layouts'),
      '@/component': path.resolve(__dirname, '../src/components'),
      '@/store': path.resolve(__dirname, '../src/store'),
      '@/router': path.resolve(__dirname, '../src/routes'),
      '@/graphql': path.resolve(__dirname, '../src/graphql'),
      '@/websocket': path.resolve(__dirname, '../src/websocket'),
    },
  },
  module: {
    rules: [
      {
        test: scriptExtensions,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { sourceMaps: true }
        }
      },
      {
        test: fontsExtension,
        type: 'asset',
      },
      {
        test: /\.svg/,
        type: 'asset/inline',
      },
      {
        test: imageExtensions,
        type: 'asset/resource',
      },
    ],
  },
};
