import { Injectable } from '@nestjs/common';
import { CreatePrAnimalDto } from './dto/create-pr-animal.dto';
import { UpdatePrAnimalDto } from './dto/update-pr-animal.dto';

@Injectable()
export class PrAnimalService {
  create(createPrAnimalDto: CreatePrAnimalDto) {
    return 'This action adds a new prAnimal';
  }

  findAll() {
    return `This action returns all prAnimal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prAnimal`;
  }

  update(id: number, updatePrAnimalDto: UpdatePrAnimalDto) {
    return `This action updates a #${id} prAnimal`;
  }

  remove(id: number) {
    return `This action removes a #${id} prAnimal`;
  }
}
