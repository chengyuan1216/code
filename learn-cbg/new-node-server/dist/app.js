"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
}); // 系统模块

var express_1 = __importDefault(require("express"));

var context_1 = __importDefault(require("./context"));

var mysql_js_1 = __importDefault(require("./config/mysql.js"));

var env_1 = __importDefault(require("./config/env"));

var bodyParser = require('body-parser'); //日志


var log4js = require("log4js");

var log4js_config = require("../log4js.json");

log4js.configure(log4js_config);
var Logger = log4js.getLogger();
var app = express_1.default();
app.set('express', express_1.default); //设置允许跨域访问该服务.

app.all(['*.js', '*.html', '*.css'], function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  next();
}); // 请求体

app.use(bodyParser.json());
context_1.default.init(app);
mysql_js_1.default.init();
app.listen(env_1.default.port, function () {
  console.log("\u670D\u52A1\u542F\u52A8\u6210\u529F ==> http://" + env_1.default.hostname + ":" + env_1.default.port + "/");
});