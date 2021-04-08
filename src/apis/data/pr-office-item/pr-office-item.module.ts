import { Module } from '@nestjs/common';
import { PrOfficeItemService } from './pr-office-item.service';
import { PrOfficeItemController } from './pr-office-item.controller';

@Module({
  controllers: [PrOfficeItemController],
  providers: [PrOfficeItemService]
})
export class PrOfficeItemModule {}
