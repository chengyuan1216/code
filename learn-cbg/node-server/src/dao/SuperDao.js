const { getConnection } = require('../config/mysql.js')

class SuperDao {
	constructor(tableName) {
		this.tableName = tableName
	}

	/**
	 * 通过id查询记录
	 * @param {*} id 
	 */
	async selectById(id) {
		let  sql = `SELECT * FROM ${this.tableName} where id = '${id}'`
		let result = await this.query(sql)
		return result[0]
	}

	/**
	 * 通过id删除一条记录
	 * @param {*} id 
	 */
	async deleteById(id) {
		let  sql = `DELETE FROM ${this.tableName} WHERE id = '${id}'`
		let result = this.query(sql)
		return result
	}

	/**
	 * 增加一条记录
	 * @param {*} sql 
	 */
	async add(row) {
		let fileds = Object.keys(row)
		let values = []
		fileds.forEach(key => {
			values.push(`'${row[key]}'`)
		})
		let sql = `INSERT INTO ${this.tableName} (${fileds.join(',')}) VALUES (${values.join(',')});`
		return await this.query(sql)
	}


	/**
	 * 条件查询
	 * @param {*} condition 
	 */
	async select(condition) {
		let whereCondition = ''
		let limitCondition  = ''
		if (condition instanceof Condition) {
			whereCondition = condition.whereCondition
			limitCondition = condition.limitCondition
		}
		let  sql = `SELECT * FROM ${this.tableName} ${whereCondition} ${limitCondition}`
		let result = await this.query(sql)
		return result
	}

	/**
	 * 更新记录
	 * @param {*} condition 
	 */
	async update(condition) {
		let setCondition = ''
		let whereCondition = ''
		if (condition instanceof Condition) {
			setCondition = condition.setCondition
			whereCondition = condition.whereCondition
		}
		let sql = `UPDATE ${this.tableName} ${setCondition} ${whereCondition}`
		return await this.query(sql)
	}

	/**
	 * 查询列表
	 * @param {*} sql 
	 */
	async list(condition) {
		// 查询的结果
		let result = await this.select(new Condition().page(condition.pageNum, condition.pageSize))
		// 总条数
		let count = await this.count() 
		return {
			data: result,
			total: count[0]['count'],
			pageNum: condition.pageNum,
			hasNextPage: result.length + (condition.pageNum - 1) * condition.pageSize < count[0]['count']
		}
	}

	/**
	 * 查询表的记录总条数
	 * @param {*} sql 
	 */
	async count() {
		let sql = `SELECT COUNT(*) AS count FROM ${this.tableName}`
		return await this.query(sql)
	}

	/**
	 * 执行sql语句
	 * @param {*} sql 
	 */
	query(sql) {
		console.log(`sql ==> ${sql}`)
		return new Promise((reslove, reject) => {
			getConnection().then(con => {
				con.query(sql, (err,data) => {
			        if (err) {
			        	reject(err)
			        } else {
			        	reslove(data)
			        }
			    })
			})
		})
	}
}

/**
 * 查询条件类
 */
class Condition {
	constructor() {
		this.whereCondition = ''
		this.setCondition = ''
		this.orderCondition = ''
		this.limitCondition = ''
	}

	// 条件
	where(filed, value) {
		if (this.whereCondition) {
			this.whereCondition += ` and ${filed}='${value}' `
		} else {
			this.whereCondition += ` WHERE ${filed}='${value}' `
		}
		return this
	}

	// 更新字段
	set(filed, value) {
		if (this.setCondition) {
			this.setCondition += `, ${filed}='${value}' `
		} else {
			this.setCondition += `SET ${filed}='${value}'`
		}
		return this
	}

	// 排序
	orderBy(filed, value) {
		if (this.setCondition) {
			this.setCondition += `, ${filed}='${value}' `
		} else {
			this.orderCondition += `ORDER BY ${filed} '${value}'`
		}
		return this
	}

	limit(start, size) {
		this.limitCondition = `LIMIT ${start}, ${end}`
		return this
	}

	// 分页
	page(pageNum, pageSize) {
		this.limitCondition = `LIMIT ${(pageNum - 1) * pageSize}, ${pageSize}`
		return this
	}
}

SuperDao.Condition = SuperDao.prototype.Condition = Condition

module.exports = SuperDao