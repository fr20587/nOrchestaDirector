import { Schema } from 'mongoose';

export const PlantationSchema = new Schema(
  {
    user: { ref: 'User', type: Schema.Types.ObjectId },
    projectID: { ref: 'Project', type: Schema.Types.ObjectId },
    type: { type: String, require: true },
    variety: { type: String, require: true },
    price: { type: Number, require: true },
    supplier: { type: String, require: false },
  },
  {
    versionKey: false,
  },
);

PlantationSchema.virtual('projectRef', {
  ref: 'Project',
  localField: 'projectID',
  foreignField: '_id',
});

PlantationSchema.virtual('userRef', {
  ref: 'User',
  localField: 'user',
  foreignField: '_id',
});
