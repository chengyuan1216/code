import { Controller, Get, Post, Req, Query } from '@nestjs/common';
import { StudentService } from '../service/student.service';
import { Request } from 'express';
import { Student } from '../entity/student.entity';

@Controller('api')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get('findAll')
  async findAll(@Req() request: Request, @Query('id') id: string): Promise<Student[]> {
    console.log(request.query, id)
    return await this.studentService.findAll();
  }
}
