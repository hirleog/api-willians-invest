import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const isDev = process.env.NODE_ENV !== 'production';

  app.enableCors({
    origin: isDev
      ? [
          'http://localhost:4200',
          'http://localhost:3000',
          'http://localhost:3001',
          'https://willians-invest.web.app/',
        ]
      : [
          'https://willians-invest.com',
          'https://willians-invest.com.br',
          'https://willians-invest.web.app',
          'http://localhost:4200',
          'https://localhost:4200',
        ],
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}

bootstrap();
