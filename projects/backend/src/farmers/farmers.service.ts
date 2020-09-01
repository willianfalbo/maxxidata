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
    term = term ? term.trim().replace('#', '') : '';

    if (term === '') {
      return [];
    }

    const farmers = await this.farmersRepository.searchFarmers(term);
    const result = farmers.map(fa => {
      return {
        ...fa,
        address: {
          ...fa.address,
          address: `${fa.address.number} ${fa.address.street}, ${fa.address.city}, ${fa.address.state} ${fa.address.postalCode}`,
        },
      };
    });
    return result;
  }
}
