import { Pos } from '../entities/tbl6.entity';

export class CreateTbl6Dto {
  user: string;
  projectID: string;
  posS: Pos[];
}
