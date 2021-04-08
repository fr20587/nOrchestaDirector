import { Document } from 'mongoose';

export class PrPrevExpense extends Document {
  readonly user: string;
  readonly projectID: string;
  readonly totalCost: number;
  readonly typeExpense: ITypeExpense[];
}

export interface ITypeExpense {
  name: string;
  cost: number;
}
