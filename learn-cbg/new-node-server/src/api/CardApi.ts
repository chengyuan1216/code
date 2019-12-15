import fs from 'fs'
import { Get, Inject } from '../anotation/index'
import Response from '../dto/Response'
import express from 'express'

@Inject([])
export default class CardApi {
	constructor() {
	}

	@Get('/getCardList')
	list(req: express.Request, res: express.Response) {
		Response.success(res, [
			{ id: 1, name: 'test' }
		])
	}
}	
