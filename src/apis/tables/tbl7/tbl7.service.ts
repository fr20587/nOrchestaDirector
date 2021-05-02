// Nest Modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// Mongoose Module
import { Model } from 'mongoose';

// DTO
import { CreateTbl7Dto } from './dto/create-tbl7.dto';
import { UpdateTbl7Dto } from './dto/update-tbl7.dto';

// Entity
import { Tbl7 } from './entities/tbl7.entity';

@Injectable()
export class Tbl7Service {
  constructor(@InjectModel('Tbl7') private readonly tbl7Model: Model<Tbl7>) {}

  // Crear tabla 7
  public async create(createTbl7Dto: CreateTbl7Dto) {
    const tbl7 = new this.tbl7Model(createTbl7Dto);
    await tbl7.save();
    return tbl7;
  }

  // Obtener tabla 7 por proyectos
  public async findOne(projectID: string) {
    const tbl7 = await this.tbl7Model
      .find({ projectID })
      .populate('description', 'name')
      .populate('pos', 'name')
      .populate('productivity', 'index year');
    return tbl7;
  }

  // Actualizar tabla 7
  public async update(id: string, updateTbl7Dto: UpdateTbl7Dto) {
    const updatedTbl7 = await this.tbl7Model.findByIdAndUpdate(
      id,
      updateTbl7Dto,
      { new: true },
    );
    return updatedTbl7;
  }

  // Eliminar tabla 7
  public async remove(id: string) {
    await this.tbl7Model.findByIdAndDelete(id);
    return `Tabla 7 eliminda correctamente`;
  }
}
