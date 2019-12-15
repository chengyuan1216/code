module.exports = context => {
	const { app, service } = context
	const { StudentService } = service

	app.get('/api/getOne', (req, res) => {
		StudentService.selectOne(req, res)
	})

	app.get('/api/deleteOne', (req, res) => {
		StudentService.deleteOne(req, res)
	})

	app.get('/api/list', (req, res) => {
		StudentService.list(req, res)
	})
}