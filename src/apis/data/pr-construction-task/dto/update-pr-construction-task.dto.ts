import { PartialType } from '@nestjs/swagger';
import { CreatePrConstructionTaskDto } from './create-pr-construction-task.dto';

export class UpdatePrConstructionTaskDto extends PartialType(
  CreatePrConstructionTaskDto,
) {
  user: string;
  projectID: string;
  name: string;
  cost: number;
  supplier: string;
}
