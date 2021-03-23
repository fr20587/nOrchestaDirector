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
import { CompaniesService } from './companies.service';

// DTO
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  // Crear empresa
  @Post('/')
  public async create(@Res() res, @Body() createCompanyDto: CreateCompanyDto) {
    try {
      const company = await this.companiesService.create(createCompanyDto);
      if (company === 'Ya existe una empresa con este nombre') {
        return res.status(HttpStatus.CONFLICT).json({
          ok: false,
          company,
        });
      } else {
        return res.status(HttpStatus.CREATED).json({
          ok: true,
          message: 'Empresa creada correctamente',
          company,
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

  // Obtener todas las empresas
  @Get('/')
  public async findAll(@Res() res) {
    try {
      const companies = await this.companiesService.findAll();
      return res.status(HttpStatus.OK).json({
        ok: true,
        companies,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Obtener una empresa
  @Get(':id')
  public async findOne(@Res() res, @Param('id') id: string) {
    try {
      const companies = await this.companiesService.findOne(id);
      if (!companies) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'La empresa no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          companies,
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

  // Actualizar empresa
  @Put(':id')
  public async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updateCompanyDto: UpdateCompanyDto,
  ) {
    try {
      const updatedCompany = await this.companiesService.update(
        id,
        updateCompanyDto,
      );

      if (!updatedCompany) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'EL municipio no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          message: 'Municipio actualizado correctamente',
          updatedCompany,
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

  // Eliminar empresa
  @Delete(':id')
  public async remove(@Res() res, @Param('id') id: string) {
    try {
      const responseDeleteCompany = await this.companiesService.remove(id);
      if (!responseDeleteCompany) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'La empresa no existe',
        });
      } else {
        return res.status(HttpStatus.ACCEPTED).json({
          ok: true,
          responseDeleteCompany,
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
