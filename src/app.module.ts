import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forRoot('mongodb+srv://kousallya:FatorkKDpivaKISi@cluster0.sql4ele.mongodb.net/crud-app-nest?retryWrites=true&w=majority'),EmployeesModule],
  controllers: [AppController],
  providers: [AppService],
}) 
export class AppModule {}
  