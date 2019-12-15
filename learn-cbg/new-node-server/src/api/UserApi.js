const { Controller, Post, Inject } = require('../anotation/index.js')

@Inject(['UserService'])
class UserApi {
	constructor() {}
	
	@Post('/api/user/register')
	register(req, res){
		this.UserService.add(req, res)
	}

	@Post('/api/user/login')
	login(req, res){
		this.UserService.login(req, res)
	}
}	

module.exports = UserApi