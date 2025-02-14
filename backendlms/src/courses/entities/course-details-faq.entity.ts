import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Course } from './course.entity';

@Entity('faq')
export class CourseDetailsFAQ {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  question: string;

  @Column()
  answer: string;

  @ManyToOne(() => Course, (course) => course.frequentlyAskedQuestions, {
    onDelete: 'CASCADE',
  })
  course: Course;
}
