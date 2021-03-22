import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectDto } from './create-project.dto';

export class UpdateProjectDto extends PartialType(CreateProjectDto) {
  user: string;
  name: string;
  code: string;
  price: number;
  client: string;
  service: string;
  person: string;
}
