// NestJS Module
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Service
import { PublicServiceService } from './public-service.service';

// Controller
import { PublicServiceController } from './public-service.controller';

// Schema
import { PublicServiceSchema } from './schema/public-service.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'PublicService', schema: PublicServiceSchema },
    ]),
  ],
  controllers: [PublicServiceController],
  providers: [PublicServiceService]
})
export class PublicServiceModule {}
