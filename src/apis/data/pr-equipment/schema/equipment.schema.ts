import { Schema } from 'mongoose';

export const EquipmentSchema = new Schema(
  {
    user: { ref: 'User', type: Schema.Types.ObjectId },
    projectID: { ref: 'Project', type: Schema.Types.ObjectId },
    type: { ref: 'TypeEquipment', type: Schema.Types.ObjectId },
    name: { type: String, require: true },
    price: { type: Number, require: true },
    code: { type: String, require: true },
    brand: { type: String, require: true },
    supplier: { type: String, require: false },
  },
  {
    versionKey: false,
  },
);

EquipmentSchema.virtual('projectRef', {
  ref: 'Project',
  localField: 'projectID',
  foreignField: '_id',
});

EquipmentSchema.virtual('typeEquipmentRef', {
  ref: 'TypeEquipment',
  localField: 'type',
  foreignField: '_id',
});

EquipmentSchema.virtual('userRef', {
  ref: 'User',
  localField: 'user',
  foreignField: '_id',
});
