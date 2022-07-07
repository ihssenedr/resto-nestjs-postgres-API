import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './../database/database.module';
import { TypeOrmConfigService } from './../database/type-orm-config/type-orm-config.service';
import { Item } from './item';
import { ItemService } from './item.service';
import { Repository, FindOneOptions, FindManyOptions } from 'typeorm';

import * as sinon from 'sinon';
describe('ItemService', () => {
  let service: ItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ItemService,
        {
          provide: getRepositoryToken(Item),
          useValue: sinon.createStubInstance(Repository),
        },
      ],
    }).compile();

    service = module.get<ItemService>(ItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
