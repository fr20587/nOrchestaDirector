import { Document } from 'mongoose';

export class TypePublicService extends Document {
  readonly user: string;
  readonly name: string;
}
