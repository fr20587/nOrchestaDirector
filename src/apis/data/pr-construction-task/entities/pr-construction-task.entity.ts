import { Document } from 'mongoose';

export class PrConstructionTask extends Document {
  readonly user: string;
  readonly projectID: string;
  readonly name: string;
  readonly cost: number;
  readonly supplier: string;
}
