// Modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// Mongoose Module
import { Model } from 'mongoose';

// DTO
import { CreatePrOfficeItemDto } from './dto/create-pr-office-item.dto';
import { UpdatePrOfficeItemDto } from './dto/update-pr-office-item.dto';

// Entity
import { PrOfficeItem } from './entities/pr-office-item.entity';

@Injectable()
export class PrOfficeItemService {
  constructor(
    @InjectModel('PrOfficeItem')
    private readonly prOfficeItemModel: Model<PrOfficeItem>,
  ) {}

  // Crear medio de oficina
  public async create(createPrOfficeItemDto: CreatePrOfficeItemDto) {
    const officeItem = new this.prOfficeItemModel(createPrOfficeItemDto);
    await officeItem.save();
    return officeItem;
  }

  // Buscar todos los medios de oficina
  public async findAll() {
    // const officeItem = await this.prOfficeItemModel.find();
    const [officeItem] = await Promise.all([
      this.prOfficeItemModel.find({}).populate('user', 'name lastName'),
    ]);
    return officeItem;
  }

  // Buscar todos los medios de oficina del proyecto
  public async findAllByProject(projectID) {
    // const officeItem = await this.prOfficeItemModel.find({ projectID });
    const [officeItem] = await Promise.all([
      this.prOfficeItemModel
        .find({ projectID })
        .populate('user', 'name lastName'),
    ]);
    return officeItem;
  }

  // Buscar un medio de oficina
  public async findOne(id: string) {
    // const officeItem = await this.prOfficeItemModel.findById(id);
    const [officeItem] = await Promise.all([
      this.prOfficeItemModel.findById(id).populate('user', 'name lastName'),
    ]);
    return officeItem;
  }

  // Actualizar un medio de oficina
  public async update(
    id: string,
    updatePrOfficeItemDto: UpdatePrOfficeItemDto,
  ) {
    const updatedOfficeItem = await this.prOfficeItemModel.findByIdAndUpdate(
      id,
      updatePrOfficeItemDto,
      {
        new: true,
      },
    );
    return updatedOfficeItem;
  }

  // Eliminar un medio de oficina
  public async remove(id: string) {
    await this.prOfficeItemModel.findByIdAndDelete(id);
    return `Medio de oficina eliminado correctamente`;
  }
}
