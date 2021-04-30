import { Document } from 'mongoose';

export class Project extends Document {
  readonly client: string;
  readonly code: string;
  readonly name: string;
  readonly person: string;
  readonly place: string;
  readonly price: number;
  readonly service: string;
  readonly user: string;
}
