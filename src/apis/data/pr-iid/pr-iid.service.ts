// Modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// Mongoose Module
import { Model } from 'mongoose';

// DTO
import { CreatePrIidDto } from './dto/create-pr-iid.dto';
import { UpdatePrIidDto } from './dto/update-pr-iid.dto';

// Entity
import { PrIid } from './entities/pr-iid.entity';

@Injectable()
export class PrIidService {
  constructor(
    @InjectModel('PrIid')
    private readonly prIidModel: Model<PrIid>,
  ) {}

  // Inversion Inducida Directa (IID)
  // Crear IID
  public async create(createPrIidDto: CreatePrIidDto) {
    const iid = new this.prIidModel(createPrIidDto);
    await iid.save();
    return iid;
  }

  // Obtener todas las IID del proyecto
  public async findAllByProject(projectID) {
    // const iids = await this.prIidModel.find({ projectID });
    const [iids] = await Promise.all([
      this.prIidModel.find({ projectID }).populate('user', 'name lastName'),
    ]);
    return iids;
  }

  // Actualizar IID
  public async update(id: string, updatePrIidDto: UpdatePrIidDto) {
    const updatedIid = await this.prIidModel.findByIdAndUpdate(
      id,
      updatePrIidDto,
      {
        new: true,
      },
    );
    return updatedIid;
  }

  // Eliminar IID
  public async remove(id: string) {
    await this.prIidModel.findByIdAndDelete(id);
    return `Inversion Inducida Directa eliminada correctamente`;
  }
}
