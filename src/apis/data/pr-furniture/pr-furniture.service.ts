// Modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// Mongoose Module
import { Model } from 'mongoose';

// DTO
import { CreatePrFurnitureDto } from './dto/create-pr-furniture.dto';
import { UpdatePrFurnitureDto } from './dto/update-pr-furniture.dto';

// Entity
import { PrFurniture } from './entities/pr-furniture.entity';

@Injectable()
export class PrFurnitureService {
  constructor(
    @InjectModel('PrFurniture')
    private readonly prFurnitureModel: Model<PrFurniture>,
  ) {}

  // Crear Mueble
  public async create(createPrFurnitureDto: CreatePrFurnitureDto) {
    const equipment = new this.prFurnitureModel(createPrFurnitureDto);
    await equipment.save();
    return equipment;
  }

  // Buscar todos los muebles
  public async findAll() {
    // const furniture = await this.prFurnitureModel.find();
    const [furniture] = await Promise.all([
      this.prFurnitureModel.find({}).populate('user', 'name lastName'),
    ]);
    return furniture;
  }

  // Buscar todos los muebles del proyecto
  public async findAllByProject(projectID) {
    // const furniture = await this.prFurnitureModel.find({ projectID });
    const [furniture] = await Promise.all([
      this.prFurnitureModel
        .find({ projectID })
        .populate('user', 'name lastName'),
    ]);
    return furniture;
  }

  // Buscar un mueble
  public async findOne(id: string) {
    // const furniture = await this.prFurnitureModel.findById(id);
    const [furniture] = await Promise.all([
      this.prFurnitureModel.findById(id).populate('user', 'name lastName'),
    ]);
    return furniture;
  }

  // Actualizar mueble
  public async update(id: string, updatePrFurnitureDto: UpdatePrFurnitureDto) {
    const updatedFurniture = await this.prFurnitureModel.findByIdAndUpdate(
      id,
      updatePrFurnitureDto,
      {
        new: true,
      },
    );
    return updatedFurniture;
  }

  // Eliminar mueble
  public async remove(id: string) {
    await this.prFurnitureModel.findByIdAndDelete(id);
    return `Mueble eliminado correctamente`;
  }
}
