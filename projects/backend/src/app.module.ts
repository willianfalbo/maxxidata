import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as postgresConfig from './config/postgres';

@Module({
  imports: [TypeOrmModule.forRoot(postgresConfig)],
  controllers: [],
  providers: [],
})
export class AppModule {}
