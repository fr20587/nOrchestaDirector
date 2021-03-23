// NestJS Module
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Service
import { CountryService } from './country.service';

// Controller
import { CountryController } from './country.controller';

// Schema
import { CountrySchema } from './schema/country.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Country', schema: CountrySchema }]),
  ],
  controllers: [CountryController],
  providers: [CountryService],
})
export class CountryModule {}
