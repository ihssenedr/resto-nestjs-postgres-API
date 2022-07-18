import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantModule } from './restaurant/restaurant.module';
import { MenuModule } from './menu/menu.module';
import { ItemModule } from './item/item.module';
import { StockModule } from './stock/stock.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './database/type-orm-config/type-orm-config.service';
import { ManagerService } from './manager/manager.service';
import { ManagerController } from './manager/manager.controller';
import { ManagerModule } from './manager/manager.module';

@Module({
  imports: [
    RestaurantModule,
    MenuModule,
    ItemModule,
    StockModule,
    DatabaseModule,
    ConfigModule.forRoot({ envFilePath: ['.env', '.env.prod'], isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    ManagerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
