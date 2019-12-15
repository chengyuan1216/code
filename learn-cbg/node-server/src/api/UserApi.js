module.exports = context => {
	const { app, service } = context
	const { UserService } = service

	app.post('/api/user/register', (req, res) => {
		UserService.add(req, res)
	})

	app.post('/api/user/login', (req, res) => {
		UserService.login(req, res)
	})
}
