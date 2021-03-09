import { Document } from 'mongoose';

export class Category extends Document {
  readonly user: string;
  readonly name: string;
  readonly img: string;
}
