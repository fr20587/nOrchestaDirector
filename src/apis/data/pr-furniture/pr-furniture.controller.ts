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
import { PrFurnitureService } from './pr-furniture.service';

// DTO
import { CreatePrFurnitureDto } from './dto/create-pr-furniture.dto';
import { UpdatePrFurnitureDto } from './dto/update-pr-furniture.dto';

@Controller('pr-furniture')
export class PrFurnitureController {
  constructor(private readonly prFurnitureService: PrFurnitureService) {}

  // Crear mueble
  @Post('/')
  public async create(
    @Res() res,
    @Body() createPrFurnitureDto: CreatePrFurnitureDto,
  ) {
    try {
      const furniture = await this.prFurnitureService.create(
        createPrFurnitureDto,
      );
      return res.status(HttpStatus.CREATED).json({
        ok: true,
        message: 'Mueble creado correctamente',
        furniture,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Obtener todos los muebles
  @Get('/')
  public async findAll(@Res() res) {
    try {
      const furnitures = await this.prFurnitureService.findAll();
      return res.status(HttpStatus.OK).json({
        ok: true,
        furnitures,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Obtener todos los equipos por proyecto
  @Get('/:projectID')
  public async findAllByProject(
    @Res() res,
    @Param('projectID') projectID: string,
  ) {
    try {
      const furnitures = await this.prFurnitureService.findAllByProject(
        projectID,
      );
      return res.status(HttpStatus.OK).json({
        ok: true,
        furnitures,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Obtener un equipo
  @Get(':id')
  public async findOne(@Res() res, @Param('id') id: string) {
    try {
      const furniture = await this.prFurnitureService.findOne(id);
      if (!furniture) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El mueble no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          furniture,
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

  // Actualizar mueble
  @Patch(':id')
  public async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updatePrFurnitureDto: UpdatePrFurnitureDto,
  ) {
    try {
      const updatedFurniture = await this.prFurnitureService.update(
        id,
        updatePrFurnitureDto,
      );

      if (!updatedFurniture) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El mueble no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          message: 'Mueble actualizado correctamente',
          updatedFurniture,
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

  // Eliminar Mueble
  @Delete(':id')
  public async remove(@Res() res, @Param('id') id: string) {
    try {
      const responseDeleteFurniture = await this.prFurnitureService.remove(id);
      if (!responseDeleteFurniture) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El mueble no existe',
        });
      } else {
        return res.status(HttpStatus.ACCEPTED).json({
          ok: true,
          responseDeleteFurniture,
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
