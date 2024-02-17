import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports:[MongooseModule.forRoot(process.env.Mongo_url),EmployeesModule],
  controllers: [AppController],
  providers: [AppService],
}) 
export class AppModule {}
  