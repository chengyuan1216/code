const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const config = require('./webpack.base')
const {resolve} = require('./util')

module.exports = merge(config, {
    entry: {
        app: resolve('src/entry-client.js')
    },
    output: {
        path: resolve('dist'),
        filename: '[name].js',
        publicPath: '/dist/'
    },
    devServer: {
        proxy: {},
        contentBase: resolve('public'), // boolean | string | array, static file location
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, // true for self-signed, object for cert authority
        noInfo: false, // only errors & warns on hot reload
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve('index.html'),
            filename: 'index.html'
        }),
        new VueSSRClientPlugin()
    ]
})