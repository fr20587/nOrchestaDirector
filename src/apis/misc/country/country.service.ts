// Nest Modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// Mongoose Module
import { Model } from 'mongoose';

// DTO
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';

// Entity
import { Country } from './entities/country.entity';

@Injectable()
export class CountryService {
  constructor(
    @InjectModel('Country') private readonly countryModel: Model<Country>,
  ) {}

  // Crear país
  public async create(createCountryDto: CreateCountryDto) {
    const existCountry = await this.countryModel.findOne({
      name: createCountryDto.name,
    });

    if (existCountry) {
      return 'Ya existe un país con este nombre';
    } else {
      const country = new this.countryModel(createCountryDto);
      await country.save();
      return country;
    }
  }

  // Obtener todos los paises
  public async findAll() {
    const countries = await this.countryModel.find();
    return countries;
  }

  // Obtener un país
  public async findOne(id: string) {
    const country = await this.countryModel.findById(id);
    return country;
  }

  // Actualizar país
  public async update(id: string, updateCountryDto: UpdateCountryDto) {
    const updatedCountry = await this.countryModel.findByIdAndUpdate(
      id,
      updateCountryDto,
      { new: true },
    );
    return updatedCountry;
  }

  // Eliminar país
  public async remove(id: string) {
    await this.countryModel.findByIdAndDelete(id);
    return `País elimindo correctamente`;
  }
}
