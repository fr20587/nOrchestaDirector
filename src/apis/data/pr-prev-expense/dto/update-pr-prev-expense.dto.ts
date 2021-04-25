import { PartialType } from '@nestjs/swagger';
import { CreatePrPrevExpenseDto } from './create-pr-prev-expense.dto';

export class UpdatePrPrevExpenseDto extends PartialType(
  CreatePrPrevExpenseDto,
) {
  user: string;
  projectID: string;
  name: string;
  cost: number;
}
