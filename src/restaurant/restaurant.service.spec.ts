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

  beforeEach(async () => {
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
});
