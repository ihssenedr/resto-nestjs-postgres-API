import { Menu } from './../menu/menu.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  cuisine: string;

  @Column()
  speciality: boolean;

  @Column()
  price: number;

  @Column()
  timeTaken?: string;

  @Column()
  prodDetails?: string;

  @ManyToOne(() => Menu, (menu: Menu) => menu.items, { onDelete: 'CASCADE' })
  menu: Menu;
}
