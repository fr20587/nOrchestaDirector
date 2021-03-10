import { Schema } from 'mongoose';

export const CitySchema = new Schema(
  {
    user: { ref: 'User', type: Schema.Types.ObjectId },
    name: { type: String },
    cost: { type: Number },
  },
  {
    versionKey: false,
  },
);
