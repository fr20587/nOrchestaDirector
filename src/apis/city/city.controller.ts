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
import { CityService } from './city.service';

// DTO
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  // Crear municipio
  @Post('/')
  public async create(@Res() res, @Body() createCityDto: CreateCityDto) {
    try {
      const city = await this.cityService.create(createCityDto);
      if (city === 'Ya existe un municipio con este nombre') {
        return res.status(HttpStatus.CONFLICT).json({
          ok: false,
          city,
        });
      } else {
        return res.status(HttpStatus.CREATED).json({
          ok: true,
          message: 'Municipio creado correctamente',
          city,
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

  // Obtener todos los municipios
  @Get('/')
  public async findAll(@Res() res) {
    try {
      const cities = await this.cityService.findAll();
      return res.status(HttpStatus.OK).json({
        ok: true,
        cities,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Obtener un minicipio
  @Get(':id')
  public async findOne(@Res() res, @Param('id') id: string) {
    try {
      const city = await this.cityService.findOne(id);
      if (!city) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El municipio no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          city,
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

  // Actualizar municipio
  @Put(':id')
  public async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updateCityDto: UpdateCityDto,
  ) {
    try {
      const updatedCity = await this.cityService.update(id, updateCityDto);

      if (!updatedCity) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'EL municipio no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          message: 'Municipio actualizado correctamente',
          updatedCity,
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

  // Elmininar Municipio
  @Delete(':id')
  public async remove(@Res() res, @Param('id') id: string) {
    try {
      const responseDeleteCity = await this.cityService.remove(id);
      if (!responseDeleteCity) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El municipio no existe',
        });
      } else {
        return res.status(HttpStatus.ACCEPTED).json({
          ok: true,
          responseDeleteCity,
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
