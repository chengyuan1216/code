const SuperService = require('./SuperService.js')
const { Inject } = require('../anotation/index.js')

@Inject(['StudentDao'])
class StudentService extends SuperService {
	constructor() {
		super()
	}

	async selectOne(id){
		return await this.StudentDao.selectById(id)
	}

	async deleteOne(id){
		return await this.StudentDao.deleteById(id)
	}

	async list(query) {
		return await this.StudentDao.list(query)
	}
}

module.exports = StudentService