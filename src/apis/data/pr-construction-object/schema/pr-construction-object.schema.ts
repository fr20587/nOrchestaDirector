import { Schema } from 'mongoose';

export const ConstructionObjectSchema = new Schema(
  {
    user: { ref: 'User', type: Schema.Types.ObjectId, require: true },
    projectID: { ref: 'Project', type: Schema.Types.ObjectId, require: true },
    name: { type: String, require: true },
  },
  {
    versionKey: false,
  },
);

ConstructionObjectSchema.virtual('projectRef', {
  ref: 'Project',
  localField: 'projectID',
  foreignField: '_id',
});

ConstructionObjectSchema.virtual('userRef', {
  ref: 'User',
  localField: 'user',
  foreignField: '_id',
});
