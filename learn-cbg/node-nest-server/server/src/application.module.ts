import { Module } from '@nestjs/common';
import { AppModule } from './engine/engine.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "123456",
    "database": "stockmgt",
    "entities": [__dirname + '/**/*.entity{.ts,.js}'],
    "synchronize": true,
    "logging": true, // 开启所有数据库信息打印
    "logger": 'advanced-console', // 高亮字体的打印信息
  }), AppModule],
})
export class ApplicationModule {}