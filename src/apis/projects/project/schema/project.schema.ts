import { Schema } from 'mongoose';

export const ProjectSchema = new Schema(
  {
    client: { ref: 'Company', type: Schema.Types.ObjectId },
    code: { type: String },
    name: { type: String },
    person: { ref: 'User', type: Schema.Types.ObjectId },
    place: { ref: 'Inversion', type: Schema.Types.ObjectId },
    price: { type: Number },
    service: { ref: 'Service', type: Schema.Types.ObjectId },
    user: { ref: 'User', type: Schema.Types.ObjectId },
  },
  {
    timestamps: false,
    versionKey: false,
  },
);

ProjectSchema.virtual('companyRef', {
  ref: 'Company',
  localField: 'client',
  foreignField: '_id',
});

ProjectSchema.virtual('InversionRef', {
  ref: 'Inversion',
  localField: 'place',
  foreignField: '_id',
});

ProjectSchema.virtual('serviceRef', {
  ref: 'Service',
  localField: 'service',
  foreignField: '_id',
});

ProjectSchema.virtual('personRef', {
  ref: 'User',
  localField: 'person',
  foreignField: '_id',
});

ProjectSchema.virtual('userRef', {
  ref: 'User',
  localField: 'user',
  foreignField: '_id',
});
