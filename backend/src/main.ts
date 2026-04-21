import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Faz com que o NestJS valide automaticamente toda DTO que entrar no sistema, usando as regras definidas com class-validator e class-transformer nas DTOs. Isso garante que os dados estejam no formato esperado antes de chegar nos controllers ou serviços
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();