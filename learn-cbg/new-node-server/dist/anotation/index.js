"use strict";

var GlobalConst = require("../const/global.js"); // service层注解


module.exports.Service = serviceName => {
  return function (target) {};
}; // api层注解


module.exports.Controller = serviceName => {
  return function (target) {};
}; // Get请求


module.exports.Get = url => {
  return function (target, name, descriptor) {
    descriptor.value.requestMethod = GlobalConst.RequestMethod.GET;
    descriptor.value.requestUrl = url;
  };
}; // POST请求


module.exports.Post = url => {
  return function (target, name, descriptor) {
    descriptor.value.requestMethod = GlobalConst.RequestMethod.POST;
    descriptor.value.requestUrl = url;
  };
};

module.exports.MiddleWare = MiddleWareList => {
  return function (target, name, descriptor) {
    descriptor.value.middleWare = MiddleWareList;
  };
}; // module.exports.Request = () => {
// 	return function(req) {
// 		return req
// 	}
// }


module.exports.Inject = inject => {
  return function (target) {
    target.inject = inject;
  };
};