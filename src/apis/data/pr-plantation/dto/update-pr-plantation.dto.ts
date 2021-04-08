import { PartialType } from '@nestjs/swagger';
import { CreatePrPlantationDto } from './create-pr-plantation.dto';

export class UpdatePrPlantationDto extends PartialType(CreatePrPlantationDto) {}
