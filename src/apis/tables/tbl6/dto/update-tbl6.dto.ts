import { PartialType } from '@nestjs/mapped-types';
import { Pos } from '../entities/tbl6.entity';
import { CreateTbl6Dto } from './create-tbl6.dto';

export class UpdateTbl6Dto extends PartialType(CreateTbl6Dto) {
  user: string;
  projectID: string;
  posS: Pos[];
}
