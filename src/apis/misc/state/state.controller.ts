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
import { StateService } from './state.service';

// DTO
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';

@Controller('state')
export class StateController {
  constructor(private readonly stateService: StateService) {}

  // Crear estado/municipio
  @Post('/')
  public async create(@Res() res, @Body() createStateDto: CreateStateDto) {
    try {
      const state = await this.stateService.create(createStateDto);
      if (state === 'Ya existe un estado/municipio con este nombre') {
        return res.status(HttpStatus.CONFLICT).json({
          ok: false,
          state,
        });
      } else {
        return res.status(HttpStatus.CREATED).json({
          ok: true,
          message: 'Estado/Municipio creado correctamente',
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

  // Obtener todos los estados/municipios
  @Get('/')
  public async findAll(@Res() res) {
    try {
      const states = await this.stateService.findAll();
      return res.status(HttpStatus.OK).json({
        ok: true,
        states,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Obtener todos un estado/municipio
  @Get(':id')
  public async findOne(@Res() res, @Param('id') id: string) {
    try {
      const state = await this.stateService.findOne(id);
      if (!state) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El estado/municipio no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
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

  // Actualizar estado/municipio
  @Put(':id')
  public async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updateStateDto: UpdateStateDto,
  ) {
    try {
      const updatedState = await this.stateService.update(id, updateStateDto);

      if (!updatedState) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'EL estado/municipio no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          message: 'Estado/Municipio actualizado correctamente',
          updatedState,
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

  // Eliminar estado/municipio
  @Delete(':id')
  public async remove(@Res() res, @Param('id') id: string) {
    try {
      const responseDeleteState = await this.stateService.remove(id);
      if (!responseDeleteState) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El estado/municipio no existe',
        });
      } else {
        return res.status(HttpStatus.ACCEPTED).json({
          ok: true,
          responseDeleteState,
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
