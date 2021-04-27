// Modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// Mongoose Module
import { Model } from 'mongoose';

// DTO
import { CreatePrConstructionObjectDto } from './dto/create-pr-construction-object.dto';
import { UpdatePrConstructionObjectDto } from './dto/update-pr-construction-object.dto';

// Entity
import { PrConstructionObject } from './entities/pr-construction-object.entity';

@Injectable()
export class PrConstructionObjectService {
  constructor(
    @InjectModel('PrConstructionObject')
    private readonly prConstructionObjectModel: Model<PrConstructionObject>,
  ) {}

  // Crear objeto de obra
  public async create(
    createPrConstructionObjectDto: CreatePrConstructionObjectDto,
  ) {
    const existConstructionObject = await this.prConstructionObjectModel.findOne(
      {
        name: createPrConstructionObjectDto.name,
      },
    );

    if (existConstructionObject) {
      return 'Ya existe un objeto de obra con este nombre para este proyecto';
    } else {
      const constructionObject = new this.prConstructionObjectModel(
        createPrConstructionObjectDto,
      );
      await constructionObject.save();
      return constructionObject;
    }
  }

  // Obtener todos los objetos de obra
  public async findAll() {
    const constructionObjects = await Promise.all([
      this.prConstructionObjectModel.find({}).populate('user', 'name lastName'),
    ]);
    return constructionObjects;
  }

  // Obtener todos los objetos de obra por proyecto
  public async findAllByProject(projectID) {
    const [constructionObjects] = await Promise.all([
      this.prConstructionObjectModel
        .find({ projectID })
        .populate('user', 'name lastName'),
    ]);

    if (!constructionObjects) {
      return 'No existen objetos de obra para este proyecto';
    } else {
      return constructionObjects;
    }
  }

  // Obtener un objeto de obra
  public async findOne(id: string) {
    const constructionObject = await Promise.all([
      this.prConstructionObjectModel
        .findById(id)
        .populate('user', 'name lastName'),
    ]);
    return constructionObject;
  }

  // Actualizar objeto de obra
  public async update(
    id: string,
    updatePrConstructionObjectDto: UpdatePrConstructionObjectDto,
  ) {
    const updatedConstructionObject = await this.prConstructionObjectModel.findByIdAndUpdate(
      id,
      updatePrConstructionObjectDto,
      {
        new: true,
      },
    );
    return updatedConstructionObject;
  }

  // Eliminar objeto de obra
  public async remove(id: string) {
    await this.prConstructionObjectModel.findByIdAndDelete(id);
    return `Objeto de obra eliminado correctamente`;
  }
}
