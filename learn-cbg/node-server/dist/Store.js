"use strict";

var Application = null;
var controllers = {};
var services = {};

module.exports.setApplication = function (app) {
  Application = app;
};

module.exports.getApplication = function (_) {
  return Application;
};

module.exports.setControllers = function (c) {
  controllers = c;
};

module.exports.getControllers = function (_) {
  return controllers;
};

module.exports.addController = function (c) {
  controllers[c.name] = c;
};

module.exports.setServices = function (s) {
  services = s;
};

module.exports.getServices = function (_) {
  return services;
};

module.exports.addService = function (c) {
  services[c.name] = c;
};