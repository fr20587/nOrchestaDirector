// Modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// Mongoose Module
import { Model } from 'mongoose';

// DTO
import { CreatePoDto } from './dto/create-po.dto';
import { UpdatePoDto } from './dto/update-po.dto';

// Entity
import { Pos } from './entities/pos.entity';

@Injectable()
export class PosService {
  constructor(@InjectModel('Pos') private readonly posModel: Model<Pos>) {}

  // Crear Producto o Servicio
  public async create(createPoDto: CreatePoDto) {
    const existPos = await this.posModel.findOne({
      name: createPoDto.name,
      projectID: createPoDto.projectID,
    });

    if (existPos) {
      return 'Ya existe un producto o servicio con este nombre para este proyecto';
    } else {
      const pos = new this.posModel(createPoDto);
      await pos.save();
      return pos;
    }
  }

  // Buscar productos o servicios
  public async findAll() {
    const posS = await this.posModel.find();
    return posS;
  }

  // Buscar productos o servicios por projectos
  public async findAllByProject(projectID) {
    const posS = await this.posModel.find({ projectID });
    return posS;
  }

  // Buscar un producto o servicio
  public async findOne(id: string) {
    const pos = await this.posModel.findById(id);
    return pos;
  }

  // Actualizar un producto o un servicio
  public async update(id: string, updatePoDto: UpdatePoDto) {
    const updatedPos = await this.posModel.findByIdAndUpdate(id, updatePoDto, {
      new: true,
    });
    return updatedPos;
  }

  // Eliminar un producto o un servicio
  public async remove(id: string) {
    await this.posModel.findByIdAndDelete(id);
    return `Producto o un servicio eliminado correctamente`;
  }
}
