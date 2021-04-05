import { Document } from 'mongoose';

export class RawMaterial extends Document {
  readonly user: string;
  readonly projectID: string;
  readonly sulpplier: string;
  readonly name: string;
  readonly origin: string;
  readonly price: number;
  readonly unit: string;
}
