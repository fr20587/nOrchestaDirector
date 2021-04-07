// Nest Modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// Mongoose Module
import { Model } from 'mongoose';

// DTO
import { CreateTypeEquipmentDto } from './dto/create-type-equipment.dto';
import { UpdateTypeEquipmentDto } from './dto/update-type-equipment.dto';

// Entity
import { TypeEquipment } from './entities/type-equipment.entity';

@Injectable()
export class TypeEquipmentService {
  constructor(
    @InjectModel('TypeEquipment') private readonly typeEquipmentModel: Model<TypeEquipment>,
  ) {}

  // Crear tipo de equipo
  public async create(createTypeEquipmentDto: CreateTypeEquipmentDto) {
    const existTypeEquipment = await this.typeEquipmentModel.findOne({
      name: createTypeEquipmentDto.name,
    });

    if (existTypeEquipment) {
      return 'Ya existe un tipo de equipo con este nombre';
    } else {
      const typeEquipment = new this.typeEquipmentModel(createTypeEquipmentDto);
      await typeEquipment.save();
      return typeEquipment;
    }
  }

  // Buscar todos los tipos de equipo
  public async findAll() {
    const typesEquipments = await this.typeEquipmentModel.find();
    return typesEquipments;
  }

  // Buscar un tipo de equipo
  public async findOne(id: string) {
    const typesEquipment = await this.typeEquipmentModel.findById(id);
    return typesEquipment;
  }

  // Actualizar equipo
  public async update(
    id: string,
    updateTypeEquipmentDto: UpdateTypeEquipmentDto,
  ) {
    const updatedTypeEquipment = await this.typeEquipmentModel.findByIdAndUpdate(
      id,
      updateTypeEquipmentDto,
      { new: true },
    );
    return updatedTypeEquipment;
  }

  // Eliminar equipo
  public async remove(id: string) {
    await this.typeEquipmentModel.findByIdAndDelete(id);
    return `Tipo de Equipo eliminado correctamente`;
  }
}
