// Modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// Mongoose Module
import { Model } from 'mongoose';

// DTO
import { CreatePrProductivityDto } from './dto/create-pr-productivity.dto';
import { UpdatePrProductivityDto } from './dto/update-pr-productivity.dto';

// Entity
import { PrProductivity } from './entities/pr-productivity.entity';

@Injectable()
export class PrProductivityService {
  constructor(
    @InjectModel('PrProductivity')
    private readonly prProductivityModel: Model<PrProductivity>,
  ) {}

  // Crear productividad
  public async create(createPrProductivityDto: CreatePrProductivityDto) {
    const existProductivity = await this.prProductivityModel.findOne({
      projectID: createPrProductivityDto.projectID,
      year: createPrProductivityDto.year,
    });

    if (existProductivity) {
      return 'Ya existe un productividad para este año en este proyecto';
    } else {
      const productivity = new this.prProductivityModel(
        createPrProductivityDto,
      );
      await productivity.save();
      return productivity;
    }
  }

  // Buscar productividad por projectos
  public async findAllByProject(projectID) {
    const productivities = await this.prProductivityModel.find({ projectID });
    return productivities;
  }

  // Buscar una productividad
  public async findOne(id: string) {
    const productivity = await this.prProductivityModel.findById(id);
    return productivity;
  }

  // Actualizar productividad
  public async update(
    id: string,
    updatePrProductivityDto: UpdatePrProductivityDto,
  ) {
    const updatedProductivity = await this.prProductivityModel.findByIdAndUpdate(
      id,
      updatePrProductivityDto,
      {
        new: true,
      },
    );
    return updatedProductivity;
  }

  // Eliminar productividad
  public async remove(id: string) {
    await this.prProductivityModel.findByIdAndDelete(id);
    return `Productividad eliminada correctamente`;
  }
}
