import 'dotenv/config';
import { Test } from '@nestjs/testing';
import { FarmersController } from './farmers.controller';
import { FarmersService } from './farmers.service';
import { Farmer } from './farmers.entity';

const mockFarmers = {
  searchFarmers: jest.fn(),
};

describe('Farmers Controller', () => {
  let controller: FarmersController;
  beforeEach(async () => {
    mockFarmers.searchFarmers.mockResolvedValue(false);

    const module = await Test.createTestingModule({
      controllers: [FarmersController],
      providers: [
        {
          provide: FarmersService,
          useValue: mockFarmers,
        },
      ],
    }).compile();
    controller = module.get<FarmersController>(FarmersController);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Unit Test GET Controller', () => {
    it('Should return success when calling the api', async () => {
      mockFarmers.searchFarmers.mockResolvedValue([] as Farmer[]);

      await controller.searchFarmers('dummy data');
      expect(mockFarmers.searchFarmers).toBeCalled();
    });
  });
});
