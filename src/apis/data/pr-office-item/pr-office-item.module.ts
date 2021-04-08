// NestJS Module
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Service
import { PrOfficeItemService } from './pr-office-item.service';

// Controller
import { PrOfficeItemController } from './pr-office-item.controller';

// Schema
import { OfficeItemSchema } from './schema/office-item.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'PrOfficeItem', schema: OfficeItemSchema },
    ]),
  ],
  controllers: [PrOfficeItemController],
  providers: [PrOfficeItemService],
})
export class PrOfficeItemModule {}
