const helpers = require('./helpers'),
  webpackConfig = require('./webpack.config.base'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  DefinePlugin = require('webpack/lib/DefinePlugin'),
  env = require('../environment/dev.env');

webpackConfig.module.rules = [
  ...webpackConfig.module.rules,
  {
    test: /\.scss$/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' },
      { loader: 'sass-loader' }
    ]
  },
  {
    test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
    loader: 'file-loader'
  }
];

webpackConfig.plugins = [
  ...webpackConfig.plugins,

  // Simplifies creation of HTML files to serve your webpack bundles.
  // https://github.com/jantimon/html-webpack-plugin
  new HtmlWebpackPlugin({
    inject: true,
    template: helpers.root('/src/index.html'),
    favicon: helpers.root('/src/favicon.ico')
  }),
  new DefinePlugin({
    'process.env': env
  })
];

// https://webpack.js.org/configuration/dev-server/
webpackConfig.devServer = {
  port: 8080,
  host: 'localhost',
  historyApiFallback: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  contentBase: './src',
  open: true
};

module.exports = webpackConfig;
