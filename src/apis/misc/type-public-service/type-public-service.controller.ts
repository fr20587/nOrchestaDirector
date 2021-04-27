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
import { TypePublicServiceService } from './type-public-service.service';

// DTO
import { CreateTypePublicServiceDto } from './dto/create-type-public-service.dto';
import { UpdateTypePublicServiceDto } from './dto/update-type-public-service.dto';

@Controller('type-public-service')
export class TypePublicServiceController {
  constructor(
    private readonly typePublicServiceService: TypePublicServiceService,
  ) {}

  // Crear servicio publico
  @Post('/')
  public async create(
    @Res() res,
    @Body() createTypePublicServiceDto: CreateTypePublicServiceDto,
  ) {
    try {
      const publicService = await this.typePublicServiceService.create(
        createTypePublicServiceDto,
      );
      if (
        publicService ===
        'Ya existe un tipo servicio publico con este nombre para este proyecto'
      ) {
        return res.status(HttpStatus.CONFLICT).json({
          ok: false,
          publicService,
        });
      } else {
        return res.status(HttpStatus.CREATED).json({
          ok: true,
          message: 'Tipo Servicio publico creado correctamente',
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
      const typePublicServices = await this.typePublicServiceService.findAll();
      return res.status(HttpStatus.OK).json({
        ok: true,
        typePublicServices,
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
      const typePublicService = await this.typePublicServiceService.findAllById(
        id,
      );
      return res.status(HttpStatus.OK).json({
        ok: true,
        typePublicService,
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
    @Body() updateTypePublicServiceDto: UpdateTypePublicServiceDto,
  ) {
    try {
      const updatedTypePublicService = await this.typePublicServiceService.update(
        id,
        updateTypePublicServiceDto,
      );

      if (!updatedTypePublicService) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El tipo de servicio publico no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          message: 'Tipo de servicio público actualizado correctamente',
          updatedTypePublicService,
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
      const responseDeleteTypePublicService = await this.typePublicServiceService.remove(
        id,
      );
      if (!responseDeleteTypePublicService) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El tipo de servicio publico no existe',
        });
      } else {
        return res.status(HttpStatus.ACCEPTED).json({
          ok: true,
          responseDeleteTypePublicService,
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
