const merge = require('webpack-merge')
const config = require('./webpack.base')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const {resolve} = require('./util')

module.exports = merge(config, {
    target: 'node',
    entry: {
        server: resolve('src/entry-server.js'),
    },
    devtool: 'inline-source-map',
    output: {
        path: resolve('dist'),
        filename: '[name].js',
        libraryTarget: 'commonjs2',
        publicPath: '/dist/'
    },
    plugins: [
        new VueSSRServerPlugin()
    ]
})