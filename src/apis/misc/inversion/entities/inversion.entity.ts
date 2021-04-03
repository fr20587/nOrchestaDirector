import { Document } from 'mongoose';

export class Inversion extends Document {
  readonly user: string;
  readonly name: string;
}
