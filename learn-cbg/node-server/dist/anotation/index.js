"use strict";

var GlobalConst = require("../const/global.js"); // service层注解


module.exports.Service = function (serviceName) {
  return function (target) {};
}; // api层注解


module.exports.Controller = function (serviceName) {
  return function (target) {};
}; // Get请求


module.exports.Get = function (url, hasMiddleWare) {
  return function (target, name, descriptor) {
    if (hasMiddleWare) {
      descriptor.value = descriptor.value();
    } else {
      descriptor.value = [descriptor.value];
    }

    descriptor.value.requestMethod = GlobalConst.RequestMethod.GET;
    descriptor.value.requestUrl = url;
  };
}; // POST请求


module.exports.Post = function (url, hasMiddleWare) {
  return function (target, name, descriptor) {
    if (hasMiddleWare) {
      descriptor.value = descriptor.value();
    } else {
      descriptor.value = [descriptor.value];
    }

    descriptor.value.requestMethod = GlobalConst.RequestMethod.POST;
    descriptor.value.requestUrl = url;
  };
};

module.exports.MiddleWare = function (MiddleWareName) {
  return function () {};
};