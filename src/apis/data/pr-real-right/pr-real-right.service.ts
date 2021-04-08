import { Injectable } from '@nestjs/common';
import { CreatePrRealRightDto } from './dto/create-pr-real-right.dto';
import { UpdatePrRealRightDto } from './dto/update-pr-real-right.dto';

@Injectable()
export class PrRealRightService {
  create(createPrRealRightDto: CreatePrRealRightDto) {
    return 'This action adds a new prRealRight';
  }

  findAll() {
    return `This action returns all prRealRight`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prRealRight`;
  }

  update(id: number, updatePrRealRightDto: UpdatePrRealRightDto) {
    return `This action updates a #${id} prRealRight`;
  }

  remove(id: number) {
    return `This action removes a #${id} prRealRight`;
  }
}
