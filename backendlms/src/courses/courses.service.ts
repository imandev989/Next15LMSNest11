import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly coursesRepository: Repository<Course>, // Injecting the Course repository
  ) {}

  // Method to get the newest courses with a limit
  async getNewestCourses(limit: number): Promise<Course[]> {
    return this.coursesRepository.find({
      order: { id: 'DESC' }, // Assuming 'id' is auto-incrementing and reflects the creation date
      take: limit, // Limit the number of courses returned
    });
  }

  // Method to create a new course
  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    const newCourse = this.coursesRepository.create(createCourseDto); // Create a new course entity
    return this.coursesRepository.save(newCourse); // Save the new course in the database
  }

  // Method to get all slugs as an array of strings
  async findAll(): Promise<string[]> {
    // Use select to only fetch the slugs, then map to an array of slugs
    const courses = await this.coursesRepository.find({ select: ['slug'] });
    return courses.map((course) => course.slug); // Map to an array of slugs
  }

  // create(createCourseDto: CreateCourseDto) {
  //   return 'This action adds a new course';
  // }

  // findAll() {
  //   return `This action returns all courses`;
  // }

  // Method to find a course by its slug
  async findOneBySlug(slug: string): Promise<Course | undefined> {
    return this.coursesRepository.findOne({ where: { slug } });
  }
  // update(id: number, updateCourseDto: UpdateCourseDto) {
  //   return `This action updates a #${id} course`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} course`;
  // }
}
