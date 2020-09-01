import { DocumentBuilder } from '@nestjs/swagger';

export default new DocumentBuilder()
  .setTitle('Maxxidata API')
  .setDescription(`API documentation for the backend`)
  .setVersion('1.0')
  .build();
