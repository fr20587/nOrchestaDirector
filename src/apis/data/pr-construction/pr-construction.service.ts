import { Injectable } from '@nestjs/common';
import { CreatePrConstructionDto } from './dto/create-pr-construction.dto';
import { UpdatePrConstructionDto } from './dto/update-pr-construction.dto';

@Injectable()
export class PrConstructionService {
  create(createPrConstructionDto: CreatePrConstructionDto) {
    return 'This action adds a new prConstruction';
  }

  findAll() {
    return `This action returns all prConstruction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prConstruction`;
  }

  update(id: number, updatePrConstructionDto: UpdatePrConstructionDto) {
    return `This action updates a #${id} prConstruction`;
  }

  remove(id: number) {
    return `This action removes a #${id} prConstruction`;
  }
}
