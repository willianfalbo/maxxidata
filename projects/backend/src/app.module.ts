import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as postgresConfig from './config/postgres';
import { FarmersModule } from './farmers/farmers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(postgresConfig),
    FarmersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
