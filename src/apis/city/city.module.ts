// NestJS Module
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Controller
import { CityController } from './city.controller';

// Service
import { CityService } from './city.service';

// Schema
import { CitySchema } from './schema/city.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'City', schema: CitySchema }])],
  controllers: [CityController],
  providers: [CityService],
})
export class CityModule {}
