import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Item {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  cuisine: string;

  @Column()
  speciality: boolean;

  @Column()
  price: number;

  @Column()
  timeTaken: string;

  @Column()
  prodDetails: string;
}
