const path = require('path') 
const Merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.js')
const webpack = require('webpack')
const chalk = require('chalk')
const ora = require('ora')
const spinner = ora(chalk.yellow('正在打包卡片呢， 先喝杯茶休息下...'))
spinner.start()

let cardName = process.argv[process.argv.length - 1]

const webpackBuildConfig = Merge(webpackBaseConfig, {
    mode: 'development',
    devtool: 'source-map', // 代码映射, 代码不压缩
    output: {
        filename: "[name].js", // 打包后的文件
        libraryTarget: "umd", // 打包成umd模块
        library: "[name]"
    }
})

// 动态设置入口
webpackBuildConfig.entry = {}
webpackBuildConfig.entry[cardName] = path.resolve(__dirname, `../src/cards/${cardName}/${cardName}.js`)

// 动态设置出口
webpackBuildConfig.output.path = path.resolve(__dirname, `../dist/cards/${cardName}`)

const compiler = webpack(webpackBuildConfig)

compiler.run(function(err, stats) {
    spinner.stop()
    if (err) {
        console.log(chalk.red('卡片打包失败~~~'))
    } else {
        console.log(chalk.green('卡片打包成功~~~'))
    }
})