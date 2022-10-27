import { Test, TestingModule } from '@nestjs/testing';
import { SalesServicesService } from './sales-services.service';

describe('SalesServicesService', () => {
  let service: SalesServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalesServicesService],
    }).compile();

    service = module.get<SalesServicesService>(SalesServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
