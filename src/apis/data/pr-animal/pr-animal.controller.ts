import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrAnimalService } from './pr-animal.service';
import { CreatePrAnimalDto } from './dto/create-pr-animal.dto';
import { UpdatePrAnimalDto } from './dto/update-pr-animal.dto';

@Controller('pr-animal')
export class PrAnimalController {
  constructor(private readonly prAnimalService: PrAnimalService) {}

  @Post()
  create(@Body() createPrAnimalDto: CreatePrAnimalDto) {
    return this.prAnimalService.create(createPrAnimalDto);
  }

  @Get()
  findAll() {
    return this.prAnimalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prAnimalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrAnimalDto: UpdatePrAnimalDto) {
    return this.prAnimalService.update(+id, updatePrAnimalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prAnimalService.remove(+id);
  }
}
