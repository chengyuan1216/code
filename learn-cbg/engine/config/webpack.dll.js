const path = require('path')
const webpack = require('webpack')
const ora = require('ora')
const chalk = require('chalk')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const config = {
  entry: {
    vendor: [
        'vue/dist/vue.esm.js',
        'vue-router',
        'vuex',
        'axios',
        path.resolve(__dirname, '../static/echarts.js') //提前打包一些基本不怎么修改的文件
    ]
  },
  output: {
    path: path.join(__dirname, '../client/public'),
    filename: '[name].js', //打包文件的名字
    library: '[name]_library' //可选 暴露出的全局变量名
    // vendor.dll.js中暴露出的全局变量名。
    // 主要是给DllPlugin中的name使用，
    // 故这里需要和webpack.DllPlugin中的`name: '[name]_library',`保持一致。
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      path: path.join(__dirname, '../client/public', '[name]-manifest.json'), //生成上文说到清单文件，放在当前build文件下面，这个看你自己想放哪里了。
      name: '[name]_library'
    })
  ]
}


const spinner = ora(chalk.yellow('dll building...'))
spinner.start()

webpack(config).run(function(err, stats) {
    spinner.stop()
    if (err) {
        console.log(chalk.red('npm run dll 失败'))
    } else {
        console.log(chalk.green('npm run dll 成功'))
    }
})