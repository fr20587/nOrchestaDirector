// NestJS Module
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Service
import { Tbl6Service } from './tbl6.service';

// Controller
import { Tbl6Controller } from './tbl6.controller';

// Schema
import { Tbl6Schema } from './schema/tbl6.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Tbl6', schema: Tbl6Schema }])],
  controllers: [Tbl6Controller],
  providers: [Tbl6Service]
})
export class Tbl6Module {}
