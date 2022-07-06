import { Module } from '@nestjs/common';
import { dbProvider } from './database.provider';
import { TypeOrmConfigService } from './type-orm-config/type-orm-config.service';

@Module({
  providers: [dbProvider, TypeOrmConfigService],
  exports: [dbProvider],
})
export class DatabaseModule {}
