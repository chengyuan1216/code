import { Get, Inject, Controller } from '../anotation/index'
import IResponse from '../dto/Response'
import { Request, Response } from 'express'
import { exec } from '../dao/sql'

@Inject([])
@Controller('/')
export default class CardApi {
	@Get('/getCardList')
	async list(req: Request, res: Response) {
		try {
			const [rows, fields] = await exec('SELECT * FROM card')
			IResponse.success(res, rows)
		} catch (err) {
			IResponse.error(res, err)
		}
	}
}	
