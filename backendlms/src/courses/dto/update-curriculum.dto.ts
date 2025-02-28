import { IsString, IsInt, IsOptional } from 'class-validator'; // Import necessary validation decorators

export class UpdateCurriculumDto {
  @IsString()
  @IsOptional()
  title?: string; // Title of the curriculum section (optional)

  @IsString()
  @IsOptional()
  description?: string; // Optional description of the curriculum section

  @IsInt()
  @IsOptional()
  lectureCount?: number; // Number of lectures in this curriculum section (optional)

  @IsString()
  @IsOptional()
  duration?: string; // Duration of this curriculum section (optional)
}
