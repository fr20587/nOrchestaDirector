import { Module } from '@nestjs/common';
import { PrOtherAssetService } from './pr-other-asset.service';
import { PrOtherAssetController } from './pr-other-asset.controller';

@Module({
  controllers: [PrOtherAssetController],
  providers: [PrOtherAssetService]
})
export class PrOtherAssetModule {}
