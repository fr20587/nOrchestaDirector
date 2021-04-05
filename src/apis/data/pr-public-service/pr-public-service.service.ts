// Modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// Mongoose Module
import { Model } from 'mongoose';

// DTO
import { CreatePrPublicServiceDto } from './dto/create-pr-public-service.dto';
import { UpdatePrPublicServiceDto } from './dto/update-pr-public-service.dto';

// Entity
import { PrPublicService } from './entities/pr-public-service.entity';

@Injectable()
export class PrPublicServiceService {
  constructor(
    @InjectModel('PrPublicService')
    private readonly prPublicServiceModel: Model<PrPublicService>,
  ) {}

  // Crear Servicios Publicos
  public async create(createPrPublicServiceDto: CreatePrPublicServiceDto) {
    const existPrPublicServices = await this.prPublicServiceModel.findOne({
      projectID: createPrPublicServiceDto.projectID,
    });

    if (existPrPublicServices) {
      return 'Ya existen los servicios publicos para este proyecto';
    } else {
      const prPublicServices = new this.prPublicServiceModel(
        createPrPublicServiceDto,
      );
      await prPublicServices.save();
      return prPublicServices;
    }
  }

  // Buscar todas las materias primas o insumos por proyecto
  public async findByProject(projectID) {
    const prPublicServices = await this.prPublicServiceModel.find({
      projectID,
    });
    return prPublicServices;
  }

  // Actualizar servicios publicos
  public async update(
    id: string,
    updatePrPublicServiceDto: UpdatePrPublicServiceDto,
  ) {
    const updatedPrPublicServices = await this.prPublicServiceModel.findByIdAndUpdate(
      id,
      updatePrPublicServiceDto,
      {
        new: true,
      },
    );
    return updatedPrPublicServices;
  }

  // Eliminar servicio publico
  public async remove(id: string) {
    await this.prPublicServiceModel.findByIdAndDelete(id);
    return `Servicios publicos eliminados correctamente`;
  }
}
