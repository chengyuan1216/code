"use strict";

var path = require('path');

var Response = require('./dto/Response.js');

var apiList = require('./api/index.js');

var serviceMap = require('./service/index.js');

var daoMap = require('./dao/index.js');

var context = {};

var registerDao = function registerDao(context) {
  context.dao = {};
  Object.keys(daoMap).forEach(function (dao) {
    context.dao[dao] = new daoMap[dao]();
  });
};

var registerService = function registerService(context) {
  context.service = {};
  Object.keys(serviceMap).forEach(function (service) {
    context.service[service] = new (serviceMap[service](context))();
  });
}; // api 访问


var registerApiRouter = function registerApiRouter(context) {
  apiList.map(function (api) {
    api(context);
  });
}; // 静态文件访问


var registerStaticFileRouter = function registerStaticFileRouter(app) {
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
  app.use(app.get('express')["static"](path.resolve(__dirname, '../static')));
  app.use('/card', app.get('express')["static"](path.resolve(__dirname, '../cards')));
};

var dispatchServlet = {
  initRouter: function initRouter(app) {
    context.app = app;
    context.Response = Response;
    registerDao(context);
    registerService(context);
    registerApiRouter(context);
    registerStaticFileRouter(app);
  }
};
module.exports = dispatchServlet;