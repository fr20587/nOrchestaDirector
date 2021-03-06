import { Document } from 'mongoose';

export class PrPublicService extends Document {
  readonly cost: number;
  readonly index: number;
  readonly name: string;
  readonly projectID: string;
  readonly type: string;
  readonly unit: string;
  readonly user: string;
}
