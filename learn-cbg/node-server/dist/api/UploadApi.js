"use strict";

// const { Controller, Get, Post } = require('../anotation/index.js')
var multer = require('multer');

var fs = require('fs');

var upload = multer({
  dest: 'cards/'
}); // const Response = require('../dto/Response.js')
// const CardService = require('../service/CardService.js')

var moment = require('moment'); // @Controller()
// class UploadApi {
// 	constructor() {
// 		this.card = new CardService()
// 	}
// 	// 如果使用多个中间件则返回一个数组
// 	@Post('/api/card/upload', true)
// 	uploadCard() {
// 		return [ upload.single('file'), '_uploadCard']
// 	}
// 	@Get('/api/card/list')
// 	list(req, res){
// 		this.card.list(req, res)
// 	}
// 	_uploadCard(req, res, next) {
// 		let file = req.file;
// 		if (file) {
// 			let fileNameArr = file.originalname.split('.')
// 			let suffix = fileNameArr[fileNameArr.length - 1]
// 			//文件重命名
// 			fs.renameSync('./cards/' + file.filename, `./cards/${file.filename}.${suffix}`)
// 			file['newfilename'] = `${file.filename}.${suffix}`
// 			let originalFileName = file.originalname.replace(/.\w+$/, '')
// 			let time = moment().format('YYYY-MM-DD HH:mm:ss')
// 			this.card.add({
// 				name: originalFileName,
// 				src: `/${file.filename}.js`,
// 				create_date: time,
// 				update_date: time
// 			}).then(() => {
// 				Response.success(res, {
// 					"fileName": file['newfilename']
// 				})
// 			})
// 		} else {
// 			Response.error(res)
// 		}
// 	}
// }	


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