// NestJS Module
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Service
import { PrPrevExpenseService } from './pr-prev-expense.service';

// Controller
import { PrPrevExpenseController } from './pr-prev-expense.controller';

// Schema
import { PrevExpenseSchema } from './schema/prev-expense.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'PrPrevExpense', schema: PrevExpenseSchema },
    ]),
  ],
  controllers: [PrPrevExpenseController],
  providers: [PrPrevExpenseService],
})
export class PrPrevExpenseModule {}
