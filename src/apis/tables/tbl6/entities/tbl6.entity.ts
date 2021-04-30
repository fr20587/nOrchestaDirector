import { Document } from 'mongoose';

export class Tbl6 extends Document {
  readonly user: string;
  readonly projectID: string;
  readonly year: number;
  readonly aci: number;
  readonly pos: string;
  readonly productivity: string;
  readonly unit: string;
  readonly qty: number;
  readonly price: number;
  readonly value: number;
  readonly exp: number;
  readonly percentExp: number;
  readonly im: number;
  readonly percentIm: number;
}
