import { Document } from 'mongoose';

export class Service extends Document {
  readonly user: string;
  readonly name: string;
  readonly initials: string;
}