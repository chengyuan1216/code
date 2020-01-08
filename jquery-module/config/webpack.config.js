const path = require('path')
const fs = require('fs')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { getEntry, log } = require('../build/util')
const merge = require('webpack-merge')

const defaultArgs = {
    _watch: false,
    _dev: false
}

module.exports = (args = {}) => {
    args = Object.assign(defaultArgs, args)
    log('args', args)

    const [entry, htmlTemplatePlugin] = getEntry()
    log('entry', Object.keys(entry))

    let config = {
        // 模式
        mode: 'development',
        // source map
        devtool: 'inline-source-map',
        // 入口
        entry: {
            ...entry
        },
        // 输出
        output: {
            path: path.resolve(process.cwd(), 'dist'),
            filename: '[name].js'
        },
        resolve: {
            // 别名
            alias: {
                '@': path.resolve(process.cwd(), 'src')
            }
        },
        module: {
            rules: [
                {
                    test: /.ejs$/,
                    loader: ['ejs-loader']
                },
                {
                    test: /.css$/,
                    loader: [
                        'style-loader',
                        'css-loader'
                    ]
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            ...htmlTemplatePlugin
        ]
    }

    // 开启监听模式
    if (args._watch) {
        config = merge(config, {
            watch: true,
            watchOptions: {
                aggregateTimeout: 1000, // 将多个更改聚合到单个重构建(rebuild)
                poll: true,
                poll: 500, // 间隔单位 ms
            }
        })
    }

    // dev server
    if (args._dev) {
        config = merge(config, {
            devServer: {
                // 本地静态资源
                contentBase: './dist',
                // 代理请求
                proxy: {

                },
                // enable gzip compression
                compress: false,
                // TODO
                historyApiFallback: true,
                // 热重载
                hot: true,
                // true for self-signed, object for cert authority
                https: false,
                // only errors & warns on hot reload
                noInfo: true
            }
        })
    }

    return config
}