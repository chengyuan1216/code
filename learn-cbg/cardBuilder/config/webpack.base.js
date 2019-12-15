const path = require('path')
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
                test: /\.css$/, // 解析css文件
                use: [
                    'style-loader',
                    'css-loader'
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
        new VueLoaderPlugin()
    ]
}