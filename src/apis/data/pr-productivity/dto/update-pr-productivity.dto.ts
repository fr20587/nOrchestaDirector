import { PartialType } from '@nestjs/swagger';
import { CreatePrProductivityDto } from './create-pr-productivity.dto';

export class UpdatePrProductivityDto extends PartialType(
  CreatePrProductivityDto,
) {
  aci: number;
  index: number;
  projectID: string;
  user: string;
  year: number;
}
