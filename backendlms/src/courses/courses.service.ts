import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly coursesRepository: Repository<Course>, // Injecting the Course repository

    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
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

  // Method to find a course by its slug along with FAQs
  async findOneBySlug(slug: string): Promise<Course | undefined> {
    return this.coursesRepository.findOne({
      where: { slug },
      relations: ['frequentlyAskedQuestions'], // Include the related FAQ
    });
  }

  // Get comments by course slug
  // async getCommentsByCourseSlug(slug: string) {
  //   const course = await this.coursesRepository.findOne({
  //     where: { slug },
  //     relations: ['comments'],
  //   });
  //   if (!course) {
  //     throw new NotFoundException('Course not found');
  //   }
  //   console.log('COURSE COMENTS ===>', course.comments);
  //   return course.comments;
  // }

  // Fetch comments by course slug with pagination
  async getCommentsBySlug(slug: string, page: number): Promise<Comment[]> {
    const course = await this.coursesRepository.findOne({
      where: { slug },
      relations: ['comments'],
    });

    // If the course is not found, throw an exception
    if (!course) {
      throw new NotFoundException('Course not found');
    }

    // console.log('COUSERS+++>>', course);
    // Pagination: Adjust comments per page as required
    const commentsPerPage = 10;
    const skip = (page - 1) * commentsPerPage;

    console.log('Requested page:', page);
    console.log('Calculated skip:', skip);

    // If there are no comments for the course
    if (course.comments.length === 0) {
      console.log('No comments found for this course.');
      return [];
    }

    // This is way 1
    // Paginate comments in-memory (on the already fetched array)

    const paginatedComments = course.comments.slice(
      skip,
      skip + commentsPerPage,
    );

    // console.log('Paginated comments:', paginatedComments);

    // console.log('Fetched comments:', paginatedComments);

    return paginatedComments;

    // this is way2
    // Fetch the comments from the Comment table with pagination

    // const comments = await this.commentRepository.find({
    //   // where: { courseId: course.id }, // Filter by courseId
    //   where: { course: { id: course.id } }, // Filter by course.id
    //   skip: skip, // Skip the records based on the page
    //   take: commentsPerPage, // Take the specified number of comments
    // });
    // return comments;
  }

  // update(id: number, updateCourseDto: UpdateCourseDto) {
  //   return `This action updates a #${id} course`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} course`;
  // }
}
