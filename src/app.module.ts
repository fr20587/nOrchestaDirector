// NestJS Module
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Controller
import { AppController } from './app.controller';

// Service
import { AppService } from './app.service';
import { ConfigService } from './config/config.service';

// Modules
import { AuthModule } from './apis/auth/auth.module';
import { CategoryModule } from './apis/category/category.module';

import { ClientsModule } from './apis/clients/clients.module';
import { ConfigModule } from './config/config.module';
import { Configuration } from './config/config.keys';
import { MiscModule } from './apis/misc/misc.module';

import { ProjectsModule } from './apis/projects/projects.module';
import { UsersModule } from './apis/users/users.module';
import { Tbl6Module } from './apis/tables/tbl6/tbl6.module';
import { LoggerMiddleware } from './apis/auth/middleware/logger.middleware';
import { ProjectController } from './apis/projects/project/project.controller';
import { DataModule } from './apis/data/data.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/AEstudios', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    }),
    UsersModule,
    CategoryModule,
    AuthModule,
    ConfigModule,
    ClientsModule,
    ProjectsModule,
    MiscModule,
    Tbl6Module,
    DataModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
/*   configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(ProjectController);
  } */

  static port: number | string;

  constructor(private readonly _configService: ConfigService) {
    AppModule.port = this._configService.get(Configuration.PORT);
  }
}
