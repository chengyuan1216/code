const webpack = require('webpack')
const {getEntry, log} = require('./util')
const webpackConfig = require('./webpack.config.js')

build(webpackConfig)
function build(config) {
    let compiler = webpack(config)
    compiler.run(function (err,stats) {
      if (!(err || stats.hasErrors())) {
        log('build', 'build success.')
      }
    })
}