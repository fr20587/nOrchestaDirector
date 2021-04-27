import { Schema } from 'mongoose';

export const PrRawMaterialSchema = new Schema(
  {
    cost: { type: Number, require: true },
    index: { type: Number, require: true },
    name: { type: String, require: true },
    origin: { type: String, require: true },
    pos: [{ ref: 'Pos', type: Schema.Types.ObjectId }],
    projectID: { ref: 'Project', type: Schema.Types.ObjectId },
    supplier: { type: String, require: false },
    unit: { type: String, require: true },
    user: { ref: 'User', type: Schema.Types.ObjectId },
  },
  {
    versionKey: false,
  },
);
