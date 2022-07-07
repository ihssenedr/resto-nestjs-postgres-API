import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { Menu } from './menu.interface';
import { MenuService } from './menu.service';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get()
  async findAll(): Promise<Menu[]> {
    return this.menuService.findAll();
  }
  @Post()
  async create(@Body() menu: Menu): Promise<Menu> {
    console.log('MenuController.create', menu);
    return await this.menuService.create(menu);
  }
  @Get(':id')
  async findOne(id: number): Promise<Menu> {
    return await this.menuService.findOne(id);
  }
  @Put(':id')
  async update(id: number, @Body() menu: Menu): Promise<Menu> {
    return await this.menuService.update(id, menu);
  }
  @Delete(':id')
  async delete(id: number): Promise<DeleteResult> {
    return await this.menuService.delete(id);
  }
}
