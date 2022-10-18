import { Test, TestingModule } from '@nestjs/testing';
import { DetaisController } from './detais.controller';

describe('DetaisController', () => {
  let controller: DetaisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetaisController],
    }).compile();

    controller = module.get<DetaisController>(DetaisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
