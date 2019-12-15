import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { StudentController } from './controller/student.controller';
import { AppService } from './service/app.service';
import { StudentService } from './service/student.service';
import { Student } from './entity/student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Student])
  ],
  controllers: [AppController, StudentController], // 注入Controller
  providers: [AppService, StudentService], // 注入Service
})
export class AppModule {}
