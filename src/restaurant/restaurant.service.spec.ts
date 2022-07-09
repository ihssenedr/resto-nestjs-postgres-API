import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from '../database/database.module';
import { TypeOrmConfigService } from '../database/type-orm-config/type-orm-config.service';
import { Restaurant } from './restaurant.entity';
import { RestaurantService } from './restaurant.service';
import * as sinon from 'sinon';
import { Repository } from 'typeorm';

describe('RestaurantService', () => {
  let service: RestaurantService;
  let sendbox: sinon.SinonSandbox;
  beforeEach(async () => {
    sendbox = sinon.createSandbox();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RestaurantService,
        {
          provide: getRepositoryToken(Restaurant),
          useValue: sinon.createStubInstance(Repository),
        },
      ],
    }).compile();

    service = module.get<RestaurantService>(RestaurantService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all restaurants', async () => {
    const findAllItems = jest.spyOn(service, 'findAll');
    service.findAll();
    expect(findAllItems).toHaveBeenCalled();
  }
  );

  it('should call create with expected params', async () => {
    const createItemSpy = jest.spyOn(service, 'create');
    const item = new Restaurant();
    await service.create(item);
    expect(createItemSpy).toHaveBeenCalledWith(item);
  });

  it('should call update with expected params', async () => {
    const updateItemSpy = jest.spyOn(service, 'update');
    const item = new Restaurant();
    const id = 1;
    await service.update(id ,item);
    expect(updateItemSpy).toHaveBeenCalledWith(id,item);
  }
});
