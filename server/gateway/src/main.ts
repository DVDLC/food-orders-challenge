import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import environments from './config/environments';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(environments.API_GATEWAY_PORT);
}
bootstrap();
