import {
  IsString,
  IsNumber,
  IsBoolean,
  IsOptional,
  IsEnum,
  ValidateNested,
  IsArray,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CourseLevel } from '../enums/courseLevelEnum';
// import { CourseLevel } from '@/enums/course-level.enum';

class CourseDetailsFAQDto {
  @IsString()
  question: string;

  @IsString()
  answer: string;
}

export class CreateCourseDto {
  @IsString()
  title: string;

  @IsString()
  slug: string;

  @IsNumber()
  @IsOptional()
  basePrice?: number;

  @IsNumber()
  numberOfLectures: number;

  @IsString()
  level: string;

  @IsNumber()
  numOfStudents: number;

  @IsString()
  duration: string;

  @IsBoolean()
  isDownloadable: boolean;

  @IsNumber()
  numOfReviews: number;

  @IsBoolean()
  isFree: boolean;

  @IsString()
  subTitle: string;

  @IsNumber()
  averageReviewRating: number;

  @IsNumber()
  @IsOptional()
  profileImageId?: number;

  @IsString()
  authorName: string;

  @IsString()
  recordStatus: string;

  @IsString()
  @IsOptional()
  authorSpecialty?: string;

  @IsString()
  @IsOptional()
  videoUrl?: string;

  @IsNumber()
  coverImageId: number;

  @IsString()
  description: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CourseDetailsFAQDto)
  frequentlyAskedQuestions: CourseDetailsFAQDto[];

  @IsEnum(CourseLevel)
  levelNumber: CourseLevel;

  @IsArray()
  @IsString({ each: true })
  lectures: string[];
}

// import {
//   IsString,
//   IsInt,
//   IsOptional,
//   IsBoolean,
//   IsDecimal,
// } from 'class-validator';

// export class CreateCourseDto {
//   @IsString()
//   title: string;

//   @IsInt()
//   courseCategoryId: number;

//   @IsString()
//   duration: string;

//   @IsString()
//   level: string;

//   @IsInt()
//   levelNumber: number;

//   @IsDecimal() // Allow decimal for averageReviewRating
//   averageReviewRating: number;

//   @IsInt()
//   numOfReviews: number;

//   @IsInt()
//   coverImageId: number;

//   @IsString()
//   recordStatus: string;

//   @IsString()
//   slug: string;

//   @IsString()
//   subTitle: string;

//   @IsBoolean()
//   isFree: boolean;

//   @IsOptional()
//   @IsDecimal()
//   basePrice?: number;

//   @IsOptional()
//   @IsDecimal()
//   discountedPrice?: number;

//   @IsOptional()
//   @IsString()
//   discountRemainingTime?: string;

//   @IsOptional()
//   @IsString()
//   discountType?: string;
// }
