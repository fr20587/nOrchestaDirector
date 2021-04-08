// Modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// Mongoose Module
import { Model } from 'mongoose';

// DTO
import { CreatePrOtherAssetDto } from './dto/create-pr-other-asset.dto';
import { UpdatePrOtherAssetDto } from './dto/update-pr-other-asset.dto';

// Entity
import { PrOtherAsset } from './entities/pr-other-asset.entity';

@Injectable()
export class PrOtherAssetService {
  constructor(
    @InjectModel('PrOtherAsset')
    private readonly prOtherAssetModel: Model<PrOtherAsset>,
  ) {}

  // Crear activo intangible
  public async create(createPrOtherAssetDto: CreatePrOtherAssetDto) {
    const asset = new this.prOtherAssetModel(createPrOtherAssetDto);
    await asset.save();
    return asset;
  }

  // Obtener todos los activos intangibles
  public async findAll() {
    // const assets = await this.prOtherAssetModel.find();
    const [assets] = await Promise.all([
      this.prOtherAssetModel.find({}).populate('user', 'name lastName'),
    ]);
    return assets;
  }

  // Obtener todos los activos del proyecto
  public async findAllByProject(projectID) {
    // const assets = await this.prOtherAssetModel.find({ projectID });
    const [assets] = await Promise.all([
      this.prOtherAssetModel
        .find({ projectID })
        .populate('user', 'name lastName'),
    ]);
    return assets;
  }

  // Obtener un activo intangible
  public async findOne(id: string) {
    // const asset = await this.prOtherAssetModel.findById(id);
    const [asset] = await Promise.all([
      this.prOtherAssetModel.findById(id).populate('user', 'name lastName'),
    ]);
    return asset;
  }

  // Actualizar un activo intangible
  public async update(
    id: string,
    updatePrOtherAssetDto: UpdatePrOtherAssetDto,
  ) {
    const updatedAsset = await this.prOtherAssetModel.findByIdAndUpdate(
      id,
      updatePrOtherAssetDto,
      {
        new: true,
      },
    );
    return updatedAsset;
  }

  // Eliminar un activo intangible
  public async remove(id: string) {
    await this.prOtherAssetModel.findByIdAndDelete(id);
    return `Activo eliminado correctamente`;
  }
}
