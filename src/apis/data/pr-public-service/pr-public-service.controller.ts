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
import { PrPublicServiceService } from './pr-public-service.service';

// DTO
import { CreatePrPublicServiceDto } from './dto/create-pr-public-service.dto';
import { UpdatePrPublicServiceDto } from './dto/update-pr-public-service.dto';

@Controller('pr-public-service')
export class PrPublicServiceController {
  constructor(
    private readonly prPublicServiceService: PrPublicServiceService,
  ) {}

  // Crear servicios publicos
  @Post('/')
  public async create(
    @Res() res,
    @Body() createPrPublicServiceDto: CreatePrPublicServiceDto,
  ) {
    try {
      const publicServices = await this.prPublicServiceService.create(
        createPrPublicServiceDto,
      );
      if (
        publicServices ===
        'Ya existen un servicio público con este nombre para este proyecto'
      ) {
        return res.status(HttpStatus.CONFLICT).json({
          ok: false,
          publicServices,
        });
      } else {
        return res.status(HttpStatus.CREATED).json({
          ok: true,
          message: 'Servicios publicos creado correctamente',
          publicServices,
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

  // Buscar los servcios publicos del proyecto
  @Get('/:projectID')
  public async findByProject(
    @Res() res,
    @Param('projectID') projectID: string,
  ) {
    try {
      const prPublicServices = await this.prPublicServiceService.findByProject(
        projectID,
      );

      if (
        prPublicServices ===
        'Aun no existen los servicios publicos para este proyecto'
      ) {
        return res.status(HttpStatus.OK).json({
          ok: false,
          prPublicServices,
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          prPublicServices,
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

  // Actualizar los servicios publicos
  @Patch(':id')
  public async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updatePrPublicServiceDto: UpdatePrPublicServiceDto,
  ) {
    try {
      const updatedPrPublicServices = await this.prPublicServiceService.update(
        id,
        updatePrPublicServiceDto,
      );

      if (!updatedPrPublicServices) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'Los servicios publicos no existen',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          message: 'Servicios publicos actualizados correctamente',
          updatedPrPublicServices,
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

  // Eliminar servicios publicos
  @Delete(':id')
  public async remove(@Res() res, @Param('id') id: string) {
    try {
      const responseDeletePrPublicServices = await this.prPublicServiceService.remove(
        id,
      );
      if (!responseDeletePrPublicServices) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'Los servicios publicos no existen',
        });
      } else {
        return res.status(HttpStatus.ACCEPTED).json({
          ok: true,
          responseDeletePrPublicServices,
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
