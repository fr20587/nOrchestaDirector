import { Document } from 'mongoose';

export class PrEquipment extends Document {
  readonly user: string;
  readonly projectID: string;
  readonly type: string;
  readonly name: string;
  readonly price: number;
  readonly code: string;
  readonly brand: string;
  readonly sulpplier: string;
}
