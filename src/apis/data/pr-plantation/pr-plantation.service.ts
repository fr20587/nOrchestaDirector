import { Injectable } from '@nestjs/common';
import { CreatePrPlantationDto } from './dto/create-pr-plantation.dto';
import { UpdatePrPlantationDto } from './dto/update-pr-plantation.dto';

@Injectable()
export class PrPlantationService {
  create(createPrPlantationDto: CreatePrPlantationDto) {
    return 'This action adds a new prPlantation';
  }

  findAll() {
    return `This action returns all prPlantation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prPlantation`;
  }

  update(id: number, updatePrPlantationDto: UpdatePrPlantationDto) {
    return `This action updates a #${id} prPlantation`;
  }

  remove(id: number) {
    return `This action removes a #${id} prPlantation`;
  }
}
