// Nest Modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// Mongoose Module
import { Model } from 'mongoose';

// DTO
import { CreateTbl6Dto } from './dto/create-tbl6.dto';
import { UpdateTbl6Dto } from './dto/update-tbl6.dto';

// Entity
import { Tbl6 } from './entities/tbl6.entity';

@Injectable()
export class Tbl6Service {
  constructor(@InjectModel('Tbl6') private readonly tbl6Model: Model<Tbl6>) {}

  // Crear tabla 6
  public async create(createTbl6Dto: CreateTbl6Dto) {
    const tbl6 = new this.tbl6Model(createTbl6Dto);
    await tbl6.save();
    return tbl6;
  }

  // Obtener tabla 6 por proyectos
  public async findOne(projectID: string) {
    const tbl6 = await this.tbl6Model
      .find({ projectID })
      .populate('pos', 'name price unit')
      .populate('productivity', 'aci year');
    return tbl6;
  }

  // Actualizar tabla 6
  public async update(id: string, updateTbl6Dto: UpdateTbl6Dto) {
    const updatedTbl6 = await this.tbl6Model.findByIdAndUpdate(
      id,
      updateTbl6Dto,
      { new: true },
    );
    return updatedTbl6;
  }

  // Eliminar tabla 6
  public async remove(id: string) {
    await this.tbl6Model.findByIdAndDelete(id);
    return `Tabla 6 eliminda correctamente`;
  }
}
