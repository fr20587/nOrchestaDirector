import { Schema } from 'mongoose';

export const CountrySchema = new Schema(
  {
    user: { ref: 'User', type: Schema.Types.ObjectId },
    name: { type: String },
    code: { type: String },
  },
  {
    versionKey: false,
  },
);