import { PartialType } from '@nestjs/mapped-types';
import { CreatePrPublicServiceDto } from './create-pr-public-service.dto';

export class UpdatePrPublicServiceDto extends PartialType(
  CreatePrPublicServiceDto,
) {
  cost: number;
  index: number;
  name: string;
  projectID: string;
  type: string;
  unit: string;
  user: string;
}
