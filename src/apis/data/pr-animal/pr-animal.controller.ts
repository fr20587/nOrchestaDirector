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
import { PrAnimalService } from './pr-animal.service';

// DTO
import { CreatePrAnimalDto } from './dto/create-pr-animal.dto';
import { UpdatePrAnimalDto } from './dto/update-pr-animal.dto';

@Controller('pr-animal')
export class PrAnimalController {
  constructor(private readonly prAnimalService: PrAnimalService) {}

  // Crear animal
  @Post('/')
  public async create(
    @Res() res,
    @Body() createPrAnimalDto: CreatePrAnimalDto,
  ) {
    try {
      const animal = await this.prAnimalService.create(createPrAnimalDto);
      return res.status(HttpStatus.CREATED).json({
        ok: true,
        message: 'Animal creado correctamente',
        animal,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Obetener todos los animales
  @Get('/')
  public async findAll(@Res() res) {
    try {
      const animals = await this.prAnimalService.findAll();
      return res.status(HttpStatus.OK).json({
        ok: true,
        animals,
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
      const animals = await this.prAnimalService.findAllByProject(projectID);
      return res.status(HttpStatus.OK).json({
        ok: true,
        animals,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Obtener un animal
  @Get(':id')
  public async findOne(@Res() res, @Param('id') id: string) {
    try {
      const animal = await this.prAnimalService.findOne(id);
      if (!animal) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El animal no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          animal,
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

  // Actualizar animal
  @Patch(':id')
  public async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updatePrAnimalDto: UpdatePrAnimalDto,
  ) {
    try {
      const updatedAnimal = await this.prAnimalService.update(
        id,
        updatePrAnimalDto,
      );

      if (!updatedAnimal) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El animal no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          message: 'Animal actualizado correctamente',
          updatedAnimal,
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

  // Eliminar animal
  @Delete(':id')
  public async remove(@Res() res, @Param('id') id: string) {
    try {
      const responseDeleteAnimal = await this.prAnimalService.remove(id);
      if (!responseDeleteAnimal) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El animal no existe',
        });
      } else {
        return res.status(HttpStatus.ACCEPTED).json({
          ok: true,
          responseDeleteAnimal,
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
