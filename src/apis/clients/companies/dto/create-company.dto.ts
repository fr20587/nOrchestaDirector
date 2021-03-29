export class CreateCompanyDto {
  user: string;
  code: string;
  name: string;
  organism: string;
  email: string;
  webSite: string;

  REUP: string;
  NIT: string;
  CUPCount: string;
  recipientCUPCount: string;
  branchOfficeCUPCount: string;
  USDCount: string;
  recipientUSDCount: string;
  branchOfficeUSDCount: string;

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
  review: string;
}
