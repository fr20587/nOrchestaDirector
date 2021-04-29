import { Schema } from 'mongoose';

export const Tbl6Schema = new Schema(
  {
    aci: { type: Number, required: true, min: 0, max: 1 },
    exp: { type: Number, required: true, min: 0 },
    im: { type: Number, required: true, min: 0 },
    percentExp: { type: Number, required: false, min: 0, max: 1 },
    percentIm: { type: Number, required: false, min: 0, max: 1 },
    pos: { ref: 'Pos', type: Schema.Types.ObjectId, required: true },
    price: { type: Number, required: true, min: 0 },
    projectID: { ref: 'Project', type: Schema.Types.ObjectId, required: true },
    qty: { type: Number, required: true, min: 0 },
    unit: { type: String, required: false },
    user: { ref: 'User', type: Schema.Types.ObjectId, required: true },
    value: { type: Number, required: true, min: 0 },
    year: { type: Number, required: true, min: 0 },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

Tbl6Schema.virtual('projectRef', {
  ref: 'Project',
  localField: 'projectID',
  foreignField: '_id',
});

Tbl6Schema.virtual('userRef', {
  ref: 'User',
  localField: 'user',
  foreignField: '_id',
});

Tbl6Schema.virtual('posRef', {
  ref: 'Pos',
  localField: 'pos',
  foreignField: '_id',
});
