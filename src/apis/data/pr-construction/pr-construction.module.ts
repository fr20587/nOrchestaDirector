import { Module } from '@nestjs/common';
import { PrConstructionService } from './pr-construction.service';
import { PrConstructionController } from './pr-construction.controller';

@Module({
  controllers: [PrConstructionController],
  providers: [PrConstructionService]
})
export class PrConstructionModule {}
