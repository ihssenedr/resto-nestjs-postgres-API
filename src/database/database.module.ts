import { Module } from '@nestjs/common';
import { TypeOrmConfigService } from './type-orm-config/type-orm-config.service';

@Module({
  providers: [TypeOrmConfigService],
  exports: [TypeOrmConfigService],
})
export class DatabaseModule {}
