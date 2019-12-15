const path = require('path') 
const Merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.js')
const webpack = require('webpack')
const chalk = require('chalk')
const ora = require('ora')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
// const XuiStatistics = require('./plugins/XuiStatistics')

const spinner = ora(chalk.yellow('正在打包呢， 先喝杯茶休息下...'))
spinner.start()

const webpackBuildConfig = Merge(webpackBaseConfig, {
    mode: 'production',
    // devtool: 'inline-source-map', // 代码映射, 代码不压缩
    entry: {
        app: path.resolve(__dirname, "../src/index.js"), // 入口文件
    },
    output: {
        path:path.resolve(__dirname, "../client/public"), // 打包后所在的目录
        filename: "[name].js" // 打包后的文件
    },
    plugins: [
        new webpack.DllReferencePlugin({
            // 描述动态链接库的文件内容
            manifest: require('../client/public/vendor-manifest.json'),
        }),
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './client/index.html',
            inject: true
        })
    ],
    optimization: {
        // minimizer: [
        //     // 代码压缩
        //     // new UglifyJSPlugin(), //有问题
        // ],
        // 找到chunk中共享的模块,取出来生成单独的chunk
        // splitChunks: {
        //     // maxInitialRequests: 3,
        //     // chunks: "initial",  // async表示抽取异步模块，all表示对所有模块生效，initial表示对同步模块生效
        //     // cacheGroups: {
        //     //     vendors: {  // 抽离第三方插件
        //     //         test: /[\\/]node_modules[\\/]|[\\/]static[\\/]/,     // 指定是node_modules下的第三方包
        //     //         name: "vendors",
        //     //         priority: -10                       // 抽取优先级
        //     //     },
        //     //     utilCommon: {   // 抽离自定义工具库
        //     //         //name: "[name].[hash]",
        //     //         minSize: 0,     // 将引用模块分离成新代码文件的最小体积
        //     //         minChunks: 2,   // 表示将引用模块如不同文件引用了多少次，才能分离生成新chunk
        //     //         priority: -20
        //     //     }
        //     // }
        // },
        // 为 webpack 运行时代码创建单独的chunk
        // runtimeChunk:{
        //     name:'manifest'
        // }
    }
})

const compiler = webpack(webpackBuildConfig)

compiler.run(function(err, stats) {
    spinner.stop()
    if (err) {
        console.log(chalk.red('打包失败, 看来今天是发不了包啦， 洗洗睡吧~~~'))
    } else {
        console.log(chalk.green('打包成功，距离发包成功又近了一步， 看来今天注定是要加班啦~~~'))
    }
})