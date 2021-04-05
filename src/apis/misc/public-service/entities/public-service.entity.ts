import { Document } from 'mongoose';

export class PublicService extends Document {
  readonly user: string;
  readonly type: string;
  readonly name: string;
  readonly unit: string;
}
