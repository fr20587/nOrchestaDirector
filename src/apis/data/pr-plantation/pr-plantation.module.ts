import { Module } from '@nestjs/common';
import { PrPlantationService } from './pr-plantation.service';
import { PrPlantationController } from './pr-plantation.controller';

@Module({
  controllers: [PrPlantationController],
  providers: [PrPlantationService]
})
export class PrPlantationModule {}
