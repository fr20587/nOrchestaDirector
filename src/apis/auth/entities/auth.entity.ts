import { Document } from 'mongoose';

export class Auth extends Document {
  readonly email: string;
  readonly password: string;
}