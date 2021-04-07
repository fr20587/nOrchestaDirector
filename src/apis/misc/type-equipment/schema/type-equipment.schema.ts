import { Schema } from 'mongoose';

export const TypeEquipmentSchema = new Schema(
  {
    user: { ref: 'User', type: Schema.Types.ObjectId },
    name: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);