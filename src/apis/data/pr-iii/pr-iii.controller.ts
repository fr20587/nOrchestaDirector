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
import { PrIiiService } from './pr-iii.service';

// DTO
import { CreatePrIiiDto } from './dto/create-pr-iii.dto';
import { UpdatePrIiiDto } from './dto/update-pr-iii.dto';

@Controller('pr-iii')
export class PrIiiController {
  constructor(private readonly prIiiService: PrIiiService) {}

  // Crear III
  @Post('/')
  public async create(@Res() res, @Body() createPrIiiDto: CreatePrIiiDto) {
    try {
      const iii = await this.prIiiService.create(createPrIiiDto);
      return res.status(HttpStatus.CREATED).json({
        ok: true,
        message: 'Inversion Inducida Indirecta creada correctamente',
        iii,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Obtener todos las IID por proyecto
  @Get('/:projectID')
  public async findAllByProject(
    @Res() res,
    @Param('projectID') projectID: string,
  ) {
    try {
      const iiis = await this.prIiiService.findAllByProject(projectID);
      return res.status(HttpStatus.OK).json({
        ok: true,
        iiis,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Actualizar III
  @Patch(':id')
  public async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updatePrIiiDto: UpdatePrIiiDto,
  ) {
    try {
      const updatedIii = await this.prIiiService.update(id, updatePrIiiDto);

      if (!updatedIii) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'La inversion no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          message: 'Inversion actualizada correctamente',
          updatedIii,
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

  // Eliminar III
  @Delete(':id')
  public async remove(@Res() res, @Param('id') id: string) {
    try {
      const responseDeleteIii = await this.prIiiService.remove(id);
      if (!responseDeleteIii) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'La inversion no existe',
        });
      } else {
        return res.status(HttpStatus.ACCEPTED).json({
          ok: true,
          responseDeleteIii,
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
