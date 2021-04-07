// NestJS Module
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Service
import { PrEquipmentService } from './pr-equipment.service';

// Controller
import { PrEquipmentController } from './pr-equipment.controller';

// Schema
import { EquipmentSchema } from './schema/equipment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'PrEquipment', schema: EquipmentSchema },
    ]),
  ],
  controllers: [PrEquipmentController],
  providers: [PrEquipmentService],
})
export class PrEquipmentModule {}
