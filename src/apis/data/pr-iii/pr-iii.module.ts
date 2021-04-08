import { Module } from '@nestjs/common';
import { PrIiiService } from './pr-iii.service';
import { PrIiiController } from './pr-iii.controller';

@Module({
  controllers: [PrIiiController],
  providers: [PrIiiService]
})
export class PrIiiModule {}
