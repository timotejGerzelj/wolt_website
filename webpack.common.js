const path = require("path")
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const exludedFolders = [path.join(__dirname, "node_modules")]
const CopyPlugin = require('copy-webpack-plugin');

let plugins = [
  new MiniCssExtractPlugin({
    filename: "[name].[hash].css",
  }),
  new CopyPlugin([
    { from: './public', to: './public' },
  ]),
]

module.exports = {
  entry: {
    client: "./src/index.js",
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
    chunkFilename: "[name].js",
  },
  resolve: {
    modules: [
      path.resolve("./src"),
      path.resolve("./public"),
      path.resolve("./styles"),
      path.resolve("./node_modules"),
    ],
  },
  module: {
    rules: [
      // JS
      {
        test: /\.js$/,
        exclude: exludedFolders,
        use: "babel-loader",
      },
      // CSS
      {
        test: /src(\/|\\).*\.css$/,
        exclude: exludedFolders,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          'postcss-loader',
        ],
      }
    ],
  },
  plugins,
}