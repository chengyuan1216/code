const merge = require('webpack-merge')
const config = require('./webpack.base')
const {resolve} = require('./util')

module.exports = merge(config, {
    entry: {
        server: resolve('src/entry-server.js')
    },
    devtool: 'inline-source-map',
    output: {
        path: resolve('dist'),
        filename: '[name].js',
        libraryTarget: "commonjs"
    },
    plugins: [
    ]
})