import { Column, Entity, PrimaryColumn } from 'typeorm';
import { Item } from '../item/item';

@Entity()
export class Menu {
  @PrimaryColumn()
  id: string;

  @Column((type) => Item)
  items: Item[];

  @Column()
  specialOffer: string;
}
