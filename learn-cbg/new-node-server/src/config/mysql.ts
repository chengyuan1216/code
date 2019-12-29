import mysql from 'mysql2'

let pool: any = null
export default function init() {
	// 创建数据库连接池
	pool = mysql.createPool({
		host: 'localhost',
		user: 'root',
		database: 'learn_cbg',
		password: '123456',
		waitForConnections: true,
		connectionLimit: 10,
		queueLimit: 0
	})
}

export function getPool(): any {
	return pool.promise()
}

