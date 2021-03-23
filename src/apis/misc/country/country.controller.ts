// Nest Modules
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Res,
  HttpStatus,
  Put,
} from '@nestjs/common';

// Service
import { CountryService } from './country.service';

// DTO
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  // Crear país
  @Post('/')
  public async create(@Res() res, @Body() createCountryDto: CreateCountryDto) {
    try {
      const country = await this.countryService.create(createCountryDto);
      if (country === 'Ya existe un país con este nombre') {
        return res.status(HttpStatus.CONFLICT).json({
          ok: false,
          country,
        });
      } else {
        return res.status(HttpStatus.CREATED).json({
          ok: true,
          message: 'País creado correctamente',
          country,
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

  // Obtener todos los paises
  @Get('/')
  public async findAll(@Res() res) {
    try {
      const countries = await this.countryService.findAll();
      return res.status(HttpStatus.OK).json({
        ok: true,
        countries,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Obtener un país
  @Get(':id')
  public async findOne(@Res() res, @Param('id') id: string) {
    try {
      const country = await this.countryService.findOne(id);
      if (!country) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El país no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          country,
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

  // Actualizar país
  @Put(':id')
  public async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updateCountryDto: UpdateCountryDto,
  ) {
    try {
      const updatedCountry = await this.countryService.update(
        id,
        updateCountryDto,
      );

      if (!updatedCountry) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'EL país no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          message: 'País actualizado correctamente',
          updatedCountry,
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

  // Eliminar país
  @Delete(':id')
  public async remove(@Res() res, @Param('id') id: string) {
    try {
      const responseDeleteCountry = await this.countryService.remove(id);
      if (!responseDeleteCountry) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El país no existe',
        });
      } else {
        return res.status(HttpStatus.ACCEPTED).json({
          ok: true,
          responseDeleteCountry,
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
