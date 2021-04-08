import { Document } from 'mongoose';

export class PrOfficeItem extends Document {
  readonly user: string;
  readonly projectID: string;
  readonly type: string;
  readonly price: number;
  readonly code: string;
  readonly brand: string;
  readonly sulpplier: string;
}
