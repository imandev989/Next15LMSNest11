// import { CourseLevel } from '@/enums/course-level.enum';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CourseDetailsFAQ } from './course-details-faq.entity';
import { CourseLevel } from '../enums/courseLevelEnum';
import { Comment } from './comment.entity';
import { Curriculum } from './curriculum.entity';

@Entity('course')
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ unique: true })
  slug: string; // New slug field added

  @Column({ type: 'float', nullable: true })
  basePrice?: number;

  @Column()
  numberOfLectures: number;

  @Column()
  level: string;

  @Column()
  numOfStudents: number;

  @Column()
  duration: string;

  @Column({ default: false })
  isDownloadable: boolean;

  @Column()
  numOfReviews: number;

  @Column({ default: false })
  isFree: boolean;

  @Column()
  subTitle: string;

  @Column({ type: 'float' })
  averageReviewRating: number;

  @Column({ nullable: true })
  profileImageId?: number;

  @Column()
  authorName: string;

  @Column()
  recordStatus: string;

  @Column({ nullable: true })
  authorSpecialty?: string;

  @Column({ nullable: true })
  videoUrl?: string;

  @Column()
  coverImageId: number;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'enum', enum: CourseLevel })
  levelNumber: CourseLevel;

  @OneToMany(() => CourseDetailsFAQ, (faq) => faq.course, { cascade: true })
  frequentlyAskedQuestions: CourseDetailsFAQ[];

  @OneToMany(() => Comment, (comment) => comment.course, { cascade: true })
  comments: Comment[];

  // One-to-many relation with curriculum
  @OneToMany(() => Curriculum, (curriculum) => curriculum.course, {
    cascade: true,
  })
  curriculums: Curriculum[]; // Add relation to Curriculum
}

// import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// @Entity()
// export class Course {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   title: string;

//   @Column()
//   courseCategoryId: number;

//   @Column()
//   duration: string;

//   @Column()
//   level: string;

//   @Column()
//   levelNumber: number;

//   @Column('decimal')
//   averageReviewRating: number;

//   @Column()
//   numOfReviews: number;

//   @Column()
//   coverImageId: number;

//   @Column()
//   recordStatus: string;

//   @Column()
//   slug: string;

//   @Column()
//   subTitle: string;

//   @Column()
//   isFree: boolean;

//   @Column('decimal', { nullable: true })
//   basePrice?: number;

//   @Column('decimal', { nullable: true })
//   discountedPrice?: number;

//   @Column({ nullable: true })
//   discountRemainingTime?: string;

//   @Column({ nullable: true })
//   discountType?: string;
// }
