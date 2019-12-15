const path = require('path')
const webpack = require('webpack')
const Merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackConfig = Merge(webpackBaseConfig, {
    entry: path.resolve(__dirname, '../src/index.js'),
})

const webpackDevserverConfig = Merge(webpackConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 9876,
        contentBase: path.resolve(__dirname, '../client'),
        proxy: [
            {
                context: ["/api", "/card"],
                target: "http://localhost:8888",
                changeOrigin: true,
                //pathRewrite: {"^/api" : "/api"},
                secure: false
            }
        ]
    },
    output: {
        filename: 'bundle123.js', // 输出文件名
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './client/index.html',
            inject: true
        })
    ]
})

module.exports = webpackDevserverConfig