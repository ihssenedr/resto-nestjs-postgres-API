import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Manager } from 'src/manager/manager.entity';
import { Item } from './../../item/item';
import { Menu } from './../../menu/menu.entity';
import { Restaurant } from './../../restaurant/restaurant.entity';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  @Inject(ConfigService)
  private readonly config: ConfigService;

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      url: process.env.DATABASE_URL,
      type: 'postgres',
      ssl: {
        rejectUnauthorized: false,
      },
      entities: [Item, Menu, Restaurant, Manager],

      autoLoadEntities: true,
      synchronize: false, // never use TRUE in production!
    };
  }
}
