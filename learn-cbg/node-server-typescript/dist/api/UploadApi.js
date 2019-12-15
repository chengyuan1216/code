"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2;

const {
  Controller,
  Get,
  Post,
  MiddleWare,
  Inject
} = require('../anotation/index.js');

const multer = require('multer');

const fs = require('fs');

const upload = multer({
  dest: 'cards/'
});

const Response = require('../dto/Response.js');

const moment = require('moment');

let UploadApi = (_dec = Controller('/api'), _dec2 = Inject(['CardService']), _dec3 = Get('/api/card/list'), _dec4 = Post('/api/card/upload'), _dec5 = MiddleWare([upload.single('file')]), _dec(_class = _dec2(_class = (_class2 = class UploadApi {
  constructor() {}

  list(req, res) {
    this.CardService.list(req, res);
  }

  uploadCard(req, res) {
    let file = req.file;

    if (file) {
      let fileNameArr = file.originalname.split('.');
      let suffix = fileNameArr[fileNameArr.length - 1];
      fs.renameSync('./cards/' + file.filename, "./cards/".concat(file.filename, ".").concat(suffix));
      file['newfilename'] = "".concat(file.filename, ".").concat(suffix);
      let originalFileName = file.originalname.replace(/.\w+$/, '');
      let time = moment().format('YYYY-MM-DD HH:mm:ss');
      this.CardService.add({
        name: originalFileName,
        src: "/".concat(file.filename, ".js"),
        create_date: time,
        update_date: time
      }).then(() => {
        Response.success(res, {
          "fileName": file['newfilename']
        });
      });
    } else {
      Response.error(res);
    }
  }

}, ((0, _applyDecoratedDescriptor2.default)(_class2.prototype, "list", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "list"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "uploadCard", [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "uploadCard"), _class2.prototype)), _class2)) || _class) || _class);
module.exports = UploadApi;