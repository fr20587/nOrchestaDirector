import { Document } from 'mongoose';

export class PrPrevExpense extends Document {
  readonly user: string;
  readonly projectID: string;
  readonly name: string;
  readonly cost: number;
}
