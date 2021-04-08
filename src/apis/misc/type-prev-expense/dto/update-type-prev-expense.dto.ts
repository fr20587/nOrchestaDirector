import { PartialType } from '@nestjs/swagger';
import { CreateTypePrevExpenseDto } from './create-type-prev-expense.dto';

export class UpdateTypePrevExpenseDto extends PartialType(CreateTypePrevExpenseDto) {
  user: string;
  name: string;
}
