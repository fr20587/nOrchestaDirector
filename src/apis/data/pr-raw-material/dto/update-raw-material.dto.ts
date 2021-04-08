import { PartialType } from '@nestjs/mapped-types';
import { CreateRawMaterialDto } from './create-raw-material.dto';

export class UpdateRawMaterialDto extends PartialType(CreateRawMaterialDto) {
  user: string;
  projectID: string;
  supplier: string;
  name: string;
  origin: string;
  price: number;
  unit: string;
}
