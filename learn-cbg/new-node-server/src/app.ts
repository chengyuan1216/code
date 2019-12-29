/// <reference path="./types/log.d.ts"/>
// 系统模块
import express, { Application, Request, Response, NextFunction } from 'express'
import context from './context'
import mysql from './config/mysql.js'
import env from './config/env'
import Logger from './utils/log'
const bodyParser = require('body-parser')


//日志
// const log4js = require("log4js");
// const log4js_config = require("../log4js.json");
// log4js.configure(log4js_config)
// const Logger = log4js.getLogger()

const app: Application = express()
app.set('express', express)

//设置允许跨域访问该服务.
app.all(['*.js', '*.html', '*.css'], function (req: Request, res: Response, next: NextFunction) {
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
	(Logger as ILogger).success(`服务启动成功 ==> http://${env.hostname}:${env.port}/`)
})