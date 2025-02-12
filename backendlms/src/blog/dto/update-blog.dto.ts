// src/blog/dto/update-blog.dto.ts
import { IsString, IsOptional, IsNumber, IsBoolean } from 'class-validator';

export class UpdateBlogDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  slug?: string;

  @IsOptional()
  @IsString()
  postDate?: string;

  @IsOptional()
  @IsString()
  thumbnailUrl?: string;

  @IsOptional()
  @IsNumber()
  studyTime?: number;

  @IsOptional()
  @IsBoolean()
  isNew?: boolean;

  @IsOptional()
  @IsNumber()
  numberOfViews?: number;

  @IsOptional()
  @IsString()
  author?: string;

  @IsOptional()
  @IsNumber()
  numberOfComments?: number;

  @IsOptional()
  @IsString()
  summary?: string;

  @IsOptional()
  @IsString()
  category?: string | null;
}
