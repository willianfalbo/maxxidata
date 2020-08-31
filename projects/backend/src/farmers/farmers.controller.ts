import { Controller, Get, Query } from '@nestjs/common';
import { FarmersService } from './farmers.service';

@Controller('farmers')
export class FarmersController {
  constructor(private readonly farmersService: FarmersService) {}

  @Get()
  async searchFarmers(@Query('term') term: string) {
    return await this.farmersService.searchFarmers(term);
  }
}
