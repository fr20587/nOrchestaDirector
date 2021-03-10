import { PartialType } from '@nestjs/mapped-types';
import { CreateCityDto } from './create-city.dto';

export class UpdateCityDto extends PartialType(CreateCityDto) {
  user: string;
  name: string;
  cost: number;
}
