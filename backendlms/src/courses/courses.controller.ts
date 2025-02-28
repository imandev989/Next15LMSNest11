import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CreateCurriculumDto } from './dto/create-curriculum.dto';
import { Curriculum } from './entities/curriculum.entity';

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

  // Get comments for a course by slug with pagination
  @Get(':slug/comments')
  async getComments(
    @Param('slug') slug: string, // The slug of the course
    @Query('page') page: number, // The page number for pagination
  ) {
    // Call the service method to fetch the comments for the course
    return this.coursesService.getCommentsBySlug(slug, page);
  }
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
  //   return this.coursesService.update(+id, updateCourseDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.coursesService.remove(+id);
  // }

  // Endpoint to create a new curriculum for a course
  // @Post(':slug/curriculum')
  // async createCurriculum(
  //   @Param('slug') slug: string,
  //   @Body() createCurriculumDtos: CreateCurriculumDto[], // Accepts an array
  // ) {
  //   createCurriculumDtos.forEach((dto) => console.log('A', dto));
  //   return this.coursesService.createCurriculums(slug, createCurriculumDtos);
  // }
  @Post(':slug/curriculum')
  async createCurriculum(
    @Param('slug') slug: string,
    @Body() createCurriculumDto: CreateCurriculumDto,
  ) {
    return this.coursesService.createCurriculums(slug, createCurriculumDto);
  }

  @Get(':slug/curriculum')
  async getCurriculumBySlug(
    @Param('slug') slug: string,
  ): Promise<Curriculum[]> {
    return this.coursesService.getCurriculumBySlug(slug);
  }
}
