// NestJS Module
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Service
import { PrComputerEquipmentService } from './pr-computer-equipment.service';

// Controller
import { PrComputerEquipmentController } from './pr-computer-equipment.controller';

// Schema
import { ComputerEquipmentSchema } from './schema/computer-equipment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'PrComputerEquipment', schema: ComputerEquipmentSchema },
    ]),
  ],
  controllers: [PrComputerEquipmentController],
  providers: [PrComputerEquipmentService]
})
export class PrComputerEquipmentModule {}
