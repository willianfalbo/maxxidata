import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FarmersController } from './farmers.controller';
import { FarmersService } from './farmers.service';
import { FarmersRepository } from './farmers.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FarmersRepository])],
  controllers: [FarmersController],
  providers: [FarmersService],
})
export class FarmersModule {}
