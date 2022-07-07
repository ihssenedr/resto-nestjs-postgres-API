import { Body, Controller, Get, Post } from '@nestjs/common';
import { Restaurant } from './restaurant.interface';
import { RestaurantService } from './restaurant.service';

@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get()
  async findAll(): Promise<Restaurant[]> {
    return this.restaurantService.findAll();
  }
  @Post()
  async create(@Body() restaurant: Restaurant): Promise<Restaurant> {
    return this.restaurantService.create(restaurant);
  }
}
