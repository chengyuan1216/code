const webpack = require('webpack')
const {getEntry, log} = require('./util')
const merge = require('webpack-merge')
const webpackDevServer = require('webpack-dev-server')

const webpackConfig = require('./webpack.config.js')

watch(webpackConfig)

function watch(config) {
  let compiler = webpack(config)
  // 监听文件
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
}