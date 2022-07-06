import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantModule } from './restaurant/restaurant.module';
import { MenuModule } from './menu/menu.module';
import { ItemModule } from './item/item.module';
import { StockModule } from './stock/stock.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    RestaurantModule,
    MenuModule,
    ItemModule,
    StockModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
