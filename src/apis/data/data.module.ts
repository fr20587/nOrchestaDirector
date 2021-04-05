// Nest Modules
import { Module } from '@nestjs/common';

// Modules
import { PosModule } from './pos/pos.module';
import { RawMaterialModule } from './raw-material/raw-material.module';

@Module({
  imports: [PosModule, RawMaterialModule],
})
export class DataModule {}
