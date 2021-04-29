// NestJS Module
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Service
import { PrProductivityService } from './pr-productivity.service';

// Controller
import { PrProductivityController } from './pr-productivity.controller';

// Schema
import { ProductivitySchema } from './schema/pr-productivity.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'PrProductivity', schema: ProductivitySchema },
    ]),
  ],
  controllers: [PrProductivityController],
  providers: [PrProductivityService],
})
export class PrProductivityModule {}
