const webpack = require('webpack')
const {getEntry, log} = require('./util')
const merge = require('webpack-merge')
const webpackDevServer = require('webpack-dev-server')
const express = require('express')
const devMiddleware = require('webpack-dev-middleware')

const webpackConfig = require('./webpack.config.js')

run(webpackConfig)

function run(config) {
  // TODO 修改样式热重载不起作用
  Object.keys(config.entry).forEach(key => {
    config.entry[key] = [
      // 'webpack-dev-server/client/index.js?http://localhost:8888',
      'webpack/hot/dev-server.js',
      config.entry[key]
    ]
  })
  log('entry', config.entry)

  config = merge(config, {
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]
  })
  let compiler = webpack(config)
  const app = express()
  app.use(devMiddleware(compiler, {
    // 本地静态资源
    contentBase: './dist',
    // port: 8888,
    // 代理请求
    proxy: {

    },
    // enable gzip compression
    compress: false,
    // TODO
    historyApiFallback: true,
    // 热重载
    hot: true, 
    // true for self-signed, object for cert authority
    https: false, 
    // only errors & warns on hot reload
    noInfo: true
  }))

  app.listen(8888, function(error) {
    if (!error) {
      log('dev server', 'localhost:8888')
    }
  })
}