import { Document } from 'mongoose';

export class PrAnimal extends Document {
  readonly user: string;
  readonly projectID: string;
  readonly category: string;
  readonly race: string;
  readonly price: number;
  readonly sulpplier: string;
}

