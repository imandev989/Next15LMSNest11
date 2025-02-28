import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { Course } from './entities/course.entity'; // Import your Course entity here
import { Comment } from './entities/comment.entity';
import { Curriculum } from './entities/curriculum.entity';
import { Lecture } from './entities/lecture.entity';

@Module({
  // imports: [TypeOrmModule.forFeature([Course, Comment])], // Add Course entity to TypeOrmModule.forFeature
  imports: [TypeOrmModule.forFeature([Course, Comment, Curriculum, Lecture])], // Include Curriculum in forFeature
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
