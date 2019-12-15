import path from 'path'
import fs from 'fs'
import { Application, Request, Response } from 'express'

type contextMap = {
	[key: string]: any
}
class AppContext {
	private controller: contextMap
	private service: contextMap
	private dao: contextMap
	private app: Application
	public static init: (app: Application) => void

	constructor(app: Application) {
		this.controller = {}
		this.service = {}
		this.dao = {}
		this.app = app
	}


	getControllers() {
		return this.controller
	}

	// 动态引入文件
	dynamicRequrie(path: string) {
		let map: contextMap = {}
		if (fs.existsSync(path)) {
			let childs = fs.readdirSync(path)
			childs.forEach((childName: string) => {
				let info: fs.Stats = fs.statSync(path + "/" + childName)
				if (!info.isDirectory()) {
					let result = /(\S+)\.(js|ts)$/.exec(childName)
					if (result && result[1] !== 'index') {
						map[result[1]] = require(path + '/' + childName)
					}
				}
			})
		}
		return map
	}

	// 将依赖项注入
	inject(constructor: any, instance: any) {
		let context = this
		if (constructor.inject) {
			constructor.inject.forEach((injectName: any) => {
				Object.defineProperty(instance, injectName, {
					get() {
						return context.dao[injectName] || context.service[injectName] || context.api[injectName]
					}
				})
			})
		}
	}

	registerApiRouter() {
		let { app, inject, dynamicRequrie } = this
		let apiMap = dynamicRequrie(path.resolve(__dirname, './api'))
		Object.keys(apiMap).map(apiName => {
			let ApiConstructor: any = apiMap[apiName].default
			let apiInstance = new ApiConstructor()
			this.controller[apiName] = apiInstance

			// 注入依赖
			inject(ApiConstructor, apiInstance)

			// 注册路由
			Object.getOwnPropertyNames(ApiConstructor.prototype).map(key => {
				// 如果requestMethod不为空表示这是一个路由
				if (apiInstance[key].requestMethod) {
					let { requestUrl, requestMethod, middleWare } = apiInstance[key]
					middleWare = middleWare || []
					middleWare.push(apiInstance[key])
					let middleWares: any = []
					middleWare.forEach((fn: Function) => {
						middleWares.push((req: Request, res: Response, next: Function) => {
							fn.call(apiInstance, req, res, next)
						})
					});
					(app as any)[requestMethod](requestUrl, ...middleWares)
				}
			})
		})
	}


	// 静态文件路由
	registerStaticFileRouter() {
		let { app } = this
		app.use(app.get('express').static(path.resolve(__dirname, '../static')))
		app.use('/card', app.get('express').static(path.resolve(__dirname, '../cards')))
	}
}

AppContext.init = function (app: Application) {
	let appContext = new AppContext(app)
	// appContext.registerService(app)
	appContext.registerApiRouter()
	// appContext.registerDao(app)
	appContext.registerStaticFileRouter()
	console.log('controller', appContext.getControllers())
}

export default AppContext