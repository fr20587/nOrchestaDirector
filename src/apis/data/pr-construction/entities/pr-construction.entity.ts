import { Document } from 'mongoose';

export class PrConstruction extends Document {
  readonly user: string;
  readonly projectID: string;
  readonly totalCost: number;
  readonly objects: IObject[];
}

export interface IObject {
  name: string;
  totalCost: number;
  task: ITask[];
}

export interface ITask {
  name: string;
  cost: number;
  supplier: string;
}
