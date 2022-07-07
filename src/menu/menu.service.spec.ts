import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './../database/database.module';
import { TypeOrmConfigService } from './../database/type-orm-config/type-orm-config.service';
import { Menu } from './menu.entity';
import { MenuService } from './menu.service';
import * as sinon from 'sinon';
import { Repository } from 'typeorm';
describe('MenuService', () => {
  let service: MenuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MenuService,
        {
          provide: getRepositoryToken(Menu),
          useValue: sinon.createStubInstance(Repository),
        },
      ],
    }).compile();

    service = module.get<MenuService>(MenuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
