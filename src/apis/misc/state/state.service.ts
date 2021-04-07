// Nest Modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// Mongoose Module
import { Model } from 'mongoose';

// DTO
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';

// Entity
import { State } from './entities/state.entity';

@Injectable()
export class StateService {
  constructor(
    @InjectModel('State') private readonly stateModel: Model<State>,
  ) {}

  // Crear estado/municipio
  public async create(createStateDto: CreateStateDto) {
    const existState = await this.stateModel.findOne({
      name: createStateDto.name,
    });

    if (existState) {
      return 'Ya existe un estado/municipio con este nombre';
    } else {
      const state = new this.stateModel(createStateDto);
      await state.save();
      return state;
    }
  }

  // Obtener todos los estados/municipios
  public async findAll() {
    const states = await this.stateModel.find();
    return states;
  }

  // Obtener un estado/municipio
  public async findOne(id: string) {
    const state = await this.stateModel.findById(id);
    return state;
  }

  // Actualizar estado/municipio
  public async update(id: string, updateStateDto: UpdateStateDto) {
    const updatedState = await this.stateModel.findByIdAndUpdate(
      id,
      updateStateDto,
      { new: true },
    );
    return updatedState;
  }

  // Eliminar esatdo/municipio
  public async remove(id: string) {
    await this.stateModel.findByIdAndDelete(id);
    return `Estado/Municipio eliminado correctamente`;
  }
}
