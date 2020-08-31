import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FarmersRepository } from './farmers.repository';

@Injectable()
export class FarmersService {
  constructor(
    @InjectRepository(FarmersRepository)
    private readonly farmersRepository: FarmersRepository,
  ) {}

  async searchFarmers(term: string) {
    const farmers = await this.farmersRepository.searchFarmers(term);

    const result = farmers.map(f => {
      return {
        ...f,
        address: {
          ...f.address,
          address: `${f.address.number} ${f.address.street}, ${f.address.city}, ${f.address.state} ${f.address.postalCode}`,
        },
      };
    });
    return result;
  }
}
