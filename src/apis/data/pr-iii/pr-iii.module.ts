// NestJS Module
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Service
import { PrIiiService } from './pr-iii.service';

// Controller
import { PrIiiController } from './pr-iii.controller';

// Schema
import { IiiSchema } from './schema/iii.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'PrIii', schema: IiiSchema }])],
  controllers: [PrIiiController],
  providers: [PrIiiService],
})
export class PrIiiModule {}
