import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrOfficeItemService } from './pr-office-item.service';
import { CreatePrOfficeItemDto } from './dto/create-pr-office-item.dto';
import { UpdatePrOfficeItemDto } from './dto/update-pr-office-item.dto';

@Controller('pr-office-item')
export class PrOfficeItemController {
  constructor(private readonly prOfficeItemService: PrOfficeItemService) {}

  @Post()
  create(@Body() createPrOfficeItemDto: CreatePrOfficeItemDto) {
    return this.prOfficeItemService.create(createPrOfficeItemDto);
  }

  @Get()
  findAll() {
    return this.prOfficeItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prOfficeItemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrOfficeItemDto: UpdatePrOfficeItemDto) {
    return this.prOfficeItemService.update(+id, updatePrOfficeItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prOfficeItemService.remove(+id);
  }
}
