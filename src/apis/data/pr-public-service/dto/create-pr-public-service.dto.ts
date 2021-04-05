import { IPublicService } from '../entities/pr-public-service.entity';

export class CreatePrPublicServiceDto {
  user: string;
  projectID: string;
  type: IPublicService[];
}
