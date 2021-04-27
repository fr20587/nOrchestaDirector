import { PartialType } from '@nestjs/mapped-types';
import { CreateTypePublicServiceDto } from './create-type-public-service.dto';

export class UpdateTypePublicServiceDto extends PartialType(
  CreateTypePublicServiceDto,
) {
  user: string;
  name: string;
}
