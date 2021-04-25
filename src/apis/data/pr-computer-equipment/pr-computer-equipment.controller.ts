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
import { PrComputerEquipmentService } from './pr-computer-equipment.service';

// DTO
import { CreatePrComputerEquipmentDto } from './dto/create-pr-computer-equipment.dto';
import { UpdatePrComputerEquipmentDto } from './dto/update-pr-computer-equipment.dto';

@Controller('pr-computer-equipment')
export class PrComputerEquipmentController {
  constructor(
    private readonly prComputerEquipmentService: PrComputerEquipmentService,
  ) {}

  // Crear equipo de computo
  @Post('/')
  public async create(
    @Res() res,
    @Body() createPrComputerEquipmentDto: CreatePrComputerEquipmentDto,
  ) {
    try {
      const computerEquipment = await this.prComputerEquipmentService.create(
        createPrComputerEquipmentDto,
      );
      return res.status(HttpStatus.CREATED).json({
        ok: true,
        message: 'Equipo de computo creado correctamente',
        computerEquipment,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Obtener todos los equipos de computo
  @Get('/')
  public async findAll(@Res() res) {
    try {
      const computerEquipments = await this.prComputerEquipmentService.findAll();
      return res.status(HttpStatus.OK).json({
        ok: true,
        computerEquipments,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Obtener todos los equipos de computo por proyecto
  @Get('/:projectID')
  public async findAllByProject(
    @Res() res,
    @Param('projectID') projectID: string,
  ) {
    try {
      const computerEquipments = await this.prComputerEquipmentService.findAllByProject(
        projectID,
      );
      return res.status(HttpStatus.OK).json({
        ok: true,
        computerEquipments,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Obtener un equipo de computo
  @Get(':id')
  public async findOne(@Res() res, @Param('id') id: string) {
    try {
      const computerEquipment = await this.prComputerEquipmentService.findOne(
        id,
      );
      if (!computerEquipment) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El equipo de computo no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          computerEquipment,
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

  // Actualizar el equipo de computo
  @Patch(':id')
  public async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updatePrComputerEquipmentDto: UpdatePrComputerEquipmentDto,
  ) {
    try {
      const updatedComputerEquipment = await this.prComputerEquipmentService.update(
        id,
        updatePrComputerEquipmentDto,
      );

      if (!updatedComputerEquipment) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El equipo de computo no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          message: 'Equipo de computo actualizado correctamente',
          updatedComputerEquipment,
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

  // Eliminar equipo de computo
  @Delete(':id')
  public async remove(@Res() res, @Param('id') id: string) {
    try {
      const responseDeleteCoputerEquipment = await this.prComputerEquipmentService.remove(
        id,
      );
      if (!responseDeleteCoputerEquipment) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El mueble no existe',
        });
      } else {
        return res.status(HttpStatus.ACCEPTED).json({
          ok: true,
          responseDeleteCoputerEquipment,
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
