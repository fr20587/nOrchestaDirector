import { Schema } from 'mongoose';

export const Tbl6Schema = new Schema(
  {
    user: { ref: 'User', type: Schema.Types.ObjectId },
    projectID: { ref: 'Project', type: Schema.Types.ObjectId },
    posS: [
      {
        //_id: { type: Schema.Types.ObjectId },
        pos: { type: String },
        unit: { type: String },
        years: [
          {
            //_id: { type: Schema.Types.ObjectId },
            year: { type: Number },
            aci: { type: Number },
            price: { type: Number },
            qty: { type: Number },
            value: { type: Number },
            exp: { type: Number },
            im: { type: Number },
          },
        ],
      },
    ],
  },
  {
    timestamps: false,
    versionKey: false,
  },
);

/* Tbl6Schema.method('toJSON', function () {
  const { _id, ...object } = this.toObject();
  return object; 
});*/
