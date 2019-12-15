import { Controller, Get, Req, Query } from '@nestjs/common';
import { AppService } from '../service/app.service';
import { Request } from 'express';


@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(@Req() request: Request, @Query('id') id: string): string {
    console.log(request.query, id)
    return this.appService.getHello();
  }
}
