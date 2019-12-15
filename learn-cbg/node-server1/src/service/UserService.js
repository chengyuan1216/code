const UserDao = require('../dao/UserDao.js')
const Response = require('../dto/Response.js')
const SuperService = require('./SuperService.js')
const { Inject } = require('../anotation/index.js')
const uuid = require('uuid')
const moment = require('moment')
const bcrypt = require('bcrypt') // 加密
const Sql = require('../dao/Sql.js')
const token = require('../utils/token.js')

/**
 * 用户
 */
@Inject(['UserDao'])
class UserService extends SuperService {
	constructor() {
		super()
	}

	async add(req, res) {
		let users = await this.UserDao.select(new Sql.Condition().where('name', req.body.name))
		if (users.length > 0) {
			Response.error(res, {
				message: "该用户名已被注册"
			})
		} else {
			// 加密后存到数据库
			bcrypt.hash(req.body.password, 10, (err, encryptPassword) => {
				this.UserDao.add({
					id: uuid.v1(),
					name: req.body.name,
					password: encryptPassword,
					create_date: moment().format('YYYY-MM-DD HH:mm:ss')
				}).then(() => {
					Response.success(res, {
						message: "注册成功"
					})
				})
			})
		}
	}

	async login(req, res) {
		let condition = new Sql.Condition()
		condition.where('name', req.body.name)
		let users = await this.UserDao.select(condition)
		if (users.length > 0) {
			bcrypt.compare(req.body.password, users[0].password, async (err, isAccess) => {
				if (isAccess === true) {

					let userToken = token.createToken({
						id: users[0].id,
						name: users[0].name
					}, 10000)

					console.log(userToken)
					// 将token存到数据库
					await this.UserDao.update(new Sql.Condition().set('token', userToken).where('id', users[0].id))

					Response.success(res, {
						message: "登陆成功",
						user: {
							token: userToken,
							name: users[0].name
						}
					})
					
				} else {
					Response.error(res, {
						message: "用户名或密码错误"
					})
				}
			})
		} else {
			Response.error(res, {
				message: "不存在的用户名"
			})
		}
	}
}

module.exports = UserService