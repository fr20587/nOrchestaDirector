import { Document } from 'mongoose';

export class TypeEquipment extends Document {
  readonly user: string;
  readonly name: string;
}
