import {
  IsString,
  IsInt,
  IsOptional,
  IsBoolean,
  IsDecimal,
} from 'class-validator';

export class CreateCourseDto {
  @IsString()
  title: string;

  @IsInt()
  courseCategoryId: number;

  @IsString()
  duration: string;

  @IsString()
  level: string;

  @IsInt()
  levelNumber: number;

  @IsDecimal() // Allow decimal for averageReviewRating
  averageReviewRating: number;

  @IsInt()
  numOfReviews: number;

  @IsInt()
  coverImageId: number;

  @IsString()
  recordStatus: string;

  @IsString()
  slug: string;

  @IsString()
  subTitle: string;

  @IsBoolean()
  isFree: boolean;

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
