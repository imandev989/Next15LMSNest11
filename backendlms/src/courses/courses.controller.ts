import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('api/courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post('newest')
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  // Define the GET route for 'slugs' to return only the slugs of all courses
  @Get('slugs')
  async findAllSlugs() {
    return this.coursesService.findAll(); // This will return only the slugs
  }

  // @Get('newest')
  // findAll() {
  //   return this.coursesService.findAll();
  // }

  // Route for fetching the newest courses
  @Get('newest/:limit')
  getNewestCourses(@Param('limit') limit: number) {
    return this.coursesService.getNewestCourses(limit);
  }

  // Route to find a course by its slug
  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.coursesService.findOneBySlug(slug); // Pass slug to the service
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
  //   return this.coursesService.update(+id, updateCourseDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.coursesService.remove(+id);
  // }
}
