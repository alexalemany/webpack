const { MiniCssExtractPlugin } = require('./plugins')

const JSLoader = {
    test: /\.(js)$/,
    exclude: /node_modules/,
    use: ['babel-loader'],
}

const SCSSLoader = {
    test: /\.(scss|css)$/,
    use: [
      MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ]  
}

const IMAGESLoader = {
    test: /\.(png|ttf|woff|eot|svg|jpe?g|gif)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
            outputPath: 'vendor-images',
            publicPath: 'vendor-images',
            name: '[name].[ext]',
        },
      },
    ]
  }

module.exports = {
    JSLoader,
    SCSSLoader, 
    IMAGESLoader,
}
