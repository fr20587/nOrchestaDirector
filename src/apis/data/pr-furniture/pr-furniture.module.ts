// NestJS Module
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Service
import { PrFurnitureService } from './pr-furniture.service';

// Controller
import { PrFurnitureController } from './pr-furniture.controller';

// Schema
import { FurnitureSchema } from './schema/furniture.shema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'PrFurniture', schema: FurnitureSchema },
    ]),
  ],
  controllers: [PrFurnitureController],
  providers: [PrFurnitureService],
})
export class PrFurnitureModule {}
