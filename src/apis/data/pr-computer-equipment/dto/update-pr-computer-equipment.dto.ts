import { PartialType } from '@nestjs/swagger';
import { CreatePrComputerEquipmentDto } from './create-pr-computer-equipment.dto';

export class UpdatePrComputerEquipmentDto extends PartialType(CreatePrComputerEquipmentDto) {}
