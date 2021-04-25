// NestJS Module
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Service
import { PrConstructionObjectService } from './pr-construction-object.service';

// Controller
import { PrConstructionObjectController } from './pr-construction-object.controller';

// Schema
import { ConstructionObjectSchema } from './schema/pr-construction-object.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'PrConstructionObject', schema: ConstructionObjectSchema },
    ]),
  ],
  controllers: [PrConstructionObjectController],
  providers: [PrConstructionObjectService],
})
export class PrConstructionObjectModule {}
