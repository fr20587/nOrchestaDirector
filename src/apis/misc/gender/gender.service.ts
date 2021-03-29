// Nest Modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// Mongoose Module
import { Model } from 'mongoose';

// DTO
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';

// Entity
import { Gender } from './entities/gender.entity';

@Injectable()
export class GenderService {
  constructor(
    @InjectModel('Gender') private readonly genderModel: Model<Gender>,
  ) {}

  // Crear género
  public async create(createGenderDto: CreateGenderDto) {
    const existGender = await this.genderModel.findOne({
      name: createGenderDto.name,
    });

    if (existGender) {
      return 'Ya existe un género con este nombre';
    } else {
      const gender = new this.genderModel(createGenderDto);
      await gender.save();
      return gender;
    }
  }

  // Obtener todos los géneros
  public async findAll() {
    const genders = await this.genderModel.find();
    return genders;
  }

  // Obtener un género
  public async findOne(id: string) {
    const gender = await this.genderModel.findById(id);
    return gender;
  }

  // Actualizar género
  public async update(id: string, updateGenderDto: UpdateGenderDto) {
    const updatedGender = await this.genderModel.findByIdAndUpdate(
      id,
      updateGenderDto,
      { new: true },
    );
    return updatedGender;
  }

  // Eliminar género
  public async remove(id: string) {
    await this.genderModel.findByIdAndDelete(id);
    return `Género elimindo correctamente`;
  }
}
