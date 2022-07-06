import { Controller, Get } from '@nestjs/common';
import { ItemService } from './item.service';
import { Item } from './item.interface';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }
}
