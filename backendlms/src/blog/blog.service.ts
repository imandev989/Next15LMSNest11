import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Blog } from './entities/blog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from 'src/courses/entities/course.entity';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog)
    private readonly blogRepository: Repository<Blog>, // Injecting the Course repository
  ) {}

  // Create a new blog
  async create(createBlogDto: CreateBlogDto): Promise<Blog> {
    const blog = this.blogRepository.create(createBlogDto); // Create an instance of Blog
    return await this.blogRepository.save(blog); // Save and return the new blog
  }

  // Method to get the newest courses with a limit
  async getNewestBlog(limit: number): Promise<Blog[]> {
    return this.blogRepository.find({
      order: { id: 'DESC' }, // Assuming 'id' is auto-incrementing and reflects the creation date
      take: limit, // Limit the number of courses returned
    });
  }

  // // Update an existing blog
  // async update(id: number, updateBlogDto: UpdateBlogDto): Promise<Blog> {
  //   await this.blogRepository.update(id, updateBlogDto);
  //   return this.blogRepository.findOne(id); // Return updated blog
  // }

  // // Get a blog by ID
  // async findOne(id: number): Promise<Blog> {
  //   return this.blogRepository.findOne(id);
  // }

  // // Get all blogs
  // async findAll(): Promise<Blog[]> {
  //   return this.blogRepository.find();
  // }

  // // Delete a blog by ID
  // async remove(id: number): Promise<void> {
  //   await this.blogRepository.delete(id);
  // }

  // create(createBlogDto: CreateBlogDto) {
  //   return 'This action adds a new blog';
  // }

  // findAll() {
  //   return `This action returns all blog`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} blog`;
  // }

  // update(id: number, updateBlogDto: UpdateBlogDto) {
  //   return `This action updates a #${id} blog`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} blog`;
  // }
}
