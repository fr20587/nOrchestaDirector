import { PartialType } from '@nestjs/swagger';
import { CreatePrConstructionObjectDto } from './create-pr-construction-object.dto';

export class UpdatePrConstructionObjectDto extends PartialType(
  CreatePrConstructionObjectDto,
) {
  user: string;
  projectID: string;
  name: string;
}
