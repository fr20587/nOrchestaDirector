import { Schema } from 'mongoose';

export const ServiceSchema = new Schema(
  {
    user: { ref: 'User', type: Schema.Types.ObjectId },
    name: { type: String },
    initials: { type: String },
  },
  {
    versionKey: false,
  },
);