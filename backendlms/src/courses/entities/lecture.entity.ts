import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Curriculum } from './curriculum.entity';

@Entity('lecture')
export class Lecture {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  duration: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  videoSize: string;

  @ManyToOne(() => Curriculum, (curriculum) => curriculum.lectures)
  curriculum: Curriculum;
}
