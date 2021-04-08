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
import { PrOfficeItemService } from './pr-office-item.service';

// DTO
import { CreatePrOfficeItemDto } from './dto/create-pr-office-item.dto';
import { UpdatePrOfficeItemDto } from './dto/update-pr-office-item.dto';

@Controller('pr-office-item')
export class PrOfficeItemController {
  constructor(private readonly prOfficeItemService: PrOfficeItemService) {}

  // Crear medio de oficina
  @Post('/')
  public async create(
    @Res() res,
    @Body() createPrOfficeItemDto: CreatePrOfficeItemDto,
  ) {
    try {
      const officeItem = await this.prOfficeItemService.create(
        createPrOfficeItemDto,
      );
      return res.status(HttpStatus.CREATED).json({
        ok: true,
        message: 'Mueble creado correctamente',
        officeItem,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Buscar todos los medios de oficina
  @Get('/')
  public async findAll(@Res() res) {
    try {
      const officeItems = await this.prOfficeItemService.findAll();
      return res.status(HttpStatus.OK).json({
        ok: true,
        officeItems,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Obtener todos los medios de oficina por proyecto
  @Get('/:projectID')
  public async findAllByProject(
    @Res() res,
    @Param('projectID') projectID: string,
  ) {
    try {
      const officeItems = await this.prOfficeItemService.findAllByProject(
        projectID,
      );
      return res.status(HttpStatus.OK).json({
        ok: true,
        officeItems,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Obtener un medio de oficina
  @Get(':id')
  public async findOne(@Res() res, @Param('id') id: string) {
    try {
      const officeItem = await this.prOfficeItemService.findOne(id);
      if (!officeItem) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El medio de oficina no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          officeItem,
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

  // Actualizar medio de oficina
  @Patch(':id')
  public async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updatePrOfficeItemDto: UpdatePrOfficeItemDto,
  ) {
    try {
      const updatedOfficeItem = await this.prOfficeItemService.update(
        id,
        updatePrOfficeItemDto,
      );

      if (!updatedOfficeItem) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El medio de oficina no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          message: 'Medio de oficina actualizado correctamente',
          updatedOfficeItem,
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

  // Eliminar medio de oficina
  @Delete(':id')
  public async remove(@Res() res, @Param('id') id: string) {
    try {
      const responseDeleteOfficeItem = await this.prOfficeItemService.remove(
        id,
      );
      if (!responseDeleteOfficeItem) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El medio de oficina no existe',
        });
      } else {
        return res.status(HttpStatus.ACCEPTED).json({
          ok: true,
          responseDeleteOfficeItem,
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
