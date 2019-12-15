const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('../config/webpack.prod');
const compiler = webpack(config);

/**
 * 启动 express 服务器， 来访问webpack-dev-middleware生成的保存在内存中的资源
 * 虽然webpack-dev-middleware会监听文件的变化，
 * 但是修改文件后还是得刷新浏览器， 因为express服务并不知道文件发生了变化。
 */
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.listen(3000, function () {
  console.log('服务已启动，访问地址： localhost:3000!\n');
});