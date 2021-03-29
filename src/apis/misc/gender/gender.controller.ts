// Nest Modules
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';

// Service
import { GenderService } from './gender.service';

// DTO
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';

@Controller('gender')
export class GenderController {
  constructor(private readonly genderService: GenderService) {}

  // Crear género
  @Post('/')
  public async create(@Res() res, @Body() createGenderDto: CreateGenderDto) {
    try {
      const gender = await this.genderService.create(createGenderDto);
      if (gender === 'Ya existe un género con este nombre') {
        return res.status(HttpStatus.CONFLICT).json({
          ok: false,
          gender,
        });
      } else {
        return res.status(HttpStatus.CREATED).json({
          ok: true,
          message: 'País creado correctamente',
          gender,
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

  // Obtener todos los géneros
  @Get('/')
  public async findAll(@Res() res) {
    try {
      const genders = await this.genderService.findAll();
      return res.status(HttpStatus.OK).json({
        ok: true,
        genders,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Obtener un género
  @Get(':id')
  public async findOne(@Res() res, @Param('id') id: string) {
    try {
      const gender = await this.genderService.findOne(id);
      if (!gender) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El género no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          gender,
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

  // Actualizar un género
  @Put(':id')
  public async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updateGenderDto: UpdateGenderDto,
  ) {
    try {
      const updatedGender = await this.genderService.update(
        id,
        updateGenderDto,
      );

      if (!updatedGender) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'EL género no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          message: 'Género actualizado correctamente',
          updatedGender,
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

  // Eliminar un género
  @Delete(':id')
  public async remove(@Res() res, @Param('id') id: string) {
    try {
      const responseDeleteGender = await this.genderService.remove(id);
      if (!responseDeleteGender) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El género no existe',
        });
      } else {
        return res.status(HttpStatus.ACCEPTED).json({
          ok: true,
          responseDeleteGender,
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
