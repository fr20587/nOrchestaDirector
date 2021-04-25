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
import { PrRealRightService } from './pr-real-right.service';

// DTO
import { CreatePrRealRightDto } from './dto/create-pr-real-right.dto';
import { UpdatePrRealRightDto } from './dto/update-pr-real-right.dto';

@Controller('pr-real-right')
export class PrRealRightController {
  constructor(private readonly prRealRightService: PrRealRightService) {}

  // Crear derecho
  @Post('/')
  public async create(
    @Res() res,
    @Body() createPrRealRightDto: CreatePrRealRightDto,
  ) {
    try {
      const right = await this.prRealRightService.create(createPrRealRightDto);
      return res.status(HttpStatus.CREATED).json({
        ok: true,
        message: 'Derecho creado correctamente',
        right,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Obtenert todos los derechos del proyecto
  @Get('/:projectID')
  public async findAllByProject(
    @Res() res,
    @Param('projectID') projectID: string,
  ) {
    try {
      const rights = await this.prRealRightService.findAllByProject(projectID);
      return res.status(HttpStatus.OK).json({
        ok: true,
        rights,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Actualizar derecho
  @Patch(':id')
  public async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updatePrRealRightDto: UpdatePrRealRightDto,
  ) {
    try {
      const updatedRight = await this.prRealRightService.update(
        id,
        updatePrRealRightDto,
      );

      if (!updatedRight) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El derecho no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          message: 'Derecho actualizado correctamente',
          updatedRight,
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

  // Eliminar derecho
  @Delete(':id')
  public async remove(@Res() res, @Param('id') id: string) {
    try {
      const responseDeleteRight = await this.prRealRightService.remove(id);
      if (!responseDeleteRight) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El derecho no existe',
        });
      } else {
        return res.status(HttpStatus.ACCEPTED).json({
          ok: true,
          responseDeleteRight,
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
