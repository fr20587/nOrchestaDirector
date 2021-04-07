// Nest Modules
import { Module } from '@nestjs/common';

// Modules
import { PosModule } from './pos/pos.module';
import { RawMaterialModule } from './raw-material/raw-material.module';
import { PrPublicServiceModule } from './pr-public-service/pr-public-service.module';
import { PrEquipmentModule } from './pr-equipment/pr-equipment.module';

@Module({
  imports: [PosModule, RawMaterialModule, PrPublicServiceModule, PrEquipmentModule],
})
export class DataModule {}
