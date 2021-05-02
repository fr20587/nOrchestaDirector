import { Document } from 'mongoose';

export class PrRawMaterial extends Document {
  readonly cost: number;
  readonly index: number;
  readonly name: string;
  readonly origin: string;
  readonly projectID: string;
  readonly sulpplier: string;
  readonly unit: string;
  readonly user: string;
}
