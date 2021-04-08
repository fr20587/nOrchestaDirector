import { Injectable } from '@nestjs/common';
import { CreatePrIidDto } from './dto/create-pr-iid.dto';
import { UpdatePrIidDto } from './dto/update-pr-iid.dto';

@Injectable()
export class PrIidService {
  create(createPrIidDto: CreatePrIidDto) {
    return 'This action adds a new prIid';
  }

  findAll() {
    return `This action returns all prIid`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prIid`;
  }

  update(id: number, updatePrIidDto: UpdatePrIidDto) {
    return `This action updates a #${id} prIid`;
  }

  remove(id: number) {
    return `This action removes a #${id} prIid`;
  }
}
