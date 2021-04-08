import { PartialType } from '@nestjs/swagger';
import { CreatePrAnimalDto } from './create-pr-animal.dto';

export class UpdatePrAnimalDto extends PartialType(CreatePrAnimalDto) {}
