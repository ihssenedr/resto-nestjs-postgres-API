import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ItemService } from './item.service';
import { Item } from './item.interface';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }

  @Post()
  async create(@Body() item: Item): Promise<Item> {
    return this.itemService.create(item);
  }
  @Put()
  async update(@Body() item: Item): Promise<Item> {
    return this.itemService.update(item);
  }

  @Delete()
  async delete(@Param() id: number): Promise<Item> {
    return this.itemService.delete(id);
  }
}
