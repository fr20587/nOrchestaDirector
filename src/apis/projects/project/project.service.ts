// Nest Modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// Mongoose Module
import { Model } from 'mongoose';

// DTO
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

// Model
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel('Project') private readonly projectModel: Model<Project>,
  ) {}

  // Crear proyecto
  public async create(createProjectDto: CreateProjectDto) {
    const existproject = await this.projectModel.findOne({
      name: createProjectDto.name,
    });

    if (existproject) {
      return 'Ya existe un proyecto con este nombre';
    } else {
      const project = new this.projectModel(createProjectDto);
      await project.save();
      return project;
    }
  }

  // Obtener todos los proyectos
  public async findAll() {
    // const projects = await this.projectModel.find();

    const [projects] = await Promise.all([
      this.projectModel
        .find({})
        .populate('client', 'name')
        .populate('person', 'name lastName')
        .populate('service', 'name initials')
        .populate('user', 'name lastName'),
    ]);
    console.log(projects);
    return projects;
  }

  // Obtener un proyecto
  public async findOne(id: string) {
    const project = await this.projectModel.findById(id);
    return project;
  }

  // Actualizar proyecto
  public async update(id: string, updateProjectDto: UpdateProjectDto) {
    const updatedProject = await this.projectModel.findByIdAndUpdate(
      id,
      updateProjectDto,
      { new: true },
    );
    return updatedProject;
  }

  // Eliminar proyecto
  public async remove(id: string) {
    await this.projectModel.findByIdAndDelete(id);
    return `Proyecto eliminado correctamente`;
  }
}
