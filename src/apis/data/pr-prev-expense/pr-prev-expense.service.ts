// Modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// Mongoose Module
import { Model } from 'mongoose';

// DTO
import { CreatePrPrevExpenseDto } from './dto/create-pr-prev-expense.dto';
import { UpdatePrPrevExpenseDto } from './dto/update-pr-prev-expense.dto';

// Entity
import { PrPrevExpense } from './entities/pr-prev-expense.entity';

@Injectable()
export class PrPrevExpenseService {
  constructor(
    @InjectModel('PrPrevExpense')
    private readonly prPrevExpenseModel: Model<PrPrevExpense>,
  ) {}

  // Crear gastos previos
  public async create(createPrPrevExpenseDto: CreatePrPrevExpenseDto) {
    const prevExpense = new this.prPrevExpenseModel(createPrPrevExpenseDto);
    await prevExpense.save();
    return prevExpense;
  }

  // Obtener los gastos previos del proyecto
  public async findAllByProject(projectID) {
    const prevExpenses = await this.prPrevExpenseModel
      .find({ projectID })
      .populate('user', 'name lastName')
      .populate('name', 'name cost');
    return prevExpenses;
  }

  // Actualizar gastos previos
  public async update(
    id: string,
    updatePrPrevExpenseDto: UpdatePrPrevExpenseDto,
  ) {
    const updatedPrevExpense = await this.prPrevExpenseModel.findByIdAndUpdate(
      id,
      updatePrPrevExpenseDto,
      {
        new: true,
      },
    );
    return updatedPrevExpense;
  }

  public async remove(id: string) {
    await this.prPrevExpenseModel.findByIdAndDelete(id);
    return `Gastos previos eliminados correctamente`;
  }
}
