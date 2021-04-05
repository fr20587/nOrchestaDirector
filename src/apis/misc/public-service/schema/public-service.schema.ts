import { Schema } from 'mongoose';

export const PublicServiceSchema = new Schema(
  {
    user: { ref: 'User', type: Schema.Types.ObjectId },
    type: { type: String, require: true },
    name: { type: String, require: true },
    unit: { type: String, require: true },
  },
  {
    versionKey: false,
  },
);
