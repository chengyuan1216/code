"use strict";

var multer = require('multer');

var fs = require('fs');

var upload = multer({
  dest: 'cards/'
});

var moment = require('moment');

module.exports = function (context) {
  var app = context.app,
      service = context.service;
  var CardService = service.CardService;
  app.get('/api/card/list', function (req, res) {
    CardService.list(req, res);
  });
  app.post('/api/card/upload', upload.single('file'), function (req, res) {
    var file = req.file;

    if (file) {
      var fileNameArr = file.originalname.split('.');
      var suffix = fileNameArr[fileNameArr.length - 1]; //文件重命名

      fs.renameSync('./cards/' + file.filename, "./cards/".concat(file.filename, ".").concat(suffix));
      file['newfilename'] = "".concat(file.filename, ".").concat(suffix);
      var originalFileName = file.originalname.replace(/.\w+$/, '');
      var time = moment().format('YYYY-MM-DD HH:mm:ss');
      CardService.add({
        name: originalFileName,
        src: "/".concat(file.filename, ".js"),
        create_date: time,
        update_date: time
      }).then(function () {
        Response.success(res, {
          "fileName": file['newfilename']
        });
      });
    } else {
      Response.error(res);
    }
  });
};