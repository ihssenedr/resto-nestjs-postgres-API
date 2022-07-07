import { Restaurant } from './../restaurant/restaurant.entity';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Item } from '../item/item';

@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Item, (item) => item.menu, { onDelete: 'CASCADE' })
  items: Item[];

  @Column()
  specialOffer: string;
  @OneToOne(() => Restaurant, (restaurant) => restaurant.foodCard, {
    onDelete: 'CASCADE',
  })
  restaurant: Restaurant;
}
