import { PartialType } from '@nestjs/swagger';
import { CreatePrIiiDto } from './create-pr-iii.dto';

export class UpdatePrIiiDto extends PartialType(CreatePrIiiDto) {}
