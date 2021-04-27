// Modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// Mongoose Module
import { Model } from 'mongoose';

// DTO
import { CreateTypePublicServiceDto } from './dto/create-type-public-service.dto';
import { UpdateTypePublicServiceDto } from './dto/update-type-public-service.dto';

// Entity
import { TypePublicService } from './entities/type-public-service.entity';

@Injectable()
export class TypePublicServiceService {
  constructor(
    @InjectModel('TypePublicService')
    private readonly typePublicServiceModel: Model<TypePublicService>,
  ) {}

  // Crear Servicios Publicos
  public async create(createTypePublicServiceDto: CreateTypePublicServiceDto) {
    const existPublicService = await this.typePublicServiceModel.findOne({
      name: createTypePublicServiceDto.name,
    });

    if (existPublicService) {
      return 'Ya existe un tipo servicio publico con este nombre para este proyecto';
    } else {
      const publicService = new this.typePublicServiceModel(
        createTypePublicServiceDto,
      );
      await publicService.save();
      return publicService;
    }
  }

  // Buscar los servicios publicos
  public async findAll() {
    const publicServices = await this.typePublicServiceModel.find();
    return publicServices;
  }

  // Buscar un servicio publico
  public async findAllById(id: string) {
    const publicService = await this.typePublicServiceModel.findById(id);
    return publicService;
  }

  // Actualizar servicios publicos
  public async update(
    id: string,
    updateTypePublicServiceDto: UpdateTypePublicServiceDto,
  ) {
    const updatedPublicService = await this.typePublicServiceModel.findByIdAndUpdate(
      id,
      updateTypePublicServiceDto,
      {
        new: true,
      },
    );
    return updatedPublicService;
  }

  // Eliminar servicio publico
  public async remove(id: string) {
    await this.typePublicServiceModel.findByIdAndDelete(id);
    return `Tipo de sTypeervicio publico eliminado correctamente`;
  }
}
