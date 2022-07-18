import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './validation.pipe';
import { ConfigService } from '@nestjs/config';
import * as bodyParser from 'body-parser';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    bodyParser: true,
  });
  const config: ConfigService = app.get(ConfigService);
  app.use(bodyParser.json());
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api/v1');
  const port: number = parseInt(`${process.env.PORT}`) || 3000;

  await app.listen(port);
}
bootstrap();
