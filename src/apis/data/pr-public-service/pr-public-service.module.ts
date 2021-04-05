// NestJS Module
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Modules

// Service
import { PrPublicServiceService } from './pr-public-service.service';

// Controller
import { PrPublicServiceController } from './pr-public-service.controller';

// Schema
import { PrPublicServiceSchema } from './schema/pr-public-service.shema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'PrPublicService', schema: PrPublicServiceSchema },
    ]),
  ],
  controllers: [PrPublicServiceController],
  providers: [PrPublicServiceService],
})
export class PrPublicServiceModule {}
