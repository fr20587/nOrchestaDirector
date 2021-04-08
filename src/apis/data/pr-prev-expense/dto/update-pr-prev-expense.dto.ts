import { PartialType } from '@nestjs/swagger';
import { ITypeExpense } from '../entities/pr-prev-expense.entity';
import { CreatePrPrevExpenseDto } from './create-pr-prev-expense.dto';

export class UpdatePrPrevExpenseDto extends PartialType(
  CreatePrPrevExpenseDto,
) {
  user: string;
  projectID: string;
  totalCost: number;
  typeExpense: ITypeExpense[];
}
