const webpackMerge = require('webpack-merge')
const webpackCommonConfig = require('./webpack.common')
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin 
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const path = require('path')

console.log('webpack.prod.js')
module.exports = webpackMerge(webpackCommonConfig, {
    // devtool: 'source-map',
    mode: 'production', // 设置为'development' 后代码不会压缩
    /**
     * output定义出口
     * 1.输出时使用hash 或 chunkhash,使用hash时每个文件的hash值都一样， 使用chunkhash时，每个文件都有自己的hash值。
     */
    output: {
        filename: '[name].[chunkhash].js', // 此时输出的文件名应该也是动态的
        chunkFilename: '[name].[chunkhash].js', // 在代码切割时，它决定非入口 chunk 的名称
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/' // 设置的值会影响index.html内引入js的路径
    },
    plugins: [
        new CleanWebpackPlugin(),
        // new BundleAnalyzerPlugin()
        // new UglifyJSPlugin({
        //     sourceMap: true
        // })
    ]
})