// Nest Modules
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';

// Service
import { Tbl7Service } from './tbl7.service';

// DTO
import { CreateTbl7Dto } from './dto/create-tbl7.dto';
import { UpdateTbl7Dto } from './dto/update-tbl7.dto';

@Controller('tbl7')
export class Tbl7Controller {
  constructor(private readonly tbl7Service: Tbl7Service) {}

  // Crear Materia Prima
  @Post('/')
  public async create(@Res() res, @Body() createTbl7Dto: CreateTbl7Dto) {
    try {
      const tbl7 = await this.tbl7Service.create(createTbl7Dto);
      return res.status(HttpStatus.CREATED).json({
        ok: true,
        message: 'Materia Prima creada correctamente',
        tbl7,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Obtener Materia Prima
  @Get('/:projectID')
  public async findOne(@Res() res, @Param('projectID') projectID: string) {
    try {
      const tbl7 = await this.tbl7Service.findOne(projectID);
      if (!tbl7) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'La tabla no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          tbl7,
        });
      }
      console.log(tbl7)
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Actualizar Materia Prima
  @Patch(':id')
  public async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updateTbl7Dto: UpdateTbl7Dto,
  ) {
    try {
      const updatedTbl7 = await this.tbl7Service.update(id, updateTbl7Dto);

      if (!updatedTbl7) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'EL tabla no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          message: 'Materia Prima actualizado correctamente',
          updatedTbl7,
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

  // Eliminar Materia Prima
  @Delete(':id')
  public async remove(@Res() res, @Param('id') id: string) {
    try {
      const responseDeleteTbl7 = await this.tbl7Service.remove(id);
      if (!responseDeleteTbl7) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'La tabla no existe',
        });
      } else {
        return res.status(HttpStatus.ACCEPTED).json({
          ok: true,
          responseDeleteTbl7,
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
