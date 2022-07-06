import { Body, Controller, Get, Post } from '@nestjs/common';
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
}
