import mysql from 'mysql'

// 数据库设置
const config = {
	connectionLimit: 50,
	host: 'localhost',
	user: 'root',
	password: '123456',
	database: 'learn_cbg'
}

export default class Mysql {
	private pool: any
	private config: any
	public static getInstance: any
	public static getConnection: any
	public static init: any

	constructor(cfg?: any) {
		this.pool = null
		this.config = cfg || config
		this.createPool(this.config)
	}

	createPool(config: any) {
		this.pool = mysql.createPool(config)
	}

	getConnection() {
		if (!this.pool) { console.error('未创建数据连接池') }
		let connection: any = null
		let connect = new Promise((reslove, reject) => {
			this.pool.getConnection(function (err: any, con: any) {
				if (err) {
					reject(err)
				}
				connection = con
				reslove(con)
			})
		})
		connect.finally(() => {
			try {
				connection && connection.release()
			} catch (e) {
				console.error('connection.release() 执行异常')
			}
		})
		return connect
	}
}

// 保存实例
let instance: any = null
Mysql.getInstance = () => instance
Mysql.getConnection = () => instance.getConnection()


Mysql.init = () => {
	if (!instance) {
		instance = new Mysql()
		console.log(`初始化 mysql 成功`)
	}
}
