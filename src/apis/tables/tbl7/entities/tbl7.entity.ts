import { Document } from 'mongoose';

export class Tbl7 extends Document {
  readonly description: string;
  readonly imp: number;
  readonly index: number;
  readonly np: number;
  readonly percentImp: number;
  readonly percentNp: number;
  readonly pos: string;
  readonly price: number;
  readonly productivity: string;
  readonly projectID: string;
  readonly qty: number;
  readonly unit: string;
  readonly user: string;
  readonly value: number;
  readonly year: number;
}
