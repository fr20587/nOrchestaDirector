import { PartialType } from '@nestjs/mapped-types';
import { IPublicService } from '../entities/pr-public-service.entity';
import { CreatePrPublicServiceDto } from './create-pr-public-service.dto';

export class UpdatePrPublicServiceDto extends PartialType(
  CreatePrPublicServiceDto,
) {
  user: string;
  projectID: string;
  type: IPublicService[];
}
