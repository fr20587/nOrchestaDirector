import { PartialType } from '@nestjs/swagger';
import { CreatePrOfficeItemDto } from './create-pr-office-item.dto';

export class UpdatePrOfficeItemDto extends PartialType(CreatePrOfficeItemDto) {}
