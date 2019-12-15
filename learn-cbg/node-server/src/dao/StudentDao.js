const SuperDao = require('./SuperDao.js')

module.exports = class StudentDao extends SuperDao {
	constructor() {
		super('student')
	}
}
