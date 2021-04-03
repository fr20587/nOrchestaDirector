import { PartialType } from '@nestjs/mapped-types';
import { CreatePoDto } from './create-po.dto';

export class UpdatePoDto extends PartialType(CreatePoDto) {
  user: string;
  projectID: string;
  client: string;
  name: string;
  type: string;
  price: number;
  unit: string;
}
