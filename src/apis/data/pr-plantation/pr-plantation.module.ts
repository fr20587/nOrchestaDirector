// NestJS Module
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Service
import { PrPlantationService } from './pr-plantation.service';

// Controller
import { PrPlantationController } from './pr-plantation.controller';

// Schema
import { PlantationSchema } from './schema/plantation.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'PrPlantation', schema: PlantationSchema },
    ]),
  ],
  controllers: [PrPlantationController],
  providers: [PrPlantationService],
})
export class PrPlantationModule {}
