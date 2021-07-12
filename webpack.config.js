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
            loaders.SCSSLoader
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, '../../dist'),
        compress: true,
        watchContentBase: true,
        liveReload: true,
        port: 8000,
        historyApiFallback: true
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../../')
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
