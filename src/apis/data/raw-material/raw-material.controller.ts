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
import { RawMaterialService } from './raw-material.service';

// DTO
import { CreateRawMaterialDto } from './dto/create-raw-material.dto';
import { UpdateRawMaterialDto } from './dto/update-raw-material.dto';

@Controller('raw-material')
export class RawMaterialController {
  constructor(private readonly rawMaterialService: RawMaterialService) {}

  // Crear materia prima o insumo
  @Post('/')
  public async create(
    @Res() res,
    @Body() createRawMaterialDto: CreateRawMaterialDto,
  ) {
    try {
      const rawMaterial = await this.rawMaterialService.create(
        createRawMaterialDto,
      );
      if (
        rawMaterial ===
        'Ya existe una materia prima o insumo con este nombre para este proyecto'
      ) {
        return res.status(HttpStatus.CONFLICT).json({
          ok: false,
          rawMaterial,
        });
      } else {
        return res.status(HttpStatus.CREATED).json({
          ok: true,
          message: 'Producto o Servicio creado correctamente',
          rawMaterial,
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

  // Buscar todas las materias primas o insumos
  @Get('/')
  public async findAll(@Res() res) {
    try {
      const rawMaterials = await this.rawMaterialService.findAll();
      return res.status(HttpStatus.OK).json({
        ok: true,
        rawMaterials,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Buscar todas las materias primas o insumos por proyecto
  @Get('/:projectID')
  public async findAllByProject(
    @Res() res,
    @Param('projectID') projectID: string,
  ) {
    try {
      const rawMaterials = await this.rawMaterialService.findAllByProject(
        projectID,
      );
      return res.status(HttpStatus.OK).json({
        ok: true,
        rawMaterials,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Buscar una materia prima o insumo
  @Get(':id')
  public async findOne(@Res() res, @Param('id') id: string) {
    try {
      const rawMaterial = await this.rawMaterialService.findOne(id);
      if (!rawMaterial) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'La Materia Prima o Insumo no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          rawMaterial,
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

  // Actualizar materia prima o insumo
  @Patch(':id')
  public async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updateRawMaterialDto: UpdateRawMaterialDto,
  ) {
    try {
      const updatedRawMaterial = await this.rawMaterialService.update(
        id,
        updateRawMaterialDto,
      );

      if (!updatedRawMaterial) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'La Materia Prima o Insumo no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          message: 'Producto o Servicio actualizado correctamente',
          updatedRawMaterial,
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

  // Eliminar materia prima o insumo
  @Delete(':id')
  public async remove(@Res() res, @Param('id') id: string) {
    try {
      const responseDeleteRawMaterial = await this.rawMaterialService.remove(
        id,
      );
      if (!responseDeleteRawMaterial) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'La Materia Prima o Insumo no existe',
        });
      } else {
        return res.status(HttpStatus.ACCEPTED).json({
          ok: true,
          responseDeleteRawMaterial,
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
