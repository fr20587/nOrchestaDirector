import { Document } from 'mongoose';

export class Project extends Document {
  readonly user: string;

  readonly name: string;
  readonly code: string;
  readonly place: string;

  readonly price: number;
  readonly client: string;
  readonly service: string;
  readonly person: string;
}
