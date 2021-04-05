import { Document } from 'mongoose';

export class PrPublicService extends Document {
  readonly user: string;
  readonly projectID: string;
  readonly type: IPublicService[];
}

export interface IPublicService {
  serviceID: string;
  type: string;
  name: string;
  unit: string;
  price: number;
}
