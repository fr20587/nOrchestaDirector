import { Document } from 'mongoose';

export class Pos extends Document {
  readonly user: string;
  readonly projectID: string;
  readonly client: string;
  readonly name: string;
  readonly type: string;
  readonly price: number;
  readonly unit: string;
}
