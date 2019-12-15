const uuid = require('uuid')
const moment = require('moment')
const bcrypt = require('bcrypt') // 加密
const token = require('../utils/token.js')

/**
 * 用户
 */
module.exports = context => {
	const { Response, dao } = context
	const { UserDao } = dao

	return class UserService {
		constructor() {}
	
		async add(req, res) {
			let users = await UserDao.select(new UserDao.Condition().where('name', req.body.name))
			if (users.length > 0) {
				Response.error(res, {
					message: "该用户名已被注册"
				})
			} else {
				// 加密后存到数据库
				bcrypt.hash(req.body.password, 10, (err, encryptPassword) => {
					UserDao.add({
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
			let condition = new UserDao.Condition()
			condition.where('name', req.body.name)
			let users = await UserDao.select(condition)
			if (users.length > 0) {
				bcrypt.compare(req.body.password, users[0].password, async (err, isAccess) => {
					if (isAccess === true) {
	
						let userToken = token.createToken({
							id: users[0].id,
							name: users[0].name
						}, 10000)
	
						console.log(userToken)
						// 将token存到数据库
						await UserDao.update(new UserDao.Condition().set('token', userToken).where('id', users[0].id))
	
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
}