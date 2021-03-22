// Third's Module
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';
export class User extends Document {
  readonly user: string;
  readonly roles: string[];
  readonly name: string;
  readonly lastName: string;
  readonly password: string;
  readonly salt: string;
  readonly email: string;
  readonly phone: string;
  readonly gender: string;
  readonly birthday?: string;
  readonly img?: string;
  readonly street1?: string;
  readonly street2?: string;
  readonly city?: string;
  readonly town?: string;
  readonly state?: string;
  readonly country?: string;
  readonly postalCode?: string;
  readonly info?: string;
}
