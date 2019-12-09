const path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin')

const isDevMode = process.env.NODE_ENV !== 'production',
  dist = path.resolve(__dirname, 'dist')

module.exports = {
  mode: 'production',
  entry: {
    index: './src_website/index.js',
  },
  output: {
    path: dist,
    filename: '[name].js',
  },
  devServer: {
    contentBase: dist,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Extract my file',
      template: 'src_website/index.html',
      hash: true,
    }),
    new MiniCssExtractPlugin({
      filename: isDevMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevMode ? '[id].css' : '[id].[hash].css',
    }),
    new WasmPackPlugin({
      crateDirectory: __dirname,
      extraArgs: '--out-name index',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDevMode,
            },
          },
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
}
