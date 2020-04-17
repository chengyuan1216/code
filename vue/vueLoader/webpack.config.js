const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
module.exports = {
    mode: 'development',
    entry: {
        app: './src/index'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: path.resolve(__dirname, './loader/vue-loader'),
                // options: {
                //     loaders: {
                //         // permission: path.resolve(__dirname, './permission-loader.js')
                //     },
                //     cssSourceMap: false,
                //     cacheBusting: false,
                //     transformToRequire: {
                //     video: ['src', 'poster'],
                //     source: 'src',
                //     img: 'src',
                //     image: 'xlink:href'
                //     }
                // }
            },
            {
                resourceQuery: /blockType=permission/,
                type: 'javascript/auto',
                loader: path.resolve(__dirname, './loader/permission-loader')
            },
            {
                resourceQuery: /blockType=i18n/,
                type: 'javascript/auto',
                loader: '@kazupon/vue-i18n-loader',
            },
        ]
    },
    plugins: [
        // 请确保引入这个插件！
        new VueLoaderPlugin()
    ]
}