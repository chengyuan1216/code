import { Get, Post, Inject, Controller } from '../anotation/index'
import IResponse from '../dto/Response'
import { Request, Response } from 'express'
import { exec } from '../dao/sql'
import Card from '../model/Card'

@Inject([])
@Controller('/card')
export default class CardApi {
	@Get('/list')
	async list(req: Request, res: Response) {
		try {
			const [rows, fields] = await exec('SELECT * FROM card')
			IResponse.success(res, rows)
		} catch (err) {
			IResponse.error(res, err)
		}
	}

	@Post('/add')
	async add(req: Request, res: Response) {
		console.log(req.body, 'req')
		let card: Card = {
			name: req.body.name,
			src: req.body.src
		}
		try {
			const result = await exec(`insert into card(name, src) values('${card.name}', '${card.src}')`)
			IResponse.success(res)
		} catch (err) {
			IResponse.error(res, err)
		}
	}
}	
