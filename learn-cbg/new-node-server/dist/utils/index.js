"use strict";

var url = require('url'); // 解析请求参数


var path = require('path');

var fs = require('fs'); // 读取本地文件
// 获取静态资源


module.exports.getFile = filepath => {
  // 同步获取资源
  // __dirname，其值就是当前运行文件的绝对路径
  var localPath = path.resolve(__dirname, '../../') + '\\static\\' + filepath; //console.log(`访问的文件路径是：${localPath}`)

  return fs.readFileSync(localPath);
}; // 获取 GET 请求参数


module.exports.getGetParameters = req => {
  // url.parse 方法可以将一个 URL 路径解析为一个方便操作的对象
  // 将第二个可选参数指定为 true， 表示将结果中的 query 解析为一个对象
  var parseObj = url.parse(req.url, true);
  console.log('请求参数', parseObj); // Logger.info(`GET 请求`)
  // Logger.info(`search ==> ${parseObj.search}`)
  // Logger.info(`query ==> ${JSON.stringify(parseObj.query)}`)
  // Logger.info(`pathname ==> ${parseObj.pathname}`)
  // Logger.info(`path ==> ${parseObj.path}`)
  // Logger.info(`href ==> ${parseObj.href}`)

  return parseObj;
};