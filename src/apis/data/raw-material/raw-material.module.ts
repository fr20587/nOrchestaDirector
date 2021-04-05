// NestJS Module
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Service
import { RawMaterialService } from './raw-material.service';

// Controller
import { RawMaterialController } from './raw-material.controller';

// Schema
import { RawMaterialSchema } from './schema/raw-material.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'RawMaterial', schema: RawMaterialSchema },
    ]),
  ],
  controllers: [RawMaterialController],
  providers: [RawMaterialService]
})
export class RawMaterialModule {}
