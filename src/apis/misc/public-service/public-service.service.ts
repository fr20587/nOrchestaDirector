// Modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// Mongoose Module
import { Model } from 'mongoose';

// DTO
import { CreatePublicServiceDto } from './dto/create-public-service.dto';
import { UpdatePublicServiceDto } from './dto/update-public-service.dto';

// Entity
import { PublicService } from './entities/public-service.entity';

@Injectable()
export class PublicServiceService {
  constructor(
    @InjectModel('PublicService')
    private readonly publicServiceModel: Model<PublicService>,
  ) {}

  // Crear Servicios Publicos
  public async create(createPublicServiceDto: CreatePublicServiceDto) {
    const existPublicService = await this.publicServiceModel.findOne({
      name: createPublicServiceDto.name,
    });

    if (existPublicService) {
      return 'Ya existe un servicio publico con este nombre para este proyecto';
    } else {
      const publicService = new this.publicServiceModel(createPublicServiceDto);
      await publicService.save();
      return publicService;
    }
  }

  // Buscar los servicios publicos
  public async findAll() {
    const publicServices = await this.publicServiceModel.find();
    return publicServices;
  }

  // Buscar un servicio publico
  public async findAllById(id: string) {
    const publicService = await this.publicServiceModel.findById(id);
    return publicService;
  }

  // Actualizar servicios publicos
  public async update(
    id: string,
    updatePublicServiceDto: UpdatePublicServiceDto,
  ) {
    const updatedPublicService = await this.publicServiceModel.findByIdAndUpdate(
      id,
      updatePublicServiceDto,
      {
        new: true,
      },
    );
    return updatedPublicService;
  }

  // Eliminar servicio publico
  public async remove(id: string) {
    await this.publicServiceModel.findByIdAndDelete(id);
    return `Servicio publico eliminado correctamente`;
  }
}
