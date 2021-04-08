import { Injectable } from '@nestjs/common';
import { CreatePrIiiDto } from './dto/create-pr-iii.dto';
import { UpdatePrIiiDto } from './dto/update-pr-iii.dto';

@Injectable()
export class PrIiiService {
  create(createPrIiiDto: CreatePrIiiDto) {
    return 'This action adds a new prIii';
  }

  findAll() {
    return `This action returns all prIii`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prIii`;
  }

  update(id: number, updatePrIiiDto: UpdatePrIiiDto) {
    return `This action updates a #${id} prIii`;
  }

  remove(id: number) {
    return `This action removes a #${id} prIii`;
  }
}
