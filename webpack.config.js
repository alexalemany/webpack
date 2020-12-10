const path = require('path')
const loaders = require('./loaders')
const { instance } = require('./plugins')
const ESLintPlugin = require('eslint-webpack-plugin')

const configuration = {
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            loaders.JSLoader,
            loaders.IMAGESLoader,
            loaders.SCSSLoader,
        ]
    },
    resolve: {
        alias: {
          '@': path.resolve(__dirname, '../../'),
        }
    },
    plugins: [
        instance,
        new ESLintPlugin({
            overrideConfigFile: path.resolve(__dirname, './.eslintrc') 
        })
    ]
}

module.exports = configuration
