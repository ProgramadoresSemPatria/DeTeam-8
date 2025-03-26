import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // remove propriedades que não estão nos DTOs
    forbidNonWhitelisted: true, // lança erro caso haja propriedades não esperadas
    transform: true, // transforma os dados para os tipos esperados nos DTOs
  }));

  await app.listen(process.env.PORT ?? 3000);

  Logger.log(
    `Server running on http://localhost:${process.env.PORT ?? 3000}`,
    'Bootstrap',
  );
}

void bootstrap();
