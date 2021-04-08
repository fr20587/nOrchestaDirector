import { ITypeExpense } from '../entities/pr-prev-expense.entity';

export class CreatePrPrevExpenseDto {
  user: string;
  projectID: string;
  totalCost: number;
  typeExpense: ITypeExpense[];
}
