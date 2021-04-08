import { Module } from '@nestjs/common';
import { PrIidService } from './pr-iid.service';
import { PrIidController } from './pr-iid.controller';

@Module({
  controllers: [PrIidController],
  providers: [PrIidService]
})
export class PrIidModule {}
