import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken} from '@nestjs/typeorm';
import { Item } from './item';
import { ItemService } from './item.service';
import { Repository} from 'typeorm';

import * as sinon from 'sinon';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
describe('ItemService', () => {
  let service: ItemService;
  let sendbox: sinon.SinonSandbox;
  beforeEach(async () => {
    sendbox = sinon.createSandbox();
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

  it('should return all items', async () => {
    const findAllItems = jest.spyOn(service, 'findAll');
    service.findAll();
    expect(findAllItems).toHaveBeenCalled();
  });

  it('should call createItem with expected params', async () => {
    const createItemSpy = jest.spyOn(service, 'create');
    const item = new CreateItemDto();
    await service.create(item);
    expect(createItemSpy).toHaveBeenCalledWith(item);
  });

  it('should call updateItem with expected params', async () => {
    const updateItemSpy = jest.spyOn(service, 'update');
    const item = new UpdateItemDto();
    await service.update(item);
    expect(updateItemSpy).toHaveBeenCalledWith(item);
  });

  it('should call deleteItem with expected params', async () => {
    const deleteItemSpy = jest.spyOn(service, 'delete');
    const id = 1;
    await service.delete(id);
    expect(deleteItemSpy).toHaveBeenCalledWith(id);
  });

  afterAll(async () => {
    sendbox.restore();
  });
});
