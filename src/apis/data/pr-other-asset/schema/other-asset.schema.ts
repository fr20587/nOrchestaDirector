import { Schema } from 'mongoose';

export const OtherAssetSchema = new Schema(
  {
    user: { ref: 'User', type: Schema.Types.ObjectId },
    projectID: { ref: 'Project', type: Schema.Types.ObjectId },
    type: { type: String, require: true },
    name: { type: String, require: true },
    cost: { type: Number, require: true },
    owner: { type: String, require: false },
  },
  {
    versionKey: false,
  },
);

OtherAssetSchema.virtual('projectRef', {
  ref: 'Project',
  localField: 'projectID',
  foreignField: '_id',
});

OtherAssetSchema.virtual('userRef', {
  ref: 'User',
  localField: 'user',
  foreignField: '_id',
});
