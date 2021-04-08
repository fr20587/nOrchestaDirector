// Modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// Mongoose Module
import { Model } from 'mongoose';

// DTO
import { CreatePrRealRightDto } from './dto/create-pr-real-right.dto';
import { UpdatePrRealRightDto } from './dto/update-pr-real-right.dto';

// Entity
import { PrRealRight } from './entities/pr-real-right.entity';

@Injectable()
export class PrRealRightService {
  constructor(
    @InjectModel('PrRealRight')
    private readonly prRealRightModel: Model<PrRealRight>,
  ) {}

  // Crear derecho
  public async create(createPrRealRightDto: CreatePrRealRightDto) {
    const right = new this.prRealRightModel(createPrRealRightDto);
    await right.save();
    return right;
  }

  // Obtener todos los derechos del proyecto
  public async findAllByProject(projectID) {
    // const right = await this.prRealRightModel.find({ projectID });
    const [right] = await Promise.all([
      this.prRealRightModel
        .find({ projectID })
        .populate('user', 'name lastName'),
    ]);
    return right;
  }

  // Actualizar derecho
  public async update(id: string, updatePrRealRightDto: UpdatePrRealRightDto) {
    const updatedRight = await this.prRealRightModel.findByIdAndUpdate(
      id,
      updatePrRealRightDto,
      {
        new: true,
      },
    );
    return updatedRight;
  }

  // Eliminar derecho
  public async remove(id: string) {
    await this.prRealRightModel.findByIdAndDelete(id);
    return `Derecho eliminado correctamente`;
  }
}
