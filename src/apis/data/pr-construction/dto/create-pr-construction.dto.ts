import { IObject } from '../entities/pr-construction.entity';

export class CreatePrConstructionDto {
  user: string;
  projectID: string;
  totalCost: number;
  objects: IObject[];
}
