import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/database.module';
import { TypeOrmConfigService } from 'src/database/type-orm-config/type-orm-config.service';
import { ManagerController } from './manager.controller';
import { Manager } from './manager.entity';
import { ManagerService } from './manager.service';

@Module({
    imports: [DatabaseModule, TypeOrmModule.forFeature([Manager])],
  providers: [TypeOrmConfigService, ManagerService],
  controllers: [ManagerController],
})
export class ManagerModule {}
