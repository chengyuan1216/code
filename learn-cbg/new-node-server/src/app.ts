// 系统模块
const express = require('express');
const context = require("./context.js")
const mysql = require("./config/mysql.js")
const env = require('./config/env.js')
const bodyParser = require('body-parser')

//日志
const log4js = require("log4js");
const log4js_config = require("../log4js.json");
log4js.configure(log4js_config)
const Logger = log4js.getLogger()

const app = express()
app.set('express', express)

//设置允许跨域访问该服务.
app.all(['*.js', '*.html', '*.css'], function (req: any, res: any, next: any) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Headers', 'Content-Type')
	res.header('Access-Control-Allow-Methods', '*')
	next()
})

// 请求体
app.use(bodyParser.json())

context.init(app)
mysql.init()

app.listen(env.port, () => {
	console.log(`服务启动成功 ==> http://${env.hostname}:${env.port}/`)
})