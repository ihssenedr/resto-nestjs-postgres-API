import { Module } from '@nestjs/common';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { DatabaseModule } from '../database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './item';
import { TypeOrmConfigService } from './../database/type-orm-config/type-orm-config.service';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Item])],
  controllers: [ItemController],
  providers: [ItemService, TypeOrmConfigService],
})
export class ItemModule {}
