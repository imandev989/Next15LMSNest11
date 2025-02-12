// src/blog/blog.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('blogs')
export class Blog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  slug: string;

  @Column()
  postDate: string;

  @Column()
  thumbnailUrl: string;

  @Column()
  studyTime: number;

  @Column({ default: false })
  isNew: boolean;

  @Column({ default: 0 })
  numberOfViews: number;

  @Column()
  author: string;

  @Column({ default: 0 })
  numberOfComments: number;

  @Column()
  summary: string;

  @Column({ nullable: true })
  category: string | null;
}
