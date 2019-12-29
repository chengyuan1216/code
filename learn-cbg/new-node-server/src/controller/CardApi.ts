import { Get, Inject, Controller } from '../anotation/index'
import Response from '../dto/Response'
import express from 'express'

@Inject([])
@Controller()
export default class CardApi {
	constructor() {
	}

	@Get('/getCardList')
	list(req: express.Request, res: express.Response) {
		Response.success(res, [
			{ id: 1, name: 'test' },
		])
	}
}	
