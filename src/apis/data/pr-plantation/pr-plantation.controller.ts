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
import { PrPlantationService } from './pr-plantation.service';

// DTO
import { CreatePrPlantationDto } from './dto/create-pr-plantation.dto';
import { UpdatePrPlantationDto } from './dto/update-pr-plantation.dto';

@Controller('pr-plantation')
export class PrPlantationController {
  constructor(private readonly prPlantationService: PrPlantationService) {}

  // Crear planatcion
  @Post('/')
  public async create(
    @Res() res,
    @Body() createPrPlantationDto: CreatePrPlantationDto,
  ) {
    try {
      const plantation = await this.prPlantationService.create(
        createPrPlantationDto,
      );
      return res.status(HttpStatus.CREATED).json({
        ok: true,
        message: 'Plantacion creada correctamente',
        plantation,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Buscar todas las plantaciones
  @Get('/')
  public async findAll(@Res() res) {
    try {
      const plantations = await this.prPlantationService.findAll();
      return res.status(HttpStatus.OK).json({
        ok: true,
        plantations,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Obtener todos los muebles por proyecto
  @Get('/:projectID')
  public async findAllByProject(
    @Res() res,
    @Param('projectID') projectID: string,
  ) {
    try {
      const plantations = await this.prPlantationService.findAllByProject(
        projectID,
      );
      return res.status(HttpStatus.OK).json({
        ok: true,
        plantations,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Obtener una plantacion
  @Get(':id')
  public async findOne(@Res() res, @Param('id') id: string) {
    try {
      const plantation = await this.prPlantationService.findOne(id);
      if (!plantation) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El mueble no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          plantation,
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

  // Actualizar plantacion
  @Patch(':id')
  public async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updatePrPlantationDto: UpdatePrPlantationDto,
  ) {
    try {
      const updatedPlantation = await this.prPlantationService.update(
        id,
        updatePrPlantationDto,
      );

      if (!updatedPlantation) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'La plantacion no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          message: 'Plantacion actualizada correctamente',
          updatedPlantation,
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

  // Eliminar plantacion
  @Delete(':id')
  public async remove(@Res() res, @Param('id') id: string) {
    try {
      const responseDeletePlantation = await this.prPlantationService.remove(
        id,
      );
      if (!responseDeletePlantation) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El mueble no existe',
        });
      } else {
        return res.status(HttpStatus.ACCEPTED).json({
          ok: true,
          responseDeletePlantation,
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
