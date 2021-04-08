// Nest Modules
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Res,
} from '@nestjs/common';

// Service
import { PrIidService } from './pr-iid.service';

// DTO
import { CreatePrIidDto } from './dto/create-pr-iid.dto';
import { UpdatePrIidDto } from './dto/update-pr-iid.dto';

@Controller('pr-iid')
export class PrIidController {
  constructor(private readonly prIidService: PrIidService) {}

  // Crear IID
  @Post('/')
  public async create(@Res() res, @Body() createPrIidDto: CreatePrIidDto) {
    try {
      const iid = await this.prIidService.create(createPrIidDto);
      return res.status(HttpStatus.CREATED).json({
        ok: true,
        message: 'Inversion Inducida Directa creada correctamente',
        iid,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Obtener todos las IID por proyecto
  @Get('/:projectID')
  public async findAllByProject(
    @Res() res,
    @Param('projectID') projectID: string,
  ) {
    try {
      const iids = await this.prIidService.findAllByProject(projectID);
      return res.status(HttpStatus.OK).json({
        ok: true,
        iids,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Actualizar IID
  @Patch(':id')
  public async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updatePrIidDto: UpdatePrIidDto,
  ) {
    try {
      const updatedIid = await this.prIidService.update(id, updatePrIidDto);

      if (!updatedIid) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'La inversion no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          message: 'Inversion actualizada correctamente',
          updatedIid,
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Eliminar IID
  @Delete(':id')
  public async remove(@Res() res, @Param('id') id: string) {
    try {
      const responseDeleteiid = await this.prIidService.remove(id);
      if (!responseDeleteiid) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'La inversion no existe',
        });
      } else {
        return res.status(HttpStatus.ACCEPTED).json({
          ok: true,
          responseDeleteiid,
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }
}
