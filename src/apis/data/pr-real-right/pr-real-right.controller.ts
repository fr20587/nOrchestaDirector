import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrRealRightService } from './pr-real-right.service';
import { CreatePrRealRightDto } from './dto/create-pr-real-right.dto';
import { UpdatePrRealRightDto } from './dto/update-pr-real-right.dto';

@Controller('pr-real-right')
export class PrRealRightController {
  constructor(private readonly prRealRightService: PrRealRightService) {}

  @Post()
  create(@Body() createPrRealRightDto: CreatePrRealRightDto) {
    return this.prRealRightService.create(createPrRealRightDto);
  }

  @Get()
  findAll() {
    return this.prRealRightService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prRealRightService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrRealRightDto: UpdatePrRealRightDto) {
    return this.prRealRightService.update(+id, updatePrRealRightDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prRealRightService.remove(+id);
  }
}
