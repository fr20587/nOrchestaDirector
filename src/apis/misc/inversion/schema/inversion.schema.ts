import { Schema } from 'mongoose';

export const InversionSchema = new Schema(
  {
    user: { ref: 'User', type: Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    initials: { type: String, required: true },
  },
  {
    versionKey: false,
  },
);
