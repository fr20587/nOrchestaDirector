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
import { PublicServiceService } from './public-service.service';

// DTO
import { CreatePublicServiceDto } from './dto/create-public-service.dto';
import { UpdatePublicServiceDto } from './dto/update-public-service.dto';

@Controller('public-service')
export class PublicServiceController {
  constructor(private readonly publicServiceService: PublicServiceService) {}

  // Crear servicio publico
  @Post('/')
  public async create(
    @Res() res,
    @Body() createPublicServiceDto: CreatePublicServiceDto,
  ) {
    try {
      const publicService = await this.publicServiceService.create(
        createPublicServiceDto,
      );
      if (
        publicService ===
        'Ya existe un servicio publico con este nombre para este proyecto'
      ) {
        return res.status(HttpStatus.CONFLICT).json({
          ok: false,
          publicService,
        });
      } else {
        return res.status(HttpStatus.CREATED).json({
          ok: true,
          message: 'Servicio publico creado correctamente',
          publicService,
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

  // Buscar los servicios publicos
  @Get('/')
  public async findAll(@Res() res) {
    try {
      const publicServices = await this.publicServiceService.findAll();
      return res.status(HttpStatus.OK).json({
        ok: true,
        publicServices,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Buscar los servicios publicos
  @Get(':id')
  public async findById(@Res() res, @Param('id') id: string) {
    try {
      const publicService = await this.publicServiceService.findAllById(id);
      return res.status(HttpStatus.OK).json({
        ok: true,
        publicService,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Actualizar servicios publicos
  @Patch(':id')
  public async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updatePublicServiceDto: UpdatePublicServiceDto,
  ) {
    try {
      const updatedPublicService = await this.publicServiceService.update(
        id,
        updatePublicServiceDto,
      );

      if (!updatedPublicService) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El servicio publico no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          message: 'Servicio publico actualizado correctamente',
          updatedPublicService,
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

  // Eliminar servicio publico
  @Delete(':id')
  public async remove(@Res() res, @Param('id') id: string) {
    try {
      const responseDeletePublicService = await this.publicServiceService.remove(
        id,
      );
      if (!responseDeletePublicService) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El servicio publico no existe',
        });
      } else {
        return res.status(HttpStatus.ACCEPTED).json({
          ok: true,
          responseDeletePublicService,
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
