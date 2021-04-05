// Modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// Mongoose Module
import { Model } from 'mongoose';

// DTO
import { CreateRawMaterialDto } from './dto/create-raw-material.dto';
import { UpdateRawMaterialDto } from './dto/update-raw-material.dto';

// Entity
import { RawMaterial } from './entities/raw-material.entity';

@Injectable()
export class RawMaterialService {
  constructor(
    @InjectModel('RawMaterial')
    private readonly rawMaterialModel: Model<RawMaterial>,
  ) {}

  // Crear materia prima o insumo
  public async create(createRawMaterialDto: CreateRawMaterialDto) {
    const existRawMaterial = await this.rawMaterialModel.findOne({
      name: createRawMaterialDto.name,
      projectID: createRawMaterialDto.projectID,
    });

    if (existRawMaterial) {
      return 'Ya existe una materia prima o insumo con este nombre para este proyecto';
    } else {
      const rawMaterial = new this.rawMaterialModel(createRawMaterialDto);
      await rawMaterial.save();
      return rawMaterial;
    }
  }

  // Buscar todas las materias primas o insumos
  public async findAll() {
    const rawMaterials = await this.rawMaterialModel.find();
    return rawMaterials;
  }

  // Buscar todas las materias primas o insumos por proyecto
  public async findAllByProject(projectID) {
    const rawMaterials = await this.rawMaterialModel.find({ projectID });
    return rawMaterials;
  }

  // Buscar una materia prima o insumo
  public async findOne(id: string) {
    const rawMaterial = await this.rawMaterialModel.findById(id);
    return rawMaterial;
  }

  // Actualizar materia prima o insumo
  public async update(id: string, updateRawMaterialDto: UpdateRawMaterialDto) {
    const updatedRawMaterial = await this.rawMaterialModel.findByIdAndUpdate(
      id,
      updateRawMaterialDto,
      {
        new: true,
      },
    );
    return updatedRawMaterial;
  }

  // Eliminar materia prima o insumo
  public async remove(id: string) {
    await this.rawMaterialModel.findByIdAndDelete(id);
    return `Materia Prima o Insumo eliminado correctamente`;
  }
}
