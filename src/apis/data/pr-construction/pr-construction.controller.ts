import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrConstructionService } from './pr-construction.service';
import { CreatePrConstructionDto } from './dto/create-pr-construction.dto';
import { UpdatePrConstructionDto } from './dto/update-pr-construction.dto';

@Controller('pr-construction')
export class PrConstructionController {
  constructor(private readonly prConstructionService: PrConstructionService) {}

  @Post()
  create(@Body() createPrConstructionDto: CreatePrConstructionDto) {
    return this.prConstructionService.create(createPrConstructionDto);
  }

  @Get()
  findAll() {
    return this.prConstructionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prConstructionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrConstructionDto: UpdatePrConstructionDto) {
    return this.prConstructionService.update(+id, updatePrConstructionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prConstructionService.remove(+id);
  }
}
