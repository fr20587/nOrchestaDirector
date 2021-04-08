import { PartialType } from '@nestjs/swagger';
import { CreatePrRealRightDto } from './create-pr-real-right.dto';

export class UpdatePrRealRightDto extends PartialType(CreatePrRealRightDto) {
  user: string;
  projectID: string;
  name: string;
  cost: number;
  sulpplier: string;
}
