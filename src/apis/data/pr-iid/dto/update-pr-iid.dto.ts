import { PartialType } from '@nestjs/swagger';
import { CreatePrIidDto } from './create-pr-iid.dto';

export class UpdatePrIidDto extends PartialType(CreatePrIidDto) {
  user: string;
  projectID: string;
  type: string;
  name: string;
  cost: number;
}
