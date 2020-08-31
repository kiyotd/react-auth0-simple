const path = require("path");
const MODE = "development";
const dotEnv = require("dotenv-webpack");
const enabledSourceMap = MODE === "development";

module.exports = {
  mode: MODE,
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  plugins: [
    new dotEnv()
  ],
  module: {
    rules: [

      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {}
          },
          {
            loader: "eslint-loader",
            options: {
              // fix: true
            }
          }
        ]
      },

      {
        test: /\.scss?$/,
        exclude: "/node_modules/",
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false, // オプションでCSS内のurl()メソッドの取り込みを禁止する
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]"
              },
              sourceMap: enabledSourceMap,
              importLoaders: 2
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [require("autoprefixer")]
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: enabledSourceMap
            }
          }
        ]
      }

    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  devServer: {
    contentBase: `${__dirname}/dist`
  }

};
