import * as dotenv from 'dotenv';
dotenv.config();
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Faz com que o NestJS valide automaticamente toda DTO que entrar no sistema, usando as regras definidas com class-validator e class-transformer nas DTOs. Isso garante que os dados estejam no formato esperado antes de chegar nos controllers ou serviços
  app.useGlobalPipes(new ValidationPipe());

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('Apotecário API')
    .setDescription('Documentação do sistema de gestão de medicamentos')
    .setVersion('1.0')
    .addBearerAuth() // avisa ao swagger que usaremos autentição usando o Bearer
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // 'api' será o caminho da URL
  
  await app.listen(3000); // O servidor vai rodar na porta 3000, e a documentação do Swagger estará disponível em http://localhost:3000/api
}
bootstrap();