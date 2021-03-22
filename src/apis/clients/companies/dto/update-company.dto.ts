import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanyDto } from './create-company.dto';

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {
  user: string;
  code: string;
  name: string;
  organism: string;
  email: string;
  webSite: string;

  RUEP: string;
  NIT: string;
  CUPCount: string;
  recipientCUPCount: string;
  barnchOfficeCUPCount: string;
  USDCount: string;
  recipientUSDCount: string;
  barnchOfficeUSDCount: string;

  address: string;
  country: string;
  state: string;
  city: string;
  postalCode: string;

  CEO_Name: string;
  CEO_IDNumber: string;
  CEO_Phone: string;
  CFO_Name: string;
  CFO_IDNumber: string;
  CFO_Phone: string;

  logo: string;
  logoUrl: string;
}
