const { Get, Inject } = require('../anotation/index.js')
const Response = require('../dto/Response.js')

@Inject(['StudentService', 'CardService'])
class StudentApi {
	constructor() {
	}

	@Get('/api/getOne')
	async getOne(req, res){
		if (!req.query.id) {
			Response.exception(res, 'id不能为空')
		} else {
			let reault = await this.StudentService.selectOne(req.query.id)
			Response.success(res, reault)
		}
	}

	@Get('/api/deleteOne')
	async deleteOne(req, res){
		if (!req.query.id) {
			Response.exception(res, 'id不能为空')
		} else {
			let result = await this.StudentService.deleteOne(req.query.id)
			Response.success(res, result)
		}
	}

	@Get('/api/list')
	async list(req, res){
		let result = await this.StudentService.list(req.query)
		Response.success(res, result)
	}

	@Get('/api/student/card_list')
	async cardList(req, res){
		this.CardService.list(req, res)
	}
}	

module.exports = StudentApi