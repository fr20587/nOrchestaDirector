import { PartialType } from '@nestjs/swagger';
import { CreateTbl7Dto } from './create-tbl7.dto';

export class UpdateTbl7Dto extends PartialType(CreateTbl7Dto) {
  description: string;
  imp: number;
  index: number;
  np: number;
  percentImp: number;
  percentNp: number;
  pos: string;
  price: number;
  productivity: string;
  projectID: string;
  qty: number;
  unit: string;
  user: string;
  value: number;
  year: number;
}
