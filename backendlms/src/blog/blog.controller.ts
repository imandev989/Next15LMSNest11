import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Blog } from './entities/blog.entity';

@Controller('api/blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  // Create a new blog
  @Post('newest')
  async create(@Body() createBlogDto: CreateBlogDto): Promise<Blog> {
    return this.blogService.create(createBlogDto);
  }

  // Route for fetching the newest courses
  @Get('newest/:limit')
  getNewestBlog(@Param('limit') limit: number) {
    return this.blogService.getNewestBlog(limit);
  }
  // // Update an existing blog
  // @Put(':id')
  // async update(
  //   @Param('id') id: number,
  //   @Body() updateBlogDto: UpdateBlogDto,
  // ): Promise<Blog> {
  //   return this.blogService.update(id, updateBlogDto);
  // }
}

// @Controller('blog')
// export class BlogController {
//   constructor(private readonly blogService: BlogService) {}

//   @Post()
//   create(@Body() createBlogDto: CreateBlogDto) {
//     return this.blogService.create(createBlogDto);
//   }

//   @Get()
//   findAll() {
//     return this.blogService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.blogService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
//     return this.blogService.update(+id, updateBlogDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.blogService.remove(+id);
//   }
// }
