// 系统模块
import express, { Express } from 'express'
import context from './context'
import mysql from './config/mysql'
import env from './config/env'
import bodyParser from 'body-parser'

const app: Express = express()
app.set('express', express)

app.use(bodyParser.json())

context.init(app)
mysql.init()

app.listen(env.port, () => {
	console.log(`服务启动成功 ==> http://${env.hostname}:${env.port}/`)
})