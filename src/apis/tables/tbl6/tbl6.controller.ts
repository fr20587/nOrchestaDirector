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
import { Tbl6Service } from './tbl6.service';

// DTO
import { CreateTbl6Dto } from './dto/create-tbl6.dto';
import { UpdateTbl6Dto } from './dto/update-tbl6.dto';

@Controller('tbl6')
export class Tbl6Controller {
  constructor(private readonly tbl6Service: Tbl6Service) {}

  // Crear tabla 6
  @Post('/')
  public async create(@Res() res, @Body() createTbl6Dto: CreateTbl6Dto) {
    try {
      const tbl6 = await this.tbl6Service.create(createTbl6Dto);
      if (tbl6 === 'Ya existe la tabla 6 en este proyecto') {
        return res.status(HttpStatus.CONFLICT).json({
          ok: false,
          tbl6,
        });
      } else {
        return res.status(HttpStatus.CREATED).json({
          ok: true,
          message: 'Tabla 6 creada correctamente',
          tbl6,
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

  // Obtener tabla 6
  @Get(':id')
  public async findOne(@Res() res, @Param('id') id: string) {
    try {
      const tbl6 = await this.tbl6Service.findOne(id);
      if (!tbl6) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'La tabla no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          tbl6,
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

  // Actualizar tabla 6
  @Patch(':id')
  public async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updateTbl6Dto: UpdateTbl6Dto,
  ) {
    try {
      const updatedTbl6 = await this.tbl6Service.update(id, updateTbl6Dto);

      if (!updatedTbl6) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'EL tabla no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          message: 'Tabla 6 actualizada correctamente',
          updatedTbl6,
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

  // Eliminar tabla 6
  @Delete(':id')
  public async remove(@Res() res, @Param('id') id: string) {
    try {
      const responseDeleteTbl6 = await this.tbl6Service.remove(id);
      if (!responseDeleteTbl6) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'La tabla no existe',
        });
      } else {
        return res.status(HttpStatus.ACCEPTED).json({
          ok: true,
          responseDeleteTbl6,
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
