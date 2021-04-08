// NestJS Module
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Service
import { TypePrevExpenseService } from './type-prev-expense.service';

// Controller
import { TypePrevExpenseController } from './type-prev-expense.controller';

// Schema
import { TypePrevExpenseSchema } from './schema/type-prev-expense.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'TypePrevExpense', schema: TypePrevExpenseSchema },
    ]),
  ],
  controllers: [TypePrevExpenseController],
  providers: [TypePrevExpenseService],
})
export class TypePrevExpenseModule {}
