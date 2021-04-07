// Modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// Mongoose Module
import { Model } from 'mongoose';

// DTO
import { CreatePrEquipmentDto } from './dto/create-pr-equipment.dto';
import { UpdatePrEquipmentDto } from './dto/update-pr-equipment.dto';

// Entity
import { PrEquipment } from './entities/pr-equipment.entity';

@Injectable()
export class PrEquipmentService {
  constructor(
    @InjectModel('PrEquipment')
    private readonly prEquipmentModel: Model<PrEquipment>,
  ) {}

  // Crear Equipo
  public async create(createPrEquipmentDto: CreatePrEquipmentDto) {
    const existEquipment = await this.prEquipmentModel.findOne({
      name: createPrEquipmentDto.name,
      projectID: createPrEquipmentDto.projectID,
    });

    if (existEquipment) {
      return 'Ya existe este equipo para este proyecto';
    } else {
      const equipment = new this.prEquipmentModel(createPrEquipmentDto);
      await equipment.save();
      return equipment;
    }
  }

  // Buscar todos los equipos
  public async findAll() {
    // const equipments = await this.prEquipmentModel.find();
    const equipments = await Promise.all([
      this.prEquipmentModel
        .find({})
        .populate('type', 'name')
        .populate('user', 'name lastName'),
    ]);
    return equipments;
  }

  // Buscar todos los equipos del proyecto
  public async findAllByProject(projectID) {
    // const equipments = await this.prEquipmentModel.find({ projectID });
    const [equipments] = await Promise.all([
      this.prEquipmentModel
        .find({ projectID })
        .populate('type', 'name')
        .populate('user', 'name lastName'),
    ]);
    return equipments;
  }

  // Buscar un equipo
  public async findOne(id: string) {
    // const equipment = await this.prEquipmentModel.findById(id);
    const equipment = await Promise.all([
      this.prEquipmentModel
        .findById(id)
        .populate('type', 'name')
        .populate('user', 'name lastName'),
    ]);
    return equipment;
  }

  // Actualizar Equipo
  public async update(id: string, updatePrEquipmentDto: UpdatePrEquipmentDto) {
    const updatedEquipment = await this.prEquipmentModel.findByIdAndUpdate(
      id,
      updatePrEquipmentDto,
      {
        new: true,
      },
    );
    return updatedEquipment;
  }

  // Eliminar Equipo
  public async remove(id: string) {
    await this.prEquipmentModel.findByIdAndDelete(id);
    return `Equipo eliminado correctamente`;
  }
}
