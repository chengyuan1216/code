"use strict";

// 系统模块
var express = require('express');

var context = require("./context.js");

var mysql = require("./config/mysql.js");

var env = require('./config/env.js');

var bodyParser = require('body-parser'); //日志


var log4js = require("log4js");

var log4js_config = require("../log4js.json");

log4js.configure(log4js_config);
var Logger = log4js.getLogger();
var app = express();
app.set('express', express); //设置允许跨域访问该服务.

app.all(['*.js', '*.html', '*.css'], function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  next();
}); // 请求体

app.use(bodyParser.json());
context.init(app);
mysql.init();
app.listen(env.port, function () {
  console.log("\u670D\u52A1\u542F\u52A8\u6210\u529F ==> http://".concat(env.hostname, ":").concat(env.port, "/"));
});