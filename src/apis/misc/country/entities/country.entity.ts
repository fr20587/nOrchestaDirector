import { Document } from 'mongoose';

export class Country extends Document {
  readonly user: string;
  readonly name: string;
  readonly code: string;
}
