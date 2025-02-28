import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';
import { Comment } from './entities/comment.entity';
import console from 'console';
import { Curriculum } from './entities/curriculum.entity';
import { CreateCurriculumDto } from './dto/create-curriculum.dto';
import { Lecture } from './entities/lecture.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly coursesRepository: Repository<Course>, // Injecting the Course repository

    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
    @InjectRepository(Curriculum)
    private readonly curriculumRepository: Repository<Curriculum>, // Inject the Curriculum repository

    @InjectRepository(Lecture)
    private readonly lectureRepository: Repository<Lecture>, // Inject the Lecture repository
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
  async getCommentsBySlug(slug: string, page: number): Promise<object> {
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
    const commentsPerPage = 2;
    // const skip = (page - 1) * commentsPerPage;
    const skip = (Number(page) - 1) * commentsPerPage; // Ensure page is a number

    // console.log('Requested page:', page);
    // console.log('Calculated skip:', skip);

    // If there are no comments for the course
    if (!course.comments || course.comments.length === 0) {
      console.log('No comments found for this course.');
      return { comments: [], nextPage: null }; // Return empty array and null nextPage
    }

    // This is way 1
    // Paginate comments in-memory (on the already fetched array)

    // const paginatedComments = course.comments.slice(
    //   skip,
    //   skip + commentsPerPage,
    // );

    // console.log('Paginated comments:', paginatedComments);

    // console.log('Fetched comments:', paginatedComments);

    // return paginatedComments;

    // this is way2
    // Fetch the comments from the Comment table with pagination

    const comments = await this.commentRepository.find({
      // where: { courseId: course.id }, // Filter by courseId
      where: { course: { id: course.id } }, // Filter by course.id
      skip: skip, // Skip the records based on the page
      take: commentsPerPage, // Take the specified number of comments
    });

    // Check if there are more comments for the next page
    const totalComments = await this.commentRepository.count({
      where: { course: { id: course.id } }, // Filter by course.id
    });

    // p = parseInt(page);
    // console.log('page', typeof page);

    // Calculate nextPage: if there are more comments, increment the page number
    // const nextPage = totalComments > skip + comments.length ? page + 1 : null;
    const nextPage =
      totalComments > skip + comments.length ? Number(page) + 1 : null;

    // Correct nextPage calculation
    // const nextPage = skip + comments.length < totalComments ? page + 1 : null;

    return {
      comments,
      nextPage, // Return the next page number, or null if there are no more comments
    };

    // return {
    //   comments,
    //   nextPage, // Return the next page number, or null if there are no more comments
    // };
  }

  // update(id: number, updateCourseDto: UpdateCourseDto) {
  //   return `This action updates a #${id} course`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} course`;
  // }

  //--------------------------------------------

  // Method to create a new curriculum for a course
  async createCurriculums(
    slug: string,
    createCurriculumDto: CreateCurriculumDto,
  ) {
    const course = await this.coursesRepository.findOne({ where: { slug } });
    if (!course) {
      throw new NotFoundException('Course not found');
    }

    if (
      !createCurriculumDto.lectures ||
      !Array.isArray(createCurriculumDto.lectures)
    ) {
      throw new Error('Lectures must be an array');
    }

    // return course.id;
    // Create the curriculum
    const curriculum = this.curriculumRepository.create({
      title: createCurriculumDto.title,
      duration: createCurriculumDto.duration,
      numOfLectures: createCurriculumDto.lectures.length,
      course: course,
    });

    // Save curriculum to get the ID
    const savedCurriculum = await this.curriculumRepository.save(curriculum);

    // Create and save lectures associated with the curriculum
    const lectures = createCurriculumDto.lectures.map((lectureDto) =>
      this.lectureRepository.create({
        ...lectureDto,
        curriculum: savedCurriculum,
      }),
    );

    await this.lectureRepository.save(lectures);

    return { ...savedCurriculum, lectures };
  }

  // Get All Curriculum

  async getCurriculumBySlug(slug: string): Promise<any[]> {
    const course = await this.coursesRepository.findOne({
      where: { slug },
      relations: ['curriculums', 'curriculums.lectures'], // Loading curriculum and related lectures
    });

    if (!course) {
      throw new NotFoundException(`Course with slug "${slug}" not found`);
    }

    // Map the course curriculum data to the required format
    return course.curriculums.map((curriculum) => ({
      id: curriculum.id,
      title: curriculum.title,
      numOfLectures: curriculum.numOfLectures,
      duration: curriculum.duration,
      lectures: curriculum.lectures.map((lecture) => ({
        title: lecture.title,
        duration: lecture.duration,
        description: lecture.description,
        videoSize: lecture.videoSize,
      })),
    }));
  }
}
