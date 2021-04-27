import { Schema } from 'mongoose';

export const ConstructionTaskSchema = new Schema(
  {
    user: { ref: 'User', type: Schema.Types.ObjectId, require: true },
    projectID: { ref: 'Project', type: Schema.Types.ObjectId, require: true },
    constructionObject: {
      ref: 'PrConstructionObject',
      type: Schema.Types.ObjectId,
      require: true,
    },
    name: { type: String, require: true },
    cost: { type: Number, require: true },
    supplier: { type: String, require: false },
  },
  {
    versionKey: false,
  },
);

ConstructionTaskSchema.virtual('projectRef', {
  ref: 'Project',
  localField: 'projectID',
  foreignField: '_id',
});

ConstructionTaskSchema.virtual('userRef', {
  ref: 'User',
  localField: 'user',
  foreignField: '_id',
});

ConstructionTaskSchema.virtual('constructionObjectRef', {
  ref: 'PrConstructionObject',
  localField: 'constructionObject',
  foreignField: '_id',
});
