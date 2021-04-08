import { Document } from 'mongoose';

export class TypePrevExpense extends Document {
  readonly user: string;
  readonly name: string;
}