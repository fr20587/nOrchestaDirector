import { Schema } from 'mongoose';

export const ProjectSchema = new Schema(
  {
    user: { ref: 'User', type: Schema.Types.ObjectId },

    name: { type: String },
    code: { type: String },
    place: { ref: 'Place', type: Schema.Types.ObjectId },

    price: { type: Number },
    client: { ref: 'Company', type: Schema.Types.ObjectId },
    service: { ref: 'Service', type: Schema.Types.ObjectId },
    person: { ref: 'User', type: Schema.Types.ObjectId },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

ProjectSchema.virtual('companyRef', {
  ref: 'Company',
  localField: 'client',
  foreignField: '_id',
});

ProjectSchema.virtual('serviceRef', {
  ref: 'Service',
  localField: 'service',
  foreignField: '_id',
});

ProjectSchema.virtual('userRef', {
  ref: 'User',
  localField: 'person',
  foreignField: '_id',
});
