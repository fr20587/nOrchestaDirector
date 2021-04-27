// NestJS Module
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Service
import { PrRawMaterialService } from './pr-raw-material.service';

// Controller
import { PrRawMaterialController } from './pr-raw-material.controller';

// Schema
import { PrRawMaterialSchema } from './schema/pr-raw-material.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'PrRawMaterial', schema: PrRawMaterialSchema },
    ]),
  ],
  controllers: [PrRawMaterialController],
  providers: [PrRawMaterialService],
})
export class PrRawMaterialModule {}
