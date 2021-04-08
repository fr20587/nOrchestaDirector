import { PartialType } from '@nestjs/swagger';
import { CreatePrFurnitureDto } from './create-pr-furniture.dto';

export class UpdatePrFurnitureDto extends PartialType(CreatePrFurnitureDto) {
  user: string;
  projectID: string;
  type: string;
  name: string;
  price: number;
  code: string;
  brand: string;
  sulpplier: string;
}
