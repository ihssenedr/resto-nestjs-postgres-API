import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { DatabaseModule } from './../database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menu } from './menu.entity';
import { TypeOrmConfigService } from './../database/type-orm-config/type-orm-config.service';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Menu])],
  providers: [TypeOrmConfigService, MenuService],
  controllers: [MenuController],
})
export class MenuModule {}
