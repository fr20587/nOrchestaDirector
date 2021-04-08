import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrPlantationService } from './pr-plantation.service';
import { CreatePrPlantationDto } from './dto/create-pr-plantation.dto';
import { UpdatePrPlantationDto } from './dto/update-pr-plantation.dto';

@Controller('pr-plantation')
export class PrPlantationController {
  constructor(private readonly prPlantationService: PrPlantationService) {}

  @Post()
  create(@Body() createPrPlantationDto: CreatePrPlantationDto) {
    return this.prPlantationService.create(createPrPlantationDto);
  }

  @Get()
  findAll() {
    return this.prPlantationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prPlantationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrPlantationDto: UpdatePrPlantationDto) {
    return this.prPlantationService.update(+id, updatePrPlantationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prPlantationService.remove(+id);
  }
}
