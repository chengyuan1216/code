const webpack = require('webpack')
const path = require('path')
const fs = require('fs')
const chalk = require('chalk')
const {getEntry, log} = require('./util')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
 
let args = require('minimist')(process.argv.slice(2), {})
log('args', args)

const [entry, htmlTemplatePlugin] = getEntry()
log('entry', Object.keys(entry))

let config = {
  // 模式
  mode: 'development',
  // source map
  devtool: 'inline-source-map',
  // 入口
  entry: {
    ...entry
  },
  // 输出
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name].js'
  },
  resolve: {
    // 别名
    alias: {
      '@': path.resolve(process.cwd(), 'src')
    }
  },

  module: {
    rules: [
      {
        test: /.ejs$/,
        loader: ['ejs-loader']
      },
      {
        test: /.css$/,
        loader:[
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    ...htmlTemplatePlugin
  ]
}

const compiler = webpack(config)


if (args.watch) {
  compiler.watch({
      aggregateTimeout: 1000, // 将多个更改聚合到单个重构建(rebuild)
      poll: true,
      poll: 500, // 间隔单位 ms
    },
    function (err,stats) {
      if (!(err || stats.hasErrors())) {
        log('watch', 'build success.')
      }
  })
} else {
  compiler.run(function (err,stats) {
    if (!(err || stats.hasErrors())) {
      log('build', 'build success.')
    }
  })
}
