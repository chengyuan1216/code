const path = require('path')
const Response = require('./dto/Response.js')
const apiList = require('./api/index.js')
const serviceMap = require('./service/index.js')
const daoMap = require('./dao/index.js')

const context = {}

const registerDao = context => {
	context.dao = {}
	Object.keys(daoMap).forEach(dao => {
		context.dao[dao] = new daoMap[dao]()
	})
}

const registerService = context => {
	context.service = {}
	Object.keys(serviceMap).forEach(service => {
		context.service[service] = new (serviceMap[service](context))()
	})
}

const registerApiRouter = context => {
	apiList.map(api => {
		api(context)
	})
}

const registerStaticFileRouter = app => {
	// const options = {
	// 	dotfiles: 'ignore',
	// 	etag: false,
	// 	extensions: ['html', 'css', 'js'],
	// 	index: false,
	// 	maxAge: '1d',
	// 	redirect: false,
	// 	setHeaders: function (res, path, stat) {
	// 	  res.set('x-timestamp', Date.now())
	// 	}
	// }
	app.use(app.get('express').static(path.resolve(__dirname, '../static')))
	app.use('/card', app.get('express').static(path.resolve(__dirname, '../cards')))
}


module.exports = {
	init: app => {
		context.app = app
		context.Response = Response
		registerDao(context)
		registerService(context)
		registerApiRouter(context)
		registerStaticFileRouter(app)
	}
}