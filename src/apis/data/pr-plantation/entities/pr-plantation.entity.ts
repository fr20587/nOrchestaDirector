import { Document } from 'mongoose';

export class PrPlantation extends Document {
  readonly user: string;
  readonly projectID: string;
  readonly type: string;
  readonly variety: string;
  readonly price: number;
  readonly sulpplier: string;
}
