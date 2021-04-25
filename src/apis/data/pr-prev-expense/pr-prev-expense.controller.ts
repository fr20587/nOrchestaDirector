// Nest Modules
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Res,
} from '@nestjs/common';

// Service
import { PrPrevExpenseService } from './pr-prev-expense.service';

// DTO
import { CreatePrPrevExpenseDto } from './dto/create-pr-prev-expense.dto';
import { UpdatePrPrevExpenseDto } from './dto/update-pr-prev-expense.dto';

@Controller('pr-prev-expense')
export class PrPrevExpenseController {
  constructor(private readonly prPrevExpenseService: PrPrevExpenseService) {}

  // Crear gastos previos
  @Post()
  public async create(
    @Res() res,
    @Body() createPrPrevExpenseDto: CreatePrPrevExpenseDto,
  ) {
    try {
      const prevExpense = await this.prPrevExpenseService.create(
        createPrPrevExpenseDto,
      );
      return res.status(HttpStatus.CREATED).json({
        ok: true,
        message: 'Gastos previos creados correctamente',
        prevExpense,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Obtener gastos previos por proyecto
  @Get('/:projectID')
  public async findAllByProject(
    @Res() res,
    @Param('projectID') projectID: string,
  ) {
    try {
      const prevExpenses = await this.prPrevExpenseService.findAllByProject(
        projectID,
      );
      return res.status(HttpStatus.OK).json({
        ok: true,
        prevExpenses,
      });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        message: 'Error inesperado.',
      });
    }
  }

  // Actualizar gastos previos
  @Patch(':id')
  public async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updatePrPrevExpenseDto: UpdatePrPrevExpenseDto,
  ) {
    try {
      const updatedPrevExpenses = await this.prPrevExpenseService.update(
        id,
        updatePrPrevExpenseDto,
      );

      if (!updatedPrevExpenses) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'Los gastos previos no existen',
        });
      } else {
        return res.status(HttpStatus.OK).json({
          ok: true,
          message: 'Gastos previos actualizados correctamente',
          updatedPrevExpenses,
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

  // Eliminar gastos previos
  @Delete(':id')
  public async remove(@Res() res, @Param('id') id: string) {
    try {
      const responseDeletePrevExpenses = await this.prPrevExpenseService.remove(
        id,
      );
      if (!responseDeletePrevExpenses) {
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          message: 'Los gastos previos no existen',
        });
      } else {
        return res.status(HttpStatus.ACCEPTED).json({
          ok: true,
          responseDeletePrevExpenses,
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
