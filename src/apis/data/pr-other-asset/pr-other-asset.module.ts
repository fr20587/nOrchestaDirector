// NestJS Module
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Service
import { PrOtherAssetService } from './pr-other-asset.service';

// Controller
import { PrOtherAssetController } from './pr-other-asset.controller';

// Schema
import { OtherAssetSchema } from './schema/other-asset.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'PrOtherAsset', schema: OtherAssetSchema },
    ]),
  ],
  controllers: [PrOtherAssetController],
  providers: [PrOtherAssetService]
})
export class PrOtherAssetModule {}
