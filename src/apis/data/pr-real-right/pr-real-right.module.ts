// NestJS Module
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Service
import { PrRealRightService } from './pr-real-right.service';

// Controller
import { PrRealRightController } from './pr-real-right.controller';

// Schema
import { RealRightSchema } from './schema/real-right.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'PrRealRight', schema: RealRightSchema },
    ]),
  ],
  controllers: [PrRealRightController],
  providers: [PrRealRightService]
})
export class PrRealRightModule {}
