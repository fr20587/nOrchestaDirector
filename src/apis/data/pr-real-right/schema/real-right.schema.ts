import { Schema } from 'mongoose';

export const RealRightSchema = new Schema(
  {
    user: { ref: 'User', type: Schema.Types.ObjectId },
    projectID: { ref: 'Project', type: Schema.Types.ObjectId },
    name: { type: String, require: true },
    cost: { type: Number, require: true },
    supplier: { type: String, require: false },
  },
  {
    versionKey: false,
  },
);

RealRightSchema.virtual('projectRef', {
  ref: 'Project',
  localField: 'projectID',
  foreignField: '_id',
});

RealRightSchema.virtual('userRef', {
  ref: 'User',
  localField: 'user',
  foreignField: '_id',
});
