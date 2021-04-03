// Nest Modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// Mongoose Module
import { Model } from 'mongoose';

// DTO
import { CreateInversionDto } from './dto/create-inversion.dto';
import { UpdateInversionDto } from './dto/update-inversion.dto';

// Entity
import { Inversion } from './entities/inversion.entity';

@Injectable()
export class InversionService {
  constructor(
    @InjectModel('Inversion') private readonly inversionModel: Model<Inversion>,
  ) {}

  // Crear Destino de inversión
  public async create(createInversionDto: CreateInversionDto) {
    const existInversion = await this.inversionModel.findOne({
      name: createInversionDto.name,
    });

    if (existInversion) {
      return 'Ya existe un destino de inversión con este nombre';
    } else {
      const inversion = new this.inversionModel(createInversionDto);
      await inversion.save();
      return inversion;
    }
  }

  // Buscar todos los destinos de inversión
  public async findAll() {
    const inversions = await this.inversionModel.find();
    return inversions;
  }

  // Buscar un destino de inversión
  public async findOne(id: string) {
    const inversion = await this.inversionModel.findById(id);
    return inversion;
  }

  // Actualizar un destino de inversión
  public async update(id: string, updateInversionDto: UpdateInversionDto) {
    const updatedInversion = await this.inversionModel.findByIdAndUpdate(
      id,
      updateInversionDto,
      { new: true },
    );
    return updatedInversion;
  }

  // Eliminar un destino de inversión
  public async remove(id: string) {
    await this.inversionModel.findByIdAndDelete(id);
    return `Destino de inversión eliminado correctamente`;
  }
}
