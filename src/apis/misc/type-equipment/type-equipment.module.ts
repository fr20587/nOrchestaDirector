// NestJS Module
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Service
import { TypeEquipmentService } from './type-equipment.service';

// Controller
import { TypeEquipmentController } from './type-equipment.controller';

// Schema
import { TypeEquipmentSchema } from './schema/type-equipment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'TypeEquipment', schema: TypeEquipmentSchema },
    ]),
  ],
  controllers: [TypeEquipmentController],
  providers: [TypeEquipmentService]
})
export class TypeEquipmentModule {}
