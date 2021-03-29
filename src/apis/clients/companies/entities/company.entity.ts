import { Document } from 'mongoose';

export class Company extends Document {
  readonly user: string;
  readonly code: string;
  readonly name: string;
  readonly organism: string;
  readonly email: string;
  readonly webSite: string;

  readonly REUP: string;
  readonly NIT: string;
  readonly CUPCount: string;
  readonly recipientCUPCount: string;
  readonly branchOfficeCUPCount: string;
  readonly USDCount: string;
  readonly recipientUSDCount: string;
  readonly branchOfficeUSDCount: string;

  readonly address: string;
  readonly country: string;
  readonly state: string;
  readonly city: string;
  readonly postalCode: string;

  readonly CEO_Name: string;
  readonly CEO_IDNumber: string;
  readonly CEO_Phone: string;
  readonly CFO_Name: string;
  readonly CFO_IDNumber: string;
  readonly CFO_Phone: string;

  readonly logo: string;
  readonly logoUrl: string;
  readonly review: string;
}
