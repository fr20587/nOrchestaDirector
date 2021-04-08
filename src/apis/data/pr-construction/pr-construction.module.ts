// NestJS Module
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Service
import { PrConstructionService } from './pr-construction.service';

// Controller
import { PrConstructionController } from './pr-construction.controller';

// Schema
import { ConstructionSchema } from './schema/construction.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'PrConstruction', schema: ConstructionSchema },
    ]),
  ],
  controllers: [PrConstructionController],
  providers: [PrConstructionService],
})
export class PrConstructionModule {}
