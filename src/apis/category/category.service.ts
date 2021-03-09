// NestJS Modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// Mongoose Module
import { Model } from 'mongoose';

// DTO
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

// Entity
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel('Category') private readonly categoryModel: Model<Category>,
  ) {}

  // Crear categoría
  public async create(createCategoryDto: CreateCategoryDto) {
    const existCategory = await this.categoryModel.findOne({
      name: createCategoryDto.name,
    });

    if (existCategory) {
      return 'Ya existe una categoría con este nombre';
    } else {
      const category = new this.categoryModel(createCategoryDto);
      await category.save();
      return category;
    }
  }

  // Obtener todas las categorías
  public async findAll() {
    const categories = await this.categoryModel.find();
    return categories;
  }

  // Obtener una categoría
  public async findOne(id: string) {
    const category = await this.categoryModel.findById(id);
    return category;
  }

  // Actualizar categoría
  public async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const updatedCategory = await this.categoryModel.findByIdAndUpdate(
      id,
      updateCategoryDto,
      { new: true },
    );
    return updatedCategory;
  }

  // Eliminar categoría
  public async remove(id: string) {
    await this.categoryModel.findByIdAndDelete(id);
    return `Categoría eliminda correctamente`;
  }
}
