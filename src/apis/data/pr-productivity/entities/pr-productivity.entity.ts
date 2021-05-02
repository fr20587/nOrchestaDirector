import { Document } from 'mongoose';

export class PrProductivity extends Document {
  readonly aci: number;
  readonly index: number;
  readonly projectID: string;
  readonly user: string;
  readonly year: number;
}
