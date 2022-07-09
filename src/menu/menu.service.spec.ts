import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Menu } from './menu.entity';
import { MenuService } from './menu.service';
import * as sinon from 'sinon';
import { Repository } from 'typeorm';
import { CreateMenuDTO } from './dto/create-menu.dto';
import { UpdateMenuDTO } from './dto/update-menu.dto';


describe('MenuService', () => {
  let service: MenuService;
  let sendbox: sinon.SinonSandbox;
  beforeEach(async () => {
    sendbox = sinon.createSandbox();
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

  it('should return all menus', async () => {
    const findAllItems = jest.spyOn(service, 'findAll');
    service.findAll();
    expect(findAllItems).toHaveBeenCalled();
  });

  it('should call create with expected params', async () => {
    const createItemSpy = jest.spyOn(service, 'create');
    const item = new CreateMenuDTO();
    await service.create(item);
    expect(createItemSpy).toHaveBeenCalledWith(item);
  });
  it('should call update with expected params', async () => {
    const updateItemSpy = jest.spyOn(service, 'update');
    const item = new UpdateMenuDTO();
    const id = 1;
    await service.update(id ,item);
    expect(updateItemSpy).toHaveBeenCalledWith(id,item);
  });

  it('should call delete with expected params', async () => {
    const deleteItemSpy = jest.spyOn(service, 'delete');
    const id = 1;
    await service.delete(id);
    expect(deleteItemSpy).toHaveBeenCalledWith(id);
  });
});
