import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Restaurant as RestaurantEntity } from './restaurant.entity';
import { Restaurant } from './restaurant.interface';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(RestaurantEntity)
    private readonly restaurantRepository: Repository<Restaurant>,
  ) {}

  async findAll(): Promise<Restaurant[]> {
    try {
      return await this.restaurantRepository.find();
    } catch (e) {
      return e;
    }
  }
  async create(restaurant: Restaurant): Promise<Restaurant> {
    try {
      return await this.restaurantRepository.create(restaurant);
    } catch (e) {
      return e;
    }
  }
  async update(id: number, restaurant: Restaurant): Promise<Restaurant> {
    try {
      let toUpdate = await this.restaurantRepository.findOne({ where: { id: id } });
      let updated = Object.assign(toUpdate, restaurant);
      return await this.restaurantRepository.save(updated);
    } catch (e) {
      return e;
    }
  }
}
