import { Document } from 'mongoose';

export class City extends Document {
  readonly user: string;
  readonly name: string;
  readonly cost: number;
}
