import { Module } from '@nestjs/common';
import { PrAnimalService } from './pr-animal.service';
import { PrAnimalController } from './pr-animal.controller';

@Module({
  controllers: [PrAnimalController],
  providers: [PrAnimalService]
})
export class PrAnimalModule {}
