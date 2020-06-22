const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    context: path.join(__dirname, 'src'),

    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                // scss
                test: /\.scss$/,
                use: [
                  "style-loader",
                  MiniCssExtractPlugin.loader,
                  {
                    loader: "css-loader",
                    options: { sourceMap: true }
                  },
                  {
                    loader: "postcss-loader",
                    options: {
                      sourceMap: true,
                      config: { path: `./postcss.config.js` }
                    }
                  },
                  {
                    loader: "sass-loader",
                    options: { sourceMap: true }
                  }
                ]
              },
              {
                // css
                test: /\.css$/,
                use: [
                  "style-loader",
                  MiniCssExtractPlugin.loader,
                  {
                    loader: "css-loader",
                    options: { sourceMap: true }
                  },
                  {
                    loader: "postcss-loader",
                    options: {
                      sourceMap: true,
                      config: { path: `./postcss.config.js` }
                    }
                  }
                ]
              }
        ],
    },

    devtool: 'eval',

    devServer: {
        port: 4200
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Native route',
            template: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: `[name].css`
        })
    ]
}