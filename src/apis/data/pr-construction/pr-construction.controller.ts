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
import { PrConstructionService } from './pr-construction.service';

// DTO
import { CreatePrConstructionDto } from './dto/create-pr-construction.dto';
import { UpdatePrConstructionDto } from './dto/update-pr-construction.dto';

@Controller('pr-construction')
export class PrConstructionController {
  constructor(private readonly prConstructionService: PrConstructionService) {}

  // Crear construccion
  @Post('/')
  public async create(
    @Res() res,
    @Body() createPrConstructionDto: CreatePrConstructionDto,
  ) {
    try {
      const construction = await this.prConstructionService.create(
        createPrConstructionDto,
      );
      if (construction === 'Ya existe la construccion para este proyecto') {
        return res.status(HttpStatus.CONFLICT).json({
          ok: false,
          construction,
        });
      } else {
        return res.status(HttpStatus.CREATED).json({
          ok: true,
          message: 'Constrccion creada correctamente',
          construction,
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

  // Obtener todas las contrucciones
  @Get('/')
  public async findAll(@Res() res) {
    try {
      const constructions = await this.prConstructionService.findAll();
      return res.status(HttpStatus.OK).json({
        ok: true,
        constructions,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Obtener contruccion por proyecto
  @Get('/:projectID')
  public async findAllByProject(
    @Res() res,
    @Param('projectID') projectID: string,
  ) {
    try {
      const construction = await this.prConstructionService.findAllByProject(
        projectID,
      );
      return res.status(HttpStatus.OK).json({
        ok: true,
        construction,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Obtener una construccion
  @Get(':id')
  public async findOne(@Res() res, @Param('id') id: string) {
    try {
      const construction = await this.prConstructionService.findOne(id);
      if (!construction) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'La construccion no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          construction,
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

  // Actualizar construccion
  @Patch(':id')
  public async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updatePrConstructionDto: UpdatePrConstructionDto,
  ) {
    try {
      const updatedConstruction = await this.prConstructionService.update(
        id,
        updatePrConstructionDto,
      );

      if (!updatedConstruction) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'La construccion no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          message: 'Construccion actualizada correctamente',
          updatedConstruction,
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

  // Eliminar construccion
  @Delete(':id')
  public async remove(@Res() res, @Param('id') id: string) {
    try {
      const responseDeleteConstruction = await this.prConstructionService.remove(
        id,
      );
      if (!responseDeleteConstruction) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'La construccion no existe',
        });
      } else {
        return res.status(HttpStatus.ACCEPTED).json({
          ok: true,
          responseDeleteConstruction,
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
