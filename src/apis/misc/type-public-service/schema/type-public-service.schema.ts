import { Schema } from 'mongoose';

export const TypePublicServiceSchema = new Schema(
  {
    user: { ref: 'User', type: Schema.Types.ObjectId },
    name: { type: String, require: true },
  },
  {
    versionKey: false,
  },
);
