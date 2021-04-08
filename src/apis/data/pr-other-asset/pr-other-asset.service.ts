import { Injectable } from '@nestjs/common';
import { CreatePrOtherAssetDto } from './dto/create-pr-other-asset.dto';
import { UpdatePrOtherAssetDto } from './dto/update-pr-other-asset.dto';

@Injectable()
export class PrOtherAssetService {
  create(createPrOtherAssetDto: CreatePrOtherAssetDto) {
    return 'This action adds a new prOtherAsset';
  }

  findAll() {
    return `This action returns all prOtherAsset`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prOtherAsset`;
  }

  update(id: number, updatePrOtherAssetDto: UpdatePrOtherAssetDto) {
    return `This action updates a #${id} prOtherAsset`;
  }

  remove(id: number) {
    return `This action removes a #${id} prOtherAsset`;
  }
}
