const webpack = require('webpack');
const webpackMerge = require('webpack-merge')
const webpackCommonConfig = require('./webpack.common')
const path = require('path')

console.log('webpack.dev.js')
const config = webpackMerge(webpackCommonConfig, 
{
    mode: 'development', // 设置为'development' 后代码不会压缩
    devtool: 'inline-source-map',
    /**
     * output定义出口
     */
    output: {
        filename: '[name].js', // 此时输出的文件名应该也是动态的
        chunkFilename: '[name].js', // 在代码切割时，它决定非入口 chunk 的名称
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/' // 设置的值会影响index.html内引入js的路径
    },
    devServer: {
        port: 8002,
        contentBase: '/dist',// 告诉服务器从哪里查找文件
        hot: true
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
})
module.exports = config