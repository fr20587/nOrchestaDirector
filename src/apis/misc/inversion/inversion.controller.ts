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
import { InversionService } from './inversion.service';

// DTO
import { CreateInversionDto } from './dto/create-inversion.dto';
import { UpdateInversionDto } from './dto/update-inversion.dto';

@Controller('inversion')
export class InversionController {
  constructor(private readonly inversionService: InversionService) {}

  // Crear Destino de inversión
  @Post('/')
  public async create(
    @Res() res,
    @Body() createInversionDto: CreateInversionDto,
  ) {
    try {
      const inversion = await this.inversionService.create(createInversionDto);
      if (inversion === 'Ya existe un destino de inversión con este nombre') {
        return res.status(HttpStatus.CONFLICT).json({
          ok: false,
          inversion,
        });
      } else {
        return res.status(HttpStatus.CREATED).json({
          ok: true,
          message: 'Destidno de inversión creado correctamente',
          inversion,
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

  // Buscar todos los destinos de inversión
  @Get('/')
  public async findAll(@Res() res) {
    try {
      const inversions = await this.inversionService.findAll();
      return res.status(HttpStatus.OK).json({
        ok: true,
        inversions,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Buscar un destino de inversión
  @Get(':id')
  public async findOne(@Res() res, @Param('id') id: string) {
    try {
      const inversion = await this.inversionService.findOne(id);
      if (!inversion) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El destino de inversión no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          inversion,
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

  // Actualizar un destino de inversión
  @Patch(':id')
  public async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updateInversionDto: UpdateInversionDto,
  ) {
    try {
      const updatedInversion = await this.inversionService.update(
        id,
        updateInversionDto,
      );

      if (!updatedInversion) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'EL destino de inversión no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          message: 'Destino de inversión actualizado correctamente',
          updatedInversion,
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

  // Eliminar un destino de inversión
  @Delete(':id')
  public async remove(@Res() res, @Param('id') id: string) {
    try {
      const responseDeleteInversion = await this.inversionService.remove(id);
      if (!responseDeleteInversion) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El destino de inversión no existe',
        });
      } else {
        return res.status(HttpStatus.ACCEPTED).json({
          ok: true,
          responseDeleteInversion,
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
