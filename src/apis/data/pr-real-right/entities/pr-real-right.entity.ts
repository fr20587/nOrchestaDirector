import { Document } from 'mongoose';

export class PrRealRight extends Document {
  readonly user: string;
  readonly projectID: string;
  readonly name: string;
  readonly cost: number;
  readonly sulpplier: string;
}
