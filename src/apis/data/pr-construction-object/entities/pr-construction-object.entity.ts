import { Document } from 'mongoose';

export class PrConstructionObject extends Document {
  readonly user: string;
  readonly projectID: string;
  readonly name: string;
}
