// Modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// Mongoose Module
import { Model } from 'mongoose';

// DTO
import { CreatePrConstructionDto } from './dto/create-pr-construction.dto';
import { UpdatePrConstructionDto } from './dto/update-pr-construction.dto';

// Entity
import { PrConstruction } from './entities/pr-construction.entity';

@Injectable()
export class PrConstructionService {
  constructor(
    @InjectModel('PrConstruction')
    private readonly prConstructionModel: Model<PrConstruction>,
  ) {}

  // Crear construccion
  public async create(createPrConstructionDto: CreatePrConstructionDto) {
    const existConstruction = await this.prConstructionModel.findOne({
      projectID: createPrConstructionDto.projectID,
    });

    if (existConstruction) {
      return 'Ya existe la construccion para este proyecto';
    } else {
      const construction = new this.prConstructionModel(
        createPrConstructionDto,
      );
      await construction.save();
      return construction;
    }
  }

  // Obtener todas las contrucciones
  public async findAll() {
    // const constructions = await this.prConstructionModel.find();
    const [constructions] = await Promise.all([
      this.prConstructionModel.find({}).populate('user', 'name lastName'),
    ]);
    return constructions;
  }

  // Obtener construccion por proyecto
  public async findAllByProject(projectID) {
    // const constructions = await this.prConstructionModel.find({ projectID });
    const [constructions] = await Promise.all([
      this.prConstructionModel
        .find({ projectID })
        .populate('user', 'name lastName'),
    ]);
    return constructions;
  }

  // Obtener una construccion
  public async findOne(id: string) {
    // const construction = await this.prConstructionModel.findById(id);
    const construction = await Promise.all([
      this.prConstructionModel.findById(id).populate('user', 'name lastName'),
    ]);
    return construction;
  }

  // Actualizar construccion
  public async update(
    id: string,
    updatePrConstructionDto: UpdatePrConstructionDto,
  ) {
    const updatedConstruction = await this.prConstructionModel.findByIdAndUpdate(
      id,
      updatePrConstructionDto,
      {
        new: true,
      },
    );
    return updatedConstruction;
  }

  // Eliminar construccion
  public async remove(id: string) {
    await this.prConstructionModel.findByIdAndDelete(id);
    return `Construccion eliminada correctamente`;
  }
}
