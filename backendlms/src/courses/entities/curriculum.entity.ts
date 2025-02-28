import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Course } from './course.entity';
import { Lecture } from './lecture.entity';

@Entity('curriculum')
export class Curriculum {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  numOfLectures: number;

  @Column()
  duration: string;

  // Correcting the ManyToOne relationship from Curriculum to Course
  @ManyToOne(() => Course, (course) => course.curriculums)
  course: Course;

  // One curriculum has many lectures
  @OneToMany(() => Lecture, (lecture) => lecture.curriculum, { cascade: true })
  lectures: Lecture[];
}

// import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
// import { Course } from './course.entity'; // Import the Course entity

// @Entity('curriculum')
// export class Curriculum {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   title: string; // Title of the curriculum (e.g., "Introduction to Programming")

//   @Column({ type: 'text' })
//   description: string; // Description of the curriculum section (optional)

//   @Column()
//   lectureCount: number; // Number of lectures in this curriculum section

//   @Column()
//   duration: string; // Duration of this curriculum section (e.g., "3 hours")

//   @ManyToOne(() => Course, (course) => course.curriculums) // Many curricula can belong to one course
//   course: Course; // Link to the course this curriculum belongs to
// }
