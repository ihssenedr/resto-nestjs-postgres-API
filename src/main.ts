import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import bodyParser from 'body-parser';
import { ValidationPipe } from './validation.pipe';
import { ConfigService } from '@nestjs/config';
import { env } from 'process';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config: ConfigService = app.get(ConfigService);
 
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api/v1');
  await app.listen(process.env.APP_PORT, () => {});
}
bootstrap();
