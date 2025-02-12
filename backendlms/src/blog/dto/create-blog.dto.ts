// src/blog/dto/create-blog.dto.ts
import { IsString, IsOptional, IsNumber, IsBoolean } from 'class-validator';

export class CreateBlogDto {
  @IsString()
  title: string;

  @IsString()
  slug: string;

  @IsString()
  postDate: string;

  @IsString()
  thumbnailUrl: string;

  @IsNumber()
  studyTime: number;

  @IsBoolean()
  isNew: boolean;

  @IsNumber()
  numberOfViews: number;

  @IsString()
  author: string;

  @IsNumber()
  numberOfComments: number;

  @IsString()
  summary: string;

  @IsOptional()
  @IsString()
  category: string | null;
}
