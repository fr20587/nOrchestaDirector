// NestJS Module
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Service
import { PrConstructionTaskService } from './pr-construction-task.service';

// Controller
import { PrConstructionTaskController } from './pr-construction-task.controller';

// Schema
import { ConstructionTaskSchema } from './schema/pr-construction-task.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'PrConstructionTask', schema: ConstructionTaskSchema },
    ]),
  ],
  controllers: [PrConstructionTaskController],
  providers: [PrConstructionTaskService],
})
export class PrConstructionTaskModule {}
