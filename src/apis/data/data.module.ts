// Nest Modules
import { Module } from '@nestjs/common';

// Modules
import { PosModule } from './pos/pos.module';
import { RawMaterialModule } from './raw-material/raw-material.module';
import { PrPublicServiceModule } from './pr-public-service/pr-public-service.module';

@Module({
  imports: [PosModule, RawMaterialModule, PrPublicServiceModule],
})
export class DataModule {}
