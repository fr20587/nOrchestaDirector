// NestJS Module
import { Module } from '@nestjs/common';

// Controller
import { AppController } from './app.controller';

// Service
import { AppService } from './app.service';

// Module
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './apis/product/product.module';
import { UsersModule } from './apis/users/users.module';


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
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ],
})
export class AppModule {}
