const path = require("path");
module.exports = {
  entry: {
    // vendor: ['jquery', 'bootstrap'],
    home: path.resolve(__dirname, "src/entries/home.js")
  },
  // devtool: "source-map",
  devServer: {
    host: "0.0.0.0", //your ip address
    port: 8080
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          name: "vendor",
          test: "vendor",
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|ico|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "images"
          }
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1000,
              name: "[name].[ext]",
              outputPath: "fonts/"
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1000,
            name: "videos/[name].[ext]"
          }
        }
      }
    ]
  }
};
