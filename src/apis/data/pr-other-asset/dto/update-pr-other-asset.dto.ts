import { PartialType } from '@nestjs/swagger';
import { CreatePrOtherAssetDto } from './create-pr-other-asset.dto';

export class UpdatePrOtherAssetDto extends PartialType(CreatePrOtherAssetDto) {}
