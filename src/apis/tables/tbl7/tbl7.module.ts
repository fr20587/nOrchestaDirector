// NestJS Module
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Service
import { Tbl7Service } from './tbl7.service';

// Controller
import { Tbl7Controller } from './tbl7.controller';

// Schema
import { Tbl7Schema } from './schema/tbl7.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Tbl7', schema: Tbl7Schema }])],
  controllers: [Tbl7Controller],
  providers: [Tbl7Service],
})
export class Tbl7Module {}
