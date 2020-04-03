const path = require("path");
const merge = require("webpack-merge");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dev")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/home.html",
      filename: "index.html",
      chunks: ["home"]
    })
  ],
  devtool: "eval-source-map"
});
