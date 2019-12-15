const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: {
        app: './src/app.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: file => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                ),
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(css|scss)$/, // 加载样式文件
                use: ExtractTextPlugin.extract({
                    fallback: 'vue-style-loader',
                    use: [
                        "css-loader",
                        {
                            loader: 'sass-loader',
                            options: {
                              // 你也可以从一个文件读取，例如 `variables.scss`
                              // 如果 sass-loader 版本 < 8，这里使用 `data` 字段
                              prependData: `$color: green;`
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/, // 加载图片
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/, // 加载字体
                use: [
                'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new ExtractTextPlugin("styles.css"),
        new VueLoaderPlugin()
    ],
    optimization: {
        runtimeChunk: {
            name: "manifest"
        },
        splitChunks: {
            chunks: "all", // async 切割异步加载的模块 | all 所有 | initial 初始化的模块
            minSize: 1000, // 模块的最小体积
            minChunks: 1, // 模块的最小被引用次数
            maxAsyncRequests: 5, // 按需加载的最大并行请求数
            maxInitialRequests: 3, // 一个入口最大并行请求数
            automaticNameDelimiter: '~', // 文件名的连接符
            name: true,
            cacheGroups: { // 缓存组
                vendors: {
                    name: 'vendor', // 第三方公共模块打包到这里
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: { // 引用超过两次的模块打包到这里
                    name: 'common',
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    }
}