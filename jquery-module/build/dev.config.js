const webpack = require('webpack')
const {getEntry, log} = require('./util')
const merge = require('webpack-merge')
const webpackDevServer = require('webpack-dev-server')

const webpackConfig = require('./webpack.config.js')

server(webpackConfig)

function server(config) {
  // 注意： webpackDevServer 需要配合 HotModuleReplacementPlugin 使用
  config = merge(config, {
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]
  })
  let compiler = webpack(config)
  let options = {
    contentBase: './dist',
    hot: true,
    host: 'localhost'
  }
  webpackDevServer.addDevServerEntrypoints(config, options)
  let  server = new webpackDevServer(compiler, options)
  server.listen(8888, function(error) {
    if (!error) {
      log('dev server', 'localhost:8888')
    }
  })
}