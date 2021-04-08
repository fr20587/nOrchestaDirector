import { Document } from 'mongoose';

export class PrOtherAsset extends Document {
  readonly user: string;
  readonly projectID: string;
  readonly type: string;
  readonly name: string;
  readonly cost: number;
  readonly owner: string;
}
