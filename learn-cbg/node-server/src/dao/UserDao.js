const SuperDao = require('./SuperDao.js')
/**
 * 用户
 */
module.exports = class UserDao extends SuperDao {
	constructor() {
		super('user')
	}
}
