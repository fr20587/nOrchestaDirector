import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrOtherAssetService } from './pr-other-asset.service';
import { CreatePrOtherAssetDto } from './dto/create-pr-other-asset.dto';
import { UpdatePrOtherAssetDto } from './dto/update-pr-other-asset.dto';

@Controller('pr-other-asset')
export class PrOtherAssetController {
  constructor(private readonly prOtherAssetService: PrOtherAssetService) {}

  @Post()
  create(@Body() createPrOtherAssetDto: CreatePrOtherAssetDto) {
    return this.prOtherAssetService.create(createPrOtherAssetDto);
  }

  @Get()
  findAll() {
    return this.prOtherAssetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prOtherAssetService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrOtherAssetDto: UpdatePrOtherAssetDto) {
    return this.prOtherAssetService.update(+id, updatePrOtherAssetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prOtherAssetService.remove(+id);
  }
}
