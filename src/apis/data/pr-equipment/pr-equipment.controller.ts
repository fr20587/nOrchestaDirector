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
import { PrEquipmentService } from './pr-equipment.service';

// DTO
import { CreatePrEquipmentDto } from './dto/create-pr-equipment.dto';
import { UpdatePrEquipmentDto } from './dto/update-pr-equipment.dto';

@Controller('pr-equipment')
export class PrEquipmentController {
  constructor(private readonly prEquipmentService: PrEquipmentService) {}

  // Crear Equipo
  @Post('/')
  public async create(
    @Res() res,
    @Body() createPrEquipmentDto: CreatePrEquipmentDto,
  ) {
    try {
      const equipment = await this.prEquipmentService.create(
        createPrEquipmentDto,
      );
      if (equipment === 'Ya existe este equipo para este proyecto') {
        return res.status(HttpStatus.CONFLICT).json({
          ok: false,
          equipment,
        });
      } else {
        return res.status(HttpStatus.CREATED).json({
          ok: true,
          message: 'Producto o Servicio creado correctamente',
          equipment,
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

  // Obtener todos los equipos
  @Get('/')
  public async findAll(@Res() res) {
    try {
      const equipments = await this.prEquipmentService.findAll();
      return res.status(HttpStatus.OK).json({
        ok: true,
        equipments,
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
      const equipments = await this.prEquipmentService.findAllByProject(
        projectID,
      );
      return res.status(HttpStatus.OK).json({
        ok: true,
        equipments,
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
      const equipment = await this.prEquipmentService.findOne(id);
      if (!equipment) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El equipo no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          equipment,
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

  // Actualizar equipo
  @Patch(':id')
  public async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updatePrEquipmentDto: UpdatePrEquipmentDto,
  ) {
    try {
      const updatedEquipment = await this.prEquipmentService.update(
        id,
        updatePrEquipmentDto,
      );

      if (!updatedEquipment) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El Equipo no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          message: 'Producto o Servicio actualizado correctamente',
          updatedEquipment,
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

  // Eliminar Equipo
  @Delete(':id')
  public async remove(@Res() res, @Param('id') id: string) {
    try {
      const responseDeleteEquipment = await this.prEquipmentService.remove(id);
      if (!responseDeleteEquipment) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El Equipo no existe',
        });
      } else {
        return res.status(HttpStatus.ACCEPTED).json({
          ok: true,
          responseDeleteEquipment,
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
