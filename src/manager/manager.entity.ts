import { Column, Double, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Manager {
  @PrimaryGeneratedColumn()
  id: number;

    @Column()
    name: string;

    @Column()
    shift: string;

    @Column()
    regNo: string;

    @Column()
    wage: number;
}