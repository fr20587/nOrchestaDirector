// NestJS Module
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Controller
import { AppController } from './app.controller';

// Service
import { AppService } from './app.service';

// Modules
import { AuthModule } from './apis/auth/auth.module';
import { CategoryModule } from './apis/category/category.module';
import { CityModule } from './apis/city/city.module';
import { ProductModule } from './apis/product/product.module';
import { UsersModule } from './apis/users/users.module';
import { ConfigModule } from './config/config.module';
import { Configuration } from './config/config.keys';
import { ConfigService } from './config/config.service';
import { ClientsModule } from './apis/clients/clients.module';
import { ProjectsModule } from './apis/projects/projects.module';

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
    CityModule,
    AuthModule,
    ConfigModule,
    ClientsModule,
    ProjectsModule,
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
