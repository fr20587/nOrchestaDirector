import { Document } from 'mongoose';

export class State extends Document {
  readonly user: string;
  readonly name: string;
}
