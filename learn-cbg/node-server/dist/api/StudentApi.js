"use strict";

module.exports = function (context) {
  var app = context.app,
      service = context.service;
  var StudentService = service.StudentService;
  app.get('/api/getOne', function (req, res) {
    StudentService.selectOne(req, res);
  });
  app.get('/api/deleteOne', function (req, res) {
    StudentService.deleteOne(req, res);
  });
  app.get('/api/list', function (req, res) {
    StudentService.list(req, res);
  });
};