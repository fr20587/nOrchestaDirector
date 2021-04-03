import { Document } from 'mongoose';

export class Tbl6 extends Document {
  readonly user: string;
  readonly projectID: string;
  readonly posS: Pos[];
}

export class Pos {
  pos: string;
  type: string;
  unit: string;
  years: Year[];
}

export class Year {
  year: number;
  aci: number;
  price: number;
  qty: number;
  value: number;
  exp: number;
  im: number;
}
