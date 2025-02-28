import {
  IsString,
  IsNotEmpty,
  IsNumber,
  Min,
  MaxLength,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateLectureDto } from './create-lecture.dto';

export class CreateCurriculumDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  title: string;

  @IsNumber()
  @Min(1)
  numOfLectures: number;

  @IsString()
  @IsNotEmpty()
  duration: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateLectureDto)
  lectures: CreateLectureDto[];
}

// import { IsString, IsInt, IsNotEmpty, IsOptional } from 'class-validator'; // Import necessary validation decorators

// export class CreateCurriculumDto {
//   @IsString()
//   @IsNotEmpty()
//   title: string; // Title of the curriculum section

//   @IsString()
//   @IsOptional()
//   description?: string; // Optional description of the curriculum section

//   @IsInt()
//   @IsNotEmpty()
//   lectureCount: number; // Number of lectures in this curriculum section

//   @IsString()
//   @IsNotEmpty()
//   duration: string; // Duration of this curriculum section (e.g., "3 hours")

//   @IsInt()
//   @IsNotEmpty()
//   courseId: number; // The ID of the course this curriculum belongs to
// }
