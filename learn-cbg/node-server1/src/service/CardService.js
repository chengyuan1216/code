const CardDao = require('../dao/CardDao.js')
const Response = require('../dto/Response.js')
const SuperService = require('./SuperService.js')
const { Inject } = require('../anotation/index.js')

@Inject(['CardDao'])
class StudentService extends SuperService {
	constructor() {
		super()
	}

	selectOne(req, res){
		if (!req.query.id) {
			Response.exception(res, 'id不能为空')
		} else {
			this.CardDao.selectById(req.query.id).then(data => {
		    	Response.success(res, data)
			}).catch(err => {
				console.error('service层捕获异常', err)
			})
		}
	}

	deleteOne(req, res){
		if (!req.query.id) {
			Response.exception(res, 'id不能为空')
		} else {
			this.CardDao.deleteById(req.query.id).then(data => {
		    	Response.success(res, data)
			}).catch(err => {
				console.error('service层捕获异常', err)
			})
		}
	}

	add(row) {
		return this.CardDao.add(row)
	}

	async list(req, res) {
		let result = await this.CardDao.list(req.query)
		Response.success(res, result)
	}
}

module.exports = StudentService