
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const {resolve} = require('./util')


module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test:/\.vue$/,
                loader: [
                    'vue-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".json", ".vue", ".css"],
        alias: {
            '@': resolve('src')
        }
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}