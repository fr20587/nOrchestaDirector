// NestJS Module
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Service
import { GenderService } from './gender.service';

// Controller
import { GenderController } from './gender.controller';

// Schema
import { GenderSchema } from './schema/gender.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Gender', schema: GenderSchema }]),
  ],
  controllers: [GenderController],
  providers: [GenderService],
})
export class GenderModule {}
