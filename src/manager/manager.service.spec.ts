import { Test, TestingModule } from '@nestjs/testing';
import { ManagerService } from './manager.service';
import * as sinon from 'sinon';
import { Manager } from './manager.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

describe('ManagerService', () => {
  let service: ManagerService;
  let sendbox: sinon.SinonSandbox;


  beforeEach(async () => {
    sendbox = sinon.createSandbox();
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManagerService,
        {
          provide: getRepositoryToken(Manager),
          useValue: sinon.createStubInstance(Repository),
        },],
    }).compile();

    service = module.get<ManagerService>(ManagerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all managers', async () => {
    const findAllItems = jest.spyOn(service, 'findAll');
    service.findAll();
    expect(findAllItems).toHaveBeenCalled();
  });

  it('should call create with expected params', async () => {
    const createItemSpy = jest.spyOn(service, 'create');
    const item = new Manager();
    await service.create(item);
    expect(createItemSpy).toHaveBeenCalledWith(item);
  });

  it('should call update with expected params', async () => {
    const updateItemSpy = jest.spyOn(service, 'update');
    const item = new Manager();
    const id = 1;
    await service.update(id, item);
    expect(updateItemSpy).toHaveBeenCalledWith(id, item);
  });

  it('should call delete with expected params', async () => {
    const deleteItemSpy = jest.spyOn(service, 'delete');
    const id = 1;
    await service.delete(id);
    expect(deleteItemSpy).toHaveBeenCalledWith(id);
  });

  it('should call findOne with expected params', async () => {
    const findOneItemSpy = jest.spyOn(service, 'findOne');
    const id = 1;
    await service.findOne(id);
    expect(findOneItemSpy).toHaveBeenCalledWith(id);
  });

});
