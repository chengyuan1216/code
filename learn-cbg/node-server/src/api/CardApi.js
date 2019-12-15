const multer = require('multer')
const fs = require('fs')
const upload = multer({dest: 'cards/'})
const moment = require('moment')

module.exports = context => {
	const { app, service } = context
	const { CardService } = service

	app.get('/api/card/list', (req, res) => {
		CardService.list(req, res)
	})

	app.post('/api/card/upload', upload.single('file'), (req, res) => {
		let file = req.file;
		if (file) {
			let fileNameArr = file.originalname.split('.')
			let suffix = fileNameArr[fileNameArr.length - 1]
			//文件重命名
			fs.renameSync('./cards/' + file.filename, `./cards/${file.filename}.${suffix}`)
			file['newfilename'] = `${file.filename}.${suffix}`
			let originalFileName = file.originalname.replace(/.\w+$/, '')
			let time = moment().format('YYYY-MM-DD HH:mm:ss')
			CardService.add({
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
	})
}