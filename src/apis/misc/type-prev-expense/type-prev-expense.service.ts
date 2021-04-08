// Nest Modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// Mongoose Module
import { Model } from 'mongoose';

// DTO
import { CreateTypePrevExpenseDto } from './dto/create-type-prev-expense.dto';
import { UpdateTypePrevExpenseDto } from './dto/update-type-prev-expense.dto';

// Entity
import { TypePrevExpense } from './entities/type-prev-expense.entity';

@Injectable()
export class TypePrevExpenseService {
  constructor(
    @InjectModel('TypePrevExpense')
    private readonly typePrevExpenseModel: Model<TypePrevExpense>,
  ) {}

  // Crear tipo de gasto previo
  public async create(createTypePrevExpenseDto: CreateTypePrevExpenseDto) {
    const existTypePrevExpense = await this.typePrevExpenseModel.findOne({
      name: createTypePrevExpenseDto.name,
    });

    if (existTypePrevExpense) {
      return 'Ya existe un tipo de gasto previo con este nombre';
    } else {
      const typePrevExpenxe = new this.typePrevExpenseModel(
        createTypePrevExpenseDto,
      );
      await typePrevExpenxe.save();
      return typePrevExpenxe;
    }
  }

  // Obtener todos los gastos previos
  public async findAll() {
    const typePrevExpenxes = await this.typePrevExpenseModel.find();
    return typePrevExpenxes;
  }

  // Obtener un gasto previo
  public async findOne(id: string) {
    const typePrevExpenxe = await this.typePrevExpenseModel.findById(id);
    return typePrevExpenxe;
  }

  // Actualizar un tipo de gasto previo
  public async update(
    id: string,
    updateTypePrevExpenseDto: UpdateTypePrevExpenseDto,
  ) {
    const updatedTypePrevExpense = await this.typePrevExpenseModel.findByIdAndUpdate(
      id,
      updateTypePrevExpenseDto,
      { new: true },
    );
    return updatedTypePrevExpense;
  }

  // Eliminar tipo de gasto previo
  public async remove(id: string) {
    await this.typePrevExpenseModel.findByIdAndDelete(id);
    return `Tipo de Gasto Previo eliminado correctamente`;
  }
}
