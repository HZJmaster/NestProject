import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('research')
export class ResearchEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar' })
  ResearchName: string;
}
