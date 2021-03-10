// NestJS Module
import { Module } from '@nestjs/common';

// Controller
import { AppController } from './app.controller';

// Service
import { AppService } from './app.service';

// Modules
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './apis/product/product.module';
import { UsersModule } from './apis/users/users.module';
import { CategoryModule } from './apis/category/category.module';
import { CityModule } from './apis/city/city.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/AgroMarketDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    }),
    ProductModule,
    UsersModule,
    CategoryModule,
    CityModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
