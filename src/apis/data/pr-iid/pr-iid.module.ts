// NestJS Module
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Service
import { PrIidService } from './pr-iid.service';

// Controller
import { PrIidController } from './pr-iid.controller';

// Schema
import { IidSchema } from './schema/iid.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'PrIid', schema: IidSchema }])],
  controllers: [PrIidController],
  providers: [PrIidService],
})
export class PrIidModule {}
