import { PartialType } from '@nestjs/mapped-types';
import { CreatePrEquipmentDto } from './create-pr-equipment.dto';

export class UpdatePrEquipmentDto extends PartialType(CreatePrEquipmentDto) {
  user: string;
  projectID: string;
  type: string;
  name: string;
  price: number;
  code: string;
  brand: string;
  sulpplier: string;
}
