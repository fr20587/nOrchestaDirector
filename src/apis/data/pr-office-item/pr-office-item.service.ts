import { Injectable } from '@nestjs/common';
import { CreatePrOfficeItemDto } from './dto/create-pr-office-item.dto';
import { UpdatePrOfficeItemDto } from './dto/update-pr-office-item.dto';

@Injectable()
export class PrOfficeItemService {
  create(createPrOfficeItemDto: CreatePrOfficeItemDto) {
    return 'This action adds a new prOfficeItem';
  }

  findAll() {
    return `This action returns all prOfficeItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prOfficeItem`;
  }

  update(id: number, updatePrOfficeItemDto: UpdatePrOfficeItemDto) {
    return `This action updates a #${id} prOfficeItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} prOfficeItem`;
  }
}
