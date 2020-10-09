const path = require('path')
const loaders = require('./loaders')
const plugins = require('./plugins')

const configuration = {
  entry: {
    main: 'js/index.js'
  },
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
    path: path.resolve(__dirname, '../../dist/')
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      loaders.IMAGESLoader,
      loaders.CSSLoader,
      loaders.JSLoader,
      loaders.ESLintLoader,
    ]
  },
  resolve: {
    alias: {
      js: path.resolve(__dirname, '../../'),
      css: path.resolve(__dirname, '../../')
    }
  },
  plugins: [
    plugins.StyleLintPlugin,
    plugins.MiniCssExtractPlugin
  ]
}

module.exports = configuration
