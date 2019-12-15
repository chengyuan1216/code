const Sql = require('./Sql.js')
/**
 * 用户
 */
module.exports = class UserDao extends Sql {
	constructor() {
		super('user')
	}
}
