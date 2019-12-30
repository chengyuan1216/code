type callback = (res: any, data: any) => void
export default class Response {
	private code: number
	private msg: string
	private data: any
	public static success: callback
	public static error: callback
	public static exception: callback
	public static SUCCESS: ResponseStatus
	public static ERROR: ResponseStatus
	public static EXCEPTION: ResponseStatus

	constructor(code: number, msg: string, data: any) {
		this.code = code
		this.msg = msg
		this.data = data
		console.log("返回值", JSON.stringify(data))
	}

	setCode(code: number) {
		this.code = code
	}

	getCode() {
		return this.code
	}

	setMsg(msg: string) {
		this.msg = msg
	}

	getMsg() {
		return this.msg
	}

	setData(data: any) {
		this.data = data
	}

	getData() {
		return this.data
	}
}

Response.success = (res, data?: any) => {
	res.statusCode = 200
	res.setHeader('Content-Type', 'text/json;charset=utf-8')
	res.end(JSON.stringify(new Response(Response.SUCCESS.code, Response.SUCCESS.msg, data)))
}

Response.error = (res, data?: any) => {
	res.statusCode = 200
	res.setHeader('Content-Type', 'text/json;charset=utf-8')
	res.end(JSON.stringify(new Response(Response.ERROR.code, Response.ERROR.msg, data)))
}

Response.exception = (res, data?: any) => {
	try {
		res.statusCode = 200
		res.setHeader('Content-Type', 'text/json;charset=utf-8')
		let result = JSON.stringify(new Response(Response.EXCEPTION.code, Response.EXCEPTION.msg, data))
		res.end(result)
		throw new Error(result)
	} catch (e) {
		console.error(e)
	}
}


type ResponseStatus = {
	code: number,
	msg: string
}

Response.SUCCESS = {
	code: 0,
	msg: '操作成功'
}

Response.ERROR = {
	code: -1,
	msg: '操作失败'
}

Response.EXCEPTION = {
	code: -2,
	msg: '请求出现异常'
}