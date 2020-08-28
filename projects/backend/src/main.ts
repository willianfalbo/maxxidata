import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as config from './config/server';
import swaggerConfig from './config/swagger';

async function bootstrap() {
  // express
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // api prefix
  app.setGlobalPrefix('/api');

  // cors
  app.enableCors({ origin: config.ALLOWED_ORIGIN });

  // swagger
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/', app, document);

  await app.listen(config.PORT, () => {
    Logger.log(`Running on port ${config.PORT}`);
  });
}

bootstrap();
