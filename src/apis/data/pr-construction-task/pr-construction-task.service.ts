// Modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// Mongoose Module
import { Model } from 'mongoose';

// DTO
import { CreatePrConstructionTaskDto } from './dto/create-pr-construction-task.dto';
import { UpdatePrConstructionTaskDto } from './dto/update-pr-construction-task.dto';

// Entity
import { PrConstructionTask } from './entities/pr-construction-task.entity';

@Injectable()
export class PrConstructionTaskService {
  constructor(
    @InjectModel('PrConstructionTask')
    private readonly prConstructionTaskModel: Model<PrConstructionTask>,
  ) {}

  // Crear accion constructiva
  public async create(
    createPrConstructionTaskDto: CreatePrConstructionTaskDto,
  ) {
    const existConstructionTask = await this.prConstructionTaskModel.findOne({
      projectID: createPrConstructionTaskDto.projectID,
    });

    if (existConstructionTask) {
      return 'Ya existe una acción constructiva con este nombre para este proyecto';
    } else {
      const constructionTask = new this.prConstructionTaskModel(
        createPrConstructionTaskDto,
      );
      await constructionTask.save();
      return constructionTask;
    }
  }

  // Obtener todas las acciones constructivas
  public async findAll() {
    const constructionTasks = await Promise.all([
      this.prConstructionTaskModel.find({}).populate('user', 'name lastName'),
    ]);
    return constructionTasks;
  }

  // Obtener todos los acciones contructivas por proyecto
  public async findAllByProject(projectID) {
    const constructionTasks = await Promise.all([
      this.prConstructionTaskModel
        .find({ projectID })
        .populate('user', 'name lastName'),
    ]);

    if (!constructionTasks) {
      return 'No existen acciones contructivas para este proyecto';
    } else {
      return constructionTasks;
    }
  }

  // Obtener una accion constructiva
  public async findOne(id: string) {
    const constructionTask = await Promise.all([
      this.prConstructionTaskModel
        .findById(id)
        .populate('user', 'name lastName'),
    ]);
    return constructionTask;
  }

  // Actualizar accion constructiva
  public async update(
    id: string,
    updatePrConstructionTaskDto: UpdatePrConstructionTaskDto,
  ) {
    const updatedConstructionTask = await this.prConstructionTaskModel.findByIdAndUpdate(
      id,
      updatePrConstructionTaskDto,
      {
        new: true,
      },
    );
    return updatedConstructionTask;
  }

  // Eliminar accion constructiva
  public async remove(id: string) {
    await this.prConstructionTaskModel.findByIdAndDelete(id);
    return `Acción constructiva eliminada correctamente`;
  }
}
