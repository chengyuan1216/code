const { Controller, Get, Post, MiddleWare, Inject } = require('../anotation/index.js')
const multer = require('multer')
const fs = require('fs')
const upload = multer({dest: 'cards/'})
const Response = require('../dto/Response.js')
const moment = require('moment')

@Controller('/api')
@Inject(['CardService'])
class UploadApi {
	constructor() {}

	@Get('/api/card/list')
	list(req, res){
		this.CardService.list(req, res)
	}

	@Post('/api/card/upload')
	@MiddleWare([upload.single('file')])
	uploadCard(req, res) {
		let file = req.file;
		if (file) {
			let fileNameArr = file.originalname.split('.')
			let suffix = fileNameArr[fileNameArr.length - 1]
			fs.renameSync('./cards/' + file.filename, `./cards/${file.filename}.${suffix}`)
			file['newfilename'] = `${file.filename}.${suffix}`
			let originalFileName = file.originalname.replace(/.\w+$/, '')
			let time = moment().format('YYYY-MM-DD HH:mm:ss')
			this.CardService.add({
				name: originalFileName,
				src: `/${file.filename}.js`,
				create_date: time,
				update_date: time
			}).then(() => {
				Response.success(res, {
					"fileName": file['newfilename']
				})
			})
		} else {
			Response.error(res)
		}
	}
}	

module.exports = UploadApi