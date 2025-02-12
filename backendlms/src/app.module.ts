import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesModule } from './courses/courses.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // Make sure you're using the correct database type
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'imaniman',
      database: 'lms',
      entities: [join(__dirname, '**', 'entities', '*.entity{.ts,.js}')], // Correct the entities path
      synchronize: true, // Automatically sync DB (use only for development)
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'), // Serve files from the 'static' directory
      serveRoot: '/static', // Expose static files at '/static'
    }),
    CoursesModule,
    BlogModule, // Your CoursesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
