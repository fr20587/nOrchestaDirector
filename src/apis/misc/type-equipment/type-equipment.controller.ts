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
  Patch,
} from '@nestjs/common';

// Service
import { TypeEquipmentService } from './type-equipment.service';

// DTO
import { CreateTypeEquipmentDto } from './dto/create-type-equipment.dto';
import { UpdateTypeEquipmentDto } from './dto/update-type-equipment.dto';

@Controller('type-equipment')
export class TypeEquipmentController {
  constructor(private readonly typeEquipmentService: TypeEquipmentService) {}

  // Crear tipo de equipo
  @Post('/')
  public async create(
    @Res() res,
    @Body() createTypeEquipmentDto: CreateTypeEquipmentDto,
  ) {
    try {
      const state = await this.typeEquipmentService.create(
        createTypeEquipmentDto,
      );
      if (state === 'Ya existe un tipo de equipo con este nombre') {
        return res.status(HttpStatus.CONFLICT).json({
          ok: false,
          state,
        });
      } else {
        return res.status(HttpStatus.CREATED).json({
          ok: true,
          message: 'Equipo creado correctamente',
          state,
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

  // Obtener todos los tipos de equipos
  @Get('/')
  public async findAll(@Res() res) {
    try {
      const typesEquipments = await this.typeEquipmentService.findAll();
      return res.status(HttpStatus.OK).json({
        ok: true,
        typesEquipments,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Obtener un tipo equipo
  @Get(':id')
  public async findOne(@Res() res, @Param('id') id: string) {
    try {
      const typeEquipment = await this.typeEquipmentService.findOne(id);
      if (!typeEquipment) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El tipo de equipo no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          typeEquipment,
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

  // Actualizar tipo de equipo
  @Patch(':id')
  public async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updateTypeEquipmentDto: UpdateTypeEquipmentDto,
  ) {
    try {
      const updatedTypeEquipment = await this.typeEquipmentService.update(
        id,
        updateTypeEquipmentDto,
      );

      if (!updatedTypeEquipment) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'EL Tipo de equipo no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          message: 'Tipo de equipo actualizado correctamente',
          updatedTypeEquipment,
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

  // Eliminar tippo de equipo
  @Delete(':id')
  public async remove(@Res() res, @Param('id') id: string) {
    try {
      const responseTypeEquipment = await this.typeEquipmentService.remove(id);
      if (!responseTypeEquipment) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El tipo de equipo no existe',
        });
      } else {
        return res.status(HttpStatus.ACCEPTED).json({
          ok: true,
          responseTypeEquipment,
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
