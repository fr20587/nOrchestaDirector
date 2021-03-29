import { Document } from 'mongoose';

export class Gender extends Document {
  readonly user: string;
  readonly name: string;
}
