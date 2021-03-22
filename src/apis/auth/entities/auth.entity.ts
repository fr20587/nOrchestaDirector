import { Document } from 'mongoose';

export class Auth extends Document {
  readonly name: string;
  readonly lastName: string;
  readonly email: string;
  readonly password: string;
}