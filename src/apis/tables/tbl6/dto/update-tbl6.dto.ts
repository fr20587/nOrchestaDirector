import { PartialType } from '@nestjs/mapped-types';
import { CreateTbl6Dto } from './create-tbl6.dto';

export class UpdateTbl6Dto extends PartialType(CreateTbl6Dto) {
  user: string;
  projectID: string;
  year: number;
  aci: number;
  pos: string;
  productivity: string;
  unit: string;
  qty: number;
  price: number;
  value: number;
  exp: number;
  percentExp: number;
  im: number;
  percentIm: number;
}
