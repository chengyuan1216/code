const path = require('path')
const webpack = require('webpack')
const Merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.js')

module.exports = function(env) {  

    const port = 5555 // 前端端口
    const serverPort = 8888 // 服务器端口
    const src = env.src || '/card/83ce91e32da614bf6d662135b6806865.js' // 卡片地址
    const cardName = env.cardName || 'UploadCard' // 卡片名称
    const cardComponent = env.cardComponent // 本地开发卡片名称

    webpackBaseConfig.entry = {
        [cardName]: path.resolve(__dirname, `../src/cards/${cardComponent}/${cardComponent}.js`)
    }

    const webpackDevserverConfig = Merge(webpackBaseConfig, {
        mode: 'development',
        devtool: 'inline-source-map',
        devServer: {
            port: port,
            contentBase: path.resolve(__dirname, '../client'),
            proxy: [
                {
                    context: [src],
                    target: `http://localhost:${port}`,
                    pathRewrite: {[src] : "/cardComponent.js"},
                    secure: false
                },
                {
                    context: ["/api", "/card"],
                    target: `http://localhost:${serverPort}`,
                    changeOrigin: true,
                    secure: false
                }
            ]
        },
        output: {
            filename: 'cardComponent.js', // 输出文件名
            libraryTarget: "umd", // 打包成umd模块
            library: "[name]"
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('development')
            }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin()
        ]
    })

    return webpackDevserverConfig
}