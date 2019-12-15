"use strict";

module.exports = function (context) {
  var app = context.app,
      service = context.service;
  var UserService = service.UserService;
  app.post('/api/user/register', function (req, res) {
    UserService.add(req, res);
  });
  app.post('/api/user/login', function (req, res) {
    UserService.login(req, res);
  });
};