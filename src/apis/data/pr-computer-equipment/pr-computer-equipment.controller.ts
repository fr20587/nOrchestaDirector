import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrComputerEquipmentService } from './pr-computer-equipment.service';
import { CreatePrComputerEquipmentDto } from './dto/create-pr-computer-equipment.dto';
import { UpdatePrComputerEquipmentDto } from './dto/update-pr-computer-equipment.dto';

@Controller('pr-computer-equipment')
export class PrComputerEquipmentController {
  constructor(private readonly prComputerEquipmentService: PrComputerEquipmentService) {}

  @Post()
  create(@Body() createPrComputerEquipmentDto: CreatePrComputerEquipmentDto) {
    return this.prComputerEquipmentService.create(createPrComputerEquipmentDto);
  }

  @Get()
  findAll() {
    return this.prComputerEquipmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prComputerEquipmentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrComputerEquipmentDto: UpdatePrComputerEquipmentDto) {
    return this.prComputerEquipmentService.update(+id, updatePrComputerEquipmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prComputerEquipmentService.remove(+id);
  }
}
