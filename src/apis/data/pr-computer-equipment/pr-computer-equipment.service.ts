import { Injectable } from '@nestjs/common';
import { CreatePrComputerEquipmentDto } from './dto/create-pr-computer-equipment.dto';
import { UpdatePrComputerEquipmentDto } from './dto/update-pr-computer-equipment.dto';

@Injectable()
export class PrComputerEquipmentService {
  create(createPrComputerEquipmentDto: CreatePrComputerEquipmentDto) {
    return 'This action adds a new prComputerEquipment';
  }

  findAll() {
    return `This action returns all prComputerEquipment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prComputerEquipment`;
  }

  update(id: number, updatePrComputerEquipmentDto: UpdatePrComputerEquipmentDto) {
    return `This action updates a #${id} prComputerEquipment`;
  }

  remove(id: number) {
    return `This action removes a #${id} prComputerEquipment`;
  }
}
