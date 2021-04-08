// NestJS Module
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Service
import { PrAnimalService } from './pr-animal.service';

// Controller
import { PrAnimalController } from './pr-animal.controller';

// Schema
import { AnimalSchema } from './schema/animal.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'PrAnimal', schema: AnimalSchema }]),
  ],
  controllers: [PrAnimalController],
  providers: [PrAnimalService],
})
export class PrAnimalModule {}
