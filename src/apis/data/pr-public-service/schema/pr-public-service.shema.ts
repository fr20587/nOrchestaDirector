import { Schema } from 'mongoose';

export const PrPublicServiceSchema = new Schema(
  {
    cost: { type: Number, require: true },
    index: { type: Number, require: true },
    name: { type: String, require: true },
    projectID: { ref: 'Project', type: Schema.Types.ObjectId },
    type: { ref: 'TypePublicService', type: Schema.Types.ObjectId },
    unit: { type: String, require: true },
    user: { ref: 'User', type: Schema.Types.ObjectId },
  },
  {
    versionKey: false,
  },
);

PrPublicServiceSchema.virtual('projectRef', {
  ref: 'Project',
  localField: 'projectID',
  foreignField: '_id',
});

PrPublicServiceSchema.virtual('typePublicService', {
  ref: 'TypePublicService',
  localField: 'type',
  foreignField: '_id',
});

PrPublicServiceSchema.virtual('userRef', {
  ref: 'User',
  localField: 'user',
  foreignField: '_id',
});