import { PartialType } from '@nestjs/swagger';
import { IObject } from '../entities/pr-construction.entity';
import { CreatePrConstructionDto } from './create-pr-construction.dto';

export class UpdatePrConstructionDto extends PartialType(
  CreatePrConstructionDto,
) {
  user: string;
  projectID: string;
  totalCost: number;
  objects: IObject[];
}
