import { PartialType } from '@nestjs/mapped-types';
import { CreatePublicServiceDto } from './create-public-service.dto';

export class UpdatePublicServiceDto extends PartialType(
  CreatePublicServiceDto,
) {
  user: string;
  type: string;
  name: string;
  unit: string;
}
