export class CreateUserDto {
  user: string;
  roles: string;
  name: string;
  lastName: string;
  password: string;
  email: string;
  phone: string;
  gender: string;
  birthday?: string;
  img?: string;
  street1?: string;
  street2?: string;
  city?: string;
  town?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  info?: string;
}
