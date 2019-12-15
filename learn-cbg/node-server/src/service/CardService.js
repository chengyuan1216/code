module.exports =  context => {
	const { Response, dao } = context
	const { CardDao } = dao

	return class CardService {
		constructor() {}
	
		selectOne(req, res){
			console.log('service层 selectOne')
			if (!req.query.id) {
				Response.exception(res, 'id不能为空')
				console.error('抛异常后')
			} else {
				CardDao.selectById(req.query.id).then(data => {
					Response.success(res, data)
				}).catch(err => {
					console.error('service层捕获异常', err)
				})
			}
		}
	
		deleteOne(req, res){
			if (!req.query.id) {
				Response.exception(res, 'id不能为空')
				console.error('抛异常后')
			} else {
				CardDao.deleteById(req.query.id).then(data => {
					Response.success(res, data)
				}).catch(err => {
					console.error('service层捕获异常', err)
				})
			}
		}
	
		add(row) {
			return CardDao.add(row)
		}
	
		async list(req, res) {
			let result = await CardDao.list(req.query)
			Response.success(res, result)
		}
	}
}