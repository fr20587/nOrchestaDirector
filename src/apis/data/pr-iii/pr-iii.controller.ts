import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrIiiService } from './pr-iii.service';
import { CreatePrIiiDto } from './dto/create-pr-iii.dto';
import { UpdatePrIiiDto } from './dto/update-pr-iii.dto';

@Controller('pr-iii')
export class PrIiiController {
  constructor(private readonly prIiiService: PrIiiService) {}

  @Post()
  create(@Body() createPrIiiDto: CreatePrIiiDto) {
    return this.prIiiService.create(createPrIiiDto);
  }

  @Get()
  findAll() {
    return this.prIiiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prIiiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrIiiDto: UpdatePrIiiDto) {
    return this.prIiiService.update(+id, updatePrIiiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prIiiService.remove(+id);
  }
}
