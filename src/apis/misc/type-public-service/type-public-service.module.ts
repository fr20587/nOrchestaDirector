// NestJS Module
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Service
import { TypePublicServiceService } from './type-public-service.service';

// Controller
import { TypePublicServiceController } from './type-public-service.controller';

// Schema
import { TypePublicServiceSchema } from './schema/type-public-service.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'TypePublicService', schema: TypePublicServiceSchema },
    ]),
  ],
  controllers: [TypePublicServiceController],
  providers: [TypePublicServiceService],
})
export class TypePublicServiceModule {}
