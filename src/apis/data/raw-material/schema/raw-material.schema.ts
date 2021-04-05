import { Schema } from 'mongoose';

export const RawMaterialSchema = new Schema(
  {
    user: { ref: 'User', type: Schema.Types.ObjectId },
    projectID: { ref: 'Project', type: Schema.Types.ObjectId },
    supplier: { type: String, require: false },
    name: { type: String, require: true },
    origin: { type: String, require: true },
    price: { type: Number, require: true },
    unit: { type: String, require: true },
  },
  {
    versionKey: false,
  },
);
