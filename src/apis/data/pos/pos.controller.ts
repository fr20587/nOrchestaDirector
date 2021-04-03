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
import { PosService } from './pos.service';

// DTO
import { CreatePoDto } from './dto/create-po.dto';
import { UpdatePoDto } from './dto/update-po.dto';

@Controller('pos')
export class PosController {
  constructor(private readonly posService: PosService) {}

  // Crear Producto o Servicio
  @Post('/')
  public async create(@Res() res, @Body() createPoDto: CreatePoDto) {
    try {
      const pos = await this.posService.create(createPoDto);
      if (
        pos ===
        'Ya existe un producto o servicio con este nombre para este proyecto'
      ) {
        return res.status(HttpStatus.CONFLICT).json({
          ok: false,
          pos,
        });
      } else {
        return res.status(HttpStatus.CREATED).json({
          ok: true,
          message: 'Producto o Servicio creado correctamente',
          pos,
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

  // Buscar productos o servicios
  @Get('/')
  public async findAll(@Res() res) {
    try {
      const posS = await this.posService.findAll();
      return res.status(HttpStatus.OK).json({
        ok: true,
        posS,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Buscar productos o servicios por projectos
  @Get('/:projectID')
  public async findAllByProject(
    @Res() res,
    @Param('projectID') projectID: string,
  ) {
    try {
      const posS = await this.posService.findAllByProject(projectID);
      return res.status(HttpStatus.OK).json({
        ok: true,
        posS,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Buscar un producto o servicio
  @Get(':id')
  public async findOne(@Res() res, @Param('id') id: string) {
    try {
      const pos = await this.posService.findOne(id);
      if (!pos) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El producto o servicio no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          pos,
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

  // Actualizar un producto o un servicio
  @Patch(':id')
  public async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updatePoDto: UpdatePoDto,
  ) {
    try {
      const updatedPos = await this.posService.update(id, updatePoDto);

      if (!updatedPos) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'EL producto o servicio no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          message: 'Producto o Servicio actualizado correctamente',
          updatedPos,
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

  // Eliminar un producto o un servicio
  @Delete(':id')
  public async remove(@Res() res, @Param('id') id: string) {
    try {
      const responseDeletePos = await this.posService.remove(id);
      if (!responseDeletePos) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El producto o servicio no existe',
        });
      } else {
        return res.status(HttpStatus.ACCEPTED).json({
          ok: true,
          responseDeletePos,
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
