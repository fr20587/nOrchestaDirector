// Nest Modules
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';

// Service
import { ProjectService } from './project.service';

// DTO
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  // Crear proyecto
  @Post('/')
  public async create(@Res() res, @Body() createProjectDto: CreateProjectDto) {
    try {
      const project = await this.projectService.create(createProjectDto);
      if (project === 'Ya existe un proyecto con este nombre') {
        return res.status(HttpStatus.CONFLICT).json({
          ok: false,
          project,
        });
      } else {
        return res.status(HttpStatus.CREATED).json({
          ok: true,
          message: 'Empresa creada correctamente',
          project,
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

  // Obtener todos los proyectos
  @Get('/')
  public async findAll(@Res() res) {
    try {
      const projects = await this.projectService.findAll();
      return res.status(HttpStatus.OK).json({
        ok: true,
        projects,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Obtener un proyecto
  @Get(':id')
  public async findOne(@Res() res, @Param('id') id: string) {
    try {
      const projects = await this.projectService.findOne(id);
      if (!projects) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El proyecto no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          projects,
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

  // Actualizar proyecto
  @Patch(':id')
  public async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updateProjectDto: UpdateProjectDto,
  ) {
    try {
      const updatedProject = await this.projectService.update(
        id,
        updateProjectDto,
      );

      if (!updatedProject) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'EL municipio no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          message: 'Municipio actualizado correctamente',
          updatedProject,
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

  // Eliminar proyecto
  @Delete(':id')
  public async remove(@Res() res, @Param('id') id: string) {
    try {
      const responseDeleteProject = await this.projectService.remove(id);
      if (!responseDeleteProject) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'La empresa no existe',
        });
      } else {
        return res.status(HttpStatus.ACCEPTED).json({
          ok: true,
          responseDeleteProject,
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
