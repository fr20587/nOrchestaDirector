// Modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// Mongoose Module
import { Model } from 'mongoose';

// DTO
import { CreatePrAnimalDto } from './dto/create-pr-animal.dto';
import { UpdatePrAnimalDto } from './dto/update-pr-animal.dto';

// Entity
import { PrAnimal } from './entities/pr-animal.entity';

@Injectable()
export class PrAnimalService {
  constructor(
    @InjectModel('PrAnimal')
    private readonly prAnimalModel: Model<PrAnimal>,
  ) {}

  // Crear animal
  public async create(createPrAnimalDto: CreatePrAnimalDto) {
    const animal = new this.prAnimalModel(createPrAnimalDto);
    await animal.save();
    return animal;
  }

  // Buscar todos los animales
  public async findAll() {
    // const animal = await this.prAnimalModel.find();
    const [animals] = await Promise.all([
      this.prAnimalModel.find({}).populate('user', 'name lastName'),
    ]);
    return animals;
  }

  // Buscar todos los animales del proyecto
  public async findAllByProject(projectID) {
    // const animals = await this.prAnimalModel.find({ projectID });
    const [animals] = await Promise.all([
      this.prAnimalModel.find({ projectID }).populate('user', 'name lastName'),
    ]);
    return animals;
  }

  // Buscar un animal
  public async findOne(id: string) {
    // const animal = await this.prAnimalModel.findById(id);
    const [animal] = await Promise.all([
      this.prAnimalModel.findById(id).populate('user', 'name lastName'),
    ]);
    return animal;
  }

  // Actualizar animal
  public async update(id: string, updatePrAnimalDto: UpdatePrAnimalDto) {
    const updatedAnimal = await this.prAnimalModel.findByIdAndUpdate(
      id,
      updatePrAnimalDto,
      {
        new: true,
      },
    );
    return updatedAnimal;
  }

  // Eliminar animal
  public async remove(id: string) {
    await this.prAnimalModel.findByIdAndDelete(id);
    return `Animal eliminado correctamente`;
  }
}
