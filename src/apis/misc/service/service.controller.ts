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
import { ServiceService } from './service.service';

// DTO
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  // Crear servicio
  @Post('/')
  public async create(@Res() res, @Body() createServiceDto: CreateServiceDto) {
    try {
      const service = await this.serviceService.create(createServiceDto);
      if (service === 'Ya existe un servicio con este nombre') {
        return res.status(HttpStatus.CONFLICT).json({
          ok: false,
          service,
        });
      } else {
        return res.status(HttpStatus.CREATED).json({
          ok: true,
          message: 'Servicio creado correctamente',
          service,
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

  // Obtener todos los servicios
  @Get('/')
  public async findAll(@Res() res) {
    try {
      const services = await this.serviceService.findAll();
      return res.status(HttpStatus.OK).json({
        ok: true,
        services,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Obtener un servicio
  @Get(':id')
  public async findOne(@Res() res, @Param('id') id: string) {
    try {
      const service = await this.serviceService.findOne(id);
      if (!service) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El servicio no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          service,
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

  // Actualizar servicio
  @Put(':id')
  public async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updateServiceDto: UpdateServiceDto,
  ) {
    try {
      const updatedService = await this.serviceService.update(
        id,
        updateServiceDto,
      );

      if (!updatedService) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'EL municipio no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          message: 'Municipio actualizado correctamente',
          updatedService,
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

  // Eliminar servicio
  @Delete(':id')
  public async remove(@Res() res, @Param('id') id: string) {
    try {
      const responseDeleteService = await this.serviceService.remove(id);
      if (!responseDeleteService) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El servicio no existe',
        });
      } else {
        return res.status(HttpStatus.ACCEPTED).json({
          ok: true,
          responseDeleteService,
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
