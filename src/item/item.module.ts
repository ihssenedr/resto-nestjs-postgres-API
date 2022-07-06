import { Module } from '@nestjs/common';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { itemProvider } from './item.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ItemController],
  providers: [...itemProvider, ItemService],
})
export class ItemModule {}
