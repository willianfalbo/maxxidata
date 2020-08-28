import { DocumentBuilder } from '@nestjs/swagger';

export default new DocumentBuilder()
  .setTitle('Backend API')
  .setDescription(`Swagger documentation for the backend API`)
  .setVersion('1.0')
  .build();
