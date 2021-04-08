import { Module } from '@nestjs/common';
import { PrRealRightService } from './pr-real-right.service';
import { PrRealRightController } from './pr-real-right.controller';

@Module({
  controllers: [PrRealRightController],
  providers: [PrRealRightService]
})
export class PrRealRightModule {}
