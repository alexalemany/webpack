const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const instance = new MiniCssExtractPlugin({
    filename: '[name].css',
})

module.exports = {
    instance,
    MiniCssExtractPlugin
}
