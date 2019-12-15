const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = {
    /**
     * entry定义入口
     */
    entry: { // 定义多个入口
        app: './src/index.js',
        // component: './src/component.js'
    },
    /**
     * output定义出口
     * 1.输出时使用hash 或 chunkhash,使用hash时每个文件的hash值都一样， 使用chunkhash时，每个文件都有自己的hash值。
     */
    // output: {
    //     filename: '[name].[chunkhash].js', // 此时输出的文件名应该也是动态的
    //     chunkFilename: '[name].[chunkhash].js', // 在代码切割时，它决定非入口 chunk 的名称
    //     path: path.resolve(__dirname, '../dist'),
    //     publicPath: '/' // 设置的值会影响index.html内引入js的路径
    // },
    /**
     * module定义资源的加载
     * 1.通过指定rules的方式来来指定加载资源的loader, 不同的资源使用不同的loader加载。
     */
    module: {
        rules: [
            {
                test: /\.css$/, // 加载样式文件
                // use: [
                //     'style-loader',
                //     'css-loader'
                // ]
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
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
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                'xml-loader'
                ]
            }
        ]
    },
    plugins: [
        // 将 _ 作为全局变量而不用导出引入lodash
        new webpack.ProvidePlugin({
            // _: 'lodash', // 引用整个lodash作为全局变量
            lodashJoin: ['lodash', 'join'] // lodashJoin全局变量指向的是lodash的join
        }),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new ExtractTextPlugin("styles.css"), // 提取出所有的css样式， 打包成一个单独的css文件。
        new WorkboxPlugin.GenerateSW({
          // 这些选项帮助 ServiceWorkers 快速启用
          // 不允许遗留任何“旧的” ServiceWorkers
          clientsClaim: true,
          skipWaiting: true
        })
        // new webpack.HashedModuleIdsPlugin()
        // webpack4已弃用
        //  new webpack.optimize.CommonsChunkPlugin({
        //    name: 'manifest'
        //  })
    ],
    optimization: {
        // 提取样板代码。样板(boilerplate)，指 webpack 运行时的引导代码，特别是 runtime 和 manifest。
        runtimeChunk: {
            name: "manifest"
        },
        // 在多入口时用于抽离公共模块
        splitChunks: {
            chunks: "all", // async 切割异步加载的模块 | all 所有 | initial 初始化的模块
            minSize: 1000, // 模块的最小体积
            minChunks: 1, // 模块的最小被引用次数
            maxAsyncRequests: 5, // 按需加载的最大并行请求数
            maxInitialRequests: 3, // 一个入口最大并行请求数
            automaticNameDelimiter: '~', // 文件名的连接符
            name: 'manifest',
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