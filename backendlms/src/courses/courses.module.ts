import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { Course } from './entities/course.entity'; // Import your Course entity here

@Module({
  imports: [TypeOrmModule.forFeature([Course])], // Add Course entity to TypeOrmModule.forFeature
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
