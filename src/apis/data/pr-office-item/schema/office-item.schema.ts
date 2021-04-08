import { Schema } from 'mongoose';

export const OfficeItemSchema = new Schema(
  {
    user: { ref: 'User', type: Schema.Types.ObjectId },
    projectID: { ref: 'Project', type: Schema.Types.ObjectId },
    type: { type: String, require: true },
    price: { type: Number, require: true },
    code: { type: String, require: false },
    brand: { type: String, require: false },
    supplier: { type: String, require: false },
  },
  {
    versionKey: false,
  },
);

OfficeItemSchema.virtual('projectRef', {
  ref: 'Project',
  localField: 'projectID',
  foreignField: '_id',
});

OfficeItemSchema.virtual('userRef', {
  ref: 'User',
  localField: 'user',
  foreignField: '_id',
});
