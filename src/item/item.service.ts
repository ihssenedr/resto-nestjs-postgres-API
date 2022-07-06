import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Item } from './item.interface';

@Injectable()
export class ItemService {
  constructor(
    @Inject('ItemRepositoryToken')
    private readonly itemRepository: Repository<Item>,
  ) {}
  async findAll(): Promise<Item[]> {
    try {
      return await this.itemRepository.find();
    } catch (e) {
      return e;
    }
  }
}
