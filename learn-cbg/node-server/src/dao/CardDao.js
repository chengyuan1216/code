const SuperDao = require('./SuperDao.js')

module.exports = class CardDao extends SuperDao {
	constructor() {
		super('card')
	}
}
