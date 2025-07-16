import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { AppVersionNotFoundException } from './common/errors/app-version-not-found-exception.error';
import { setupSwagger } from './swagger/swagger.config';
import { version as appVersion } from '../package.json';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (!appVersion) {
    throw new AppVersionNotFoundException();
  }

  // Enable validation globally
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Enable CORS
  app.enableCors();

  // Setup Swagger documentation (only in non-production environments)
  setupSwagger(app);

  const port = process.env.PORT ?? 3001;
  await app.listen(port);

  console.log(`🚀 Application is running on: http://localhost:${port}`);
  console.log(`📚 API Documentation: http://localhost:${port}/api-docs`);
}
bootstrap();
