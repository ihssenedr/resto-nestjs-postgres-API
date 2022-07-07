import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item as ItemEntity } from './item';
import { Item } from './item.interface';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(ItemEntity)
    private readonly itemRepository: Repository<Item>,
  ) {}
  async findAll(): Promise<Item[]> {
    try {
      return await this.itemRepository.find({ relations: ['menu'] });
    } catch (e) {
      return e;
    }
  }

  async create(item: Item | CreateItemDto) {
    try {
      return await this.itemRepository.save(item);
    } catch (error) {
      return error;
    }
  }

  async update(item: Item | UpdateItemDto) {
    try {
      return await this.itemRepository.save(item);
    } catch (error) {
      return error;
    }
  }

  async delete(id: number) {
    try {
      return await this.itemRepository.delete(id);
    } catch (error) {
      return error;
    }
  }

  async findOne(id: string) {
    try {
      return await this.itemRepository.findOneById(id);
    } catch (error) {
      return error;
    }
  }
}
