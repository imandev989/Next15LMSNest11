import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { Course } from './course.entity';

@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp' })
  date: Date; // Automatically set when a comment is created

  @Column({ nullable: true })
  userId: number;

  @Column({ nullable: true })
  fullName: string;

  @Column({ type: 'text' })
  commentText: string;

  @Column({ type: 'float', nullable: true })
  score: number; // Score or rating provided by the user

  @Column({ default: false })
  isResponse: boolean; // Indicates if the comment is a response to another comment

  @ManyToOne(() => Course, (course) => course.comments, { onDelete: 'CASCADE' })
  course: Course;
}
