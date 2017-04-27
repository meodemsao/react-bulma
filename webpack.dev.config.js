const path = require('path');
const webpack = require('webpack');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const env = process.env.WEBPACK_BUILD || 'development';

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackDevConfig = require('./webpack.base.config')('development');
const webpackProdConfig = require('./webpack.base.config')('production');

const paths = [
  '/',
  '/components/',
  '/components/columns/',
  '/components/tiles',
  '/components/box/',
  '/components/button/',
  '/components/content/',
  '/components/delete/',
  // '/components/buttons/',
  // '/components/button-group/',
  // '/components/button-toolbar/',
  // '/components/button-dropdown/',
  // '/components/dropdowns/',
  '/components/form/',
  // '/components/input-group/',
  // '/components/popovers/',
  // '/components/progress/',
  // '/components/tooltips/',
  // '/components/modals/',
  // '/components/badge/',
  // '/components/card/',
  // '/components/tables/',
  // '/components/media/',
  // '/components/pagination/',
  // '/components/tabs/',
  // '/components/jumbotron/',
  // '/components/alerts/',
  // '/components/collapse/',
  // '/components/listgroup/',
  '/404.html'
];

var config = [{
  devtool: 'source-map',
  devServer: {
    contentBase: './build',
    historyApiFallback: true,
    stats: {
      chunks: false
    }
  },
  entry: {
    main: './docs/lib/app'
  },
  node: {
    fs: 'empty'
  },
  output: {
    filename: 'bundle.js',
    path: './build',
    libraryTarget: 'umd'
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new CopyWebpackPlugin([{ from: './docs/static', to: 'assets' }]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new StaticSiteGeneratorPlugin('main', paths, {}),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("/assets/style.css")
  ],
  module: {
    loaders: [
      {
        test: /\.json$/,
        loaders: [
          'json-loader?cacheDirectory'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader?cacheDirectory'
        ]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json'],
    alias: {
      'bulma-css': path.join(__dirname,'node_modules/bulma/css/bulma.css'),
      reactbulma: path.resolve('./src')
    }
  }
}];

if (env === 'development') {
  config.push(webpackDevConfig);
  config.push(webpackProdConfig);
} else {
  config[0].plugins.push(new webpack.optimize.UglifyJsPlugin(
    {
      minimize: true,
      compress: {
        warnings: false
      },
      mangle: true
    }
  ));
}

module.exports = config;
