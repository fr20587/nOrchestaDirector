import { PartialType } from '@nestjs/mapped-types';
import { CreateContactDto } from './create-contact.dto';

export class UpdateContactDto extends PartialType(CreateContactDto) {
  user: string;
  company: string;
  title: string;
  name: string;
  lastName: string;
  gender: string;
  birthday: string;
  phone: string;
  mobile: string;
  home: string;
  email: string;
  address: string;
  country: string;
  state: string;
  city: string;
  postalCode: string;
  img: string;
  imgUrl: string;
}
