import { Document } from 'mongoose';

export class Contact extends Document {
  readonly user: string;

  readonly company: string;
  readonly title: string;

  readonly name: string;
  readonly lastName: string;
  readonly gender: string;
  readonly birthday: string;

  readonly phone: string;
  readonly mobile: string;
  readonly home: string;
  readonly email: string;

  readonly address: string;
  readonly country: string;
  readonly state: string;
  readonly city: string;
  readonly postalCode: string;

  readonly img: string;
  readonly imgUrl: string;
}
