const glob = require('glob'),
  path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  CompressionPlugin = require('compression-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  PurifyCSSPlugin = require('purifycss-webpack'),
  FaviconsWebpackPlugin = require('favicons-webpack-plugin'),
  autoprefixer = require('autoprefixer'),
  webpackConfig = require('./webpack.config.base'),
  helpers = require('./helpers'),
  DefinePlugin = require('webpack/lib/DefinePlugin'),
  env = require('../environment/prod.env');

// Extract text from a bundle, or bundles, into a separate file.
// https://github.com/webpack-contrib/extract-text-webpack-plugin
const extractSass = new ExtractTextPlugin({
  filename: 'css/[name].[contenthash].css',
  disable: process.env.NODE_ENV === 'development'
});

// Remove unused CSS with webpack.
// https://github.com/webpack-contrib/purifycss-webpack
const purifyCss = new PurifyCSSPlugin({
  paths: glob.sync(path.join(__dirname, '../src/**/*.html')),
  purifyOptions: {
    info: true,
    whitelist: []
  }
});

// Simplifies creation of HTML files to serve your webpack bundles.
// https://github.com/jantimon/html-webpack-plugin
const htmlPlugin = new HtmlWebpackPlugin({
  inject: true,
  template: helpers.root('/src/index.html'),
  favicon: helpers.root('/src/favicon.ico'),
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    removeRedundantAttributes: true,
    useShortDoctype: true,
    removeEmptyAttributes: true,
    removeStyleLinkTypeAttributes: true,
    keepClosingSlash: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true
  }
});

// Extract common modules shared between chunks.
// https://webpack.js.org/plugins/commons-chunk-plugin/
const commonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  minChunks: function (module, count) {
    // any required modules inside node_modules are extracted to vendor
    return (
      module.resource &&
      /\.js$/.test(module.resource) &&
      module.resource.indexOf(
        path.join(__dirname, '../node_modules')
      ) === 0
    )
  }
});

webpackConfig.module.rules = [
  ...webpackConfig.module.rules,
  {
    test: /\.scss$/,
    use: extractSass.extract({
      use: [
        {
          loader: 'css-loader',
          options: {
            minimize: true,
            sourceMap: true,
            importLoaders: 2
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            plugins: () => [autoprefixer]
          }
        },
        {
          loader: 'sass-loader',
          options: {
            outputStyle: 'expanded',
            sourceMap: true,
            sourceMapContents: true
          }
        }
      ],
      fallback: 'style-loader' // use style-loader in development
    })
  },
  {
    test: /\.(jpg|png|gif)$/,
    loader: 'file-loader?name=assets/img/[name].[ext]'
  },
  {
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    loader: 'file-loader?name=fonts/[name].[ext]'
  }
];

// ensure ts lint fails the build.
webpackConfig.module.rules[0].options = {
  failOnHint: true
};

webpackConfig.plugins = [
  ...webpackConfig.plugins,
  extractSass,
  purifyCss,
  htmlPlugin,
  commonsChunkPlugin,
  definePlugin,

  // Since the vendor and manifest chunk use a different definition for minChunks,
  // you need to invoke the plugin twice:
  new webpack.optimize.CommonsChunkPlugin({
    name: "manifest",
    minChunks: Infinity
  }),

  // UglifyJS plugin for webpack.
  // https://webpack.js.org/plugins/uglifyjs-webpack-plugin/
  new webpack.optimize.UglifyJsPlugin({
    exclude: /\.min\.js$/,
    minimize: true
  }),

  // Prepare compressed versions of assets to serve them with Content-Encoding.
  // https://github.com/webpack-contrib/compression-webpack-plugin
  new CompressionPlugin({
    asset: '[path].gz[query]',
    test: /\.min\.js$/
  }),

  // Allow global constants configured at compile time.
  // https://webpack.js.org/plugins/define-plugin/
  new DefinePlugin({
    'process.env': env
  }),

  // Allows to use the favicons generator with webpack.
  // https://github.com/jantimon/favicons-webpack-plugin
  new FaviconsWebpackPlugin(helpers.root('/src/icon.png'))
];

module.exports = webpackConfig;
