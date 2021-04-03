// Nest Modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// Mongoose Module
import { Model } from 'mongoose';

// DTO
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';

// Entity
import { City } from './entities/city.entity';

@Injectable()
export class CityService {
  constructor(@InjectModel('City') private readonly cityModel: Model<City>) {}

  // Crear municipio
  public async create(createCityDto: CreateCityDto) {
    const existCity = await this.cityModel.findOne({
      name: createCityDto.name,
    });

    if (existCity) {
      return 'Ya existe un municipio con este nombre';
    } else {
      const city = new this.cityModel(createCityDto);
      await city.save();
      return city;
    }
  }

  // Obtener todos los municipio
  public async findAll() {
    const cities = await this.cityModel.find();
    return cities;
  }

  // Obtener un municipio
  public async findOne(id: string) {
    const city = await this.cityModel.findById(id);
    return city;
  }

  // Actualizar minucipio
  public async update(id: string, updateCityDto: UpdateCityDto) {
    const updatedCity = await this.cityModel.findByIdAndUpdate(
      id,
      updateCityDto,
      { new: true },
    );
    return updatedCity;
  }

  // Eliminar municipio
  public async remove(id: string) {
    await this.cityModel.findByIdAndDelete(id);
    return `Municipio eliminado correctamente`;
  }
}
