import { PartialType } from '@nestjs/swagger';
import { CreatePrAnimalDto } from './create-pr-animal.dto';

export class UpdatePrAnimalDto extends PartialType(CreatePrAnimalDto) {
  user: string;
  projectID: string;
  category: string;
  race: string;
  price: number;
  sulpplier: string;
}
