const path = require('path')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const Merge = require('webpack-merge')
const dotenv = require('dotenv')
const chalk = require('chalk')
const webpackBaseConfig = require('./webpack.base.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
dotenv.config({path: path.resolve(__dirname, './.env.dev')})

const webpackConfig = Merge(webpackBaseConfig, {
    // 入口起点，可以指定多个入口起点
    // 页面实时刷新必须配置 webpack-dev-server/client?http://localhost:8888/
    entry: {
        app: [`webpack-dev-server/client?http://localhost:${process.env.port}/`, path.resolve(__dirname, process.env.entryPonit)],
    }
})

console.log(path.resolve(__dirname, '../client'), "================")
const webpackDevserverConfig = Merge(webpackConfig, {
    mode: 'development',
    devtool: 'inline-source-map', // 代码映射
    // 开发服务器
    // 使用 webpack-dev-server 时，webpack 并没有将所有生成的文件写入磁盘，而是放在内存中，提供更快的内存内访问，便于实时更新。
    devServer: {
        contentBase: path.resolve(__dirname, '../client'),
        inline: true,
        proxy: [
            {
                context: ["/api"],
                target: "http://localhost:8888",
                changeOrigin: true,
                pathRewrite: {"^/api" : "/api"},
                secure: false
            }
        ]
    },
    output: {
        filename: 'bundle.js', // 输出文件名
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

const compiler = webpack(webpackDevserverConfig)
const server = new WebpackDevServer(compiler)

server.listen(process.env.port, process.env.host, err => {
    if (err) {
        console.log(chalk.red('哦吼，服务启动失败，哪里出了问题呢，如果解决不了的话就联系开发小哥哥吧~~~'))
    } else {
        console.log(chalk.green('哈哈，服务已启动， 可以愉快的开发啦^_^'))
    }
})
