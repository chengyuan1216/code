"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var context = {
    api: {},
    service: {},
    dao: {}
};
// 动态加载文件
function dynamicRequrie(path) {
    var map = {};
    if (fs_1.default.existsSync(path)) {
        var childs = fs_1.default.readdirSync(path);
        childs.forEach(function (childName) {
            var info = fs_1.default.statSync(path + "/" + childName);
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
        constructor.inject.forEach(function (injectName) {
            Object.defineProperty(instance, injectName, {
                get: function () {
                    return context.dao[injectName] || context.service[injectName] || context.api[injectName];
                }
            });
        });
    }
}
function registerDao(app) {
    var daoMap = dynamicRequrie(path_1.default.resolve(__dirname, './dao'));
    Object.keys(daoMap).forEach(function (daoName) {
        context.dao[daoName] = new daoMap[daoName]();
    });
}
function registerService(app) {
    var serviceMap = dynamicRequrie(path_1.default.resolve(__dirname, './service'));
    Object.keys(serviceMap).forEach(function (serviceName) {
        var ServiceConstructor = serviceMap[serviceName];
        context.service[serviceName] = new ServiceConstructor();
        inject(ServiceConstructor, context.service[serviceName]);
    });
}
function registerApiRouter(app) {
    var apiMap = dynamicRequrie(path_1.default.resolve(__dirname, './api'));
    Object.keys(apiMap).map(function (apiName) {
        var ApiConstructor = apiMap[apiName];
        var apiInstance = new ApiConstructor();
        inject(ApiConstructor, apiInstance);
        Object.getOwnPropertyNames(ApiConstructor.prototype).map(function (key) {
            if (apiInstance[key].requestMethod) {
                var _a = apiInstance[key], requestUrl = _a.requestUrl, requestMethod = _a.requestMethod, middleWare = _a.middleWare;
                middleWare = middleWare || [];
                middleWare.push(apiInstance[key]);
                var middleWares_1 = [];
                middleWare.forEach(function (fn) {
                    middleWares_1.push(function (req, res, next) {
                        fn.call(apiInstance, req, res, next);
                    });
                });
                app[requestMethod].apply(app, __spreadArrays([requestUrl], middleWares_1));
            }
        });
    });
}
function registerStaticFileRouter(app) {
    app.use(app.get('express').static(path_1.default.resolve(__dirname, '../static')));
    app.use('/card', app.get('express').static(path_1.default.resolve(__dirname, '../cards')));
}
var Context = {
    init: function (app) {
        app.context = context;
        registerService(app);
        registerApiRouter(app);
        registerDao(app);
        registerStaticFileRouter(app);
    }
};
exports.default = Context;
