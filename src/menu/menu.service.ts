import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
      return await this.menuRepository.find();
    } catch (e) {
      return e;
    }
  }
  async create(menu: Menu): Promise<Menu> {
    try {
      console.log('MenuService.create', menu);
      return this.menuRepository.save(menu);
    } catch (e) {
      return e;
  }
}
}
