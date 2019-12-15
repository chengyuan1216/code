"use strict";

var path = require('path');

var fs = require('fs');

var context = {
  api: {},
  service: {},
  dao: {}
}; // 动态加载文件

function dynamicRequrie(path) {
  var map = {};

  if (fs.existsSync(path)) {
    var childs = fs.readdirSync(path);
    childs.forEach(childName => {
      var info = fs.statSync(path + "/" + childName);

      if (!info.isDirectory()) {
        var result = /(\S+)\.(js|ts)$/.exec(childName);

        if (result && result[1] !== 'index') {
          map[result[1]] = require(path + '/' + childName);
        }
      }
    });
  }

  return map;
}

function inject(constructor, instance) {
  if (constructor.inject) {
    constructor.inject.forEach(injectName => {
      Object.defineProperty(instance, injectName, {
        get() {
          return context.dao[injectName] || context.service[injectName] || context.api[injectName];
        }

      });
    });
  }
}

function registerDao(app) {
  var daoMap = dynamicRequrie(path.resolve(__dirname, './dao'));
  Object.keys(daoMap).forEach(daoName => {
    context.dao[daoName] = new daoMap[daoName]();
  });
}

function registerService(app) {
  var serviceMap = dynamicRequrie(path.resolve(__dirname, './service'));
  Object.keys(serviceMap).forEach(serviceName => {
    var ServiceConstructor = serviceMap[serviceName];
    context.service[serviceName] = new ServiceConstructor();
    inject(ServiceConstructor, context.service[serviceName]);
  });
}

function registerApiRouter(app) {
  var apiMap = dynamicRequrie(path.resolve(__dirname, './api'));
  Object.keys(apiMap).map(apiName => {
    var ApiConstructor = apiMap[apiName];
    var apiInstance = new ApiConstructor();
    inject(ApiConstructor, apiInstance);
    Object.getOwnPropertyNames(ApiConstructor.prototype).map(key => {
      if (apiInstance[key].requestMethod) {
        var {
          requestUrl,
          requestMethod,
          middleWare
        } = apiInstance[key];
        middleWare = middleWare || [];
        middleWare.push(apiInstance[key]);
        var middleWares = [];
        middleWare.forEach(fn => {
          middleWares.push((req, res, next) => {
            fn.call(apiInstance, req, res, next);
          });
        });
        app[requestMethod](requestUrl, ...middleWares);
      }
    });
  });
}

function registerStaticFileRouter(app) {
  app.use(app.get('express').static(path.resolve(__dirname, '../static')));
  app.use('/card', app.get('express').static(path.resolve(__dirname, '../cards')));
}

var dispatchServlet = {
  init: app => {
    app.context = context;
    registerService(app);
    registerApiRouter(app);
    registerDao(app);
    registerStaticFileRouter(app);
  }
};
module.exports = dispatchServlet;