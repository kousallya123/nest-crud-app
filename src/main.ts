import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  console.log(process.env.Mongo_url);
  
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
