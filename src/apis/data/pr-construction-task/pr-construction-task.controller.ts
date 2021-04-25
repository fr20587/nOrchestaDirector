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
import { PrConstructionTaskService } from './pr-construction-task.service';

// DTO
import { CreatePrConstructionTaskDto } from './dto/create-pr-construction-task.dto';
import { UpdatePrConstructionTaskDto } from './dto/update-pr-construction-task.dto';

@Controller('pr-construction-task')
export class PrConstructionTaskController {
  constructor(
    private readonly prConstructionTaskService: PrConstructionTaskService,
  ) {}

  // Crear accion constructiva
  @Post('/')
  public async create(
    @Res() res,
    @Body() createPrConstructionTaskDto: CreatePrConstructionTaskDto,
  ) {
    try {
      const constructionObject = await this.prConstructionTaskService.create(
        createPrConstructionTaskDto,
      );
      if (
        constructionObject ===
        'Ya existe una acción constructiva con este nombre para este proyecto'
      ) {
        return res.status(HttpStatus.CONFLICT).json({
          ok: false,
          constructionObject,
        });
      } else {
        return res.status(HttpStatus.CREATED).json({
          ok: true,
          message: 'Acción constructiva creada correctamente',
          constructionObject,
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

  // Obtener todas las acciones constructivas
  @Get('/')
  public async findAll(@Res() res) {
    try {
      const constructionTasks = await this.prConstructionTaskService.findAll();
      return res.status(HttpStatus.OK).json({
        ok: true,
        constructionTasks,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Obtener todas las acciones constructivas por proyecto
  @Get('/:projectID')
  public async findAllByProject(
    @Res() res,
    @Param('projectID') projectID: string,
  ) {
    try {
      const constructionTasks = await this.prConstructionTaskService.findAllByProject(
        projectID,
      );
      if (
        constructionTasks ===
        'No existen acciones contructivas para este proyecto'
      ) {
        return res.status(HttpStatus.CONFLICT).json({
          ok: false,
          constructionTasks,
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          constructionTasks,
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

  // Obtener una accion constructiva
  @Get(':id')
  public async findOne(@Res() res, @Param('id') id: string) {
    try {
      const constructionTask = await this.prConstructionTaskService.findOne(id);
      if (!constructionTask) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'La accion constructiva no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          constructionTask,
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

  // Actualizar accion consturctiva
  @Patch(':id')
  public async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updatePrConstructionTaskDto: UpdatePrConstructionTaskDto,
  ) {
    try {
      const updatedConstructionTask = await this.prConstructionTaskService.update(
        id,
        updatePrConstructionTaskDto,
      );

      if (!updatedConstructionTask) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'La acción constuctiva no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          message: 'Acción constuctiva actualizada correctamente',
          updatedConstructionTask,
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

  // Eliminar accion constructiva
  @Delete(':id')
  public async remove(@Res() res, @Param('id') id: string) {
    try {
      const responseDeleteConstructionTask = await this.prConstructionTaskService.remove(
        id,
      );
      if (!responseDeleteConstructionTask) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'La acción constructiva no existe',
        });
      } else {
        return res.status(HttpStatus.ACCEPTED).json({
          ok: true,
          responseDeleteConstructionTask,
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
