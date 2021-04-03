// Nest Modules
import { Module } from '@nestjs/common';

// Modules
import { PosModule } from './pos/pos.module';

@Module({
  imports: [PosModule],
})
export class DataModule {}
