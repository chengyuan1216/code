const webpackDevConfig = require('./webpack.dev')
delete webpackDevConfig.output.publicPath
console.log('webpack.watch.js')
module.exports = webpackDevConfig