import { EntityRepository, Repository, Like } from 'typeorm';
import { Farmer } from './farmers.entity';

@EntityRepository(Farmer)
export class FarmersRepository extends Repository<Farmer> {
  async searchFarmers(term: string) {
    const query = this.createQueryBuilder('farmer')
      .leftJoinAndSelect('farmer.document', 'document')
      .leftJoinAndSelect('farmer.address', 'address')
      .where(
        'farmer.name ILIKE :search OR document.documentNumber ILIKE :search',
        { search: `%${term}%` },
      );

    return await query.getMany();
  }
}
