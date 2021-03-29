// Nest Modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// Mongoose Module
import { Model } from 'mongoose';

// DTO
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

// Entity
import { Service } from './entities/service.entity';

@Injectable()
export class ServiceService {
  constructor(
    @InjectModel('Service') private readonly serviceModel: Model<Service>,
  ) {}

  // Crear servicios
  public async create(createServiceDto: CreateServiceDto) {
    const existService = await this.serviceModel.findOne({
      name: createServiceDto.name,
    });

    if (existService) {
      return 'Ya existe un servicio con este nombre';
    } else {
      const service = new this.serviceModel(createServiceDto);
      await service.save();
      return service;
    }
  }

  // Obtener todos los servicios
  public async findAll() {
    const services = await this.serviceModel.find();
    return services;
  }

  // Obtener un servicio
  public async findOne(id: string) {
    const service = await this.serviceModel.findById(id);
    return service;
  }

  // Actualizar servicio
  public async update(id: string, updateServiceDto: UpdateServiceDto) {
    const updatedService = await this.serviceModel.findByIdAndUpdate(
      id,
      updateServiceDto,
      { new: true },
    );
    return updatedService;
  }

  // Eliminar servicio
  public async remove(id: string) {
    await this.serviceModel.findByIdAndDelete(id);
    return `Servicio elimindo correctamente`;
  }
}
