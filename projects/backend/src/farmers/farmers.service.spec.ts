import 'dotenv/config';
import { Test, TestingModule } from '@nestjs/testing';
import { FarmersService } from './farmers.service';
import { FarmersRepository } from './farmers.repository';
import { Farmer } from './farmers.entity';
import { DocumentTypeEnum } from '../shared/enums/document-type.enum';
import { CountryCodeEnum } from '../shared/enums/country.enum';

describe('Farmers Service', () => {
  let service: FarmersService;

  const mockFarmersRepository = {
    searchFarmers: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FarmersService,
        {
          provide: FarmersRepository,
          useValue: mockFarmersRepository,
        },
      ],
    }).compile();

    service = module.get<FarmersService>(FarmersService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Unit Test Search Farmers Method', () => {
    it('Should return empty array when search term is empty', async () => {
      mockFarmersRepository.searchFarmers.mockResolvedValue([]);
      const result = await service.searchFarmers('');
      expect(result).toEqual([]);
    });

    it('Should return empty array when search term has white spaces', async () => {
      mockFarmersRepository.searchFarmers.mockResolvedValue([]);
      const result = await service.searchFarmers('     ');
      expect(result).toEqual([]);
    });

    it('Should return empty array when search term is null', async () => {
      mockFarmersRepository.searchFarmers.mockResolvedValue([]);
      const result = await service.searchFarmers(null);
      expect(result).toEqual([]);
    });

    it('Should return empty array when search term is undefined', async () => {
      mockFarmersRepository.searchFarmers.mockResolvedValue([]);
      const result = await service.searchFarmers(undefined);
      expect(result).toEqual([]);
    });

    it('Should return formatted address when search term is not empty', async () => {
      const dummyData: Partial<Farmer>[] = [
        {
          address: {
            id: 1,
            street: 'Fox Lane',
            number: 33,
            city: 'Norfolk',
            state: 'England',
            postalCode: 'NR14 7QA',
            country: CountryCodeEnum.UNITED_KINGDOM,
          },
        },
      ];
      mockFarmersRepository.searchFarmers.mockResolvedValue(dummyData);
      const result = await service.searchFarmers('Charles');
      expect(result[0].address.address).toEqual(
        '33 Fox Lane, Norfolk, England NR14 7QA',
      );
    });

    it('Should return success when search term is not empty', async () => {
      const dummyData: Farmer[] = [];
      mockFarmersRepository.searchFarmers.mockResolvedValue(dummyData);
      const result = await service.searchFarmers('Charles');
      expect(mockFarmersRepository.searchFarmers).toBeCalled();
      expect(result).toEqual([]);
    });
  });
});
