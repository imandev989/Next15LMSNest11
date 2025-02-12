import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  courseCategoryId: number;

  @Column()
  duration: string;

  @Column()
  level: string;

  @Column()
  levelNumber: number;

  @Column('decimal')
  averageReviewRating: number;

  @Column()
  numOfReviews: number;

  @Column()
  coverImageId: number;

  @Column()
  recordStatus: string;

  @Column()
  slug: string;

  @Column()
  subTitle: string;

  @Column()
  isFree: boolean;

  @Column('decimal', { nullable: true })
  basePrice?: number;

  @Column('decimal', { nullable: true })
  discountedPrice?: number;

  @Column({ nullable: true })
  discountRemainingTime?: string;

  @Column({ nullable: true })
  discountType?: string;
}
