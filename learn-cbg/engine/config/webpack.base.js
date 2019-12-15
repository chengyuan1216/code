const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const vueLoaderConfig = require('./vue-loader.conf') // vue-loader的配置对象
const VueLoaderPlugin = require('vue-loader/lib/plugin') // 使用vue-loader时需要配合vue-template-compiler和VueLoaderPlugin

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
          '@': resolve('src'),
          'echarts': resolve('static/echarts.js')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader'
                }
            },
            {
                test: /\.(css|scss)$/, // 解析css文件
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            // 加载文件可以是图片、字体等文件
            // webpack内置了支持加载json文件
            {
                test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        // 定义html模板，自动将打包的js文件加入到html文件
        // new HtmlWebpackPlugin({
        //     filename: './index.html',
        //     template: './client/index.html',
        //     inject: true
        // }),
        // 设置全局变量
        // 这里将jquery设置为全局变量， 就不在使用jquery的模块内部再通过import引入了。
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery'
        // }),
        new VueLoaderPlugin()
    ]
}