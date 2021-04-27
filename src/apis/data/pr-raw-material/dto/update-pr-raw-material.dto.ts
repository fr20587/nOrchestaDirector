import { PartialType } from '@nestjs/mapped-types';
import { CreateRawMaterialDto } from './create-pr-raw-material.dto';

export class UpdateRawMaterialDto extends PartialType(CreateRawMaterialDto) {
  cost: number;
  index: number;
  name: string;
  origin: string;
  pos: string;
  projectID: string;
  supplier: string;
  unit: string;
  user: string;
}
