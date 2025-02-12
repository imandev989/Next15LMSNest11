import {
  IsString,
  IsInt,
  IsOptional,
  IsBoolean,
  IsDecimal,
} from 'class-validator';

export class UpdateCourseDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsInt()
  courseCategoryId?: number;

  @IsOptional()
  @IsString()
  duration?: string;

  @IsOptional()
  @IsString()
  level?: string;

  @IsOptional()
  @IsInt()
  levelNumber?: number;

  @IsOptional()
  @IsDecimal()
  averageReviewRating?: number;

  @IsOptional()
  @IsInt()
  numOfReviews?: number;

  @IsOptional()
  @IsInt()
  coverImageId?: number;

  @IsOptional()
  @IsString()
  recordStatus?: string;

  @IsOptional()
  @IsString()
  slug?: string;

  @IsOptional()
  @IsString()
  subTitle?: string;

  @IsOptional()
  @IsBoolean()
  isFree?: boolean;

  @IsOptional()
  @IsDecimal()
  basePrice?: number;

  @IsOptional()
  @IsDecimal()
  discountedPrice?: number;

  @IsOptional()
  @IsString()
  discountRemainingTime?: string;

  @IsOptional()
  @IsString()
  discountType?: string;
}
