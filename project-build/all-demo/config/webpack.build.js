const webpackMerge = require('webpack-merge')
const webpackCommonConfig = require('./webpack.common')
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin 
const path = require('path')

console.log('webpack.build.js')
const DEV_MODE = 'dev'
module.exports = function(env) {
    let config =  webpackMerge(webpackCommonConfig, {
        mode: 'production', // 设置为'development' 后代码不会压缩
        output: {
            filename: '[name].[chunkhash].js', // 此时输出的文件名应该也是动态的
            chunkFilename: '[name].[chunkhash].js', // 在代码切割时，它决定非入口 chunk 的名称
            path: path.resolve(__dirname, '../dist'),
            publicPath: '/' // 设置的值会影响index.html内引入js的路径
        },
        plugins: [
            new CleanWebpackPlugin()
        ]
    })

    if (env.mode === DEV_MODE) {
        config.devtool = 'inline-source-map'
        config.mode = 'development'
    }

    return config
}