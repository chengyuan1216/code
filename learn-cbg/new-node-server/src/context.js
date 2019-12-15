const path = require('path')
const fs = require('fs')

const context = {
	api: {},
	service: {},
	dao: {}
}

// 动态加载文件
function dynamicRequrie(path) {
	let map = {}
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

function inject(constructor, instance) {
	if (constructor.inject) {
		constructor.inject.forEach(injectName => {
			Object.defineProperty(instance, injectName, {
				get() {
					return context.dao[injectName] || context.service[injectName] || context.api[injectName]
				}
			})
		})
	}
}

function registerDao(app) {
	let daoMap = dynamicRequrie(path.resolve(__dirname, './dao'))
	Object.keys(daoMap).forEach(daoName => {
		context.dao[daoName] = new daoMap[daoName]()
	})
}

function registerService(app) {
	let serviceMap = dynamicRequrie(path.resolve(__dirname, './service'))
	Object.keys(serviceMap).forEach(serviceName => {
		let ServiceConstructor = serviceMap[serviceName]
		context.service[serviceName] = new ServiceConstructor()
		inject(ServiceConstructor, context.service[serviceName])
	})
}

function registerApiRouter(app) {
	let apiMap = dynamicRequrie(path.resolve(__dirname, './api'))
	Object.keys(apiMap).map(apiName => {
		let ApiConstructor = apiMap[apiName]
		let apiInstance = new ApiConstructor()

		inject(ApiConstructor, apiInstance)

		Object.getOwnPropertyNames(ApiConstructor.prototype).map(key => {
			if (apiInstance[key].requestMethod) {
				let { requestUrl, requestMethod, middleWare } = apiInstance[key]
				middleWare = middleWare || []
				middleWare.push(apiInstance[key])
				let middleWares = []
				middleWare.forEach(fn => {
					middleWares.push((req, res, next) => {
						fn.call(apiInstance, req, res, next)
					})
				})
				app[requestMethod](requestUrl, ...middleWares)
			}
		})
	})
}

function registerStaticFileRouter(app) {
	app.use(app.get('express').static(path.resolve(__dirname, '../static')))
	app.use('/card', app.get('express').static(path.resolve(__dirname, '../cards')))
}

const dispatchServlet = {
	init: app => {
		app.context = context
		registerService(app)
		registerApiRouter(app)
		registerDao(app)
		registerStaticFileRouter(app)
	}
}

module.exports = dispatchServlet