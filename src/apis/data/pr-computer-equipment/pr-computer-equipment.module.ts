import { Module } from '@nestjs/common';
import { PrComputerEquipmentService } from './pr-computer-equipment.service';
import { PrComputerEquipmentController } from './pr-computer-equipment.controller';

@Module({
  controllers: [PrComputerEquipmentController],
  providers: [PrComputerEquipmentService]
})
export class PrComputerEquipmentModule {}
