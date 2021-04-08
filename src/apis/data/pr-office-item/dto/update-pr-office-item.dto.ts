import { PartialType } from '@nestjs/swagger';
import { CreatePrOfficeItemDto } from './create-pr-office-item.dto';

export class UpdatePrOfficeItemDto extends PartialType(CreatePrOfficeItemDto) {
  user: string;
  projectID: string;
  type: string;
  price: number;
  code: string;
  brand: string;
  sulpplier: string;
}
