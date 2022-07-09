import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateMenuDTO } from './dto/create-menu.dto';
import { UpdateMenuDTO } from './dto/update-menu.dto';
import { Menu as MenuEntity } from './menu.entity';
import { Menu } from './menu.interface';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(MenuEntity)
    private readonly menuRepository: Repository<Menu>,
  ) {}
  async findAll(): Promise<Menu[]> {
    try {
      return await this.menuRepository.find({
        relations: ['restaurant', 'items'],
      });
    } catch (e) {
      return e;
    }
  }
  async create(menu: Menu | CreateMenuDTO): Promise<Menu> {
    try {
      return await this.menuRepository.save(menu);
    } catch (e) {
      return e;
    }
  }

  async findOne(id: number): Promise<Menu> {
    try {
      return await this.menuRepository.findOne({ where: { id: id } });
    } catch (e) {
      return e;
    }
  }
  async update(id: number, menu: Menu | UpdateMenuDTO): Promise<Menu> {
    try {
      console.log('MenuService.update ' + id, menu);
      let toUpdate = await this.menuRepository.findOne({ where: { id: id } });
      let updated = Object.assign(toUpdate, menu);
      console.log('MenuService.update', updated);

      return await this.menuRepository.save(updated);
    } catch (e) {
      return e;
    }
  }
  async delete(id: number): Promise<DeleteResult> {
    try {
      return await this.menuRepository.delete({ id: id });
    } catch (e) {
      return e;
    }
  }
}
