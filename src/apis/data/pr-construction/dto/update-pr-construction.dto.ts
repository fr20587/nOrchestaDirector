import { PartialType } from '@nestjs/swagger';
import { CreatePrConstructionDto } from './create-pr-construction.dto';

export class UpdatePrConstructionDto extends PartialType(CreatePrConstructionDto) {}
