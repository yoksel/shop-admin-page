const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  const env = dotenv.config({
    path: './.public.prod.env'
  }).parsed;
  let envKeys = [];

  if(env) {
    envKeys = Object.keys(env).reduce((prev, next) => {
      prev[`process.env.${next}`] = JSON.stringify(env[next]);
      return prev;
    }, {});
  }

  return {
    mode: 'production',
    entry: './src/app.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/shop-admin-page/'
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader',
          ],
        },
      ]
    },
    plugins: [
      new webpack.DefinePlugin(envKeys),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // all options are optional
        filename: 'styles.css',
        ignoreOrder: false, // Enable to remove warnings about conflicting order
      }),
      new HtmlWebpackPlugin({
        title: 'Shop admin page',
        filename: 'index.html',
        template: 'src/index-tmpl.html'
      }),
    ]
  }
};
