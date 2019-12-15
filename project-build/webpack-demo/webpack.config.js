const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin 
const webpack = require('webpack');

module.exports = {
    mode: 'development', // 设置为'development' 后代码不会压缩
    devtool: 'inline-source-map',
    entry: { // 定义多个入口
        app: './src/index.js',
        // component: './src/component.js'
    },
    output: {
        filename: '[name].bundle.js', // 此时输出的文件名应该也是动态的
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/' // 设置的值会影响index.html内引入js的路径
    },
    devServer: {
        port: 8888,
        contentBase: '/dist',// 告诉服务器从哪里查找文件
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/, // 加载样式文件
                use: [
                    'style-loader',
                    'css-loader'
                ]
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
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}