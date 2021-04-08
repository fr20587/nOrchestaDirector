import { Schema } from 'mongoose';

export const FurnitureSchema = new Schema(
  {
    user: { ref: 'User', type: Schema.Types.ObjectId },
    projectID: { ref: 'Project', type: Schema.Types.ObjectId },
    type: { type: String, require: true },
    name: { type: String, require: true },
    price: { type: Number, require: true },
    code: { type: String, require: true },
    brand: { type: String, require: true },
    supplier: { type: String, require: false },
  },
  {
    versionKey: false,
  },
);

FurnitureSchema.virtual('projectRef', {
  ref: 'Project',
  localField: 'projectID',
  foreignField: '_id',
});

FurnitureSchema.virtual('userRef', {
  ref: 'User',
  localField: 'user',
  foreignField: '_id',
});
