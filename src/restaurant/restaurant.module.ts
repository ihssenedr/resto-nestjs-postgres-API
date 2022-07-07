import { Module } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { RestaurantController } from './restaurant.controller';
import { DatabaseModule } from './../database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './restaurant.entity';
import { TypeOrmConfigService } from './../database/type-orm-config/type-orm-config.service';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Restaurant])],
  providers: [TypeOrmConfigService, RestaurantService],
  controllers: [RestaurantController],
})
export class RestaurantModule {}
