import { Schema } from 'mongoose';

export const ConstructionSchema = new Schema(
  {
    user: { ref: 'User', type: Schema.Types.ObjectId },
    projectID: { ref: 'Project', type: Schema.Types.ObjectId },
    totalCost: { type: Number, require: true },
    objects: [
      {
        name: { type: String, require: true },
        totalCost: { type: Number, require: true },
        tasks: [
          {
            name: { type: String, require: true },
            cost: { type: Number, require: true },
            supplier: { type: String, require: false },
          },
        ],
      },
    ],
  },
  {
    versionKey: false,
  },
);

ConstructionSchema.virtual('projectRef', {
  ref: 'Project',
  localField: 'projectID',
  foreignField: '_id',
});

ConstructionSchema.virtual('userRef', {
  ref: 'User',
  localField: 'user',
  foreignField: '_id',
});
