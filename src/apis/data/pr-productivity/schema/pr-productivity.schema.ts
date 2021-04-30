import { Schema } from 'mongoose';

export const ProductivitySchema = new Schema(
  {
    aci: { type: Number, require: true, min: 0 },
    projectID: { ref: 'Project', type: Schema.Types.ObjectId, require: true },
    user: { ref: 'User', type: Schema.Types.ObjectId, require: true },
    year: { type: Number, require: true, min: 0 },
  },
  {
    versionKey: false,
  },
);

ProductivitySchema.virtual('projectRef', {
  ref: 'Project',
  localField: 'projectID',
  foreignField: '_id',
});

ProductivitySchema.virtual('userRef', {
  ref: 'User',
  localField: 'user',
  foreignField: '_id',
});
