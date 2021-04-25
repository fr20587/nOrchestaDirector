import { Schema } from 'mongoose';

export const IiiSchema = new Schema(
  {
    user: { ref: 'User', type: Schema.Types.ObjectId },
    projectID: { ref: 'Project', type: Schema.Types.ObjectId },
    type: { type: String, require: true },
    name: { type: String, require: true },
    cost: { type: Number, require: true },
  },
  {
    versionKey: false,
  },
);

IiiSchema.virtual('projectRef', {
  ref: 'Project',
  localField: 'projectID',
  foreignField: '_id',
});

IiiSchema.virtual('userRef', {
  ref: 'User',
  localField: 'user',
  foreignField: '_id',
});