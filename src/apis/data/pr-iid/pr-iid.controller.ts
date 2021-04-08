import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrIidService } from './pr-iid.service';
import { CreatePrIidDto } from './dto/create-pr-iid.dto';
import { UpdatePrIidDto } from './dto/update-pr-iid.dto';

@Controller('pr-iid')
export class PrIidController {
  constructor(private readonly prIidService: PrIidService) {}

  @Post()
  create(@Body() createPrIidDto: CreatePrIidDto) {
    return this.prIidService.create(createPrIidDto);
  }

  @Get()
  findAll() {
    return this.prIidService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prIidService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrIidDto: UpdatePrIidDto) {
    return this.prIidService.update(+id, updatePrIidDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prIidService.remove(+id);
  }
}
