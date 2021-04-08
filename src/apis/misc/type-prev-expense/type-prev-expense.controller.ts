// Nest Modules
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Res,
  HttpStatus,
  Patch,
} from '@nestjs/common';

// Service
import { TypePrevExpenseService } from './type-prev-expense.service';

// DTO
import { CreateTypePrevExpenseDto } from './dto/create-type-prev-expense.dto';
import { UpdateTypePrevExpenseDto } from './dto/update-type-prev-expense.dto';

@Controller('type-prev-expense')
export class TypePrevExpenseController {
  constructor(
    private readonly typePrevExpenseService: TypePrevExpenseService,
  ) {}

  // Crear tipo de gasto previo
  @Post('/')
  public async create(
    @Res() res,
    @Body() createTypePrevExpenseDto: CreateTypePrevExpenseDto,
  ) {
    try {
      const typePrevExpense = await this.typePrevExpenseService.create(
        createTypePrevExpenseDto,
      );
      if (
        typePrevExpense === 'Ya existe un tipo de gasto previo con este nombre'
      ) {
        return res.status(HttpStatus.CONFLICT).json({
          ok: false,
          typePrevExpense,
        });
      } else {
        return res.status(HttpStatus.CREATED).json({
          ok: true,
          message: 'Equipo creado correctamente',
          typePrevExpense,
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

  // Obtener todos los gastos previos
  @Get('/')
  public async findAll(@Res() res) {
    try {
      const typesPrevExpense = await this.typePrevExpenseService.findAll();
      return res.status(HttpStatus.OK).json({
        ok: true,
        typesPrevExpense,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Obtener un gasto previo
  @Get(':id')
  public async findOne(@Res() res, @Param('id') id: string) {
    try {
      const typePrevExpense = await this.typePrevExpenseService.findOne(id);
      if (!typePrevExpense) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El tipo de gasto previo no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          typePrevExpense,
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

  // Actualizar tipo de gasto previo
  @Patch(':id')
  public async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updateTypePrevExpenseDto: UpdateTypePrevExpenseDto,
  ) {
    try {
      const updatedTypePrevExpense = await this.typePrevExpenseService.update(
        id,
        updateTypePrevExpenseDto,
      );

      if (!updatedTypePrevExpense) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'EL tipo de gasto previo no existe',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          message: 'Tipo de gasto previo actualizado correctamente',
          updatedTypePrevExpense,
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

  // Eliminar tipo de gasto previo
  @Delete(':id')
  public async remove(@Res() res, @Param('id') id: string) {
    try {
      const responseTypePrevExpense = await this.typePrevExpenseService.remove(
        id,
      );
      if (!responseTypePrevExpense) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'El tipo de gasto previo no existe',
        });
      } else {
        return res.status(HttpStatus.ACCEPTED).json({
          ok: true,
          responseTypePrevExpense,
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
