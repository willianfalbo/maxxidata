import { DocumentBuilder } from '@nestjs/swagger';

export const SWAGGER_CONFIG = new DocumentBuilder()
  .setTitle('Backend API')
  .setDescription(`Swagger documentation for the backend API`)
  .setVersion('1.0')
  .addTag('backend')
  .build();
