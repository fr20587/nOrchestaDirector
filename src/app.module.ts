// NestJS Module
import { Module } from '@nestjs/common';
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
import { ProductModule } from './apis/product/product.module';
import { ProjectsModule } from './apis/projects/projects.module';
import { UsersModule } from './apis/users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/AEstudios', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    }),
    ProductModule,
    UsersModule,
    CategoryModule,
    AuthModule,
    ConfigModule,
    ClientsModule,
    ProjectsModule,
    MiscModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port: number | string;

  constructor(private readonly _configService: ConfigService) {
    AppModule.port = this._configService.get(Configuration.PORT);
  }
}
