// Nest Modules
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';

// Service
import { CategoryService } from './category.service';

// DTO
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('api/category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  // Crear categoría
  @Post('/')
  public async create(
    @Res() res,
    @Body() createCategoryDto: CreateCategoryDto,
  ) {
    try {
      const category = await this.categoryService.create(createCategoryDto);
      if (category === 'Ya existe una categoría con este nombre') {
        return res.status(HttpStatus.CONFLICT).json({
          ok: false,
          category,
        });
      } else {
        return res.status(HttpStatus.CREATED).json({
          ok: true,
          message: 'Categoría creada correctamente',
          category,
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Obtener categorías
  @Get('/')
  public async findAll(@Res() res) {
    try {
      const catgories = await this.categoryService.findAll();
      return res.status(HttpStatus.OK).json({
        ok: true,
        catgories,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Obtener una categoría
  @Get(':id')
  public async findOne(@Res() res, @Param('id') id: string) {
    try {
      const category = await this.categoryService.findOne(id);
      if (!category) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'La categoría no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          category,
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Actualizar categoría
  @Put(':id')
  public async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    try {
      const updatedCategory = await this.categoryService.update(
        id,
        updateCategoryDto,
      );

      if (!updatedCategory) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'La categoría no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          message: 'Categoría actualizada correctamente',
          updatedCategory,
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Eliminar categoría
  @Delete(':id')
  public async remove(@Res() res, @Param('id') id: string) {
    try {
      const responseDeleteCategory = await this.categoryService.remove(id);
      if (!responseDeleteCategory) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'La categoria no existe',
        });
      } else {
        return res.status(HttpStatus.ACCEPTED).json({
          ok: true,
          responseDeleteCategory,
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }
}
