// Modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// Mongoose Module
import { Model } from 'mongoose';

// DTO
import { CreatePrPlantationDto } from './dto/create-pr-plantation.dto';
import { UpdatePrPlantationDto } from './dto/update-pr-plantation.dto';

// Entity
import { PrPlantation } from './entities/pr-plantation.entity';

@Injectable()
export class PrPlantationService {
  constructor(
    @InjectModel('PrPlantation')
    private readonly prPlantationModel: Model<PrPlantation>,
  ) {}

  // Crear plantacion
  public async create(createPrPlantationDto: CreatePrPlantationDto) {
    const plantation = new this.prPlantationModel(createPrPlantationDto);
    await plantation.save();
    return plantation;
  }

  // Obtener todas las plantaciones
  public async findAll() {
    // const plantations = await this.prPlantationModel.find();
    const [plantations] = await Promise.all([
      this.prPlantationModel.find({}).populate('user', 'name lastName'),
    ]);
    return plantations;
  }

  // Buscar todos las plantaciones del proyecto
  public async findAllByProject(projectID) {
    // const plantations = await this.prPlantationModel.find({ projectID });
    const [plantations] = await Promise.all([
      this.prPlantationModel
        .find({ projectID })
        .populate('user', 'name lastName'),
    ]);
    return plantations;
  }

  // Buscar plantacion
  public async findOne(id: string) {
    // const plantataion = await this.prPlantationModel.findById(id);
    const [plantataion] = await Promise.all([
      this.prPlantationModel.findById(id).populate('user', 'name lastName'),
    ]);
    return plantataion;
  }

  // Actualizar plantacion
  public async update(
    id: string,
    updatePrPlantationDto: UpdatePrPlantationDto,
  ) {
    const updatedPlantation = await this.prPlantationModel.findByIdAndUpdate(
      id,
      updatePrPlantationDto,
      {
        new: true,
      },
    );
    return updatedPlantation;
  }

  // Eliminar plantacion
  public async remove(id: string) {
    await this.prPlantationModel.findByIdAndDelete(id);
    return `Plantacion eliminada correctamente`;
  }
}
