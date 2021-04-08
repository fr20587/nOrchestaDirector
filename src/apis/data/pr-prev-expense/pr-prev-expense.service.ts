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
    const existPrevExpenses = await this.prPrevExpenseModel.findOne({
      projectID: createPrPrevExpenseDto.projectID,
    });

    if (existPrevExpenses) {
      return 'Ya existen los gastos previos para este proyecto';
    } else {
      const prevExpenses = new this.prPrevExpenseModel(createPrPrevExpenseDto);
      await prevExpenses.save();
      return prevExpenses;
    }
  }

  // Obtener los gastos previos del proyecto
  public async findAllByProject(projectID) {
    // const prevExpenses = await this.prPrevExpenseModel.find({ projectID });
    const [prevExpenses] = await Promise.all([
      this.prPrevExpenseModel
        .find({ projectID })
        .populate('user', 'name lastName')
        .populate('name', 'name'),
    ]);
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
