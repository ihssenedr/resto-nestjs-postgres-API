import { Menu } from './../menu/menu.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('varchar', { array: true })
  cuisine: string[];

  @Column()
  contact: string;

  @Column()
  timing: string;

  @Column()
  adresse?: string;

  @Column()
  license?: string;

  @OneToOne(() => Menu, { onDelete: 'CASCADE' })
  @JoinColumn()
  foodCard: Menu;
}
