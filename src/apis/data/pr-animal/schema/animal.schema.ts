import { Schema } from 'mongoose';

export const AnimalSchema = new Schema(
  {
    user: { ref: 'User', type: Schema.Types.ObjectId },
    projectID: { ref: 'Project', type: Schema.Types.ObjectId },
    category: { type: String, require: true },
    race: { type: String, require: true },
    price: { type: Number, require: true },
    supplier: { type: String, require: false },
  },
  {
    versionKey: false,
  },
);

AnimalSchema.virtual('projectRef', {
  ref: 'Project',
  localField: 'projectID',
  foreignField: '_id',
});

AnimalSchema.virtual('userRef', {
  ref: 'User',
  localField: 'user',
  foreignField: '_id',
});
