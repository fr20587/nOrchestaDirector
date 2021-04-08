import { Schema } from 'mongoose';

export const PosSchema = new Schema(
  {
    user: { ref: 'User', type: Schema.Types.ObjectId },
    projectID: { ref: 'Project', type: Schema.Types.ObjectId },
    client: { ref: 'Client', type: Schema.Types.ObjectId },
    name: { type: String, require: true },
    type: { type: String, require: true },
    price: { type: Number, require: true },
    unit: { type: String, require: false },
  },
  {
    versionKey: false,
  },
);
