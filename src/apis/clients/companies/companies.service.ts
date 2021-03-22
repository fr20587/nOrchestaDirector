// Nest Modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// Mongoose Module
import { Model } from 'mongoose';

// DTO
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

// Model
import { Company } from './entities/company.entity';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectModel('Company') private readonly companyModel: Model<Company>,
  ) {}

  // Crear empresa
  public async create(createCompanyDto: CreateCompanyDto) {
    const existCompany = await this.companyModel.findOne({
      name: createCompanyDto.name,
    });

    if (existCompany) {
      return 'Ya existe una empresa con este nombre';
    } else {
      const company = new this.companyModel(createCompanyDto);
      await company.save();
      return company;
    }
  }

  // Obtener todos las empresas
  public async findAll() {
    const companies = await this.companyModel.find();
    return companies;
  }

  // Obtener una empresa
  public async findOne(id: string) {
    const company = await this.companyModel.findById(id);
    return company;
  }

  // Actualizar empresa
  public async update(id: string, updateCompanyDto: UpdateCompanyDto) {
    const updatedCompany = await this.companyModel.findByIdAndUpdate(
      id,
      updateCompanyDto,
      { new: true },
    );
    return updatedCompany;
  }

  // Eliminar empresa
  public async remove(id: string) {
    await this.companyModel.findByIdAndDelete(id);
    return `Empresa eliminado correctamente`;
  }
}
