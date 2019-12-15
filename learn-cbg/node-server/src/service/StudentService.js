module.exports = context => {
	const { Response, dao } = context
	const { StudentDao } = dao

	return class StudentService {
		constructor() {}
	
		async selectOne(req, res){
			if (!req.query.id) {
				Response.exception(res, 'id不能为空')
			} else {
				let reault = await StudentDao.selectById(req.query.id)
				Response.success(res, reault)
			}
		}
	
		async deleteOne(req, res){
			if (!req.query.id) {
				Response.exception(res, 'id不能为空')
			} else {
				let result = await StudentDao.deleteById(req.query.id)
				Response.success(res, result)
			}
		}
	
		async list(req, res) {
			let result = await StudentDao.list(req.query)
			Response.success(res, result)
		}
	}
}