// Modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// Mongoose Module
import { Model } from 'mongoose';

// DTO
import { CreatePrComputerEquipmentDto } from './dto/create-pr-computer-equipment.dto';
import { UpdatePrComputerEquipmentDto } from './dto/update-pr-computer-equipment.dto';

// Entity
import { PrComputerEquipment } from './entities/pr-computer-equipment.entity';

@Injectable()
export class PrComputerEquipmentService {
  constructor(
    @InjectModel('PrComputerEquipment')
    private readonly prComputerEquipmentModel: Model<PrComputerEquipment>,
  ) {}

  // Creqr equipo de computo
  public async create(
    createPrComputerEquipmentDto: CreatePrComputerEquipmentDto,
  ) {
    const computerEquipment = new this.prComputerEquipmentModel(
      createPrComputerEquipmentDto,
    );
    await computerEquipment.save();
    return computerEquipment;
  }

  // Buscar todos los equipos de computo
  public async findAll() {
    // const computerEquipments = await this.prComputerEquipmentModel.find();
    const [computerEquipments] = await Promise.all([
      this.prComputerEquipmentModel.find({}).populate('user', 'name lastName'),
    ]);
    return computerEquipments;
  }

  // Buscar todos los equipos de computo del proyecto
  public async findAllByProject(projectID) {
    // const computerEquipments = await this.prComputerEquipmentModel.find({ projectID });
    const [computerEquipments] = await Promise.all([
      this.prComputerEquipmentModel
        .find({ projectID })
        .populate('user', 'name lastName'),
    ]);
    return computerEquipments;
  }

  // Buscar un equipo de computo
  public async findOne(id: string) {
    // const computerEquipments = await this.prComputerEquipmentModel.findById(id);
    const [computerEquipments] = await Promise.all([
      this.prComputerEquipmentModel
        .findById(id)
        .populate('user', 'name lastName'),
    ]);
    return computerEquipments;
  }

  // Actualizar un equipo de computo
  public async update(
    id: string,
    updatePrComputerEquipmentDto: UpdatePrComputerEquipmentDto,
  ) {
    const updatedComputerEquipment = await this.prComputerEquipmentModel.findByIdAndUpdate(
      id,
      updatePrComputerEquipmentDto,
      {
        new: true,
      },
    );
    return updatedComputerEquipment;
  }

  // Eliminar un equipo de computo
  public async remove(id: string) {
    await this.prComputerEquipmentModel.findByIdAndDelete(id);
    return `Equipo de computo eliminado correctamente`;
  }
}
