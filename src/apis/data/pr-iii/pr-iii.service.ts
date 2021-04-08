// Modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// Mongoose Module
import { Model } from 'mongoose';

// DTO
import { CreatePrIiiDto } from './dto/create-pr-iii.dto';
import { UpdatePrIiiDto } from './dto/update-pr-iii.dto';

// Entity
import { PrIii } from './entities/pr-iii.entity';

@Injectable()
export class PrIiiService {
  constructor(
    @InjectModel('PrIii')
    private readonly prIiiModel: Model<PrIii>,
  ) {}

  // Inversion Inducida Indirecta (Iii)
  // Crear Iii
  public async create(createPrIiiDto: CreatePrIiiDto) {
    const iii = new this.prIiiModel(createPrIiiDto);
    await iii.save();
    return iii;
  }

  // Obtener todas las Iii del proyecto
  public async findAllByProject(projectID) {
    // const iiis = await this.prIiiModel.find({ projectID });
    const [iiis] = await Promise.all([
      this.prIiiModel.find({ projectID }).populate('user', 'name lastName'),
    ]);
    return iiis;
  }

  // Actualizar Iii
  public async update(id: string, updatePrIiiDto: UpdatePrIiiDto) {
    const updatedIii = await this.prIiiModel.findByIdAndUpdate(
      id,
      updatePrIiiDto,
      {
        new: true,
      },
    );
    return updatedIii;
  }

  // Eliminar Iii
  public async remove(id: string) {
    await this.prIiiModel.findByIdAndDelete(id);
    return `Inversion Inducida Indirecta eliminada correctamente`;
  }
}
