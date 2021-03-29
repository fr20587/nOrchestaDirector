import { Schema } from 'mongoose';

export const GenderSchema = new Schema(
  {
    user: { ref: 'User', type: Schema.Types.ObjectId },
    name: { type: String },
  },
  {
    versionKey: false,
  },
);