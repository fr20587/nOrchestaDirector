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
import { PrProductivityService } from './pr-productivity.service';

// DTO
import { CreatePrProductivityDto } from './dto/create-pr-productivity.dto';
import { UpdatePrProductivityDto } from './dto/update-pr-productivity.dto';

@Controller('pr-productivity')
export class PrProductivityController {
  constructor(private readonly prProductivityService: PrProductivityService) {}

  // Crear productividad
  @Post('/')
  public async create(
    @Res() res,
    @Body() createPrProductivityDto: CreatePrProductivityDto,
  ) {
    try {
      const productivity = await this.prProductivityService.create(
        createPrProductivityDto,
      );
      if (
        productivity ===
        'Ya existe un productividad para este año en este proyecto'
      ) {
        return res.status(HttpStatus.CONFLICT).json({
          ok: false,
          productivity,
        });
      } else {
        return res.status(HttpStatus.CREATED).json({
          ok: true,
          message: 'Productividad creada correctamente',
          productivity,
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

  // Buscar productividad del proyecto
  @Get('/:projectID')
  public async findAllByProject(
    @Res() res,
    @Param('projectID') projectID: string,
  ) {
    try {
      const productivities = await this.prProductivityService.findAllByProject(
        projectID,
      );
      return res.status(HttpStatus.OK).json({
        ok: true,
        productivities,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Buscar productivdad por id
  @Get('id/:id')
  public async findOne(@Res() res, @Param('id') id: string) {
    try {
      const productivity = await this.prProductivityService.findOne(id);
      if (!productivity) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'La productividad no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          productivity,
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

  // Actualizar productividad
  @Patch(':id')
  public async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updatePrProductivityDto: UpdatePrProductivityDto,
  ) {
    try {
      const updatedProductivity = await this.prProductivityService.update(
        id,
        updatePrProductivityDto,
      );

      if (!updatedProductivity) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'La productividad no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          message: 'Productividad actualizada correctamente',
          updatedProductivity,
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

  // Eliminar productividad
  @Delete(':id')
  public async remove(@Res() res, @Param('id') id: string) {
    try {
      const responseDeleteProductivity = await this.prProductivityService.remove(
        id,
      );
      if (!responseDeleteProductivity) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'La productividad no existe',
        });
      } else {
        return res.status(HttpStatus.ACCEPTED).json({
          ok: true,
          responseDeleteProductivity,
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
