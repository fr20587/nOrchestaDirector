// NestJS Module
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Service
import { ProjectService } from './project.service';

// Controller
import { ProjectController } from './project.controller';

// Schema
import { ProjectSchema } from './schema/project.schema';
import { LoggerMiddleware } from 'src/apis/auth/middleware/logger.middleware';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Project', schema: ProjectSchema }]),
  ],
  controllers: [ProjectController],
  providers: [ProjectService]
})
export class ProjectModule {
/*   configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('project');
  } */
}
