import { Schema } from 'mongoose';

export const Tbl7Schema = new Schema(
  {
    description: {
      ref: 'PrRawMaterial',
      type: Schema.Types.ObjectId,
      required: true,
    },
    imp: { type: Number, required: true, min: 0, max: 9999999999 },
    index: { type: Number, required: true, min: 0, max: 1 },
    np: { type: Number, required: true, min: 0, max: 9999999999 },
    percentImp: { type: Number, required: false, min: 0, max: 1 },
    percentNp: { type: Number, required: false, min: 0, max: 1 },
    pos: { ref: 'Pos', type: Schema.Types.ObjectId, required: true },
    price: { type: Number, required: true, min: 0 },
    productivity: {
      ref: 'PrProductivity',
      type: Schema.Types.ObjectId,
      required: true,
    },
    projectID: { ref: 'Project', type: Schema.Types.ObjectId, required: true },
    qty: { type: Number, required: true, min: 0 },
    unit: { type: String, required: false },
    user: { ref: 'User', type: Schema.Types.ObjectId, required: true },
    value: { type: Number, required: true, min: 0, max: 9999999999 },
    year: { type: Number, required: true, min: 0, max: 100 },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

Tbl7Schema.virtual('projectRef', {
  ref: 'Project',
  localField: 'projectID',
  foreignField: '_id',
});

Tbl7Schema.virtual('userRef', {
  ref: 'User',
  localField: 'user',
  foreignField: '_id',
});

Tbl7Schema.virtual('posRef', {
  ref: 'Pos',
  localField: 'pos',
  foreignField: '_id',
});

Tbl7Schema.virtual('rawMaterialRef', {
  ref: 'PrRawMaterial',
  localField: 'description',
  foreignField: '_id',
});

Tbl7Schema.virtual('productivityRef', {
  ref: 'PrProductivity',
  localField: 'productivity',
  foreignField: '_id',
});