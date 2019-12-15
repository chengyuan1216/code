import path from 'path'
import fs from 'fs'
import { Application, Request, Response } from 'express'

type contextMap = {
	[key: string]: Object
}

const context: any = {
	api: {},
	service: {},
	dao: {}
}

// 动态加载文件
function dynamicRequrie(path: string) {
	let map: contextMap = {}
	if (fs.existsSync(path)) {
		let childs = fs.readdirSync(path)
		childs.forEach(childName => {
			let info = fs.statSync(path + "/" + childName)
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

function inject(constructor: any, instance: any) {
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

function registerDao(app: Application) {
	let daoMap: any = dynamicRequrie(path.resolve(__dirname, './dao'))
	Object.keys(daoMap).forEach(daoName => {
		context.dao[daoName] = new daoMap[daoName]()
	})
}

function registerService(app: Application) {
	let serviceMap = dynamicRequrie(path.resolve(__dirname, './service'))
	Object.keys(serviceMap).forEach(serviceName => {
		let ServiceConstructor: any = serviceMap[serviceName]
		context.service[serviceName] = new ServiceConstructor()
		inject(ServiceConstructor, context.service[serviceName])
	})
}

function registerApiRouter(app: any) {
	let apiMap = dynamicRequrie(path.resolve(__dirname, './api'))
	Object.keys(apiMap).map(apiName => {
		let ApiConstructor: any = apiMap[apiName]
		let apiInstance = new ApiConstructor()

		inject(ApiConstructor, apiInstance)

		Object.getOwnPropertyNames(ApiConstructor.prototype).map(key => {
			if (apiInstance[key].requestMethod) {
				let { requestUrl, requestMethod, middleWare } = apiInstance[key]
				middleWare = middleWare || []
				middleWare.push(apiInstance[key])
				let middleWares: any = []
				middleWare.forEach((fn: Function) => {
					middleWares.push((req: Request, res: Response, next: Function) => {
						fn.call(apiInstance, req, res, next)
					})
				})
				app[requestMethod](requestUrl, ...middleWares)
			}
		})
	})
}

function registerStaticFileRouter(app: any) {
	app.use(app.get('express').static(path.resolve(__dirname, '../static')))
	app.use('/card', app.get('express').static(path.resolve(__dirname, '../cards')))
}

type Context = {
	init(app: any): void
}

let Context: Context = {
	init: (app: any) => {
		app.context = context
		registerService(app)
		registerApiRouter(app)
		registerDao(app)
		registerStaticFileRouter(app)
	}
}

class AppContext {
	private controller: contextMap
	private service: contextMap
	private dao: contextMap
	public static init: any

	constructor() {
		this.controller = {}
		this.service = {}
		this.dao = {}
	}

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
}

export default Context