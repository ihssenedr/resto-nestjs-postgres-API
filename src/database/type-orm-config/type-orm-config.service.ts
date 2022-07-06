

import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Item } from 'src/item/item';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
    @Inject(ConfigService)
    private readonly config: ConfigService;


    public createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: process.env.DATABASE_HOST,
            port: parseInt(process.env.DATABASE_PORT, 10),
            username: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            entities: [Item],
            synchronize: true, // never use TRUE in production!
        };
      }
}
