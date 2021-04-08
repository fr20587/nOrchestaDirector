import { PartialType } from '@nestjs/swagger';
import { CreatePrComputerEquipmentDto } from './create-pr-computer-equipment.dto';

export class UpdatePrComputerEquipmentDto extends PartialType(
  CreatePrComputerEquipmentDto,
) {
  user: string;
  projectID: string;
  type: string;
  name: string;
  price: number;
  code: string;
  brand: string;
  sulpplier: string;
}
